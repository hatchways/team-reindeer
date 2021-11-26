const Request = require("../models/Request");
const express = require("express");
const router = express.Router();

// @desc  GET : list of requests for logged in user
// @route GET

const getRequests = async (req, res) => {
  const requests = await Request.find({ userId: req.user.id });
  res.send(requests);
};

// @desc  POST : Create a new request
// @route POST

const createRequest = async (req, res) => {
  const request = await Request.create(req.body);
  res.send(request);
};

// @desc UPDATE : Update request with approved or decline
// @route PUT

const updateRequest = async (req, res) => {
  await Request.findByIdAndUpdate({ _id: req.params.id }, req.body);
  const request = await Request.findOne({ _id: req.params.id });
  res.send(request);
};

module.exports = { createRequest, getRequests, updateRequest };
