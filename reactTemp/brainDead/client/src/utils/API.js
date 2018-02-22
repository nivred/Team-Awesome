import axios from "axios";


console.log("hello from API");
export default {
  // Gets all books
  login: function(dataObj) {
    return axios.post("/api/user/login", dataObj);
  },
  allUser: function() {
    return axios.get("/api/user");
  }
};
