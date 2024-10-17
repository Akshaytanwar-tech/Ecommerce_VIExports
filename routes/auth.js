const express = require("express");
const router = express.Router();
const signin = require("../controllers/signin");
const signup = require("../controllers/signup");

//route to signup
router.post("/signup", signup);

// Auth Api-2 for Sign In a user.
router.post("/signin", signin);

module.exports = router;
