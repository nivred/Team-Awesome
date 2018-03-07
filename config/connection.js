//set up MySQL connection
const mysql = require("mysql");

let connection;
if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else{
  //mySQL connection data
 connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",
  //use environment variables rather than actual password
  password: process.env.MYSQL_ROOT_PWD,
  database: "memory_db"
});
}


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

