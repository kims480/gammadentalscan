/**
 * /* eslint-disable
 *
 * @format
 */

import ServicesConst from "@/services/ServicesConst";
import axios from "axios";
const apiClient = axios.create({
  baseURL: ServicesConst.myFullBaseURL +'api',
  withCredentials: true,
  headers: {
    Accept: ["application/json", "Access-Control-Allow-Origin"],
    "Content-Type": "application/json"
  }
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
      },
}
