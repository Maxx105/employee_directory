import axios from "axios";

const numOfEmployees = "100"
export default {
  getRandomEmployee: function() {
    return axios.get(`https://randomuser.me/api/?nat=us&results=${numOfEmployees}`);
  }
};