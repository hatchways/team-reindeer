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

// @desc Fetch all notifications
// @route GET /notifications
// @access Private
exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({ userId: req.user.id });
  res
    .status(200)
    .json({ success: true, data: notifications, count: notifications.length });
});

// @desc Fetch all unread notifications
// @route GET /notifications/unread
// @access Private
exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
  const unreadNotifications = await Notification.find({ read: { $eq: false } });
  res.status(200).json({
    success: true,
    data: unreadNotifications,
    count: unreadNotifications.length,
  });
});

// @desc Mark notifications as read
// @route GET /notifications/unread/:id
// @access Private
exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {
  const unreadNotifications = await Notification.find({ read: { $eq: false } });

  if (!unreadNotifications) {
    res.status(400);
    throw new Error("Bad request");
  }

  const markAsRead = await Notification.findByIdAndUpdate(
    req.params.notificationId,
    { read: req.body.read },
    {
      new: true,
    }
  );

  res.status(200).json({ success: true, data: markAsRead });
});
