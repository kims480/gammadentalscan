/** @format */
import { mapGetters } from "vuex";
import axios from "axios";
import nProgress from "nprogress";
import store from "@/store/index";
const myBaseURL =
    process.env.MIX_APP_API_BASEURL ?? "https://gamma-dental-scan.com"; //
const myBaseURLPort = "/"; //process.env.MIX_APP_API_PORT ??
const myFullBaseURL = myBaseURL + myBaseURLPort; //process.env.MIX_APP_API_MYFULLBASEURL ??
const myApiBaseURL = myFullBaseURL + "api"; //process.env.MIX_APP_API_MYAPIBASEURL ??
// let token = localStorage.getItem("token") ||= {...mapState(["token"])};
export const myApiClient = axios.create({
    baseURL: myApiBaseURL,
    withCredentials: true,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json", //
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token") //token !== null ? token :
    },
    timeout: 10000
});
myApiClient.interceptors.request.use(config => {
    nProgress.start();
    return config;
});
myApiClient.interceptors.response.use(response => {
    nProgress.done();
    // console.log(response.data);
    // if (response.data.success == true) {
    //     store.dispatch(
    //         "notifications/pushSuccessNotify",
    //         response.data.messsage
    //     );
    // }
    return response;
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
