const express = require("express");
const protect = require("../middleware/auth");
const router = express.Router();

const {
  createRequest,
  getRequests,
  updateRequest,
} = require("../controllers/request");

router.route("/").get(protect, getRequests);
router.route("/create").post(protect, createRequest);
router.route("/update/:id").put(protect, updateRequest);

module.exports = router;
