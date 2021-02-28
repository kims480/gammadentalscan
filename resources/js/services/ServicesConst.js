/** @format */
import { mapGetters } from "vuex";
import axios from "axios";
const myBaseURL = "https://gamma-dental-scan.com"; //process.env.MIX_APP_API_BASEURL ??
const myBaseURLPort = "/"; //process.env.MIX_APP_API_PORT ??
const myFullBaseURL = myBaseURL + myBaseURLPort; //process.env.MIX_APP_API_MYFULLBASEURL ??
const myApiBaseURL = myFullBaseURL + "api"; //process.env.MIX_APP_API_MYAPIBASEURL ??
// let token = localStorage.getItem("token") ||= {...mapState(["token"])};
export const myApiClient = axios.create({
    baseURL: myApiBaseURL,
    withCredentials: true,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        Accept: ["application/json", "Access-Control-Allow-Origin"],
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token") //token !== null ? token :
    }
});

export default {
    myBaseURL: myBaseURL,
    myBaseURLPort,
    myFullBaseURL,
    myApiBaseURL,
    apiClient: axios.create({
        baseURL: myFullBaseURL,
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token") //token !== null ? token :
        }
    }),
    myApiClient,
    getHeader(auth) {
        axios.defaults.headers.common["Authorization"] = auth;

        console.log(auth);
    },

    authComputed: {
        ...mapGetters(["loggedIn"])
    }
    /*  token: JSON.parse(localStorage.getItem("user")).token
    ? JSON.parse(localStorage.getItem("user")).token
    : token */
};
