import axios from "axios";
const API_URL = "http://localhost:8081/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data[0]));

        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");


  }

  getCurrentUserToken() {
    return JSON.parse(localStorage.getItem('user'));
  }

  islogged() {
    return JSON.parse(localStorage.getItem('user')) != undefined;
  }
}
export default new AuthService();