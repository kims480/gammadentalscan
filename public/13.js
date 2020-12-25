(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/field-types/Select.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/field-types/Select.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SelectField',
  props: {
    value: {},
    rules: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    field: {
      type: Object
    }
  },
  data: function data() {
    return {
      selection: undefined,
      items: [],
      search: '',
      oldSearch: '',
      loading: false,
      searchActive: true
    };
  },
  computed: {
    listRefreshable: function listRefreshable() {
      return !this.field.async && this.field.url !== undefined;
    }
  },
  methods: {
    onChange: function onChange() {
      this.$emit('input', this.selection);
    },
    refreshList: function refreshList(url) {
      var _this = this;

      this.searchActive = false;
      var selectItems;
      this.loading = true;
      var required = this.field.required !== undefined ? this.field.required : true;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.get(url).then(function (response) {
        var items = response.body;
        selectItems = items.map(function (item) {
          var rItem = item;

          if (typeof _this.field.list.activeColumn !== 'undefined') {
            rItem.itemDisabled = item[_this.field.list.activeColumn] === 0;
          }

          if (typeof _this.field.list.complexName !== 'undefined') {
            var textArray = _this.field.list.complexName.map(function (textInfo) {
              var splittedText = textInfo.split('.').reduce(function (object, property) {
                return object[property] || '';
              }, item);
              return splittedText;
            });

            rItem.complexName = textArray.join(', ');
          }

          return rItem;
        });

        if (!required) {
          var nullElement = {};
          nullElement[_this.field.list.value] = '';
          nullElement[_this.field.list.text] = '-';
          _this.items = [nullElement].concat(_toConsumableArray(selectItems));
        } else {
          _this.items = selectItems;
        }

        _this.loading = false;
        _this.searchActive = true;
      });
    }
  },
  mounted: function mounted() {
    if (!this.field.url) {
      this.items = this.field.list.data;
    } else {
      this.items = [];

      if (this.field.async) {
        this.loading = false;
      } else {
        this.refreshList(this.field.url);
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        this.selection = val;
      }
    },
    search: {
      handler: function handler(val) {
        var _this2 = this;

        setTimeout(function () {
          if (_this2.field.async && _this2.searchActive) {
            if (_this2.search === val) {
              var url = "".concat(_this2.field.url, "/phrase/").concat(val);

              _this2.refreshList(url);
            }
          }
        }, 500);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/field-types/Select.vue?vue&type=template&id=23440a10&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/field-types/Select.vue?vue&type=template&id=23440a10& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-autocomplete", {
    staticClass: "field--limited-width",
    attrs: {
      rules: _vm.rules,
      items: _vm.items,
      loading: _vm.loading,
      "item-text": _vm.field.list.text,
      "item-value": _vm.field.list.value,
      "search-input": _vm.search,
      label: _vm.field.text,
      disabled: _vm.field.disabled,
      "menu-props": "bottom",
      "item-disabled": "itemDisabled",
      "hide-details": ""
    },
    on: {
      "update:searchInput": function($event) {
        _vm.search = $event
      },
      "update:search-input": function($event) {
        _vm.search = $event
      },
      change: function($event) {
        return _vm.onChange()
      }
    },
    scopedSlots: _vm._u(
      [
        _vm.listRefreshable
          ? {
              key: "append-outer",
              fn: function() {
                return [
                  _c(
                    "v-icon",
                    {
                      attrs: { color: "blue" },
                      on: {
                        click: function($event) {
                          return _vm.refreshList(_vm.field.url)
                        }
                      }
                    },
                    [_vm._v("\n      refresh\n    ")]
                  )
                ]
              },
              proxy: true
            }
          : null
      ],
      null,
      true
    ),
    model: {
      value: _vm.selection,
      callback: function($$v) {
        _vm.selection = $$v
      },
      expression: "selection"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/crud/components/field-types/Select.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/crud/components/field-types/Select.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select_vue_vue_type_template_id_23440a10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=23440a10& */ "./resources/js/components/crud/components/field-types/Select.vue?vue&type=template&id=23440a10&");
/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/field-types/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select_vue_vue_type_template_id_23440a10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Select_vue_vue_type_template_id_23440a10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/field-types/Select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/field-types/Select.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/field-types/Select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/field-types/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/field-types/Select.vue?vue&type=template&id=23440a10&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/field-types/Select.vue?vue&type=template&id=23440a10& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_23440a10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=template&id=23440a10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/field-types/Select.vue?vue&type=template&id=23440a10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_23440a10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_23440a10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);