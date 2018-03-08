const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("client/build"));


// Serve static content for the app from the "public" directory
app.use(express.static("client/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes");

app.use(routes);


app.get("/", function(req,res, next) {
		res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
	});

app.listen(port, () => console.log(`Listening on port ${port}`));




