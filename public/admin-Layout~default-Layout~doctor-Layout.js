(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-Layout~default-Layout~doctor-Layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LogoMain.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {},
  mounted: function mounted() {
    /* const logo = document.querySelectorAll('#logo-logo .logo-logo');
    console.log(logo);
    for(let i=0;i<=logo.length;i++){
        console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
    } */
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/products.js */ "./resources/js/data/products.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["isSearchOpen"],
  components: {
    VuePerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbar"]
  },
  data: function data() {
    return {
      issearchClose: false,
      products: _data_products_js__WEBPACK_IMPORTED_MODULE_0__["products"],
      search: ""
    };
  },
  methods: {
    closeSearch: function closeSearch() {
      // this.issearchClose= !this.issearchClose;
      this.$emit("closeSearch", {
        isSearchOpen: false
      });
    }
  },
  computed: {
    filterProducts: function filterProducts() {
      var _this = this;

      return this.products.filter(function (product) {
        return product.title.toLowerCase().match(_this.search.toLowerCase());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashBreadCrumb.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashBreadCrumb.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["mainSection", "MainPage", "SubPage"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../partials/TopNav */ "./resources/js/layouts/partials/TopNav.vue");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Topnav: _partials_TopNav__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuePerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbar"]
  },
  data: function data() {
    return {
      isDisplay: false,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"]
    };
  },
  mounted: function mounted() {// this.toggleSelectedParentMenu();
    // window.addEventListener("resize", this.handleWindowResize);
    // document.addEventListener("click", this.returnSelectedParentMenu);
    // this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(["largeSidebarM/getSideBarToggleProperties"])), {}, {
    getSideBarToggleProperties: function getSideBarToggleProperties() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"];
    },
    isSideNavOpen: function isSideNavOpen() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"].isSideNavOpen;
    },
    isSearchOpen: function isSearchOpen() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"].isSideNavOpen;
    }
    /*  getSideBarToggleProperties() {
        console.log(this.SideBarToggleProperties);
        return this.SideBarToggleProperties;
    } */

  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("largeSidebarM", ["changeSecondarySidebarProperties", "changeSecondarySidebarPropertiesViaMenuItem", "changeSecondarySidebarPropertiesViaOverlay", "changeSidebarProperties"])), {}, {
    handleWindowResize: function handleWindowResize() {
      //  console.log('not working is Mobile');
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.$store.dispatch("largeSidebarM/changeSidebarProperties");
        }

        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.$store.dispatch("largeSidebarM/changeSecondarySidebarProperties");
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.$store.dispatch("largeSidebarM/changeSidebarProperties"); // this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu: function toggleSelectedParentMenu() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      })[1];

      if (currentParentUrl !== undefined && currentParentUrl !== null) {
        // console.log(currentParentUrl);
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "home";
      }
    },
    toggleSubMenu: function toggleSubMenu(e) {
      var hasSubmenu = e.target.dataset.submenu;
      var parent = e.target.dataset.item;

      if (hasSubmenu) {
        this.selectedParentMenu = parent;
        this.$store.dispatch("largeSidebarM/changeSecondarySidebarPropertiesViaMenuItem", true);
      } else {
        this.selectedParentMenu = parent;
        this.$store.dispatch("largeSidebarM/changeSecondarySidebarPropertiesViaMenuItem", false); // this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },
    removeOverlay: function removeOverlay() {
      this.$store.dispatch("largeSidebarM/changeSecondarySidebarPropertiesViaOverlay");

      if (window.innerWidth <= 1200) {
        this.$store.dispatch("largeSidebarM/changeSidebarProperties");
      }

      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu: function returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.$store.dispatch("largeSidebarM/toggleSelectedParentMenu");
      }
    },
    toggleSidebarDropdwon: function toggleSidebarDropdwon(event) {
      var dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");
      event.currentTarget.classList.toggle("open");
      dropdownMenus.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/partials/TopNav.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_LogoMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/LogoMain */ "./resources/js/components/LogoMain.vue");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _largeSidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../largeSidebar/Sidebar */ "./resources/js/layouts/largeSidebar/Sidebar.vue");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Search */ "./resources/js/components/Search.vue");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 // import LogoMain from '../../components/LogoMain.vue';

/* harmony default export */ __webpack_exports__["default"] = ({
  // methods: {
  //   async logout() {
  //     await this.$auth.logout();
  //   }
  // }
  data: function data() {
    return {
      isDisplay: true,
      isMobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"],
      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      items: [{
        title: "Click Me"
      }, {
        title: "Click Me"
      }, {
        title: "Click Me"
      }, {
        title: "Click Me 2"
      }] //username: ""

    };
  },
  watch: {
    top: function top(val) {
      this.bottom = !val;
    },
    right: function right(val) {
      this.left = !val;
    },
    bottom: function bottom(val) {
      this.top = !val;
    },
    left: function left(val) {
      this.right = !val;
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["largeSidebarM/getSideBarToggleProperties", "isAuth", "loggedUser", "loggedUserID"])), {}, {
    activeFab: function activeFab() {
      switch (this.tabs) {
        case 'one':
          return {
            "class": 'purple',
            icon: 'account_circle'
          };

        case 'two':
          return {
            "class": 'red',
            icon: 'edit'
          };

        case 'three':
          return {
            "class": 'green',
            icon: 'keyboard_arrow_up'
          };

        default:
          return {};
      }
    },
    getSideBarToggleProperties: function getSideBarToggleProperties() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"];
    },
    isSideNavOpen: function isSideNavOpen() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"].isSideNavOpen;
    },

    /* isSearchOpen() {
        return this.$store.getters[
            "largeSidebarM/getSideBarToggleProperties"
        ].isSearchOpen;
    }, */
    username: function username() {
      return this.loggedUser.userName;
    }
  }),
  components: {
    Sidebar: _largeSidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Search: _components_Search__WEBPACK_IMPORTED_MODULE_4__["default"],
    VuePerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbar"],
    'logo-main': _components_LogoMain__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("largeSidebarM", ["changeSecondarySidebarProperties", "changeSidebarProperties", "changeThemeMode", "signOut"])), {}, {
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_1__["default"].toggleFullScreen();
    },
    closeMegaMenu: function closeMegaMenu() {
      this.getSideBarToggleProperties.isMegaMenuOpen = false; // console.log(this.isMouseOnMegaMenu);
      // if (!this.isMouseOnMegaMenu) {
      //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
      // }
    },
    toggleMegaMenu: function toggleMegaMenu() {
      this.getSideBarToggleProperties.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch: function toggleSearch() {
      this.getSideBarToggleProperties.isSearchOpen = !this.isSearchOpen;
    },
    sideBarToggle: function sideBarToggle(el) {
      if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen && mobile_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"]) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen) {
        this.$store.dispatch("largeSidebarM/changeSecondarySidebarProperties");
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.$store.dispatch("largeSidebarM/changeSidebarProperties");
      } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen && !this.getSideBarToggleProperties.isActiveSecondarySideNav) {
        this.$store.dispatch("largeSidebarM/changeSidebarProperties");
      } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen) {
        // console.log("4");
        this.$store.dispatch("largeSidebarM/changeSidebarProperties");
        this.$store.dispatch("largeSidebarM/changeSecondarySidebarProperties"); // console.log("4");
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".NuxtLogo[data-v-7edce56f] {\n  -webkit-animation: 1.25s ease-in-out;\n          animation: 1.25s ease-in-out;\n  margin: auto;\n  min-width: 100px;\n  width: 186px;\n  max-width: 186px;\n  transform-origin: left;\n  transform: scale(0.9);\n}\n.cls-1[data-v-7edce56f] {\n  fill: none;\n}\n.cls-2[data-v-7edce56f] {\n  fill: white;\n}\n.cls-3[data-v-7edce56f] {\n  opacity: 0.9;\n}\n.cls-4[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path);\n          clip-path: url(#clip-path);\n}\n.cls-5[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-2);\n          clip-path: url(#clip-path-2);\n}\n.cls-6[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-3);\n          clip-path: url(#clip-path-3);\n}\n.cls-7[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-4);\n          clip-path: url(#clip-path-4);\n}\n.cls-8[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-5);\n          clip-path: url(#clip-path-5);\n}\n.cls-9[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-6);\n          clip-path: url(#clip-path-6);\n}\n.cls-10[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-7);\n          clip-path: url(#clip-path-7);\n}\n.cls-11[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-8);\n          clip-path: url(#clip-path-8);\n}\n.cls-12[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-9);\n          clip-path: url(#clip-path-9);\n}\n.cls-13[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-10);\n          clip-path: url(#clip-path-10);\n}\n.cls-14[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-11);\n          clip-path: url(#clip-path-11);\n}\n.cls-15[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-12);\n          clip-path: url(#clip-path-12);\n}\n.cls-16[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-13);\n          clip-path: url(#clip-path-13);\n}\n.cls-17[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-14);\n          clip-path: url(#clip-path-14);\n}\n.cls-18[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-15);\n          clip-path: url(#clip-path-15);\n}\n.cls-19[data-v-7edce56f] {\n  -webkit-clip-path: url(#clip-path-16);\n          clip-path: url(#clip-path-16);\n}\n.cls-20[data-v-7edce56f] {\n  fill: white;\n  -webkit-animation: 1.5s colorchange;\n          animation: 1.5s colorchange;\n}\n#logo-logo .cls-20[data-v-7edce56f] {\n  fill: white;\n  /* opacity: 0; */\n  stroke: #feffd1;\n  /* animation: color-change .75s forwards;\n  animation-delay: 2s; */\n}\n#logo-logo[data-v-7edce56f] {\n  /* stroke-dasharray: 520px ;\n  stroke-dashoffset: 520px; */\n  transform: scale(1);\n  transform-origin: 50% 50%;\n  -webkit-animation: pulse-data-v-7edce56f 6s forwards infinite;\n          animation: pulse-data-v-7edce56f 6s forwards infinite;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n#Layer_1-2 > path[data-v-7edce56f]:nth-child(1) {\n  transform-origin: center;\n  transform: rotate(0deg);\n  transform-box: fill-box;\n  -webkit-animation: bundle-data-v-7edce56f 3s linear infinite;\n          animation: bundle-data-v-7edce56f 3s linear infinite;\n}\n#logo-g[data-v-7edce56f] {\n  stroke-dasharray: 110px;\n  stroke-dashoffset: 110px;\n}\n#logo-aa[data-v-7edce56f], #logo-ab[data-v-7edce56f] {\n  stroke-dasharray: 85px;\n  stroke-dashoffset: 85px;\n}\n#logo-ma[data-v-7edce56f], #logo-mb[data-v-7edce56f] {\n  stroke-dasharray: 120px;\n  stroke-dashoffset: 120px;\n}\n#logo-g[data-v-7edce56f], #logo-aa[data-v-7edce56f], #logo-ma[data-v-7edce56f], #logo-mb[data-v-7edce56f], #logo-ab[data-v-7edce56f] {\n  -webkit-animation: line-anim-data-v-7edce56f 6s linear 0s forwards infinite;\n          animation: line-anim-data-v-7edce56f 6s linear 0s forwards infinite;\n}\n@-webkit-keyframes appear-data-v-7edce56f {\n0% {\n    opacity: 0;\n    transform: scale(0.9);\n}\n50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes appear-data-v-7edce56f {\n0% {\n    opacity: 0;\n    transform: scale(0.9);\n}\n50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@-webkit-keyframes line-anim-data-v-7edce56f {\n0% {\n    fill: transparent;\n    /* stroke-dashoffset: 85px; */\n}\n20% {\n    fill: transparent;\n}\n39% {\n    fill: transparent;\n    stroke: #feffd1;\n    stroke-dashoffset: 0;\n}\n40% {\n    fill: white;\n    stroke: transparent;\n    stroke-dashoffset: 0;\n}\n60% {\n    stroke-dashoffset: 0;\n    stroke: transparent;\n    fill: white;\n}\n100% {\n    stroke: transparent;\n    fill: white;\n    stroke-dashoffset: 0;\n}\n}\n@keyframes line-anim-data-v-7edce56f {\n0% {\n    fill: transparent;\n    /* stroke-dashoffset: 85px; */\n}\n20% {\n    fill: transparent;\n}\n39% {\n    fill: transparent;\n    stroke: #feffd1;\n    stroke-dashoffset: 0;\n}\n40% {\n    fill: white;\n    stroke: transparent;\n    stroke-dashoffset: 0;\n}\n60% {\n    stroke-dashoffset: 0;\n    stroke: transparent;\n    fill: white;\n}\n100% {\n    stroke: transparent;\n    fill: white;\n    stroke-dashoffset: 0;\n}\n}\n/* @keyframes colorchange {\n  to {\n\n    fill: #1ebd10;\n\n  }\n} */\n@-webkit-keyframes pulse-data-v-7edce56f {\n0% {\n    transform: scale(0.95);\n}\n40% {\n    transform: scale(0.95);\n}\n50% {\n    transform: scale(1.03);\n}\n60% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes pulse-data-v-7edce56f {\n0% {\n    transform: scale(0.95);\n}\n40% {\n    transform: scale(0.95);\n}\n50% {\n    transform: scale(1.03);\n}\n60% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1);\n}\n}\n@-webkit-keyframes bundle-data-v-7edce56f {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n    transform: rotate(45deg);\n}\n50% {\n    transform: rotate(0deg);\n}\n75% {\n    transform: rotate(-45deg);\n}\n100% {\n    transform: rotate(0deg);\n}\n}\n@keyframes bundle-data-v-7edce56f {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n    transform: rotate(45deg);\n}\n50% {\n    transform: rotate(0deg);\n}\n75% {\n    transform: rotate(-45deg);\n}\n100% {\n    transform: rotate(0deg);\n}\n}\n@media (max-width: 576px) {\n.NuxtLogo[data-v-7edce56f] {\n    transform: scale(0.8);\n}\n}\n@media (min-width: 576px) and (max-width: 768px) {\n.NuxtLogo[data-v-7edce56f] {\n    transform: scale(0.9);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --shadow: 3px 4px 20px 0px rgba(17, 87, 0, 0.34);\n}\n#brand {\n  background-position: center;\n  font-size: 16px;\n  padding: 0;\n  margin: 0;\n  height: 67px;\n  width: 185px;\n  border: 1px solid red;\n}\n.v-speed-dial {\n  position: absolute;\n}\n.v-btn--floating {\n  position: relative;\n}\n.topnav {\n  padding: 0 12px;\n  background-color: #69c31f;\n  color: #ffffff;\n  font-weight: bold;\n}\n.topnav.navbar-expand-lg.main-header {\n  box-shadow: var(--shadow);\n}\n.layout-sidebar-large .main-header {\n  background-color: #69c31f;\n  padding: 0;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: white;\n}\n.navbar-dark .navbar-nav .nav-link:hover {\n  color: #0c0aa7;\n}\n.container {\n  padding: 0;\n}\n.navbar-dark .navbar-nav .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link:active {\n  color: rgba(0, 24, 197, 0.75);\n}\n.navbar-brand {\n  padding: 0;\n}\n.btn.dropdown-toggle.btn-link.text-decoration-none.dropdown-toggle-no-caret {\n  padding: 0;\n}\n.layout-sidebar-large .main-header .header-part-right {\n  margin: 0 10px 0 0;\n}\n@media (max-width: 576px) {\n.navbar-brand {\n    width: 25%;\n}\n.navbar-nav .nav-item {\n    display: none;\n}\n}\n@media (max-width: 768px) {\n.navbar-brand {\n    width: 25%;\n}\n}\n.menu-icon-grid {\n  background: #ffffffa2;\n  border-radius: 1rem;\n}\n.menu-icon-grid:hover {\n  background: #ffffff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=template&id=7edce56f&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LogoMain.vue?vue&type=template&id=7edce56f&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { staticClass: "NuxtLogo", attrs: { viewBox: "0 0 186 66.29" } },
    [
      _c("defs", [
        _c("clipPath", { attrs: { id: "clip-path" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "28.44", y: "2.42", width: "4.45", height: "16.62" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-2" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "28.45", y: "42.31", width: "4.45", height: "16.62" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-3" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "42.31", y: "28.44", width: "16.62", height: "4.45" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-4" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "2.42", y: "28.45", width: "16.62", height: "4.45" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-5" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "41.42", y: "19.87", width: "12.22", height: "6.35" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-6" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "7.71", y: "35.13", width: "12.22", height: "6.35" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-7" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "41.43", y: "35.12", width: "12.22", height: "6.35" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-8" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "7.7", y: "19.88", width: "12.22", height: "6.35" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-9" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "35.13", y: "41.42", width: "6.35", height: "12.22" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-10" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "19.87", y: "7.71", width: "6.35", height: "12.22" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-11" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "19.88", y: "41.42", width: "6.35", height: "12.22" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-12" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "35.12", y: "7.7", width: "6.35", height: "12.22" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-13" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "38.9", y: "9.12", width: "13.33", height: "13.33" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-14" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "9.12", y: "38.9", width: "13.33", height: "13.33" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-15" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "38.9", y: "38.9", width: "13.33", height: "13.33" }
          })
        ]),
        _vm._v(" "),
        _c("clipPath", { attrs: { id: "clip-path-16" } }, [
          _c("rect", {
            staticClass: "cls-1",
            attrs: { x: "9.12", y: "9.12", width: "13.33", height: "13.33" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("title", [_vm._v("Gamma_Logo_Full")]),
      _vm._v(" "),
      _c("g", { attrs: { id: "Layer_2", "data-name": "Layer 2" } }, [
        _c("g", { attrs: { id: "Layer_1-2", "data-name": "Layer 1" } }, [
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d:
                "M37.36,25a2.75,2.75,0,0,0-1.55-2,2.13,2.13,0,0,0-.66-.16h-.46c-.14,0-.29,0-.42.06l-1.44.34a10.17,10.17,0,0,1-1.57.33,3.81,3.81,0,0,1-.59,0,4,4,0,0,1-.6,0,10.69,10.69,0,0,1-1.57-.33L27.07,23c-.14,0-.28,0-.42-.06h-.47a2.07,2.07,0,0,0-.65.16A2.73,2.73,0,0,0,24,25a3.5,3.5,0,0,0-.07.45v.44s0,.07,0,.1l.06.47a9.49,9.49,0,0,0,.58,1.9c.25.62.51,1.23.76,1.85a3.55,3.55,0,0,1,.27,1.2,4.44,4.44,0,0,1-.12,1.09,14.18,14.18,0,0,0-.33,1.6A4.77,4.77,0,0,0,25.27,36a5.51,5.51,0,0,0,1.46,2.41,4.25,4.25,0,0,0,1,.79c.16.09.85.43.8,0,0-.12,0-.23-.06-.35-.13-.52-.28-1-.39-1.56a4,4,0,0,1,0-1.57,4.68,4.68,0,0,1,.74-1.75,3,3,0,0,1,.88-.89,1.76,1.76,0,0,1,1-.31,1.81,1.81,0,0,1,1,.31,3.11,3.11,0,0,1,.88.89,4.85,4.85,0,0,1,.74,1.75,4.15,4.15,0,0,1,0,1.57c-.11.52-.26,1-.39,1.56a2.14,2.14,0,0,0-.06.35c-.05.45.63.11.8,0a4.47,4.47,0,0,0,1-.79A5.6,5.6,0,0,0,36.07,36a4.77,4.77,0,0,0,.13-1.84c-.07-.55-.21-1.07-.33-1.6a4.45,4.45,0,0,1-.13-1.09,3.55,3.55,0,0,1,.27-1.2c.25-.62.52-1.23.77-1.85a9.47,9.47,0,0,0,.57-1.9c0-.15,0-.31.06-.47s0-.06,0-.1v-.44c0-.15,0-.3-.07-.45"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-4" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: { points: "28.44 2.42 32.9 2.42 30.67 19.04 28.44 2.42" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M32.26,3.82a2.24,2.24,0,1,1,0-3.16,2.25,2.25,0,0,1,0,3.16"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-5" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "32.91 58.93 28.45 58.93 30.68 42.31 32.91 58.93"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M29.09,57.53a2.24,2.24,0,1,1,0,3.16,2.25,2.25,0,0,1,0-3.16"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-6" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "58.93 28.45 58.93 32.9 42.31 30.67 58.93 28.45"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M57.53,32.26a2.24,2.24,0,1,1,3.16,0,2.23,2.23,0,0,1-3.16,0"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-7" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "2.42 32.91 2.42 28.45 19.04 30.68 2.42 32.91"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M3.82,29.09a2.24,2.24,0,1,1-3.16,0,2.25,2.25,0,0,1,3.16,0"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-8" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "52.35 19.87 53.64 22.97 41.42 26.21 52.35 19.87"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M52.48,22.93A1.69,1.69,0,1,1,54.69,22a1.69,1.69,0,0,1-2.21.92"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-9" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "8.99 41.48 7.71 38.38 19.93 35.13 8.99 41.48"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d:
                "M8.87,38.42a1.69,1.69,0,0,1-1.29,3.12,1.69,1.69,0,1,1,1.29-3.12"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-10" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "53.65 38.36 52.36 41.47 41.43 35.12 53.65 38.36"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M51.57,40.62a1.69,1.69,0,1,1,2.21.91,1.69,1.69,0,0,1-2.21-.91"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-11" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: { points: "7.7 22.98 8.99 19.88 19.92 26.23 7.7 22.98" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M9.78,20.73a1.69,1.69,0,1,1-2.21-.91,1.69,1.69,0,0,1,2.21.91"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-12" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "41.48 52.35 38.38 53.64 35.13 41.42 41.48 52.35"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M38.42,52.48a1.69,1.69,0,1,1,.91,2.2,1.69,1.69,0,0,1-.91-2.2"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-13" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "19.87 8.99 22.97 7.71 26.22 19.93 19.87 8.99"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M22.93,8.87A1.69,1.69,0,1,1,22,6.66a1.69,1.69,0,0,1,.91,2.21"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-14" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "22.98 53.65 19.88 52.36 26.23 41.42 22.98 53.65"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M20.73,51.57a1.69,1.69,0,1,1-.91,2.2,1.69,1.69,0,0,1,.91-2.2"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-15" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: { points: "38.36 7.7 41.47 8.99 35.12 19.92 38.36 7.7" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d: "M40.62,9.78a1.69,1.69,0,1,1,.91-2.21,1.7,1.7,0,0,1-.91,2.21"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-16" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "49.08 9.12 52.23 12.27 38.9 22.45 49.08 9.12"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d:
                "M50.78,12.81A2.24,2.24,0,1,1,53,10.57a2.25,2.25,0,0,1-2.24,2.24"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-17" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "12.27 52.23 9.12 49.08 22.45 38.9 12.27 52.23"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d:
                "M10.57,48.54a2.24,2.24,0,1,1-2.24,2.24,2.25,2.25,0,0,1,2.24-2.24"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-18" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "52.23 49.08 49.08 52.23 38.9 38.9 52.23 49.08"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d:
                "M48.54,50.78A2.24,2.24,0,1,1,50.78,53a2.25,2.25,0,0,1-2.24-2.24"
            }
          }),
          _vm._v(" "),
          _c("g", { staticClass: "cls-3" }, [
            _c("g", { staticClass: "cls-19" }, [
              _c("polygon", {
                staticClass: "cls-2",
                attrs: {
                  points: "9.12 12.27 12.27 9.13 22.45 22.45 9.12 12.27"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-2",
            attrs: {
              d:
                "M12.8,10.57a2.24,2.24,0,1,1-2.23-2.24,2.24,2.24,0,0,1,2.23,2.24"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M80.78,55.05c0-.07,0-.11.09-.11h.81s.08,0,.08.11v1.86a.69.69,0,0,0,.2.53.72.72,0,0,0,.53.19h.09a3.37,3.37,0,0,1,1,.13.76.76,0,0,1,.08.42.9.9,0,0,1-.08.47,3.32,3.32,0,0,1-1,.13,1.59,1.59,0,0,1-.46-.07.73.73,0,0,1-.36-.3v.12a4,4,0,0,1-.15,1.16,2.32,2.32,0,0,1-.43.83,1.85,1.85,0,0,1-.68.5,2.41,2.41,0,0,1-.87.16,2.34,2.34,0,0,1-.85-.16,1.82,1.82,0,0,1-.67-.5,2.35,2.35,0,0,1-.45-.83,3.72,3.72,0,0,1-.16-1.17,5.34,5.34,0,0,1,.15-1.25A5.68,5.68,0,0,1,78,56.19c0-.07.08-.08.13,0l.71.37s0,0,.05.06a.29.29,0,0,1,0,.09,6.68,6.68,0,0,0-.26.76,3.23,3.23,0,0,0-.13,1,2.39,2.39,0,0,0,.11.76,1.54,1.54,0,0,0,.28.49,1,1,0,0,0,.38.26,1.19,1.19,0,0,0,.41.08,1,1,0,0,0,.8-.36,1.69,1.69,0,0,0,.31-1.14Zm-1.32-.69q-.09,0-.09-.12v-1q0-.12.09-.12h.83q.09,0,.09.12v1q0,.12-.09.12Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M85.19,58.18a.86.86,0,0,1-.37.47,1.43,1.43,0,0,1-.67.13H82.62a.33.33,0,0,1-.26-.11.87.87,0,0,1-.08-.44,1,1,0,0,1,.08-.47.28.28,0,0,1,.26-.13h1.29a.36.36,0,0,0,.24-.07.39.39,0,0,0,.12-.19,1.61,1.61,0,0,0,0-.35c0-.14,0-.32,0-.53V54.08s0-.08.05-.09a.19.19,0,0,1,.1,0h.75q.09,0,.09.12v2.83a.69.69,0,0,0,.19.53.72.72,0,0,0,.53.19h.15a.29.29,0,0,1,.26.13.75.75,0,0,1,.09.42.88.88,0,0,1-.09.47.27.27,0,0,1-.26.13,1.48,1.48,0,0,1-.59-.11.81.81,0,0,1-.4-.49M83.83,61c-.06,0-.09,0-.09-.11v-1q0-.12.09-.12h.73q.09,0,.09.12v1c0,.08,0,.11-.09.11ZM85,61c-.06,0-.09,0-.09-.11v-1q0-.12.09-.12h.73q.09,0,.09.12v1c0,.08,0,.11-.09.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M86.67,54.15a.21.21,0,0,1,0-.15l.08-.13,1.88-2.94c0-.06.08-.07.12,0l.56.63a.14.14,0,0,1,0,.16L88,53.92a5.07,5.07,0,0,1,.82.08,1.46,1.46,0,0,1,.66.28,1.56,1.56,0,0,1,.43.63A3.3,3.3,0,0,1,90,56v1a.6.6,0,0,0,.2.48.77.77,0,0,0,.52.17h.15a.29.29,0,0,1,.26.13.76.76,0,0,1,.08.43.88.88,0,0,1-.08.46.29.29,0,0,1-.26.13,1.55,1.55,0,0,1-.64-.13.9.9,0,0,1-.42-.53,1,1,0,0,1-.41.51,1.4,1.4,0,0,1-.68.15H86.18a.28.28,0,0,1-.26-.14.88.88,0,0,1-.09-.47.85.85,0,0,1,.08-.44.33.33,0,0,1,.27-.1h2.16a1.22,1.22,0,0,0,.37-.05.41.41,0,0,0,.21-.15.66.66,0,0,0,.1-.28c0-.11,0-.26,0-.44v-.62c0-.68-.29-1-.89-1h-1.4c-.06,0-.08,0-.08-.12Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M93.23,53.76a1.63,1.63,0,0,1,1.35.56,2.21,2.21,0,0,1,.47,1.5,2.71,2.71,0,0,1-.19,1,2.16,2.16,0,0,1-.53.77h1.24a.3.3,0,0,1,.26.11.72.72,0,0,1,.09.43.88.88,0,0,1-.09.47.28.28,0,0,1-.26.14H94.36a5.3,5.3,0,0,1-.59,0,1,1,0,0,1-.53-.24,1.26,1.26,0,0,1-.62.24c-.22,0-.41,0-.58,0H90.89a.28.28,0,0,1-.26-.14.89.89,0,0,1-.09-.45.86.86,0,0,1,.08-.45.3.3,0,0,1,.27-.11h1.22a2.25,2.25,0,0,1-.51-.77,2.54,2.54,0,0,1-.2-1,2.26,2.26,0,0,1,.47-1.5,1.66,1.66,0,0,1,1.36-.56m0,1a.76.76,0,0,0-.59.28,1.22,1.22,0,0,0-.25.84,1.63,1.63,0,0,0,.25,1,1.66,1.66,0,0,0,.59.56,1.81,1.81,0,0,0,.58-.56,1.71,1.71,0,0,0,.24-1,1.28,1.28,0,0,0-.24-.84.74.74,0,0,0-.58-.28m-.41-2c-.06,0-.09,0-.09-.11v-1c0-.08,0-.11.09-.11h.83c.06,0,.09,0,.09.11v1c0,.08,0,.11-.09.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M95.57,58.78a.3.3,0,0,1-.26-.11.8.8,0,0,1-.09-.45,1,1,0,0,1,.08-.46.3.3,0,0,1,.27-.13H96a.36.36,0,0,0,.32-.14.78.78,0,0,0,.1-.48V51q0-.12.09-.12h.81q.09,0,.09.12v6.31a2,2,0,0,1-.24,1.1.87.87,0,0,1-.78.36Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M99.51,58.66q0,.12-.09.12h-.81s-.08,0-.08-.12V51c0-.08,0-.12.08-.12h.81q.09,0,.09.12Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M102.23,58.78a2,2,0,0,1-.73-.12,1.34,1.34,0,0,1-.54-.41,2.21,2.21,0,0,1-.33-.74,4.38,4.38,0,0,1-.12-1.11,4.68,4.68,0,0,1,.14-1.21,2.47,2.47,0,0,1,.4-.83,1.47,1.47,0,0,1,.57-.46,1.57,1.57,0,0,1,.68-.15,1.8,1.8,0,0,1,.71.14,1.51,1.51,0,0,1,.57.44,2.52,2.52,0,0,1,.36.79,4.63,4.63,0,0,1,.13,1.2V59a2.5,2.5,0,0,1-.41,1.59,1.46,1.46,0,0,1-1.19.5h-1.18c-.05,0-.08,0-.08-.12v-.92c0-.08,0-.12.08-.12h1a1,1,0,0,0,.32,0,.5.5,0,0,0,.26-.17.86.86,0,0,0,.16-.36,2.5,2.5,0,0,0,.06-.61Zm.07-3.86a.67.67,0,0,0-.61.39,2.12,2.12,0,0,0-.22,1.06,1.6,1.6,0,0,0,.22,1,.78.78,0,0,0,.64.27h.78V56.31a2.17,2.17,0,0,0-.2-1,.63.63,0,0,0-.61-.35"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M109.54,53.76v-.5q0-.12.09-.12h.8q.09,0,.09.12V57a.82.82,0,0,0,.1.48.4.4,0,0,0,.32.13h.33c.23,0,.35.19.35.58a.81.81,0,0,1-.09.46.3.3,0,0,1-.26.11h-.71a1,1,0,0,1-.66-.2,1.07,1.07,0,0,1-.32-.7,1.16,1.16,0,0,1-.44.32,1.32,1.32,0,0,1-.53.1,1.56,1.56,0,0,1-.64-.13,1.3,1.3,0,0,1-.52-.39,2,2,0,0,1-.35-.68,3.17,3.17,0,0,1-.13-1,4,4,0,0,1,.14-1.13,2,2,0,0,1,.38-.72,1.47,1.47,0,0,1,.55-.39,1.67,1.67,0,0,1,.63-.11Zm-.81,3.39a.66.66,0,0,0,.61-.32,1.69,1.69,0,0,0,.2-.93v-1h-.77a.76.76,0,0,0-.6.26,1.44,1.44,0,0,0-.23.94,1.24,1.24,0,0,0,.21.79.7.7,0,0,0,.58.25"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M111.27,58.78a.28.28,0,0,1-.26-.14.8.8,0,0,1-.09-.44.94.94,0,0,1,.08-.46.34.34,0,0,1,.27-.11h2.31a1.22,1.22,0,0,0,.37-.05.44.44,0,0,0,.22-.16.81.81,0,0,0,.1-.31,3.09,3.09,0,0,0,0-.47,3.77,3.77,0,0,0-.06-.69,1.77,1.77,0,0,0-.17-.55,1,1,0,0,0-.32-.36.91.91,0,0,0-.49-.12,1,1,0,0,0-.52.15,1.45,1.45,0,0,0-.42.4c0,.06-.08.06-.12,0l-.45-.62c0-.07-.06-.12,0-.17a2.56,2.56,0,0,1,.64-.67,1.54,1.54,0,0,1,.92-.26,1.91,1.91,0,0,1,1,.23,1.84,1.84,0,0,1,.63.64,2.93,2.93,0,0,1,.33.93,6.48,6.48,0,0,1,0,2.15,1.74,1.74,0,0,1-.26.64.87.87,0,0,1-.43.33,1.55,1.55,0,0,1-.59.1ZM113,61q-.09,0-.09-.12v-1q0-.12.09-.12h.83q.09,0,.09.12v1q0,.12-.09.12Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M117,61.12q-.09,0-.09-.12v-.92q0-.12.09-.12h1a1.18,1.18,0,0,0,.35-.05.64.64,0,0,0,.25-.18,1,1,0,0,0,.14-.36,2.43,2.43,0,0,0,.06-.59h-.88a2,2,0,0,1-.73-.12,1.34,1.34,0,0,1-.54-.41,2.21,2.21,0,0,1-.33-.74,4.38,4.38,0,0,1-.12-1.11,4.25,4.25,0,0,1,.15-1.21,2.67,2.67,0,0,1,.39-.83,1.47,1.47,0,0,1,.57-.46,1.57,1.57,0,0,1,.68-.15,1.8,1.8,0,0,1,.71.14,1.51,1.51,0,0,1,.57.44,2.52,2.52,0,0,1,.36.79,4.63,4.63,0,0,1,.13,1.2v1.31h.6a.27.27,0,0,1,.26.13.75.75,0,0,1,.09.42,1,1,0,0,1-.08.49.34.34,0,0,1-.27.11h-.6V59a2.44,2.44,0,0,1-.41,1.59,1.46,1.46,0,0,1-1.19.5Zm1-6.2a.68.68,0,0,0-.62.39,2.12,2.12,0,0,0-.22,1.06,1.6,1.6,0,0,0,.22,1,.78.78,0,0,0,.64.27h.78V56.31a2.17,2.17,0,0,0-.2-1,.62.62,0,0,0-.6-.35"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M120.36,58.78a.33.33,0,0,1-.26-.11.8.8,0,0,1-.09-.45.86.86,0,0,1,.09-.46.27.27,0,0,1,.26-.13h.43a.39.39,0,0,0,.32-.14.85.85,0,0,0,.1-.48V51c0-.08,0-.12.08-.12h.81q.09,0,.09.12v6.31a2.07,2.07,0,0,1-.23,1.1.88.88,0,0,1-.79.36Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M124.3,58.66c0,.08,0,.12-.08.12h-.81q-.09,0-.09-.12V51q0-.12.09-.12h.81c.06,0,.08,0,.08.12Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M129.85,53.76v-.5q0-.12.09-.12h.8s.08,0,.08.12V57a.92.92,0,0,0,.1.49.41.41,0,0,0,.32.13h.33c.23,0,.35.19.35.58a.94.94,0,0,1-.08.46.34.34,0,0,1-.27.11h-.7a1,1,0,0,1-.67-.2,1.12,1.12,0,0,1-.32-.7,1.13,1.13,0,0,1-.43.32,1.39,1.39,0,0,1-.53.1,1.53,1.53,0,0,1-.64-.13,1.24,1.24,0,0,1-.52-.39,2,2,0,0,1-.36-.68,3.5,3.5,0,0,1-.13-1,3.68,3.68,0,0,1,.15-1.13,1.89,1.89,0,0,1,.38-.72,1.43,1.43,0,0,1,.54-.39,1.76,1.76,0,0,1,.64-.11Zm-1.66-1.42q-.09,0-.09-.12v-1q0-.12.09-.12h.73c.06,0,.08,0,.08.12v1c0,.08,0,.12-.08.12Zm.84,4.81a.67.67,0,0,0,.62-.32,1.78,1.78,0,0,0,.2-.93v-1h-.78a.76.76,0,0,0-.6.26,1.45,1.45,0,0,0-.22.94,1.24,1.24,0,0,0,.21.79.7.7,0,0,0,.57.25m.29-4.81q-.09,0-.09-.12v-1q0-.12.09-.12h.73q.09,0,.09.12v1q0,.12-.09.12Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M134.11,53.76a1.89,1.89,0,0,1,1.46.49,1.86,1.86,0,0,1,.47,1.31,2.34,2.34,0,0,1-.09.66,2.78,2.78,0,0,1-.21.57,3.15,3.15,0,0,1-.3.47,2.78,2.78,0,0,1-.32.35l.16,0h1.26a.28.28,0,0,1,.27.14,1,1,0,0,1,.07.46.87.87,0,0,1-.08.44.32.32,0,0,1-.26.11h-1.3a2.33,2.33,0,0,1-.59-.08,1.4,1.4,0,0,1-.54-.28,1.61,1.61,0,0,1-.61.28,2.51,2.51,0,0,1-.57.08h-1.25a.3.3,0,0,1-.26-.12.85.85,0,0,1-.08-.43,1.64,1.64,0,0,1,0-.45.28.28,0,0,1,.29-.15h1l.32,0a2.06,2.06,0,0,0,.41-.09,3.46,3.46,0,0,0-.19-.66,2.84,2.84,0,0,0-.27-.49,2.33,2.33,0,0,0-.31-.38l-.35-.33a.43.43,0,0,1-.11-.17c0-.05,0-.11,0-.17v-.73a.45.45,0,0,1,.16-.28,1.84,1.84,0,0,1,.44-.27,3.22,3.22,0,0,1,.62-.2,2.81,2.81,0,0,1,.71-.08m.13,3.5a2.51,2.51,0,0,0,.29-.28,2.8,2.8,0,0,0,.25-.35,2.65,2.65,0,0,0,.18-.42,1.63,1.63,0,0,0,.07-.45.77.77,0,0,0-.26-.66,1.12,1.12,0,0,0-.66-.19,1.79,1.79,0,0,0-.6.1,1.6,1.6,0,0,0-.36.16,2.81,2.81,0,0,1,.69.88,4,4,0,0,1,.4,1.21"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M138.63,56.91q0,.72.63.72a1.21,1.21,0,0,0,.3,0,.29.29,0,0,0,.18-.12.6.6,0,0,0,.09-.26c0-.11,0-.27,0-.47V55c0-.08,0-.12.08-.12h.81q.09,0,.09.12v1.9a.79.79,0,0,0,.17.55.57.57,0,0,0,.44.18,1.34,1.34,0,0,0,.33,0,.31.31,0,0,0,.18-.16,1,1,0,0,0,.07-.35,4.81,4.81,0,0,0,0-.59V54.08q0-.12.09-.12h.81c.05,0,.08,0,.08.12v3.24a2,2,0,0,1-.24,1.13,1,1,0,0,1-.84.33h-.38a.8.8,0,0,1-.51-.16.86.86,0,0,1-.33-.45.84.84,0,0,1-.35.47,1.28,1.28,0,0,1-.63.14h-.38a.84.84,0,0,1-.84-.62.92.92,0,0,1-.36.48,1.23,1.23,0,0,1-.63.14h-1a.33.33,0,0,1-.26-.11.69.69,0,0,1-.09-.41,1.08,1.08,0,0,1,.08-.49.29.29,0,0,1,.27-.14h.7a.32.32,0,0,0,.34-.19,2.57,2.57,0,0,0,.07-.69V55c0-.08,0-.12.08-.12h.81q.09,0,.09.12Zm.77-4.11c-.05,0-.08,0-.08-.11v-1c0-.08,0-.11.08-.11h.74c.05,0,.08,0,.08.11v1c0,.08,0,.11-.08.11Zm.56-1.49q-.09,0-.09-.12v-1c0-.07,0-.11.09-.11h.73c.06,0,.09,0,.09.11v1q0,.12-.09.12Zm.58,1.49c-.06,0-.09,0-.09-.11v-1c0-.08,0-.11.09-.11h.73s.08,0,.08.11v1c0,.08,0,.11-.08.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M146.48,57.63h.91a.38.38,0,0,0,.31-.13.83.83,0,0,0,.1-.49V51q0-.12.09-.12h.81q.09,0,.09.12v6.31a2,2,0,0,1-.24,1.1.87.87,0,0,1-.78.36H144q-.09,0-.09-.12v-.92c0-.07,0-.11.09-.11h1.55v-5c0-.08,0-.11.08-.11h.81c.06,0,.09,0,.09.11Zm-2-6.18a1.32,1.32,0,0,1,.26-.63.56.56,0,0,1,.44-.22,1,1,0,0,1,.41.1l.42.21.41.21a1,1,0,0,0,.39.1.21.21,0,0,0,.19-.09.73.73,0,0,0,.05-.31c0-.08,0-.11.09-.11h.32c.06,0,.09,0,.09.11a1.63,1.63,0,0,1-.17.81.54.54,0,0,1-.5.28,1.22,1.22,0,0,1-.46-.09l-.43-.2-.4-.2a.75.75,0,0,0-.33-.09.25.25,0,0,0-.17.07.48.48,0,0,0-.12.26c0,.07,0,.1-.11.08l-.32-.14q-.09,0-.06-.15"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M152,51q0-.12.09-.12h.81c.06,0,.08,0,.08.12v6a.85.85,0,0,0,.1.48.39.39,0,0,0,.32.14h.31a.29.29,0,0,1,.26.13.86.86,0,0,1,.09.46.77.77,0,0,1-.09.46.33.33,0,0,1-.26.1H153a.85.85,0,0,1-.78-.36,2,2,0,0,1-.24-1.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M153.68,58.78a.24.24,0,0,1-.24-.12.88.88,0,0,1-.07-.43,1.22,1.22,0,0,1,.06-.47.24.24,0,0,1,.25-.13h1a.28.28,0,0,1,.26.13.78.78,0,0,1,.09.44,1,1,0,0,1-.08.47.34.34,0,0,1-.27.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M154.72,58.78a.24.24,0,0,1-.24-.12,1.05,1.05,0,0,1-.06-.43,1.22,1.22,0,0,1,.06-.47.23.23,0,0,1,.24-.13h1.05a.29.29,0,0,1,.26.13.9.9,0,0,1,.08.44.85.85,0,0,1-.08.47.32.32,0,0,1-.26.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M155.77,58.78a.24.24,0,0,1-.24-.12.88.88,0,0,1-.07-.43,1.22,1.22,0,0,1,.06-.47.24.24,0,0,1,.25-.13h1a.28.28,0,0,1,.26.13.78.78,0,0,1,.09.44.83.83,0,0,1-.09.47.3.3,0,0,1-.26.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M159.47,58.86a1.78,1.78,0,0,1-.78-.16,1.25,1.25,0,0,1-.58-.52,1.05,1.05,0,0,1-.21.31,2,2,0,0,1-.25.18.92.92,0,0,1-.27.08l-.27,0h-.3a.29.29,0,0,1-.26-.14.8.8,0,0,1-.09-.44.86.86,0,0,1,.08-.45.32.32,0,0,1,.27-.12h.34a.45.45,0,0,0,.19-.05.59.59,0,0,0,.17-.18,1.06,1.06,0,0,0,.14-.32,2.44,2.44,0,0,0,0-.51,1,1,0,0,1,0-.17v-.17a4.25,4.25,0,0,1,.14-1.15,2.08,2.08,0,0,1,.38-.76,1.37,1.37,0,0,1,.56-.43,1.78,1.78,0,0,1,.7-.14,1.89,1.89,0,0,1,.72.14,1.51,1.51,0,0,1,.57.44,2.28,2.28,0,0,1,.37.8,5.27,5.27,0,0,1,0,2.37,2.18,2.18,0,0,1-.37.78,1.42,1.42,0,0,1-.57.44,1.9,1.9,0,0,1-.73.14m0-3.94a.68.68,0,0,0-.62.35,2.26,2.26,0,0,0-.19,1,2.15,2.15,0,0,0,.19,1.06.76.76,0,0,0,1.25,0,2.16,2.16,0,0,0,.2-1.06c0-.94-.28-1.4-.83-1.4"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M162.28,51q0-.12.09-.12h.81q.09,0,.09.12v6a.78.78,0,0,0,.1.48.36.36,0,0,0,.32.14h.3a.28.28,0,0,1,.26.13.86.86,0,0,1,.09.46.88.88,0,0,1-.08.46.37.37,0,0,1-.27.1h-.69a.87.87,0,0,1-.78-.36,2,2,0,0,1-.24-1.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M164,58.78a.24.24,0,0,1-.24-.12,1.48,1.48,0,0,1,0-.9.23.23,0,0,1,.24-.13h1a.27.27,0,0,1,.26.13.78.78,0,0,1,.09.44,1,1,0,0,1-.08.47.34.34,0,0,1-.27.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M165,58.78a.3.3,0,0,1-.26-.14.82.82,0,0,1-.08-.44.83.83,0,0,1,.08-.46.3.3,0,0,1,.26-.11h2.32a1.15,1.15,0,0,0,.36-.05.37.37,0,0,0,.22-.16.8.8,0,0,0,.11-.31c0-.13,0-.28,0-.47A5,5,0,0,0,168,56a1.77,1.77,0,0,0-.17-.55,1.12,1.12,0,0,0-.32-.36.94.94,0,0,0-.49-.12,1,1,0,0,0-.53.15,1.55,1.55,0,0,0-.41.4c0,.06-.08.06-.12,0l-.46-.62a.14.14,0,0,1,0-.17,2.59,2.59,0,0,1,.65-.67,1.5,1.5,0,0,1,.91-.26,2,2,0,0,1,1,.23,1.73,1.73,0,0,1,.62.64,2.94,2.94,0,0,1,.34.93,5.69,5.69,0,0,1,.1,1.12,4.85,4.85,0,0,1-.09,1,1.74,1.74,0,0,1-.25.64.91.91,0,0,1-.43.33,1.57,1.57,0,0,1-.6.1Zm1.74,2.2q-.09,0-.09-.12v-1q0-.12.09-.12h.83q.09,0,.09.12v1q0,.12-.09.12Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M172.56,54.08q0-.12.09-.12h.81c.06,0,.08,0,.08.12v2.83a.69.69,0,0,0,.2.53.72.72,0,0,0,.53.19h.15a.29.29,0,0,1,.26.13.85.85,0,0,1,.08.43.88.88,0,0,1-.08.46.29.29,0,0,1-.26.13,1.85,1.85,0,0,1-.51-.07.67.67,0,0,1-.37-.32v.22a7.09,7.09,0,0,1-.07,1.1,2.23,2.23,0,0,1-.26.78,1.18,1.18,0,0,1-.47.47,1.53,1.53,0,0,1-.74.16h-.32c-.06,0-.08,0-.08-.12v-.92c0-.08,0-.12.08-.12h.19a.62.62,0,0,0,.4-.12.63.63,0,0,0,.2-.34,2.57,2.57,0,0,0,.08-.54c0-.22,0-.46,0-.74Zm.08-1.28c-.06,0-.09,0-.09-.11v-1c0-.08,0-.11.09-.11h.83c.06,0,.09,0,.09.11v1c0,.08,0,.11-.09.11Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M176.2,53.92A4.24,4.24,0,0,1,177,54a1.43,1.43,0,0,1,.66.3,1.38,1.38,0,0,1,.41.65,3.58,3.58,0,0,1,.15,1.14v.69a4.3,4.3,0,0,1-.08,1,1.81,1.81,0,0,1-.23.61.88.88,0,0,1-.4.32,1.47,1.47,0,0,1-.58.1h-2.55a.31.31,0,0,1-.27-.14,1,1,0,0,1-.08-.47.75.75,0,0,1,.08-.44.31.31,0,0,1,.27-.1h2.15a1.25,1.25,0,0,0,.38-.05.41.41,0,0,0,.21-.15.66.66,0,0,0,.1-.28c0-.11,0-.26,0-.44v-.62a1.21,1.21,0,0,0-.21-.78.88.88,0,0,0-.68-.24H175q-.09,0-.09-.12v-.8a.3.3,0,0,1,0-.15.77.77,0,0,0,.09-.13l1.88-2.94c0-.06.07-.07.11,0l.57.63a.12.12,0,0,1,0,.16Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M179.69,54.08q0-.12.09-.12h.81s.08,0,.08.12v2.83a.69.69,0,0,0,.2.53.7.7,0,0,0,.53.19h.14a.27.27,0,0,1,.26.13.74.74,0,0,1,.09.43,1,1,0,0,1-.08.46.32.32,0,0,1-.27.13,2,2,0,0,1-.51-.07.68.68,0,0,1-.36-.32v.22a7.09,7.09,0,0,1-.07,1.1,2.55,2.55,0,0,1-.26.78,1.14,1.14,0,0,1-.48.47,1.46,1.46,0,0,1-.73.16h-.32q-.09,0-.09-.12v-.92q0-.12.09-.12H179a.57.57,0,0,0,.39-.12.64.64,0,0,0,.21-.34,2.57,2.57,0,0,0,.08-.54c0-.22,0-.46,0-.74Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M184.21,58.86a1.83,1.83,0,0,1-.79-.16,1.3,1.3,0,0,1-.58-.52,1.05,1.05,0,0,1-.21.31,1.44,1.44,0,0,1-.25.18.92.92,0,0,1-.27.08l-.26,0h-.31a.3.3,0,0,1-.26-.14.8.8,0,0,1-.09-.44.75.75,0,0,1,.09-.45.29.29,0,0,1,.26-.12h.34a.41.41,0,0,0,.19-.05.52.52,0,0,0,.18-.18,1.41,1.41,0,0,0,.13-.32,2.44,2.44,0,0,0,.05-.51,1,1,0,0,1,0-.17v-.17a4.65,4.65,0,0,1,.15-1.15,2.07,2.07,0,0,1,.37-.76,1.43,1.43,0,0,1,.56-.43,1.8,1.8,0,0,1,.71-.14,1.87,1.87,0,0,1,.71.14,1.51,1.51,0,0,1,.57.44,2.28,2.28,0,0,1,.37.8,5.27,5.27,0,0,1,0,2.37,2.18,2.18,0,0,1-.37.78,1.33,1.33,0,0,1-.56.44,1.94,1.94,0,0,1-.73.14m0-3.94a.67.67,0,0,0-.62.35,2.25,2.25,0,0,0-.2,1,2.13,2.13,0,0,0,.2,1.06.75.75,0,0,0,1.24,0,2,2,0,0,0,.2-1.06c0-.94-.27-1.4-.82-1.4"
            }
          }),
          _vm._v(" "),
          _c("g", { attrs: { id: "logo-logo" } }, [
            _c("path", {
              staticClass: "cls-20 logo-logo",
              attrs: {
                id: "logo-g",
                d:
                  "M88.64,26.46H92v2.9a3.9,3.9,0,0,1-.86.58A7.21,7.21,0,0,1,90,30.4a8.29,8.29,0,0,1-1.26.31,7,7,0,0,1-1.25.11,7.43,7.43,0,0,1-2.77-.5A6.16,6.16,0,0,1,82.6,28.9a6.37,6.37,0,0,1-1.4-2.21,8,8,0,0,1-.49-2.87,7,7,0,0,1,.49-2.63,6.71,6.71,0,0,1,1.37-2.14,6.3,6.3,0,0,1,4.58-1.95,6.77,6.77,0,0,1,1.82.22,6.38,6.38,0,0,1,1.43.58,7.42,7.42,0,0,1,1.13.76c.32.27.6.52.83.74l2.36-2.72c-.38-.34-.8-.69-1.27-1a10,10,0,0,0-1.63-1A10.54,10.54,0,0,0,89.7,14,12.31,12.31,0,0,0,87,13.69a10.68,10.68,0,0,0-7.26,2.84,10.41,10.41,0,0,0-2.29,3.23,9.83,9.83,0,0,0-.86,4.14A10.44,10.44,0,0,0,77.39,28a9.89,9.89,0,0,0,2.21,3.28A10.32,10.32,0,0,0,83,33.42a11.2,11.2,0,0,0,4.3.81,16.77,16.77,0,0,0,2.28-.16,9.49,9.49,0,0,0,2.14-.55,10.4,10.4,0,0,0,2-1.05,12,12,0,0,0,2-1.65V23.29H88.64Z"
              }
            }),
            _vm._v(" "),
            _c("polygon", {
              staticClass: "cls-20 logo-logo",
              attrs: {
                id: "logo-ma",
                points:
                  "129.03 23.52 121.04 13.69 119.46 13.69 119.46 34.23 123.23 34.23 123.23 22.14 128.86 29.09 129.19 29.09 134.82 22 134.82 34.23 138.56 34.23 138.56 13.69 137.01 13.69 129.03 23.52"
              }
            }),
            _vm._v(" "),
            _c("polygon", {
              staticClass: "cls-20 logo-logo",
              attrs: {
                id: "logo-mb",
                points:
                  "152.63 23.52 144.64 13.69 143.06 13.69 143.06 34.23 146.83 34.23 146.83 22.14 152.46 29.09 152.79 29.09 158.42 22 158.42 34.23 162.16 34.23 162.16 13.69 160.61 13.69 152.63 23.52"
              }
            }),
            _vm._v(" "),
            _c("polygon", {
              staticClass: "cls-20 logo-logo",
              attrs: {
                id: "logo-aa",
                points:
                  "108.19 13.69 106.34 13.69 97.47 34.23 101.69 34.23 107.26 20.34 112.83 34.23 117.02 34.23 108.19 13.69"
              }
            }),
            _vm._v(" "),
            _c("polygon", {
              staticClass: "cls-20 logo-logo",
              attrs: {
                id: "logo-ab",
                points:
                  "175.33 13.69 173.48 13.69 164.61 34.23 168.81 34.23 174.38 20.34 174.39 20.36 174.4 20.34 174.85 21.41 179.72 33.71 179.97 34.23 184.16 34.23 175.33 13.69"
              }
            })
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20 ",
            attrs: {
              d:
                "M77.75,40.15a.08.08,0,0,1,.09-.09h2.1a1.85,1.85,0,0,1,2,1.37l.06.25c0,.09,0,.19.05.32s0,.28,0,.47,0,.4,0,.67,0,.49,0,.67,0,.34,0,.47,0,.23-.05.32l-.06.25a1.85,1.85,0,0,1-2,1.37h-2.1a.08.08,0,0,1-.09-.09Zm1,5.05s0,.06,0,.06h.88a1.54,1.54,0,0,0,.79-.18,1,1,0,0,0,.42-.6.6.6,0,0,0,0-.16q0-.09,0-.24c0-.1,0-.23,0-.38s0-.34,0-.56,0-.41,0-.56,0-.28,0-.38S81,42,81,42a.53.53,0,0,0,0-.15,1,1,0,0,0-.42-.6A1.54,1.54,0,0,0,79.7,41h-.88s0,0,0,.06Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M83.15,40.15a.08.08,0,0,1,.09-.09h3.68a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09h-2.7s0,0,0,.06v1.5s0,.05,0,.05H86.5a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09H84.22s0,0,0,.06V45.2s0,.06,0,.06h2.7a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09H83.24a.08.08,0,0,1-.09-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M88.08,40.15a.08.08,0,0,1,.09-.09H89a.16.16,0,0,1,.15.09L91.5,44.4h0V40.15c0-.06,0-.09.08-.09h.76c.05,0,.08,0,.08.09v6c0,.06,0,.09-.08.09h-.79a.18.18,0,0,1-.15-.09L89,41.89h0v4.24c0,.06,0,.09-.08.09h-.75a.08.08,0,0,1-.09-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M95.07,46.22a.08.08,0,0,1-.09-.09V41.08s0-.06,0-.06H93.39a.08.08,0,0,1-.09-.09v-.78a.08.08,0,0,1,.09-.09h4.2a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09H96.05s0,0,0,.06v5.05a.08.08,0,0,1-.09.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M99.52,40.15a.1.1,0,0,1,.11-.09h.79a.12.12,0,0,1,.12.09l2,6c0,.06,0,.09-.07.09h-.84a.12.12,0,0,1-.12-.09l-.38-1.2H98.9l-.39,1.2a.1.1,0,0,1-.11.09h-.84s-.07,0-.06-.09ZM100.8,44,100,41.59h0L99.21,44Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M103.33,40.15a.08.08,0,0,1,.09-.09h.84a.08.08,0,0,1,.09.09V45.2s0,.06.05.06h2.7c.06,0,.08,0,.08.09v.78c0,.06,0,.09-.08.09h-3.68a.08.08,0,0,1-.09-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M113.42,46.22a.12.12,0,0,1-.13-.09l-1.13-2.4h-1a0,0,0,0,0-.05.05v2.35a.08.08,0,0,1-.09.09h-.84a.08.08,0,0,1-.09-.09v-6a.08.08,0,0,1,.09-.09h2.27a2,2,0,0,1,.75.14,1.81,1.81,0,0,1,.59.38,1.53,1.53,0,0,1,.39.57A1.94,1.94,0,0,1,114,43a1.65,1.65,0,0,1-.81.64l1.24,2.51s0,.06,0,.08a.08.08,0,0,1-.06,0Zm-1-3.45a.9.9,0,0,0,.65-.24.83.83,0,0,0,.25-.63.85.85,0,0,0-.25-.64.9.9,0,0,0-.65-.24h-1.26s-.05,0-.05.06v1.63s0,.06.05.06Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M117,40.15a.11.11,0,0,1,.11-.09h.8c.06,0,.09,0,.11.09l2,6q0,.09-.06.09h-.85c-.06,0-.09,0-.11-.09l-.39-1.2h-2.21l-.39,1.2a.11.11,0,0,1-.11.09H115q-.09,0-.06-.09ZM118.24,44l-.78-2.39h0L116.65,44Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M120.76,40.15a.08.08,0,0,1,.09-.09H123a1.84,1.84,0,0,1,2,1.37,1,1,0,0,1,.06.25,2.16,2.16,0,0,1,0,.32,3.09,3.09,0,0,1,0,.47c0,.18,0,.4,0,.67s0,.49,0,.67a3.09,3.09,0,0,1,0,.47,2.16,2.16,0,0,1,0,.32,1,1,0,0,1-.06.25,1.84,1.84,0,0,1-2,1.37h-2.1a.08.08,0,0,1-.09-.09Zm1,5.05a.05.05,0,0,0,.06.06h.87a1.52,1.52,0,0,0,.79-.18,1.06,1.06,0,0,0,.43-.6s0-.1,0-.16,0-.14,0-.24a3.79,3.79,0,0,0,0-.38c0-.15,0-.34,0-.56s0-.41,0-.56a3.79,3.79,0,0,0,0-.38c0-.1,0-.18,0-.25a1.55,1.55,0,0,0,0-.15,1,1,0,0,0-.43-.6,1.52,1.52,0,0,0-.79-.18h-.87a.05.05,0,0,0-.06.06Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M126.17,40.15c0-.06,0-.09.08-.09h.85a.08.08,0,0,1,.09.09v6a.08.08,0,0,1-.09.09h-.85s-.08,0-.08-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M130.54,46.32a2.22,2.22,0,0,1-1.3-.38,2,2,0,0,1-.77-1.11,2.45,2.45,0,0,1-.08-.29,2.71,2.71,0,0,1,0-.33,3,3,0,0,1,0-.45c0-.17,0-.38,0-.62s0-.45,0-.62a3,3,0,0,1,0-.45,2.71,2.71,0,0,1,0-.33c0-.1.05-.19.08-.29a2,2,0,0,1,.77-1.11,2.22,2.22,0,0,1,1.3-.38,2.3,2.3,0,0,1,1.32.38,2,2,0,0,1,.76,1.11c0,.1.06.19.08.29s0,.21.05.33,0,.28,0,.45,0,.38,0,.62,0,.45,0,.62,0,.32,0,.45,0,.24-.05.33a2.45,2.45,0,0,1-.08.29,2,2,0,0,1-.76,1.11,2.3,2.3,0,0,1-1.32.38m0-1a1.06,1.06,0,0,0,.71-.22,1.18,1.18,0,0,0,.39-.59.9.9,0,0,0,0-.19q0-.11,0-.27c0-.11,0-.24,0-.39s0-.34,0-.56,0-.4,0-.56,0-.28,0-.39,0-.2,0-.27a.9.9,0,0,0,0-.19,1.18,1.18,0,0,0-.39-.59,1.06,1.06,0,0,0-.71-.22,1,1,0,0,0-.7.22,1.18,1.18,0,0,0-.39.59c0,.05,0,.12,0,.19s0,.16,0,.27,0,.24,0,.39V43.7c0,.15,0,.28,0,.39s0,.2,0,.27,0,.14,0,.19a1.18,1.18,0,0,0,.39.59,1,1,0,0,0,.7.22"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M133.9,40.15a.08.08,0,0,1,.09-.09h.85c.06,0,.08,0,.08.09V45.2a.05.05,0,0,0,.06.06h2.69a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09H134a.08.08,0,0,1-.09-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M140.67,46.32a2.24,2.24,0,0,1-1.3-.38,2,2,0,0,1-.77-1.11,2.45,2.45,0,0,1-.08-.29,2.71,2.71,0,0,1,0-.33q0-.2,0-.45c0-.17,0-.38,0-.62s0-.45,0-.62,0-.32,0-.45a2.71,2.71,0,0,1,0-.33c0-.1,0-.19.08-.29a2,2,0,0,1,.77-1.11,2.24,2.24,0,0,1,1.3-.38,2.28,2.28,0,0,1,1.32.38,2,2,0,0,1,.77,1.11c0,.1.05.19.07.29a2.57,2.57,0,0,1,0,.33c0,.13,0,.28,0,.45s0,.38,0,.62,0,.45,0,.62,0,.32,0,.45a2.57,2.57,0,0,1,0,.33,2.46,2.46,0,0,1-.07.29,2,2,0,0,1-.77,1.11,2.28,2.28,0,0,1-1.32.38m0-1a1.06,1.06,0,0,0,.71-.22,1.18,1.18,0,0,0,.39-.59.9.9,0,0,0,0-.19,1,1,0,0,0,0-.27q0-.17,0-.39V42.58q0-.22,0-.39a1,1,0,0,0,0-.27.9.9,0,0,0,0-.19,1.18,1.18,0,0,0-.39-.59,1.06,1.06,0,0,0-.71-.22,1,1,0,0,0-.7.22,1.18,1.18,0,0,0-.39.59c0,.05,0,.12,0,.19a1.56,1.56,0,0,0,0,.27c0,.11,0,.24,0,.39V43.7c0,.15,0,.28,0,.39a1.56,1.56,0,0,0,0,.27c0,.07,0,.14,0,.19a1.18,1.18,0,0,0,.39.59,1,1,0,0,0,.7.22"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M144,44.83a2.45,2.45,0,0,1-.08-.29,2.71,2.71,0,0,1,0-.33q0-.2,0-.45c0-.17,0-.38,0-.62s0-.45,0-.62,0-.32,0-.45a2.48,2.48,0,0,1,0-.33,2.45,2.45,0,0,1,.08-.29,2,2,0,0,1,.77-1.11,2.27,2.27,0,0,1,1.33-.38,2.51,2.51,0,0,1,.75.11,2.78,2.78,0,0,1,.6.29,1.87,1.87,0,0,1,.43.41,2.7,2.7,0,0,1,.27.5.09.09,0,0,1,0,.12l-.72.34a.09.09,0,0,1-.12,0,1.65,1.65,0,0,0-.47-.56,1.22,1.22,0,0,0-.71-.2,1.09,1.09,0,0,0-.72.22,1.18,1.18,0,0,0-.39.59c0,.05,0,.12,0,.19a1.56,1.56,0,0,0,0,.27c0,.11,0,.24,0,.39V43.7c0,.15,0,.28,0,.39a1.56,1.56,0,0,0,0,.27c0,.07,0,.14,0,.19a1.18,1.18,0,0,0,.39.59,1.09,1.09,0,0,0,.72.22,1.24,1.24,0,0,0,.69-.2,1,1,0,0,0,.42-.57,1.57,1.57,0,0,0,.07-.34,3,3,0,0,0,0-.46s0,0,0,0h-1a.08.08,0,0,1-.09-.09v-.73a.08.08,0,0,1,.09-.09h1.95c.05,0,.08,0,.08.09v.54c0,.25,0,.5,0,.74a3.25,3.25,0,0,1-.11.6,2,2,0,0,1-.76,1.12,2.21,2.21,0,0,1-1.31.4,2.27,2.27,0,0,1-1.33-.38,2,2,0,0,1-.77-1.11"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M150.63,46.22a.08.08,0,0,1-.09-.09V43.7l-1.7-3.55c0-.06,0-.09.07-.09h.87a.12.12,0,0,1,.12.09l1.16,2.39h0l1.16-2.39a.12.12,0,0,1,.12-.09h.84c.07,0,.09,0,.07.09l-1.71,3.55v2.43c0,.06,0,.09-.08.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M155.85,44.8a2.86,2.86,0,0,1-.07-.28,2.32,2.32,0,0,1-.05-.33c0-.12,0-.26,0-.43s0-.37,0-.62,0-.45,0-.62,0-.31,0-.43a2.32,2.32,0,0,1,.05-.33,2.86,2.86,0,0,1,.07-.28,2,2,0,0,1,.76-1.14,2.15,2.15,0,0,1,1.28-.38,2.1,2.1,0,0,1,1.23.36,2.06,2.06,0,0,1,.76,1,.07.07,0,0,1,0,.1l-.74.37s-.09,0-.11,0a1.74,1.74,0,0,0-.4-.56,1,1,0,0,0-.7-.24,1,1,0,0,0-.68.22,1.26,1.26,0,0,0-.37.6,1.17,1.17,0,0,0-.05.2c0,.06,0,.15,0,.25s0,.24,0,.39,0,.34,0,.56,0,.42,0,.57,0,.27,0,.38,0,.19,0,.26a1.05,1.05,0,0,0,.05.19,1.26,1.26,0,0,0,.37.6,1,1,0,0,0,.68.22,1,1,0,0,0,.7-.24,1.63,1.63,0,0,0,.4-.56.07.07,0,0,1,.11-.05l.74.38a.07.07,0,0,1,0,.1,2.06,2.06,0,0,1-2,1.33,2.15,2.15,0,0,1-1.28-.38,2,2,0,0,1-.76-1.14"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M160.84,40.15a.08.08,0,0,1,.09-.09h3.68a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09h-2.7s0,0,0,.06v1.5s0,.05,0,.05h2.28c.05,0,.08,0,.08.09v.78c0,.06,0,.09-.08.09h-2.28s0,0,0,.06V45.2s0,.06,0,.06h2.7a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09h-3.68a.08.08,0,0,1-.09-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M165.77,40.15c0-.06,0-.09.08-.09h.8a.18.18,0,0,1,.15.09l2.39,4.25h0V40.15c0-.06,0-.09.08-.09h.75a.08.08,0,0,1,.09.09v6a.08.08,0,0,1-.09.09h-.78a.16.16,0,0,1-.15-.09l-2.4-4.24h0v4.24c0,.06,0,.09-.08.09h-.76s-.08,0-.08-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M172.75,46.22c-.05,0-.08,0-.08-.09V41.08a.05.05,0,0,0-.06-.06h-1.53a.08.08,0,0,1-.09-.09v-.78a.08.08,0,0,1,.09-.09h4.2c.05,0,.08,0,.08.09v.78c0,.06,0,.09-.08.09h-1.54s-.05,0-.05.06v5.05a.08.08,0,0,1-.09.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M176.2,40.15a.08.08,0,0,1,.09-.09H180a.08.08,0,0,1,.09.09v.78A.08.08,0,0,1,180,41h-2.7s-.05,0-.05.06v1.5s0,.05.05.05h2.28c.06,0,.08,0,.08.09v.78c0,.06,0,.09-.08.09h-2.28s-.05,0-.05.06V45.2s0,.06.05.06H180a.08.08,0,0,1,.09.09v.78a.08.08,0,0,1-.09.09h-3.68a.08.08,0,0,1-.09-.09Z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "cls-20",
            attrs: {
              d:
                "M184.46,46.22a.12.12,0,0,1-.12-.09l-1.13-2.4h-1a0,0,0,0,0,0,.05v2.35a.08.08,0,0,1-.09.09h-.84a.08.08,0,0,1-.09-.09v-6a.08.08,0,0,1,.09-.09h2.27a2,2,0,0,1,.75.14,1.93,1.93,0,0,1,.59.38,1.53,1.53,0,0,1,.39.57,2,2,0,0,1-.16,1.8,1.65,1.65,0,0,1-.81.64l1.24,2.51a.11.11,0,0,1,0,.08.08.08,0,0,1-.06,0Zm-1-3.45a.92.92,0,0,0,.66-.24.82.82,0,0,0,.24-.63.84.84,0,0,0-.24-.64.92.92,0,0,0-.66-.24H182.2s0,0,0,.06v1.63s0,.06,0,.06Z"
            }
          }),
          _vm._v(" "),
          _c("text")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Search.vue?vue&type=template&id=5026ffd3&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Search.vue?vue&type=template&id=5026ffd3& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "search-ui", class: { open: _vm.isSearchOpen } },
    [
      _c("div", { staticClass: "search-header" }, [
        _c("img", {
          staticClass: "logo",
          attrs: { src: __webpack_require__(/*! @/assets/images/logo.png */ "./resources/js/assets/images/logo.png"), alt: "" }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "search-close btn btn-icon bg-transparent float-right mt-2",
            on: { click: _vm.closeSearch }
          },
          [_c("i", { staticClass: "i-Close-Window text-22 text-muted" })]
        )
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.search,
            expression: "search"
          }
        ],
        staticClass: "search-input",
        attrs: { type: "text", placeholder: "Type here", autofocus: "" },
        domProps: { value: _vm.search },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.search = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "search-height rtl-ps-none ps",
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false }
          }
        },
        [
          _c(
            "div",
            { staticClass: "search-results list-horizontal" },
            _vm._l(_vm.filterProducts, function(product, key) {
              return _c(
                "router-link",
                {
                  key: key,
                  staticClass: "list-item col-md-12 p-0",
                  attrs: { tag: "div", to: "/app/apps/product-detail" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "card o-hidden flex-row mb-30 d-flex" },
                    [
                      _c("div", { staticClass: "list-thumb d-flex" }, [
                        _c("img", { attrs: { src: product.img, alt: "" } })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-grow-1 pl-2 d-flex" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "w-40 w-sm-100",
                                attrs: { href: "" }
                              },
                              [
                                _c("div", { staticClass: "item-title" }, [
                                  _vm._v(_vm._s(product.title))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "m-0 text-muted text-small w-15 w-sm-100"
                              },
                              [_vm._v("Gadget")]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "m-0 text-muted text-small w-15 w-sm-100"
                              },
                              [
                                _vm._v(
                                  "\n                              $ " +
                                    _vm._s(product.productPrice) +
                                    "\n                          "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass: "badge",
                                    class: product.badgeColor
                                  },
                                  [_vm._v(_vm._s(product.discount))]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            }),
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-title" }, [
      _c("span", { staticClass: "text-muted" }, [_vm._v("Search results")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashBreadCrumb.vue?vue&type=template&id=36ca59a0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashBreadCrumb.vue?vue&type=template&id=36ca59a0& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "breadcrumb" },
    [
      _vm._t("header", [
        _c("h1", { staticClass: "mr-2" }, [_vm._v(_vm._s(_vm.mainSection))]),
        _vm._v(" "),
        _vm.MainPage == null
          ? void 0
          : [
              _c("ul", [
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: "" } }, [
                      _vm._v(" " + _vm._s(_vm.MainPage))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                !_vm.SubPage == null
                  ? _c("li", [_vm._v(_vm._s(_vm.SubPage))])
                  : _vm._e()
              ])
            ]
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return true /* $auth.loggedIn */
    ? _c(
        "div",
        {
          staticClass: "side-content-wrap",
          on: {
            mouseenter: function($event) {
              _vm.isMenuOver = true
            },
            mouseleave: function($event) {
              _vm.isMenuOver = false
            },
            touchstart: function($event) {
              _vm.isMenuOver = true
            }
          }
        },
        [
          _c(
            "vue-perfect-scrollbar",
            {
              ref: "myData",
              staticClass: "sidebar-left rtl-ps-none ps scroll",
              class: { open: _vm.getSideBarToggleProperties.isSideNavOpen },
              attrs: {
                settings: { suppressScrollX: true, wheelPropagation: false }
              }
            },
            [
              _c("div", [
                _c("ul", { staticClass: "navigation-left" }, [
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "dashboards" },
                      attrs: {
                        "data-item": "dashboards",
                        "data-submenu": true
                      },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", { staticClass: "nav-icon i-Bar-Chart" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v(
                              "\n              Dashboard" +
                                _vm._s(/*$t("dashboard") */)
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "ui-kits" },
                      attrs: { "data-item": "ui-kits", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", { staticClass: "nav-icon i-Library" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("UI kits")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "extrakits" },
                      attrs: { "data-item": "extrakits", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", { staticClass: "nav-icon i-Suitcase" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Extra kits")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "apps" },
                      attrs: { "data-item": "apps", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", {
                            staticClass: "nav-icon i-Computer-Secure"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Apps")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "storage" },
                      attrs: { "data-item": "storage", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", { staticClass: "nav-icon i-Pie-Chart-2" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Storage")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "widgets" },
                      attrs: { "data-item": "widgets", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", { staticClass: "nav-icon i-Windows-2" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Widgets")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "forms" },
                      attrs: { "data-item": "forms", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", {
                            staticClass: "nav-icon i-File-Clipboard-File--Text"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Forms")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "datatables" },
                      attrs: {
                        "data-item": "datatables",
                        "data-submenu": true
                      },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", {
                            staticClass: "nav-icon i-File-Horizontal-Text"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Datatables")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "sessions" },
                      attrs: { "data-item": "sessions", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", { staticClass: "nav-icon i-Administrator" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Sessions")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "pages" },
                      attrs: { "data-item": "pages", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("i", { staticClass: "nav-icon i-Double-Tap" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Pages")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "doc" },
                      attrs: { "data-item": "doc", "data-submenu": false },
                      on: { mouseenter: _vm.toggleSubMenu }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "nav-item-hold",
                          attrs: {
                            href: "http://demos.ui-lib.com/gull-vue-doc/",
                            target: "_blank"
                          }
                        },
                        [
                          _c("i", { staticClass: "nav-icon i-Safe-Box1" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v("Doc")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" })
                    ]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "sidebar-left-secondary ps rtl-ps-none",
              class: {
                open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen
              },
              attrs: {
                settings: { suppressScrollX: true, wheelPropagation: false }
              }
            },
            [
              _c("div", { ref: "sidebarChild" }, [
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: {
                      "d-block": _vm.selectedParentMenu == "dashboards"
                    },
                    attrs: { "data-parent": "dashboards" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/admin/users/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Clock-3" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("\n            users\n          ")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "forms" },
                    attrs: { "data-parent": "forms" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/forms/basicForms" } },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon i-File-Clipboard-Text--Image"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Basic Elements")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: {
                      "d-block": _vm.selectedParentMenu == "datatables"
                    },
                    attrs: { "data-parent": "forms" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/datatables/paging" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Split-Four-Square-Window"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Paging")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "apps" },
                    attrs: { "data-parent": "apps" }
                  },
                  [
                    _c(
                      "li",
                      {
                        staticClass: "nav-item dropdown-sidemenu",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.toggleSidebarDropdwon($event)
                          }
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "nav-icon i-File" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "item-name" }, [
                            _vm._v("Invoice")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "dd-arrow i-Arrow-Down" })
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "submenu" }, [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: { tag: "a", to: "/app/apps/invoice" }
                                },
                                [
                                  _c("i", { staticClass: "nav-icon i-Files" }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Invoice List")
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/apps/createInvoice"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Add-File"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Create Invoice")
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/apps/printInvoice"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-File-JPG"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Print Invoice")
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "nav-item dropdown-sidemenu",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.toggleSidebarDropdwon($event)
                          }
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "nav-icon i-File-CSV" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "item-name" }, [
                            _vm._v("\n            Contacts\n            "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "ml-2 badge badge-pill badge-danger"
                              },
                              [_vm._v("New")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "dd-arrow i-Arrow-Down" })
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "submenu" }, [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/apps/contact-list"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-File-CSV"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Contact Lists")
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/apps/products" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Ecommerce\n            "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " ml-2 badge badge-pill badge-danger"
                                },
                                [_vm._v("New")]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/apps/taskManager" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Task Manager")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/apps/todo-list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Todo App\n            "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " ml-2 badge badge-pill badge-danger"
                                },
                                [_vm._v("New")]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/apps/contact-list-table"
                            }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Contacts Table\n            "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " ml-2 badge badge-pill badge-danger"
                                },
                                [_vm._v("New")]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/apps/calendar" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Calendar-3" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Calendar")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/apps/inbox" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Email" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Inbox")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/apps/chat" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Speach-Bubble-3"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Chat")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/apps/scrumboard" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("scrumboard\n            "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " ml-2 badge badge-pill badge-danger"
                                },
                                [_vm._v("New")]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "extrakits" },
                    attrs: { "data-parent": "extrakits" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { tag: "a", to: "/app/extraKits/dropdown" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Arrow-Down" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Dropdown")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/extraKits/vueDraggable"
                            }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Two-Windows" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Vue Draggable")
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "ml-2 badge badge-pill badge-danger"
                              },
                              [_vm._v("New")]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/extraKits/vueTree" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Up---Down-3" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Vue Tree")
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "ml-2 badge badge-pill badge-danger"
                              },
                              [_vm._v("New")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "ui-kits" },
                    attrs: { "data-parent": "ui-kits" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/ui-kits/alerts" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Bell1" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Alerts")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/ui-kits/accordion" } },
                          [
                            _c("i", {
                              staticClass:
                                "nav-icon i-Split-Horizontal-2-Window"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Accordion")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/ui-kits/bootstrap-tab"
                            }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-New-Tab" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Tabs")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "storage" },
                    attrs: { "data-parent": "storage" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/admin/gdrive" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Line-Chart-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Google Drive")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "nav-item dropdown-sidemenu",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.toggleSidebarDropdwon($event)
                          }
                        }
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "nav-icon i-Line-Chart" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "item-name" }, [
                            _vm._v("Apex storage")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "dd-arrow i-Arrow-Down" })
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "submenu" }, [
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/storage/apexAreaChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Area Chart")
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/storage/apexColumnChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Column Chart")
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/storage/apexPieDonutsChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Pie Donut Chart")
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/storage/apexSparklineChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Sparkline Chart")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    tag: "a",
                                    to: "/app/storage/apexAreaChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Apex Area Chart")
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "widgets" },
                    attrs: { "data-parent": "widgets" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { tag: "a", to: "/app/widgets/widgetCard" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Two-Windows" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Widget Card")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/widgets/widgetStatistics"
                            }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Windows-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Widget Statistics")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { tag: "a", to: "/app/widgets/weatherApp" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Windows-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Weather App")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/widgets/widgetApp" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Windows-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("App Widgets")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { tag: "a", to: "/app/widgets/widgetList" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Windows-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Widget List")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "sessions" },
                    attrs: { "data-parent": "sessions" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/sessions/signIn" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Checked-User" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Sign in")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/sessions/signUp" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-User" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Sign up")
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/sessions/forgot" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Find-User" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Forgot")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("ul", {
                  staticClass: "childNav d-none",
                  class: { "d-block": _vm.selectedParentMenu == "pages" },
                  attrs: { "data-parent": "others" }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "sidebar-overlay",
            class: {
              open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen
            },
            on: {
              click: function($event) {
                return _vm.removeOverlay()
              }
            }
          })
        ],
        1
      )
    : undefined
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=template&id=236ccd37&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/partials/TopNav.vue?vue&type=template&id=236ccd37& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "topnav navbar-expand-lg  main-header " },
    [
      _c(
        "div",
        { staticClass: "menu-toggle", on: { click: _vm.sideBarToggle } },
        [_c("div"), _vm._v(" "), _c("div"), _vm._v(" "), _c("div")]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        { staticClass: "navbar-brand ", attrs: { to: "/" } },
        [_c("logo-main")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "navbar-nav" },
        [
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                { staticClass: "nav-link", attrs: { to: "/" } },
                [_vm._v("Dashboard")]
              )
            ],
            1
          ),
          _vm._v(" "),
          false /* $auth.loggedIn */
            ? undefined
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "ml-auto" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-part-right" },
        [
          _vm.isAuth
            ? [
                _c("i", {
                  staticClass:
                    "i-Full-Screen header-icon d-none d-sm-inline-block",
                  on: { click: _vm.handleFullScreen }
                }),
                _vm._v(" "),
                _c(
                  "v-menu",
                  {
                    attrs: { "offset-y": "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    { attrs: { color: "teal", icon: "" } },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c(
                                    "v-avatar",
                                    { attrs: { size: "36" } },
                                    [
                                      _c("v-icon", { attrs: { dark: "" } }, [
                                        _vm._v("mdi-package-variant")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      315891822
                    )
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "menu-icon-grid" },
                      [
                        _c("router-link", { attrs: { to: "/" } }, [
                          _c("i", { staticClass: "i-Shop-4" }),
                          _vm._v("Home")
                        ]),
                        _vm._v(" "),
                        true /* $auth.hasScope('super_admin') */
                          ? [
                              _c(
                                "router-link",
                                { attrs: { to: "/admin/users/" } },
                                [
                                  _c("i", { staticClass: "i-Checked-User" }),
                                  _vm._v(" Users\n                    ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                { attrs: { to: "/admin/doctors/" } },
                                [
                                  _c("i", { staticClass: "i-Drop" }),
                                  _vm._v(" Doctors\n                    ")
                                ]
                              )
                            ]
                          : undefined,
                        _vm._v(" "),
                        true
                          ? /* $auth.hasScope('doctor') ||
                            $auth.hasScope('super_admin') */
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: true /* $auth.hasScope('super_admin') */
                                      ? "/admin/patients/"
                                      : undefined
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "i-File-Clipboard-File--Text"
                                  }),
                                  _vm._v(" Patients\n                    ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: true /* $auth.hasScope('super_admin') */
                                      ? "/admin/requests/"
                                      : undefined
                                  }
                                },
                                [
                                  _c("i", { staticClass: "i-Ambulance" }),
                                  _vm._v(" Requests\n                    ")
                                ]
                              )
                            ]
                          : undefined,
                        _vm._v(" "),
                        true /* $auth.hasScope('super_admin') */
                          ? [
                              _c(
                                "router-link",
                                { attrs: { to: "/admin/storage/" } },
                                [
                                  _c("i", { staticClass: "i-Library" }),
                                  _vm._v(" Storage\n                    ")
                                ]
                              )
                            ]
                          : undefined
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-menu",
                  {
                    attrs: { "offset-y": "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    { attrs: { color: "teal", icon: "" } },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c(
                                    "v-badge",
                                    {
                                      attrs: {
                                        color: "primary",
                                        dark: "",
                                        content: 3,
                                        value: 3,
                                        overlap: ""
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-bell")])],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      3828544689
                    )
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "vue-perfect-scrollbar",
                      {
                        ref: "myData",
                        staticClass:
                          "dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll",
                        class: { open: _vm.isSideNavOpen },
                        attrs: {
                          settings: {
                            suppressScrollX: true,
                            wheelPropagation: false
                          },
                          "aria-labelledby": "dropdown-1__BV_toggle_"
                        }
                      },
                      [
                        _c("div", { staticClass: "dropdown-item d-flex" }, [
                          _c("div", { staticClass: "notification-icon" }, [
                            _c("i", {
                              staticClass: "i-Speach-Bubble-6 text-primary mr-1"
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "notification-details flex-grow-1" },
                            [
                              _c(
                                "p",
                                {
                                  staticClass: "m-0 d-flex align-items-center"
                                },
                                [
                                  _c("span", [_vm._v("New message")]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "flex-grow-1" }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-small text-muted ml-auto"
                                    },
                                    [_vm._v("10 sec ago")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-small text-muted m-0" },
                                [
                                  _vm._v(
                                    "\n                            James: Hey! are you busy?\n                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "dropdown-item d-flex" }, [
                          _c("div", { staticClass: "notification-icon" }, [
                            _c("i", {
                              staticClass: "i-Receipt-3 text-success mr-1"
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "notification-details flex-grow-1" },
                            [
                              _c(
                                "p",
                                {
                                  staticClass: "m-0 d-flex align-items-center"
                                },
                                [
                                  _c("span", [_vm._v("New order received")]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "flex-grow-1" }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-small text-muted ml-auto"
                                    },
                                    [_vm._v("2 hours ago")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-small text-muted m-0" },
                                [
                                  _vm._v(
                                    "\n                            1 Headphone, 3 iPhone x\n                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "dropdown-item d-flex" }, [
                          _c("div", { staticClass: "notification-icon" }, [
                            _c("i", {
                              staticClass: "i-Empty-Box text-danger mr-1"
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "notification-details flex-grow-1" },
                            [
                              _c(
                                "p",
                                {
                                  staticClass: "m-0 d-flex align-items-center"
                                },
                                [
                                  _c("span", [_vm._v("Product out of stock")]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "flex-grow-1" }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-small text-muted ml-auto"
                                    },
                                    [_vm._v("10 hours ago")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-small text-muted m-0" },
                                [
                                  _vm._v(
                                    "\n                            Headphone E67, R98, XL90, Q77\n                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "dropdown-item d-flex" }, [
                          _c("div", { staticClass: "notification-icon" }, [
                            _c("i", {
                              staticClass: "i-Data-Power text-success mr-1"
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "notification-details flex-grow-1" },
                            [
                              _c(
                                "p",
                                {
                                  staticClass: "m-0 d-flex align-items-center"
                                },
                                [
                                  _c("span", [_vm._v("Server Up!")]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "flex-grow-1" }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-small text-muted ml-auto"
                                    },
                                    [_vm._v("14 hours ago")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-small text-muted m-0" },
                                [
                                  _vm._v(
                                    "\n                            Server rebooted successfully\n                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.isAuth /* $auth.loggedIn */
            ? [
                _c(
                  "v-menu",
                  {
                    attrs: { "offset-y": "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    { attrs: { color: "teal", icon: "" } },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c("v-avatar", { attrs: { size: "36" } }, [
                                    _c("img", {
                                      attrs: {
                                        src: __webpack_require__(/*! @/assets/images/faces/20.jpg */ "./resources/js/assets/images/faces/20.jpg"),
                                        alt: _vm.username
                                      }
                                    })
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      959547344
                    )
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "v-list",
                      [
                        _c(
                          "v-list-item",
                          [
                            _c("v-list-item-title", [
                              _c("i", { staticClass: "i-Lock-User mr-1" }),
                              _vm._v(" " + _vm._s(_vm.loggedUser.userName))
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          [
                            _c("v-list-item-title", [
                              _c("i", { staticClass: "i-Email mr-1" }),
                              _vm._v(_vm._s(_vm.loggedUser.email))
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          [
                            _c(
                              "v-list-item-title",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { to: "/auth/logout" }
                                  },
                                  [
                                    _c("i", { staticClass: "i-Power-2 mr-1" }),
                                    _vm._v("logout")
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            : [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/auth/login" } },
                      [_vm._v("Login")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: "/auth/register" }
                      },
                      [_vm._v("Register")]
                    )
                  ],
                  1
                )
              ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/images/faces/20.jpg":
/*!*************************************************!*\
  !*** ./resources/js/assets/images/faces/20.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/20.jpg?3a8a8e46b35d9f7e0803b5c6885c27d8";

/***/ }),

/***/ "./resources/js/assets/images/logo.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?e660834951733a562ed0271a46516b9a";

/***/ }),

/***/ "./resources/js/assets/images/products/headphone-2.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/headphone-2.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/headphone-2.jpg?b22465424aec18c846d64a3d31bd934c";

/***/ }),

/***/ "./resources/js/assets/images/products/iphone-1.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/assets/images/products/iphone-1.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/iphone-1.jpg?7a264323c2c3fbb7f035774cb65ecca2";

/***/ }),

/***/ "./resources/js/assets/images/products/speaker-1.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/products/speaker-1.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/speaker-1.jpg?b52d2b9d8c8f15394d7dd8c788df68a9";

/***/ }),

/***/ "./resources/js/assets/images/products/speaker-2.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/products/speaker-2.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/speaker-2.jpg?492c4002c5b74112edb2d9c655b01985";

/***/ }),

/***/ "./resources/js/assets/images/products/watch-2.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/products/watch-2.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/watch-2.jpg?79b561e9b2902709b9d1244949e0b9b4";

/***/ }),

/***/ "./resources/js/components/LogoMain.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/LogoMain.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogoMain_vue_vue_type_template_id_7edce56f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoMain.vue?vue&type=template&id=7edce56f&scoped=true& */ "./resources/js/components/LogoMain.vue?vue&type=template&id=7edce56f&scoped=true&");
/* harmony import */ var _LogoMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoMain.vue?vue&type=script&lang=js& */ "./resources/js/components/LogoMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LogoMain_vue_vue_type_style_index_0_id_7edce56f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true& */ "./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LogoMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogoMain_vue_vue_type_template_id_7edce56f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogoMain_vue_vue_type_template_id_7edce56f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7edce56f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LogoMain.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LogoMain.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/LogoMain.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LogoMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_style_index_0_id_7edce56f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=style&index=0&id=7edce56f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_style_index_0_id_7edce56f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_style_index_0_id_7edce56f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_style_index_0_id_7edce56f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_style_index_0_id_7edce56f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_style_index_0_id_7edce56f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/LogoMain.vue?vue&type=template&id=7edce56f&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/LogoMain.vue?vue&type=template&id=7edce56f&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_template_id_7edce56f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LogoMain.vue?vue&type=template&id=7edce56f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LogoMain.vue?vue&type=template&id=7edce56f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_template_id_7edce56f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMain_vue_vue_type_template_id_7edce56f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Search.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Search.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_5026ffd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=5026ffd3& */ "./resources/js/components/Search.vue?vue&type=template&id=5026ffd3&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/components/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_5026ffd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_5026ffd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Search.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Search.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Search.vue?vue&type=template&id=5026ffd3&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Search.vue?vue&type=template&id=5026ffd3& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_5026ffd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=5026ffd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Search.vue?vue&type=template&id=5026ffd3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_5026ffd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_5026ffd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashBreadCrumb.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/dashBreadCrumb.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashBreadCrumb_vue_vue_type_template_id_36ca59a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashBreadCrumb.vue?vue&type=template&id=36ca59a0& */ "./resources/js/components/dashBreadCrumb.vue?vue&type=template&id=36ca59a0&");
/* harmony import */ var _dashBreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashBreadCrumb.vue?vue&type=script&lang=js& */ "./resources/js/components/dashBreadCrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashBreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashBreadCrumb_vue_vue_type_template_id_36ca59a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashBreadCrumb_vue_vue_type_template_id_36ca59a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashBreadCrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashBreadCrumb.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/dashBreadCrumb.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashBreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./dashBreadCrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashBreadCrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashBreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashBreadCrumb.vue?vue&type=template&id=36ca59a0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dashBreadCrumb.vue?vue&type=template&id=36ca59a0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashBreadCrumb_vue_vue_type_template_id_36ca59a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./dashBreadCrumb.vue?vue&type=template&id=36ca59a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashBreadCrumb.vue?vue&type=template&id=36ca59a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashBreadCrumb_vue_vue_type_template_id_36ca59a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashBreadCrumb_vue_vue_type_template_id_36ca59a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/data/products.js":
/*!***************************************!*\
  !*** ./resources/js/data/products.js ***!
  \***************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = [{
  id: 1,
  img: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
  title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
  brand: 'apple',
  productPrice: 50,
  discount: "20% off",
  rating: 5,
  badgeColor: "badge-info",
  category: "Mobile"
}, {
  id: 2,
  img: __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg"),
  title: "Portable Speaker with HD Sound",
  brand: 'samsung',
  rating: 3,
  productPrice: 500,
  discount: "sale",
  badgeColor: "badge-primary",
  category: "Speaker"
}, {
  id: 3,
  img: __webpack_require__(/*! @/assets/images/products/speaker-1.jpg */ "./resources/js/assets/images/products/speaker-1.jpg"),
  title: "Lightweight On-Ear Headphones - Black",
  brand: 'apple',
  rating: 4,
  productPrice: 50,
  discount: "40% ",
  badgeColor: "badge-danger",
  category: "Furniture"
}, {
  id: 4,
  img: __webpack_require__(/*! @/assets/images/products/speaker-2.jpg */ "./resources/js/assets/images/products/speaker-2.jpg"),
  title: "Automatic-self-wind mens Watch 5102PR-001 (Cert",
  brand: 'LG',
  rating: 2,
  productPrice: 500,
  discount: "10% off",
  badgeColor: "badge-warning",
  category: "Watch"
}, {
  id: 5,
  img: __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
  title: " Automatic-self-wind mens Watch 5102PR-001",
  brand: 'sony',
  rating: 5,
  productPrice: 1000,
  discount: "4% off",
  badgeColor: "badge-info",
  category: "Watch"
}, {
  id: 6,
  img: __webpack_require__(/*! @/assets/images/products/watch-2.jpg */ "./resources/js/assets/images/products/watch-2.jpg"),
  title: "On-Ear Headphones - Black",
  brand: 'sony',
  rating: 5,
  productPrice: 1000,
  discount: "20% off",
  badgeColor: "badge-primary",
  category: "Mobile"
}, {
  id: 7,
  img: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
  title: " In-Ear Headphone",
  brand: 'sony',
  rating: 4,
  productPrice: 200,
  discount: "20% off",
  badgeColor: "badge-info",
  category: "Speaker"
}, {
  id: 8,
  img: __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg"),
  title: "Duis exercitation nostrud anim",
  brand: 'samsung',
  rating: 3,
  productPrice: 7000,
  discount: "20% off",
  badgeColor: "badge-info",
  category: "Watch"
}, {
  id: 9,
  img: __webpack_require__(/*! @/assets/images/products/speaker-1.jpg */ "./resources/js/assets/images/products/speaker-1.jpg"),
  title: " Lightweight On-Ear Headphones - Black",
  brand: 'asus',
  rating: 4,
  productPrice: 200,
  discount: "20% off",
  badgeColor: "badge-info",
  category: "Mobile"
}, {
  id: 10,
  img: __webpack_require__(/*! @/assets/images/products/speaker-2.jpg */ "./resources/js/assets/images/products/speaker-2.jpg"),
  title: " Automatic-self-wind mens Watch 5102PR-001 (Certified P",
  brand: 'huawei',
  rating: 3,
  productPrice: 200,
  discount: "20% off",
  badgeColor: "badge-info",
  category: "Watch"
}, {
  id: 11,
  img: __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
  title: "Automatic-self-wind mens Watch 5102PR-001",
  brand: 'asus',
  rating: 5,
  productPrice: 500,
  discount: "20% off",
  badgeColor: "badge-info",
  category: "Furniture"
}, {
  id: 12,
  img: __webpack_require__(/*! @/assets/images/products/watch-2.jpg */ "./resources/js/assets/images/products/watch-2.jpg"),
  title: " On-Ear Headphones - Black",
  brand: 'xiaomi',
  rating: 2,
  productPrice: 100,
  discount: "20% off",
  badgeColor: "badge-success",
  category: "Speaker"
}];

/***/ }),

/***/ "./resources/js/layouts/largeSidebar/Sidebar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/Sidebar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_601c8fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true& */ "./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue2_perfect_scrollbar_dist_vue2_perfect_scrollbar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_601c8fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_601c8fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "601c8fdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/largeSidebar/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_601c8fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=601c8fdc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_601c8fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_601c8fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/partials/TopNav.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/partials/TopNav.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav_vue_vue_type_template_id_236ccd37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=236ccd37& */ "./resources/js/layouts/partials/TopNav.vue?vue&type=template&id=236ccd37&");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ "./resources/js/layouts/partials/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TopNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNav.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_236ccd37___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNav_vue_vue_type_template_id_236ccd37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/partials/TopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/partials/TopNav.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/partials/TopNav.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/partials/TopNav.vue?vue&type=template&id=236ccd37&":
/*!*********************************************************************************!*\
  !*** ./resources/js/layouts/partials/TopNav.vue?vue&type=template&id=236ccd37& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_236ccd37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=236ccd37& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/partials/TopNav.vue?vue&type=template&id=236ccd37&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_236ccd37___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_236ccd37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleFullScreen = function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  toggleFullScreen: toggleFullScreen
});

/***/ })

}]);