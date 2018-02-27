const orm = require("./orm");

const scores = {

//select all
  allScores: function(callback) {
    orm.selectAll("scores", function(result) {
      callback(result);
    });

  },

//select all by user, order by date desc
  userScoresByDate: function(userid, callback) {
    orm.selectBySortD("scores", {user_id: userid}, "date_time", function(result) {
      callback(result);
    });

  },

//select all by user, order by score asc
  userScoresAsc: function(userid, callback) {
    orm.selectBySortA("scores", {user_id: userid}, "score", function(result) {
      callback(result);
    });

  },

//select all scores, order by score asc
  allScoresAsc: function(callback) {
    orm.selectSortA("scores", "score", function(result) {
      callback(result);
    });

  },

//select number of games by user
  userGameCount: function(userid, callback) {
    orm.countBy("score", "scores", {user_id: userid}, function(result) {
      callback(result);
    });

  },

//insert score
  addScore: function(scoreData, callback){
    let scoreTableData = {
      user_id: scoreData.user_id,
      score: scoreData.score,
      theme_id: scoreData.theme_id
     }
     console.log(scoreTableData);

    orm.insertRow('scores', scoreTableData, function(result){
      if(result === "Database Error"){
        callback(result)
        return;
      }

    });
  }


};

module.exports = scores;
