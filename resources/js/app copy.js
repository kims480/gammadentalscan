import Vue from "vue";
import VueRouter from "vue-router";
// import Vuex from "vuex";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import router from "./router.js";
import App from "./components/App.vue";
import GammaDentalScan from "./plugins/GammaDentalScan.kit";
// import "babel-polyfill";
// import es6Promise from "es6-promise";
// es6Promise.polyfill();
import store from "./store/index";
import Breadcumb from "./components/breadcumb";
// import firebase from "firebase/app";
// import "firebase/auth";
// import { firebaseSettings } from "@/data/config";
import i18n from "./lang/lang";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";

//defined as global component
Vue.component(
    "VueFontawesome",
    require("vue-fontawesome-icon/VueFontawesome.vue").default
);

Vue.component("breadcumb", Breadcumb);
import InstantSearch from "vue-instantsearch";
// Vue.use(VueRouter);
// window.Vue = require("vue");
Vue.use(VueRouter);

//mounting Vuex
// Vue.use(Vuex);

Vue.use(InstantSearch);
Vue.use(GammaDentalScan);

// firebase.initializeApp(firebaseSettings);

Vue.config.productionTip = false;

require("./bootstrap");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );

const app = new Vue({
    el: "#app",
    components: {
        App
    },
    router,
    store,
    vuetify,
    i18n
});
