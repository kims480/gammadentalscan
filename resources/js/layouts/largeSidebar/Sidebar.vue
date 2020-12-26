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
              <span class="nav-text">
                  Dashboard{{
                /*$t("dashboard") */
              }}</span>
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
              <span class="nav-text">Users</span>
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
              <span class="nav-text">Doctors</span>
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
              <span class="nav-text">Patients</span>
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
              <span class="nav-text">Storage</span>
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
              <span class="nav-text">Requests</span>
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
              <span class="nav-text">Results</span>
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
              <span class="nav-text">Points</span>
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
              <span class="nav-text">Ads</span>
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
              <span class="nav-text">Complaints</span>
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
            <router-link class="nav-item-hold" to="{name:'settings'}" >
              <i class="nav-icon i-Safe-Box1"></i>
              <span class="nav-text">Settings</span>
            </router-link>
            <div class="triangle"></div>
          </li>

<!-- Points main Menu -->
          <li
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'points' }"
            class="nav-item"
            data-item="points"
            :data-submenu="true"
          >
            <router-link class="nav-item-hold" to="#">
              <i class="nav-icon i-Double-Tap"></i>
              <span class="nav-text">Points</span>
            </router-link>
            <div class="triangle"></div>
          </li>

<!-- Points Docs Menu -->
          <li   @mouseenter="toggleSubMenu" class="nav-item"    data-item="doc"
               :class="{ active: selectedParentMenu == 'doc' }" :data-submenu="false">
            <router-link class="nav-item-hold"  to="" >
              <i class="nav-icon i-Safe-Box1"></i>
              <span class="nav-text">Doc</span>
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
              <span class="item-name">
                users List
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/admin/users/add">
              <i class="nav-icon i-Clock-3"></i>
              <span class="item-name">
                Add user
              </span>
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
              <span class="item-name">Users</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/apps/invoice">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">Users List</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">
                    Add user
                  </span>
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
              <span class="item-name">Roles</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/apps/invoice">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">Roles List</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">Add Roles </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">
                    Assign Roles
                  </span>
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
              <span class="item-name">Permisisons</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/apps/invoice">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">Permissions List</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name"> Add Permissions</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class to="/admin/users">
                  <i class="nav-icon i-Clock-3"></i>
                  <span class="item-name">Assign Permissions</span>
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
            <router-link tag="a" class to="/app/datatables/paging">
              <i class="nav-icon i-Split-Four-Square-Window"></i>
              <span class="item-name">Paging</span>
            </router-link>
          </li>

        </ul>
 <!-- Submenu Patients -->
        <ul
          class="childNav d-none"
          data-parent="patients"
          :class="{ 'd-block': selectedParentMenu == 'patients' }"
        >


          <!-- contact app -->
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <router-link to="#">
              <i class="nav-icon i-File-CSV"></i>
              <span class="item-name">
                Contacts
                <span class="ml-2 badge badge-pill badge-danger">New</span>
              </span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/apps/contact-list">
                  <i class="nav-icon i-File-CSV"></i>
                  <span class="item-name">Contact Lists</span>
                </router-link>
              </li>

            </ul>
          </li>

          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/products">
              <i class="nav-icon i-Add-File"></i>
              <span class="item-name"
                >Ecommerce
                <span class=" ml-2 badge badge-pill badge-danger"
                  >New</span
                ></span
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/taskManager">
              <i class="nav-icon i-Add-File"></i>
              <span class="item-name">Task Manager</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/todo-list">
              <i class="nav-icon i-Add-File"></i>
              <span class="item-name"
                >Todo App
                <span class=" ml-2 badge badge-pill badge-danger"
                  >New</span
                ></span
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/contact-list-table">
              <i class="nav-icon i-Add-File"></i>
              <span class="item-name"
                >Contacts Table
                <span class=" ml-2 badge badge-pill badge-danger"
                  >New</span
                ></span
              >
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/calendar">
              <i class="nav-icon i-Calendar-3"></i>
              <span class="item-name">Calendar</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/inbox">
              <i class="nav-icon i-Email"></i>
              <span class="item-name">Inbox</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/chat">
              <i class="nav-icon i-Speach-Bubble-3"></i>
              <span class="item-name">Chat</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/apps/scrumboard">
              <i class="nav-icon i-Add-File"></i>
              <span class="item-name"
                >scrumboard
                <span class=" ml-2 badge badge-pill badge-danger"
                  >New</span
                ></span
              >
            </router-link>
          </li>
        </ul>
 <!-- Submenu Dashboards -->
        <ul
          class="childNav d-none"
          data-parent="doctors"
          :class="{ 'd-block': selectedParentMenu == 'doctors' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/doctors/dropdown">
              <i class="nav-icon i-Arrow-Down"></i>
              <span class="item-name">Dropdown</span>
            </router-link>
          </li>


          <li class="nav-item">
            <router-link tag="a" class to="/app/doctors/vueDraggable">
              <i class="nav-icon i-Two-Windows"></i>
              <span class="item-name">Vue Draggable</span>
              <span class="ml-2 badge badge-pill badge-danger">New</span>
            </router-link>
          </li>



          <li class="nav-item">
            <router-link tag="a" class to="/app/doctors/vueTree">
              <i class="nav-icon i-Up---Down-3"></i>
              <span class="item-name">Vue Tree</span>
              <span class="ml-2 badge badge-pill badge-danger">New</span>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="ladda.button.html">
              <i class="nav-icon i-Loading-2"></i>
              <span class="item-name">Ladda Buttons</span>
            </router-link>
          </li>-->

        </ul>
 <!-- Submenu Dashboards -->
        <ul
          class="childNav d-none"
          data-parent="ui-kits"
          :class="{ 'd-block': selectedParentMenu == 'ui-kits' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/ui-kits/alerts">
              <i class="nav-icon i-Bell1"></i>
              <span class="item-name">Alerts</span>
            </router-link>
          </li>
          <!-- <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <router-link to="accordion.html">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Accordion</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link href>Sub menu item 1</router-link>
              </li>
              <li>
                <router-link href>Sub menu item 1</router-link>
              </li>
              <li>
                <router-link href>Sub menu item 1</router-link>
              </li>
            </ul>
          </li>-->
          <li class="nav-item">
            <router-link tag="a" class to="/app/ui-kits/accordion">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Accordion</span>
            </router-link>
          </li>




          <!-- <li class="nav-item">
            <router-link to="tables.html">
              <i class="nav-icon i-File-Horizontal-Text"></i>
              <span class="item-name">Tables</span>
            </router-link>
          </li>-->
          <li class="nav-item">
            <router-link tag="a" class to="/app/ui-kits/bootstrap-tab">
              <i class="nav-icon i-New-Tab"></i>
              <span class="item-name">Tabs</span>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="tooltip.html">
              <i class="nav-icon i-Speach-Bubble-8"></i>
              <span class="item-name">Tooltip</span>
            </router-link>
          </li>-->


        </ul>
 <!-- Submenu Dashboards -->
        <ul
          class="childNav d-none"
          data-parent="storage"
          :class="{ 'd-block': selectedParentMenu == 'storage' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/admin/gdrive">
              <i class="nav-icon i-Line-Chart-2"></i>
              <span class="item-name">Google Drive</span>
            </router-link>
          </li>
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <router-link to="#">
              <i class="nav-icon i-Line-Chart"></i>
              <span class="item-name">Apex storage</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </router-link>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/storage/apexAreaChart">
                  <i class="nav-icon i-Line-Chart-2"></i>
                  <span class="item-name">Area Chart</span>
                </router-link>
              </li>



              <li>
                <router-link tag="a" class to="/app/storage/apexColumnChart">
                  <i class="nav-icon i-Line-Chart-2"></i>
                  <span class="item-name">Column Chart</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" class to="/app/storage/apexPieDonutsChart">
                  <i class="nav-icon i-Line-Chart-2"></i>
                  <span class="item-name">Pie Donut Chart</span>
                </router-link>
              </li>

              <li>
                <router-link tag="a" class to="/app/storage/apexSparklineChart">
                  <i class="nav-icon i-Line-Chart-2"></i>
                  <span class="item-name">Sparkline Chart</span>
                </router-link>
                <router-link tag="a" class to="/app/storage/apexAreaChart">
                  <i class="nav-icon i-Line-Chart-2"></i>
                  <span class="item-name">Apex Area Chart</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
 <!-- Submenu Dashboards -->
        <ul
          class="childNav d-none"
          data-parent="widgets"
          :class="{ 'd-block': selectedParentMenu == 'widgets' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/widgets/widgetCard">
              <i class="nav-icon i-Two-Windows"></i>
              <span class="item-name">Widget Card</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/widgets/widgetStatistics">
              <i class="nav-icon i-Windows-2"></i>
              <span class="item-name">Widget Statistics</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link tag="a" class to="/app/widgets/weatherApp">
              <i class="nav-icon i-Windows-2"></i>
              <span class="item-name">Weather App</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/widgets/widgetApp">
              <i class="nav-icon i-Windows-2"></i>
              <span class="item-name">App Widgets</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/widgets/widgetList">
              <i class="nav-icon i-Windows-2"></i>
              <span class="item-name">Widget List</span>
            </router-link>
          </li>
        </ul>
 <!-- Submenu Dashboards -->
        <ul
          class="childNav d-none"
          data-parent="sessions"
          :class="{ 'd-block': selectedParentMenu == 'sessions' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/sessions/signIn">
              <i class="nav-icon i-Checked-User"></i>
              <span class="item-name">Sign in</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/sessions/signUp">
              <i class="nav-icon i-Add-User"></i>
              <span class="item-name">Sign up</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class to="/app/sessions/forgot">
              <i class="nav-icon i-Find-User"></i>
              <span class="item-name">Forgot</span>
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
        VuePerfectScrollbar
    },

    data() {
        return {
            isDisplay: false,
            isMenuOver: false,
            isStyle: true,
            selectedParentMenu: "",
            isMobile
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
            return this.$store.getters[
                "largeSidebarM/getSideBarToggleProperties"
            ];
        },
        isSideNavOpen() {
            return this.$store.getters[
                "largeSidebarM/getSideBarToggleProperties"
            ].isSideNavOpen;
        },
        isSearchOpen() {
            return this.$store.getters[
                "largeSidebarM/getSideBarToggleProperties"
            ].isSideNavOpen;
        }
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
            "changeSidebarProperties"
        ]),

        handleWindowResize() {
            //  console.log('not working is Mobile');
            if (window.innerWidth <= 1200) {
                if (this.getSideBarToggleProperties.isSideNavOpen) {
                    this.$store.dispatch(
                        "largeSidebarM/changeSidebarProperties"
                    );
                }
                if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
                    this.$store.dispatch(
                        "largeSidebarM/changeSecondarySidebarProperties"
                    );
                }
            } else {
                if (!this.getSideBarToggleProperties.isSideNavOpen) {
                    this.$store.dispatch(
                        "largeSidebarM/changeSidebarProperties"
                    );
                    // this.changeSidebarProperties();
                }
            }
        },
        toggleSelectedParentMenu() {
            const currentParentUrl = this.$route.path
                .split("/")
                .filter(x => x !== "")[1];
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
            let dropdownMenus = this.$el.querySelectorAll(
                ".dropdown-sidemenu.open"
            );

            event.currentTarget.classList.toggle("open");

            dropdownMenus.forEach(dropdown => {
                dropdown.classList.remove("open");
            });
        }
    }
};
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
<style lang="" scoped></style>
