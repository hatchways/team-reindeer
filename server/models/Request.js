const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["accepted", "declined", "pending"],
    default: "pending",
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = Request = mongoose.model("Request", requestSchema);
