<template>
    <div class="topnav navbar-expand-lg  main-header ">
        <div @click="sideBarToggle" class="menu-toggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <!--<div class="logo"></div>-->
        <!--<img src="@/assets/images/logo.png" alt />-->
        <!--<div class="logo">
        <Logo />
      </div>-->
        <router-link class="navbar-brand " to="/">
            <logo-main />
        </router-link>
        <!--<div alt="GAMMA Dental Radiology Scan" id="brand"></div>-->

        <div class="navbar-nav">
            <!-- Navbar dropdowns -->
            <!-- <li class="nav-item">
                <router-link class="nav-link" to="/">Dashboard</router-link>
            </li> -->
            <template v-if="false /* $auth.loggedIn */">
                <div class="search-bar" @click="toggleSearch">
                    <input type="text" placeholder="Search" />
                    <i class="search-icon text-muted i-Magnifi-Glass1"></i>
                </div>
            </template>
        </div>

        <!-- <b-navbar-nav class="ml-auto">-->
        <div class="ml-auto"></div>

        <div class="header-part-right">
            <!-- Full screen toggle -->
            <template v-if="isAuth">


            <i
                class="i-Full-Screen header-icon d-none d-sm-inline-block"
                @click="handleFullScreen"
            ></i>
            <!-- <i class="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i> -->
            <!-- Grid menu Dropdown -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#e0ffff"   v-bind="attrs" v-on="on" icon>
                        <v-avatar size="36">
                            <v-icon dark>mdi-package-variant</v-icon>
                        </v-avatar>
                    </v-btn>
                </template>
                <div class="menu-icon-grid">
                    <router-link to="/"
                        ><i class="i-Shop-4"></i>Home</router-link
                    >
                    <template v-if="true /* $auth.hasScope('super_admin') */">
                        <router-link to="/admin/users/"
                            ><i class="i-Checked-User"> </i> Users
                        </router-link>
                        <router-link to="/admin/doctors/">
                            <i class="i-Drop"></i> Doctors
                        </router-link>
                    </template>
                    <template
                        v-if="
                            true
                            /* $auth.hasScope('doctor') ||
                                $auth.hasScope('super_admin') */
                        "
                    >
                        <router-link
                            :to="
                                true /* $auth.hasScope('super_admin') */
                                    ? '/admin/patients/'
                                    : '/doctors/patients'
                            "
                        >
                            <i class="i-File-Clipboard-File--Text"></i> Patients
                        </router-link>
                        <router-link
                            :to="
                                true /* $auth.hasScope('super_admin') */
                                    ? '/admin/requests/'
                                    : '/doctors/requests'
                            "
                            ><i class="i-Ambulance"> </i> Requests
                        </router-link>
                    </template>

                    <template v-if="true /* $auth.hasScope('super_admin') */">
                        <router-link to="/admin/storage/"
                            ><i class="i-Library"> </i> Storage
                        </router-link>
                    </template>
                </div>
            </v-menu>

            <!-- Notificaiton -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#e0ffff" v-bind="attrs" v-on="on" icon>
                        <v-badge
                            color="primary"
                            dark
                            :content="3"
                            :value="3"
                            overlap
                        >
                            <v-icon>mdi-bell</v-icon>
                        </v-badge>
                    </v-btn>
                </template>
                <vue-perfect-scrollbar
                    :settings="{
                        suppressScrollX: true,
                        wheelPropagation: false
                    }"
                    :class="{ open: isSideNavOpen }"
                    ref="myData"
                    class="dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll"
                    aria-labelledby="dropdown-1__BV_toggle_"
                >
                    <!-- <div class="dropdown-menu-right rtl-ps-none notification-dropdown"> -->
                    <div class="dropdown-item d-flex">
                        <div class="notification-icon">
                            <i class="i-Speach-Bubble-6 text-primary mr-1"></i>
                        </div>
                        <div class="notification-details flex-grow-1">
                            <p class="m-0 d-flex align-items-center">
                                <span>New message</span>
                                <!-- <span class="badge badge-pill badge-primary ml-1 mr-1">new</span> -->
                                <span class="flex-grow-1"></span>
                                <span class="text-small text-muted ml-auto"
                                    >10 sec ago</span
                                >
                            </p>
                            <p class="text-small text-muted m-0">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div class="dropdown-item d-flex">
                        <div class="notification-icon">
                            <i class="i-Receipt-3 text-success mr-1"></i>
                        </div>
                        <div class="notification-details flex-grow-1">
                            <p class="m-0 d-flex align-items-center">
                                <span>Lorem, ipsum dolor.</span>
                                <!-- <span class="badge badge-pill badge-success ml-1 mr-1">new</span> -->
                                <span class="flex-grow-1"></span>
                                <span class="text-small text-muted ml-auto"
                                    >2 hrs ago</span
                                >
                            </p>
                            <p class="text-small text-muted m-0">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div class="dropdown-item d-flex">
                        <div class="notification-icon">
                            <i class="i-Empty-Box text-danger mr-1"></i>
                        </div>
                        <div class="notification-details flex-grow-1">
                            <p class="m-0 d-flex align-items-center">
                                <span>Lorem, ipsum dolor.</span>
                                <!-- <span class="badge badge-pill badge-danger ml-1 mr-1">3</span> -->
                                <span class="flex-grow-1"></span>
                                <span class="text-small text-muted ml-auto"
                                    >10 hrs ago</span
                                >
                            </p>
                            <p class="text-small text-muted m-0">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div class="dropdown-item d-flex">
                        <div class="notification-icon">
                            <i class="i-Data-Power text-success mr-1"></i>
                        </div>
                        <div class="notification-details flex-grow-1">
                            <p class="m-0 d-flex align-items-center">
                                <span>Server Up!</span>
                                <!-- <span class="badge badge-pill badge-success ml-1 mr-1">3</span> -->
                                <span class="flex-grow-1"></span>
                                <span class="text-small text-muted ml-auto"
                                    >14 hours ago</span
                                >
                            </p>
                            <p class="text-small text-muted m-0">
                                Server rebooted successfully
                            </p>
                        </div>
                    </div>
                    <!-- </div> -->
                </vue-perfect-scrollbar>
            </v-menu>

            </template>
            <!-- Notificaiton End -->

            <!-- User avatar dropdown -->
            <template v-if="isAuth       /* $auth.loggedIn */">
                <v-menu class="user" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="teal" v-bind="attrs" v-on="on" icon>
                            <v-avatar size="36">
                                <img
                                    src="@/assets/images/faces/20.jpg"
                                    :alt="username "
                                    class="img"
                                />
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title
                                ><i class="i-Lock-User mr-1"></i> {{  loggedUser.userName  }}</v-list-item-title
                            >
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title
                                ><i class="i-Email mr-1"></i
                                >{{ loggedUser.email  }}</v-list-item-title
                            >
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title
                                ><router-link
                                    class="dropdown-item"
                                    to="/auth/logout"
                                >
                                    <i class="i-Power-2 mr-1"></i
                                    >logout</router-link
                                ></v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
            <template v-else>
                <li class="nav-item">
                    <router-link class="nav-link" to="/auth/login"
                        >Login</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/auth/register"
                        >Register</router-link
                    >
                </li>
            </template>
        </div>
    </div>
