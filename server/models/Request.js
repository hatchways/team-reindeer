const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timeSlot = new Schema({ start: Date, end: Date });

const requestSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  sitter: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  duration: {
    type: timeSlot,
    required: true,
  },
  status: {
    type: String,
    enum: ["accepted", "declined", "pending"],
    default: "pending",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
});

module.exports = Request = mongoose.model("Request", requestSchema);
