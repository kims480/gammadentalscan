(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Controls.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue */ "./resources/js/components/crud/components/Button.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Controls',
  components: {
    CrudButton: _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['createMode', 'editMode', 'deleteMode', 'selectManyMode', 'updateManyMode', 'removeManyMode', 'mainFilter', 'fieldFilters', 'refreshButton', 'exportButton', 'excelLoading', 'initialSearch', 'initialSelectedStatuses', 'initialColumnFilters'],
  data: function data() {
    return {
      search: '',
      selectedStatuses: [],
      columnFilters: []
    };
  },
  computed: {
    statuses: function statuses() {
      return [{
        text: this.$t('global.datatable.status.active'),
        value: 1
      }, {
        text: this.$t('global.datatable.status.inactive'),
        value: 0
      }];
    },
    filterModes: function filterModes() {
      return [{
        name: 'like',
        text: this.$t('global.datatable.filterModes.options.like')
      }, {
        name: 'equals',
        text: this.$t('global.datatable.filterModes.options.equals')
      }, {
        name: 'list',
        text: this.$t('global.datatable.filterModes.options.list')
      }];
    }
  },
  methods: {
    create: function create() {
      this.$emit('create');
    },
    editSelected: function editSelected() {
      this.$emit('editSelected');
    },
    suspendSelected: function suspendSelected() {
      this.$emit('suspendSelected');
    },
    restoreSelected: function restoreSelected() {
      this.$emit('restoreSelected');
    },
    destroySelected: function destroySelected() {
      this.$emit('destroySelected');
    },
    refreshItemsView: function refreshItemsView() {
      this.$emit('refreshItemsView');
    },
    updateSearch: function updateSearch() {
      this.$emit('updateSearch', this.search);
    },
    updateSelectedStatuses: function updateSelectedStatuses() {
      this.$emit('updateSelectedStatuses', this.selectedStatuses);
    },
    updateColumnFilterMode: function updateColumnFilterMode(event, index) {
      this.$emit('updateColumnFilterMode', event, index);
    },
    updateColumnFilterValue: function updateColumnFilterValue(event, index) {
      this.$emit('updateColumnFilterValue', event, index);
    },
    updateColumnFilters: function updateColumnFilters() {
      this.$emit('updateColumnFilters', this.columnFilters);
    },
    clearFilters: function clearFilters() {
      this.search = '';
      this.updateSearch();
      this.selectedStatuses = [1];
      this.updateSelectedStatuses();

      var _iterator = _createForOfIteratorHelper(this.columnFilters),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var column = _step.value;
          column.mode = 'like';
          column.value = '';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.updateColumnFilters();
      this.$emit('clearFilters');
    },
    exportToExcel: function exportToExcel() {
      this.$emit('exportToExcel');
    }
  },
  created: function created() {
    this.search = this.initialSearch;
    this.selectedStatuses = this.initialSelectedStatuses;
    this.columnFilters = this.initialColumnFilters;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/FileDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/FileDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue */ "./resources/js/components/crud/components/Button.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/functions */ "./resources/js/components/crud/helpers/functions.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CrudButton: _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['fieldInfo'],
  filters: {
    fileSize: function fileSize(size) {
      return size != null ? Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_2__["humanFileSize"])(size) : '';
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('crud', ['filesPath'])), {}, {
    field: function field() {
      return Object.assign({
        filename: '',
        mime: '',
        size: null
      }, this.fieldInfo);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])('crud', ['openImageContainer'])), {}, {
    download: function download(item) {
      Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_2__["download"])("".concat(this.filesPath, "/").concat(item.path), item.filename);
    },
    isImage: function isImage(mime) {
      var supportedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
      return supportedMimeTypes.includes(mime);
    },
    showImage: function showImage(image) {
      this.openImageContainer(image);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemActions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ListItemActions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue */ "./resources/js/components/crud/components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CrudButton: _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    item: {},
    editButton: {},
    customButtons: {},
    deleteMode: {},
    itemElements: {},
    dynamicTextModes: {},
    editMode: {},
    selectManyMode: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    edit: function edit(id) {
      this.$emit('edit', id);
    },
    custom: function custom(name, item) {
      this.$emit('custom', name, item);
    },
    suspend: function suspend(id) {
      this.$emit('suspend', id);
    },
    restore: function restore(id) {
      this.$emit('restore', id);
    },
    destroy: function destroy(id) {
      this.$emit('destroy', id);
    },
    editItemElements: function editItemElements(name, id) {
      this.$emit('editItemElements', name, id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemField.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ListItemField.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileDetails_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileDetails.vue */ "./resources/js/components/crud/components/FileDetails.vue");
/* harmony import */ var _config_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/crud */ "./resources/js/config/crud.js");
//
//
//
//
//
//
//
//
//
//
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
    FileDetails: _FileDetails_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    value: {},
    textMode: {
      type: String,
      "default": 'text'
    }
  },
  filters: {
    cropped: function cropped(value) {
      var rvalue;
      var maxLength = _config_crud__WEBPACK_IMPORTED_MODULE_1__["default"].maxLength || 40;

      if (typeof value === 'string' || value instanceof String) {
        rvalue = value.length <= maxLength ? value : "".concat(value.substring(0, maxLength - 3), "...");
      } else {
        rvalue = value;
      }

      return rvalue;
    }
  },
  methods: {
    fieldInfoToJSON: function fieldInfoToJSON(value) {
      return JSON.parse(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".crud-controls__search[data-v-5c47c9a9] {\n  margin: 0 15px;\n  display: inline-block;\n  width: 120px;\n}\n@media (min-width: 500px) {\n.crud-controls__search[data-v-5c47c9a9] {\n    width: 250px;\n}\n}\n.crud-controls__search-input[data-v-5c47c9a9] {\n  margin-top: -8px;\n}\n.crud-controls__select-statuses[data-v-5c47c9a9] {\n  margin: 0 15px;\n  display: inline-block;\n  width: 120px;\n}\n@media (min-width: 500px) {\n.crud-controls__select-statuses[data-v-5c47c9a9] {\n    width: 250px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=template&id=5c47c9a9&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Controls.vue?vue&type=template&id=5c47c9a9&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "\n    card-title\n    table-controls\n    px-3\n    d-flex\n    align-center\n    justify-space-between\n  "
    },
    [
      _c(
        "div",
        [
          _vm.createMode
            ? _c("crud-button", {
                attrs: {
                  "x-large": "",
                  color: "light-blue lighten-2",
                  icon: "add",
                  tooltip: _vm.$t("global.datatable.add")
                },
                on: {
                  clicked: function($event) {
                    return _vm.create()
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.editMode && _vm.selectManyMode && _vm.updateManyMode
            ? _c("crud-button", {
                attrs: {
                  large: "",
                  color: "orange",
                  icon: "edit",
                  tooltip: _vm.$t("global.datatable.buttons.editSelected")
                },
                on: {
                  clicked: function($event) {
                    return _vm.editSelected()
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          ["soft", "both"].includes(_vm.deleteMode) &&
          _vm.selectManyMode &&
          _vm.updateManyMode
            ? [
                _c("crud-button", {
                  attrs: {
                    large: "",
                    color: "red",
                    icon: "undo",
                    tooltip: _vm.$t("global.datatable.buttons.suspendSelected")
                  },
                  on: {
                    clicked: function($event) {
                      return _vm.suspendSelected()
                    }
                  }
                }),
                _vm._v(" "),
                _c("crud-button", {
                  attrs: {
                    large: "",
                    color: "green",
                    icon: "redo",
                    tooltip: _vm.$t("global.datatable.buttons.restoreSelected")
                  },
                  on: {
                    clicked: function($event) {
                      return _vm.restoreSelected()
                    }
                  }
                })
              ]
            : _vm._e(),
          _vm._v(" "),
          ["hard", "both"].includes(_vm.deleteMode) &&
          _vm.selectManyMode &&
          _vm.removeManyMode
            ? _c("crud-button", {
                attrs: {
                  large: "",
                  color: "black",
                  icon: "delete",
                  tooltip: _vm.$t("global.datatable.buttons.deleteSelected")
                },
                on: {
                  clicked: function($event) {
                    return _vm.destroySelected()
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("left")
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _vm.fieldFilters
            ? _c(
                "v-menu",
                {
                  attrs: {
                    "close-on-content-click": false,
                    "max-height": "50vh",
                    "offset-y": ""
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                {
                                  attrs: { large: "", color: "grey", icon: "" }
                                },
                                on
                              ),
                              [_c("v-icon", [_vm._v("filter_list")])],
                              1
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    3165121118
                  )
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { staticStyle: { "overflow-y": "false" } },
                    _vm._l(_vm.columnFilters, function(item, index) {
                      return _c(
                        "v-list-item",
                        { key: index },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.filterModes,
                              "item-text": "text",
                              "item-value": "name",
                              label: _vm.$t(
                                "global.datatable.filterModes.label"
                              ),
                              "hide-details": ""
                            },
                            on: {
                              input: function($event) {
                                return _vm.updateColumnFilterMode($event, index)
                              }
                            },
                            model: {
                              value: item.mode,
                              callback: function($$v) {
                                _vm.$set(item, "mode", $$v)
                              },
                              expression: "item.mode"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { "hide-details": "", label: item.text },
                            on: {
                              input: function($event) {
                                return _vm.updateColumnFilterValue(
                                  $event,
                                  index
                                )
                              }
                            },
                            model: {
                              value: item.value,
                              callback: function($$v) {
                                _vm.$set(item, "value", $$v)
                              },
                              expression: "item.value"
                            }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.mainFilter
            ? _c(
                "span",
                { staticClass: "crud-controls__search" },
                [
                  _c("v-text-field", {
                    staticClass: "crud-controls__search-input",
                    attrs: {
                      label: _vm.$t("global.datatable.search"),
                      "append-icon": "search",
                      "single-line": "",
                      "hide-details": ""
                    },
                    on: { input: _vm.updateSearch },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          ["soft", "both", "filter"].includes(_vm.deleteMode)
            ? [
                _c(
                  "span",
                  { staticClass: "crud-controls__select-statuses" },
                  [
                    _c("v-autocomplete", {
                      attrs: {
                        items: _vm.statuses,
                        label: _vm.$t("global.datatable.status.title"),
                        "item-text": "text",
                        "item-value": "value",
                        "single-line": "",
                        multiple: "",
                        chips: ""
                      },
                      on: { change: _vm.updateSelectedStatuses },
                      model: {
                        value: _vm.selectedStatuses,
                        callback: function($$v) {
                          _vm.selectedStatuses = $$v
                        },
                        expression: "selectedStatuses"
                      }
                    })
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.mainFilter || _vm.fieldFilters
            ? _c("crud-button", {
                attrs: {
                  large: "",
                  color: "grey",
                  icon: "delete_sweep",
                  tooltip: _vm.$t("global.datatable.buttons.clearFilters")
                },
                on: {
                  clicked: function($event) {
                    return _vm.clearFilters()
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("center")
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _vm.refreshButton
            ? _c("crud-button", {
                attrs: {
                  large: "",
                  color: "blue",
                  icon: "refresh",
                  tooltip: _vm.$t("global.datatable.buttons.refreshTable")
                },
                on: {
                  clicked: function($event) {
                    return _vm.refreshItemsView()
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.exportButton
            ? _c("crud-button", {
                attrs: {
                  loading: _vm.excelLoading,
                  tooltip: _vm.$t("global.datatable.buttons.copyToExcel"),
                  color: "green darken-4",
                  icon: "save_alt",
                  large: ""
                },
                on: { clicked: _vm.exportToExcel }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("right")
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/FileDetails.vue?vue&type=template&id=6018c383&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/FileDetails.vue?vue&type=template&id=6018c383& ***!
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
    "span",
    { staticStyle: { display: "flex", "align-items": "center" } },
    [
      _c("crud-button", {
        attrs: {
          small: "",
          color: "secondary",
          icon: "save",
          tooltip: _vm.$t("global.details.files.download")
        },
        on: {
          clicked: function($event) {
            return _vm.download(_vm.field)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          style: {
            visibility: _vm.isImage(_vm.field.mime) ? "visible" : "hidden"
          }
        },
        [
          _c("crud-button", {
            attrs: {
              small: "",
              color: "primary",
              icon: "search",
              tooltip: _vm.$t("global.details.files.show")
            },
            on: {
              clicked: function($event) {
                return _vm.showImage(_vm.field)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { "padding-left": "30px" } }, [
        _c("h4", [_vm._v(_vm._s(_vm.field.filename))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.field.mime))]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm._f("fileSize")(_vm.field.size)))])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemActions.vue?vue&type=template&id=22ca37c9&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ListItemActions.vue?vue&type=template&id=22ca37c9& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "span",
    { staticStyle: { "white-space": "nowrap" } },
    [
      _vm.editButton && _vm.editMode
        ? _c("crud-button", {
            attrs: {
              small: "",
              color: "orange",
              icon: "edit",
              tooltip: _vm.$t("global.datatable.buttons.edit")
            },
            on: {
              clicked: function($event) {
                return _vm.edit(_vm.item.meta.id)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.customButtons, function(customButton) {
        return _c("crud-button", {
          key: customButton.name,
          attrs: {
            disabled: !_vm.item.meta.buttons[customButton.name],
            small: "",
            color: customButton.color,
            icon: customButton.icon,
            tooltip: customButton.text
          },
          on: {
            clicked: function($event) {
              return _vm.custom(customButton.name, _vm.item)
            }
          }
        })
      }),
      _vm._v(" "),
      _vm._l(_vm.itemElements, function(button, key) {
        return _c("crud-button", {
          key: key,
          attrs: {
            small: "",
            color: button.color,
            icon: button.icon,
            tooltip: button.buttonText
          },
          on: {
            clicked: function($event) {
              return _vm.editItemElements(key, _vm.item.meta.id)
            }
          }
        })
      }),
      _vm._v(" "),
      ["soft", "both"].includes(_vm.deleteMode)
        ? [
            _vm.item.meta.active == "1"
              ? _c("crud-button", {
                  attrs: {
                    small: "",
                    color: "red",
                    icon: "undo",
                    tooltip: _vm.$t("global.datatable.buttons.suspend")
                  },
                  on: {
                    clicked: function($event) {
                      return _vm.suspend(_vm.item.meta.id)
                    }
                  }
                })
              : _c("crud-button", {
                  attrs: {
                    small: "",
                    color: "green",
                    icon: "redo",
                    tooltip: _vm.$t("global.datatable.buttons.restore")
                  },
                  on: {
                    clicked: function($event) {
                      return _vm.restore(_vm.item.meta.id)
                    }
                  }
                })
          ]
        : _vm._e(),
      _vm._v(" "),
      ["hard", "both"].includes(_vm.deleteMode)
        ? _c("crud-button", {
            attrs: {
              small: "",
              color: "black",
              icon: "delete",
              tooltip: _vm.$t("global.datatable.buttons.delete")
            },
            on: {
              clicked: function($event) {
                return _vm.destroy(_vm.item.meta.id)
              }
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemField.vue?vue&type=template&id=2f0b6646&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ListItemField.vue?vue&type=template&id=2f0b6646& ***!
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
  return _c("span", [
    _vm.textMode === "html"
      ? _c("span", { domProps: { innerHTML: _vm._s(_vm.value) } })
      : _vm.textMode === "cropped"
      ? _c("span", { staticClass: "cell-nowrap" }, [
          _vm._v("\n    " + _vm._s(_vm._f("cropped")(_vm.value)) + "\n  ")
        ])
      : _vm.textMode === "text"
      ? _c("span", [_vm._v("\n    " + _vm._s(_vm.value) + "\n  ")])
      : _vm.textMode === "file"
      ? _c(
          "span",
          [
            _c("file-details", {
              attrs: { fieldInfo: _vm.fieldInfoToJSON(_vm.value) }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/crud/components/Controls.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/crud/components/Controls.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_vue_vue_type_template_id_5c47c9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controls.vue?vue&type=template&id=5c47c9a9&scoped=true& */ "./resources/js/components/crud/components/Controls.vue?vue&type=template&id=5c47c9a9&scoped=true&");
/* harmony import */ var _Controls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/Controls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Controls_vue_vue_type_style_index_0_id_5c47c9a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true& */ "./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Controls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Controls_vue_vue_type_template_id_5c47c9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Controls_vue_vue_type_template_id_5c47c9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c47c9a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/Controls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/Controls.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/crud/components/Controls.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Controls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_5c47c9a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=style&index=0&id=5c47c9a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_5c47c9a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_5c47c9a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_5c47c9a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_5c47c9a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_style_index_0_id_5c47c9a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/crud/components/Controls.vue?vue&type=template&id=5c47c9a9&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/Controls.vue?vue&type=template&id=5c47c9a9&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_template_id_5c47c9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Controls.vue?vue&type=template&id=5c47c9a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Controls.vue?vue&type=template&id=5c47c9a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_template_id_5c47c9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Controls_vue_vue_type_template_id_5c47c9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/FileDetails.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/crud/components/FileDetails.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileDetails_vue_vue_type_template_id_6018c383___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileDetails.vue?vue&type=template&id=6018c383& */ "./resources/js/components/crud/components/FileDetails.vue?vue&type=template&id=6018c383&");
/* harmony import */ var _FileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/FileDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileDetails_vue_vue_type_template_id_6018c383___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileDetails_vue_vue_type_template_id_6018c383___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/FileDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/FileDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/crud/components/FileDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/FileDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/FileDetails.vue?vue&type=template&id=6018c383&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/FileDetails.vue?vue&type=template&id=6018c383& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetails_vue_vue_type_template_id_6018c383___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileDetails.vue?vue&type=template&id=6018c383& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/FileDetails.vue?vue&type=template&id=6018c383&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetails_vue_vue_type_template_id_6018c383___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetails_vue_vue_type_template_id_6018c383___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/ListItemActions.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/crud/components/ListItemActions.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItemActions_vue_vue_type_template_id_22ca37c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemActions.vue?vue&type=template&id=22ca37c9& */ "./resources/js/components/crud/components/ListItemActions.vue?vue&type=template&id=22ca37c9&");
/* harmony import */ var _ListItemActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItemActions.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/ListItemActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListItemActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListItemActions_vue_vue_type_template_id_22ca37c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListItemActions_vue_vue_type_template_id_22ca37c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/ListItemActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/ListItemActions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ListItemActions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/ListItemActions.vue?vue&type=template&id=22ca37c9&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ListItemActions.vue?vue&type=template&id=22ca37c9& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemActions_vue_vue_type_template_id_22ca37c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemActions.vue?vue&type=template&id=22ca37c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemActions.vue?vue&type=template&id=22ca37c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemActions_vue_vue_type_template_id_22ca37c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemActions_vue_vue_type_template_id_22ca37c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/ListItemField.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/crud/components/ListItemField.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItemField_vue_vue_type_template_id_2f0b6646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemField.vue?vue&type=template&id=2f0b6646& */ "./resources/js/components/crud/components/ListItemField.vue?vue&type=template&id=2f0b6646&");
/* harmony import */ var _ListItemField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItemField.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/ListItemField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListItemField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListItemField_vue_vue_type_template_id_2f0b6646___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListItemField_vue_vue_type_template_id_2f0b6646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/ListItemField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/ListItemField.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ListItemField.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/ListItemField.vue?vue&type=template&id=2f0b6646&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ListItemField.vue?vue&type=template&id=2f0b6646& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemField_vue_vue_type_template_id_2f0b6646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemField.vue?vue&type=template&id=2f0b6646& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ListItemField.vue?vue&type=template&id=2f0b6646&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemField_vue_vue_type_template_id_2f0b6646___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemField_vue_vue_type_template_id_2f0b6646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/mixins/controls-handler.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/crud/mixins/controls-handler.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      selectedStatuses: [1],
      columnFilters: [],
      excelLoading: false
    };
  },
  methods: {
    updateColumnFilterMode: function updateColumnFilterMode(val, index) {
      var obj = this.columnFilters;
      obj[index].mode = val;
      this.$set(this, 'columnFilters', obj);
      this.startSearching();
    },
    updateColumnFilterValue: function updateColumnFilterValue(val, index) {
      var obj = this.columnFilters;
      obj[index].value = val;
      this.$set(this, 'columnFilters', obj);
      this.startSearching();
    },
    updateColumnFilters: function updateColumnFilters(columnFilters) {
      this.$set(this, 'columnFilters', columnFilters);
      this.startSearching();
    },
    updateSearch: function updateSearch(search) {
      this.search = search;
      this.startSearching();
    },
    updateSelectedStatuses: function updateSelectedStatuses(statuses) {
      this.selectedStatuses = statuses;
      this.startSearching();
    }
  },
  created: function created() {
    this.columnFilters = this.tableFields.map(function (field) {
      var item = {};
      item.mode = 'like';
      item.text = field.text;
      item.name = field.name.toLowerCase();
      item.column = field.column;
      item.value = '';
      return item;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/crud/mixins/crud-instance.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/crud/mixins/crud-instance.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['itemsViewConfig', 'tableFields', 'deleteMode', 'customButtons', 'itemElements', 'editButton', 'meta', 'primaryKey', 'activeColumnName', 'createMode', 'editMode', 'mainFilter', 'fieldFilters', 'exportButton', 'refreshButton', 'selectManyMode', 'updateManyMode', 'removeManyMode'],
  data: function data() {
    return {
      selected: []
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('app', ['page'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('crud', ['prefix', 'path', 'currentItemIndex', 'currentItemId'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('crud', ['itemsList'])), {}, {
    selectedIds: function selectedIds() {
      return this.selected.map(function (item) {
        return item.meta.id;
      });
    },
    items: function items() {
      return this.itemsList(this.tableFields, this.meta, this.primaryKey, this.customButtons, this.activeColumnName);
    },
    excelName: function excelName() {
      return this.$t("global.routes.".concat(this.page));
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('crud', ['showItemDetailsDialog', 'setCurrentItem', 'resetItems', 'resetItem', 'editItemDialog', 'createItemDialog', 'multipleEditDialog', 'setItemElementsInfo', 'editItemElementsDialog', 'setSelectedIds'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('crud', ['getItem', 'updateItem', 'storeItem', 'deleteItem', 'getItemElements', 'mulitipleItemsUpdate', 'mulitipleItemsDelete', 'getItemDetails', 'runItemsViewRefreshing'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['openAlertBox'])), {}, {
    refreshItemsView: function refreshItemsView() {
      this.runItemsViewRefreshing();
    },
    edit: function edit(id) {
      var _this = this;

      this.beforeGetItem(id);
      this.getItem([id]).then(function () {
        _this.editItemDialog(id);
      });
    },
    create: function create() {
      this.resetItem();
      this.createItemDialog();
    },
    suspend: function suspend(id) {
      var obj = {};
      obj[this.activeColumnName] = 0;
      this.updateItem([id, obj, this.$t('global.alerts.suspended'), this.$t('global.alerts.suspendError')]);
    },
    restore: function restore(id) {
      var obj = {};
      obj[this.activeColumnName] = 1;
      this.updateItem([id, obj, this.$t('global.alerts.restored'), this.$t('global.alerts.restoreError')]);
    },
    destroy: function destroy(id) {
      if (confirm(this.$t('global.alerts.confirm'))) {
        this.deleteItem([id, this.$t('global.alerts.deleted'), this.$t('global.alerts.deleteError')]);
      }
    },
    checkSelected: function checkSelected() {
      if (this.selected.length === 0) {
        this.openAlertBox(['alertError', this.$t('global.datatable.noItemsSelected')]);
        return false;
      }

      if (confirm(this.$t('global.datatable.confirm'))) {
        return true;
      }

      return false;
    },
    editSelected: function editSelected() {
      if (this.selected.length === 0) {
        this.openAlertBox(['alertError', this.$t('global.datatable.noItemsSelected')]);
        return false;
      }

      this.setSelectedIds(this.selected);
      this.resetItem();
      this.multipleEditDialog();
    },
    suspendSelected: function suspendSelected() {
      if (this.checkSelected()) {
        this.mulitipleItemsUpdate([{
          ids: this.selectedIds,
          request: {
            active: 0
          }
        }, this.$t('global.alerts.suspended'), this.$t('global.alerts.suspendError')]);
      }
    },
    restoreSelected: function restoreSelected() {
      if (this.checkSelected()) {
        this.mulitipleItemsUpdate([{
          ids: this.selectedIds,
          request: {
            active: 1
          }
        }, this.$t('global.alerts.restored'), this.$t('global.alerts.restoreError')]);
      }
    },
    destroySelected: function destroySelected() {
      if (this.checkSelected()) {
        this.mulitipleItemsDelete([{
          ids: this.selectedIds
        }, this.$t('global.alerts.deleted'), this.$t('global.alerts.deleteError')]);
      }
    },
    custom: function custom(name, item) {
      var index = this.getItemIndex(item.meta.id);
      this.$parent.custom(name, item, index);
    },
    editItemElements: function editItemElements(name, id) {
      var obj = this.itemElements[name];
      this.setItemElementsInfo([id, obj]);
      this.getItemElements();
    }
  })
});

/***/ }),

/***/ "./resources/js/components/crud/mixins/items-view.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/crud/mixins/items-view.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListItemActions_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ListItemActions.vue */ "./resources/js/components/crud/components/ListItemActions.vue");
/* harmony import */ var _components_ListItemField_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListItemField.vue */ "./resources/js/components/crud/components/ListItemField.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ListItemActions: _components_ListItemActions_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ListItemField: _components_ListItemField_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    setColumnTextModes: function setColumnTextModes(props) {
      var columnTextModes = {};

      var _iterator = _createForOfIteratorHelper(this.tableFields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          var textMode = 'cropped';

          if (field.textMode) {
            textMode = field.textMode;
          }

          if (field.type === 'dynamic') {
            if (field.textModes) {
              var refField = props.item[field.typeField];

              if (field.textModes[refField]) {
                textMode = field.textModes[refField];
              }
            }
          }

          columnTextModes[field.name.toLowerCase()] = textMode;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return columnTextModes;
    },
    textMode: function textMode(item, key) {
      var field = this.tableFields.find(function (field) {
        return field.name === key;
      }) || {};
      var textMode = field.textMode || 'cropped';

      if (field.type === 'dynamic' && field.textModes) {
        var refField = item[field.typeField];

        if (field.textModes[refField]) {
          textMode = field.textModes[refField];
        }
      }

      return textMode;
    }
  }
});

/***/ })

}]);