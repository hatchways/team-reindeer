const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createNotification,
  getAllNotifications,
  getUnreadNotifications,
} = require("../controllers/notification");

router
  .route("/")
  .post(protect, createNotification)
  .get(protect, getAllNotifications);
router.route("/unread").get(protect, getUnreadNotifications);

module.exports = router;
