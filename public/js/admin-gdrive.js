(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-gdrive"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/storage/gdrive.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_lightbox_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/lightbox.min.js */ "./resources/js/services/lightbox.min.js");
/* harmony import */ var _services_lightbox_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_lightbox_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_drive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/drive.js */ "./resources/js/services/drive.js");
/* harmony import */ var _services_upload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/upload.js */ "./resources/js/services/upload.js");
/* harmony import */ var _services_upload_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_services_upload_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {},
  methods: {
    handleAuthClick: function handleAuthClick() {
      return _services_drive_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleAuthClick();
    },
    handleSignoutClick: function handleSignoutClick() {
      return _services_drive_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleSignoutClick();
    }
  },
  created: function created() {
    _services_drive_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleClientLoad();
  },
  mounted: function mounted() {
    var jquery = document.createElement('script');
    jquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
    document.head.appendChild(jquery); // document.head.appendChild(lightbox)
    // document.head.appendChild(drive)
    // let gogoleApi = document.createElement('script')
    //     gogoleApi.async=true
    //     gogoleApi.defer=true
    //     gogoleApi.setAttribute('src', 'https://apis.google.com/js/api.js')
    //     gogoleApi.setAttribute('onload', `this.onload=function(){};`)
    //     gogoleApi.setAttribute('onreadystatechange', "if (this.readyState === 'complete') this.onload()")
    //     document.head.appendChild(gogoleApi)
    // document.head.appendChild(upload)
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*************** Google Login Box ***************/\n#login-box[data-v-3fb87080] {\n  font-size: medium;\n  text-align: center;\n  padding-top: 40px;\n  padding-bottom: 50px;\n  background-color: lightgreen;\n  width: 400px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 5px 10px #888888;\n}\n.logout-link[data-v-3fb87080] {\n  cursor: pointer;\n}\n\n/*************** END Google Login Box ***************/\n/*************** Google Drive Breadcrumb ***************/\n#drive-breadcrumb[data-v-3fb87080] {\n  font-size: 14px;\n}\n#drive-breadcrumb a[data-v-3fb87080] {\n  cursor: pointer;\n  color: red;\n}\n.breadcrumb-arrow[data-v-3fb87080] {\n  background: url(/Images/arrow_right.png) no-repeat 0 7px;\n  display: inline-block;\n  height: 20px;\n  width: 15px;\n}\n\n/*************** END Google Drive Breadcrumb ***************/\n/*************** Google Drive Box ***************/\n#drive-box[data-v-3fb87080] {\n  padding: 10px;\n  margin: 10px;\n  width: 98%;\n  box-sizing: border-box;\n  display: none;\n  position: relative;\n  min-height: 150px;\n}\n#transparent-wrapper[data-v-3fb87080] {\n  display: none;\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 1001;\n  -moz-opacity: 0.35;\n  opacity: 0.35;\n  filter: alpha(opacity=35);\n}\n#drive-content[data-v-3fb87080] {\n  clear: both;\n  font-size: 15px;\n}\n.folder-box[data-v-3fb87080], .file-box[data-v-3fb87080] {\n  float: left;\n  font-family: Arial;\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  padding: 10px;\n  margin: 8px;\n}\n.image-preview[data-v-3fb87080] {\n  text-align: center;\n  height: 80px;\n}\n.image-preview img[data-v-3fb87080] {\n  max-width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.item-title[data-v-3fb87080] {\n  word-wrap: break-word;\n  text-align: center;\n  font-size: 12px;\n  color: blue;\n  white-space: nowrap;\n  width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n#drive-menu[data-v-3fb87080] {\n  float: right;\n  display: inline-block;\n}\n#drive-menu div[data-v-3fb87080]:hover {\n  background-color: #fafccc;\n  border: solid 1px #000;\n}\n#button-share.flash[data-v-3fb87080] {\n  background-color: green;\n  color: white;\n}\n#button-trash.flash[data-v-3fb87080] {\n  background-color: orangered;\n  color: white;\n}\n.button-box[data-v-3fb87080] {\n  padding-top: 10px;\n}\n.button-delete[data-v-3fb87080], .button-info[data-v-3fb87080], .button-download[data-v-3fb87080] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n/*************** END Google Drive Box ***************/\n/************* User Drive Information **************/\n#user-info[data-v-3fb87080] {\n  position: absolute;\n  height: 100px;\n  right: 0;\n  width: 200px;\n  margin-top: -110px;\n  background: #338daf;\n  z-index: 99999999;\n  color: #fff;\n  padding: 5px;\n  box-sizing: border-box;\n  text-align: right;\n  font-size: 11px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.user-item[data-v-3fb87080] {\n  padding-bottom: 4px;\n}\n#drive-info[data-v-3fb87080] {\n  position: absolute;\n  height: 90px;\n  right: 0;\n  width: 200px;\n  margin-top: -120px;\n  background: #338daf;\n  z-index: 99999999;\n  color: #fff;\n  padding: 5px;\n  box-sizing: border-box;\n  text-align: right;\n  font-size: 11px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n/************* END User Drive Information **************/\n/************* FLOATING BOX *********************/\n.float-box[data-v-3fb87080] {\n  border-radius: 0px;\n  box-shadow: 7px 7px 5px rgba(50, 50, 50, 0.75);\n  width: 400px;\n  padding: 7px 15px;\n  border: solid 1px #ccc;\n  position: fixed;\n  left: 50%;\n  margin-left: -200px;\n  top: 35%;\n  z-index: 1000000;\n  background-color: #fff;\n  display: none;\n}\n.close-x[data-v-3fb87080] {\n  float: right;\n  display: inline-block;\n  cursor: pointer;\n}\n.tbl-info[data-v-3fb87080] {\n  border-left: solid 1px #ccc;\n  border-top: solid 1px #ccc;\n  margin-bottom: 10px;\n  width: 100%;\n}\n.tbl-info td[data-v-3fb87080] {\n  border-right: solid 1px #ccc;\n  border-bottom: solid 1px #ccc;\n  padding: 5px 10px;\n  font-size: 11px;\n}\n.tbl-info td.label[data-v-3fb87080] {\n  background: #5f5d5c;\n  color: #fff;\n  text-align: right;\n  width: 50%;\n}\n#text-content[data-v-3fb87080] {\n  margin-bottom: 10px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 180px;\n  border: solid 1px #ccc;\n}\n.text-input[data-v-3fb87080] {\n  width: 100%;\n  margin-bottom: 10px;\n  color: forestgreen;\n  font-size: medium;\n}\n\n/************* END FLOATING BOX *********************/\n/*************** NOTIFICATION ******************/\n#loading-wrapper[data-v-3fb87080] {\n  width: 100%;\n  height: 100%;\n  top: 50px;\n  left: 0;\n  position: absolute;\n}\n#loading[data-v-3fb87080] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -60px;\n  margin-top: -60px;\n  width: 120px;\n}\n#status-message[data-v-3fb87080] {\n  color: red;\n  border: solid 1px #fbfbd4;\n  background: #fbfbd4;\n  border-radius: 5px;\n  padding: 5px;\n  /*position:absolute;*/\n  right: 10px;\n  bottom: 10px;\n  z-index: 9999999999;\n  font-size: 15px;\n}\n#error-message[data-v-3fb87080] {\n  border: solid 1px #f2fcb9;\n  background: #d83813;\n  border-radius: 5px;\n  color: #fff;\n  padding: 10px;\n  /*position:absolute;*/\n  left: 10px;\n  bottom: 10px;\n  z-index: 9999999999;\n  max-width: 400px;\n  border-radius: 5px;\n  display: none;\n}\n#upload-percentage[data-v-3fb87080] {\n  position: absolute;\n  left: 46%;\n  top: 87%;\n  margin-left: -25px;\n  margin-top: -100px;\n  width: 301px;\n  height: 50px;\n  border-radius: 50px;\n  background: #297B07;\n  color: #fff;\n  text-align: center;\n  line-height: 50px;\n  font-weight: bold;\n  font-size: 15px;\n  display: none;\n}\n\n/*************** END NOTIFICATION ******************/\n/***************** MISC ************************/\n.button[data-v-3fb87080] {\n  background: #3498db;\n  background-image: linear-gradient(to bottom, #3498db, #2980b9);\n  border: none;\n  border-radius: 8px;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 11px;\n  padding: 5px 10px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.button[data-v-3fb87080]:hover {\n  background: #3cb0fd;\n  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n  text-decoration: none;\n  border: none;\n}\n.hide[data-v-3fb87080] {\n  display: none;\n}\n.flash[data-v-3fb87080] {\n  -webkit-animation-name: flash-data-v-3fb87080;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-name: flash-data-v-3fb87080;\n  -moz-animation-duration: 1s;\n  -moz-animation-timing-function: linear;\n  -moz-animation-iteration-count: infinite;\n  animation-name: flash-data-v-3fb87080;\n  animation-duration: 1s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n@-webkit-keyframes flash-data-v-3fb87080 {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes flash-data-v-3fb87080 {\n0% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 1;\n}\n}\n/***************** END MISC ************************/\n.lightboxOverlay[data-v-3fb87080] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background-color: black;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  opacity: 0.8;\n  display: none;\n}\n.lightbox[data-v-3fb87080] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 10000;\n  text-align: center;\n  line-height: 0;\n  font-weight: normal;\n}\n.lightbox .lb-image[data-v-3fb87080] {\n  display: block;\n  height: auto;\n  max-width: inherit;\n  border-radius: 3px;\n}\n.lightbox a img[data-v-3fb87080] {\n  border: none;\n}\n.lb-outerContainer[data-v-3fb87080] {\n  position: relative;\n  background-color: white;\n  *zoom: 1;\n  width: 250px;\n  height: 250px;\n  margin: 0 auto;\n  border-radius: 4px;\n}\n.lb-outerContainer[data-v-3fb87080]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.lb-container[data-v-3fb87080] {\n  padding: 4px;\n}\n.lb-loader[data-v-3fb87080] {\n  position: absolute;\n  top: 43%;\n  left: 0;\n  height: 25%;\n  width: 100%;\n  text-align: center;\n  line-height: 0;\n}\n.lb-cancel[data-v-3fb87080] {\n  display: block;\n  width: 32px;\n  height: 32px;\n  margin: 0 auto;\n  background: url(/Images/loading.gif) no-repeat;\n}\n.lb-nav[data-v-3fb87080] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n}\n.lb-container > .nav[data-v-3fb87080] {\n  left: 0;\n}\n.lb-nav a[data-v-3fb87080] {\n  outline: none;\n  background-image: url(\"data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\");\n}\n.lb-prev[data-v-3fb87080], .lb-next[data-v-3fb87080] {\n  height: 100%;\n  cursor: pointer;\n  display: block;\n}\n.lb-nav a.lb-prev[data-v-3fb87080] {\n  width: 34%;\n  left: 0;\n  float: left;\n  background: url(/Images/prev.png) left 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  transition: opacity 0.6s;\n}\n.lb-nav a.lb-prev[data-v-3fb87080]:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n.lb-nav a.lb-next[data-v-3fb87080] {\n  width: 64%;\n  right: 0;\n  float: right;\n  background: url(/Images/next.png) right 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  transition: opacity 0.6s;\n}\n.lb-nav a.lb-next[data-v-3fb87080]:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n.lb-dataContainer[data-v-3fb87080] {\n  margin: 0 auto;\n  padding-top: 5px;\n  *zoom: 1;\n  width: 100%;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.lb-dataContainer[data-v-3fb87080]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.lb-data[data-v-3fb87080] {\n  padding: 0 4px;\n  color: #ccc;\n}\n.lb-data .lb-details[data-v-3fb87080] {\n  width: 85%;\n  float: left;\n  text-align: left;\n  line-height: 1.1em;\n}\n.lb-data .lb-caption[data-v-3fb87080] {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1em;\n}\n.lb-data .lb-number[data-v-3fb87080] {\n  display: block;\n  clear: left;\n  padding-bottom: 1em;\n  font-size: 12px;\n  color: #999999;\n}\n.lb-data .lb-close[data-v-3fb87080] {\n  display: block;\n  float: right;\n  width: 30px;\n  height: 30px;\n  background: url(/Images/close.png) top right no-repeat;\n  text-align: right;\n  outline: none;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.lb-data .lb-close[data-v-3fb87080]:hover {\n  cursor: pointer;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=template&id=3fb87080&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/storage/gdrive.vue?vue&type=template&id=3fb87080&scoped=true& ***!
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
  return _c("div", { staticClass: "w3-light-grey" }, [
    _c(
      "div",
      { staticStyle: { display: "none" }, attrs: { id: "login-box" } },
      [
        _c("h1", [_vm._v("Sign In")]),
        _vm._v(" "),
        _c("p", [_vm._v("Use your Google Account")]),
        _vm._v(" "),
        _c("p", [
          _c(
            "button",
            {
              staticClass: "btn btn-default btn-sm",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.handleAuthClick()
                }
              }
            },
            [
              _c("span", { staticClass: "glyphicon glyphicon-log-in" }),
              _vm._v(" Login\n            ")
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "drive-box" } }, [
      _c(
        "div",
        {
          staticClass: "w3-content w3-margin-top",
          staticStyle: { "max-width": "1400px" }
        },
        [
          _c("div", { staticClass: "w3-row-padding" }, [
            _c("div", { staticClass: "w3-third" }, [
              _c("div", { staticClass: "w3-white w3-text-grey w3-card-4" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "w3-container" }, [
                  _c("p"),
                  _c("div", {
                    staticClass: "flash ",
                    attrs: { id: "error-message" }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "flash ",
                    attrs: { id: "status-message" }
                  }),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("p", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default btn-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.handleSignoutClick()
                          }
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "glyphicon glyphicon-log-out"
                        }),
                        _vm._v(" Log out\n                                ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm._m(7)
                ])
              ]),
              _vm._v(" "),
              _c("br")
            ]),
            _vm._v(" "),
            _vm._m(8)
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w3-display-container" }, [
      _c("img", {
        staticStyle: { width: "80%", float: "initial" },
        attrs: { src: "/Images/google_drive_logo.png", alt: "Avatar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "w3-large" }, [
      _c("b", [_vm._v("Welcome "), _c("span", { attrs: { id: "span-name" } })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticStyle: { "font-size": "15px", color: "limegreen" } },
      [
        _vm._v("Total Storage: "),
        _c("span", {
          staticStyle: { color: "red" },
          attrs: { id: "span-totalQuota" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticStyle: { "font-size": "15px", color: "limegreen" } },
      [
        _vm._v("Used Storage: "),
        _c("span", {
          staticStyle: { color: "red" },
          attrs: { id: "span-usedQuota" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { float: "left" }, attrs: { id: "drive-menu" } },
      [
        _c(
          "button",
          {
            staticClass: "btn btn-default btn-sm",
            attrs: { type: "button", id: "button-reload" }
          },
          [
            _c("span", { staticClass: "glyphicon glyphicon-refresh" }),
            _vm._v(" Refresh\n                                ")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-default btn-sm button-opt",
            attrs: { type: "button", id: "button-upload" }
          },
          [
            _c("span", { staticClass: "glyphicon glyphicon-cloud-upload" }),
            _vm._v(" Upload\n                                ")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-default btn-sm button-opt",
            attrs: { type: "button", id: "button-addfolder" }
          },
          [
            _c("span", { staticClass: "glyphicon glyphicon-folder-open" }),
            _vm._v(" Add Folder\n                                ")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-default btn-sm share-opt",
            attrs: { type: "button", id: "button-share" }
          },
          [
            _c("span", { staticClass: "glyphicon glyphicon-share-alt" }),
            _vm._v(" Share\n                                ")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-default btn-sm trash-opt",
            attrs: { type: "button", id: "button-trash" }
          },
          [
            _c("span", { staticClass: "glyphicon glyphicon-trash" }),
            _vm._v(" Trash\n                                ")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "none" }, attrs: { id: "box-UploadFile" } },
      [
        _c("div", { staticClass: "close-x" }, [
          _c("img", {
            staticClass: "imgClose",
            attrs: {
              id: "imgCloseAddFile",
              src: "/Images/button_close.png",
              alt: "close"
            }
          })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "w3-large" }, [_c("b", [_vm._v("Upload")])]),
        _vm._v(" "),
        _c("div", { staticClass: "custom-file mb-3" }, [
          _c("input", {
            staticClass: "custom-file-input",
            attrs: { type: "file", id: "fUpload", name: "filename" }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "custom-file-label", attrs: { for: "customFile" } },
            [_vm._v("Choose file")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "none" }, attrs: { id: "box-AddFolder" } },
      [
        _c("div", { staticClass: "folder-form" }, [
          _c("div", { staticClass: "close-x" }, [
            _c("img", {
              staticClass: "imgClose",
              attrs: {
                id: "imgCloseAddFolder",
                src: "/Images/button_close.png",
                alt: "close"
              }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "w3-large" }, [
            _c("b", [_vm._v("Add New Folder")])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("input", {
              staticClass: "text-input",
              attrs: { type: "text", id: "txtFolder" }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-default btn-sm",
              attrs: { type: "button", id: "btnAddFolder" }
            },
            [
              _c("span", { staticClass: "glyphicon glyphicon-ok" }),
              _vm._v(" Add\n                                    ")
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "none" }, attrs: { id: "box-info" } },
      [
        _c("div", { staticClass: "info-form" }, [
          _c("div", { staticClass: "close-x" }, [
            _c("img", {
              staticClass: "imgClose",
              attrs: {
                id: "imgCloseInfo",
                src: "/Images/button_close.png",
                alt: "close"
              }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "w3-large" }, [
            _c("b", [_vm._v("View Details")])
          ]),
          _vm._v(" "),
          _c(
            "p",
            { staticStyle: { "font-size": "15px", color: "limegreen" } },
            [
              _vm._v("Created Date: "),
              _c("span", {
                staticStyle: { color: "red" },
                attrs: { id: "spanCreatedDate" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticStyle: { "font-size": "15px", color: "limegreen" } },
            [
              _vm._v("Modified Date: "),
              _c("span", {
                staticStyle: { color: "red" },
                attrs: { id: "spanModifiedDate" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticStyle: { "font-size": "15px", color: "limegreen" } },
            [
              _vm._v("Owner: "),
              _c("span", {
                staticStyle: { color: "red" },
                attrs: { id: "spanOwner" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticStyle: { "font-size": "15px", color: "limegreen" } },
            [
              _vm._v("Title: "),
              _c("span", {
                staticStyle: { color: "red" },
                attrs: { id: "spanTitle" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticStyle: { "font-size": "15px", color: "limegreen" } },
            [
              _vm._v("Size: "),
              _c("span", {
                staticStyle: { color: "red" },
                attrs: { id: "spanSize" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticStyle: { "font-size": "15px", color: "limegreen" } },
            [
              _vm._v("Extension: "),
              _c("span", {
                staticStyle: { color: "red" },
                attrs: { id: "spanExtension" }
              })
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w3-twothird" }, [
      _c(
        "div",
        {
          staticClass: "w3-container w3-card w3-white w3-margin-bottom",
          staticStyle: { "border-radius": "5px", "min-height": "30px" }
        },
        [
          _c("div", { attrs: { id: "drive-breadcrumb" } }, [
            _c("span", { staticClass: "breadcrumb-arrow" }),
            _vm._v(" "),
            _c("a", { attrs: { "data-id": "root", "data-level": "0" } }, [
              _vm._v("Home")
            ]),
            _vm._v(" "),
            _c("span", { attrs: { id: "span-navigation" } })
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "w3-container w3-card w3-white",
        attrs: { id: "drive-content" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/storage/gdrive.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin/storage/gdrive.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gdrive_vue_vue_type_template_id_3fb87080_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdrive.vue?vue&type=template&id=3fb87080&scoped=true& */ "./resources/js/pages/admin/storage/gdrive.vue?vue&type=template&id=3fb87080&scoped=true&");
/* harmony import */ var _gdrive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gdrive.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/storage/gdrive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _gdrive_vue_vue_type_style_index_0_id_3fb87080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true& */ "./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gdrive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gdrive_vue_vue_type_template_id_3fb87080_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gdrive_vue_vue_type_template_id_3fb87080_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fb87080",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/storage/gdrive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/storage/gdrive.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/storage/gdrive.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gdrive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_style_index_0_id_3fb87080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=style&index=0&id=3fb87080&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_style_index_0_id_3fb87080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_style_index_0_id_3fb87080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_style_index_0_id_3fb87080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_style_index_0_id_3fb87080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_style_index_0_id_3fb87080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/admin/storage/gdrive.vue?vue&type=template&id=3fb87080&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/admin/storage/gdrive.vue?vue&type=template&id=3fb87080&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_template_id_3fb87080_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./gdrive.vue?vue&type=template&id=3fb87080&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/storage/gdrive.vue?vue&type=template&id=3fb87080&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_template_id_3fb87080_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gdrive_vue_vue_type_template_id_3fb87080_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/drive.js":
/*!****************************************!*\
  !*** ./resources/js/services/drive.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gapi */ "./resources/js/services/gapi.js");
/* harmony import */ var _gapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gapi__WEBPACK_IMPORTED_MODULE_1__);


var _this2 = undefined;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/******************** GLOBAL VARIABLES ********************/
var SCOPES = ['https://www.googleapis.com/auth/drive', 'profile'];
var CLIENT_ID = '909780462877-7uqkksfdop3v16avj4ae077134aluoim.apps.googleusercontent.com';
var FOLDER_NAME = "";
var FOLDER_ID = "root";
var FOLDER_PERMISSION = true;
var FOLDER_LEVEL = 0;
var NO_OF_FILES = 100;
var DRIVE_FILES = [];
var FILE_COUNTER = 0;
var FOLDER_ARRAY = [];
var DELETE_FROM_TRASH = false;


function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    $("#drive-box").show();
    $("#login-box").hide();
    showLoading();
    getDriveFiles();
  } else {
    $("#login-box").show();
    $("#drive-box").hide();
  }

  return;
}

;

function isGoogleSigned() {
  return window.gapi.auth2.getAuthInstance().isSignedIn.get();
}

;
/* harmony default export */ __webpack_exports__["default"] = ({
  /******************** AUTHENTICATION PROCESS ********************/
  /////////////////////////////////////////
  // to enable 3rd party cookies
  // chrome://settings/cookies
  /////////////////////////////////////////
  handleClientLoad: function handleClientLoad() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.gapi.load('client:auth2', _this.initClient);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onload: function onload() {},
  onreadystatechange: function onreadystatechange() {
    var _ref;

    return (_ref = _this2.readyState === 'complete') !== null && _ref !== void 0 ? _ref : _this2.onload;
  },
  //authorize apps
  initClient: function initClient() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return gapi.client.init({
                clientId: CLIENT_ID,
                scope: SCOPES.join(' ')
              }).then(function (o) {
                console.log('o', o);
                console.log('signed in', window.gapi.auth2.getAuthInstance().isSignedIn.get()); // Listen for sign-in state changes.

                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                updateSigninStatus(isGoogleSigned()); // Handle the initial sign-in state.
              })["catch"](function (err) {
                console.log('err', err);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  isGoogleSigned: function isGoogleSigned() {
    return window.gapi.auth2.getAuthInstance().isSignedIn.get();
  },
  //check the return authentication of the login is successful, we display the drive box and hide the login box.
  //  updateSigninStatus(isSignedIn) {
  //     if (isSignedIn) {
  //         $("#drive-box").show();
  //         $("#login-box").hide();
  //         showLoading();
  //         getDriveFiles();
  //     } else {
  //         $("#login-box").show();
  //         $("#drive-box").hide();
  //     }
  // },
  handleAuthClick: function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  },
  handleSignoutClick: function handleSignoutClick(event) {
    if (confirm("Are you sure you want to logout?")) {
      gapi.auth2.getAuthInstance().signOut();
    }
  }
  /******************** END AUTHENTICATION ********************/

  /******************** PAGE LOAD ********************/

  /******************** END PAGE LOAD ********************/

  /******************** DRIVER API ********************/

});

function getDriveFiles() {
  showStatus("Loading Google Drive files...");
  gapi.client.load('drive', 'v2', getFiles);
}

function getFiles() {
  var query = "";

  if (ifShowSharedFiles()) {
    $(".button-opt").hide();
    $(".trash-opt").hide();

    if ($("#drive-breadcrumb a").html() == "Share") {
      if ($("#span-navigation").html() == "") {
        $("#drive-breadcrumb a").html("Share");
      } else {
        $(".button-opt").hide();
        $(".trash-opt").hide();
      }
    } else {
      $("#drive-breadcrumb a").html("Share");
    }

    DELETE_FROM_TRASH = false;
    query = FOLDER_ID == "root" ? "trashed=false and sharedWithMe" : "trashed=false and '" + FOLDER_ID + "' in parents";
  } else if (ifShowTrashFiles()) {
    $(".button-opt").hide();
    $(".share-opt").hide();
    DELETE_FROM_TRASH = true;

    if ($("#drive-breadcrumb a").html() == "Trash") {
      if ($("#span-navigation").html() == "") {
        $("#drive-breadcrumb a").html("Trash");
      } else {
        $(".button-opt").hide();
        $(".share-opt").hide();
      }
    } else {
      $("#drive-breadcrumb a").html("Trash");
    }

    query = "trashed=true"; //query = "starred=true";
    //query = "trashed=true and mimeType='application/vnd.google-apps.folder'";
  } else {
    if ($("#drive-breadcrumb a").html() == "Trash") {
      if ($("#span-navigation").html() == "") {
        $("#drive-breadcrumb a").html("Home");
      }
    } else if ($("#drive-breadcrumb a").html() == "Share") {
      if ($("#span-navigation").html() == "") {
        $("#drive-breadcrumb a").html("Home");
      }
    }

    DELETE_FROM_TRASH = false;
    query = "trashed=false and '" + FOLDER_ID + "' in parents";
    $(".button-opt").show();
    $(".share-opt").show();
    $(".trash-opt").show();
  }

  var request = gapi.client.drive.files.list({
    'maxResults': NO_OF_FILES,
    'q': query
  });
  request.execute(function (resp) {
    if (!resp.error) {
      showUserInfo();
      DRIVE_FILES = resp.items;
      buildFiles();
    } else {
      showErrorMessage("Error: " + resp.error.message);
    }
  });
}

;

function showUserInfo() {
  var request = gapi.client.drive.about.get();
  request.execute(function (resp) {
    if (!resp.error) {
      $("#drive-info").show();
      $("#span-name").html(resp.name);
      $("#span-totalQuota").html(formatBytes(resp.quotaBytesTotal));
      $("#span-usedQuota").html(formatBytes(resp.quotaBytesUsed));
    } else {
      showErrorMessage("Error: " + resp.error.message);
    }
  });
}

;

function buildFiles() {
  var fText = "";

  if (DRIVE_FILES.length > 0) {
    for (var i = 0; i < DRIVE_FILES.length; i++) {
      DRIVE_FILES[i].textContentURL = "";
      DRIVE_FILES[i].level = (parseInt(FOLDER_LEVEL) + 1).toString();
      DRIVE_FILES[i].parentID = DRIVE_FILES[i].parents.length > 0 ? DRIVE_FILES[i].parents[0].id : "";
      DRIVE_FILES[i].thumbnailLink = DRIVE_FILES[i].thumbnailLink || '';
      DRIVE_FILES[i].fileType = DRIVE_FILES[i].fileExtension == null ? "folder" : "file";
      DRIVE_FILES[i].permissionRole = DRIVE_FILES[i].userPermission.role;
      DRIVE_FILES[i].hasPermission = DRIVE_FILES[i].permissionRole == "owner" || DRIVE_FILES[i].permissionRole == "writer";

      if (DRIVE_FILES[i]['exportLinks'] != null) {
        DRIVE_FILES[i].fileType = "file";
        DRIVE_FILES[i].textContentURL = DRIVE_FILES[i]['exportLinks']['text/plain'];
      }

      var textTitle = DRIVE_FILES[i].fileType != "file" ? "Browse " + DRIVE_FILES[i].title : DRIVE_FILES[i].title;
      fText += "<div class='" + DRIVE_FILES[i].fileType + "-box'>";

      if (DRIVE_FILES[i].fileType != "file") {
        fText += "<div class='folder-icon' data-file-counter='" + i + "' data-level='" + DRIVE_FILES[i].level + "' data-parent='" + DRIVE_FILES[i].parentID + "' data-size='" + DRIVE_FILES[i].fileSize + "' data-id='" + DRIVE_FILES[i].id + "' title='" + textTitle + "' data-name='" + DRIVE_FILES[i].title + "' data-has-permission='" + DRIVE_FILES[i].hasPermission + "'><div class='image-preview'><img src='../Images/folder.png'/></div></div>";
      } else {
        if (DRIVE_FILES[i].thumbnailLink) {
          fText += "<div class='image-icon' data-file-counter='" + i + "' ><div class='image-preview'><a href='" + DRIVE_FILES[i].thumbnailLink.replace("s220", "s800") + "' data-lightbox='image-" + i + "'><img src='" + DRIVE_FILES[i].thumbnailLink + "'/></a></div></div>";
        } else {
          if (DRIVE_FILES[i].fileExtension == "txt" || DRIVE_FILES[i].fileExtension == "xls" || DRIVE_FILES[i].fileExtension == "xlsx" || DRIVE_FILES[i].fileExtension == "pdf" || DRIVE_FILES[i].fileExtension == "ppt" || DRIVE_FILES[i].fileExtension == "pptx" || DRIVE_FILES[i].fileExtension == "csv" || DRIVE_FILES[i].fileExtension == "doc" || DRIVE_FILES[i].fileExtension == "docx") {
            fText += "<div class='file-icon' data-file-counter='" + i + "' ><div class='image-preview'><img src='../Images/" + DRIVE_FILES[i].fileExtension + "-icon.png" + "'/></div></div>";
          } else {
            fText += "<div class='file-icon' data-file-counter='" + i + "' ><div class='image-preview'><img src='../Images/undefined-icon.png" + "'/></div></div>";
          }
        }
      }

      fText += "<div class='item-title'>" + DRIVE_FILES[i].title + "</div>"; //button actions

      fText += "<div class='button-box'>";

      if (DRIVE_FILES[i].fileType != "folder") {
        fText += "<span class='glyphicon glyphicon-download-alt button-download' title='Download' data-id='" + DRIVE_FILES[i].id + "' data-file-counter='" + i + "'></span>";
      }

      fText += "<span class='glyphicon glyphicon-info-sign button-info' title='Info' data-id='" + DRIVE_FILES[i].id + "' data-file-counter='" + i + "'></span>";

      if (DRIVE_FILES[i].hasPermission) {
        if (DRIVE_FILES[i].labels.trashed) {
          if (DRIVE_FILES[i].permissionRole == "owner") {
            fText += "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" + DRIVE_FILES[i].id + "'></span>";
          } else if (DRIVE_FILES[i].fileType != "folder") {
            fText += "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" + DRIVE_FILES[i].id + "'></span>";
          }

          fText += "<span class='glyphicon glyphicon-retweet button-restore' title='Restore' data-id='" + DRIVE_FILES[i].id + "'></span>";
        } else {
          if (DRIVE_FILES[i].permissionRole == "owner") {
            fText += "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" + DRIVE_FILES[i].id + "'></span>";
          } else if (DRIVE_FILES[i].fileType != "folder") {
            fText += "<span class='glyphicon glyphicon-remove button-delete' title='Delete' data-id='" + DRIVE_FILES[i].id + "'></span>";
          }
        }
      }

      fText += "</div>"; //closing div

      fText += "</div>";
    }
  } else {
    fText = 'Empty';
  }

  hideStatus();
  $("#drive-content").html(fText);
  initDriveButtons();
  hideLoading();
}

; //Initialize the click button for each individual drive file/folder
//this need to be recalled everytime the Google Drive data is generated

function initDriveButtons() {
  var _this3 = this;

  //Initiate the delete button click
  $(".button-delete").unbind("click");
  $(".button-delete").click(function () {
    var c = confirm("Are you sure to delete this?");

    if (c) {
      showLoading();
      showStatus("Deleting file in progress...");

      if (DELETE_FROM_TRASH) {
        showStatus("Deleting file for forever...");
        var request = gapi.client.drive.files["delete"]({
          'fileId': $(_this3).attr("data-id")
        });
        request.execute(function (resp) {
          hideStatus();

          if (resp.error) {
            showErrorMessage("Error: " + resp.error.message);
          }

          getDriveFiles();
        });
      } else {
        showStatus("Moving file into the trash...");
        var request = gapi.client.drive.files.trash({
          'fileId': $(_this3).attr("data-id")
        });
        request.execute(function (resp) {
          hideStatus();

          if (resp.error) {
            showErrorMessage("Error: " + resp.error.message);
          }

          getDriveFiles();
        });
      }
    }
  }); //Initiate the Restore button click

  $(".button-restore").unbind("click");
  $(".button-restore").click(function () {
    showLoading();
    showStatus("Restoring file in progress...");
    var request = gapi.client.drive.files.untrash({
      'fileId': $(_this3).attr("data-id")
    });
    request.execute(function (resp) {
      hideStatus();

      if (resp.error) {
        showErrorMessage("Error: " + resp.error.message);
      }

      getDriveFiles();
    });
  }); //Initiate the download button

  $(".button-download").unbind("click");
  $(".button-download").click(function () {
    showLoading();
    showStatus("Downloading file in progress...");
    FILE_COUNTER = $(_this3).attr("data-file-counter");
    setTimeout(function () {
      //If there is a text version, we get this version instead.
      if (DRIVE_FILES[FILE_COUNTER].webContentLink == null) {
        window.open(DRIVE_FILES[FILE_COUNTER]['exportLinks']['text/plain']);
      } else {
        window.open(DRIVE_FILES[FILE_COUNTER].webContentLink);
      }

      hideLoading();
      hideStatus();
    }, 1000);
  });
  $(".button-info").unbind("click");
  $(".button-info").click(function () {
    FILE_COUNTER = $(_this3).attr("data-file-counter");
    $("#box-info").show();

    if (DRIVE_FILES[FILE_COUNTER] != null) {
      var createdDate = new Date(DRIVE_FILES[FILE_COUNTER].createdDate);
      var modifiedDate = new Date(DRIVE_FILES[FILE_COUNTER].modifiedDate);
      $("#spanCreatedDate").html(createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt"));
      $("#spanModifiedDate").html(modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt"));
      $("#spanOwner").html(DRIVE_FILES[FILE_COUNTER].owners[0].displayName.length > 0 ? DRIVE_FILES[FILE_COUNTER].owners[0].displayName : "");
      $("#spanTitle").html(DRIVE_FILES[FILE_COUNTER].title);
      $("#spanSize").html(DRIVE_FILES[FILE_COUNTER].fileSize == null ? "N/A" : formatBytes(DRIVE_FILES[FILE_COUNTER].fileSize));
      $("#spanExtension").html(DRIVE_FILES[FILE_COUNTER].fileExtension == null ? "N/A" : DRIVE_FILES[FILE_COUNTER].fileExtension);
    }
  }); //Initiate the click folder browse icon

  $(".folder-icon").unbind("click");
  $(".folder-icon").click(function () {
    if (DELETE_FROM_TRASH) {
      alert('This folder is in your trash, To view this folder, you will need to restore it from your trash.');
    } else {
      //Browse folders only when folders are not in trash
      browseFolder($(_this3), 0);
    }
  });
  $(".file-icon,.image-icon").unbind("click");
  $(".file-icon,.image-icon").click(function () {
    FILE_COUNTER = $(_this3).attr("data-file-counter");
    $("#spanCreatedDate").html("");
    $("#spanModifiedDate").html("");
    $("#spanOwner").html("");
    $("#spanTitle").html("");
    $("#spanSize").html("");
    $("#spanExtension").html("");

    if (DRIVE_FILES[FILE_COUNTER] != null) {
      var createdDate = new Date(DRIVE_FILES[FILE_COUNTER].createdDate);
      var modifiedDate = new Date(DRIVE_FILES[FILE_COUNTER].modifiedDate);
      $("#spanCreatedDate").html(createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt"));
      $("#spanModifiedDate").html(modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt"));
      $("#spanOwner").html(DRIVE_FILES[FILE_COUNTER].owners[0].displayName.length > 0 ? DRIVE_FILES[FILE_COUNTER].owners[0].displayName : "");
      $("#spanTitle").html(DRIVE_FILES[FILE_COUNTER].title);
      $("#spanSize").html(DRIVE_FILES[FILE_COUNTER].fileSize == null ? "N/A" : formatBytes(DRIVE_FILES[FILE_COUNTER].fileSize));
      $("#spanExtension").html(DRIVE_FILES[FILE_COUNTER].fileExtension);
    }
  }); //Initiate the breadcrumb navigation link click

  $("#drive-breadcrumb a").unbind("click");
  $("#drive-breadcrumb a").click(function () {
    browseFolder($(_this3), 1);
  });
}

; //browse folder

function browseFolder(obj, flag) {
  FOLDER_ID = $(obj).attr("data-id");
  FOLDER_NAME = $(obj).attr("data-name");
  FOLDER_LEVEL = parseInt($(obj).attr("data-level"));
  FOLDER_PERMISSION = $(obj).attr("data-has-permission"); //-------------------------------------------------------------
  //Clear all before Insert

  $("#spanCreatedDate").html("");
  $("#spanModifiedDate").html("");
  $("#spanOwner").html("");
  $("#spanTitle").html("");
  $("#spanSize").html("");
  $("#spanExtension").html("");

  if (flag == 0) {
    FILE_COUNTER = $(obj).attr("data-file-counter");

    if (DRIVE_FILES[FILE_COUNTER] != null) {
      var createdDate = new Date(DRIVE_FILES[FILE_COUNTER].createdDate);
      var modifiedDate = new Date(DRIVE_FILES[FILE_COUNTER].modifiedDate);
      $("#spanCreatedDate").html(createdDate.toString("dddd, d MMMM yyyy h:mm:ss tt"));
      $("#spanModifiedDate").html(modifiedDate.toString("dddd, d MMMM yyyy h:mm:ss tt"));
      $("#spanOwner").html(DRIVE_FILES[FILE_COUNTER].owners[0].displayName.length > 0 ? DRIVE_FILES[FILE_COUNTER].owners[0].displayName : "");
      $("#spanTitle").html(DRIVE_FILES[FILE_COUNTER].title);
      $("#spanSize").html(DRIVE_FILES[FILE_COUNTER].fileSize == null ? "N/A" : formatBytes(DRIVE_FILES[FILE_COUNTER].fileSize));
      $("#spanExtension").html(DRIVE_FILES[FILE_COUNTER].fileExtension);
    }
  } else {
    var spanCreatedDate = $(obj).attr("spanCreatedDate");
    var spanModifiedDate = $(obj).attr("spanModifiedDate");
    var spanOwner = $(obj).attr("spanOwner");
    var spanTitle = $(obj).attr("spanTitle");
    var spanSize = $(obj).attr("spanSize");
    var spanExtension = $(obj).attr("spanExtension");
    $("#spanCreatedDate").html(spanCreatedDate);
    $("#spanModifiedDate").html(spanModifiedDate);
    $("#spanOwner").html(spanOwner);
    $("#spanTitle").html(spanTitle);
    $("#spanSize").html(spanSize);
    $("#spanExtension").html(spanExtension);
  } //-----------------------------------------------------------------------------------------------------------


  if (typeof FOLDER_NAME === "undefined") {
    FOLDER_NAME = "";
    FOLDER_ID = "root";
    FOLDER_LEVEL = 0;
    FOLDER_PERMISSION = true;
    FOLDER_ARRAY = [];
    $("#box-info").css('display', 'none');
  } else {
    if (FOLDER_LEVEL == FOLDER_ARRAY.length && FOLDER_LEVEL > 0) {//do nothing
    } else if (FOLDER_LEVEL < FOLDER_ARRAY.length) {
      var tmpArray = cloneObject(FOLDER_ARRAY);
      FOLDER_ARRAY = [];

      for (var i = 0; i < tmpArray.length; i++) {
        FOLDER_ARRAY.push(tmpArray[i]);

        if (tmpArray[i].Level >= FOLDER_LEVEL) {
          break;
        }
      }
    } else {
      //breadcrumb navigation data insert
      var fd = {
        Name: FOLDER_NAME,
        ID: FOLDER_ID,
        Level: FOLDER_LEVEL,
        Permission: FOLDER_PERMISSION,
        Title: $("#spanTitle").html(),
        CreatedDate: $("#spanCreatedDate").html(),
        ModifiedDate: $("#spanModifiedDate").html(),
        Owner: $("#spanOwner").html(),
        Size: $("#spanSize").html(),
        Extension: $("#spanExtension").html()
      };
      FOLDER_ARRAY.push(fd);
    }
  }

  var sbNav = "";

  for (var i = 0; i < FOLDER_ARRAY.length; i++) {
    sbNav += "<span class='breadcrumb-arrow'></span>";
    sbNav += "<span class='folder-name'><a  spanCreatedDate='" + FOLDER_ARRAY[i].CreatedDate + "' spanModifiedDate='" + FOLDER_ARRAY[i].ModifiedDate + "' spanOwner='" + FOLDER_ARRAY[i].Owner + "' spanSize='" + FOLDER_ARRAY[i].Size + "' spanExtension='" + FOLDER_ARRAY[i].Extension + "' spanTitle='" + FOLDER_ARRAY[i].Title + "' data-id='" + FOLDER_ARRAY[i].ID + "' data-level='" + FOLDER_ARRAY[i].Level + "' data-name='" + FOLDER_ARRAY[i].Name + "' data-has-permission='" + FOLDER_PERMISSION + "'>" + FOLDER_ARRAY[i].Name + "</a></span>";
  }

  $("#span-navigation").html(sbNav.toString());
  showLoading();
  showStatus("Loading Google Drive files...");
  getDriveFiles();
}

; // to clone an object

function cloneObject(obj) {
  if (obj === null || _typeof(obj) !== 'object') {
    return obj;
  }

  var temp = obj.constructor();

  for (var key in obj) {
    temp[key] = cloneObject(obj[key]);
  }

  return temp;
}

; //show whether the display mode is share files or not

function ifShowSharedFiles() {
  return $("#button-share.flash").length > 0 ? true : false;
}

;

function ifShowTrashFiles() {
  return $("#button-trash.flash").length > 0 ? true : false;
}

; // to return bytes into different string data format

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " Bytes";else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";else return (bytes / 1073741824).toFixed(3) + " GB";
}

;
/******************** END DRIVER API ********************/

/******************** NOTIFICATION ********************/
//show loading animation

function showLoading() {
  if ($("#drive-box-loading").length === 0) {
    $("#drive-box").prepend("<div id='drive-box-loading'></div>");
  }

  $("#drive-box-loading").html("<div id='loading-wrapper'><div id='loading'><img src='../Images/loading.gif'></div></div>");
}

; //hide loading animation

function hideLoading() {
  $("#drive-box-loading").html("");
}

; //show status message

function showStatus(text) {
  $("#status-message").show();
  $("#status-message").html(text);
}

; //hide status message

function hideStatus() {
  $("#status-message").hide();
  $("#status-message").html("");
}

; //show upload progress

function showProgressPercentage(percentageValue) {
  if ($("#upload-percentage").length == 0) {
    $("#drive-box").prepend("<div id='upload-percentage' class='flash'></div>");
  }

  if (!$("#upload-percentage").is(":visible")) {
    $("#upload-percentage").show(1000);
  }

  $("#upload-percentage").html(percentageValue.toString() + "%");
}

; //show error message

function showErrorMessage(errorMessage) {
  $("#error-message").html(errorMessage);
  $("#error-message").show(100);
  setTimeout(function () {
    $("#error-message").hide(100);
  }, 3000);
}
/******************** END NOTIFICATION ********************/


$(function () {
  $("#button-reload").click(function () {
    showLoading();
    showStatus("Loading Google Drive files...");
    getDriveFiles();
  });
  $("#button-upload").click(function () {
    $("#box-UploadFile").show();
  });
  $("#fUpload").bind("change", function () {
    var uploadObj = $("[id$=fUpload]");
    showLoading();
    showStatus("Uploading file in progress...");
    var file = uploadObj.prop("files")[0];
    var metadata = {
      'title': file.name,
      'description': "File Upload",
      'mimeType': file.type || 'application/octet-stream',
      "parents": [{
        "kind": "drive#file",
        "id": FOLDER_ID
      }]
    }; //if user upload an empty content, create a temp blob with a space content on it.

    if (file.size <= 0) {
      var emptyContent = " ";
      file = new Blob([emptyContent], {
        type: file.type || 'application/octet-stream'
      });
    }

    showProgressPercentage(0);

    try {
      var uploader = new MediaUploader({
        file: file,
        token: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token,
        metadata: metadata,
        onError: function onError(response) {
          var errorResponse = JSON.parse(response);
          showErrorMessage("Error: " + errorResponse.error.message);
          $("#fUpload").val("");
          $("#upload-percentage").hide(1000);
          getDriveFiles();
        },
        onComplete: function onComplete(response) {
          hideStatus();
          $("#upload-percentage").hide(1000);
          var errorResponse = JSON.parse(response);

          if (errorResponse.message != null) {
            showErrorMessage("Error: " + errorResponse.error.message);
            $("#fUpload").val("");
            getDriveFiles();
          } else {
            showStatus("Loading Google Drive files...");
            getDriveFiles();
          }
        },
        onProgress: function onProgress(event) {
          showProgressPercentage(Math.round(event.loaded / event.total * 100, 0));
        },
        params: {
          convert: false,
          ocr: false
        }
      });
      uploader.upload();
    } catch (exc) {
      showErrorMessage("Error: " + exc);
      $("#fUpload").val("");
      getDriveFiles();
    }
  });
  $("#button-share").click(function () {
    FOLDER_NAME = "";
    FOLDER_ID = "root";
    FOLDER_LEVEL = 0;
    FOLDER_ARRAY = [];
    $("#span-navigation").html("");
    $(this).toggleClass("flash");

    if ($(this).attr("class").indexOf("flash") >= 0) {
      $("#span-sharemode").html("ON");
    } else {
      $("#span-sharemode").html("OFF");
    }

    showLoading();
    showStatus("Loading Google Drive files...");
    getDriveFiles();
  });
  $("#button-trash").click(function () {
    FOLDER_NAME = "";
    FOLDER_ID = "root";
    FOLDER_LEVEL = 0;
    FOLDER_ARRAY = [];
    $("#span-navigation").html("");
    $(this).toggleClass("flash");

    if ($(this).attr("class").indexOf("flash") >= 0) {
      $("#span-sharemode").html("ON");
    } else {
      $("#span-sharemode").html("OFF");
    }

    showLoading();
    showStatus("Loading Google Drive files...");
    getDriveFiles();
  });
  $("#button-addfolder").click(function () {
    $("#box-AddFolder").show();
    $("#txtFolder").val("");
  });
  $("#btnAddFolder").click(function () {
    if ($("#txtFolder").val() == "") {
      alert("Please enter the folder name");
    } else {
      //$("#box-AddFolder").hide();
      showLoading();
      showStatus("Creating folder in progress...");
      var access_token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
      var request = gapi.client.request({
        'path': '/drive/v2/files/',
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token
        },
        'body': {
          "title": $("#txtFolder").val(),
          "mimeType": "application/vnd.google-apps.folder",
          "parents": [{
            "kind": "drive#file",
            "id": FOLDER_ID
          }]
        }
      });
      request.execute(function (resp) {
        if (!resp.error) {
          showStatus("Loading Google Drive files...");
          getDriveFiles();
        } else {
          hideStatus();
          hideLoading();
          showErrorMessage("Error: " + resp.error.message);
        }
      });
    }
  });
  $("#imgCloseInfo").click(function () {
    $("#box-info").css('display', 'none');
  });
  $("#imgCloseAddFolder").click(function () {
    $("#box-AddFolder").css('display', 'none');
  });
  $("#imgCloseAddFile").click(function () {
    $("#box-UploadFile").css('display', 'none');
  });
});

/***/ }),

/***/ "./resources/js/services/gapi.js":
/*!***************************************!*\
  !*** ./resources/js/services/gapi.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function () {
  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var g = this || self,
      h = function h(a) {
    return a;
  };
  /*
  gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/


  var m = window,
      n = document,
      aa = m.location,
      ba = function ba() {},
      ca = /\[native code\]/,
      q = function q(a, b, c) {
    return a[b] = a[b] || c;
  },
      da = function da(a) {
    a = a.sort();

    for (var b = [], c = void 0, d = 0; d < a.length; d++) {
      var e = a[d];
      e != c && b.push(e);
      c = e;
    }

    return b;
  },
      v = function v() {
    var a;
    if ((a = Object.create) && ca.test(a)) a = a(null);else {
      a = {};

      for (var b in a) {
        a[b] = void 0;
      }
    }
    return a;
  },
      x = q(m, "gapi", {});

  var C;
  C = q(m, "___jsl", v());
  q(C, "I", 0);
  q(C, "hel", 10);

  var D = function D() {
    var a = aa.href;
    if (C.dpo) var b = C.h;else {
      b = C.h;
      var c = /([#].*&|[#])jsh=([^&#]*)/g,
          d = /([?#].*&|[?#])jsh=([^&#]*)/g;
      if (a = a && (c.exec(a) || d.exec(a))) try {
        b = decodeURIComponent(a[2]);
      } catch (e) {}
    }
    return b;
  },
      fa = function fa(a) {
    var b = q(C, "PQ", []);
    C.PQ = [];
    var c = b.length;
    if (0 === c) a();else for (var d = 0, e = function e() {
      ++d === c && a();
    }, f = 0; f < c; f++) {
      b[f](e);
    }
  },
      E = function E(a) {
    return q(q(C, "H", v()), a, v());
  };

  var F = q(C, "perf", v()),
      G = q(F, "g", v()),
      ha = q(F, "i", v());
  q(F, "r", []);
  v();
  v();

  var H = function H(a, b, c) {
    var d = F.r;
    "function" === typeof d ? d(a, b, c) : d.push([a, b, c]);
  },
      L = function L(a, b, c) {
    b && 0 < b.length && (b = K(b), c && 0 < c.length && (b += "___" + K(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = q(ha, "_p", v()), q(b, c, v())[a] = new Date().getTime(), H(a, "_p", c));
  },
      K = function K(a) {
    return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_");
  };

  var M = v(),
      N = [],
      Q = function Q(a) {
    throw Error("Bad hint" + (a ? ": " + a : ""));
  };

  N.push(["jsl", function (a) {
    for (var b in a) {
      if (Object.prototype.hasOwnProperty.call(a, b)) {
        var c = a[b];
        "object" == _typeof(c) ? C[b] = q(C, b, []).concat(c) : q(C, b, c);
      }
    }

    if (b = a.u) a = q(C, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1]);
  }]);

  var ia = /^(\/[a-zA-Z0-9_\-]+)+$/,
      R = [/\/amp\//, /\/amp$/, /^\/amp$/],
      ja = /^[a-zA-Z0-9\-_\.,!]+$/,
      ka = /^gapi\.loaded_[0-9]+$/,
      la = /^[a-zA-Z0-9,._-]+$/,
      pa = function pa(a, b, c, d) {
    var e = a.split(";"),
        f = e.shift(),
        l = M[f],
        k = null;
    l ? k = l(e, b, c, d) : Q("no hint processor for: " + f);
    k || Q("failed to generate load url");
    b = k;
    c = b.match(ma);
    (d = b.match(na)) && 1 === d.length && oa.test(b) && c && 1 === c.length || Q("failed sanity: " + a);
    return k;
  },
      ra = function ra(a, b, c, d) {
    a = qa(a);
    ka.test(c) || Q("invalid_callback");
    b = S(b);
    d = d && d.length ? S(d) : null;

    var e = function e(f) {
      return encodeURIComponent(f).replace(/%2C/g, ",");
    };

    return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.a ? "/am=" + e(a.a) : "", a.c ? "/rs=" + e(a.c) : "", a.f ? "/t=" + e(a.f) : "", "/cb=", e(c)].join("");
  },
      qa = function qa(a) {
    "/" !== a.charAt(0) && Q("relative path");

    for (var b = a.substring(1).split("/"), c = []; b.length;) {
      a = b.shift();
      if (!a.length || 0 == a.indexOf(".")) Q("empty/relative directory");else if (0 < a.indexOf("=")) {
        b.unshift(a);
        break;
      }
      c.push(a);
    }

    a = {};

    for (var d = 0, e = b.length; d < e; ++d) {
      var f = b[d].split("="),
          l = decodeURIComponent(f[0]),
          k = decodeURIComponent(f[1]);
      2 == f.length && l && k && (a[l] = a[l] || k);
    }

    b = "/" + c.join("/");
    ia.test(b) || Q("invalid_prefix");
    c = 0;

    for (d = R.length; c < d; ++c) {
      R[c].test(b) && Q("invalid_prefix");
    }

    c = T(a, "k", !0);
    d = T(a, "am");
    e = T(a, "rs");
    a = T(a, "t");
    return {
      pathPrefix: b,
      version: c,
      a: d,
      c: e,
      f: a
    };
  },
      S = function S(a) {
    for (var b = [], c = 0, d = a.length; c < d; ++c) {
      var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
      la.test(e) && b.push(e);
    }

    return b.join(",");
  },
      T = function T(a, b, c) {
    a = a[b];
    !a && c && Q("missing: " + b);

    if (a) {
      if (ja.test(a)) return a;
      Q("invalid: " + b);
    }

    return null;
  },
      oa = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
      na = /\/cb=/g,
      ma = /\/\//g,
      sa = function sa() {
    var a = D();
    if (!a) throw Error("Bad hint");
    return a;
  };

  M.m = function (a, b, c, d) {
    (a = a[0]) || Q("missing_hint");
    return "https://apis.google.com" + ra(a, b, c, d);
  };

  var U = decodeURI("%73cript"),
      V = /^[-+_0-9\/A-Za-z]+={0,2}$/,
      W = function W(a, b) {
    for (var c = [], d = 0; d < a.length; ++d) {
      var e = a[d],
          f;

      if (f = e) {
        a: {
          for (f = 0; f < b.length; f++) {
            if (b[f] === e) break a;
          }

          f = -1;
        }

        f = 0 > f;
      }

      f && c.push(e);
    }

    return c;
  },
      X = function X() {
    var a = C.nonce;
    return void 0 !== a ? a && a === String(a) && a.match(V) ? a : C.nonce = null : n.querySelector ? (a = n.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(V) ? C.nonce = a : C.nonce = null) : null : null;
  },
      ua = function ua(a) {
    if ("loading" != n.readyState) ta(a);else {
      var b = X(),
          c = "";
      null !== b && (c = ' nonce="' + b + '"');
      a = "<" + U + ' src="' + encodeURI(a) + '"' + c + "></" + U + ">";
      n.write(Y ? Y.createHTML(a) : a);
    }
  },
      ta = function ta(a) {
    var b = n.createElement(U);
    b.setAttribute("src", Y ? Y.createScriptURL(a) : a);
    a = X();
    null !== a && b.setAttribute("nonce", a);
    b.async = "true";
    (a = n.getElementsByTagName(U)[0]) ? a.parentNode.insertBefore(b, a) : (n.head || n.body || n.documentElement).appendChild(b);
  },
      va = function va(a, b) {
    var c = b && b._c;
    if (c) for (var d = 0; d < N.length; d++) {
      var e = N[d][0],
          f = N[d][1];
      f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b);
    }
  },
      xa = function xa(a, b, c) {
    wa(function () {
      var d = b === D() ? q(x, "_", v()) : v();
      d = q(E(b), "_", d);
      a(d);
    }, c);
  },
      za = function za(a, b) {
    var c = b || {};
    "function" == typeof b && (c = {}, c.callback = b);
    va(a, c);
    b = a ? a.split(":") : [];
    var d = c.h || sa(),
        e = q(C, "ah", v());

    if (e["::"] && b.length) {
      a = [];

      for (var f = null; f = b.shift();) {
        var l = f.split(".");
        l = e[f] || e[l[1] && "ns:" + l[0] || ""] || d;
        var k = a.length && a[a.length - 1] || null,
            w = k;
        k && k.hint == l || (w = {
          hint: l,
          b: []
        }, a.push(w));
        w.b.push(f);
      }

      var y = a.length;

      if (1 < y) {
        var z = c.callback;
        z && (c.callback = function () {
          0 == --y && z();
        });
      }

      for (; b = a.shift();) {
        ya(b.b, c, b.hint);
      }
    } else ya(b || [], c, d);
  },
      ya = function ya(a, b, c) {
    a = da(a) || [];
    var d = b.callback,
        e = b.config,
        f = b.timeout,
        l = b.ontimeout,
        k = b.onerror,
        w = void 0;
    "function" == typeof k && (w = k);
    var y = null,
        z = !1;
    if (f && !l || !f && l) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
    k = q(E(c), "r", []).sort();

    var O = q(E(c), "L", []).sort(),
        I = [].concat(k),
        ea = function ea(u, A) {
      if (z) return 0;
      m.clearTimeout(y);
      O.push.apply(O, p);
      var B = ((x || {}).config || {}).update;
      B ? B(e) : e && q(C, "cu", []).push(e);

      if (A) {
        L("me0", u, I);

        try {
          xa(A, c, w);
        } finally {
          L("me1", u, I);
        }
      }

      return 1;
    };

    0 < f && (y = m.setTimeout(function () {
      z = !0;
      l();
    }, f));
    var p = W(a, O);

    if (p.length) {
      p = W(a, k);
      var r = q(C, "CP", []),
          t = r.length;

      r[t] = function (u) {
        if (!u) return 0;
        L("ml1", p, I);

        var A = function A(J) {
          r[t] = null;
          ea(p, u) && fa(function () {
            d && d();
            J();
          });
        },
            B = function B() {
          var J = r[t + 1];
          J && J();
        };

        0 < t && r[t - 1] ? r[t] = function () {
          A(B);
        } : A(B);
      };

      if (p.length) {
        var P = "loaded_" + C.I++;

        x[P] = function (u) {
          r[t](u);
          x[P] = null;
        };

        a = pa(c, p, "gapi." + P, k);
        k.push.apply(k, p);
        L("ml0", p, I);
        b.sync || m.___gapisync ? ua(a) : ta(a);
      } else r[t](ba);
    } else ea(p) && d && d();
  },
      Aa;

  var Ba = null,
      Z = g.trustedTypes;
  if (Z && Z.createPolicy) try {
    Ba = Z.createPolicy("gapi#gapi", {
      createHTML: h,
      createScript: h,
      createScriptURL: h
    });
  } catch (a) {
    g.console && g.console.error(a.message);
  }
  Aa = Ba;
  var Y = Aa;

  var wa = function wa(a, b) {
    if (C.hee && 0 < C.hel) try {
      return a();
    } catch (c) {
      b && b(c), C.hel--, za("debug_error", function () {
        try {
          window.___jsl.hefn(c);
        } catch (d) {
          throw c;
        }
      });
    } else try {
      return a();
    } catch (c) {
      throw b && b(c), c;
    }
  };

  x.load = function (a, b) {
    return wa(function () {
      return za(a, b);
    });
  };

  G.bs0 = window.gapi._bs || new Date().getTime();
  H("bs0");
  G.bs1 = new Date().getTime();
  H("bs1");
  delete window.gapi._bs;
}).call(this);
gapi.load("", {
  callback: window["gapi_onload"],
  _c: {
    "jsl": {
      "ci": {
        "deviceType": "desktop",
        "oauth-flow": {
          "authUrl": "https://accounts.google.com/o/oauth2/auth",
          "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
          "disableOpt": true,
          "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
          "usegapi": false
        },
        "debug": {
          "reportExceptionRate": 0.05,
          "forceIm": false,
          "rethrowException": false,
          "host": "https://apis.google.com"
        },
        "enableMultilogin": true,
        "googleapis.config": {
          "auth": {
            "useFirstPartyAuthV2": true
          }
        },
        "isPlusUser": false,
        "inline": {
          "css": 1
        },
        "disableRealtimeCallback": false,
        "drive_share": {
          "skipInitCommand": true
        },
        "csi": {
          "rate": 0.01
        },
        "client": {
          "cors": false
        },
        "isLoggedIn": true,
        "signInDeprecation": {
          "rate": 0.0
        },
        "include_granted_scopes": true,
        "llang": "en",
        "iframes": {
          "youtube": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
            "methods": ["scroll", "openwindow"]
          },
          "ytsubscribe": {
            "url": "https://www.youtube.com/subscribe_embed?usegapi=1"
          },
          "plus_circle": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
          },
          "plus_share": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
          },
          "rbr_s": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
          },
          ":source:": "3p",
          "playemm": {
            "url": "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
          },
          "savetoandroidpay": {
            "url": "https://pay.google.com/gp/v/widget/save"
          },
          "blogger": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
            "methods": ["scroll", "openwindow"]
          },
          "evwidget": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
          },
          "partnersbadge": {
            "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
          },
          "dataconnector": {
            "url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
          },
          "surveyoptin": {
            "url": "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
          },
          ":socialhost:": "https://apis.google.com",
          "shortlists": {
            "url": ""
          },
          "hangout": {
            "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
          },
          "plus_followers": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
          },
          "post": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
          },
          ":gplus_url:": "https://plus.google.com",
          "signin": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
            "methods": ["onauth"]
          },
          "rbr_i": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
          },
          "share": {
            "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
          },
          "plusone": {
            "params": {
              "count": "",
              "size": "",
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
          },
          "comments": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
            "methods": ["scroll", "openwindow"]
          },
          ":im_socialhost:": "https://plus.googleapis.com",
          "backdrop": {
            "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
          },
          "visibility": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
          },
          "autocomplete": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
          },
          "additnow": {
            "url": "https://apis.google.com/marketplace/button?usegapi=1",
            "methods": ["launchurl"]
          },
          ":signuphost:": "https://plus.google.com",
          "ratingbadge": {
            "url": "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
          },
          "appcirclepicker": {
            "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
          },
          "follow": {
            "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
          },
          "community": {
            "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
          },
          "sharetoclassroom": {
            "url": "https://classroom.google.com/sharewidget?usegapi=1"
          },
          "ytshare": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
          },
          "plus": {
            "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
          },
          "family_creation": {
            "params": {
              "url": ""
            },
            "url": "https://families.google.com/webcreation?usegapi=1&usegapi=1"
          },
          "commentcount": {
            "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
          },
          "configurator": {
            "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
          },
          "zoomableimage": {
            "url": "https://ssl.gstatic.com/microscope/embed/"
          },
          "appfinder": {
            "url": "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
          },
          "savetowallet": {
            "url": "https://pay.google.com/gp/v/widget/save"
          },
          "person": {
            "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
          },
          "savetodrive": {
            "url": "https://drive.google.com/savetodrivebutton?usegapi=1",
            "methods": ["save"]
          },
          "page": {
            "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
          },
          "card": {
            "url": ":socialhost:/:session_prefix:_/hovercard/card"
          }
        }
      },
      "h": "m;/_/scs/apps-static/_/js/k=oz.gapi.en.X8eNpfbhSO4.O/am=wQE/d=1/ct=zgms/rs=AGLTcCMR_96uYzPfkrcqh5Ji4P5RQoxTGg/m=__features__",
      "u": "https://apis.google.com/js/api.js",
      "hee": true,
      "fp": "d08dd10e26ebef05ae0ad84dddb27832e4e9bc74",
      "dpo": false
    },
    "fp": "d08dd10e26ebef05ae0ad84dddb27832e4e9bc74",
    "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
    "bimodal": ["signin", "share"]
  }
});

/***/ }),

/***/ "./resources/js/services/lightbox.min.js":
/*!***********************************************!*\
  !*** ./resources/js/services/lightbox.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Lightbox v2.7.1
 * by Lokesh Dhakar - http://lokeshdhakar.com/projects/lightbox2/
 *
 * @license http://creativecommons.org/licenses/by/2.5/
 * - Free for use in both personal and commercial projects
 * - Attribution requires leaving author name, author link, and the license info intact
 */
(function () {
  var a = jQuery,
      b = function () {
    function a() {
      this.fadeDuration = 500, this.fitImagesInViewport = !0, this.resizeDuration = 700, this.positionFromTop = 50, this.showImageNumberLabel = !0, this.alwaysShowNavOnTouchDevices = !1, this.wrapAround = !1;
    }

    return a.prototype.albumLabel = function (a, b) {
      return "Image " + a + " of " + b;
    }, a;
  }(),
      c = function () {
    function b(a) {
      this.options = a, this.album = [], this.currentImageIndex = void 0, this.init();
    }

    return b.prototype.init = function () {
      this.enable(), this.build();
    }, b.prototype.enable = function () {
      var b = this;
      a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (c) {
        return b.start(a(c.currentTarget)), !1;
      });
    }, b.prototype.build = function () {
      var b = this;
      a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function () {
        return b.end(), !1;
      }), this.$lightbox.hide().on("click", function (c) {
        return "lightbox" === a(c.target).attr("id") && b.end(), !1;
      }), this.$outerContainer.on("click", function (c) {
        return "lightbox" === a(c.target).attr("id") && b.end(), !1;
      }), this.$lightbox.find(".lb-prev").on("click", function () {
        return b.changeImage(0 === b.currentImageIndex ? b.album.length - 1 : b.currentImageIndex - 1), !1;
      }), this.$lightbox.find(".lb-next").on("click", function () {
        return b.changeImage(b.currentImageIndex === b.album.length - 1 ? 0 : b.currentImageIndex + 1), !1;
      }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
        return b.end(), !1;
      });
    }, b.prototype.start = function (b) {
      function c(a) {
        d.album.push({
          link: a.attr("href"),
          title: a.attr("data-title") || a.attr("title")
        });
      }

      var d = this,
          e = a(window);
      e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({
        visibility: "hidden"
      }), this.sizeOverlay(), this.album = [];
      var f,
          g = 0,
          h = b.attr("data-lightbox");

      if (h) {
        f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');

        for (var i = 0; i < f.length; i = ++i) {
          c(a(f[i])), f[i] === b[0] && (g = i);
        }
      } else if ("lightbox" === b.attr("rel")) c(b);else {
        f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');

        for (var j = 0; j < f.length; j = ++j) {
          c(a(f[j])), f[j] === b[0] && (g = j);
        }
      }

      var k = e.scrollTop() + this.options.positionFromTop,
          l = e.scrollLeft();
      this.$lightbox.css({
        top: k + "px",
        left: l + "px"
      }).fadeIn(this.options.fadeDuration), this.changeImage(g);
    }, b.prototype.changeImage = function (b) {
      var c = this;
      this.disableKeyboardNav();
      var d = this.$lightbox.find(".lb-image");
      this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
      var e = new Image();
      e.onload = function () {
        var f, g, h, i, j, k, l;
        d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20, i = k - c.containerTopPadding - c.containerBottomPadding - 120, (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height());
      }, e.src = this.album[b].link, this.currentImageIndex = b;
    }, b.prototype.sizeOverlay = function () {
      this.$overlay.width(a(window).width()).height(a(document).height());
    }, b.prototype.sizeContainer = function (a, b) {
      function c() {
        d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage();
      }

      var d = this,
          e = this.$outerContainer.outerWidth(),
          f = this.$outerContainer.outerHeight(),
          g = a + this.containerLeftPadding + this.containerRightPadding,
          h = b + this.containerTopPadding + this.containerBottomPadding;
      e !== g || f !== h ? this.$outerContainer.animate({
        width: g,
        height: h
      }, this.options.resizeDuration, "swing", function () {
        c();
      }) : c();
    }, b.prototype.showImage = function () {
      this.$lightbox.find(".lb-loader").hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
    }, b.prototype.updateNav = function () {
      var a = !1;

      try {
        document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1;
      } catch (b) {}

      this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))));
    }, b.prototype.updateDetails = function () {
      var b = this;
      "undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function () {
        location.href = a(this).attr("href");
      }), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
        return b.sizeOverlay();
      });
    }, b.prototype.preloadNeighboringImages = function () {
      if (this.album.length > this.currentImageIndex + 1) {
        var a = new Image();
        a.src = this.album[this.currentImageIndex + 1].link;
      }

      if (this.currentImageIndex > 0) {
        var b = new Image();
        b.src = this.album[this.currentImageIndex - 1].link;
      }
    }, b.prototype.enableKeyboardNav = function () {
      a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this));
    }, b.prototype.disableKeyboardNav = function () {
      a(document).off(".keyboard");
    }, b.prototype.keyboardAction = function (a) {
      var b = 27,
          c = 37,
          d = 39,
          e = a.keyCode,
          f = String.fromCharCode(e).toLowerCase();
      e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
    }, b.prototype.end = function () {
      this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
        visibility: "visible"
      });
    }, b;
  }();

  a(function () {
    {
      var a = new b();
      new c(a);
    }
  });
}).call(this);

/***/ }),

/***/ "./resources/js/services/upload.js":
/*!*****************************************!*\
  !*** ./resources/js/services/upload.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Helper for implementing retries with backoff. Initial retry
* delay is 1 second, increasing by 2x (+jitter) for subsequent retries
*
* @constructor
*/
var RetryHandler = function RetryHandler() {
  this.interval = 1000; // Start at one second

  this.maxInterval = 60 * 1000; // Don't wait longer than a minute 
};
/**
* Invoke the function after waiting
*
* @param {function} fn Function to invoke
*/


RetryHandler.prototype.retry = function (fn) {
  setTimeout(fn, this.interval);
  this.interval = this.nextInterval_();
};
/**
* Reset the counter (e.g. after successful request.)
*/


RetryHandler.prototype.reset = function () {
  this.interval = 1000;
};
/**
* Calculate the next wait time.
* @return {number} Next wait interval, in milliseconds
*
* @private
*/


RetryHandler.prototype.nextInterval_ = function () {
  var interval = this.interval * 2 + this.getRandomInt_(0, 1000);
  return Math.min(interval, this.maxInterval);
};
/**
* Get a random int in the range of min to max. Used to add jitter to wait times.
*
* @param {number} min Lower bounds
* @param {number} max Upper bounds
* @private
*/


RetryHandler.prototype.getRandomInt_ = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
/**
* Helper class for resumable uploads using XHR/CORS. Can upload any Blob-like item, whether
* files or in-memory constructs.
*
* @example
* var content = new Blob(["Hello world"], {"type": "text/plain"});
* var uploader = new MediaUploader({
*   file: content,
*   token: accessToken,
*   onComplete: function(data) { ... }
*   onError: function(data) { ... }
* });
* uploader.upload();
*
* @constructor
* @param {object} options Hash of options
* @param {string} options.token Access token
* @param {blob} options.file Blob-like item to upload
* @param {string} [options.fileId] ID of file if replacing
* @param {object} [options.params] Additional query parameters
* @param {string} [options.contentType] Content-type, if overriding the type of the blob.
* @param {object} [options.metadata] File metadata
* @param {function} [options.onComplete] Callback for when upload is complete
* @param {function} [options.onProgress] Callback for status for the in-progress upload
* @param {function} [options.onError] Callback if upload fails
*/


var MediaUploader = function MediaUploader(options) {
  var noop = function noop() {};

  this.file = options.file;
  this.contentType = options.contentType || this.file.type || 'application/octet-stream';
  this.metadata = options.metadata || {
    'title': this.file.name,
    'mimeType': this.contentType
  };
  this.token = options.token;
  this.onComplete = options.onComplete || noop;
  this.onProgress = options.onProgress || noop;
  this.onError = options.onError || noop;
  this.offset = options.offset || 0;
  this.chunkSize = options.chunkSize || 0;
  this.retryHandler = new RetryHandler();
  this.url = options.url;

  if (!this.url) {
    var params = options.params || {};
    params.uploadType = 'resumable';
    this.url = this.buildUrl_(options.fileId, params, options.baseUrl);
  }

  this.httpMethod = options.fileId ? 'PUT' : 'POST';
};
/**
* Initiate the upload.
*/


MediaUploader.prototype.upload = function () {
  var self = this;
  var xhr = new XMLHttpRequest();
  xhr.open(this.httpMethod, this.url, true);
  xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('X-Upload-Content-Length', this.file.size);
  xhr.setRequestHeader('X-Upload-Content-Type', this.contentType);

  xhr.onload = function (e) {
    if (e.target.status < 400) {
      var location = e.target.getResponseHeader('Location');
      this.url = location;
      this.sendFile_();
    } else {
      this.onUploadError_(e);
    }
  }.bind(this);

  xhr.onerror = this.onUploadError_.bind(this);
  xhr.send(JSON.stringify(this.metadata));
};
/**
* Send the actual file content.
*
* @private
*/


MediaUploader.prototype.sendFile_ = function () {
  var content = this.file;
  var end = this.file.size;

  if (this.offset || this.chunkSize) {
    // Only bother to slice the file if we're either resuming or uploading in chunks
    if (this.chunkSize) {
      end = Math.min(this.offset + this.chunkSize, this.file.size);
    }

    content = content.slice(this.offset, end);
  }

  var xhr = new XMLHttpRequest();
  xhr.open('PUT', this.url, true);
  xhr.setRequestHeader('Content-Type', this.contentType);
  xhr.setRequestHeader('Content-Range', "bytes " + this.offset + "-" + (end - 1) + "/" + this.file.size);
  xhr.setRequestHeader('X-Upload-Content-Type', this.file.type);

  if (xhr.upload) {
    xhr.upload.addEventListener('progress', this.onProgress);
  }

  xhr.onload = this.onContentUploadSuccess_.bind(this);
  xhr.onerror = this.onContentUploadError_.bind(this);
  xhr.send(content);
};
/**
* Query for the state of the file for resumption.
*
* @private
*/


MediaUploader.prototype.resume_ = function () {
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', this.url, true);
  xhr.setRequestHeader('Content-Range', "bytes */" + this.file.size);
  xhr.setRequestHeader('X-Upload-Content-Type', this.file.type);

  if (xhr.upload) {
    xhr.upload.addEventListener('progress', this.onProgress);
  }

  xhr.onload = this.onContentUploadSuccess_.bind(this);
  xhr.onerror = this.onContentUploadError_.bind(this);
  xhr.send();
};
/**
* Extract the last saved range if available in the request.
*
* @param {XMLHttpRequest} xhr Request object
*/


MediaUploader.prototype.extractRange_ = function (xhr) {
  var range = xhr.getResponseHeader('Range');

  if (range) {
    this.offset = parseInt(range.match(/\d+/g).pop(), 10) + 1;
  }
};
/**
* Handle successful responses for uploads. Depending on the context,
* may continue with uploading the next chunk of the file or, if complete,
* invokes the caller's callback.
*
* @private
* @param {object} e XHR event
*/


MediaUploader.prototype.onContentUploadSuccess_ = function (e) {
  if (e.target.status == 200 || e.target.status == 201) {
    this.onComplete(e.target.response);
  } else if (e.target.status == 308) {
    this.extractRange_(e.target);
    this.retryHandler.reset();
    this.sendFile_();
  }
};
/**
* Handles errors for uploads. Either retries or aborts depending
* on the error.
*
* @private
* @param {object} e XHR event
*/


MediaUploader.prototype.onContentUploadError_ = function (e) {
  if (e.target.status && e.target.status < 500) {
    this.onError(e.target.response);
  } else {
    this.retryHandler.retry(this.resume_.bind(this));
  }
};
/**
* Handles errors for the initial request.
*
* @private
* @param {object} e XHR event
*/


MediaUploader.prototype.onUploadError_ = function (e) {
  this.onError(e.target.response); // TODO - Retries for initial upload
};
/**
* Construct a query string from a hash/object
*
* @private
* @param {object} [params] Key/value pairs for query string
* @return {string} query string
*/


MediaUploader.prototype.buildQuery_ = function (params) {
  params = params || {};
  return Object.keys(params).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
};
/**
* Build the drive upload URL
*
* @private
* @param {string} [id] File ID if replacing
* @param {object} [params] Query parameters
* @return {string} URL
*/


MediaUploader.prototype.buildUrl_ = function (id, params, baseUrl) {
  var url = baseUrl || 'https://www.googleapis.com/upload/drive/v2/files/';

  if (id) {
    url += id;
  }

  var query = this.buildQuery_(params);

  if (query) {
    url += '?' + query;
  }

  return url;
};

/***/ })

}]);