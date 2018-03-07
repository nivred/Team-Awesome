const path = require("path");
const express = require("express");
const router = express.Router();

//import controllers
const userController = require("../../controllers/userController");
const scoreRoutes = require('../../controllers/scoreController');
const gameRoutes = require('../../controllers/gameController');

// routes
router.use("/user", userController);
router.use("/score", scoreRoutes);
router.use("/game", gameRoutes);

module.exports = router;