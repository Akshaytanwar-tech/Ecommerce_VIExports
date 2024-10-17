const bcrypt = require("bcryptjs");
const db = require("../config/db");
const jwt = require('jsonwebtoken');

// Replace 'your_jwt_secret_key' with a strong secret key
const JWT_SECRET = 'akshay123';

const signup = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Error hashing password" });
    }
    console.log(hashedPassword);

    // Save the user to the database
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(query, [username, hashedPassword], (error, result) => {
      if (error) {
        if (error.code === "ER_DUP_ENTRY") {
          return res.status(400).json({ error: "Username already exists" });
        }
        console.log(error);
        return res.status(500).json({ error: "Database error" });
      }
      // After successful signup, create a JWT token
      const token = jwt.sign({ userId: result.insertId }, JWT_SECRET);

      res.status(201).json({
        message: "User registered successfully!",
        token,
      });
    });
  });
};

module.exports = signup;
