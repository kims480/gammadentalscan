import ServicesConst from "@/services/ServicesConst";
import PatientServices from "@/services/PatientServices";
// import Storage from "./storage";
export const namespaced = true;
export const state = () => ({
    patient: {}, //Storage.getLocalStorage("access_token") ||
    patients: []
});

export const getters = {
    patient: state => {
        return state.patient;
    },
    patients: state => {
        return state.patient;
    }
};

export const mutations = {
    SET_VALIDATIONS_ERRORS: (state, errors) => {
        state.errors = errors;
    },
    SET_PATIENTS: (state, patients) => {
        // console.log(token.access_token);
        state.patients.length = 0;
        state.patients.push(patients);

        // localStorage.setItem("access_token", token.access_token);
    },
    SET_PATIRNT_CREATE: (state, patient) => {
        // console.log(token.access_token);
        state.patient = patient;
        // state.patients.push(patients);

        // localStorage.setItem("access_token", token.access_token);
    }
};

export const actions = {
    getPatients({ commit, rootState }) {
        // PatientServices.defaults.headers.common["Authorization"] =
        //     "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            PatientServices.getPatients()
                .then(res => {
                    console.log(res);
                    commit("SET_PATIENTS", res.data);
                    resolve(res);
                    //
                    // console.log(this.$store.state.auth.loggedIn);
                    // console.log(this.$store.state.auth.user);
                })
                .catch(err => {
                    console.log(err);

                    reject(err);
                });
        });
    },
    getPatientList({ commit, rootState }) {
        // PatientServices.defaults.headers.common["Authorization"] =
        //     "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .get("/patient-list")

                .then(res => {
                    console.log(res);
                    commit("SET_PATIENTS", res.data);
                    resolve(res.data);
                    //
                    // console.log(this.$store.state.auth.loggedIn);
                    // console.log(this.$store.state.auth.user);
                })
                .catch(err => {
                    console.log(err);

                    reject(err);
                });
        });
    },
    getPatientListOfDoctor({ commit, rootState }) {
        // PatientServices.defaults.headers.common["Authorization"] =
        //     "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .post("/getPatientListOfDoctor")

                .then(res => {
                    console.log(res);
                    commit("SET_PATIENTS", res.data);
                    resolve(res.data);
                    //
                    // console.log(this.$store.state.auth.loggedIn);
                    // console.log(this.$store.state.auth.user);
                })
                .catch(err => {
                    console.log(err);

                    reject(err);
                });
        });
    },
    addPatient({ commit, rootState }, data) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .post("patient", data)
                .then(res => {
                    commit("SET_PATIRNT_CREATE", res.data);
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    checkPatientMail({ commit }, mail) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .get("check-patient-mail/" + mail)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    checkPatientPhone({ commit }, phone) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .get("check-patient-phone/" + phone)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    getPatientById({ commit }, id) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .get("patient/" + id)
                .then(res => {
                    console.log(res);
                    commit("SET_PATIENT_CREATE", res.data);
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    patientUpdate({ commit }, data) {
        console.log(data);
        console.log(data.formData);
        let formData = new FormData();
        data.formData.forEach(value => {
            if (!Array.isArray(value[1])) {
                value[1] != null ? formData.append(value[0], value[1]) : false;

                value[0] == "user"
                    ? formData.append(
                          "refered_by",
                          value[1] ? value[1].id : null
                      )
                    : null;
                // value[1] != null ? formData.append(value[0], value[1]) : false;
                // console.log(value[0], value[1]);
            } else {
                value[1].forEach((valueb, index) => {
                    value[1] != null
                        ? formData.append(value[0] + "[]", valueb)
                        : false;
                });
            }
        });
        formData.append("_method", "PUT");

        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .post("patient/" + data.id, formData, {
                    headers: {
                        type: "PUT",
                        _method: "PUT",
                        enctype: "multipart/form-data",
                        "Content-Type":
                            "multipart/form-data; charset=utf-8; boundary=" +
                            Math.random()
                                .toString()
                                .substr(2)
                    }
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    patientDelete({ commit }, userID) {
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .delete("patient/" + userID)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    clearErrors({ commit }) {
        commit("SET_VALIDATIONS_ERRORS", {});
    }
};
