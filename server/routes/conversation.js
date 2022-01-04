const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createConversation,
  getAllConversations,
} = require("../controllers/conversation");

router
  .route("/")
  .post(protect, createConversation)
  .get(protect, getAllConversations);

module.exports = router;
