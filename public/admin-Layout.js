(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-Layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/separator.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/separator.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footerVtfy.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/common/footerVtfy.vue?vue&type=script&lang=js& ***!
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      icons: ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'],
      padless: true,
      variant: 'fixed'
    };
  },
  computed: {
    localAttrs: function localAttrs() {
      var attrs = {};

      if (this.variant === 'default') {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }

      return attrs.absolute = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_partials_TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/partials/TopNav */ "./resources/js/layouts/partials/TopNav.vue");
/* harmony import */ var _components_dashBreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/dashBreadCrumb */ "./resources/js/components/dashBreadCrumb.vue");
/* harmony import */ var _layouts_largeSidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/largeSidebar/Sidebar */ "./resources/js/layouts/largeSidebar/Sidebar.vue");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_common_footerVtfy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/common/footerVtfy */ "./resources/js/layouts/common/footerVtfy.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Notifications_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Notifications.vue */ "./resources/js/components/Notifications.vue");
/* harmony import */ var _components_separator_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/separator.vue */ "./resources/js/components/separator.vue");
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
// import TopNav from '../containers/layouts/largeSidebar/TopNav.vue';
 // import breadcumb from "./../components/breadcumb";



 // import Sidebar from "./largeSidebar/Sidebar";
// import appFooter from "@/layouts/common/footer";




 // import Layout from "./../layouts/default";

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TopNav: _layouts_partials_TopNav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sidebar: _layouts_largeSidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],
    appFooter: _layouts_common_footerVtfy__WEBPACK_IMPORTED_MODULE_4__["default"],
    dashBreadCrumb: _components_dashBreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    VuePerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbar"],
    Notifications: _components_Notifications_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Separator: _components_separator_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      mainSection: null,
      MainPage: null,
      SubPage: null,
      drawer: true,
      items: [{
        id: 1,
        title: "Home",
        link: "home",
        icon: "mdi-home-city"
      }, {
        id: 2,
        title: "users",
        link: "users",
        icon: "mdi-account-multiple"
      }, {
        id: 3,
        title: "doctors",
        link: "doctors",
        icon: "mdi-account-group-outline"
      }, {
        id: 4,
        title: "Patients",
        link: "patients",
        icon: "mdi-account"
      }, {
        id: 5,
        title: "Requests",
        link: "requests",
        icon: "mdi-account"
      }, {
        id: 6,
        title: "Storage",
        link: "storage",
        icon: "mdi-account"
      }, {
        id: 7,
        title: "Messages",
        link: "messages",
        icon: "mdi-account"
      }, {
        id: 8,
        title: "Notification",
        link: "notification",
        icon: "mdi-account"
      }, {
        id: 9,
        title: "Services",
        link: "services",
        icon: "mdi-account"
      }, {
        id: 10,
        title: "Rating",
        link: "points",
        icon: "mdi-heart"
      }, {
        id: 11,
        title: "offers",
        link: "offers",
        icon: "mdi-account"
      }],
      direction: 'bottom',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
      mini: true
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
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])("largeSidebarM", ["getSideBarToggleProperties"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(["configM/getThemeMode"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])({
    isAuth: "isAuth"
  })), {}, {
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
    themeName: function themeName() {
      return this.$store.getters["configM/getThemeMode"].dark ? "dark-theme" : " ";
    },
    isLoggedIn: function isLoggedIn() {
      return false;
    },
    isSideNavOpen: function isSideNavOpen() {
      return this.$store.getters["largeSidebarM/getSideBarToggleProperties"].isSideNavOpen;
    },
    rtl: function rtl() {
      return this.$store.getters["configM/getThemeMode"].rtl ? "rtl" : " ";
    },
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
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/separator.vue?vue&type=template&id=02333aac&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/separator.vue?vue&type=template&id=02333aac&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "separator-breadcrumb border-top" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footerVtfy.vue?vue&type=template&id=47980b5c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/common/footerVtfy.vue?vue&type=template&id=47980b5c& ***!
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
    "v-footer",
    { attrs: { fixed: "", dark: "", padless: "", color: "primary lighten-1" } },
    [
      _c(
        "v-card",
        {
          staticClass: " text-center py-0",
          attrs: { flat: "", tile: "", width: "100%" }
        },
        [
          _c("v-card-text", { staticClass: "white--text py-0" }, [
            _c("img", {
              staticClass: "logo",
              attrs: {
                src: __webpack_require__(/*! @/assets/images/logo.png */ "./resources/js/assets/images/logo.png"),
                height: "35px",
                width: "35px",
                alt: ""
              }
            }),
            _vm._v("\n      " + _vm._s(new Date().getFullYear()) + " — "),
            _c("strong", [_vm._v("Gamma © Dental Scan  ")])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/index.vue?vue&type=template&id=6b4f0bb0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/largeSidebar/index.vue?vue&type=template&id=6b4f0bb0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("TopNav"),
      _vm._v(" "),
      _vm.isAuth /* $auth.hasScope('super_admin') */
        ? [_c("Sidebar")]
        : _vm._e(),
      _vm._v(" "),
      _c("main", [
        _c(
          "div",
          {
            staticClass: "main-content-wrap d-flex flex-column",
            class: {
              "sidenav-open": _vm.isSideNavOpen
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
            _vm._v("\n            " + _vm._s(_vm.get) + "\n            "),
            _c("separator"),
            _vm._v(" "),
            _c(
              "v-sheet",
              {
                staticStyle: { padding: "1px", "margin-bottom": "60px" },
                attrs: { color: "#f5f5f5", elevation: "0", width: "100%" }
              },
              [
                _c(
                  "transition",
                  { attrs: { name: "page", mode: "out-in" } },
                  [_c("router-view")],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-speed-dial",
              {
                staticStyle: { "z-index": "100" },
                attrs: {
                  fixed: "",
                  bottom: "",
                  right: "",
                  direction: "top",
                  "open-on-hover": _vm.hover,
                  transition: _vm.transition
                },
                scopedSlots: _vm._u([
                  {
                    key: "activator",
                    fn: function() {
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "blue darken-2",
                              dark: "",
                              fab: ""
                            },
                            model: {
                              value: _vm.fab,
                              callback: function($$v) {
                                _vm.fab = $$v
                              },
                              expression: "fab"
                            }
                          },
                          [
                            _vm.fab
                              ? _c("v-icon", [
                                  _vm._v(
                                    "\n                            mdi-close\n                        "
                                  )
                                ])
                              : _c("v-icon", [
                                  _vm._v(
                                    "\n                            mdi-account-circle\n                        "
                                  )
                                ])
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  }
                ]),
                model: {
                  value: _vm.fab,
                  callback: function($$v) {
                    _vm.fab = $$v
                  },
                  expression: "fab"
                }
              },
              [
                _vm._v(" "),
                _c(
                  "v-btn",
                  { attrs: { fab: "", dark: "", small: "", color: "green" } },
                  [_c("v-icon", [_vm._v("mdi-pencil")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  { attrs: { fab: "", dark: "", small: "", color: "indigo" } },
                  [_c("v-icon", [_vm._v("mdi-plus")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  { attrs: { fab: "", dark: "", small: "", color: "red" } },
                  [_c("v-icon", [_vm._v("mdi-delete")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("notifications"),
            _vm._v(" "),
            _c("appFooter")
          ],
          1
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/separator.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/separator.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _separator_vue_vue_type_template_id_02333aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./separator.vue?vue&type=template&id=02333aac&scoped=true& */ "./resources/js/components/separator.vue?vue&type=template&id=02333aac&scoped=true&");
/* harmony import */ var _separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./separator.vue?vue&type=script&lang=js& */ "./resources/js/components/separator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _separator_vue_vue_type_template_id_02333aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _separator_vue_vue_type_template_id_02333aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02333aac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/separator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/separator.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/separator.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./separator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/separator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_separator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/separator.vue?vue&type=template&id=02333aac&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/separator.vue?vue&type=template&id=02333aac&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_separator_vue_vue_type_template_id_02333aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./separator.vue?vue&type=template&id=02333aac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/separator.vue?vue&type=template&id=02333aac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_separator_vue_vue_type_template_id_02333aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_separator_vue_vue_type_template_id_02333aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/common/footerVtfy.vue":
/*!****************************************************!*\
  !*** ./resources/js/layouts/common/footerVtfy.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footerVtfy_vue_vue_type_template_id_47980b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footerVtfy.vue?vue&type=template&id=47980b5c& */ "./resources/js/layouts/common/footerVtfy.vue?vue&type=template&id=47980b5c&");
/* harmony import */ var _footerVtfy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerVtfy.vue?vue&type=script&lang=js& */ "./resources/js/layouts/common/footerVtfy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footerVtfy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footerVtfy_vue_vue_type_template_id_47980b5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footerVtfy_vue_vue_type_template_id_47980b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/common/footerVtfy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/common/footerVtfy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/common/footerVtfy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerVtfy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./footerVtfy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footerVtfy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerVtfy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/common/footerVtfy.vue?vue&type=template&id=47980b5c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/layouts/common/footerVtfy.vue?vue&type=template&id=47980b5c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footerVtfy_vue_vue_type_template_id_47980b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./footerVtfy.vue?vue&type=template&id=47980b5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/common/footerVtfy.vue?vue&type=template&id=47980b5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footerVtfy_vue_vue_type_template_id_47980b5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footerVtfy_vue_vue_type_template_id_47980b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/largeSidebar/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6b4f0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6b4f0bb0&scoped=true& */ "./resources/js/layouts/largeSidebar/index.vue?vue&type=template&id=6b4f0bb0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6b4f0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6b4f0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b4f0bb0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/largeSidebar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/largeSidebar/index.vue?vue&type=template&id=6b4f0bb0&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/layouts/largeSidebar/index.vue?vue&type=template&id=6b4f0bb0&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b4f0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6b4f0bb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/largeSidebar/index.vue?vue&type=template&id=6b4f0bb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b4f0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6b4f0bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);