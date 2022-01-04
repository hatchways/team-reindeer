const Conversation = require("../models/Conversation");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /conversation
// @desc Create new conversation
//@access Private
exports.createConversation = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    res.status(400);
    throw new Error("UserId param not sent with request");
  }
});
