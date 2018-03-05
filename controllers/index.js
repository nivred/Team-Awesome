const path = require("path");
const express = require("express");

const router = express.Router();

const userController = require('./userController');
const scoreController = require('./scoreController');
const gameController = require('./gameController');

module.exports = router;
