const express = require("express");
const createorder = require("../controllers/orders/createorder");
const fetchorder = require("../controllers/orders/fetchorder");
const bulkorder = require("../controllers/orders/bulkorder");
const router = express.Router();

//route to add item to cart
router.post("/", createorder);
router.post("/bulk", bulkorder);
router.get("/", fetchorder);

module.exports = router;
