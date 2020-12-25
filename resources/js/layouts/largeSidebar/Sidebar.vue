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
          <li
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'dashboards' }"
            class="nav-item"
            data-item="dashboards"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Bar-Chart"></i>
              <span class="nav-text">
                  Dashboard{{
                /*$t("dashboard") */
              }}</span>
            </a>

            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'Users' }"
            data-item="ui-kits"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Library"></i>
              <span class="nav-text">UI kits</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'Doctors' }"
            data-item="extrakits"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Suitcase"></i>
              <span class="nav-text">Extra kits</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'Patients' }"
            data-item="apps"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Computer-Secure"></i>
              <span class="nav-text">Apps</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'storage' }"
            data-item="storage"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Pie-Chart-2"></i>
              <span class="nav-text">Storage</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'Requests' }"
            data-item="widgets"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Windows-2"></i>
              <span class="nav-text">Widgets</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'Results' }"
            data-item="forms"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-File-Clipboard-File--Text"></i>
              <span class="nav-text">Forms</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            class="nav-item"
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'Points' }"
            data-item="datatables"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-File-Horizontal-Text"></i>
              <span class="nav-text">Datatables</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'Complaints' }"
            data-item="sessions"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Administrator"></i>
              <span class="nav-text">Sessions</span>
            </a>
            <div class="triangle"></div>
          </li>

          <li
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'Notifications' }"
            class="nav-item"
            data-item="pages"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Double-Tap"></i>
              <span class="nav-text">Pages</span>
            </a>
            <div class="triangle"></div>
          </li>

          <li
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'Settings' }"
            class="nav-item"
            data-item="pages"
            :data-submenu="true"
          >
            <a class="nav-item-hold" href="#">
              <i class="nav-icon i-Double-Tap"></i>
              <span class="nav-text">Pages</span>
            </a>
            <div class="triangle"></div>
          </li>

          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            data-item="doc"
            :class="{ active: selectedParentMenu == 'doc' }"
            :data-submenu="false"
          >
            <a
              class="nav-item-hold"
              href="http://demos.ui-lib.com/gull-vue-doc/"
              target="_blank"
            >
              <i class="nav-icon i-Safe-Box1"></i>
              <span class="nav-text">Doc</span>
            </a>
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
          data-parent="dashboards"
          :class="{ 'd-block': selectedParentMenu == 'dashboards' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/admin/users/list">
              <i class="nav-icon i-Clock-3"></i>
              <span class="item-name">
                users
              </span>
            </router-link>
          </li>
        </ul>
        <ul
          class="childNav d-none"
          data-parent="forms"
          :class="{ 'd-block': selectedParentMenu == 'forms' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/forms/basicForms">
              <i class="nav-icon i-File-Clipboard-Text--Image"></i>
              <span class="item-name">Basic Elements</span>
            </router-link>
          </li>

        </ul>

        <ul
          class="childNav d-none"
          data-parent="forms"
          :class="{ 'd-block': selectedParentMenu == 'datatables' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/datatables/paging">
              <i class="nav-icon i-Split-Four-Square-Window"></i>
              <span class="item-name">Paging</span>
            </router-link>
          </li>

        </ul>

        <ul
          class="childNav d-none"
          data-parent="apps"
          :class="{ 'd-block': selectedParentMenu == 'apps' }"
        >
          <!-- invoice-list -->

          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <a href="#">
              <i class="nav-icon i-File"></i>
              <span class="item-name">Invoice</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </a>
            <ul class="submenu">
              <li>
                <router-link tag="a" class to="/app/apps/invoice">
                  <i class="nav-icon i-Files"></i>
                  <span class="item-name">Invoice List</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" class to="/app/apps/createInvoice">
                  <i class="nav-icon i-Add-File"></i>
                  <span class="item-name">Create Invoice</span>
                </router-link>
              </li>
              <li>
                <router-link tag="a" class to="/app/apps/printInvoice">
                  <i class="nav-icon i-File-JPG"></i>
                  <span class="item-name">Print Invoice</span>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- contact app -->
          <li
            @click.prevent="toggleSidebarDropdwon($event)"
            class="nav-item dropdown-sidemenu"
          >
            <a href="#">
              <i class="nav-icon i-File-CSV"></i>
              <span class="item-name">
                Contacts
                <span class="ml-2 badge badge-pill badge-danger">New</span>
              </span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </a>
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
        <ul
          class="childNav d-none"
          data-parent="extrakits"
          :class="{ 'd-block': selectedParentMenu == 'extrakits' }"
        >
          <li class="nav-item">
            <router-link tag="a" class to="/app/extraKits/dropdown">
              <i class="nav-icon i-Arrow-Down"></i>
              <span class="item-name">Dropdown</span>
            </router-link>
          </li>


          <li class="nav-item">
            <router-link tag="a" class to="/app/extraKits/vueDraggable">
              <i class="nav-icon i-Two-Windows"></i>
              <span class="item-name">Vue Draggable</span>
              <span class="ml-2 badge badge-pill badge-danger">New</span>
            </router-link>
          </li>



          <li class="nav-item">
            <router-link tag="a" class to="/app/extraKits/vueTree">
              <i class="nav-icon i-Up---Down-3"></i>
              <span class="item-name">Vue Tree</span>
              <span class="ml-2 badge badge-pill badge-danger">New</span>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <a href="ladda.button.html">
              <i class="nav-icon i-Loading-2"></i>
              <span class="item-name">Ladda Buttons</span>
            </a>
          </li>-->

        </ul>
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
            <a href="accordion.html">
              <i class="nav-icon i-Split-Horizontal-2-Window"></i>
              <span class="item-name">Accordion</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </a>
            <ul class="submenu">
              <li>
                <a href>Sub menu item 1</a>
              </li>
              <li>
                <a href>Sub menu item 1</a>
              </li>
              <li>
                <a href>Sub menu item 1</a>
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
            <a href="tables.html">
              <i class="nav-icon i-File-Horizontal-Text"></i>
              <span class="item-name">Tables</span>
            </a>
          </li>-->
          <li class="nav-item">
            <router-link tag="a" class to="/app/ui-kits/bootstrap-tab">
              <i class="nav-icon i-New-Tab"></i>
              <span class="item-name">Tabs</span>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <a href="tooltip.html">
              <i class="nav-icon i-Speach-Bubble-8"></i>
              <span class="item-name">Tooltip</span>
            </a>
          </li>-->


        </ul>

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
            <a href="#">
              <i class="nav-icon i-Line-Chart"></i>
              <span class="item-name">Apex storage</span>
              <i class="dd-arrow i-Arrow-Down"></i>
            </a>
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
        <ul
          class="childNav d-none"
          data-parent="others"
          :class="{ 'd-block': selectedParentMenu == 'pages' }"
        >




          <!-- <li class="nav-item">
            <a href="blank.html" class="open">
              <i class="nav-icon i-File-Horizontal"></i>
              <span class="item-name">Blank Page</span>
            </a>
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
