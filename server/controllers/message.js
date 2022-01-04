const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const asyncHandler = require("express-async-handler");

// @route  GET /messages/:conversationId
// @desc Get all messages for a particular conversation
// @access Private
exports.messagesForAConversation = asyncHandler(async (req, res) => {
  const messages = await Message.find({
    conversation: req.params.conversationId,
  });

  res.status(200).json({ success: true, messages });
});

// @route POST /message
// @desc Create New Message
// @access Private
exports.sendMessage = asyncHandler(async (req, res) => {
  const { content, conversationId } = req.body;

  const newMessage = {
    sender: req.user.id,
    content: content,
    conversation: conversationId,
  };

  const message = await Message.create(newMessage);

  await Conversation.findByIdAndUpdate(req.body.conversationId, {
    latestMessage: message,
  });

  res.status(200).json({ success: true, message });
});
