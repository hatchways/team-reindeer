const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createNotification,
  getAllNotifications,
} = require("../controllers/notification");

router
  .route("/")
  .post(protect, createNotification)
  .get(protect, getAllNotifications);

module.exports = router;
