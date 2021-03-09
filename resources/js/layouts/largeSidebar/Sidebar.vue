<template>
  <div
    class="side-content-wrap"
    @mouseenter="isMenuOver = true"
    @mouseleave="isMenuOver = false"
    @touchstart="isMenuOver = true"
    v-if="true /* $auth.loggedIn */"
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps scroll"
    >
      <div>
        <ul class="navigation-left">
          <!-- Dashboard Menu -->
          <li
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'dashboard' }"
            class="nav-item"
            data-item="dashboard"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Bar-Chart"></i>
              <span class="nav-text"> {{ $t("sidebar.dashboard") }}</span>
            </router-link>

            <div class="triangle"></div>
          </li>

          <!-- Users Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'users' }"
            data-item="users"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Library"></i>
              <span class="nav-text">{{ $t("sidebar.users") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Doctors Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'doctors' }"
            data-item="doctors"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Suitcase"></i>
              <span class="nav-text">{{ $t("sidebar.doctors") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Doctors Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'patients' }"
            data-item="patients"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Computer-Secure"></i>
              <span class="nav-text">{{ $t("sidebar.patients") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Storage Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'storage' }"
            data-item="storage"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Pie-Chart-2"></i>
              <span class="nav-text">{{ $t("sidebar.storage") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Requests Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'requests' }"
            data-item="requests"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Windows-2"></i>
              <span class="nav-text">{{ $t("sidebar.requests") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Results Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'results' }"
            data-item="results"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-File-Clipboard-File--Text"></i>
              <span class="nav-text">{{ $t("sidebar.results") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Points Menu -->
          <li
            class="nav-item"
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'points' }"
            data-item="points"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-File-Horizontal-Text"></i>
              <span class="nav-text">{{ $t("sidebar.points") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Ads Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'ads' }"
            data-item="ads"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Administrator"></i>
              <span class="nav-text">{{ $t("sidebar.ads") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Complaints Menu -->
          <li
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'complaints' }"
            class="nav-item"
            data-item="complaints"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Double-Tap"></i>
              <span class="nav-text">{{ $t("sidebar.complaints") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Settings Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            data-item="settings"
            :class="{ active: selectedParentMenu == 'settings' }"
            :data-submenu="false"
          >
            <router-link class="nav-item-hold" to="{name:'settings'}">
              <i class="nav-icon i-Safe-Box1"></i>
              <span class="nav-text">{{ $t("sidebar.settings") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>

          <!-- Points main Menu -->

          <!-- Points Docs Menu -->
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            data-item="doc"
            :class="{ active: selectedParentMenu == 'doc' }"
            :data-submenu="false"
          >
            <router-link class="nav-item-hold" to="">
              <i class="nav-icon i-Safe-Box1"></i>
              <span class="nav-text">{{ $t("sidebar.about") }}</span>
            </router-link>
            <div class="triangle"></div>
          </li>
        </ul>
      </div>
    </vue-perfect-scrollbar>

    <vue-perfect-scrollbar
      :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="sidebar-left-secondary ps rtl-ps-none"
    >
      <div ref="sidebarChild">
        <!-- Submenu Dashboards -->
        <ul
          class="childNav d-none"
          data-parent="dashboard"
          :class="{ 'd-block': selectedParentMenu == 'dashboard' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/admin/users">
              <i class="nav-icon i-Clock-3"></i>
              <span class="item-name"> {{ $t("sidebar.usersList") }} </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/admin/users/add">
              <i class="nav-icon i-Clock-3"></i>
              <span class="item-name">{{ $t("sidebar.addUser") }} </span>
            </router-link>
          </li>
        </ul>
        <!-- Submenu Users -->
        <ul
          class="childNav d-none"
          data-parent="users"
          :class="{ 'd-block': selectedParentMenu == 'users' }"
        >
          <!-- Users-list -->
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <router-link to="#">
              <i class="nav-icon i-File"></i>
              <span class="item-name">{{ $t("sidebar.usersList") }}</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">{{ $t("sidebar.usersList") }}</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users/add">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">{{ $t("sidebar.addUser") }} </span>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Roles-list -->
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <router-link to="#">
              <i class="nav-icon i-File"></i>
              <span class="item-name">{{ $t("sidebar.roles") }}</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/apps/invoice">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">{{ $t("sidebar.rolesList") }}</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">{{ $t("sidebar.addRole") }} </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">{{ $t("sidebar.assignRole") }} </span>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- Permission-list -->
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <router-link to="#">
              <i class="nav-icon i-File"></i>
              <span class="item-name">{{ $t("sidebar.permissions") }}</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/apps/invoice">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">{{
                    $t("sidebar.permissionsList")
                  }}</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name"
                    >{{ $t("sidebar.addPermissions") }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">{{
                    $t("sidebar.assignPermissions")
                  }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <!-- Submenu Doctors -->
        <ul
          class="childNav d-none"
          data-parent="doctors"
          :class="{ 'd-block': selectedParentMenu == 'doctors' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/admin/users/">
              <i class="nav-icon i-Split-Four-Square-Window"></i>
              <span class="item-name">{{ $t("sidebar.doctorsList") }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/admin/users/">
              <i class="nav-icon i-Split-Four-Square-Window"></i>
              <span class="item-name">{{ $t("sidebar.doctorProfile") }}</span>
            </router-link>
          </li>
        </ul>
        <!-- Submenu Patients -->
        <ul
          class="childNav d-none"
          data-parent="patients"
          :class="{ 'd-block': selectedParentMenu == 'patients' }"
        >
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <router-link to="#">
              <i class="nav-icon i-File"></i>
              <span class="item-name">{{ $t("sidebar.patients") }}</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="#">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">{{
                    $t("sidebar.patientsList")
                  }}</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="#">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name"
                    >{{ $t("sidebar.addpatients") }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">{{
                    $t("sidebar.patientProfile")
                  }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- contact app -->
        </ul>
        <!-- Submenu Patinys -->

        <!-- Submenu storage -->
        <ul
          class="childNav d-none"
          data-parent="storage"
          :class="{ 'd-block': selectedParentMenu == 'storage' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/storage">
              <i class="nav-icon i-Line-Chart-2"></i>
              <span class="item-name">{{ $t("sidebar.googleDrive") }}</span>
            </router-link>
          </li>
        </ul>
        <!-- Submenu Request -->
        <ul
          class="childNav d-none"
          data-parent="widgets"
          :class="{ 'd-block': selectedParentMenu == 'requests' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/admin/request/new">
              <i class="nav-icon i-Two-Windows"></i>
              <span class="item-name">{{ $t("sidebar.newScanRequest") }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/admin/requests/list">
              <i class="nav-icon i-Windows-2"></i>
              <span class="item-name">{{
                $t("sidebar.scanRequestslist")
              }}</span>
            </router-link>
          </li>
        </ul>

        <!-- Submenu Dashboards -->
        <ul
          class="childNav d-none"
          data-parent="others"
          :class="{ 'd-block': selectedParentMenu == 'pages' }"
        >
          <!-- <li class="nav-item">
            <router-link to="blank.html" class="open">
              <i class="nav-icon i-File-Horizontal"></i>
              <span class="item-name">Blank Page</span>
            </router-link>
          </li>-->
        </ul>
      </div>
    </vue-perfect-scrollbar>
    <div
      @click="removeOverlay()"
      class="sidebar-overlay"
      :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
    ></div>
  </div>
  <!--=============== Left side End ================-->
</template>

<script>
import Topnav from "./../partials/TopNav";
import { isMobile } from "mobile-device-detect";
import { PerfectScrollbar as VuePerfectScrollbar } from "vue2-perfect-scrollbar";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Topnav,
    VuePerfectScrollbar,
  },

  data() {
    return {
      isDisplay: false,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile,
    };
  },
  mounted() {
    // this.toggleSelectedParentMenu();
    // window.addEventListener("resize", this.handleWindowResize);
    // document.addEventListener("click", this.returnSelectedParentMenu);
    // this.handleWindowResize();
  },

  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    ...mapGetters(["largeSidebarM/getSideBarToggleProperties"]),
    getSideBarToggleProperties() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"];
    },
    isSideNavOpen() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"]
        .isSideNavOpen;
    },
    isSearchOpen() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"]
        .isSideNavOpen;
    },
    /*  getSideBarToggleProperties() {
            console.log(this.SideBarToggleProperties);
            return this.SideBarToggleProperties;
        } */
  },

  methods: {
    ...mapActions("largeSidebarM", [
      "changeSecondarySidebarProperties",
      "changeSecondarySidebarPropertiesViaMenuItem",
      "changeSecondarySidebarPropertiesViaOverlay",
      "changeSidebarProperties",
    ]),

    handleWindowResize() {
      //  console.log('not working is Mobile');
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.$store.dispatch("largeSidebarM/changeSidebarProperties");
        }
        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.$store.dispatch(
            "largeSidebarM/changeSecondarySidebarProperties"
          );
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.$store.dispatch("largeSidebarM/changeSidebarProperties");
          // this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];
      console.log(currentParentUrl);
      if (currentParentUrl !== undefined && currentParentUrl !== null) {
        // console.log(currentParentUrl);
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "home";
      }
    },
    toggleSubMenu(e) {
      let hasSubmenu = e.target.dataset.submenu;
      let parent = e.target.dataset.item;
      if (hasSubmenu) {
        this.selectedParentMenu = parent;

        this.$store.dispatch(
          "largeSidebarM/changeSecondarySidebarPropertiesViaMenuItem",
          true
        );
      } else {
        this.selectedParentMenu = parent;
        this.$store.dispatch(
          "largeSidebarM/changeSecondarySidebarPropertiesViaMenuItem",
          false
        );
        // this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },

    removeOverlay() {
      this.$store.dispatch(
        "largeSidebarM/changeSecondarySidebarPropertiesViaOverlay"
      );
      if (window.innerWidth <= 1200) {
        this.$store.dispatch("largeSidebarM/changeSidebarProperties");
      }
      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.$store.dispatch("largeSidebarM/toggleSelectedParentMenu");
      }
    },

    toggleSidebarDropdwon(event) {
      let dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");

      event.currentTarget.classList.toggle("open");

      dropdownMenus.forEach((dropdown) => {
        dropdown.classList.remove("open");
      });
    },
  },
};
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
<style lang="" scoped></style>
