<template>
    <div>
        <TopNav />

        <template v-if="isAuth /* $auth.hasScope('super_admin') */">
            <Sidebar />
        </template>
        <notifications></notifications>
        <main>
            <div
                :class="{
                    'sidenav-open': isSideNavOpen
                }"
                class="main-content-wrap d-flex flex-column"
            >
                <dashBreadCrumb
                    :mainSection="mainSection"
                    :MainPage="MainPage"
                    :SubPage="SubPage"
                />
                {{ get }}
                <separator></separator>
                <v-container
                    elevation="1"
                    style="margin-bottom:60px"                   
                    >
                <transition name="page" mode="out-in">
                    <router-view></router-view>
                </transition>
                </v-container>
                <v-speed-dial
                    v-model="fab"
                    fixed
                    bottom
                    right
                    direction="top"
                    :open-on-hover="hover"
                    :transition="transition"
                    style="z-index:100"
                    >
                    <template v-slot:activator>
                        <v-btn v-model="fab" color="blue darken-2"  dark fab>
                            <v-icon v-if="fab">
                                mdi-close
                            </v-icon>
                            <v-icon v-else>
                                mdi-account-circle
                            </v-icon>
                        </v-btn>
                    </template>
                    <v-btn
                        fab
                        dark
                        small
                        color="green"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="indigo"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="red"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-speed-dial>

                <appFooter />
            </div>
        </main>
    </div>
</template>

<script>
// import TopNav from '../containers/layouts/largeSidebar/TopNav.vue';
import TopNav from "@/layouts/partials/TopNav";
// import breadcumb from "./../components/breadcumb";
import dashBreadCrumb from "@/components/dashBreadCrumb";
import Sidebar from "@/layouts/largeSidebar/Sidebar";
import { PerfectScrollbar as VuePerfectScrollbar } from "vue2-perfect-scrollbar";
// import Sidebar from "./largeSidebar/Sidebar";
// import appFooter from "@/layouts/common/footer";
import appFooter from "@/layouts/common/footerVtfy";
import { mapGetters, mapActions } from "vuex";
import Notifications from '@/components/Notifications.vue';
import Separator from '@/components/separator.vue';
// import Layout from "./../layouts/default";
export default {
    components: {
        TopNav,
        Sidebar,
        appFooter,
        dashBreadCrumb,
        VuePerfectScrollbar,
        Notifications,
        Separator
    },
    data: () => ({
        mainSection: null,
        MainPage: null,
        SubPage: null,
        drawer: true,
        items: [
            { id: 1, title: "Home", link: "home", icon: "mdi-home-city" },
            {
                id: 2,
                title: "users",
                link: "users",
                icon: "mdi-account-multiple"
            },
            {
                id: 3,
                title: "doctors",
                link: "doctors",
                icon: "mdi-account-group-outline"
            },
            { id: 4, title: "Patients", link: "patients", icon: "mdi-account" },
            { id: 5, title: "Requests", link: "requests", icon: "mdi-account" },
            { id: 6, title: "Storage", link: "storage", icon: "mdi-account" },
            { id: 7, title: "Messages", link: "messages", icon: "mdi-account" },
            {
                id: 8,
                title: "Notification",
                link: "notification",
                icon: "mdi-account"
            },
            { id: 9, title: "Services", link: "services", icon: "mdi-account" },
            { id: 10, title: "Rating", link: "points", icon: "mdi-heart" },
            { id: 11, title: "offers", link: "offers", icon: "mdi-account" }
        ],
         direction: 'bottom',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
        mini: true
    }),
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

                (this.mainSection = currentParentUrl[0].toUpperCase()),
                    (this.MainPage = currentParentUrl[1].toLowerCase()),
                    (this.SubPage =
                        currentParentUrl.length > 2
                            ? currentParentUrl[2].toLowerCase()
                            : null);
            } else {
                this.mainSection = "Home".toUpperCase();
            }
        }
    },
    computed: {
        ...mapGetters("largeSidebarM", ["getSideBarToggleProperties"]),
        ...mapGetters(["configM/getThemeMode"]),
        ...mapGetters({isAuth:"isAuth"}),
        activeFab () {
            switch (this.tabs) {
            case 'one': return { class: 'purple', icon: 'account_circle' }
            case 'two': return { class: 'red', icon: 'edit' }
            case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
            default: return {}
            }
        },
        themeName() {
            return this.$store.getters["configM/getThemeMode"].dark
                ? "dark-theme"
                : " ";
        },
        isLoggedIn() {
            return false;
        },
        isSideNavOpen() {
            return this.$store.getters[
                "largeSidebarM/getSideBarToggleProperties"
            ].isSideNavOpen;
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

                (this.mainSection = currentParentUrl[0].toUpperCase()),
                    (this.MainPage = currentParentUrl[1].toLowerCase()),
                    (this.SubPage =
                        currentParentUrl.length > 2
                            ? currentParentUrl[2].toLowerCase()
                            : null);
            } else {
                currentParentUrl[0] !== undefined &&
                currentParentUrl[0] !== null
                    ? (this.mainSection = currentParentUrl[0].toUpperCase())
                    : (this.mainSection = "Home".toUpperCase());
                this.MainPage = null;
                this.SubPage = null;
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
