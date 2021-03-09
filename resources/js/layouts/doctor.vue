<template>
  <v-app id="app" class="app-admin-wrap layout-sidebar-large clearfix">
    <TopNav />

    <section>
      <template v-if="isAuth /* $auth.hasScope('super_admin') */">
        <Sidebardoctor />
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
  </v-app>
</template>
<script>
import TopNav from "./partials/TopNav";
// import breadcumb from "./../components/breadcumb";
import dashBreadCrumb from "@/components/dashBreadCrumb";
import Sidebardoctor from "./largeSidebar/Sidebardoctor";
import { PerfectScrollbar as VuePerfectScrollbar } from "vue2-perfect-scrollbar";
// import Sidebar from "./largeSidebar/Sidebar";
// import appFooter from "./common/footer";
import appFooter from "@/layouts/common/footerVtfy";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DoctorLayout",
  components: {
    TopNav,
    Sidebardoctor,
    appFooter,
    dashBreadCrumb,
    VuePerfectScrollbar,
  },

  data() {
    return {
      mainSection: "Doctors",
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
    ...mapGetters("largeSidebarM", ["getSideBarToggleProperties"]),
    ...mapGetters(["configM/getThemeMode"]),
    ...mapGetters({ isAuth: "isAuth" }),
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

