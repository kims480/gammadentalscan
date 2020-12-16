import Vuex from "vuex";
import Vue from "vue";
import * as largeSidebarM from "@/store/modules/largeSidebar";
// import compactSidebar from "./modules/compactSidebar";
// import chat from "./modules/chat";
import * as configM from "@/store/modules/config";
import auth from "@/store/modules/auth";
// import invoice from "./modules/invoice";
// import cart from "./modules/cart";
// import verticalSidebar from "./modules/verticalSidebar";
import scrumboard from "@/store/modules/scrumboard";
import * as users from "@/store/modules/users";
import * as patient from "@/store/modules/patient";
import * as scanRequest from "@/store/modules/scanrequest";
import * as doctor from "@/store/modules/doctor";
import * as validation from "@/store/modules/validation";
import * as notifications from "@/store/modules/notifications";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        auth,
        users,
        largeSidebarM,
        configM,
        doctor,
        patient,
        scanRequest,
        notifications,
        // compactSidebar,
        // chat,
        // authData,
        // invoice,
        // cart,
        // verticalSidebar,
        validation,
        scrumboard
    },
    state:{
        isLoggedIn:false,
        isLoading:false,
        loggedInUserID:null,
        loggedInUser:{},
        user:{},
        error:null
    },
    mutations: {
        setUser(state, data) {
          state.loggedInUserID = data.userId;
          state.loggedInUser = data.userData;
          state.isLoggedIn= data.isLoggedIn,
          state.loading = false;
          state.error = null;

        },
        setLogout(state) {
            state.loggedInUserID = null;
            state.loggedInUser = null;
            state.loading = false;
            state.isLoggedIn = false;
            state.error = null;
            // this.$router.go("/");
          },
    },
    actions:{
        // async loadStoredState({commit}){},
        async loadUserState({commit}){
            const userInfo = localStorage.getItem("userInfo")
            if(userInfo){
                commit('setUser',JSON.parse(userInfo))
             }
        },
        async signOut({commit}) {

            localStorage.removeItem("userInfo");
            commit("setLogout");

        }
    },
    getters:{
        isAuth:state=>{ return state.isLoggedIn},
        loggedUserID:state=>{ return state.loggedInUserID},
        loggedUser:state=>{ return state.loggedInUser},
        User:state=>{ return state.user},
    }
});
