<template>
  <router-view></router-view>
</template>
<script>
import TopNav from "./partials/TopNav";
// import breadcumb from "./../components/breadcumb";
import dashBreadCrumb from "@/components/dashBreadCrumb";
import Sidebar from "./largeSidebar/Sidebar";
import { PerfectScrollbar as VuePerfectScrollbar } from "vue2-perfect-scrollbar";
// import Sidebar from "./largeSidebar/Sidebar";
import appFooter from "./common/footer";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  // middleware: "auth",
  head() {
    return {
      titleTemplate: "%s | Gamma Dental Radiology Center",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Main page for Gamma Dental Scan Radiology",
        },
      ],
    };
  },
  data() {
    return {
      mainSection: null,
      MainPage: null,
      SubPage: null,
    };
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
    ...mapGetters(["getSideBarToggleProperties"]),

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
};
</script>
<style lang="scss"></style>
