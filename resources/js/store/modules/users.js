import axios from "@/plugins/axios";
import ServicesConst from "@/services/ServicesConst";
import UserServices from "@/services/UserServices";
export const namespaced = true;
export const getters = {
    authenticated: store => {
        // console.log(store);
        return store.loggedIn;
    },
    loggedIn: store => {
        // console.log(store);
        return store.loggedIn;
    },
    user: state => {
        return state.auth.user;
    }
};
export const state = () => ({
    // busy: false,
    loggedIn: false,
    token: null,
    // strategy: "local",
    user: {},
    users: []
});
export const mutations = {
    SET_VALIDATIONS_ERRORS: (state, errors) => {
        state.errors = errors;
    },
    SET_TOKEN: (state, data) => {
        // console.log(data.user);
        state.user = data.user;
        state.loggedIn = !(state.user == null);
        state.token = data.token;
        // localStorage.setItem("access_token", token.access_token);
    },
    REMOVE_TOKEN: state => {
        localStorage.removeItem("access_token");
        state.token = null;
    },
    SET_USER_LIST: (state, data) => {
        state.users.length = 0;
        state.users.push(data);
    },
    SET_USER_CREATE: (state, data) => {}
};
export const actions = {
    retriveToken({ commit, rootState }) {
        return new Promise((resolve, reject) => {
            let data = {
                token: localStorage.getItem("auth._token.local"),
                user: rootState.auth.user
            };
            // console.log(data);
            commit("SET_TOKEN", data);
        });
    },
    async getUsers({ commit, rootState }) {
        // ServicesConst.apiClient.defaults.headers.common["Authorization"] =
        //     "" + UserServices.login("local");

        return new Promise((resolve, reject) => {
            console.log('Iam get User');
            UserServices.getUsers()
                .then(res => {
                    console.log(res);
                    commit("SET_USER_LIST", res.data);
                    /* this.$auth.setUserToken(res.data.access_token);
          // rootState.auth.token = this.$auth.getToken("local");
          rootState.auth.loggedIn = true;
          rootState.auth.user = this.$auth.getToken("local"); */
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

            // await this.$axios.post("api/auth/login", this.form);
            // console.log(data);
        });
    },
    createUser({ commit, rootState }, data) {
        this.$axios.defaults.headers.common["Authorization"] =
            "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            this.$axios
                .post("register", data)
                .then(res => {
                    // console.log(res);
                    commit("SET_USER_CREATE", res.data);
                    /* this.$auth.setUserToken(res.data.access_token);
          // rootState.auth.token = this.$auth.getToken("local");
          rootState.auth.loggedIn = true;
          rootState.auth.user = this.$auth.getToken("local"); */
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

            // await this.$axios.post("api/auth/login", this.form);
            // console.log(data);
        });
    },
    getUserDoctors({ commit, rootState }, id) {
        this.$axios.defaults.headers.common["Authorization"] =
            "" + this.$auth.getToken("local");

        return new Promise((resolve, reject) => {
            this.$axios
                .post("child/doctors/" + id)
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
    getToken({ commit, rootState }, data) {
        return new Promise((resolve, reject) => {
            this.$auth
                .login({ data: data })
                .then(res => {
                    // console.log(res);
                    commit("SET_TOKEN", res.data);
                    this.$auth.setUserToken(res.data.access_token);
                    // rootState.auth.token = this.$auth.getToken("local");
                    rootState.auth.loggedIn = true;
                    rootState.auth.user = this.$auth.getToken("local");
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

            // await this.$axios.post("api/auth/login", this.form);
            // console.log(data);
        });
    }
};
