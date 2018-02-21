const path = require("path");
const express = require("express");
// const fs = require('fs');

const router = express.Router();
const apiRoutes = require("./api");


console.log("hello from routes/index");
// // API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;
