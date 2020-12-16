// import firebase from "firebase/app";
import ServicesConst from "@/services/ServicesConst";
import UserServices from "@/services/UserServices.js";
import { user } from "../../data/chat";
// import { namespaced } from "./largeSidebar";
// import "firebase/auth";

export default {
    namespaced:true,

    state: {
        loggedInUser:
        localStorage.getItem("userInfo") != null
            ? JSON.parse(localStorage.getItem("userInfo"))
            : null,
        loading: false,
        error: null,
        isLoggedIn:false,
        user:{}
    },
  getters: {
    loggedInUser: state => state.loggedInUser,
    loggedInUserData: state => state.user,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
            setUser(state, data) {
                // console.log(rootState)
                state.loggedInUser = data.id;
                state.loading = false;
                state.isLoggedIn = true;
                state.error = null;
                state.user = data;
            },
            setLogout(state) {
            state.loggedInUser = null;
            state.loading = false;
            state.isLoggedIn = false;
            state.error = null;

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
            async login({commit}, data) {
                // return new Promise(function(resolve, reject) {
                // console.log(data);
                    commit("clearError");
                    commit("setLoading", true);
                const  $credintials={
                    email:data.email,
                    password:data.password
                };
                await ServicesConst.apiClient.get('/sanctum/csrf-cookie');
                await ServicesConst.apiClient.post('/login',$credintials);

                await UserServices.login($credintials)

                .then((res) => {

                    // console.log('res :');
                    // console.log(res.data);

                })
                .catch(function(error) {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // console.log(error);
                localStorage.removeItem("userInfo");
                commit("setError", error);
                // ...
                });
            },
            async register({commit}, data) {
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

                await UserServices.register(data)

                .then((res) => {

                    console.log('res :');
                    console.log(res.data);

                })
                .catch(function(error) {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // console.log(error);
                localStorage.removeItem("userInfo");
                commit("setError", error);
                // ...
                });
            },
            async user({commit,rootState}){
                await UserServices.user().then(resp=>{
                    commit("setUser",  resp.data);
                    console.log(resp.data);
                    const newUser = {isLoggedIn: true,userId: resp.data.id ,userData: {email:resp.data.email, userName:resp.data.name}};
                    localStorage.setItem("userInfo", JSON.stringify(newUser));
                    rootState.isLoggedIn = true;
                    rootState.loggedInUserID = resp.data.id;
                    rootState.loggedInUser = {email:resp.data.email, userName:resp.data.name};
                    rootState.user = resp.data;
                    rootState.loading = false;
                    rootState.error = null;

                });
            },
            async getUsers({commit}){
                await UserServices.user().then(resp=>{
                    console.log(resp.data);
                    const newUser = {isLoggedIn: true,userId: resp.data.id ,userData: {email:resp.data.email, userName:resp.data.name}};
                    localStorage.setItem("userInfo", JSON.stringify(newUser));
                    rootState.loggedInUser = resp.data.id;
                    rootState.loading = false;
                    rootState.isLoggedIn = true;
                    rootState.error = null;
                    rootState.user = resp.data;
                    commit("setUser",  resp.data);

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
            async logout({commit}) {

                // document.cookie = 'cookie-token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                // To delete a cookie use in vuejs

                return new Promise((resolve, reject) =>
                    {
                        try{
                            localStorage.removeItem("userInfo");
                            ServicesConst.apiClient.post( "/logout");
                            UserServices.logout().then( (res)=>{
                                console.log(res);
                                delCookies();
                                // this.$cookie.delete('cookie-token');
                                // this.$cookie.delete('XSRF-TOKEN');
                                // this.$cookie.delete('gamma_dental_scan_session');
                                commit("setLogout");
                                resolve(res)
                            }).catch(err=>{
                                console.log(err);
                                reject(err)
                            });
                        }catch(err)
                        {
                            console.log(err);

                            }

                    })
                }
  }
}
function setCookie(cname, cvalue, exMins) {
    var d = new Date();
    d.setTime(d.getTime() + (exMins*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delCookies(){
    setCookie('cookie-token','',0) // this will delete the cookie.
                        setCookie('XSRF-TOKEN','',0) // this will delete the cookie.
                        setCookie('gamma_dental_scan_session','',0) // this will delete the cookie.
}