</template>

<script>
import LogoMain from "@/components/LogoMain";
import Util from "@/utils";
import { mapGetters, mapActions } from "vuex";
import Sidebar from "./../largeSidebar/Sidebar";
import Search from "@/components/Search";
import { isMobile } from "mobile-device-detect";
import { PerfectScrollbar as VuePerfectScrollbar } from "vue2-perfect-scrollbar";
// import LogoMain from '../../components/LogoMain.vue';
export default {
    // methods: {
    //   async logout() {
    //     await this.$auth.logout();
    //   }
    // }

    data() {
        return {
            isDisplay: true,
            isMobile,
            isStyle: true,
            isSearchOpen: false,
            isMouseOnMegaMenu: true,
            isMegaMenuOpen: false,

            items: [
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me 2" }
            ]
            //username: ""
        };
    },
watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
    computed: {
        ...mapGetters(["largeSidebarM/getSideBarToggleProperties","isAuth","loggedUser","loggedUserID"]),
        activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },

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
        /* isSearchOpen() {
            return this.$store.getters[
                "largeSidebarM/getSideBarToggleProperties"
            ].isSearchOpen;
        }, */
        username() {
            return this.loggedUser.userName;
        }
    },
    components: {

        Sidebar,
        Search,
        VuePerfectScrollbar,
        'logo-main':LogoMain
    },
    methods: {
        ...mapActions("largeSidebarM", [
            "changeSecondarySidebarProperties",

            "changeSidebarProperties",
            "changeThemeMode",
            "signOut"
        ]),
        handleFullScreen() {
            Util.toggleFullScreen();
        },
        closeMegaMenu() {
            this.getSideBarToggleProperties.isMegaMenuOpen = false;
            // console.log(this.isMouseOnMegaMenu);
            // if (!this.isMouseOnMegaMenu) {
            //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
            // }
        },
        toggleMegaMenu() {
            this.getSideBarToggleProperties.isMegaMenuOpen = !this
                .isMegaMenuOpen;
        },
        toggleSearch() {
            this.getSideBarToggleProperties.isSearchOpen = !this.isSearchOpen;
        },

        sideBarToggle(el) {
            if (
                this.getSideBarToggleProperties.isSideNavOpen &&
                this.getSideBarToggleProperties.isSecondarySideNavOpen &&
                isMobile
            ) {
                this.changeSidebarProperties();
                this.changeSecondarySidebarProperties();
            } else if (
                this.getSideBarToggleProperties.isSideNavOpen &&
                this.getSideBarToggleProperties.isSecondarySideNavOpen
            ) {
                this.$store.dispatch(
                    "largeSidebarM/changeSecondarySidebarProperties"
                );
            } else if (this.getSideBarToggleProperties.isSideNavOpen) {
                this.$store.dispatch("largeSidebarM/changeSidebarProperties");
            } else if (
                !this.getSideBarToggleProperties.isSideNavOpen &&
                !this.getSideBarToggleProperties.isSecondarySideNavOpen &&
                !this.getSideBarToggleProperties.isActiveSecondarySideNav
            ) {
                this.$store.dispatch("largeSidebarM/changeSidebarProperties");
            } else if (
                !this.getSideBarToggleProperties.isSideNavOpen &&
                !this.getSideBarToggleProperties.isSecondarySideNavOpen
            ) {
                // console.log("4");

                this.$store.dispatch("largeSidebarM/changeSidebarProperties");
                this.$store.dispatch(
                    "largeSidebarM/changeSecondarySidebarProperties"
                );
                // console.log("4");
            }
        }
    }
};
</script>

