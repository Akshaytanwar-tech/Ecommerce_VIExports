const express = require("express");
const router = express.Router();
const additems = require("../controllers/cart/additems");
const removeitems = require("../controllers/cart/removeitems");
const fetchitems = require("../controllers/cart/fetchitem");
const updatequantity = require("../controllers/cart/updatequantity");

//route to add item to cart
router.post("/add", additems);

// Auth Api-2 remove item for cart
router.delete("/remove/:id", removeitems);

// api 3: fetch items of cart
router.post("/fetchcart", fetchitems);

//api 4: to update the quantity of the cart item
router.put("/update/:id", updatequantity);

module.exports = router;
