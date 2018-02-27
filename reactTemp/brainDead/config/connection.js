//set up MySQL connection
const mysql = require("mysql");

console.log("connection here");

//mySQL connection data
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "memory_db"
});

//connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection for ORM
module.exports = connection;

