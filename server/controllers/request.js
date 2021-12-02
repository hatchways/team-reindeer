const Request = require("../models/Request");
const express = require("express");
const router = express.Router();

// @desc  GET : list of requests for logged in user
// @route GET

const getRequests = async (req, res) => {
  const requests = await Request.find({
    $or: [{ userId: req.user.id }, { sitterId: req.user.id }],
  });
  res.json(requests);
};

// @desc  POST : Create a new request
// @route POST

const createRequest = async (req, res) => {
  const { sitterId, start, end } = req.body;
  const userId = req.user.id;
  const request = await Request.create({ userId, sitterId, start, end });
  res.send(request);
};

// @desc UPDATE : Update request with approved or decline
// @route PATCH

const updateRequest = async (req, res) => {
  const { status } = req.body;
  const userId = req.user.id;
  const request = await Request.findOneAndUpdate(
    { _id: req.params.id, userId: userId },
    { $set: { status: status } },
    {
      new: true,
    }
  );
  res.json(request);
};

module.exports = { createRequest, getRequests, updateRequest };
