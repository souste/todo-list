/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Rajdhani-Regular.ttf */ "./src/Rajdhani-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Rajdhani";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "Rajdhani", sans-serif;
}

#content {
  display: flex;
  justify-content: center;
}

/* MENU BAR */

.menu-container {
  width: 15vw;
  background-color: pink;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 20px;
}

.top-menu-title {
  font-size: 50px;
}

.menu-title {
  font-weight: bold;
  font-size: 30px;
}

.title-button-container {
  display: flex;
  align-items: center;
}

.project-select {
  cursor: pointer;
  color: purple;
}

.new-list-button,
.new-project-button {
  font-size: 70px;
  border: none;
  background-color: pink;
  margin-left: 100px;
  cursor: pointer;
  font-weight: bold;
  width: 3rem;
  height: 2.7rem;
  color: white;
}

.new-project-button {
  font-size: 35px;
  margin-left: 0;
}

.new-list-button:hover,
.new-project-button:hover {
  color: black;
}

/* FORM CONTAINER */

.form-container,
.project-form-container {
  border: 1px solid black;
  background-color: rgb(228, 221, 221);
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 50vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  justify-content: center;
  align-items: center;
}

.project-form-container {
  height: 20vh;
  padding: 10px;
  display: flex;
}

.form-header {
  font-weight: bold;
  font-size: 30px;
}

.label-input-container {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 20px;
  font-weight: bold;
}

input {
  background-color: #ffffff;
  width: 300px;
  padding: 7px;
  border-radius: 3px;
  font-size: 14px;
  border-color: #e5e7eb;
}

/* // LIST CONTAINER */

.lists-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  cursor: pointer;
  padding-top: 50px;
}

.list-container {
  background-color: rgb(228, 221, 221);
  margin: 20px;
  width: 50vw;
  text-align: center;
  display: flex;
  padding-left: 20px;
  gap: 20px;
  align-items: center;
}

.list-title {
  font-weight: bold;
  font-size: 20px;
}

.open-list-title {
  font-weight: bold;
  font-size: 30px;
}

/* // OPEN LIST CONTAINER */

