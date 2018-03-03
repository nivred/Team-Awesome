const express = require('express');
const bodyParser = require("body-parser");
// const methodOverride = require("method-override");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("client/build"));


// // Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("client/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes");

app.use(routes);

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

app.get("/", function(req,res, next) {
	//this is production
		res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
		//this is for developing
		// res.sendFile(path.resolve(__dirname, "client/public", "index.html"));
	});

app.listen(port, () => console.log(`Listening on port ${port}`));


//test


