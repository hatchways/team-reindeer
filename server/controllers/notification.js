const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");

//@desc Create notification
//@route POST /notification
//@ access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  const { title, description, read } = req.body;

  const notification = await new Notification({
    title,
    description,
    read,
    userId: req.user.id,
  }).save();

  res.status(201).json({ success: true, data: notification });
});