.open-list-container {
  border: 1px solid black;
  background-color: rgb(228, 221, 221);
  width: 40vw;
  height: 40vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* // PROJECT LIST CONTAINER */

.project-header {
  text-align: center;
}

.project-list-button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,+DAAqD;EACrD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA,aAAa;;AAEb;EACE,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,cAAc;EACd,YAAY;AACd;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,YAAY;AACd;;AAEA,mBAAmB;;AAEnB;;EAEE,uBAAuB;EACvB,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,qBAAqB;AACvB;;AAEA,sBAAsB;;AAEtB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA,2BAA2B;;AAE3B;EACE,uBAAuB;EACvB,oCAAoC;EACpC,WAAW;EACX,YAAY;EACZ,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,8BAA8B;;AAE9B;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,2BAA2B;AAC7B","sourcesContent":["@font-face {\r\n  font-family: \"Rajdhani\";\r\n  src: url(\"./Rajdhani-Regular.ttf\") format(\"truetype\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  font-family: \"Rajdhani\", sans-serif;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* MENU BAR */\r\n\r\n.menu-container {\r\n  width: 15vw;\r\n  background-color: pink;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  padding-left: 20px;\r\n}\r\n\r\n.top-menu-title {\r\n  font-size: 50px;\r\n}\r\n\r\n.menu-title {\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n.title-button-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.project-select {\r\n  cursor: pointer;\r\n  color: purple;\r\n}\r\n\r\n.new-list-button,\r\n.new-project-button {\r\n  font-size: 70px;\r\n  border: none;\r\n  background-color: pink;\r\n  margin-left: 100px;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  width: 3rem;\r\n  height: 2.7rem;\r\n  color: white;\r\n}\r\n\r\n.new-project-button {\r\n  font-size: 35px;\r\n  margin-left: 0;\r\n}\r\n\r\n.new-list-button:hover,\r\n.new-project-button:hover {\r\n  color: black;\r\n}\r\n\r\n/* FORM CONTAINER */\r\n\r\n.form-container,\r\n.project-form-container {\r\n  border: 1px solid black;\r\n  background-color: rgb(228, 221, 221);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  height: 50vh;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.project-form-container {\r\n  height: 20vh;\r\n  padding: 10px;\r\n  display: flex;\r\n}\r\n\r\n.form-header {\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n.label-input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nlabel {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput {\r\n  background-color: #ffffff;\r\n  width: 300px;\r\n  padding: 7px;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  border-color: #e5e7eb;\r\n}\r\n\r\n/* // LIST CONTAINER */\r\n\r\n.lists-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 85vw;\r\n  cursor: pointer;\r\n  padding-top: 50px;\r\n}\r\n\r\n.list-container {\r\n  background-color: rgb(228, 221, 221);\r\n  margin: 20px;\r\n  width: 50vw;\r\n  text-align: center;\r\n  display: flex;\r\n  padding-left: 20px;\r\n  gap: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.list-title {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.open-list-title {\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n/* // OPEN LIST CONTAINER */\r\n\r\n.open-list-container {\r\n  border: 1px solid black;\r\n  background-color: rgb(228, 221, 221);\r\n  width: 40vw;\r\n  height: 40vh;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/* // PROJECT LIST CONTAINER */\r\n\r\n.project-header {\r\n  text-align: center;\r\n}\r\n\r\n.project-list-button {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




const content = document.querySelector("#content");

// LOCAL STORAGE - Get from Local Storage

window.addEventListener("load", () => {
  const storedTodos = JSON.parse(localStorage.getItem("myTodoList"));

  if (storedTodos) {
    _todoList_js__WEBPACK_IMPORTED_MODULE_1__.todosArr.push(...storedTodos);

    storedTodos.forEach((todoData) => {
      const loadedTodo = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__.Todo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority,
        "",
        todoData.project
      );
      loadedTodo.renderTodoList();
    });
  }
});

console.log(_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todosArr);

// MENU CONTAINER

const menuContainer = document.createElement("div");
const menuHTML = `

<h1 class="top-menu-title">LIFE'S TODOS</h1>


<p class="menu-title">Home</p>
<p>Today</p>
<p>This Week</p>

<div class="title-button-container">
<p class="menu-title">My Projects</p>
<button class="new-project-button">+</button>
</div>

<p>Get a Job  - hardcoded</p>
<p>Odin Project - hard coded</p>
<p>Fitness - hardcoded</p>


<button class="new-list-button">+</button>


`;

menuContainer.innerHTML = menuHTML;
menuContainer.classList.add("menu-container");
content.appendChild(menuContainer);

const newListButton = document.querySelector(".new-list-button");
newListButton.classList.add("new-list-button");

newListButton.addEventListener("click", (event) => {
  event.preventDefault();
  formContainer.style.display = "flex";
});

const newProjectButton = document.querySelector(".new-project-button");
newProjectButton.classList.add("new-project-button");

newProjectButton.addEventListener("click", (event) => {
  event.preventDefault();
  projectFormContainer.style.display = "flex";
});

// ADD LIST FORM

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");

const formHTML = `
<form action="">
  <p class="form-header">Create Todo Item</p>
  
<div class="label-input-container">
<label for="title">Title:</label>
<input type="text" placeholder="Walk the dog" id="title" name="title">
</div>

<div class="label-input-container">
<label for="description">Description:</label>
<input type="text" placeholder="Description here" id="description" name="description">
</div>

<div class="label-input-container">
<label for="dueDate">Due Date:</label>
<input type="text" placeholder="Need to download that plugin!" id="dueDate" name="dueDate">
</div>

<div class="label-input-container">
<label for="priority">Priority:</label>
<input type="text" placeholder="Need a dropdown here" id="priority" name="priority">
</div>

<button class="add-list-button">Add</button>


</form>
`;

formContainer.innerHTML = formHTML;

content.appendChild(formContainer);
formContainer.style.display = "none";

const addListButton = document.querySelector(".add-list-button");

addListButton.addEventListener("click", addList);

let currentProject = "";

function addList(event) {
  event.preventDefault();
  const listx = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__.Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    "",
    currentProject
  );
  listx.renderTodoList();
  _todoList_js__WEBPACK_IMPORTED_MODULE_1__.todosArr.push(listx);
  formContainer.style.display = "none";
  document.querySelector("form").reset();
  console.log(_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todosArr);

  // Save to localStorage
  localStorage.setItem("myTodoList", JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_1__.todosArr));
  console.log(localStorage.getItem("myTodoList"));
}

