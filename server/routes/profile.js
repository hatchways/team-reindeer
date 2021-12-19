const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  editProfile,
  loadProfile,
  loadSitters,
} = require("../controllers/profile");

router.route("/edit").post(protect, editProfile);

router.route("/load").get(protect, loadProfile);

router.route("/listing").get(protect, loadSitters);

module.exports = router;
