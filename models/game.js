const orm = require("./orm");

const game = {

//select all cards
  allCards: function(callback) {
    orm.selectAll("cards", function(result) {
      callback(result);
    });

  },

//select all cards by theme
  cardsByTheme: function(cardtheme, callback) {
    orm.joinSelect("themes", "cards", "themes.theme_id", "cards.theme_id", {"themes.descr": cardtheme}, function(result) {
      callback(result);
    });

  },

// insert card
  createCard: function(cardData, callback){
    let cardTableData = {
      descr: cardData.descr,
      theme_id: cardData.themeid,
      image_url: cardData.url
    }

    orm.insertRow('cards', cardTableData, function(result){
      if(result === "Database Error"){
        callback(result)
        return;
      }

    });
  },

// insert theme
  createTheme: function(themeData, callback){
    let themeTableData = {
      descr: themeData.descr,
      author: themeData.userid,
      game_level: themeData.level
    }

    orm.insertRow('themes', themeTableData, function(result){
      if(result === "Database Error"){
        callback(result)
        return;
      }

    });
  },

//select themes by author
  themesByAuthor: function(username, callback) {
    orm.joinSelect("themes", "users", "themes.author", "users.user_id", {"users.user_name": username}, function(result) {
      callback(result);
    });

  },

//search themes by description
  themeSearch: function(searchstring, callback) {
  	let value = "%" + searchstring + "%";
    orm.selectLike("themes", "descr", value, function(result) {
      callback(result);
    });

  },

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
    orm.selectSortA("themes", "create_date", function(result) {
      callback(result);
    });

  }

};

module.exports = game;
