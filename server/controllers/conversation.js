const Conversation = require("../models/Conversation");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /conversations
// @desc Create new conversation
//@access Private
exports.createConversation = asyncHandler(async (req, res, next) => {
  const { receiverId } = req.body;

  if (!receiverId) {
    res.status(400);
    throw new Error("ReceiverId param not sent with request");
  }

  let isConversation = await Conversation.find({
    isGroupConversation: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user.id } } },
      { users: { $elemMatch: { $eq: receiverId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isConversation = await User.populate(isConversation, {
    path: "latestMessage.sender",
    select: "username  email",
  });

  if (isConversation.length > 0)
    return res
      .status(200)
      .json({ success: true, conversation: isConversation[0] });

  let conversationData = {
    conversationName: "sender",
    isGroupConversation: false,
    users: [req.user.id, userId],
  };

  const createdConversation = await Conversation.create(conversationData);
  const fullConversation = await Conversation.findOne({
    _id: createdConversation._id,
  }).populate("users", "-password");
  res.status(200).json({ success: true, conversation: fullConversation });
});

// @route GET /conversations
// @desc Fetch all conversions of a user
//@access Private
exports.getAllConversations = asyncHandler(async (req, res) => {
  let conversations = await Conversation.find({
    users: { $elemMatch: { $eq: req.user.id } },
  })
    .populate("users", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 });
  res
    .status(200)
    .json({ success: true, conversations, count: conversations.length });
});