// ADD PROJECT FORM

const projectFormContainer = document.createElement("div");
projectFormContainer.classList.add("project-form-container");

const projectFormHTML = `
<form action="">
<p class="form-header">Create New Project</p>
<div>
<label for="name">Name:</label>
<input type="text" placeholder="Get a Job" id="name" name="name">
</div>

<button class="add-project-button">Add</button>
</form>
`;

projectFormContainer.innerHTML = projectFormHTML;

content.appendChild(projectFormContainer);
projectFormContainer.style.display = "none";

const addProjectButton = document.querySelector(".add-project-button");

addProjectButton.addEventListener("click", (event) => {
  event.preventDefault();
  const projectNameInput = document.querySelector("#name");
  currentProject = projectNameInput.value;

  const newProject = document.createElement("p");

  newProject.innerText = projectNameInput.value;
  newProject.classList.add("project-select");
  newProject.id = `${projectNameInput.value}`;

  menuContainer.appendChild(newProject);

  projectFormContainer.style.display = "none";

  newProject.addEventListener("click", (0,_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectNameInput.value));
});

// DUMMY LIST - CAN EVENTUALLY BE REMOVED

// const topic = new Todo(
//   "Coding Project",
//   "Need to have it complete by the end of next week",
//   "27/11/2023",
//   "High"
// );

// const topic2 = new Todo(
//   "Going for a run",
//   "Need to go for the run of my life",
//   "25/11/2023",
//   "Medium"
// );

// const topic3 = new Todo(
//   "Connect with people in the job market",
//   "Need to get outside my confort zone and start talking to people since the job boards are too saturated",
//   "22/12/2023",
//   "High"
// );

// topic.renderTodoList();
// topic2.renderTodoList();
// topic3.renderTodoList();


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");



const content = document.querySelector("#content");

function projectPage(projectName) {
  const projectPageContainer = document.createElement("div");
  projectPageContainer.classList.add("project-page-container");

  const projectHeader = document.createElement("h1");
  projectHeader.classList.add("project-header");
  projectHeader.innerText = projectName;

  const listsContainer = document.querySelector(".lists-container");
  const projectListButton = document.createElement("button");
  projectListButton.classList.add("project-list-button");
  projectListButton.innerText = "Add";

  const formContainer = document.querySelector(".form-container");

  projectPageContainer.appendChild(projectHeader);
  projectPageContainer.appendChild(projectListButton);
  projectPageContainer.appendChild(listsContainer);

  content.appendChild(projectPageContainer);

  projectListButton.addEventListener("click", (event) => {
    event.preventDefault();
    formContainer.style.display = "flex";
  });

  const projectTodos = _todoList_js__WEBPACK_IMPORTED_MODULE_1__.todosArr.filter(
    (todo) => todo.projectName === projectName
  );
  projectTodos.forEach((todo) => todo.renderTodoList());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectPage);


/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   todosArr: () => (/* binding */ todosArr)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



const listsContainer = document.createElement("div");
listsContainer.classList.add("lists-container");

const todosArr = [];

class Todo {
  constructor(title, description, dueDate, priority, notes, projectName) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.projectName = projectName;

