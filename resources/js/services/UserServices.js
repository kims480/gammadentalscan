/**
 * /* eslint-disable
 *
 * @format
 */

import axios from "axios";
const apiClient = axios.create({
    baseURL: process.env.MIX_APP_API_MYAPIBASEURL,
    withCredentials: true,
    headers: {
        Accept: ["application/json", "Access-Control-Allow-Origin"],
        "Content-Type": "application/json"
    }
});
// export interface Credintials {
//     email:string,
//     password:string
// };
export default {
    getHeader(auth) {
        axios.defaults.headers.common["Authorization"] = auth;

        console.log(auth);
    },
    getUserById(userId) {
        return apiClient.get("/users/" + userId);
    },
    loggedUser(userId) {
        return apiClient.get("/users/" + userId);
    },
    getUsers() {
        return apiClient.get("/get-users");
    },
    createUsers(user) {
        return apiClient.post("/users", user);
    },
    async register(credentials) {
        /* const config = {
      baseURL: ServicesConst.myFullBaseURL,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }; */
        return apiClient.post("/register", credentials);
    },
    async login(credentials) {
        /* const config = {
      baseURL: ServicesConst.myFullBaseURL,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }; */

        return apiClient.post("/login", credentials);
    },
    user() {
        /* const config = {
      baseURL: ServicesConst.myFullBaseURL,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }; */
        return apiClient.get("/user");
    },
    async logout() {
        //
        return apiClient.post("/logout");
    }
};
