const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createNotification,
  getAllNotifications,
  getUnreadNotifications,
  markNotificationAsRead,
} = require("../controllers/notification");
const { validateNotification } = require("../validate");

router
  .route("/")
  .post(protect, validateNotification, createNotification)
  .get(protect, getAllNotifications);
router.route("/unread").get(protect, getUnreadNotifications);
router.route("/read/:notificationId").patch(protect, markNotificationAsRead);

module.exports = router;
