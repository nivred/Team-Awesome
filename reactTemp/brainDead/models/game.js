const orm = require("./orm");

const game = {

//select all cards
  allCards: function(callback) {
    orm.selectAll("cards", function(result) {
      callback(result);
    });

  },



//select all cards by theme

//insert card
  // createCard: function(cardData, callback){
  //   let cardTableData = {
  //     descr: cardData.descr,
  //     theme_id: cardData.name,
  //     game_level: cardData.email
  //   }

  //   orm.insertRow('cards', cardTableData, function(result){
  //     if(result === "Database Error"){
  //       callback(result)
  //       return;
  //     }

  //   });
  // },

//insert theme
  // createTheme: function(themeData, callback){
  //   let userTableData = {
  //     user_name: userData.name,
  //     user_password: userData.password,
  //     user_email: userData.email
  //   }

  //   orm.insertRow('users', userTableData, function(result){
  //     if(result === "Database Error"){
  //       callback(result)
  //       return;
  //     }

  //   });
  // },

//select all themes
  allThemes: function(callback) {
    orm.selectAll("themes", function(result) {
      callback(result);
    });

  },

//select all themes by level
  themesByLevel: function(level, callback) {
    orm.select("themes", {game_level: level}, function(result) {
      callback(result);
    });

  },

//select all themes, order by create date desc
  themesDateSort: function(callback) {
    orm.selectSort("themes", {create_date}, function(result) {
      callback(result);
    });

  }


};

module.exports = game;
