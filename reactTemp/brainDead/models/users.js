// Import the ORM to create functions that will interact with the database.
var orm = require("./orm.js");

var users = {

  createNew: function(userData, callback){
    var userTableData = {
      user_name: userData.name,
      user_password: userData.password,
      user_email: userData.email
    }

    orm.insertRow('users', userTableData, function(result){
      if(result === "Database Error"){
        callback(result)
        return;
      }

    });
  },
  
  findByName: function(username, callback) {
    orm.select("users", {user_name: username}, function(result) {
      callback(result);
    });

  },

  findByEmail: function(useremail, callback) {
  orm.select("users", {user_email: useremail}, function(result) {
    callback(result);
  });

},

  selectAll: function(callback) {
    orm.selectAll("users", function(result) {
      callback(result);
    });

  }
};

module.exports = users;
