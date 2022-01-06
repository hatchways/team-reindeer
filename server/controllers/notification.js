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
  const unreadNotifications = await Notification.find({
    userId: req.user.id,
    read: { $eq: false },
  });
  res.status(200).json({
    success: true,
    data: unreadNotifications,
    count: unreadNotifications.length,
  });
});

// @desc Mark notifications as read
// @route PATCH /notifications/read/:notificationId
// @access Private
exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findById(req.params.notificationId);

  if (!notification) {
    res.status(404);
    throw new Error(`No notification with id ${req.params.notificationId}`);
  }

  const markAsRead = await Notification.updateOne(
    { _id: req.params.notificationId },
    { $set: { read: true } },
    {
      new: true,
    }
  );

  res.status(200).json({ success: true, data: markAsRead });
});
