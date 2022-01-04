const Conversation = require("../models/Conversation");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /conversation/create
// @desc Create new conversation
//@access Private
exports.createConversation = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400);
    throw new Error("UserId param not sent with request");
  }

  let isConversation = await Conversation.find({
    isGroupConversation: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isConversation = await User.populate(isConversation, {
    path: "latestMessage.sender",
    select: "name  email",
  });

  if (isConversation.length > 0) {
    res.send(isConversation[0]);
  } else {
    let conversationData = {
      conversationName: "sender",
      isGroupConversation: false,
      users: [req.user._id, userId],
    };

    const createdConversation = await Conversation.create(conversationData);
    const fullConversation = await Chat.findOne({
      _id: createdConversation._id,
    }).populate("users", "-password");
    res.status(200).json(fullConversation);
  }
});
