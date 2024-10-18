const jwt = require("jsonwebtoken");
const db = require("../../config/db");
const updatequantity = (req, res) => {
  const token = req.headers["token"];
  const itemId = req.params.id;
  const { quantity } = req.body;

  // Verify JWT token
  if (!token) return res.status(403).send({ message: "No token provided" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(500).send({ message: "Failed to authenticate token" });

    const user_id = decoded.userId;

    const query = "UPDATE cart SET quantity = ? WHERE user_id = ? AND id = ?";
    db.query(query, [quantity, user_id, itemId], (err, results) => {
      if (err) return res.status(500).send({ message: "Database error" });
      if (results.affectedRows === 0) {
        return res
          .status(404)
          .send({ message: "Item not found or does not belong to user" });
      }
      res.status(200).send({ message: "Item quantity updated successfully" });
    });
  });
};

module.exports = updatequantity;
