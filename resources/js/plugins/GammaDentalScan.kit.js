// import BootstrapVue from "bootstrap-vue";
// import vuePerfectScrollbar from "vue-perfect-scrollbar";
import VueTour from "vue-tour";
// import SmartTable from "vuejs-smart-table";
import VueTagsInput from "@johmun/vue-tags-input";
import VueTheMask from "vue-the-mask";
import Vuelidate from "vuelidate";
import VueFormWizard from "vue-form-wizard";
import VueLazyload from "vue-lazyload";
// import VCalendar from "v-calendar";
import VueGoodTablePlugin from "vue-good-table";
// import VueSlider from "vue-slider-component";
import Meta from "vue-meta";
import FlagIcon from "vue-flag-icon";

// import "./../../sass/themes/lite-purple.scss";
import "../plugins/echarts";
import "../plugins/apexChart.js";
import "../plugins/sweetalert2.js";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
// import "v2-datepicker/lib/index.css"; // v2 need to improt css
// import V2Datepicker from "v2-datepicker";

// locale.use(lang);
// register the plugin on vue
import Toasted from 'vue-toasted';


export default {
    install(Vue) {
        // Vue.use(BootstrapVue);
        Vue.component(
            "large-sidebar-layout",
            // The `import` function returns a Promise.
            () =>
                import(
                    /* webpackChunkName: 'admin-Layout' */ "@/layouts/largeSidebar"
                )
        );
        Vue.component(
            "notifications",
            // The `import` function returns a Promise.
            () =>
                import(
                    /* webpackChunkName: 'notifications' */ "@/components/Notifications"
                )
        );
        Vue.component(
            "dashboard-layout",
            // The `import` function returns a Promise.
            () =>
                import(
                    /* webpackChunkName: 'default-Layout' */ "@/layouts/default"
                )
        );
        Vue.component(
            "auth-layout",
            // The `import` function returns a Promise.
            () =>
                import(
                    /* webpackChunkName: 'auth-Layout' */ "@/layouts/auth"
                )
        );
        Vue.component(
            "doctor-layout",
            // The `import` function returns a Promise.
            () =>
                import(
                    /* webpackChunkName: 'doctor-Layout' */ "@/layouts/doctor"
                )
        );
        Vue.component(
            "xyz-layout",
            // The `import` function returns a Promise.
            () =>
                import(
                    /* webpackChunkName: 'xyz-Layout' */ "@/layouts/xyz"
                )
        );

        // Vue.component(
        //     "compact-sidebar",
        //     // The `import` function returns a Promise.
        //     () => import("../containers/layouts/compactSidebar")
        // );
        // Vue.component(
        //     "vertical-sidebar",
        //     // The `import` function returns a Promise.
        //     () => import("../containers/layouts/verticalSidebar")
        // );
        // Vue.component(
        //     "customizer",
        //     // The `import` function returns a Promise.
        //     () => import("../components/common/customizer.vue")
        // );
        Vue.component("vue-perfect-scrollbar", () =>
            import(/* webpackChunkName: 'perfect-scrollbar' */ "vue2-perfect-scrollbar")
        );
        Vue.component("v-errors", () =>
            import(/* webpackChunkName: 'v-errors' */ "@/components/vErrors")
        );
        // Vue.component(VueCropper);
        Vue.use(Meta, {
            keyName: "head",
            attribute: "data-vue-meta",
            ssrAttribute: "data-vue-meta-server-rendered",
            tagIDKeyName: "vmid",
            refreshOnceOnNavigation: true
        });
        // Vue.use(V2Datepicker);
        Vue.use(FlagIcon);
        // vueslider
        // Vue.component("VueSlider", () => import("vue-slider-component"));
        //vuelidate
        Vue.use(Vuelidate);
        // maskForm
        Vue.use(VueTheMask);
        //form wizard globally

        Vue.use(VueFormWizard);

        // tags input plugin
        Vue.use(VueTagsInput);

        // smart table plugin
        // Vue.use(SmartTable);

        // vue-good-table

        // import the styles

        Vue.use(VueGoodTablePlugin);

        // import VueCropper from "./plugins/imageCropper";

        // Use v-calendar & v-date-picker components
        // Vue.use(VCalendar, {
        //   componentPrefix: "v" // Use <vc-calendar /> instead of <v-calendar />
        //   // ...other defaults
        // });


        // you can also pass options, check options reference below


        Vue.use(Toasted)
        Vue.toasted.register('my_app_error', 'Oops.. Something Went Wrong..', {
            type : 'error',
            icon : 'error_outline'
        })
        Vue.toasted.register('Not_Authorized', 'You are not authorized to access this Page/Data', "Toasted !!", {
            theme: "bubble",
            position: "top-center",
            duration : 5000,
            type : 'error',
            icon : 'error_outline'
        })
        // console.log(Toasted.global)
        Vue.use(VueTour);
        Vue.use(VueLazyload, {
            observer: true,
            // optional
            observerOptions: {
                rootMargin: "0px",
                threshold: 0.1
            }
        });
    }

};
