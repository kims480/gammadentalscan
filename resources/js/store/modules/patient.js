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
    }
};

export const actions = {
    getPatients({ commit, rootState }) {
        // PatientServices.defaults.headers.common["Authorization"] =
        //     "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            PatientServices
                .getPatients()
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
    clearErrors({ commit }) {
        commit("SET_VALIDATIONS_ERRORS", {});
    }
};
