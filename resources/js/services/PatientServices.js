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
        return apiClient.get("/patient");
      },
    getPatient(id) {
        return apiClient.post("/patient/" + id);
      },
    getDoctorPatient(id) {
        return apiClient.post("child/patients/" + id);
      },
}
