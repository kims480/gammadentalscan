<template>
  <div>
    <TopNav />
    <section>
      <template v-if="isAuth /* $auth.hasScope('super_admin') */">
        <Sidebar />
      </template>
      <!-- <notifications></notifications> -->
      <v-main
        :class="{
          'sidenav-open': isSideNavOpen,
        }"
        class="main-content-wrap green lighten-5"
      >
        <div class="page-container d-flex flex-column">
          <dashBreadCrumb
            :mainSection="mainSection"
            :MainPage="MainPage"
            :SubPage="SubPage"
          />
          {{ get }}
          <separator></separator>

          <v-container id="page-content" elevation="1">
            <transition name="page" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-container>
        </div>
      </v-main>
      <v-speed-dial
        v-model="fab"
        fixed
        bottom
        right
        direction="top"
        :open-on-hover="hover"
        :transition="transition"
        style="z-index: 100"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab"> mdi-close </v-icon>
            <v-icon v-else> mdi-account-circle </v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          v-for="(fabItem, i) in fabItems"
          :key="i"
          dark
          small
          :color="fabItem.color"
          @click="$router.push({ name: fabItem.target })"
        >
          <v-icon>{{ fabItem.icon }}</v-icon>
        </v-btn>
        <v-btn fab dark small color="blue" @click="changeLocale()">
          <v-icon>mdi-google-translate</v-icon>
        </v-btn>
      </v-speed-dial>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" inset>
          <v-sheet class="text-center" height="200px">
            <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
              close
            </v-btn>
            <div class="my-3">This is a bottom sheet using the inset prop</div>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </section>
    <appFooter />
    <v-overlay :value="overlay">
      <logo-main></logo-main>
      <!-- <v-progress-circular indeterminate size="64"></v-progress-circular> -->
    </v-overlay>
  </div>
</template>

<script>
// import TopNav from '../containers/layouts/largeSidebar/TopNav.vue';
import TopNav from "@/layouts/partials/TopNav";
// import breadcumb from "./../components/breadcumb";
import dashBreadCrumb from "@/components/dashBreadCrumb";
import Sidebar from "@/layouts/largeSidebar/Sidebar";
import { PerfectScrollbar as VuePerfectScrollbar } from "vue2-perfect-scrollbar";

import appFooter from "@/layouts/common/footerVtfy";
import { mapGetters } from "vuex";
import LogoMain from "@/components/LogoMainLoading";
import Separator from "@/components/separator.vue";
// import LogoMain from "../../components/LogoMain.vue";
// import Layout from "./../layouts/default";
export default {
  components: {
    TopNav,
    Sidebar,
    appFooter,
    dashBreadCrumb,
    VuePerfectScrollbar,
    LogoMain,
    Separator,
  },
  data: () => ({
    mainSection: null,
    MainPage: null,
    SubPage: null,
    drawer: true,
    sheet: false,
    // overlay: false,
    items: [
      { id: 1, title: "Home", link: "home", icon: "mdi-home-city" },
      {
        id: 2,
        title: "users",
        link: "users",
        icon: "mdi-account-multiple",
      },
      {
        id: 3,
        title: "doctors",
        link: "doctors",
        icon: "mdi-account-group-outline",
      },
      { id: 4, title: "Patients", link: "patients", icon: "mdi-account" },
      { id: 5, title: "Requests", link: "requests", icon: "mdi-account" },
      { id: 6, title: "Storage", link: "storage", icon: "mdi-account" },
      { id: 7, title: "Messages", link: "messages", icon: "mdi-account" },
      {
        id: 8,
        title: "Notification",
        link: "notification",
        icon: "mdi-account",
      },
      { id: 9, title: "Services", link: "services", icon: "mdi-account" },
      { id: 10, title: "Rating", link: "points", icon: "mdi-heart" },
      { id: 11, title: "offers", link: "offers", icon: "mdi-account" },
    ],
    direction: "bottom",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
    mini: true,
    fabItems: [
      {
        text: "Home",
        icon: "mdi-home",
        target: "doctor-home",
        color: "green",
      },
      {
        text: "Patients",
        icon: "mdi-shield-account",
        target: "doctor-patients",
        color: "indigo",
        sub: ["New", "List"],
      },
      {
        text: "Requests",
        icon: "mdi-file-document-edit",
        target: "doctor-request-list",
        sub: ["New", "List"],
        color: "indigo",
      },
      {
        text: "New patient",
        icon: "mdi-account-plus",
        target: "doctor-add-patient",
        color: "green",
      },
      {
        text: "New Request",
        icon: "mdi-file-plus",
        target: "doctor-request-new",
        color: "green",
      },
    ],
  }),
  methods: {
    getBread() {
      let currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "");

      if (currentParentUrl[1] !== undefined && currentParentUrl[1] !== null) {
        // console.log(currentParentUrl);

        (this.mainSection = currentParentUrl[0].toUpperCase()),
          (this.MainPage = currentParentUrl[1]
            .trim()
            .toLowerCase()
            .replace(/\w\S*/g, (w) =>
              w.replace(/^\w/, (c) => c.toUpperCase())
            )),
          (this.SubPage =
            currentParentUrl.length > 2
              ? currentParentUrl[2].toLowerCase()
              : null);
      } else {
        this.mainSection = "Home".toUpperCase();
      }
    },
    changeLocale() {
      this.$vuetify.lang.current =
        this.$vuetify.lang.current == "en" ? "ar" : "en";
      this.$store.dispatch("changeLang", this.$vuetify.lang.current);
      this.$store.dispatch("configM/changeThemeRtl");
      this.$root.$i18n.locale = this.$vuetify.lang.current;
    },
    toCapitalize(text) {
      return text
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    },
  },
  computed: {
    ...mapGetters("largeSidebarM", ["getSideBarToggleProperties"]),
    // ...mapGetters(["configM/getThemeMode"]),
    ...mapGetters({ isAuth: "isAuth" }),
    ...mapGetters({ overlay: "isOverlay" }),
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    },
    // themeName() {
    //   return this.$store.getters["configM/getThemeMode"].dark
    //     ? "dark-theme"
    //     : " ";
    // },
    // isLoggedIn() {
    //   return false;
    // },
    isSideNavOpen() {
      //   return this.$store.getters["largeSidebarM/getSideBarToggleProperties"]
      return this.getSideBarToggleProperties.isSideNavOpen;
    },
    // rtl() {
    //   return this.$store.getters["configM/getThemeMode"].rtl ? "rtl" : " ";
    // },

    get() {
      let currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "");

      if (currentParentUrl[1] !== undefined && currentParentUrl[1] !== null) {
        // console.log(currentParentUrl);

        (this.mainSection = currentParentUrl[0].toUpperCase()),
          (this.MainPage = this.toCapitalize(currentParentUrl[1])),
          (this.SubPage =
            currentParentUrl.length > 2
              ? currentParentUrl[2].toLowerCase()
              : null);
      } else {
        currentParentUrl[0] !== undefined && currentParentUrl[0] !== null
          ? (this.mainSection = currentParentUrl[0].toUpperCase())
          : (this.mainSection = "Home".toUpperCase());
        this.MainPage = null;
        this.SubPage = null;
      }
    },
  },
};
</script>
