const Notification = require("../models/Notification");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.notifications = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findById({ userId: req.user.id });

  if (!notification) {
    res.status(401);
    throw new Error("Not authorized");
  }

  if (notification.length === 0) {
    res.status(404).json({
      msg: "you have no new messages",
    });
  } else {
    res.status(200).json({
      success: {
        notification,
      },
    });
  }
});
