import axios from "axios";

export default {

  login: function(dataObj) {
    return axios.post("/api/user/login", dataObj);
  },
  allUsers: function() {
    return axios.get("/api/user");
  },
  checkUser: function(dataObj) {
    return axios.post("/api/user/exists", dataObj);
  },
  nameSearch: function(dataObj) {
    return axios.post("/api/user/name", dataObj);
  },
  emailSearch: function(dataObj) {
    return axios.post("/api/user/email", dataObj);
  },
  register: function(dataObj) {
    return axios.post("/api/user/register", dataObj);
  },
  changePassword: function(dataObj) {
    return axios.post("/api/user/password", dataObj);
  },
  getCards: function() {
    return axios.get("/api/game");
  },
  allScores: function() {
    return axios.get("/api/score");
  },
  addScore: function(dataObj) {
    return axios.post("/api/score/add", dataObj);
  },
  lastScore: function(dataObj) {
    return axios.post("/api/score/last", dataObj);
  },
  bestScore: function(dataObj) {
    return axios.post("/api/score/best", dataObj);
  },
  numGames: function(dataObj) {
    return axios.post("/api/score/count", dataObj);
  }
};
