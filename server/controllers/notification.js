const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");

//@desc Create notification
//@route POST /notifications
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

//@desc Fetch all notifications
//@route GET /notifications
//@ access Private
exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ userId: req.user.id });
  res
    .status(200)
    .json({ success: true, data: notifications, count: notifications.length });
});
