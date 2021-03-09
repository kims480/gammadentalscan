/**
 * /* eslint-disable
 *
 * @format
 */

import ServicesConst from "@/services/ServicesConst";
import axios from "axios";
import nProgress from "nprogress";
const apiClient = axios.create({
    baseURL: ServicesConst.myFullBaseURL + "api",
    withCredentials: true,
    headers: {
        Accept: ["application/json", "Access-Control-Allow-Origin"],
        "Content-Type": "application/json"
    }
});
apiClient.interceptors.request.use(config => {
    nProgress.start();
    return config;
});
apiClient.interceptors.response.use(response => {
    nProgress.done();
    return response;
});
export default {
    getPatients() {
        return ServicesConst.myApiClient.get("/patient");
    },
    getPatient(id) {
        return ServicesConst.myApiClient.post("/patient/" + id);
    },
    getDoctorPatient(id) {
        return ServicesConst.myApiClient.post("child/patients/" + id);
    }
};
