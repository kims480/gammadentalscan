import Vue from "vue";
import Vuetify from "vuetify";

import { TiptapVuetifyPlugin } from "tiptap-vuetify";
import "tiptap-vuetify/dist/main.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
// Translation provided by Vuetify (typescript)
import ar from "vuetify/src/locale/ar";
import en from "vuetify/src/locale/en";
// import  from 'vuetify/src/locale/ar'
Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: "mdi" // default - only for display purposes
    },
    lang: {
        locales: { en, ar },
        current: "en"
    }
};
Vue.use(TiptapVuetifyPlugin, {
    // the next line is important! You need to provide the Vuetify Object to this place.
    vuetify: Vuetify, // import { ar } from 'vuetify/src/locale/ar.ts';

    // optional, default to 'md' (default vuetify icons before v2.0.0)
    iconsGroup: "md"
});
export default new Vuetify(opts);
