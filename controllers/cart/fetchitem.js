const jwt = require("jsonwebtoken");
const JWT_SECRET = "akshay123";
const db = require("../../config/db");
const fetchitems = (req, res) => {
  const token = req.headers["token"];

  // Verify JWT token
  if (!token) return res.status(403).send({ message: "No token provided" });
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(500).send({ message: "Failed to authenticate token" });

    const user_id = decoded.userId;

    const query = "SELECT * FROM cart WHERE user_id = ?";
    db.query(query, [user_id], (err, results) => {
      if (err) return res.status(500).send({ message: "Database error" });
      res.status(200).send(results);
    });
  });
};

module.exports = fetchitems;
