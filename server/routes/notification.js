const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createNotification } = require("../controllers/notification");

router.route("/notification").post(protect, createNotification);

module.exports = router;
