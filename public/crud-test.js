(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crud-test"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Button.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Button.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    xSmall: {
      type: Boolean,
      "default": false
    },
    small: {
      type: Boolean,
      "default": false
    },
    large: {
      type: Boolean,
      "default": false
    },
    xLarge: {
      type: Boolean,
      "default": false
    },
    dark: {
      type: Boolean,
      "default": false
    },
    color: {
      type: String,
      "default": 'primary'
    },
    tooltip: {
      type: String
    },
    icon: {
      type: String
    },
    text: {
      type: String
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    active: {
      type: Boolean,
      "default": false
    },
    noMargin: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    emitClick: function emitClick() {
      this.$emit('clicked');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Crud.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ItemDetails_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDetails.vue */ "./resources/js/components/crud/components/ItemDetails.vue");
/* harmony import */ var _ItemElements_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemElements.vue */ "./resources/js/components/crud/components/ItemElements.vue");
/* harmony import */ var _ImageContainer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageContainer.vue */ "./resources/js/components/crud/components/ImageContainer.vue");
/* harmony import */ var _config_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/crud */ "./resources/js/config/crud.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ItemDetails: _ItemDetails_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ItemElements: _ItemElements_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ImageContainer: _ImageContainer_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    prefix: {
      type: String,
      "default": null
    },
    path: {
      type: String,
      "default": null
    },
    paths: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    fieldsInfo: Array,
    detailsTitle: String,
    pageTitle: String,
    editButton: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].editButton || true
    },
    deleteMode: {
      type: String,
      validator: function validator(value) {
        return ['none', 'soft', 'hard', 'both', 'filter'].indexOf(value) !== -1;
      },
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].deleteMode || 'soft'
    },
    customHeaderButtons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    customButtons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    meta: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    itemElements: {
      type: Object,
      "default": function _default() {}
    },
    watchForCreation: {
      type: Boolean,
      "default": false
    },
    primaryKey: {
      type: String,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].primaryKey || 'id'
    },
    activeColumnName: {
      type: String,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].activityColumnName || 'active'
    },
    mode: {
      type: String,
      validator: function validator(value) {
        return ['ClientSide', 'ServerSide'].indexOf(value) !== -1;
      },
      "default": 'ClientSide'
    },
    itemsView: {
      type: Object,
      validator: function validator(value) {
        var isTypeCorrect = function isTypeCorrect(field) {
          var fieldType = field ? field.type : 'table';
          return ['table', 'tree'].indexOf(fieldType) !== -1;
        };

        var isModeCorrect = function isModeCorrect(field) {
          var fieldMode = field ? field.mode : 'client';
          return ['client', 'server'].indexOf(fieldMode) !== -1;
        };

        return isTypeCorrect(value) && isModeCorrect(value);
      }
    },
    createMode: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].createMode === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].createMode
    },
    editMode: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].editMode === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].editMode
    },
    mainFilter: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].mainFilter === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].mainFilter
    },
    fieldFilters: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].fieldFilters === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].fieldFilters
    },
    exportButton: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].exportButton === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].exportButton
    },
    refreshButton: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].refreshButton === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].refreshButton
    },
    selectManyMode: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].selectManyMode === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].selectManyMode
    },
    updateManyMode: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].updateManyMode === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].updateManyMode
    },
    removeManyMode: {
      type: Boolean,
      "default": _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].removeManyMode === undefined ? true : _config_crud__WEBPACK_IMPORTED_MODULE_4__["default"].removeManyMode
    },
    itemDetailsWidth: {
      "default": 600
    }
  },
  data: function data() {
    return {
      defaultItemsViewMode: 'client',
      defaultItemsViewType: 'table',
      componentTypesMap: {
        'table': 'Table',
        'tree': 'Tree'
      },
      componentModesMap: {
        'server': 'ServerMode',
        'client': 'ClientMode'
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('crud', ['detailsLoading'])), {}, {
    tableFields: function tableFields() {
      return this.fieldsInfo.filter(function (field) {
        return field.table !== false && field.type !== 'divider';
      });
    },
    detailsFields: function detailsFields() {
      return this.fieldsInfo.filter(function (field) {
        return field.details !== false && field.type !== 'divider';
      });
    },
    itemsViewType: function itemsViewType() {
      return this.itemsView && this.itemsView.type ? this.itemsView.type : this.defaultItemsViewType;
    },
    itemsViewMode: function itemsViewMode() {
      var itemsViewMode;

      if (this.itemsView && this.itemsView.mode) {
        itemsViewMode = this.itemsView.mode;
      } else if (this.mode) {
        itemsViewMode = this.calcitemsViewMode(this.mode);
      }

      return itemsViewMode || this.defaultItemsViewMode;
    },
    itemsViewConfig: function itemsViewConfig() {
      var config = {};

      if (this.itemsViewType === 'tree' && this.itemsView) {
        config = this.itemsView.config || {};
      }

      return config;
    },
    componentLoader: function componentLoader() {
      var typeNamePart = this.componentTypesMap[this.itemsViewType];
      var modeNamePart = this.componentModesMap[this.itemsViewMode];
      return function () {
        return __webpack_require__("./resources/js/components/crud/components lazy recursive ^\\.\\/Crud.*\\.vue$")("./Crud".concat(typeNamePart).concat(modeNamePart, ".vue"));
      };
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('app', ['setPage'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('crud', ['setPrefix', 'setPath', 'setPaths', 'setCreationMode', 'setItemsViewType'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('crud', ['runItemsViewRefreshing'])), {}, {
    custom: function custom(name, item, index) {
      this.$parent[name](item, index);
    },
    itemElementsClosed: function itemElementsClosed() {
      this.runItemsViewRefreshing();
    },
    calcitemsViewMode: function calcitemsViewMode(mode) {
      var modesMap = {
        ServerSide: 'server',
        ClientSide: 'client'
      };
      return modesMap[mode];
    }
  }),
  created: function created() {
    this.setPrefix(this.prefix);
    this.setPath(this.path);
    this.setPaths(this.paths);
    this.setPage(this.pageTitle);
    var creationMode = this.watchForCreation ? 'inform' : 'ignore';
    this.setCreationMode(creationMode);
    this.setItemsViewType(this.itemsViewType);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ImageContainer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ImageContainer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/functions */ "./resources/js/components/crud/helpers/functions.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('crud', ['imageContainer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('crud', ['filesPath'])), {}, {
    image: function image() {
      return this.imageContainer.show ? "".concat(this.filesPath, "/").concat(this.imageContainer.item.path, "/").concat(this.imageContainer.item.filename) : '';
    }
  }),
  filters: {
    fileSize: function fileSize(size) {
      return Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["humanFileSize"])(size);
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('crud', ['closeImageContainer']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemDetailsField_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDetailsField.vue */ "./resources/js/components/crud/components/ItemDetailsField.vue");
/* harmony import */ var _components_crud_helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/crud/helpers/functions */ "./resources/js/components/crud/helpers/functions.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ItemDetailsField: _ItemDetailsField_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['title', 'detailsFields', 'width'],
  data: function data() {
    return {
      reload: false,
      fields: []
    };
  },
  watch: {
    detailsShow: function detailsShow(val) {
      var _this = this;

      if (val) {
        this.setFields();

        if (this.details.action === 'edit') {
          this.reload = true;
          setTimeout(function () {
            _this.reload = false;
          }, 100);
        }
      }
    }
  },
  mounted: function mounted() {
    this.resetItem();
    this.setFields();
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('crud', ['details', 'path', 'prefix', 'selectedIds'])), {}, {
    itemData: function itemData() {
      var result = {};

      var _iterator = _createForOfIteratorHelper(this.fields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          result[field.column] = field.value !== undefined ? field.value : null;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    },
    detailsShow: function detailsShow() {
      return this.details.show;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('crud', ['updateItem', 'storeItem', 'mulitipleItemsUpdate'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['openAlertBox'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])('crud', ['resetItem'])), {}, {
    setFields: function setFields() {
      var _this2 = this;

      var result = this.detailsFields.map(function (field) {
        var rField = field;
        var show = true;

        if (_this2.details.action === 'create') {
          show = field.create !== false;
        } else if (_this2.details.action === 'multiedit') {
          show = field.multiedit !== false;
        } else if (_this2.details.action === 'edit') {
          show = field.edit !== false;
        }

        rField.show = show;
        rField.value = _this2.details.item[field.column];

        if (typeof rField.value !== 'undefined') {
          var fieldValue = _this2.details.item[field.column];

          if (field.type === 'select') {
            var defaultVal = field.list["default"] || field.required ? 1 : undefined;
            rField.value = field.stringId ? fieldValue : parseInt(fieldValue) || defaultVal;
          } else if (field.type === 'date') {
            rField.value = (fieldValue || '').substring(0, 10);
          } else if (field.type === 'checkbox') {
            if ([1, '1', true, 'true'].includes(fieldValue)) {
              rField.value = 1;
            } else if ([0, '0', false, 'false'].includes(fieldValue)) {
              rField.value = 0;
            }
          }

          if (field.apiObject) {
            if (field.apiObject.useFunctionsInDetails) {
              var functions = field.apiObject.functions || [];
              var availableFunctions = _components_crud_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["fieldModifiers"];

              for (var i = 0; i < functions.length; i++) {
                var functionName = functions[i];
                rField.value = availableFunctions[functionName](rField.value);
              }
            }
          }
        } else if (field.type === 'checkbox') {
          rField.value = 0;
        }

        return rField;
      });
      this.$set(this, 'fields', result);
    },
    dynamicFieldType: function dynamicFieldType(fieldType) {
      var refField = this.fields.find(function (field) {
        return field.name === fieldType;
      });
      return refField ? refField.value : undefined;
    },
    valueChanged: function valueChanged(val, fieldColumn) {
      var field = this.fields[this.fields.findIndex(function (el) {
        return el.column === fieldColumn;
      })];
      this.$set(field, 'value', val);

      if (field.onChange) {
        field.onChange(val, this.fields);
      }
    },
    close: function close() {
      this.details.show = false;
    },
    update: function update() {
      var _this3 = this;

      this.updateItem([this.details.id, this.itemData, this.$t('global.alerts.updated'), this.$t('global.alerts.updateError')]).then(function (response) {
        _this3.close();
      });
    },
    store: function store() {
      var _this4 = this;

      this.storeItem([this.itemData, this.$t('global.alerts.stored'), this.$t('global.alerts.storeError')]).then(function (response) {
        _this4.close();
      });
    },
    updateSelected: function updateSelected() {
      var filteredFields = this.fields.filter(function (field) {
        return field.updateColumn;
      });
      var keyValuePairs = {};

      var _iterator2 = _createForOfIteratorHelper(filteredFields),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var field = _step2.value;
          keyValuePairs[field.column] = field.value;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.mulitipleItemsUpdate([{
        ids: this.selectedIds,
        request: keyValuePairs
      }, this.$t('global.alerts.updated'), this.$t('global.alerts.updateError')]);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ItemDetailsField',
  props: ['field', 'fieldValue', 'reload', 'dynamicFieldType'],
  data: function data() {
    return {
      value: null,
      isEmitLocked: false,
      componentsMap: {
        input: 'Text',
        number: 'Text',
        decimal: 'Text',
        time: 'Text',
        datetime: 'Text',
        date: 'Date',
        textarea: 'Textarea',
        file: 'File',
        richTextBox: 'RichTextBox',
        select: 'Select',
        checkbox: 'Checkbox'
      }
    };
  },
  computed: {
    fieldType: function fieldType() {
      return this.field.type === 'dynamic' ? this.dynamicFieldType : this.field.type;
    },
    componentName: function componentName() {
      return this.componentsMap[this.fieldType];
    },
    fieldComponent: function fieldComponent() {
      var _this = this;

      return this.componentName ? function () {
        return __webpack_require__("./resources/js/components/crud/components/field-types lazy recursive ^\\.\\/.*\\.vue$")("./".concat(_this.componentName, ".vue"));
      } : undefined;
    },
    isWidthLimited: function isWidthLimited() {
      return !['richTextBox', 'textarea'].includes(this.fieldType);
    },
    rules: function rules() {
      var self = this;
      return {
        required: function required(v) {
          return !!v || self.$t('global.details.rules.required');
        }
      };
    }
  },
  methods: {
    fieldRules: function fieldRules(field) {
      var rules = [];
      var required = field.required !== undefined ? field.required : true;

      if (required) {
        rules.push(this.rules.required);
      }

      return rules;
    },
    changeValue: function changeValue(forcedValue) {
      if (forcedValue) this.value = forcedValue;
      this.$emit('valueChanged', this.value, this.field.column);
    }
  },
  watch: {
    fieldValue: {
      immediate: true,
      handler: function handler(val) {
        this.isEmitLocked = true;
        this.value = val;
        this.isEmitLocked = false;
      }
    },
    value: {
      handler: function handler(val) {
        if (!this.isEmitLocked) {
          this.changeValue();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemElements.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue */ "./resources/js/components/crud/components/Button.vue");
/* harmony import */ var _components_TableFooter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableFooter.vue */ "./resources/js/components/crud/components/TableFooter.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CrudButton: _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TableFooter: _components_TableFooter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['details'],
  data: function data() {
    return {
      selected: [],
      tmp: '',
      search: '',
      pagination: {
        sortBy: ['added'],
        sorDesc: [true]
      },
      selectedStatuses: [1, 0]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('crud', ['itemElements'])), {}, {
    statuses: function statuses() {
      return [{
        text: this.$t('global.itemElements.status.added'),
        value: 1
      }, {
        text: this.$t('global.itemElements.status.noAdded'),
        value: 0
      }];
    },
    headers: function headers() {
      var columns = this.itemElements.columns;
      var headers = columns.map(function (column) {
        var header = {};
        header.text = column.header;
        header.value = column.name;
        return header;
      });
      var actionHeader = [{
        text: this.$t('global.itemElements.fields.action'),
        value: 'actions',
        sortable: false
      }];
      var addedHeader = [{
        text: this.$t('global.itemElements.fields.added'),
        value: 'added'
      }];
      return [].concat(actionHeader, _toConsumableArray(headers), addedHeader);
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
    },
    items: function items() {
      var statusObject = this.itemElements.itemObject;
      var columns = this.itemElements.columns;
      var connectionKeyName = this.itemElements.connectionKeyName || 'id';
      var dictionaryKeyName = this.itemElements.dictionaryKeyName || 'id';
      var items = this.itemElements.data.map(function (item) {
        var rItem = {};
        rItem.id = item[dictionaryKeyName];

        var _iterator = _createForOfIteratorHelper(columns),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var column = _step.value;
            var prop = column.obj.split('.').reduce(function (object, property) {
              return object[property] || '';
            }, item);
            rItem[column.name] = prop;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (typeof item[statusObject] !== 'undefined') {
          if (item[statusObject].length > 0) {
            rItem.added = true;
            rItem.filterStatus = 1;
            rItem.connectionId = item[statusObject][0][connectionKeyName];
          } else {
            rItem.added = false;
            rItem.filterStatus = 0;
          }
        }

        return rItem;
      });
      return items;
    },
    filteredItems: function filteredItems() {
      var _this = this;

      var items = this.items.filter(function (item) {
        return _this.selectedStatuses.includes(item.filterStatus);
      });
      var phrases = this.search === '' ? [] : this.search.toLowerCase().split(' ');
      var filteredItems = items.filter(function (item) {
        var found = true;

        for (var i = 0; i < phrases.length; i++) {
          found = false;

          for (var key in item) {
            var field = item[key];

            if (typeof field === 'string' || field instanceof String || typeof field === 'number') {
              field = field.toString().toLowerCase();

              if (field.includes(phrases[i])) {
                found = true;
              }
            }
          }

          if (!found) break;
        }

        return found;
      });
      return filteredItems;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('crud', ['addItemElement', 'removeItemElement', 'addManyItemElements', 'removeManyItemElements'])), {}, {
    add: function add(foreignId) {
      var obj = {};
      obj[this.itemElements.primaryId] = this.itemElements.id;
      obj[this.itemElements.foreignId] = foreignId;
      this.addItemElement([obj, this.$t('global.alerts.added'), this.$t('global.alerts.addError')]);
    },
    remove: function remove(id) {
      this.removeItemElement([id, this.$t('global.alerts.removed'), this.$t('global.alerts.removeError')]);
    },
    addMany: function addMany() {
      var _this2 = this;

      var obj = this.selected.filter(function (item) {
        return item.connectionId === undefined;
      }).map(function (item) {
        var rItem = {};
        rItem[_this2.itemElements.primaryId] = _this2.itemElements.id;
        rItem[_this2.itemElements.foreignId] = item.id;
        return rItem;
      });
      this.addManyItemElements([{
        items: obj
      }, this.$t('global.alerts.added'), this.$t('global.alerts.addError')]);
      this.clearSelected();
    },
    removeMany: function removeMany() {
      var obj = this.selected.filter(function (item) {
        return item.connectionId !== undefined;
      }).map(function (item) {
        return item.connectionId;
      });
      this.removeManyItemElements([{
        ids: obj
      }, this.$t('global.alerts.removed'), this.$t('global.alerts.removeError')]);
      this.clearSelected();
    },
    close: function close() {
      this.itemElements.show = false;
      this.$parent.itemElementsClosed();
    },
    clearSelected: function clearSelected() {
      this.selected = [];
    },
    setPage: function setPage(page) {
      this.pagination.page = parseInt(page);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/TableFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/TableFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pageStart', 'pageStop', 'itemsLength', 'pagination'],
  computed: {
    calcPages: function calcPages() {
      return Math.ceil(this.itemsLength / this.pagination.itemsPerPage);
    }
  },
  methods: {
    setPage: function setPage(val) {
      this.$emit('setPage', val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/points/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/points/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_crud_components_Crud_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/crud/components/Crud.vue */ "./resources/js/components/crud/components/Crud.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      prefix: '',
      path: 'get-users',
      paths: {
        i: 'get-users',
        st: 'get-users'
      },
      pageTitle: 'administration.users'
    };
  },
  computed: {
    itemElements: function itemElements() {
      return {
        userPermissions: {
          title: this.$t('itemElements.userPermissions.title'),
          url: 'admin/users/{id}/permissions',
          controller: 'crud/admin/user-permissions',
          itemObject: 'permission_users',
          columns: [{
            obj: 'name',
            name: 'permission',
            header: this.$t('itemElements.userPermissions.headers.permission')
          }],
          primaryId: 'user_id',
          foreignId: 'permission_id',
          icon: 'lock_open',
          color: 'purple',
          buttonText: this.$t('itemElements.userPermissions.title')
        }
      };
    },
    buttons: function buttons() {
      return [{
        name: 'resetPassword',
        icon: 'autorenew',
        color: 'blue',
        text: this.$t('buttons.resetPassword')
      }];
    },
    fieldsInfo: function fieldsInfo() {
      return [{
        text: this.$t('fields.id'),
        name: 'id',
        details: false
      }, {
        type: 'input',
        column: 'name',
        text: this.$t('fields.name'),
        name: 'name',
        multiedit: false
      }, {
        type: 'input',
        column: 'email',
        text: this.$t('fields.email'),
        name: 'email',
        multiedit: false
      }, {
        type: 'select',
        //   url: 'crud/admin/user-types',
        //   list: {
        //     value: 'id',
        //     text: 'name',
        //     data: [],
        //   },
        column: 'active',
        text: 'Active',
        // this.$t('fields.userType'),
        name: 'active' //   apiObject: {
        //     name: 'Active',
        //   },

      }, {
        type: 'select',
        list: {
          value: 'id',
          text: 'name',
          data: ['admin', 'user', 'doctors']
        },
        column: 'role',
        text: 'Roles',
        name: 'role'
      }];
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('crud', ['getItems'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['openAlertBox'])), {}, {
    resetPassword: function resetPassword(item) {
      var _this = this;

      vue__WEBPACK_IMPORTED_MODULE_0___default.a.http.put('admin/users/' + item.id + '/reset-password').then(function (response) {
        _this.openAlertBox(['alertSuccess', _this.$t('passwordReseted')]);

        _this.getItems();
      });
    }
  }),
  components: {
    Crud: _components_crud_components_Crud_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  i18n: {
    messages: {
      pl: {
        detailsTitle: 'المستخدمين',
        fields: {
          id: 'Id',
          name: 'Nazwa',
          email: 'E-mail',
          initialPassword: 'Hasło początkowe',
          userType: 'Typ użytkownika'
        },
        itemElements: {
          userPermissions: {
            title: 'Uprawnienia użytkownika',
            headers: {
              permission: 'Uprawnienie'
            }
          }
        },
        buttons: {
          resetPassword: 'Reset hasła'
        },
        passwordReseted: 'Hasło zostało zmienione',
        passwordResetError: 'Błąd! Nie udało się zmienić hasła'
      },
      en: {
        detailsTitle: 'User',
        fields: {
          id: 'Id',
          name: 'Name',
          email: 'E-mail',
          active: 'Active',
          roles: 'Roles'
        },
        itemElements: {
          userPermissions: {
            title: 'User permissions',
            headers: {
              permission: 'Permission'
            }
          }
        },
        buttons: {
          resetPassword: 'Reset password'
        },
        passwordReseted: 'Password changed',
        passwordResetError: 'Error! Password change unsuccessful'
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".field--limited-width[data-v-b5c2b004] {\n  max-width: 600px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.details-loader-container[data-v-d454c09e] {\n  position: absolute;\n  top: 200px;\n  text-align: center;\n  width: 100%;\n}\n.details-loader[data-v-d454c09e] {\n  height: 100px !important;\n  width: 100px;\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 100%;\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.details-list[data-v-4baaace8] {\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.item-elements-list[data-v-10a63ec6] {\n  height: 400px;\n  overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Button.vue?vue&type=template&id=d765b236&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Button.vue?vue&type=template&id=d765b236& ***!
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
  return _c(
    "v-tooltip",
    {
      attrs: { top: "" },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            return [
              _c(
                "v-btn",
                _vm._g(
                  {
                    class: _vm.noMargin ? "" : "mr-1",
                    attrs: {
                      icon: !_vm.dark,
                      fab: _vm.dark,
                      dark: _vm.dark,
                      "x-small": _vm.xSmall,
                      small: _vm.small,
                      large: _vm.large,
                      "x-large": _vm.xLarge,
                      color: _vm.color,
                      loading: _vm.loading
                    },
                    on: {
                      click: function($event) {
                        return _vm.emitClick()
                      }
                    }
                  },
                  on
                ),
                [
                  _vm.icon
                    ? _c("v-icon", { attrs: { dark: _vm.dark } }, [
                        _vm._v(_vm._s(_vm.icon))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.text ? [_vm._v(_vm._s(_vm.text))] : _vm._e()
                ],
                2
              )
            ]
          }
        }
      ])
    },
    [_vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.tooltip))])]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=template&id=d454c09e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/Crud.vue?vue&type=template&id=d454c09e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { position: "relative" } }, [
    _c(
      "div",
      [
        _c(_vm.componentLoader, {
          tag: "component",
          attrs: {
            itemsViewConfig: _vm.itemsViewConfig,
            meta: _vm.meta,
            "custom-buttons": _vm.customButtons,
            "item-elements": _vm.itemElements,
            "delete-mode": _vm.deleteMode,
            "edit-button": _vm.editButton,
            "table-fields": _vm.tableFields,
            "primary-key": _vm.primaryKey,
            "active-column-name": _vm.activeColumnName,
            "create-mode": _vm.createMode,
            "edit-mode": _vm.editMode,
            "main-filter": _vm.mainFilter,
            "field-filters": _vm.fieldFilters,
            "refresh-button": _vm.refreshButton,
            "export-button": _vm.exportButton,
            "select-many-mode": _vm.selectManyMode,
            "update-many-mode": _vm.updateManyMode,
            "remove-many-mode": _vm.removeManyMode
          },
          scopedSlots: _vm._u(
            [
              _vm._l(_vm.tableFields, function(field) {
                return {
                  key: "field:" + field.name,
                  fn: function(ref) {
                    var value = ref.value
                    var item = ref.item
                    return [
                      _vm._t("list-item-field:" + field.name, null, {
                        item: item,
                        value: value
                      })
                    ]
                  }
                }
              })
            ],
            null,
            true
          )
        }),
        _vm._v(" "),
        _c("item-details", {
          attrs: {
            title: _vm.detailsTitle,
            "details-fields": _vm.detailsFields,
            width: _vm.itemDetailsWidth
          },
          scopedSlots: _vm._u(
            [
              {
                key: "title",
                fn: function(ref) {
                  var title = ref.title
                  return [_vm._t("item-details-title", null, { title: title })]
                }
              },
              {
                key: "over-fields",
                fn: function() {
                  return [_vm._t("item-details-over-fields")]
                },
                proxy: true
              },
              _vm._l(_vm.detailsFields, function(field) {
                return {
                  key: "field:" + field.name,
                  fn: function(ref) {
                    var value = ref.value
                    var fieldType = ref.fieldType
                    var field = ref.field
                    var reload = ref.reload
                    var rules = ref.rules
                    var changeValue = ref.changeValue
                    return [
                      _vm._t("item-details-field:" + field.name, null, {
                        value: value,
                        fieldType: fieldType,
                        field: field,
                        reload: reload,
                        rules: rules,
                        changeValue: changeValue
                      })
                    ]
                  }
                }
              }),
              {
                key: "under-fields",
                fn: function() {
                  return [_vm._t("item-details-under-fields")]
                },
                proxy: true
              },
              {
                key: "custom-actions",
                fn: function() {
                  return [_vm._t("item-details-custom-actions")]
                },
                proxy: true
              }
            ],
            null,
            true
          )
        }),
        _vm._v(" "),
        _c("item-elements"),
        _vm._v(" "),
        _c("image-container")
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "details-loader-container" },
      [
        _vm.detailsLoading
          ? _c(
              "v-layout",
              {
                staticClass: "details-loader",
                attrs: { "justify-center": "", "align-center": "" }
              },
              [
                _c("v-progress-circular", {
                  attrs: {
                    indeterminate: "",
                    size: 100,
                    width: 3,
                    color: "primary"
                  }
                })
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ImageContainer.vue?vue&type=template&id=7ba29419&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ImageContainer.vue?vue&type=template&id=7ba29419& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "1000" },
      model: {
        value: _vm.imageContainer.show,
        callback: function($$v) {
          _vm.$set(_vm.imageContainer, "show", $$v)
        },
        expression: "imageContainer.show"
      }
    },
    [
      _c(
        "v-card",
        { staticClass: "text-xs-center" },
        [
          _c("v-card-title", { attrs: { "primary-title": "" } }),
          _vm._v(" "),
          _c("v-card-text", [
            _c("div", [
              _c("h1", [_vm._v(_vm._s(_vm.imageContainer.item.filename))]),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(_vm.imageContainer.item.mime))]),
              _vm._v(" "),
              _c("div", [
                _vm._v(_vm._s(_vm._f("fileSize")(_vm.imageContainer.item.size)))
              ])
            ]),
            _vm._v(" "),
            _c("img", {
              staticStyle: { "max-height": "50vh" },
              attrs: { src: _vm.image }
            })
          ]),
          _vm._v(" "),
          _c("v-responsive"),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "black" },
                  on: {
                    click: function($event) {
                      return _vm.closeImageContainer()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("global.details.buttons.close")) +
                      "\n      "
                  )
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: {
        "max-width": _vm.width,
        persistent: "",
        "no-click-animation": ""
      },
      model: {
        value: _vm.details.show,
        callback: function($$v) {
          _vm.$set(_vm.details, "show", $$v)
        },
        expression: "details.show"
      }
    },
    [
      _c(
        "v-card",
        [
          _vm._t(
            "title",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(
                  "\n        " +
                    _vm._s(
                      _vm.details.action == "multiedit"
                        ? _vm.$t("global.details.multipleUpdateTitle")
                        : _vm.title
                    ) +
                    "\n      "
                )
              ])
            ],
            { title: _vm.title }
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              model: {
                value: _vm.details.formValid,
                callback: function($$v) {
                  _vm.$set(_vm.details, "formValid", $$v)
                },
                expression: "details.formValid"
              }
            },
            [
              _c(
                "v-card-text",
                { staticClass: "details-list" },
                [
                  _vm._t("over-fields"),
                  _vm._v(" "),
                  _vm._l(_vm.fields, function(field, i) {
                    return _c(
                      "div",
                      { key: i },
                      [
                        _c(
                          "v-layout",
                          { attrs: { row: "", wrap: "" } },
                          [
                            _vm.details.action == "multiedit" && field.show
                              ? _c("v-flex", { staticClass: "sm1" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: field.updateColumn,
                                        expression: "field.updateColumn"
                                      }
                                    ],
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: Array.isArray(field.updateColumn)
                                        ? _vm._i(field.updateColumn, null) > -1
                                        : field.updateColumn
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = field.updateColumn,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                field,
                                                "updateColumn",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                field,
                                                "updateColumn",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(field, "updateColumn", $$c)
                                        }
                                      }
                                    }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                class:
                                  _vm.details.action == "multiedit"
                                    ? "sm11"
                                    : "sm12"
                              },
                              [
                                _c("item-details-field", {
                                  attrs: {
                                    field: field,
                                    "dynamic-field-type": _vm.dynamicFieldType(
                                      field.typeField
                                    ),
                                    "field-value": field.value,
                                    reload: _vm.reload
                                  },
                                  on: { valueChanged: _vm.valueChanged },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var value = ref.value
                                          var fieldType = ref.fieldType
                                          var field = ref.field
                                          var reload = ref.reload
                                          var rules = ref.rules
                                          var changeValue = ref.changeValue
                                          return [
                                            _vm._t(
                                              "field:" + field.name,
                                              null,
                                              {
                                                value: value,
                                                fieldType: fieldType,
                                                field: field,
                                                reload: reload,
                                                rules: rules,
                                                changeValue: changeValue
                                              }
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._t("under-fields")
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm._t("custom-actions"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "black", text: "" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.close()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("global.details.buttons.close")))]
                  ),
                  _vm._v(" "),
                  _vm.details.action == "create"
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            disabled: !_vm.details.formValid,
                            color: "green",
                            text: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.store()
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("global.details.buttons.create"))
                          )
                        ]
                      )
                    : _vm.details.action == "edit"
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            disabled: !_vm.details.formValid,
                            color: "orange",
                            text: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.update()
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("global.details.buttons.modify"))
                          )
                        ]
                      )
                    : _vm.details.action == "multiedit"
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "orange", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.updateSelected()
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t("global.details.buttons.modifySelected")
                            )
                          )
                        ]
                      )
                    : _vm._e()
                ],
                2
              )
            ],
            1
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.field.show
    ? _c(
        "div",
        [
          _vm._t(
            "default",
            [
              _c(_vm.fieldComponent, {
                tag: "component",
                class: { "field--limited-width": _vm.isWidthLimited },
                attrs: {
                  "field-type": _vm.fieldType,
                  field: _vm.field,
                  reload: _vm.reload,
                  rules: _vm.fieldRules(_vm.field)
                },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              })
            ],
            {
              value: _vm.value,
              fieldType: _vm.fieldType,
              field: _vm.field,
              reload: _vm.reload,
              rules: _vm.fieldRules(_vm.field),
              changeValue: _vm.changeValue
            }
          )
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "800", persistent: "" },
      model: {
        value: _vm.itemElements.show,
        callback: function($$v) {
          _vm.$set(_vm.itemElements, "show", $$v)
        },
        expression: "itemElements.show"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v("\n      " + _vm._s(_vm.itemElements.title) + "\n    ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-title",
            [
              [
                _c("crud-button", {
                  attrs: {
                    large: "",
                    color: "red",
                    icon: "delete",
                    tooltip: _vm.$t("global.itemElements.buttons.removeMany")
                  },
                  on: {
                    clicked: function($event) {
                      return _vm.removeMany()
                    }
                  }
                }),
                _vm._v(" "),
                _c("crud-button", {
                  attrs: {
                    large: "",
                    color: "green",
                    icon: "add",
                    tooltip: _vm.$t("global.itemElements.buttons.addMany")
                  },
                  on: {
                    clicked: function($event) {
                      return _vm.addMany()
                    }
                  }
                })
              ],
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              [
                _c("v-autocomplete", {
                  attrs: {
                    label: _vm.$t("global.itemElements.status.title"),
                    items: _vm.statuses,
                    "item-text": "text",
                    "item-value": "value",
                    "single-line": "",
                    multiple: "",
                    chips: ""
                  },
                  model: {
                    value: _vm.selectedStatuses,
                    callback: function($$v) {
                      _vm.selectedStatuses = $$v
                    },
                    expression: "selectedStatuses"
                  }
                })
              ],
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: _vm.$t("global.itemElements.search"),
                  "append-icon": "search",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              options: _vm.pagination,
              headers: _vm.headers,
              items: _vm.filteredItems,
              "no-results-text": _vm.$t(
                "global.itemElements.noMatchingResults"
              ),
              "no-data-text": _vm.$t("global.itemElements.noDataAvailable"),
              "footer-props": _vm.footerProps,
              "items-per-page": 10,
              "show-select": "",
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
                              ? [
                                  item.added
                                    ? _c("crud-button", {
                                        attrs: {
                                          small: "",
                                          color: "red",
                                          icon: "delete",
                                          tooltip: _vm.$t(
                                            "global.itemElements.buttons.remove"
                                          )
                                        },
                                        on: {
                                          clicked: function($event) {
                                            return _vm.remove(item.connectionId)
                                          }
                                        }
                                      })
                                    : _c("crud-button", {
                                        attrs: {
                                          small: "",
                                          color: "green",
                                          icon: "add",
                                          tooltip: _vm.$t(
                                            "global.itemElements.buttons.add"
                                          )
                                        },
                                        on: {
                                          clicked: function($event) {
                                            return _vm.add(item.id)
                                          }
                                        }
                                      })
                                ]
                              : ![
                                  "id",
                                  "connectionId",
                                  "filterStatus",
                                  "added"
                                ].includes(header.value)
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(item[header.value])
                                  }
                                })
                              : header.value === "added"
                              ? [
                                  _c("span", { attrs: { hidden: "" } }, [
                                    _vm._v(_vm._s(item[header.value]))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-icon", [
                                    _vm._v(
                                      _vm._s(
                                        item[header.value] ? "check" : "clear"
                                      )
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
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
                          pageStart: pageStart,
                          pageStop: pageStop,
                          itemsLength: itemsLength
                        },
                        on: {
                          setPage: function($event) {
                            return _vm.setPage()
                          }
                        }
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
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "black", text: "" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("global.itemElements.buttons.close")) +
                      "\n      "
                  )
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/TableFooter.vue?vue&type=template&id=81469834&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/crud/components/TableFooter.vue?vue&type=template&id=81469834& ***!
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
  return _c("span", [
    _c("span", [
      _vm._v(
        "\n    " +
          _vm._s(_vm.$t("global.datatable.records")) +
          " " +
          _vm._s(_vm.pageStart) +
          " - " +
          _vm._s(_vm.pageStop) +
          " " +
          _vm._s(_vm.$t("global.datatable.from")) +
          " " +
          _vm._s(_vm.itemsLength) +
          "\n  "
      )
    ]),
    _vm._v(" "),
    _c("span", { staticStyle: { "margin-left": "30px" } }, [
      _vm._v(
        "\n    " + _vm._s(_vm.$t("global.datatable.page")) + ":\n     \n    "
      ),
      _c(
        "span",
        { staticStyle: { width: "50px", display: "inline-block !important" } },
        [
          _c("v-text-field", {
            attrs: {
              value: _vm.pagination.page,
              type: "number",
              min: "1",
              max: _vm.calcPages
            },
            on: {
              input: function($event) {
                return _vm.setPage($event)
              }
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/points/index.vue?vue&type=template&id=1a79dd8f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/points/index.vue?vue&type=template&id=1a79dd8f& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("span", [_vm._v("Admin / Users")]),
      _vm._v(" "),
      _c("crud", {
        ref: "crud",
        attrs: {
          prefix: _vm.prefix,
          path: _vm.path,
          paths: _vm.paths,
          "page-title": _vm.pageTitle,
          "fields-info": _vm.fieldsInfo,
          "details-title": _vm.$t("detailsTitle"),
          "custom-buttons": _vm.buttons,
          "item-elements": _vm.itemElements
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/crud/components lazy recursive ^\\.\\/Crud.*\\.vue$":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/crud/components lazy ^\.\/Crud.*\.vue$ namespace object ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Crud.vue": [
		"./resources/js/components/crud/components/Crud.vue"
	],
	"./CrudTableClientMode.vue": [
		"./resources/js/components/crud/components/CrudTableClientMode.vue",
		1,
		6
	],
	"./CrudTableServerMode.vue": [
		"./resources/js/components/crud/components/CrudTableServerMode.vue",
		1,
		9
	],
	"./CrudTreeClientMode.vue": [
		"./resources/js/components/crud/components/CrudTreeClientMode.vue",
		1,
		7
	],
	"./CrudTreeServerMode.vue": [
		"./resources/js/components/crud/components/CrudTreeServerMode.vue",
		10
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/components/crud/components lazy recursive ^\\.\\/Crud.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/components/crud/components/Button.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/crud/components/Button.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_d765b236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=d765b236& */ "./resources/js/components/crud/components/Button.vue?vue&type=template&id=d765b236&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_d765b236___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_d765b236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/Button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/Button.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/crud/components/Button.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/Button.vue?vue&type=template&id=d765b236&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/crud/components/Button.vue?vue&type=template&id=d765b236& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_d765b236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=d765b236& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Button.vue?vue&type=template&id=d765b236&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_d765b236___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_d765b236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/Crud.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/crud/components/Crud.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Crud_vue_vue_type_template_id_d454c09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Crud.vue?vue&type=template&id=d454c09e&scoped=true& */ "./resources/js/components/crud/components/Crud.vue?vue&type=template&id=d454c09e&scoped=true&");
/* harmony import */ var _Crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Crud.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/Crud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Crud_vue_vue_type_style_index_0_id_d454c09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css& */ "./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Crud_vue_vue_type_template_id_d454c09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Crud_vue_vue_type_template_id_d454c09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d454c09e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/Crud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/Crud.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/crud/components/Crud.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Crud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_style_index_0_id_d454c09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=style&index=0&id=d454c09e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_style_index_0_id_d454c09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_style_index_0_id_d454c09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_style_index_0_id_d454c09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_style_index_0_id_d454c09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_style_index_0_id_d454c09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/crud/components/Crud.vue?vue&type=template&id=d454c09e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/Crud.vue?vue&type=template&id=d454c09e&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_template_id_d454c09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Crud.vue?vue&type=template&id=d454c09e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/Crud.vue?vue&type=template&id=d454c09e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_template_id_d454c09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crud_vue_vue_type_template_id_d454c09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/ImageContainer.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/crud/components/ImageContainer.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageContainer_vue_vue_type_template_id_7ba29419___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageContainer.vue?vue&type=template&id=7ba29419& */ "./resources/js/components/crud/components/ImageContainer.vue?vue&type=template&id=7ba29419&");
/* harmony import */ var _ImageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/ImageContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageContainer_vue_vue_type_template_id_7ba29419___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageContainer_vue_vue_type_template_id_7ba29419___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/ImageContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/ImageContainer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ImageContainer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ImageContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/ImageContainer.vue?vue&type=template&id=7ba29419&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ImageContainer.vue?vue&type=template&id=7ba29419& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageContainer_vue_vue_type_template_id_7ba29419___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageContainer.vue?vue&type=template&id=7ba29419& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ImageContainer.vue?vue&type=template&id=7ba29419&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageContainer_vue_vue_type_template_id_7ba29419___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageContainer_vue_vue_type_template_id_7ba29419___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetails.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetails.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemDetails_vue_vue_type_template_id_4baaace8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true& */ "./resources/js/components/crud/components/ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true&");
/* harmony import */ var _ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/ItemDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemDetails_vue_vue_type_style_index_0_id_4baaace8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css& */ "./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemDetails_vue_vue_type_template_id_4baaace8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemDetails_vue_vue_type_template_id_4baaace8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4baaace8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/ItemDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_4baaace8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=style&index=0&id=4baaace8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_4baaace8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_4baaace8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_4baaace8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_4baaace8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_style_index_0_id_4baaace8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_template_id_4baaace8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetails.vue?vue&type=template&id=4baaace8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_template_id_4baaace8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetails_vue_vue_type_template_id_4baaace8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetailsField.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetailsField.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemDetailsField_vue_vue_type_template_id_b5c2b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true& */ "./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true&");
/* harmony import */ var _ItemDetailsField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDetailsField.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemDetailsField_vue_vue_type_style_index_0_id_b5c2b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true& */ "./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemDetailsField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemDetailsField_vue_vue_type_template_id_b5c2b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemDetailsField_vue_vue_type_template_id_b5c2b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b5c2b004",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/ItemDetailsField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetailsField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_style_index_0_id_b5c2b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=style&index=0&id=b5c2b004&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_style_index_0_id_b5c2b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_style_index_0_id_b5c2b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_style_index_0_id_b5c2b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_style_index_0_id_b5c2b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_style_index_0_id_b5c2b004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_template_id_b5c2b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemDetailsField.vue?vue&type=template&id=b5c2b004&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_template_id_b5c2b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDetailsField_vue_vue_type_template_id_b5c2b004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/ItemElements.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemElements.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemElements_vue_vue_type_template_id_10a63ec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true& */ "./resources/js/components/crud/components/ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true&");
/* harmony import */ var _ItemElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemElements.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/ItemElements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemElements_vue_vue_type_style_index_0_id_10a63ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css& */ "./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemElements_vue_vue_type_template_id_10a63ec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemElements_vue_vue_type_template_id_10a63ec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10a63ec6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/ItemElements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/ItemElements.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemElements.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemElements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_style_index_0_id_10a63ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=style&index=0&id=10a63ec6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_style_index_0_id_10a63ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_style_index_0_id_10a63ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_style_index_0_id_10a63ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_style_index_0_id_10a63ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_style_index_0_id_10a63ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/crud/components/ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_template_id_10a63ec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/ItemElements.vue?vue&type=template&id=10a63ec6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_template_id_10a63ec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemElements_vue_vue_type_template_id_10a63ec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/TableFooter.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/crud/components/TableFooter.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableFooter_vue_vue_type_template_id_81469834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableFooter.vue?vue&type=template&id=81469834& */ "./resources/js/components/crud/components/TableFooter.vue?vue&type=template&id=81469834&");
/* harmony import */ var _TableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/crud/components/TableFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableFooter_vue_vue_type_template_id_81469834___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableFooter_vue_vue_type_template_id_81469834___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/crud/components/TableFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/crud/components/TableFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/crud/components/TableFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/TableFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/crud/components/TableFooter.vue?vue&type=template&id=81469834&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/TableFooter.vue?vue&type=template&id=81469834& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFooter_vue_vue_type_template_id_81469834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableFooter.vue?vue&type=template&id=81469834& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/crud/components/TableFooter.vue?vue&type=template&id=81469834&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFooter_vue_vue_type_template_id_81469834___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableFooter_vue_vue_type_template_id_81469834___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/crud/components/field-types lazy recursive ^\\.\\/.*\\.vue$":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/crud/components/field-types lazy ^\.\/.*\.vue$ namespace object ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Checkbox.vue": [
		"./resources/js/components/crud/components/field-types/Checkbox.vue",
		11
	],
	"./Date.vue": [
		"./resources/js/components/crud/components/field-types/Date.vue",
		12
	],
	"./File.vue": [
		"./resources/js/components/crud/components/field-types/File.vue",
		4
	],
	"./RichTextBox.vue": [
		"./resources/js/components/crud/components/field-types/RichTextBox.vue",
		5
	],
	"./Select.vue": [
		"./resources/js/components/crud/components/field-types/Select.vue",
		13
	],
	"./Text.vue": [
		"./resources/js/components/crud/components/field-types/Text.vue",
		14
	],
	"./Textarea.vue": [
		"./resources/js/components/crud/components/field-types/Textarea.vue",
		15
	],
	"./components/FieldWrapper.vue": [
		"./resources/js/components/crud/components/field-types/components/FieldWrapper.vue",
		8
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/components/crud/components/field-types lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/pages/admin/points/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/admin/points/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1a79dd8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a79dd8f& */ "./resources/js/pages/admin/points/index.vue?vue&type=template&id=1a79dd8f&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/points/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1a79dd8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1a79dd8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/points/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/points/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/admin/points/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/points/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/points/index.vue?vue&type=template&id=1a79dd8f&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/admin/points/index.vue?vue&type=template&id=1a79dd8f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a79dd8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1a79dd8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/points/index.vue?vue&type=template&id=1a79dd8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a79dd8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a79dd8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);