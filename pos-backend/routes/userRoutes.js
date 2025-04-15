const express = require("express");
const router = express.Router();

// Authentication Routes
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
