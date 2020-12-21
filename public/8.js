(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_crud_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/crud-instance */ "./resources/js/components/crud/mixins/crud-instance.js");
/* harmony import */ var _mixins_controls_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/controls-handler */ "./resources/js/components/crud/mixins/controls-handler.js");
/* harmony import */ var _mixins_items_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/items-view */ "./resources/js/components/crud/mixins/items-view.js");
/* harmony import */ var _mixins_crud_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/crud-table */ "./resources/js/components/crud/mixins/crud-table.js");
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/table */ "./resources/js/components/crud/mixins/table.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/functions */ "./resources/js/components/crud/helpers/functions.js");
/* harmony import */ var _Controls_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Controls.vue */ "./resources/js/components/crud/components/Controls.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CrudTableServerMode',
  mixins: [_mixins_crud_instance__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_controls_handler__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_items_view__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_crud_table__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_table__WEBPACK_IMPORTED_MODULE_6__["default"]],
  components: {
    Controls: _Controls_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      searching: false,
      newSearchRequest: false,
      ignorePaginationWatcher: false,
      searchTimeout: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('crud', ['totalItems', 'loading', 'detailsDialog', 'isItemsViewRefreshed'])), {}, {
    params: function params() {
      return {
        sortBy: this.pagination.sortBy,
        sortDesc: this.pagination.sortDesc,
        rowsPerPage: this.pagination.itemsPerPage,
        page: this.pagination.page,
        search: this.search,
        filterColumns: this.columnFilters,
        selectedStatuses: this.selectedStatuses,
        deleteMode: this.deleteMode,
        activeColumnName: this.activeColumnName,
        mode: 'paginate'
      };
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('crud', ['getItemsServerSide'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['openAlertBox'])), {}, {
    searchItems: function searchItems(resetPage) {
      var _this = this;

      clearTimeout(this.searchTimeout);

      if (resetPage) {
        this.ignorePaginationWatcher = true;
        this.pagination.page = 1;
      }

      this.searchTimeout = setTimeout(function () {
        _this.getItemsServerSide([_this.params]);
      }, 500);
    },
    startSearching: function startSearching() {
      this.searchItems(true);
    },
    moveDetailsItem: function moveDetailsItem(page, index) {
      var _this2 = this;

      this.ignorePaginationWatcher = true;
      this.pagination.page = page;
      this.getItemsServerSide([this.params]).then(function (response) {
        var newItemId = _this2.items[index].meta.id;

        _this2.setCurrentItem({
          id: newItemId,
          index: index
        });

        _this2.getItemDetails([newItemId]).then(function (response) {
          _this2.showItemDetailsDialog();
        });
      });
    },
    getItemIndex: function getItemIndex(id) {
      return this.items.map(function (item) {
        return item.meta.id;
      }).indexOf(id);
    },
    exportToExcel: function exportToExcel() {
      var _this3 = this;

      this.excelLoading = true;
      var headers = this.cleanHeaders.map(function (header) {
        return header.text;
      });
      var params = {};

      for (var key in this.params) {
        params[key] = this.params[key];
      }

      params.mode = 'all';
      var filteredItems;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.post("".concat(this.prefix, "/").concat(this.path, "/search"), params).then(function (response) {
        var items = response.body;
        filteredItems = items.map(function (obj) {
          return Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_7__["getItemsList"])(obj, _this3.tableFields, _this3.meta, _this3.primaryKey, _this3.customButtons, _this3.activeColumnName);
        });
        var data = filteredItems.map(function (item) {
          var row = [];

          var _iterator = _createForOfIteratorHelper(_this3.cleanHeaders),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var header = _step.value;
              row.push(item[header.value]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return row;
        });
        Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../vendor/Export2Excel */ "./resources/js/components/crud/vendor/Export2Excel.js")).then(function (excel) {
          _this3.excelLoading = false;
          excel.export_json_to_excel({
            header: headers,
            data: data,
            filename: _this3.excelName,
            autoWidth: true,
            bookType: 'xlsx'
          });
        });
      }, function (error) {
        _this3.excelLoading = false;

        _this3.openAlertBox(['alertError', error.statusText]);
      });
    }
  }),
  created: function created() {
    this.resetItems();
  },
  watch: {
    pagination: {
      handler: function handler() {
        if (!this.ignorePaginationWatcher) {
          this.searchItems(false);
        }

        this.ignorePaginationWatcher = false;
      },
      deep: true
    },
    detailsDialog: function detailsDialog(val) {
      if (!val) {
        this.getItemsServerSide([this.params]);
      }
    },
    isItemsViewRefreshed: function isItemsViewRefreshed(val) {
      if (val) {
        this.getItemsServerSide([this.params]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=template&id=b2379f9a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=template&id=b2379f9a& ***!
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
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _c("controls", {
        attrs: {
          "create-mode": _vm.createMode,
          "edit-mode": _vm.editMode,
          "delete-mode": _vm.deleteMode,
          "select-many-mode": _vm.selectManyMode,
          "update-many-mode": _vm.updateManyMode,
          "remove-many-mode": _vm.removeManyMode,
          "main-filter": _vm.mainFilter,
          "field-filters": _vm.fieldFilters,
          "refresh-button": _vm.refreshButton,
          "export-button": _vm.exportButton,
          "excel-loading": _vm.excelLoading,
          initialSearch: _vm.search,
          initialSelectedStatuses: _vm.selectedStatuses,
          initialColumnFilters: _vm.columnFilters
        },
        on: {
          create: _vm.create,
          editSelected: _vm.editSelected,
          suspendSelected: _vm.suspendSelected,
          restoreSelected: _vm.restoreSelected,
          destroySelected: _vm.destroySelected,
          refreshItemsView: _vm.refreshItemsView,
          updateColumnFilterMode: _vm.updateColumnFilterMode,
          updateColumnFilterValue: _vm.updateColumnFilterValue,
          updateSearch: _vm.updateSearch,
          updateSelectedStatuses: _vm.updateSelectedStatuses,
          clearFilters: _vm.clearFilters,
          exportToExcel: _vm.exportToExcel
        }
      }),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          "show-select": _vm.selectManyMode,
          options: _vm.pagination,
          headers: _vm.headers,
          items: _vm.items,
          "item-key": "meta.id",
          "no-results-text": _vm.$t("global.datatable.noMatchingResults"),
          "no-data-text": _vm.$t("global.datatable.noDataAvailable"),
          "footer-props": _vm.footerProps,
          "items-per-page": 20,
          "server-items-length": _vm.totalItems,
          loading: _vm.loading,
          light: "",
          "multi-sort": "",
          dense: ""
        },
        on: {
          "update:options": function($event) {
            _vm.pagination = $event
          }
        },
        scopedSlots: _vm._u(
          [
            _vm._l(_vm.headers, function(header, i) {
              return {
                key: "item." + header.value,
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "span",
                      { key: i },
                      [
                        header.value === "actions"
                          ? _c("list-item-actions", {
                              attrs: {
                                item: item,
                                "edit-button": _vm.editButton,
                                "custom-buttons": _vm.customButtons,
                                "delete-mode": _vm.deleteMode,
                                "item-elements": _vm.itemElements,
                                "edit-mode": _vm.editMode,
                                "select-many-mode": _vm.selectManyMode
                              },
                              on: {
                                edit: _vm.edit,
                                custom: _vm.custom,
                                suspend: _vm.suspend,
                                restore: _vm.restore,
                                destroy: _vm.destroy,
                                editItemElements: _vm.editItemElements,
                                doubleClick: _vm.resolveRowDoubleClick
                              }
                            })
                          : _c(
                              "span",
                              [
                                _vm._t(
                                  "field:" + header.value,
                                  [
                                    _c("list-item-field", {
                                      attrs: {
                                        value: item[header.value],
                                        "text-mode": _vm.textMode(
                                          item,
                                          header.value
                                        )
                                      }
                                    })
                                  ],
                                  { value: item[header.value], item: item }
                                )
                              ],
                              2
                            )
                      ],
                      1
                    )
                  ]
                }
              }
            }),
            {
              key: "footer.page-text",
              fn: function(ref) {
                var pageStart = ref.pageStart
                var pageStop = ref.pageStop
                var itemsLength = ref.itemsLength
                return [
                  _c("table-footer", {
                    attrs: {
                      pagination: _vm.pagination,
                      "page-start": pageStart,
                      "page-stop": pageStop,
                      "items-length": itemsLength
                    },
                    on: { setPage: _vm.setPage }
                  })
                ]
              }
            }
          ],
          null,
          true
        ),
        model: {
          value: _vm.selected,
          callback: function($$v) {
            _vm.selected = $$v
          },
          expression: "selected"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/crud/components/CrudTableServerMode.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/crud/components/CrudTableServerMode.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrudTableServerMode_vue_vue_type_template_id_b2379f9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrudTableServerMode.vue?vue&type=template&id=b2379f9a& */ "./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=template&id=b2379f9a&");
