// Import MySQL connection.
var connection = require("../config/connection.js");

console.log("orm here");

//object containing functions for SQL queries
var orm = {
  select: function(table, condition, callback){
    var querystring = "SELECT * FROM ?? WHERE ? ";
    var parms = [table, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
 
  selectOr: function(table, condition1, condition2, callback){
    var querystring = "SELECT * FROM ?? WHERE ? OR ?";
    var parms = [table, condition1, condition2];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectAnd: function(table, condition1, condition2, callback){
    var querystring = "SELECT * FROM ?? WHERE ? AND ?";
    var parms = [table, condition1, condition2];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ?? ";
    var parms = [table];

    connection.query(queryString, parms, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  update: function(table, value, condition, callback){
    var querystring = "UPDATE ?? SET ? WHERE ? ";
    var parms = [table, value, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    });
  },

  insertRow: function(table, dataObject, callback){
    var queryString = "INSERT INTO ?? (??) VALUES (?) ";
    var parms = [table];

    var columns = [];
    var values = [];

    for(var key in dataObject){
      columns.push(key);
      values.push(dataObject[key])
    };

    parms.push(columns);
    parms.push(values);

    connection.query(queryString, parms, function(err, result, fields){
      if(err){
        callback("Database Error");
        throw err;
      }

      callback(result)
    })
  }


};

// Export the orm object
module.exports = orm;