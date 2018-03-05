// Import MySQL connection.
const connection = require("../config/connection.js");

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

  selectLike: function(table, col, value, callback){
    let querystring = "SELECT * FROM ?? WHERE ?? LIKE ?";
    let parms = [table, col, value];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  
  selectSortA: function(table, sortfield, callback){
    let querystring = "SELECT * FROM ?? ORDER BY ?? ASC";
    let parms = [table, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectSortD: function(table, sortfield, callback){
    let querystring = "SELECT * FROM ?? ORDER BY ?? DESC";
    let parms = [table, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectBySortA: function(table, condition, sortfield, callback){
    let querystring = "SELECT * FROM ?? WHERE ? ORDER BY ?? ASC";
    let parms = [table, condition, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  selectBySortD: function(table, condition, sortfield, callback){
    let querystring = "SELECT * FROM ?? WHERE ? ORDER BY ?? DESC";
    let parms = [table, condition, sortfield];

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

  countBy: function(table, field, condition, callback){
    let querystring = "SELECT COUNT(??) FROM ?? WHERE ? ";
    let parms = [table, field, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  update: function(table, value, condition, callback){
    let querystring = "UPDATE ?? SET ? WHERE ? ";
    let parms = [table, value, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    });
  },

  joinSelect: function(table1, table2, col1, col2, condition, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? AND ? ";
    let parms = [table1, table2, col1, col2, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  joinSortA: function(table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? ORDER BY ?? ASC";
    let parms = [table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  distinctJoinSortA: function(fields, table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT DISTINCT ?? FROM ??, ?? WHERE ?? = ?? ORDER BY ?? ASC";
    let parms = [fields, table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },


  joinSortD: function(table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? ORDER BY ?? DESC";
    let parms = [table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  distinctJoinSortD: function(fields, table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT DISTINCT ?? FROM ??, ?? WHERE ?? = ?? ORDER BY ?? DESC";
    let parms = [fields, table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  joinSelectSortA: function(table1, table2, col1, col2, condition, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? AND ? ORDER BY ?? ASC";
    let parms = [table1, table2, col1, col2, condition, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },

  joinSelectSortD: function(table1, table2, col1, col2, condition, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? AND ? ORDER BY ?? DESC";
    let parms = [table1, table2, col1, col2, condition, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
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