/* harmony import */ var _CrudTableServerMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrudTableServerMode.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CrudTableServerMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CrudTableServerMode_vue_vue_type_template_id_b2379f9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CrudTableServerMode_vue_vue_type_template_id_b2379f9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/CrudTableServerMode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudTableServerMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CrudTableServerMode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudTableServerMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=template&id=b2379f9a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=template&id=b2379f9a& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudTableServerMode_vue_vue_type_template_id_b2379f9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CrudTableServerMode.vue?vue&type=template&id=b2379f9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/CrudTableServerMode.vue?vue&type=template&id=b2379f9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudTableServerMode_vue_vue_type_template_id_b2379f9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudTableServerMode_vue_vue_type_template_id_b2379f9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/mixins/crud-table.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/crud/mixins/crud-table.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('crud', ['nextItem', 'moveItemRun', 'moveItemDirection'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('crud', ['setCurrentItem', 'moveItem'])), {}, {
    beforeGetItem: function beforeGetItem(id) {
      var index = this.getItemIndex(id);
      this.setCurrentItem({
        id: id,
        index: index
      });
    },
    resolveRowDoubleClick: function resolveRowDoubleClick(item, index) {
      if (this.editMode) {
        var goToItemButton = false;

        var _iterator = _createForOfIteratorHelper(this.customButtons),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var button = _step.value;

            if (button.name === 'goToItem') {
              goToItemButton = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (goToItemButton) {
          this.custom('goToItem', item, index);
        } else {
          this.edit(item.meta.id, index);
        }
      }
    }
  }),
  watch: {
    moveItemRun: function moveItemRun(val) {
      if (val) {
        var moveItemDirection = this.moveItemDirection;
        var currentIndex = this.currentItemIndex;
        var page = this.pagination.page;
        var itemsPerPage = this.pagination.itemsPerPage;
        var totalItems = this.totalItems;
        var possible = true;

        if (moveItemDirection === 'previous') {
          if (currentIndex > 0) {
            currentIndex -= 1;
          } else if (page > 1) {
            page -= 1;
            currentIndex = itemsPerPage - 1;
          } else {
            possible = false;
          }
        } else if (moveItemDirection === 'next') {
          if (currentIndex < itemsPerPage - 1 && (page - 1) * itemsPerPage + currentIndex + 1 < totalItems) {
            currentIndex += 1;
          } else if (page < Math.ceil(totalItems / itemsPerPage)) {
            page += 1;
            currentIndex = 0;
          } else {
            possible = false;
          }
        }

        if (possible) {
          this.moveDetailsItem(page, currentIndex);
        }

        this.moveItem(['', false]);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/crud/mixins/table.js":
/*!******************************************************!*\
  !*** ./resources/js/components/crud/mixins/table.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TableFooter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TableFooter.vue */ "./resources/js/components/crud/components/TableFooter.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TableFooter: _components_TableFooter_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tmp: '',
      pagination: {}
    };
  },
  computed: {
    cleanHeaders: function cleanHeaders() {
      var headers = this.tableFields.map(function (field) {
        var header = {};
        header.text = field.text;
        header.value = field.name.toLowerCase();

        if (field.sortable !== undefined) {
          header.sortable = field.sortable;
        }

        return header;
      });
      return headers;
    },
    headers: function headers() {
      var actionHeader = [{
        text: this.$t('global.datatable.fields.action'),
        value: 'actions',
        sortable: false
      }];
      return [].concat(actionHeader, _toConsumableArray(this.cleanHeaders));
    },
    itemsPerPageOptions: function itemsPerPageOptions() {
      return [5, 10, 20, 50, 100];
    },
    footerProps: function footerProps() {
      return {
        showFirstLastPage: true,
        rowsPerPageText: this.$t('global.datatable.rowsPerPageText'),
        itemsPerPageOptions: this.itemsPerPageOptions
      };
    }
  },
  methods: {
    setPage: function setPage(page) {
      this.pagination.page = parseInt(page);
    },
    clearFilters: function clearFilters() {
      this.pagination.page = 1;
    }
  }
});

/***/ })

}]);