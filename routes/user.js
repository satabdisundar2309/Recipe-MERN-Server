const express = require("express");
const { register, login, profile } = require("../controllers/user.js");
const { Authenticate } = require("../middlewares/auth.js");

const router = express.Router();

// user register
router.post("/register", register);

// user login
router.post("/login", login);

// profile

router.get("/user", Authenticate, profile);

module.exports = { router };
