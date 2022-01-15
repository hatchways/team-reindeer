const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /profile/edit
// @desc edit user profile
// @access Public
exports.editProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(404);
    throw new Error("User doesn't exist");
  }

  const profile = await Profile.findByIdAndUpdate(user.profile, req.body, {
    new: true,
  });

  res.status(200).json({
    success: {
      profile,
    },
  });
});

// @route GET /profile/load
// @desc Get user profile data
// @access Private
exports.loadProfile = asyncHandler(async (req, res, next) => {
  const profile = await User.findById(req.user.id, "profile");

  if (!profile) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json({
    success: {
      profile: profile,
    },
  });
});

// @route GET /profile/listing
// @desc Get sitter profile data
// @access Private
exports.loadSitters = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find({ sitter: true });
  res.status(200).json({
    success: profiles,
  });
});

// @route GET /profile/listing/search
// @desc Get sitter profile data
// @access Private
exports.loadSittersBySearch = asyncHandler(async (req, res, next) => {
  const { searchQuery } = req.query;

  try {
    const address = new RegExp(searchQuery, "i");
    if (!address) {
      const profiles = await Profile.find({ sitter: true });
      res.status(200).json({
        success: profiles,
      });
    } else {
      const profiles = await Profile.find({ address: address, sitter: true });
      res.status(200).json({
        success: profiles,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
