const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  sitter_id: mongoose.Schema.Types.ObjectId,
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  declined: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = Request = mongoose.mode("Request", requestSchema);
