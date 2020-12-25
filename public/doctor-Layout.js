(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-Layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/common/footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/doctor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/TopNav */ "./resources/js/layouts/partials/TopNav.vue");
/* harmony import */ var _components_dashBreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dashBreadCrumb */ "./resources/js/components/dashBreadCrumb.vue");
/* harmony import */ var _largeSidebar_Sidebardoctor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./largeSidebar/Sidebardoctor */ "./resources/js/layouts/largeSidebar/Sidebardoctor.vue");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/footer */ "./resources/js/layouts/common/footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import breadcumb from "./../components/breadcumb";



 // import Sidebar from "./largeSidebar/Sidebar";



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TopNav: _partials_TopNav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sidebardoctor: _largeSidebar_Sidebardoctor__WEBPACK_IMPORTED_MODULE_2__["default"],
    appFooter: _common_footer__WEBPACK_IMPORTED_MODULE_4__["default"],
    dashBreadCrumb: _components_dashBreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    VuePerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbar"]
  },
  middleware: ["doctor", 'auth'],
  head: function head() {
    return {
      titleTemplate: "%s Doctors | Gamma Dental Radiology Center",
      meta: [{
        hid: "description",
        name: "description",
        content: "Doctors page for Gamma Dental Scan Radiology"
      }]
    };
  },
  data: function data() {
    return {
      mainSection: "Doctors",
      MainPage: null,
      SubPage: null
    };
  },
  methods: {
    getBread: function getBread() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      });

      if (currentParentUrl[1] !== undefined && currentParentUrl[1] !== null) {
        // console.log(currentParentUrl);
        this.mainSection = currentParentUrl[0].toLowerCase(), this.MainPage = currentParentUrl[1].toLowerCase(), this.SubPage = currentParentUrl.length > 2 ? currentParentUrl[2].toLowerCase() : null;
      } else {
        this.mainSection = "Home";
      }
    }
  },
  computed: {
    get: function get() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      });

      if (currentParentUrl[1] !== undefined && currentParentUrl[1] !== null) {
        // console.log(currentParentUrl);
        this.mainSection = currentParentUrl[0].toLowerCase(), this.MainPage = currentParentUrl[1].toLowerCase(), this.SubPage = currentParentUrl.length > 2 ? currentParentUrl[2].toLowerCase() : null;
      } else {
        currentParentUrl[0] !== undefined && currentParentUrl[0] !== null ? this.mainSection = currentParentUrl[0].toLowerCase() : this.mainSection = "Home";
        this.MainPage = null;
        this.SubPage = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isDisplay: true,
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
  computed: {// getSideBarToggleProperties() {
    //   console.log(this.SideBarToggleProperties);
    //   return this.SideBarToggleProperties;
    // }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(["changeSecondarySidebarProperties", "changeSecondarySidebarPropertiesViaMenuItem", "changeSecondarySidebarPropertiesViaOverlay", "changeSidebarProperties"])), {}, {
    handleWindowResize: function handleWindowResize() {
      //  console.log('not working is Mobile');
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.$store.dispatch("largeSidebar/changeSidebarProperties");
        }

        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.$store.dispatch("largeSidebar/changeSecondarySidebarProperties");
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.$store.dispatch("largeSidebar/changeSidebarProperties"); // this.changeSidebarProperties();
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
        this.$store.dispatch("largeSidebar/changeSecondarySidebarPropertiesViaMenuItem", true);
      } else {
        this.selectedParentMenu = parent;
        this.$store.dispatch("largeSidebar/changeSecondarySidebarPropertiesViaMenuItem", false); // this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },
    removeOverlay: function removeOverlay() {
      this.$store.dispatch("largeSidebar/changeSecondarySidebarPropertiesViaOverlay");

      if (window.innerWidth <= 1200) {
        this.$store.dispatch("largeSidebar/changeSidebarProperties");
      }

      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu: function returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.$store.dispatch("largeSidebar/toggleSelectedParentMenu");
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  font-family: \"Source Sans Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\nbody {\n  background: #f1f1f1;\n}\n.main-content-wrap {\n  background: #f5f5f5;\n}\n.icon-font {\n  font-size: 18px;\n  /* font-weight: bolder; */\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./doctor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footer.vue?vue&type=template&id=bb3b95aa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/common/footer.vue?vue&type=template&id=bb3b95aa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer_wrap" }, [
      _c("div", { staticClass: "flex-grow-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "app-footer" }, [
        _c(
          "div",
          {
            staticClass:
              "footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"
          },
          [
            _c("div", { staticClass: "d-flex align-items-center" }, [
              _c("img", {
                staticClass: "logo",
                attrs: { src: __webpack_require__(/*! @/assets/images/logo.png */ "./resources/js/assets/images/logo.png"), alt: "" }
              }),
              _vm._v(" "),
              _c("div", [
                _c("div", [
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Gamma© Dental Scan 2020 ")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("All rights reserved")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "flex-grow-1" })
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=template&id=554746e3&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/doctor.vue?vue&type=template&id=554746e3& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "v-app",
    {
      staticClass: "app-admin-wrap layout-sidebar-large clearfix",
      attrs: { id: "app" }
    },
    [
      _c("TopNav"),
      _vm._v(" "),
      _c("Sidebardoctor"),
      _vm._v(" "),
      _c("main", [
        _c(
          "div",
          {
            staticClass: "main-content-wrap d-flex flex-column",
            class: {
              "sidenav-open": _vm.getSideBarToggleProperties.isSideNavOpen
            }
          },
          [
            _c("dashBreadCrumb", {
              attrs: {
                mainSection: _vm.mainSection,
                MainPage: _vm.MainPage,
                SubPage: _vm.SubPage
              }
            }),
            _vm._v("\n      " + _vm._s(_vm.get) + "\n      "),
            _c(
              "transition",
              { attrs: { name: "page", mode: "out-in" } },
              [_c("nuxt")],
              1
            ),
            _vm._v(" "),
            _c("appFooter")
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _vm.$auth.loggedIn
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
                            _vm._v(_vm._s(/*$t("dashboard") */))
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
                              _vm._v("\n              users\n            ")
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
                          { attrs: { tag: "a", to: "/app/dashboards/v1" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Clock-4" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(
                                _vm
                                  ._s /* $t("dashboardItems.versionTwo") */
                                  /* JSON.parse($auth.user.role).role.filter(
                  value => value == "Admin"
                ) == "Admin" */
                                  () + "\n              V1\n            "
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
                              to: "/app/dashboards/dashboard.v3"
                            }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Over-Time" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(
                                _vm._s(/* $t("dashboardItems.versionThree") */)
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
                              to: "/app/dashboards/dashboard.v4"
                            }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Clock" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(
                                _vm._s(/* $t("dashboardItems.versionFour") */)
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
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/forms/formLayouts" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Split-Vertical"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Form Layouts")
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
                            attrs: { tag: "a", to: "/app/forms/basicActionBar" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Receipt-4" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Basic Action Bar")
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
                            attrs: { tag: "a", to: "/app/forms/formComponent" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Close-Window" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Form Validation")
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
                          { attrs: { tag: "a", to: "/app/forms/formWizard" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Width-Window" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Form Wizard")
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
                          { attrs: { tag: "a", to: "/app/forms/tagInput" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Tag-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Tag Input")
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
                          { attrs: { tag: "a", to: "/app/forms/mask" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Pen-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Form Mask")
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
                          { attrs: { tag: "a", to: "/app/forms/datepicker" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Calendar-4" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Datepicker")
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
                            attrs: { tag: "a", to: "/app/forms/V2Datepicker" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Calendar-4" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("V2Datepicker")
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
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/datatables/filter" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Split-Vertical"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Filter")
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
                          { attrs: { tag: "a", to: "/app/datatables/list" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Split-Vertical"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("List")
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
                              to: "/app/datatables/vue-good-table"
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Split-Horizontal"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Vue Good Table")
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
                            _vm._v("\n              Contacts\n              "),
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
                                    to: "/app/apps/contact-grid"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-File-CSV"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Contact Grid")
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
                                    to: "/app/apps/contact-details"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-File-CSV"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Contact Details")
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
                              _vm._v("Ecommerce\n              "),
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
                              _vm._v("Todo App\n              "),
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
                              _vm._v("Contacts Table\n              "),
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
                              _vm._v("scrumboard\n              "),
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
                              to: "/app/extraKits/imageCropper"
                            }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Crop-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Image Cropper")
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
                          { attrs: { tag: "a", to: "/app/extraKits/loaders" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Loading-3" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Loaders")
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
                          { attrs: { tag: "a", to: "/app/extraKits/sidebar" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Two-Windows" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Sidebar")
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
                          {
                            attrs: { tag: "a", to: "/app/extraKits/spinners" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Two-Windows" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Spinners")
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
                          { attrs: { tag: "a", to: "/app/extraKits/avatar" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Two-Windows" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Avatar")
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
                          {
                            attrs: { tag: "a", to: "/app/extraKits/calendar" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Calendar" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Calendar")
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
                          { attrs: { tag: "a", to: "/app/extraKits/rating" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Circular-Point"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Rating")
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
                          {
                            attrs: { tag: "a", to: "/app/extraKits/spinButton" }
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Circular-Point"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Spinbutton")
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
                          {
                            attrs: { tag: "a", to: "/app/extraKits/datePicker" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Time-Window" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Datepicker")
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
                          {
                            attrs: { tag: "a", to: "/app/extraKits/timePicker" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Over-Time" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("TimePicker")
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
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/extraKits/toasts" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Bell" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Toastr")
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
                              to: "/app/extraKits/sweetAlerts"
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Approved-Window"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Sweet Alerts")
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
                          { attrs: { tag: "a", to: "/app/extraKits/tour" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Plane" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("User Tour")
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
                          { attrs: { tag: "a", to: "/app/ui-kits/badges" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Medal-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Badges")
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
                          { attrs: { tag: "a", to: "/app/ui-kits/buttons" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Cursor-Click" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Buttons")
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
                          { attrs: { tag: "a", to: "/app/ui-kits/cards" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Line-Chart-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Cards")
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
                          { attrs: { tag: "a", to: "/app/ui-kits/carousel" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Video-Photographer"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Carousels")
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
                          { attrs: { tag: "a", to: "/app/ui-kits/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Belt-3" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Lists")
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
                            attrs: { tag: "a", to: "/app/ui-kits/pagination" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Arrow-Next" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Paginations")
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
                          { attrs: { tag: "a", to: "/app/ui-kits/popover" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Speach-Bubble-2"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Popover")
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
                            attrs: { tag: "a", to: "/app/ui-kits/progressbar" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Loading" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Progressbar")
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
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/ui-kits/modals" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Duplicate-Window"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Modals")
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
                            attrs: { tag: "a", to: "/app/ui-kits/collapsible" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Width-Window" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Collapsible")
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
                            attrs: { tag: "a", to: "/app/ui-kits/typography" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Width-Window" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Typography")
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
                    class: { "d-block": _vm.selectedParentMenu == "charts" },
                    attrs: { "data-parent": "charts" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/charts/eChart" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Line-Chart-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Echart")
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
                            _vm._v("Apex Charts")
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
                                    to: "/app/charts/apexAreaChart"
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
                                    to: "/app/charts/apexBarChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Bar Chart")
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
                                    to: "/app/charts/apexLineChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Line Chart")
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
                                    to: "/app/charts/apexMixChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Mix Chart")
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
                                    to: "/app/charts/apexColumnChart"
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
                                    to: "/app/charts/apexPieDonutsChart"
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
                                    to: "/app/charts/apexRadarChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Radar Chart")
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
                                    to: "/app/charts/apexRadialBarChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Radial Bar Chart")
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
                                    to: "/app/charts/apexScatterChart"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon i-Line-Chart-2"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "item-name" }, [
                                    _vm._v("Scatter Chart")
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
                                    to: "/app/charts/apexSparklineChart"
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
                                    to: "/app/charts/apexAreaChart"
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
                _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "pages" },
                    attrs: { "data-parent": "others" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/pages/error" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Error-404-Window"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("Not Found")
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
                          { attrs: { tag: "a", to: "/app/pages/profile" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Male" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("User Profile")
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
                          { attrs: { tag: "a", to: "/app/pages/icons" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Male" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("icons")
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
                            attrs: { tag: "a", to: "/app/pages/search-result" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-File-Search" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(
                                "\n              Search Result\n              "
                              ),
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-pill badge-danger"
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
                            attrs: { tag: "a", to: "/app/pages/pricing-table" }
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Billing" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(
                                "\n              Pricing Table\n              "
                              ),
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-pill badge-danger"
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
                          { attrs: { tag: "a", to: "/app/pages/faq" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Billing" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v("\n              Faq\n              "),
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-pill badge-danger"
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
                )
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/common/footer.vue":
/*!************************************************!*\
  !*** ./resources/js/layouts/common/footer.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_bb3b95aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=bb3b95aa&scoped=true& */ "./resources/js/layouts/common/footer.vue?vue&type=template&id=bb3b95aa&scoped=true&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/layouts/common/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_bb3b95aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_bb3b95aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bb3b95aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/common/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/common/footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/common/footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/common/footer.vue?vue&type=template&id=bb3b95aa&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/layouts/common/footer.vue?vue&type=template&id=bb3b95aa&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_bb3b95aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=bb3b95aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footer.vue?vue&type=template&id=bb3b95aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_bb3b95aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_bb3b95aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/doctor.vue":
/*!*****************************************!*\
  !*** ./resources/js/layouts/doctor.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doctor_vue_vue_type_template_id_554746e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor.vue?vue&type=template&id=554746e3& */ "./resources/js/layouts/doctor.vue?vue&type=template&id=554746e3&");
/* harmony import */ var _doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor.vue?vue&type=script&lang=js& */ "./resources/js/layouts/doctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _doctor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _doctor_vue_vue_type_template_id_554746e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _doctor_vue_vue_type_template_id_554746e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/doctor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/doctor.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/layouts/doctor.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./doctor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./doctor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/doctor.vue?vue&type=template&id=554746e3&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/doctor.vue?vue&type=template&id=554746e3& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_template_id_554746e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./doctor.vue?vue&type=template&id=554746e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/doctor.vue?vue&type=template&id=554746e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_template_id_554746e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_doctor_vue_vue_type_template_id_554746e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/largeSidebar/Sidebardoctor.vue":
/*!*************************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/Sidebardoctor.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebardoctor_vue_vue_type_template_id_d9f3c39e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true& */ "./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true&");
/* harmony import */ var _Sidebardoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebardoctor.vue?vue&type=script&lang=js& */ "./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue2_perfect_scrollbar_dist_vue2_perfect_scrollbar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebardoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebardoctor_vue_vue_type_template_id_d9f3c39e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebardoctor_vue_vue_type_template_id_d9f3c39e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d9f3c39e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/largeSidebar/Sidebardoctor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebardoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebardoctor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebardoctor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebardoctor_vue_vue_type_template_id_d9f3c39e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/Sidebardoctor.vue?vue&type=template&id=d9f3c39e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebardoctor_vue_vue_type_template_id_d9f3c39e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebardoctor_vue_vue_type_template_id_d9f3c39e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);