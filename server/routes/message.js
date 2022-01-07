const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  sendMessage,
  messagesForAConversation,
} = require("../controllers/message");

router.route("/").post(protect, sendMessage);

router.route("/:conversationId").get(protect, messagesForAConversation);

module.exports = router;
