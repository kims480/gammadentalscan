import axios from "~/plugins/axios";
// import Storage from "./storage";

export const state = () => ({
  user:{}, //Storage.getLocalStorage("access_token") ||
  scopes: [],
  files:[],
});

export const getters = {
  
};

export const mutations = {
  SET_VALIDATIONS_ERRORS: (state, errors) => {
    state.errors = errors;
  },
  SET_G_USER: (state, patients) => {
    // console.log(token.access_token);
    state.patients.length = 0;
    state.patients.push(patients);

    // localStorage.setItem("access_token", token.access_token);
  }
};

export const actions = {
  getGoogleUser({ commit, rootState }) {
    this.$axios.defaults.headers.common["Authorization"] =
      "" + this.$auth.getToken("local");

    return new Promise((resolve, reject) => {
      this.$axios
        .get("patient")
        .then(res => {
          console.log(res);
          commit("SET_PATIENTS", res.data);
          resolve(res);
          //
          // console.log(this.$store.state.auth.loggedIn);
          // console.log(this.$store.state.auth.user);
        })
        .catch(err => {
          console.log("------------------------------------");
          console.log(err);
          console.log("------------------------------------");
          reject(err);
        });
    });
  },
  clearErrors({ commit }) {
    commit("SET_VALIDATIONS_ERRORS", {});
  }
};
