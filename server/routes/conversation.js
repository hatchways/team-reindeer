const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createConversation } = require("../controllers/conversation");

router.route("/create").post(protect, createConversation);

module.exports = router;
