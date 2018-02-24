import axios from "axios";


console.log("hello from API");
export default {

  login: function(dataObj) {
    return axios.post("/api/user/login", dataObj);
  },
  allUsers: function() {
    return axios.get("/api/user");
  },
  register: function(dataObj) {
    return axios.post("/api/user/register", dataObj);
  },
  changePassword: function(dataObj) {
    return axios.post("/api/user/password", dataObj);
  },
  getCards: function() {
    return axios.get("/api/game");
  }
};
