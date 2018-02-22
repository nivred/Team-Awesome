const path = require("path");
const express = require("express");
// const fs = require('fs');

const router = express.Router();
// const userRoutes = require("./users");
// const scoreRoutes = require('./score');
// const gameRoutes = require('./game');

const userController = require("../../controllers/userController");
// const scoreRoutes = require('../../controllers/scoreController');
// const gameRoutes = require('../../controllers/gameController');


console.log("hello from routes/api/index");

// routes
router.use("/user", userController);
// router.use("/score", scoreRoutes);
// router.use("/game", gameRoutes);

module.exports = router;