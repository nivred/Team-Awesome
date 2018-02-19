const express = require('express');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const routes = require("./controllers/index.js");
//test


const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// // Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use(routes);
// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


// Import routes and give the server access to them.
// const routes = require("./controllers/index.js");
// console.log(routes);

// app.use(app.router);
// routes.initialize(app);


