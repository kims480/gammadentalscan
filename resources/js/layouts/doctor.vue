<template>
  <v-app id="app" class="app-admin-wrap layout-sidebar-large clearfix">
    <TopNav />
    <Sidebardoctor />
    <main>
      <div
        :class="{ 'sidenav-open': getSideBarToggleProperties.isSideNavOpen }"
        class="main-content-wrap d-flex flex-column"
      >
        <dashBreadCrumb
          :mainSection="mainSection"
          :MainPage="MainPage"
          :SubPage="SubPage"
        />
        {{ get }}
        <transition name="page" mode="out-in">
          <nuxt />
        </transition>
        <appFooter />
      </div>
    </main>
  </v-app>
</template>
<script>
import TopNav from "./partials/TopNav";
// import breadcumb from "./../components/breadcumb";
import dashBreadCrumb from "@/components/dashBreadCrumb";
import Sidebardoctor from "./largeSidebar/Sidebardoctor";
import { PerfectScrollbar as VuePerfectScrollbar } from "vue2-perfect-scrollbar";
// import Sidebar from "./largeSidebar/Sidebar";
import appFooter from "./common/footer";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    TopNav,
    Sidebardoctor,
    appFooter,
    dashBreadCrumb,
    VuePerfectScrollbar
  },
  middleware: ["doctor",'auth'],
  head() {
    return {
      titleTemplate: "%s Doctors | Gamma Dental Radiology Center",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Doctors page for Gamma Dental Scan Radiology"
        }
      ]
    };
  },
  data() {
    return {
      mainSection: "Doctors",
      MainPage: null,
      SubPage: null
    };
  },
  methods: {
    getBread() {
      let currentParentUrl = this.$route.path.split("/").filter(x => x !== "");

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
    }
  },
  computed: {
    get() {
      let currentParentUrl = this.$route.path.split("/").filter(x => x !== "");

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
    }
  }
};
</script>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background: #f1f1f1;
}
.main-content-wrap {
  background: #f5f5f5;
}
.icon-font {
  font-size: 18px;
  /* font-weight: bolder; */
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
