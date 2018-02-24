// Import the ORM to create functions that will interact with the database.
const orm = require("./orm");

const users = {

  createNew: function(userData, callback){
    let userTableData = {
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

  changePassword: function(userData, callback) {
    orm.update("users", {user_password: userData.password}, {user_name: userData.name}, function(result) {
      callback(result);
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

  findEither: function(userData, callback) {
  orm.selectOr("users", {user_name: userData.name}, {user_email: userData.email}, function(result) {
    callback(result);
  });

},

  findBoth: function(userData, callback) {
  orm.selectAnd("users", {user_name: userData.name}, {user_email: userData.email}, function(result) {
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