<style lang="scss">
:root {
    --shadow: 3px 4px 20px 0px rgba(17, 87, 0, 0.34);
    --primarybg:#69c31f;
    --secondarybg:#138412;
}
#brand {
    // background-image: url("/_nuxt/assets/svg/logo/Gamma_Logo_Full.svg");
    // background-color: green;
    background-position: center;
    font-size: 16px;
    padding: 0;
    margin: 0;
    height: 60px;
    width: 185px;
    border: 1px solid red;
    // fill: white;
}
.v-speed-dial {
    position: absolute;
  }

.v-btn--floating {
    position: relative;
  }
.topnav {
    padding: 0 12px;
    background-color:   var(--secondarybg);
    color: #ffffff;
    font-weight: bold;
}
.topnav.navbar-expand-lg.main-header {
    box-shadow: var(--shadow);
}
.layout-sidebar-large .main-header {
    background-color: var(--secondarybg);
    padding: 0;
}
.layout-sidebar-large v-icon {
    color:var(--white);
}
.navbar-dark .navbar-nav .nav-link {
    color: rgb(255, 255, 255);
}
.navbar-dark .navbar-nav .nav-link:hover {
    color: rgb(12, 10, 167);
}
.container {
    padding: 0;
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:active {
    color: rgba(0, 24, 197, 0.75);
}
.navbar-brand {
    padding: 0;
}
.btn.dropdown-toggle.btn-link.text-decoration-none.dropdown-toggle-no-caret {
    padding: 0;
}
.layout-sidebar-large .main-header div.header-part-right {
    display :flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 15vw;

}
// Small devices (landscape phones, 576px and up)
@media (max-width: 576px) {
    .navbar-brand{
        width: 25%;
    }
    .navbar-nav .nav-item{
            display: none;
        }
    div.header-part-right{
          display: none;
     }
 }

// Medium devices (tablets, 768px and up)
@media (max-width: 768px) {
    .navbar-brand{
        width: 25%;

                        }

 }
 .menu-icon-grid{
     background: #ffffffd8;
     border-radius: 1rem;
    top:60px;
 }
 .menu-icon-grid:hover{
     background: #ffffff;

 }
 div.topnav.navbar-expand-lg.main-header{
     padding : 0 1.25rem 0 1.25rem;
 }

</style>
