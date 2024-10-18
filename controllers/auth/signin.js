const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../../config/db");

const signin = (req, res) => {
  const { username, password } = req.body;


  // Check if the user exists
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = results[0];

    // Compare the entered password with the hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

      res.json({ token, message: "Login successful" });
    });
  });
};

module.exports = signin;
