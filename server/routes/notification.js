const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { notifications } = require("../controllers/notification");

router.route("/notification").get(protect, notifications);

module.exports = router;
