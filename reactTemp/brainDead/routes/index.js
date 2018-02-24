const path = require("path");
const express = require("express");
// const fs = require('fs');

const router = express.Router();
const apiRoutes = require("./api");


console.log("hello from routes/index");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