    this.listContainer = null;
    this.openListContainer = null;
  }

  renderTodoList() {
    const listContainer = document.createElement("div");
    listContainer.classList.add("list-container");

    const title = document.createElement("p");
    title.classList.add("list-title");
    title.innerText = `${this.title}`;

    const description = document.createElement("p");
    description.classList.add("list-description");
    description.innerText = `${this.description}`;
    description.style.display = "none"; // FIGURE OUT THIS BUT AFTER

    const dueDate = document.createElement("p");
    dueDate.classList.add("list-due-date");
    dueDate.innerText = `Due Date: ${this.dueDate}`;

    const priority = document.createElement("p");
    priority.classList.add("list-priority");
    priority.innerText = `Priority: ${this.priority}`;

    listContainer.appendChild(title);
    listContainer.appendChild(description);
    listContainer.appendChild(dueDate);
    listContainer.appendChild(priority);
    listsContainer.appendChild(listContainer);
    content.appendChild(listsContainer);

    listContainer.addEventListener("click", () => {
      this.openTodoList(listContainer);
    });
  }

  openTodoList() {
    const openListContainer = document.createElement("div");
    openListContainer.classList.add("open-list-container");

    const title = document.createElement("p");
    title.classList.add("open-list-title");
    title.innerText = `${this.title}`;

    const description = document.createElement("p");
    description.classList.add("open-list-description");
    description.innerText = `${this.description}`;

    const dueDate = document.createElement("p");
    dueDate.classList.add("open-list-due-date");
    dueDate.innerText = `Due Date: ${this.dueDate}`;

    const priority = document.createElement("p");
    priority.classList.add("open-list-priority");
    priority.innerText = `Priority: ${this.priority}`;

    const notes = document.createElement("form");
    const notesLabel = document.createElement("label");
    notesLabel.innerText = "Notes";
    const notesInput = document.createElement("input");
    notesInput.type = "text";
    notesInput.id = "notes";
    notesInput.name = "notes";
    const notesButton = document.createElement("button");
    notesButton.innerText = "Add";

    const deleteListButton = document.createElement("button");
    deleteListButton.innerText = "Delete";

    const closeListButton = document.createElement("button");
    closeListButton.innerText = "Close";

    closeListButton.addEventListener("click", () => {
      const formContainer = document.querySelector(".form-container");
      formContainer.style.display = "none";
    });

    notes.appendChild(notesLabel);
    notes.appendChild(notesInput);
    notes.appendChild(notesButton);

    openListContainer.appendChild(title);
    openListContainer.appendChild(description);
    openListContainer.appendChild(dueDate);
    openListContainer.appendChild(priority);
    openListContainer.appendChild(notes);
    openListContainer.appendChild(deleteListButton);
    openListContainer.appendChild(closeListButton);
    content.appendChild(openListContainer);

    notesButton.addEventListener("click", (event) => {
      event.preventDefault();
      const notesInput = document.querySelector("#notes");

      const newNote = document.createElement("p");
      newNote.innerText = notesInput.value;
      openListContainer.appendChild(newNote);
      notesInput.value = "";
    });

    deleteListButton.addEventListener("click", () => {
      this.deleteTodoList();
    });
  }

  deleteTodoList() {
    const openListContainers = document.querySelectorAll(
      ".open-list-container"
    );
    const listContainers = document.querySelectorAll(".list-container");

    if (confirm("Are you sure") === true) {
      openListContainers.forEach((openListContainer) => {
        openListContainer.remove();
      });

      listContainers.forEach((listContainer) => {
        listContainer.remove();
      });

      const indexToRemove = todosArr.findIndex(
        (todo) => todo.title === this.title
      );
      if (indexToRemove !== -1) {
        todosArr.splice(indexToRemove, 1);

        localStorage.setItem("myTodoList", JSON.stringify(todosArr));
        location.reload();
      }
    }
  }
}




/***/ }),

