/** @format */
import { mapGetters, mapState } from "vuex";
import axios from "axios";
const myBaseURL = "http://172.20.10.200";
const myBaseURLPort = ":8800/";
const myFullBaseURL = myBaseURL + myBaseURLPort;
let token =
    localStorage.getItem("user") !== null
        ? JSON.parse(localStorage.getItem("user")).token
        : {
              ...mapState("user", ["token"])
          };

export default {
    myBaseURL: myBaseURL,
    myBaseURLPort: myBaseURLPort,
    myFullBaseURL: myFullBaseURL,
    apiClient: axios.create({
        baseURL: myFullBaseURL,
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token //token !== null ? token :
        }
    }),

    authComputed: {
        ...mapGetters(["loggedIn"])
    }
    /*  token: JSON.parse(localStorage.getItem("user")).token
    ? JSON.parse(localStorage.getItem("user")).token
    : token */
};
