module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/farmers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/farmers.js":
/*!**************************!*\
  !*** ./pages/farmers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ \"mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/intermezzto/Documentos/codeProyects/mapbox-project/pages/farmers.js\";\n\n\n\nmapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3___default.a.accessToken = \"pk.eyJ1IjoiYW50b3JlbmQiLCJhIjoiY2tqOWliZmlyMXBxdTMxbnkxMTY0Y2U0dSJ9.tmfZGDQN9JZUU6rg9GoAIw\";\n\nconst farmersMap = () => {\n  const {\n    0: pageIsMounted,\n    1: setPageIsMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setPageIsMounted(true);\n    const map = new mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3___default.a.Map({\n      // Html container for the map\n      container: 'farmers-map',\n      style: 'mapbox://styles/mapbox/satellite-v9',\n      center: [-89.260282647632238, 18.783432289174453],\n      zoom: 5\n    });\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n      className: \"logo-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"https://www.toroto.mx/img/landing/logos/LOGO-BLANCO.png\",\n        alt: \"logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: `100%`,\n        height: `100vh`\n      },\n      id: 'farmers-map'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (farmersMap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mYXJtZXJzLmpzPzFhYzIiXSwibmFtZXMiOlsibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsInByb2Nlc3MiLCJmYXJtZXJzTWFwIiwicGFnZUlzTW91bnRlZCIsInNldFBhZ2VJc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1hcCIsIk1hcCIsImNvbnRhaW5lciIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsa0VBQVEsQ0FBQ0MsV0FBVCxHQUF1QkMsNEZBQXZCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQSxVQUFNRyxHQUFHLEdBQUcsSUFBSVIsa0VBQVEsQ0FBQ1MsR0FBYixDQUFpQjtBQUMzQjtBQUNBQyxlQUFTLEVBQUUsYUFGZ0I7QUFHM0JDLFdBQUssRUFBRSxxQ0FIb0I7QUFJM0JDLFlBQU0sRUFBRSxDQUFDLENBQUMsa0JBQUYsRUFBcUIsa0JBQXJCLENBSm1CO0FBSzNCQyxVQUFJLEVBQUU7QUFMcUIsS0FBakIsQ0FBWjtBQU9ELEdBVFEsQ0FBVDtBQVdBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQywwREFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBUSxlQUFTLEVBQUMsZ0JBQWxCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMseURBQVQ7QUFBbUUsV0FBRyxFQUFDO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBU0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFHLE1BQVY7QUFBaUJDLGNBQU0sRUFBRztBQUExQixPQUFaO0FBQWdELFFBQUUsRUFBRTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUEsa0JBREY7QUFjRCxDQTVCRDs7QUE4QmVaLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZmFybWVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuanMnXG5cbm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTUFQQk9YX1RPS0VOO1xuXG5jb25zdCBmYXJtZXJzTWFwID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZUlzTW91bnRlZCwgc2V0UGFnZUlzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICBzZXRQYWdlSXNNb3VudGVkKHRydWUpXG4gICAgY29uc3QgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICAvLyBIdG1sIGNvbnRhaW5lciBmb3IgdGhlIG1hcFxuICAgICAgY29udGFpbmVyOiAnZmFybWVycy1tYXAnLFxuICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3NhdGVsbGl0ZS12OScsXG4gICAgICBjZW50ZXI6IFstODkuMjYwMjgyNjQ3NjMyMjM4LDE4Ljc4MzQzMjI4OTE3NDQ1M10sXG4gICAgICB6b29tOiA1XG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YyLjAuMC9tYXBib3gtZ2wuY3NzJ1xuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCcvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnRvcm90by5teC9pbWcvbGFuZGluZy9sb2dvcy9MT0dPLUJMQU5DTy5wbmdcIiBhbHQ9XCJsb2dvXCIvPlxuICAgICAgPC9maWd1cmU+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBgMTAwJWAsIGhlaWdodDogYDEwMHZoYCB9fSBpZD17J2Zhcm1lcnMtbWFwJ30+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmYXJtZXJzTWFwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/farmers.js\n");

/***/ }),

/***/ "mapbox-gl/dist/mapbox-gl.js":
/*!**********************************************!*\
  !*** external "mapbox-gl/dist/mapbox-gl.js" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mapbox-gl/dist/mapbox-gl.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuanNcIj84OWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mapbox-gl/dist/mapbox-gl.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });