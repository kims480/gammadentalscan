<template>
    <v-app class="app-admin-wrap layout-sidebar-large clearfix">
        <component :is="forceLayoutIfNotLoggedIn"></component>
        <!--<router-view></router-view>-->
        <template v-if="show">
            <notifications :snackbar="notifications.show" :text="notifications.message" ></notifications>
        </template>
    </v-app >
</template>

<script>
import Notifications from '@/components/Notifications.vue';
const default_layout="large-sidebar"
import { mapGetters, mapActions } from "vuex";
// import store from "@/store";
import ServicesConst from '@/services/ServicesConst.js'
export default {
    name: "GammaDental",
    components: {

    },
    data: () => ({
        mainSection: null,
        MainPage: null,
        SubPage: null
    }),
    created(){
        ServicesConst.apiClient.get('/sanctum/csrf-cookie');
    },
    methods: {
        getBread() {
            let currentParentUrl = this.$route.path
                .split("/")
                .filter(x => x !== "");

            if (
                currentParentUrl[1] !== undefined &&
                currentParentUrl[1] !== null
            ) {
                // console.log(currentParentUrl);

                (this.mainSection = currentParentUrl[0].toLowerCase()),
                    (this.MainPage = currentParentUrl[1].toLowerCase()),
                    (this.SubPage =
                        currentParentUrl.length > 2
                            ? currentParentUrl[2].toLowerCase()
                            : null);
            } else {
                this.mainSection = "Home";
            }
        }
    },
    computed: {
        ...mapGetters({getThemeMode:"configM/getThemeMode",isAuth:"isAuth",notifications:"notifications/notifications",show:"notifications/showNotifications"}),
        layoutName() {
            // console.log(this.getThemeMode);
            // console.dir(this.$store.getters["configM/getThemeMode"].layout);
            // return this.$store.getters["configM/getThemeMode"].layout +'-layout';
            // return (this.$route.meta.layout  || this.$store.getters["configM/getThemeMode"].layout )+'-layout';
            return (this.$route.meta.layout  || this.getThemeMode.layout )+'-layout';
            // this.$store.getters["configM/getThemeMode"].layout
            //     ? "large-sidebar"
            //     : " ";
        },
        forceLayoutIfNotLoggedIn(){
            // console.log(this.isLoggedIn);
            return this.isLoggedIn ? this.layoutName : 'auth-layout';
        },
        isLoggedIn() {
            return (this.isAuth);
        },
        themeName() {
            return this.$store.getters["configM/getThemeMode"].dark
                ? "dark-theme"
                : " ";
        },
        rtl() {
            return this.$store.getters["configM/getThemeMode"].rtl
                ? "rtl"
                : " ";
        },

        get() {
            let currentParentUrl = this.$route.path
                .split("/")
                .filter(x => x !== "");

            if (
                currentParentUrl[1] !== undefined &&
                currentParentUrl[1] !== null
            ) {
                // console.log(currentParentUrl);

                (this.mainSection = currentParentUrl[0].toLowerCase()),
                    (this.MainPage = currentParentUrl[1].toLowerCase()),
                    (this.SubPage =
                        currentParentUrl.length > 2
                            ? currentParentUrl[2].toLowerCase()
                            : null);
            } else {
                currentParentUrl[0] !== undefined &&
                currentParentUrl[0] !== null
                    ? (this.mainSection = currentParentUrl[0].toLowerCase())
                    : (this.mainSection = "Home");
                this.MainPage = null;
                this.SubPage = null;
            }
        }
    },
    metaInfo() {
        return {
            // if no subcomponents specify a metaInfo.title, this title will be used
            // all titles will be injected into this template
            titleTemplate: "%s | Gamma Dental Scan",
            title: "Admin Dashboard",
            bodyAttrs: {
                class: [
                    this.$store.getters["configM/getThemeMode"].theme_color,
                    "text-left"
                ]
            },
            htmlAttrs: {
                dir: this.$store.getters["configM/getThemeMode"].rtl
            }
        };
    }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding:0;
}
html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;

}
body {
    background: #fcfcfc;
    overflow-y: hidden;
}
.main-content-wrap {

    margin-top: 60px;
}
.icon-font {
    font-size: 18px;
    /* font-weight: bolder; */
}





</style>