/***/ "./src/Rajdhani-Regular.ttf":
/*!**********************************!*\
  !*** ./src/Rajdhani-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "148606c1eb703f6e597a.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxhQUFhLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FB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QUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUmFqZGhhbmktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCI7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBNRU5VIEJBUiAqL1xyXG5cclxuLm1lbnUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnRvcC1tZW51LXRpdGxlIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5tZW51LXRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXNlbGVjdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi5uZXctbGlzdC1idXR0b24sXHJcbi5uZXctcHJvamVjdC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogMi43cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ubmV3LWxpc3QtYnV0dG9uOmhvdmVyLFxyXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIEZPUk0gQ09OVEFJTkVSICovXHJcblxyXG4uZm9ybS1jb250YWluZXIsXHJcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjEsIDIyMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMjB2aDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubGFiZWwtaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XHJcbn1cclxuXHJcbi8qIC8vIExJU1QgQ09OVEFJTkVSICovXHJcblxyXG4ubGlzdHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogODV2dztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5saXN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjIxLCAyMjEpO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB3aWR0aDogNTB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LXRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5vcGVuLWxpc3QtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLyogLy8gT1BFTiBMSVNUIENPTlRBSU5FUiAqL1xyXG5cclxuLm9wZW4tbGlzdC1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyMSwgMjIxKTtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiAvLyBQUk9KRUNUIExJU1QgQ09OVEFJTkVSICovXHJcblxyXG4ucHJvamVjdC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QiwrREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUEsbUJBQW1COztBQUVuQjs7RUFFRSx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWpkaGFuaVxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi9SYWpkaGFuaS1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWpkaGFuaVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSBCQVIgKi9cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDE1dnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLW1lbnUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXNlbGVjdCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWxpc3QtYnV0dG9uLFxcclxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDIuN3JlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1saXN0LWJ1dHRvbjpob3ZlcixcXHJcXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9STSBDT05UQUlORVIgKi9cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIsXFxyXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjEsIDIyMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1oZWFkZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbC1pbnB1dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLyBMSVNUIENPTlRBSU5FUiAqL1xcclxcblxcclxcbi5saXN0cy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDg1dnc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyMSwgMjIxKTtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3Blbi1saXN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLyBPUEVOIExJU1QgQ09OVEFJTkVSICovXFxyXFxuXFxyXFxuLm9wZW4tbGlzdC1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjEsIDIyMSk7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIGhlaWdodDogNDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLyBQUk9KRUNUIExJU1QgQ09OVEFJTkVSICovXFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IFRvZG8sIHRvZG9zQXJyIH0gZnJvbSBcIi4vdG9kb0xpc3QuanNcIjtcclxuaW1wb3J0IHByb2plY3RQYWdlIGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4vLyBMT0NBTCBTVE9SQUdFIC0gR2V0IGZyb20gTG9jYWwgU3RvcmFnZVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBjb25zdCBzdG9yZWRUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVRvZG9MaXN0XCIpKTtcclxuXHJcbiAgaWYgKHN0b3JlZFRvZG9zKSB7XHJcbiAgICB0b2Rvc0Fyci5wdXNoKC4uLnN0b3JlZFRvZG9zKTtcclxuXHJcbiAgICBzdG9yZWRUb2Rvcy5mb3JFYWNoKCh0b2RvRGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBsb2FkZWRUb2RvID0gbmV3IFRvZG8oXHJcbiAgICAgICAgdG9kb0RhdGEudGl0bGUsXHJcbiAgICAgICAgdG9kb0RhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdG9kb0RhdGEuZHVlRGF0ZSxcclxuICAgICAgICB0b2RvRGF0YS5wcmlvcml0eSxcclxuICAgICAgICBcIlwiLFxyXG4gICAgICAgIHRvZG9EYXRhLnByb2plY3RcclxuICAgICAgKTtcclxuICAgICAgbG9hZGVkVG9kby5yZW5kZXJUb2RvTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKHRvZG9zQXJyKTtcclxuXHJcbi8vIE1FTlUgQ09OVEFJTkVSXHJcblxyXG5jb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgbWVudUhUTUwgPSBgXHJcblxyXG48aDEgY2xhc3M9XCJ0b3AtbWVudS10aXRsZVwiPkxJRkUnUyBUT0RPUzwvaDE+XHJcblxyXG5cclxuPHAgY2xhc3M9XCJtZW51LXRpdGxlXCI+SG9tZTwvcD5cclxuPHA+VG9kYXk8L3A+XHJcbjxwPlRoaXMgV2VlazwvcD5cclxuXHJcbjxkaXYgY2xhc3M9XCJ0aXRsZS1idXR0b24tY29udGFpbmVyXCI+XHJcbjxwIGNsYXNzPVwibWVudS10aXRsZVwiPk15IFByb2plY3RzPC9wPlxyXG48YnV0dG9uIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+KzwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxwPkdldCBhIEpvYiAgLSBoYXJkY29kZWQ8L3A+XHJcbjxwPk9kaW4gUHJvamVjdCAtIGhhcmQgY29kZWQ8L3A+XHJcbjxwPkZpdG5lc3MgLSBoYXJkY29kZWQ8L3A+XHJcblxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cIm5ldy1saXN0LWJ1dHRvblwiPis8L2J1dHRvbj5cclxuXHJcblxyXG5gO1xyXG5cclxubWVudUNvbnRhaW5lci5pbm5lckhUTUwgPSBtZW51SFRNTDtcclxubWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctbGlzdC1idXR0b25cIik7XHJcbm5ld0xpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5ldy1saXN0LWJ1dHRvblwiKTtcclxuXHJcbm5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn0pO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnV0dG9uXCIpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1idXR0b25cIik7XHJcblxyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufSk7XHJcblxyXG4vLyBBREQgTElTVCBGT1JNXHJcblxyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XHJcblxyXG5jb25zdCBmb3JtSFRNTCA9IGBcclxuPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgPHAgY2xhc3M9XCJmb3JtLWhlYWRlclwiPkNyZWF0ZSBUb2RvIEl0ZW08L3A+XHJcbiAgXHJcbjxkaXYgY2xhc3M9XCJsYWJlbC1pbnB1dC1jb250YWluZXJcIj5cclxuPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXYWxrIHRoZSBkb2dcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImxhYmVsLWlucHV0LWNvbnRhaW5lclwiPlxyXG48bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxyXG48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGhlcmVcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImxhYmVsLWlucHV0LWNvbnRhaW5lclwiPlxyXG48bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XHJcbjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmVlZCB0byBkb3dubG9hZCB0aGF0IHBsdWdpbiFcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJsYWJlbC1pbnB1dC1jb250YWluZXJcIj5cclxuPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOZWVkIGEgZHJvcGRvd24gaGVyZVwiIGlkPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIj5cclxuPC9kaXY+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwiYWRkLWxpc3QtYnV0dG9uXCI+QWRkPC9idXR0b24+XHJcblxyXG5cclxuPC9mb3JtPlxyXG5gO1xyXG5cclxuZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBmb3JtSFRNTDtcclxuXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbmZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWxpc3QtYnV0dG9uXCIpO1xyXG5cclxuYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTGlzdCk7XHJcblxyXG5sZXQgY3VycmVudFByb2plY3QgPSBcIlwiO1xyXG5cclxuZnVuY3Rpb24gYWRkTGlzdChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbGlzdHggPSBuZXcgVG9kbyhcclxuICAgIHRpdGxlLnZhbHVlLFxyXG4gICAgZGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICBkdWVEYXRlLnZhbHVlLFxyXG4gICAgcHJpb3JpdHkudmFsdWUsXHJcbiAgICBcIlwiLFxyXG4gICAgY3VycmVudFByb2plY3RcclxuICApO1xyXG4gIGxpc3R4LnJlbmRlclRvZG9MaXN0KCk7XHJcbiAgdG9kb3NBcnIucHVzaChsaXN0eCk7XHJcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikucmVzZXQoKTtcclxuICBjb25zb2xlLmxvZyh0b2Rvc0Fycik7XHJcblxyXG4gIC8vIFNhdmUgdG8gbG9jYWxTdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteVRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zQXJyKSk7XHJcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVRvZG9MaXN0XCIpKTtcclxufVxyXG5cclxuLy8gQUREIFBST0pFQ1QgRk9STVxyXG5cclxuY29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5wcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IHByb2plY3RGb3JtSFRNTCA9IGBcclxuPGZvcm0gYWN0aW9uPVwiXCI+XHJcbjxwIGNsYXNzPVwiZm9ybS1oZWFkZXJcIj5DcmVhdGUgTmV3IFByb2plY3Q8L3A+XHJcbjxkaXY+XHJcbjxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkdldCBhIEpvYlwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCI+XHJcbjwvZGl2PlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0LWJ1dHRvblwiPkFkZDwvYnV0dG9uPlxyXG48L2Zvcm0+XHJcbmA7XHJcblxyXG5wcm9qZWN0Rm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBwcm9qZWN0Rm9ybUhUTUw7XHJcblxyXG5jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtQ29udGFpbmVyKTtcclxucHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnV0dG9uXCIpO1xyXG5cclxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xyXG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcclxuXHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBuZXdQcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XHJcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWxlY3RcIik7XHJcbiAgbmV3UHJvamVjdC5pZCA9IGAke3Byb2plY3ROYW1lSW5wdXQudmFsdWV9YDtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuXHJcbiAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0UGFnZShwcm9qZWN0TmFtZUlucHV0LnZhbHVlKSk7XHJcbn0pO1xyXG5cclxuLy8gRFVNTVkgTElTVCAtIENBTiBFVkVOVFVBTExZIEJFIFJFTU9WRURcclxuXHJcbi8vIGNvbnN0IHRvcGljID0gbmV3IFRvZG8oXHJcbi8vICAgXCJDb2RpbmcgUHJvamVjdFwiLFxyXG4vLyAgIFwiTmVlZCB0byBoYXZlIGl0IGNvbXBsZXRlIGJ5IHRoZSBlbmQgb2YgbmV4dCB3ZWVrXCIsXHJcbi8vICAgXCIyNy8xMS8yMDIzXCIsXHJcbi8vICAgXCJIaWdoXCJcclxuLy8gKTtcclxuXHJcbi8vIGNvbnN0IHRvcGljMiA9IG5ldyBUb2RvKFxyXG4vLyAgIFwiR29pbmcgZm9yIGEgcnVuXCIsXHJcbi8vICAgXCJOZWVkIHRvIGdvIGZvciB0aGUgcnVuIG9mIG15IGxpZmVcIixcclxuLy8gICBcIjI1LzExLzIwMjNcIixcclxuLy8gICBcIk1lZGl1bVwiXHJcbi8vICk7XHJcblxyXG4vLyBjb25zdCB0b3BpYzMgPSBuZXcgVG9kbyhcclxuLy8gICBcIkNvbm5lY3Qgd2l0aCBwZW9wbGUgaW4gdGhlIGpvYiBtYXJrZXRcIixcclxuLy8gICBcIk5lZWQgdG8gZ2V0IG91dHNpZGUgbXkgY29uZm9ydCB6b25lIGFuZCBzdGFydCB0YWxraW5nIHRvIHBlb3BsZSBzaW5jZSB0aGUgam9iIGJvYXJkcyBhcmUgdG9vIHNhdHVyYXRlZFwiLFxyXG4vLyAgIFwiMjIvMTIvMjAyM1wiLFxyXG4vLyAgIFwiSGlnaFwiXHJcbi8vICk7XHJcblxyXG4vLyB0b3BpYy5yZW5kZXJUb2RvTGlzdCgpO1xyXG4vLyB0b3BpYzIucmVuZGVyVG9kb0xpc3QoKTtcclxuLy8gdG9waWMzLnJlbmRlclRvZG9MaXN0KCk7XHJcbiIsImltcG9ydCBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgVG9kbywgdG9kb3NBcnIgfSBmcm9tIFwiLi90b2RvTGlzdC5qc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIHByb2plY3RQYWdlKHByb2plY3ROYW1lKSB7XHJcbiAgY29uc3QgcHJvamVjdFBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RQYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXBhZ2UtY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xyXG4gIHByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gIGNvbnN0IGxpc3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0cy1jb250YWluZXJcIik7XHJcbiAgY29uc3QgcHJvamVjdExpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHByb2plY3RMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtYnV0dG9uXCIpO1xyXG4gIHByb2plY3RMaXN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkXCI7XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuICBwcm9qZWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICBwcm9qZWN0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEJ1dHRvbik7XHJcbiAgcHJvamVjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdHNDb250YWluZXIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RQYWdlQ29udGFpbmVyKTtcclxuXHJcbiAgcHJvamVjdExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0b2Rvc0Fyci5maWx0ZXIoXHJcbiAgICAodG9kbykgPT4gdG9kby5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWVcclxuICApO1xyXG4gIHByb2plY3RUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB0b2RvLnJlbmRlclRvZG9MaXN0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0UGFnZTtcclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9wcm9qZWN0LmpzXCI7XHJcblxyXG5jb25zdCBsaXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxpc3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0cy1jb250YWluZXJcIik7XHJcblxyXG5jb25zdCB0b2Rvc0FyciA9IFtdO1xyXG5cclxuY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgIHRoaXMubGlzdENvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLm9wZW5MaXN0Q29udGFpbmVyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlbmRlclRvZG9MaXN0KCkge1xyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3QtdGl0bGVcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBgJHt0aGlzLnRpdGxlfWA7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7dGhpcy5kZXNjcmlwdGlvbn1gO1xyXG4gICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBGSUdVUkUgT1VUIFRISVMgQlVUIEFGVEVSXHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwibGlzdC1kdWUtZGF0ZVwiKTtcclxuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZSBEYXRlOiAke3RoaXMuZHVlRGF0ZX1gO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibGlzdC1wcmlvcml0eVwiKTtcclxuICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWA7XHJcblxyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICAgIGxpc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLm9wZW5Ub2RvTGlzdChsaXN0Q29udGFpbmVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlblRvZG9MaXN0KCkge1xyXG4gICAgY29uc3Qgb3Blbkxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3Blbkxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wZW4tbGlzdC1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWxpc3QtdGl0bGVcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBgJHt0aGlzLnRpdGxlfWA7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWxpc3QtZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHt0aGlzLmRlc2NyaXB0aW9ufWA7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwib3Blbi1saXN0LWR1ZS1kYXRlXCIpO1xyXG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfWA7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJvcGVuLWxpc3QtcHJpb3JpdHlcIik7XHJcbiAgICBwcmlvcml0eS5pbm5lclRleHQgPSBgUHJpb3JpdHk6ICR7dGhpcy5wcmlvcml0eX1gO1xyXG5cclxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBjb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbm90ZXNMYWJlbC5pbm5lclRleHQgPSBcIk5vdGVzXCI7XHJcbiAgICBjb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbm90ZXNJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBub3Rlc0lucHV0LmlkID0gXCJub3Rlc1wiO1xyXG4gICAgbm90ZXNJbnB1dC5uYW1lID0gXCJub3Rlc1wiO1xyXG4gICAgY29uc3Qgbm90ZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbm90ZXNCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGRcIjtcclxuXHJcbiAgICBjb25zdCBkZWxldGVMaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRlbGV0ZUxpc3RCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcclxuXHJcbiAgICBjb25zdCBjbG9zZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2xvc2VMaXN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ2xvc2VcIjtcclxuXHJcbiAgICBjbG9zZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XHJcbiAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbm90ZXMuYXBwZW5kQ2hpbGQobm90ZXNMYWJlbCk7XHJcbiAgICBub3Rlcy5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcclxuICAgIG5vdGVzLmFwcGVuZENoaWxkKG5vdGVzQnV0dG9uKTtcclxuXHJcbiAgICBvcGVuTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBvcGVuTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBvcGVuTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgIG9wZW5MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICAgIG9wZW5MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVzKTtcclxuICAgIG9wZW5MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUxpc3RCdXR0b24pO1xyXG4gICAgb3Blbkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VMaXN0QnV0dG9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3Blbkxpc3RDb250YWluZXIpO1xyXG5cclxuICAgIG5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIik7XHJcblxyXG4gICAgICBjb25zdCBuZXdOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIG5ld05vdGUuaW5uZXJUZXh0ID0gbm90ZXNJbnB1dC52YWx1ZTtcclxuICAgICAgb3Blbkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Tm90ZSk7XHJcbiAgICAgIG5vdGVzSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGVsZXRlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlbGV0ZVRvZG9MaXN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9MaXN0KCkge1xyXG4gICAgY29uc3Qgb3Blbkxpc3RDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIub3Blbi1saXN0LWNvbnRhaW5lclwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGlzdENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlXCIpID09PSB0cnVlKSB7XHJcbiAgICAgIG9wZW5MaXN0Q29udGFpbmVycy5mb3JFYWNoKChvcGVuTGlzdENvbnRhaW5lcikgPT4ge1xyXG4gICAgICAgIG9wZW5MaXN0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxpc3RDb250YWluZXJzLmZvckVhY2goKGxpc3RDb250YWluZXIpID0+IHtcclxuICAgICAgICBsaXN0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSB0b2Rvc0Fyci5maW5kSW5kZXgoXHJcbiAgICAgICAgKHRvZG8pID0+IHRvZG8udGl0bGUgPT09IHRoaXMudGl0bGVcclxuICAgICAgKTtcclxuICAgICAgaWYgKGluZGV4VG9SZW1vdmUgIT09IC0xKSB7XHJcbiAgICAgICAgdG9kb3NBcnIuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15VG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3NBcnIpKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVG9kbywgdG9kb3NBcnIgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==