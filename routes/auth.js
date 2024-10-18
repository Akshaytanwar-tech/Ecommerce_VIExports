const express = require("express");
const router = express.Router();
const signin = require("../controllers/auth/signin");
const signup = require("../controllers/auth/signup");

//route to signup
router.post("/signup", signup);

// Auth Api-2 for Sign In a user.
router.post("/signin", signin);

module.exports = router;
