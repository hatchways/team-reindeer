const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
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
  readunread: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    enum: ["accepted", "declined", "pending"],
    default: "pending",
  },
});

module.exports = Notification = mongoose.model(
  "Notification",
  notificationSchema
);
