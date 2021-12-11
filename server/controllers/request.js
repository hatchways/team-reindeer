const Request = require("../models/Request");
const User = require("../models/User");
const express = require("express");
const router = express.Router();

// @desc  GET : list of requests for logged in user
// @route GET

const getRequests = async (req, res) => {
  const requests = await Request.find({
    $or: [{ owner: req.user.id }, { sitter: req.user.id }],
  })
    .populate("sitter", ["username", "email", "_id"])
    .populate("owner", ["username", "email", "_id"]);

  res.status(200).json({
    success: {
      requests: requests,
    },
  });
};

// @desc  POST : Create a new request
// @route POST

const createRequest = async (req, res) => {
  const body = req.body;
  if (!(body || body.sitter || body.owner || body.duration)) {
    res.status(400);
    throw new Error("Bad Request");
  }
  const sitter = await User.findById(body.sitter);
  if (!sitter) {
    res.status(404);
    throw new Error("Sitter not Found");
  }
  if (Date.parse(body.duration.end) < Date.parse(body.duration.start)) {
    res.status(400);
    throw new Error("End Date must greater than Start Date");
  }
  const request = await Request.create({
    owner: req.user.id,
    sitter: body.sitter,
    duration: {
      start: new Date(body.duration.start),
      end: new Date(body.duration.end),
    },
  });

  if (request) {
    res.status(200).json({
      success: {
        request: request,
      },
    });
  } else {
    res.status(500);
    throw new Error("Something went wrong!!");
  }
};

// @desc UPDATE : Update request with approved or decline
// @route PATCH

const updateRequest = async (req, res) => {
  const bodyData = ({ duration, totalCost, status, completed } = req.body);
  const newRequestData = {
    ...req.params,
    ...bodyData,
  };
  if (!(newRequestData || newRequestData.id)) {
    res.status(400);
    throw new Error("Bad Request");
  }
  const confirmUser = await Request.findOne({ _id: newRequestData.id });

  if (req.user.id != confirmUser.sitter) {
    res.status(401);
    throw new Error("User Not authorized");
  }
  const updatedRequest = await Request.findOneAndUpdate(
    { _id: newRequestData.id },
    newRequestData,
    { new: true }
  );
  if (updatedRequest) {
    const requests = await Request.find({
      $or: [{ owner: req.user.id }, { sitter: req.user.id }],
    })
      .populate("sitter", ["username", "email", "_id"])
      .populate("owner", ["username", "email", "_id"]);

    res.status(200).json({
      success: {
        requests: requests,
      },
    });
  } else {
    res.status(500);
    throw new Error("Something went wrong!!");
  }
};

module.exports = { createRequest, getRequests, updateRequest };
