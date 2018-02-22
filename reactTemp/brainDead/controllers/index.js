const path = require("path");
const express = require("express");
const fs = require('fs');

const router = express.Router();
// const path = '../client/public/';

const userController = require('./userController');
const scoreController = require('./scoreController');
const gameController = require('./gameController');

console.log("controllers/index here");

// const orm = require('../models/orm');


module.exports = router;
