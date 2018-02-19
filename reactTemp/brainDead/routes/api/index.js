const router = require("express").Router();
const userRoutes = require("./users");
const scoreRoutes = require('./score');
const gameRoutes = require('./game');

// Book routes
router.use("/user", userRoutes);
router.use("/score", scoreRoutes);
router.use("/game", gameRoutes);

module.exports = router;
