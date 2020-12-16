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
    getDoctors() {
        return apiClient.get("/doctors");
      },
    getChildPatient(id) {
        return apiClient.post("child/patients/" + id);
      },
}
