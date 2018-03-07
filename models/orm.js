// Import MySQL connection.
const connection = require("../config/connection.js");

//object containing functions for SQL queries
const orm = {
  //select all from table where condition
  select: function(table, condition, callback){
    let querystring = "SELECT * FROM ?? WHERE ? ";
    let parms = [table, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table where condition1 or condition2
  selectOr: function(table, condition1, condition2, callback){
    let querystring = "SELECT * FROM ?? WHERE ? OR ?";
    let parms = [table, condition1, condition2];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table where condition1 and condition2
  selectAnd: function(table, condition1, condition2, callback){
    let querystring = "SELECT * FROM ?? WHERE ? AND ?";
    let parms = [table, condition1, condition2];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table where column has value like (partial string search)
  selectLike: function(table, col, value, callback){
    let querystring = "SELECT * FROM ?? WHERE ?? LIKE ?";
    let parms = [table, col, value];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table sorted by column ascending
  selectSortA: function(table, sortfield, callback){
    let querystring = "SELECT * FROM ?? ORDER BY ?? ASC";
    let parms = [table, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table sorted by column descending
  selectSortD: function(table, sortfield, callback){
    let querystring = "SELECT * FROM ?? ORDER BY ?? DESC";
    let parms = [table, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table where condition order by column ascending
  selectBySortA: function(table, condition, sortfield, callback){
    let querystring = "SELECT * FROM ?? WHERE ? ORDER BY ?? ASC";
    let parms = [table, condition, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table where condition order by column descending
  selectBySortD: function(table, condition, sortfield, callback){
    let querystring = "SELECT * FROM ?? WHERE ? ORDER BY ?? DESC";
    let parms = [table, condition, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table
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
  //get rowcount from table where condition
  countBy: function(table, field, condition, callback){
    let querystring = "SELECT COUNT(??) FROM ?? WHERE ? ";
    let parms = [table, field, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //update table set values where condition
  update: function(table, value, condition, callback){
    let querystring = "UPDATE ?? SET ? WHERE ? ";
    let parms = [table, value, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    });
  },
  //select all from table1, table2 join on column1, column2 where condition
  joinSelect: function(table1, table2, col1, col2, condition, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? AND ? ";
    let parms = [table1, table2, col1, col2, condition];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table1, table2 join on column1, column2 order by column3 ascending
  joinSortA: function(table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? ORDER BY ?? ASC";
    let parms = [table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select distinct fields from table1, table2 join on column1, column2 order by column3 ascending
  distinctJoinSortA: function(fields, table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT DISTINCT ?? FROM ??, ?? WHERE ?? = ?? ORDER BY ?? ASC";
    let parms = [fields, table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table1, table2 join on column1, column2 order by column3 descending
  joinSortD: function(table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? ORDER BY ?? DESC";
    let parms = [table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select distinct fields from table1, table2 join on column1, column2 order by column3 descending
  distinctJoinSortD: function(fields, table1, table2, col1, col2, sortfield, callback){
    let querystring = "SELECT DISTINCT ?? FROM ??, ?? WHERE ?? = ?? ORDER BY ?? DESC";
    let parms = [fields, table1, table2, col1, col2, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table1, table2 join column1, column2 where condition order by sortfield ascending
  joinSelectSortA: function(table1, table2, col1, col2, condition, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? AND ? ORDER BY ?? ASC";
    let parms = [table1, table2, col1, col2, condition, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //select all from table1, table2 join column1, column2 where condition order by sortfield descending
  joinSelectSortD: function(table1, table2, col1, col2, condition, sortfield, callback){
    let querystring = "SELECT * FROM ??, ?? WHERE ?? = ?? AND ? ORDER BY ?? DESC";
    let parms = [table1, table2, col1, col2, condition, sortfield];

    connection.query(querystring, parms, function(err, result){
      if(err) throw err;

      callback(result);
    })
  },
  //insert into table columns -> values
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