const jwt = require("jsonwebtoken");
const JWT_SECRET = "akshay123";
const db = require('../../config/db')
const bulkorder = (req, res) => {
  const orders = req.body.array;
  
   // Expecting an array of orders
  const token = req.headers["token"];

  // Verify JWT token
  if (!token) return res.status(403).send({ message: "No token provided" });
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(500).send({ message: "Failed to authenticate token" });

    const user_id = decoded.userId;

    // Prepare the query and values for bulk insert
    const query =
      "INSERT INTO orders (user_id, item_name, item_price, quantity, customer_name, customer_address) VALUES ?";
    const values = orders.map((order) => [
      user_id,
      order.item_name,
      order.item_price,
      order.quantity,
      req.body.customer_name,
      req.body.customer_address,
    ]);

    db.query(query, [values], (err, results) => {
      if (err) return res.status(500).send({ message: err });
      res
        .status(201)
        .send({
          message: `${results.affectedRows} orders created successfully`,
        });
    });
  });
};
module.exports = bulkorder;
