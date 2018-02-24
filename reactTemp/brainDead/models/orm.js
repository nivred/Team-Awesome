// Import MySQL connection.
const connection = require("../config/connection.js");

console.log("orm here");

//object containing functions for SQL queries
const orm = {
  select: function(table, condition, callback){
    let querystring = "SELECT * FROM ?? WHERE ? ";
    let parms = [table, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
 
  selectOr: function(table, condition1, condition2, callback){
    let querystring = "SELECT * FROM ?? WHERE ? OR ?";
    let parms = [table, condition1, condition2];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectAnd: function(table, condition1, condition2, callback){
    let querystring = "SELECT * FROM ?? WHERE ? AND ?";
    let parms = [table, condition1, condition2];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  
  selectSort: function(table, sortfield, callback){
    let querystring = "SELECT * FROM ?? ORDER BY ? ";
    let parms = [table, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectAll: function(table, callback) {
    let queryString = "SELECT * FROM ?? ";
    let parms = [table];

    connection.query(queryString, parms, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  update: function(table, value, condition, callback){
    let querystring = "UPDATE ?? SET ? WHERE ? ";
    let parms = [table, value, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    });
  },

  insertRow: function(table, dataObject, callback){
    let queryString = "INSERT INTO ?? (??) VALUES (?) ";
    let parms = [table];

    let columns = [];
    let values = [];

    for(let key in dataObject){
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