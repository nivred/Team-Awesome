import axios from "axios";


console.log("hello from API");
export default {

  login: function(dataObj) {
    return axios.post("/api/user/login", dataObj);
  },
  allUsers: function() {
    return axios.get("/api/user");
  },
  register: function() {
    return axios.get("/api/user/register", dataObj);
  },
  changePassword: function() {
    return axios.get("/api/user/password", dataObj);
  }
};
