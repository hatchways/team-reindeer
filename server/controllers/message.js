const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

//@route POST /message
//@desc Create New Message
//@access Private
exports.sendMessage = asyncHandler(async (req, res) => {
  const { content, conversationId } = req.body;

  let newMessage = {
    sender: req.user.id,
    content: content,
    conversation: conversationId,
  };

  let message = await Message.create(newMessage);

  message = await message.populate("sender", "username");
  message = await message.populate("conversation");
  message = await User.populate(message, {
    path: "conversation.users",
    select: "username email",
  });

  await Conversation.findByIdAndUpdate(req.body.conversationId, {
    latestMessage: message,
  });

  res.status(200).json({ success: true, data: message });
});
