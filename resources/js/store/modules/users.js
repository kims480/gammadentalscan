import axios from "@/plugins/axios";
import ServicesConst from "@/services/ServicesConst";
import UserServices from "@/services/UserServices";
export const namespaced = true;

export const state = () => ({
    permissions:null,
    roles:null
});



export const mutations = {
    SET_ALL_PERMISSIONS:(state,data)=>{
        state.permissions = data
    },
    SET_ALL_ROLES:(state,data)=>{
        state.roles = data
    },
    SET_USER_CREATE:(state,data)=>{
        state.user=data
    }
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
    userRegister({ commit, rootState }, data) {
        // axios.defaults.headers.common["Content-Type"] =
        //     "multipart/form-data";
     console.log(data)
    //  let form= new FormData()
    //  form.append('file',data.image)
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient
                .post("createWithRolesPremissions", data
                ,{
                    headers: {
                        // 'enctype': 'multipart/form-data',
                        // 'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
                    }
                  }
                ).then(res => {
                    // console.log(res);
                    commit("SET_USER_CREATE", res.data);
                    /* this.$auth.setUserToken(res.data.access_token);
          // rootState.auth.token = this.$auth.getToken("local");
          rootState.auth.loggedIn = true;
          rootState.auth.user = this.$auth.getToken("local"); */
                    resolve(res.data);
                    //
                    // console.log(this.$store.state.auth.loggedIn);
                    // console.log(this.$store.state.auth.user);
                })
                .catch(err => {
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
    },
    getRolesPermissions({commit}){
        return new Promise((resolve, reject) => {
            ServicesConst.myApiClient.get('getAllRolesPremissions').then(res=>{
                if(res)
                commit('SET_ALL_PERMISSIONS',res.data.allPermissions)
                commit('SET_ALL_ROLES',res.data.allRoles)
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });

        });
    }
};


/* GETTERS */
export const getters = {
    allRoles: state => {
        // console.log(store);
        return state.permissions;
    },
    allPermissions: state => {
        // console.log(store);
        return state.roles;
    },

};
