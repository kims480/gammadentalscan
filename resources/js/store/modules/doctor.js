import DoctorServices from "@/services/DoctorServices";
// import Storage from "./storage";
export const namespaced = true;

export const state = () => ({
    doctor: {}, //Storage.getLocalStorage("access_token") ||
    doctors: [],
    patients: []
});

export const getters = {
    doctor: state => {
        return !state.token == null
            ? state.token
            : localStorage.getItem("access_token");
    },

};

export const mutations = {
    SET_VALIDATIONS_ERRORS: (state, errors) => {
        state.errors = errors;
    },
    SET_DOCTORS: (state, doctors) => {
        // console.log(token.access_token);
        state.doctors.length = 0;
        state.doctors.push(doctors);

        // localStorage.setItem("access_token", token.access_token);
    },
    SET_DOCTOR_Patients: (state, patients) => {
        // console.log(token.access_token);
        state.patients.length = 0;
        state.patients.push(patients);

        // localStorage.setItem("access_token", token.access_token);
    },
    REMOVE_TOKEN: state => {
        localStorage.removeItem("access_token");
        state.token = null;
    }
};

export const actions = {
    getDoctors({ commit, rootState }) {
        // DoctorServices.defaults.headers.common["Authorization"] =
        //     "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            DoctorServices
                .getDoctors()
                .then(res => {
                    console.log(res);
                    commit("SET_DOCTORS", res.data);
                    resolve(res);
                    //
                    // console.log(this.$store.state.auth.loggedIn);
                    // console.log(this.$store.state.auth.user);
                })
                .catch(err => {
                    // console.log(err);
                    reject(err);
                });
        });
    },
    getDoctorPatients({ commit, rootState }, id) {
        // DoctorServices.defaults.headers.common["Authorization"] =
        //     "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            DoctorServices
                .getChildPatient(id)
                .then(res => {
                    // console.log(res);
                    commit("SET_DOCTOR_Patients", res.data);
                    resolve(res);
                    //
                    // console.log(this.$store.state.auth.loggedIn);
                    // console.log(this.$store.state.auth.user);
                })
                .catch(err => {
                    // console.log(err);
                    reject(err);
                });
        });
    },
    clearErrors({ commit }) {
        commit("SET_VALIDATIONS_ERRORS", {});
    }
};
