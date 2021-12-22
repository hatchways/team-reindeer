const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    read: {
      type: String,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = Notification = mongoose.model(
  "Notification",
  notificationSchema
);
