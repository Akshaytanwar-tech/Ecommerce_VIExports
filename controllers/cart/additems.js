const jwt = require("jsonwebtoken");
const db = require("../../config/db");

const additems = (req, res) => {
  const { item_name, item_price, quantity } = req.body;
  const token = req.headers["token"];

  // Verify JWT token
  if (!token) return res.status(403).send({ message: "No token provided" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(500).send({ message: "Failed to authenticate token" });
    

    const user_id = decoded.userId;

    const query =
      "INSERT INTO cart (user_id, item_name, item_price, quantity) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [user_id, item_name, item_price, quantity || 1],
      (err, results) => {
        if (err) return res.status(500).send({ message: err });
        res.status(201).send({ message: "Item added to cart" });
      }
    );
  });
};

module.exports = additems;
