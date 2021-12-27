const mongoose = require("mongoose");

const timeSlot = new mongoose.Schema({ start: Date, end: Date });

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
  available: {
    type: Boolean,
    default: false,
  },
  availability: [
    {
      type: String,
      default: [],
    },
  ],
  photo: {
    type: String,
    default: "",
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
