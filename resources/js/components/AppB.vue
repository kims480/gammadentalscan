<template>
  <v-app class="app-admin-wrap layout-sidebar-large clearfix">
    <component :is="forceLayoutIfNotLoggedIn"></component>
    <!--<router-view></router-view>-->
    <template v-if="show">
      <notifications
        :snackbar="notifications.show"
        :text="notifications.message"
      ></notifications>
    </template>
  </v-app>
</template>

<script>
import Notifications from "@/components/Notifications.vue";
const default_layout = "large-sidebar";
import { mapGetters, mapActions } from "vuex";
// import store from "@/store";
import ServicesConst from "@/services/ServicesConst.js";
export default {
  name: "GammaDental",
  components: { Notifications },
  data: () => ({
    mainSection: null,
    MainPage: null,
    SubPage: null,
  }),
  created() {
    ServicesConst.apiClient.get("/sanctum/csrf-cookie");
    // console.log(process.env.MIX_APP_DASHBOARD_URL);
    // console.log(process.env.MIX_APP_SPA_BASE_URL);
  },
  methods: {
    getBread() {
      let currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "");

      if (currentParentUrl[1] !== undefined && currentParentUrl[1] !== null) {
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
    },
  },
  computed: {
    ...mapGetters({
      getThemeMode: "configM/getThemeMode",
      isAuth: "isAuth",
      notifications: "notifications/notifications",
      show: "notifications/showNotifications",
    }),
    layoutName() {
      // console.log(this.getThemeMode);
      // console.dir(this.$store.getters["configM/getThemeMode"].layout);
      // return this.$store.getters["configM/getThemeMode"].layout +'-layout';
      // return (this.$route.meta.layout  || this.$store.getters["configM/getThemeMode"].layout )+'-layout';
      return (this.$route.meta.layout || this.getThemeMode.layout) + "-layout";
      // this.$store.getters["configM/getThemeMode"].layout
      //     ? "large-sidebar"
      //     : " ";
    },
    forceLayoutIfNotLoggedIn() {
      // console.log(this.isLoggedIn);
      return this.isLoggedIn ? this.layoutName : "auth-layout";
    },
    isLoggedIn() {
      return this.isAuth;
    },
    themeName() {
      return this.$store.getters["configM/getThemeMode"].dark
        ? "dark-theme"
        : " ";
    },
    rtl() {
      return this.$store.getters["configM/getThemeMode"].rtl ? "rtl" : " ";
    },

    get() {
      let currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "");

      if (currentParentUrl[1] !== undefined && currentParentUrl[1] !== null) {
        // console.log(currentParentUrl);

        (this.mainSection = currentParentUrl[0].toLowerCase()),
          (this.MainPage = currentParentUrl[1].toLowerCase()),
          (this.SubPage =
            currentParentUrl.length > 2
              ? currentParentUrl[2].toLowerCase()
              : null);
      } else {
        currentParentUrl[0] !== undefined && currentParentUrl[0] !== null
          ? (this.mainSection = currentParentUrl[0].toLowerCase())
          : (this.mainSection = "Home");
        this.MainPage = null;
        this.SubPage = null;
      }
    },
  },
  head() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      // all titles will be injected into this template
      titleTemplate: "%s | Gamma Dental Scan",
      title: "Admin Dashboard",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Gamma Dental Scan Radiology, We are Spcialist for dental radio scans We care to deliver the most accurate dental scans in Egypt and Middle East",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Gamma, Dental, Radiology, Scan, New Request,",
        },
        {
          hid: "author",
          name: "author",
          content: "Gamma Dental Radiology Scan",
        },
      ],
      base: {
        href:
          process.env.MIX_APP_DASHBOARD_URL ??
          "https://gamma-dental-scan.com/dashboard",
        target: "_Self",
      },
      bodyAttrs: {
        class: [
          this.$store.getters["configM/getThemeMode"].theme_color,
          "text-left",
        ],
      },
      htmlAttrs: {
        dir: this.$store.getters["configM/getThemeMode"].rtl,
      },
    };
  },
};
</script>

<style lang="scss">
</style>
