const express = require("express");
const protect = require("../middleware/auth");
const router = express.Router();

const {
  createRequest,
  getRequests,
  updateRequest,
} = require("../controllers/request");

router.route("/").get(protect, getRequests);
router.route("/").post(protect, createRequest);
router.route("/:id").patch(protect, updateRequest);

module.exports = router;
