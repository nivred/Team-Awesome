import axios from "axios";

export default {

  login: function(dataObj) { //login route
    return axios.post("/api/user/login", dataObj);
  },
  allUsers: function() { //get all users
    return axios.get("/api/user");
  },
  checkUser: function(dataObj) { //check if user exists
    return axios.post("/api/user/exists", dataObj);
  },
  nameSearch: function(dataObj) { //search for user by name
    return axios.post("/api/user/name", dataObj);
  },
  emailSearch: function(dataObj) { //search for user by email
    return axios.post("/api/user/email", dataObj);
  },
  register: function(dataObj) { //register new user route
    return axios.post("/api/user/register", dataObj);
  },
  changePassword: function(dataObj) { //change password route
    return axios.post("/api/user/password", dataObj);
  },
  getCards: function() { //get cards for game
    return axios.get("/api/game");
  },
  allScores: function() { //get all scores for all users
    return axios.get("/api/score");
  },
  addScore: function(dataObj) { //add score for user
    return axios.post("/api/score/add", dataObj);
  },
  lastScore: function(dataObj) { //get last score for user
    return axios.post("/api/score/last", dataObj);
  },
  bestScore: function(dataObj) { //get best score for user
    return axios.post("/api/score/best", dataObj);
  },
  numGames: function(dataObj) { //get count of games played for user
    return axios.post("/api/score/count", dataObj);
  }
};
