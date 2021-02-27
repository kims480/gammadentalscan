// import firebase from "firebase/app";
import ServicesConst from "@/services/ServicesConst";
import UserServices from "@/services/UserServices.js";
// import { user } from "../../data/chat";
// import { namespaced } from "./largeSidebar";
// import "firebase/auth";

export default {
    namespaced: true,

    state: {
        loggedInUser:
            localStorage.getItem("userInfo") != null
                ? JSON.parse(localStorage.getItem("userInfo"))
                : null,
        loading: false,
        error: null,
        isLoggedIn: false,
        user: {},
        token: localStorage.getItem("token"),
        roles: localStorage.getItem("permissions")
    },
    getters: {
        loggedInUser: state => state.loggedInUser,
        loggedInUserData: state => state.user,
        loading: state => state.loading,
        error: state => state.error,
        userPermissions: state => JSON.parse(state.permissions) || [],
        checkPermission: (state, getters) => roleCode => {
            const result = !!(
                roleCode === undefined ||
                getters.userPermissions.filter(el => el === roleCode).length > 0
            );
            return result;
        },
        userInfo: state => {
            return (
                JSON.parse(state.user) || {
                    active: null,
                    email: null,
                    name: null
                }
            );
        }
    },
    mutations: {
        LOGIN(state, data) {
            state.loginFailed = false;
            const jwt = data.jwt;
            // console.log(data)
            // console.log(jwt)
            localStorage.setItem("token", jwt);
            state.token = jwt;
        },
        setUser(state, data) {
            // console.log(rootState)
            state.loggedInUser = data.id;
            state.loading = false;
            state.isLoggedIn = true;
            state.error = null;
            state.user = data.user;
            state.permissions = data.roles;
        },
        setLogout(state) {
            state.loggedInUser = null;
            state.loading = false;
            state.isLoggedIn = false;
            state.error = null;
            state.user = null;
            state.token = null;
            state.permissions = null;
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("permissions");
            localStorage.clear();

            // this.$router.go("/");
        },
        setLoading(state, data) {
            state.loading = data;
            state.error = null;
        },
        setError(state, data) {
            state.error = data;
            state.loggedInUser = null;
            state.loading = false;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
        async login({ commit }, data) {
            // return new Promise(function(resolve, reject) {
            // console.log(data);
            commit("clearError");
            commit("setLoading", true);
            const $credintials = {
                email: data.email,
                password: data.password
            };
            await ServicesConst.apiClient.get("/sanctum/csrf-cookie");
            await ServicesConst.apiClient.post("/login", $credintials);
            return new Promise((resolve, reject) => {
                let data = {
                    jwt: null,
                    user: null,
                    permissions: null
                };
                UserServices.login($credintials)
                    // .then(response =>
                    //     response.json())
                    .then(result => {
                        // console.log(result)
                        data.jwt = result.data.jwt;
                        commit("LOGIN", data);
                        // console.log('res :');
                        // console.log(res.data);
                        resolve(result);
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        // var errorCode = error.code;
                        // var errorMessage = error.message;
                        // console.log(error);
                        // localStorage.removeItem("userInfo");
                        commit("setError", error);
                        // ...
                        reject(error);
                    });
            });
        },
        async register({ commit }, data) {
            // return new Promise(function(resolve, reject) {
            // console.log(data);
            commit("clearError");
            commit("setLoading", true);
            // const  $credintials={
            //     email:data.email,
            //     password:data.password
            // };
            // await ServicesConst.apiClient.get('/sanctum/csrf-cookie');
            // await ServicesConst.apiClient.post('/register',$credintials);
            // await ServicesConst.apiClient.get('/sanctum/csrf-cookie');
            return new Promise((resolve, reject) => {
                ServicesConst.myApiClient
                    .post("/register", data)
                    .then(res => {
                        console.log("res :");
                        console.log(res);
                        resolve(res);
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        // var errorCode = error.code;
                        // var errorMessage = error.message;
                        // console.log(error);
                        localStorage.removeItem("userInfo");
                        commit("setError", error);
                        // ...
                        reject(error);
                    });
            });
        },
        async user({ commit, rootState }) {
            return new Promise((resolve, reject) => {
                UserServices.user()
                    .then(resp => {
                        commit("setUser", resp.data);
                        // console.log(resp.data);

                        const newUser = {
                            isLoggedIn: true,
                            userId: resp.data.user.id,
                            userData: {
                                id: resp.data.user.is,
                                email: resp.data.user.email,
                                userName: resp.data.user.name
                            }
                        };
                        localStorage.setItem(
                            "userInfo",
                            JSON.stringify(newUser)
                        );
                        const user = JSON.stringify(resp.data.user);
                        const permissions = JSON.stringify(resp.data.roles);
                        localStorage.setItem("user", user);
                        localStorage.setItem("permissions", permissions);
                        rootState.isLoggedIn = true;
                        rootState.loggedInUserID = newUser.userId;
                        rootState.loggedInUser = newUser.userData;
                        rootState.user = user;
                        rootState.loading = false;
                        rootState.error = null;
                        rootState.roles = permissions;
                        resolve(resp.data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        async getUsers({ commit }) {
            await UserServices.user().then(resp => {
                console.log(resp.data);
                const newUser = {
                    isLoggedIn: true,
                    userId: resp.data.id,
                    userData: {
                        email: resp.data.email,
                        userName: resp.data.name
                    }
                };
                localStorage.setItem("userInfo", JSON.stringify(newUser));
                rootState.loggedInUser = resp.data.id;
                rootState.loading = false;
                rootState.isLoggedIn = true;
                rootState.error = null;
                rootState.user = resp.data;
                commit("setUser", resp.data);
            });
        },

        /* signUserUp({commit}, data) {
commit("setLoading", true);
commit("clearError");
firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(user => {
    commit("setLoading", false);

    const newUser = {
        uid: user.user.uid
    };
    console.log(newUser);
    localStorage.setItem("userInfo", JSON.stringify(newUser));
    commit("setUser", newUser);
    })
    .catch(error => {
    commit("setLoading", false);
    commit("setError", error);
    localStorage.removeItem("userInfo");
    console.log(error);
    });
},
*/
        async logout({ commit }) {
            // document.cookie = 'cookie-token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // To delete a cookie use in vuejs
            return new Promise((resolve, reject) => {
                try {
                    //;                UserServices.logout()

                    ServicesConst.apiClient
                        .post("/logout")
                        .then(res => {
                            // console.log(res);
                            delCookies();
                            // this.$cookie.delete('cookie-token');
                            // this.$cookie.delete('XSRF-TOKEN');
                            // this.$cookie.delete('gamma_dental_scan_session');
                            resolve(res);
                            commit("setLogout");
                        })
                        .catch(err => {
                            console.log(err);
                            localStorage.setItem("Error", JSON.stringify(err));
                            reject(err);
                        });
                } catch (err) {
                    // console.log(err);
                    localStorage.setItem("Logout_Error", JSON.stringify(err));
                }
            });
        }
    }
};
function setCookie(cname, cvalue, exMins) {
    var d = new Date();
    d.setTime(d.getTime() + exMins * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delCookies() {
    setCookie("cookie-token", "", 0); // this will delete the cookie.
    setCookie("XSRF-TOKEN", "", 0); // this will delete the cookie.
    setCookie("gamma_dental_scan_session", "", 0); // this will delete the cookie.
}
const getUrl = url => {
    let urlArray = [];
    if (auth.api) {
        urlArray.push(auth.api);
    } else {
        urlArray.push(api.url);
        if (api.path.prefix) {
            urlArray.push(api.path.prefix);
        }
    }
    if (auth.prefix) {
        urlArray.push(auth.prefix);
    }
    urlArray.push(url);
    return urlArray.join("/");
};
