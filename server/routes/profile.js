const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  editProfile,
  loadProfile,
  loadSitters,
  loadSittersBySearch,
} = require("../controllers/profile");

router.route("/edit").post(protect, editProfile);

router.route("/load").get(protect, loadProfile);

router.route("/listing").get(loadSitters);

router.route("/listing/search").get(loadSittersBySearch);

module.exports = router;
