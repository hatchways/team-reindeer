const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    conversationName: {
      type: String,
      trim: true,
    },
    isGroupConversation: {
      type: Boolean,
      default: false,
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = Conversation = mongoose.model(
  "Conversation",
  conversationSchema
);
