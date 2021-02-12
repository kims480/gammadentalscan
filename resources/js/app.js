import Vue from "vue";
import VueRouter from "vue-router";
import VueHtmlToPaper from "vue-html-to-paper";
import VueHtml2Canvas from "vue-html2canvas";

// import Vuex from "vuex";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import router from "./router.js";
// import App from "./components/App.vue";
import GammaDental from "./components/AppB.vue";
import GammaDentalScan from "./plugins/GammaDentalScan.kit";
// import "babel-polyfill";
// import es6Promise from "es6-promise";
// es6Promise.polyfill();
import store from "./store/index";
import Breadcumb from "./components/breadcumb";
// import firebase from "firebase/app";
// import "firebase/auth";
// import { firebaseSettings } from "@/data/config";
// import i18n from "./lang/lang";
import i18n from "./locales/index";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)

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
const printOptions = {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
    styles: [
        // "https://gamma-dental-scan.dev/public/css/app.css",
        "https://gamma-dental-scan.dev/public/css/print.css"
    ]
};
Vue.use(VueHtmlToPaper, printOptions);
Vue.use(VueHtml2Canvas);
// firebase.initializeApp(firebaseSettings);

Vue.config.productionTip = false;
// Enable pusher logging - don't include this in production

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

/*
pusher::
gamma-dental-scan-development
gamma-dental-scan-staging
gamma-dental-scan-production
*/
Vue.prototype.$reverseText = function(propertyName) {
    this[propertyName] = this[propertyName]
        .split("")
        .reverse()
        .join("");
};

const app = new Vue({
    el: "#gamma-dental-scan",
    components: {
        // App
        GammaDental
    },
    router,
    store,
    vuetify,
    i18n,
    data: {
        messages: []
    },
    async beforeCreate() {
        // this.$store.dispatch('loadStoredState');
        this.$store.dispatch("loadUserState");
    }
    //     // await axios.get('/sanctum/csrf-cookie');
    //     // await axios.post('/login',{
    //     //     email:"ullrich.evie@example.com",
    //     //     password:'password'
    //     // });
    //     // await axios.get('/user');
    // },
});
