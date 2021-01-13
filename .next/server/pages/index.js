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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ \"mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/intermezzto/Documentos/codeProyects/mapbox-project/pages/index.js\";\n\n\n\n // import data from '../public/files/last_test3.geojson'\n\nmapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4___default.a.accessToken = \"pk.eyJ1IjoiYW50b3JlbmQiLCJhIjoiY2tqOWliZmlyMXBxdTMxbnkxMTY0Y2U0dSJ9.tmfZGDQN9JZUU6rg9GoAIw\";\nfunction Home() {\n  const {\n    0: pageIsMounted,\n    1: setPageIsMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    setPageIsMounted(true);\n    const map = new mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4___default.a.Map({\n      container: 'myMap',\n      style: 'mapbox://styles/mapbox/dark-v10',\n      center: [-103.59179687498357, 40.66995747013945],\n      zoom: 3\n    }); // Show an alert if the browser does not support Mapbox GL\n\n    if (!mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4___default.a.supported()) {\n      alert('Your browser does not support Mapbox GL');\n    } // Add zoom and rotation controls to the map.\n\n\n    map.addControl(new mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4___default.a.NavigationControl()); // Add geolocation button\n\n    map.addControl(new mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4___default.a.GeolocateControl({\n      positionOptions: {\n        enableHighAccuracy: true\n      },\n      trackUserLocation: true\n    }));\n    map.on('load', function () {\n      // Add a new source from our GeoJSON data and\n      // set the 'cluster' option to true. GL-JS will\n      // add the point_count property to your source data.\n      map.addSource('earthquakes', {\n        type: 'geojson',\n        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes\n        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.\n        data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',\n        cluster: true,\n        clusterMaxZoom: 14,\n        // Max zoom to cluster points on\n        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)\n\n      });\n      map.addLayer({\n        id: 'clusters',\n        type: 'circle',\n        source: 'earthquakes',\n        filter: ['has', 'point_count'],\n        paint: {\n          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)\n          // with three steps to implement three types of circles:\n          //   * Blue, 20px circles when point count is less than 100\n          //   * Yellow, 30px circles when point count is between 100 and 750\n          //   * Pink, 40px circles when point count is greater than or equal to 750\n          'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],\n          'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]\n        }\n      });\n      map.addLayer({\n        id: 'cluster-count',\n        type: 'symbol',\n        source: 'earthquakes',\n        filter: ['has', 'point_count'],\n        layout: {\n          'text-field': '{point_count_abbreviated}',\n          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],\n          'text-size': 12\n        }\n      });\n      map.addLayer({\n        id: 'unclustered-point',\n        type: 'circle',\n        source: 'earthquakes',\n        filter: ['!', ['has', 'point_count']],\n        paint: {\n          'circle-color': '#11b4da',\n          'circle-radius': 4,\n          'circle-stroke-width': 1,\n          'circle-stroke-color': '#fff'\n        }\n      }); // inspect a cluster on click\n\n      map.on('click', 'clusters', function (e) {\n        var features = map.queryRenderedFeatures(e.point, {\n          layers: ['clusters']\n        });\n        var clusterId = features[0].properties.cluster_id;\n        map.getSource('earthquakes').getClusterExpansionZoom(clusterId, function (err, zoom) {\n          if (err) return;\n          map.easeTo({\n            center: features[0].geometry.coordinates,\n            zoom: zoom\n          });\n        });\n      }); // When a click event occurs on a feature in\n      // the unclustered-point layer, open a popup at\n      // the location of the feature, with\n      // description HTML from its properties.\n\n      map.on('click', 'unclustered-point', function (e) {\n        var coordinates = e.features[0].geometry.coordinates.slice();\n        var mag = e.features[0].properties.mag;\n        var tsunami;\n\n        if (e.features[0].properties.tsunami === 1) {\n          tsunami = 'yes';\n        } else {\n          tsunami = 'no';\n        } // Ensure that if the map is zoomed out such that\n        // multiple copies of the feature are visible, the\n        // popup appears over the copy being pointed to.\n\n\n        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n        }\n\n        new mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_4___default.a.Popup().setLngLat(coordinates).setHTML('magnitude: ' + mag + '<br>Was there a tsunami?: ' + tsunami).addTo(map);\n      });\n      map.on('mouseenter', 'clusters', function () {\n        map.getCanvas().style.cursor = 'pointer';\n      });\n      map.on('mouseleave', 'clusters', function () {\n        map.getCanvas().style.cursor = '';\n      });\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: '100%',\n        height: '30rem'\n      },\n      id: \"myMap\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 173,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJwcm9jZXNzIiwiSG9tZSIsInBhZ2VJc01vdW50ZWQiLCJzZXRQYWdlSXNNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJzdXBwb3J0ZWQiLCJhbGVydCIsImFkZENvbnRyb2wiLCJOYXZpZ2F0aW9uQ29udHJvbCIsIkdlb2xvY2F0ZUNvbnRyb2wiLCJwb3NpdGlvbk9wdGlvbnMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJ0cmFja1VzZXJMb2NhdGlvbiIsIm9uIiwiYWRkU291cmNlIiwidHlwZSIsImRhdGEiLCJjbHVzdGVyIiwiY2x1c3Rlck1heFpvb20iLCJjbHVzdGVyUmFkaXVzIiwiYWRkTGF5ZXIiLCJpZCIsInNvdXJjZSIsImZpbHRlciIsInBhaW50IiwibGF5b3V0IiwiZSIsImZlYXR1cmVzIiwicXVlcnlSZW5kZXJlZEZlYXR1cmVzIiwicG9pbnQiLCJsYXllcnMiLCJjbHVzdGVySWQiLCJwcm9wZXJ0aWVzIiwiY2x1c3Rlcl9pZCIsImdldFNvdXJjZSIsImdldENsdXN0ZXJFeHBhbnNpb25ab29tIiwiZXJyIiwiZWFzZVRvIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsInNsaWNlIiwibWFnIiwidHN1bmFtaSIsIk1hdGgiLCJhYnMiLCJsbmdMYXQiLCJsbmciLCJQb3B1cCIsInNldExuZ0xhdCIsInNldEhUTUwiLCJhZGRUbyIsImdldENhbnZhcyIsImN1cnNvciIsInN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUdBQSxrRUFBUSxDQUFDQyxXQUFULEdBQXVCQyw0RkFBdkI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FB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RixlQUdFO0FBQU0sWUFBSSxFQUFDLDBEQUFYO0FBQXNFLFdBQUcsRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPSTtBQUFLLFdBQUssRUFBRTtBQUFFcUQsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRTtBQUF6QixPQUFaO0FBQWdELFFBQUUsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFVRTtBQUFRLGVBQVMsRUFBRUYsOERBQU0sQ0FBQ0c7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmpzJ1xuXG4vLyBpbXBvcnQgZGF0YSBmcm9tICcuLi9wdWJsaWMvZmlsZXMvbGFzdF90ZXN0My5nZW9qc29uJ1xuXG5cbm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTUFQQk9YX1RPS0VOO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZUlzTW91bnRlZCwgc2V0UGFnZUlzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VJc01vdW50ZWQodHJ1ZSlcbiAgICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgICBjb250YWluZXI6ICdteU1hcCcsXG4gICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9kYXJrLXYxMCcsXG4gICAgICAgIGNlbnRlcjogWy0xMDMuNTkxNzk2ODc0OTgzNTcsIDQwLjY2OTk1NzQ3MDEzOTQ1XSxcbiAgICAgICAgem9vbTogM1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFNob3cgYW4gYWxlcnQgaWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBNYXBib3ggR0xcbiAgICBpZiAoIW1hcGJveGdsLnN1cHBvcnRlZCgpKSB7XG4gICAgICBhbGVydCgnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgTWFwYm94IEdMJyk7XG4gICAgfVxuICAgIFxuICAgICAgLy8gQWRkIHpvb20gYW5kIHJvdGF0aW9uIGNvbnRyb2xzIHRvIHRoZSBtYXAuXG4gICAgICBtYXAuYWRkQ29udHJvbChuZXcgbWFwYm94Z2wuTmF2aWdhdGlvbkNvbnRyb2woKSk7XG5cbiAgICAgIC8vIEFkZCBnZW9sb2NhdGlvbiBidXR0b25cbiAgICAgIG1hcC5hZGRDb250cm9sKFxuICAgICAgICBuZXcgbWFwYm94Z2wuR2VvbG9jYXRlQ29udHJvbCh7XG4gICAgICAgICAgcG9zaXRpb25PcHRpb25zOiB7XG4gICAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFja1VzZXJMb2NhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIG1hcC5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQWRkIGEgbmV3IHNvdXJjZSBmcm9tIG91ciBHZW9KU09OIGRhdGEgYW5kXG4gICAgICAgIC8vIHNldCB0aGUgJ2NsdXN0ZXInIG9wdGlvbiB0byB0cnVlLiBHTC1KUyB3aWxsXG4gICAgICAgIC8vIGFkZCB0aGUgcG9pbnRfY291bnQgcHJvcGVydHkgdG8geW91ciBzb3VyY2UgZGF0YS5cbiAgICAgICAgbWFwLmFkZFNvdXJjZSgnZWFydGhxdWFrZXMnLCB7XG4gICAgICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgICAgLy8gUG9pbnQgdG8gR2VvSlNPTiBkYXRhLiBUaGlzIGV4YW1wbGUgdmlzdWFsaXplcyBhbGwgTTEuMCsgZWFydGhxdWFrZXNcbiAgICAgICAgLy8gZnJvbSAxMi8yMi8xNSB0byAxLzIxLzE2IGFzIGxvZ2dlZCBieSBVU0dTJyBFYXJ0aHF1YWtlIGhhemFyZHMgcHJvZ3JhbS5cbiAgICAgICAgZGF0YTpcbiAgICAgICAgJ2h0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hc3NldHMvZWFydGhxdWFrZXMuZ2VvanNvbicsXG4gICAgICAgIGNsdXN0ZXI6IHRydWUsXG4gICAgICAgIGNsdXN0ZXJNYXhab29tOiAxNCwgLy8gTWF4IHpvb20gdG8gY2x1c3RlciBwb2ludHMgb25cbiAgICAgICAgY2x1c3RlclJhZGl1czogNTAgLy8gUmFkaXVzIG9mIGVhY2ggY2x1c3RlciB3aGVuIGNsdXN0ZXJpbmcgcG9pbnRzIChkZWZhdWx0cyB0byA1MClcbiAgICAgICAgfSk7XG4gICAgICAgICBcbiAgICAgICAgbWFwLmFkZExheWVyKHtcbiAgICAgICAgaWQ6ICdjbHVzdGVycycsXG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICBzb3VyY2U6ICdlYXJ0aHF1YWtlcycsXG4gICAgICAgIGZpbHRlcjogWydoYXMnLCAncG9pbnRfY291bnQnXSxcbiAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgLy8gVXNlIHN0ZXAgZXhwcmVzc2lvbnMgKGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjLyNleHByZXNzaW9ucy1zdGVwKVxuICAgICAgICAvLyB3aXRoIHRocmVlIHN0ZXBzIHRvIGltcGxlbWVudCB0aHJlZSB0eXBlcyBvZiBjaXJjbGVzOlxuICAgICAgICAvLyAgICogQmx1ZSwgMjBweCBjaXJjbGVzIHdoZW4gcG9pbnQgY291bnQgaXMgbGVzcyB0aGFuIDEwMFxuICAgICAgICAvLyAgICogWWVsbG93LCAzMHB4IGNpcmNsZXMgd2hlbiBwb2ludCBjb3VudCBpcyBiZXR3ZWVuIDEwMCBhbmQgNzUwXG4gICAgICAgIC8vICAgKiBQaW5rLCA0MHB4IGNpcmNsZXMgd2hlbiBwb2ludCBjb3VudCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gNzUwXG4gICAgICAgICdjaXJjbGUtY29sb3InOiBbXG4gICAgICAgICdzdGVwJyxcbiAgICAgICAgWydnZXQnLCAncG9pbnRfY291bnQnXSxcbiAgICAgICAgJyM1MWJiZDYnLFxuICAgICAgICAxMDAsXG4gICAgICAgICcjZjFmMDc1JyxcbiAgICAgICAgNzUwLFxuICAgICAgICAnI2YyOGNiMSdcbiAgICAgICAgXSxcbiAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiBbXG4gICAgICAgICdzdGVwJyxcbiAgICAgICAgWydnZXQnLCAncG9pbnRfY291bnQnXSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1MCxcbiAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgICAgIG1hcC5hZGRMYXllcih7XG4gICAgICAgIGlkOiAnY2x1c3Rlci1jb3VudCcsXG4gICAgICAgIHR5cGU6ICdzeW1ib2wnLFxuICAgICAgICBzb3VyY2U6ICdlYXJ0aHF1YWtlcycsXG4gICAgICAgIGZpbHRlcjogWydoYXMnLCAncG9pbnRfY291bnQnXSxcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICd0ZXh0LWZpZWxkJzogJ3twb2ludF9jb3VudF9hYmJyZXZpYXRlZH0nLFxuICAgICAgICAndGV4dC1mb250JzogWydESU4gT2ZmYyBQcm8gTWVkaXVtJywgJ0FyaWFsIFVuaWNvZGUgTVMgQm9sZCddLFxuICAgICAgICAndGV4dC1zaXplJzogMTJcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgIFxuICAgICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICBpZDogJ3VuY2x1c3RlcmVkLXBvaW50JyxcbiAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHNvdXJjZTogJ2VhcnRocXVha2VzJyxcbiAgICAgICAgZmlsdGVyOiBbJyEnLCBbJ2hhcycsICdwb2ludF9jb3VudCddXSxcbiAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgJ2NpcmNsZS1jb2xvcic6ICcjMTFiNGRhJyxcbiAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiA0LFxuICAgICAgICAnY2lyY2xlLXN0cm9rZS13aWR0aCc6IDEsXG4gICAgICAgICdjaXJjbGUtc3Ryb2tlLWNvbG9yJzogJyNmZmYnXG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICBcbiAgICAgICAgLy8gaW5zcGVjdCBhIGNsdXN0ZXIgb24gY2xpY2tcbiAgICAgICAgbWFwLm9uKCdjbGljaycsICdjbHVzdGVycycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBmZWF0dXJlcyA9IG1hcC5xdWVyeVJlbmRlcmVkRmVhdHVyZXMoZS5wb2ludCwge1xuICAgICAgICBsYXllcnM6IFsnY2x1c3RlcnMnXVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNsdXN0ZXJJZCA9IGZlYXR1cmVzWzBdLnByb3BlcnRpZXMuY2x1c3Rlcl9pZDtcbiAgICAgICAgbWFwLmdldFNvdXJjZSgnZWFydGhxdWFrZXMnKS5nZXRDbHVzdGVyRXhwYW5zaW9uWm9vbShcbiAgICAgICAgY2x1c3RlcklkLFxuICAgICAgICBmdW5jdGlvbiAoZXJyLCB6b29tKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybjtcbiAgICAgICAgIFxuICAgICAgICBtYXAuZWFzZVRvKHtcbiAgICAgICAgY2VudGVyOiBmZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyxcbiAgICAgICAgem9vbTogem9vbVxuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgIFxuICAgICAgICAvLyBXaGVuIGEgY2xpY2sgZXZlbnQgb2NjdXJzIG9uIGEgZmVhdHVyZSBpblxuICAgICAgICAvLyB0aGUgdW5jbHVzdGVyZWQtcG9pbnQgbGF5ZXIsIG9wZW4gYSBwb3B1cCBhdFxuICAgICAgICAvLyB0aGUgbG9jYXRpb24gb2YgdGhlIGZlYXR1cmUsIHdpdGhcbiAgICAgICAgLy8gZGVzY3JpcHRpb24gSFRNTCBmcm9tIGl0cyBwcm9wZXJ0aWVzLlxuICAgICAgICBtYXAub24oJ2NsaWNrJywgJ3VuY2x1c3RlcmVkLXBvaW50JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGNvb3JkaW5hdGVzID0gZS5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcy5zbGljZSgpO1xuICAgICAgICB2YXIgbWFnID0gZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLm1hZztcbiAgICAgICAgdmFyIHRzdW5hbWk7XG4gICAgICAgICBcbiAgICAgICAgaWYgKGUuZmVhdHVyZXNbMF0ucHJvcGVydGllcy50c3VuYW1pID09PSAxKSB7XG4gICAgICAgIHRzdW5hbWkgPSAneWVzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHN1bmFtaSA9ICdubyc7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAvLyBFbnN1cmUgdGhhdCBpZiB0aGUgbWFwIGlzIHpvb21lZCBvdXQgc3VjaCB0aGF0XG4gICAgICAgIC8vIG11bHRpcGxlIGNvcGllcyBvZiB0aGUgZmVhdHVyZSBhcmUgdmlzaWJsZSwgdGhlXG4gICAgICAgIC8vIHBvcHVwIGFwcGVhcnMgb3ZlciB0aGUgY29weSBiZWluZyBwb2ludGVkIHRvLlxuICAgICAgICB3aGlsZSAoTWF0aC5hYnMoZS5sbmdMYXQubG5nIC0gY29vcmRpbmF0ZXNbMF0pID4gMTgwKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzWzBdICs9IGUubG5nTGF0LmxuZyA+IGNvb3JkaW5hdGVzWzBdID8gMzYwIDogLTM2MDtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIG5ldyBtYXBib3hnbC5Qb3B1cCgpXG4gICAgICAgIC5zZXRMbmdMYXQoY29vcmRpbmF0ZXMpXG4gICAgICAgIC5zZXRIVE1MKFxuICAgICAgICAnbWFnbml0dWRlOiAnICsgbWFnICsgJzxicj5XYXMgdGhlcmUgYSB0c3VuYW1pPzogJyArIHRzdW5hbWlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVG8obWFwKTtcbiAgICAgICAgfSk7XG4gICAgICAgICBcbiAgICAgICAgbWFwLm9uKCdtb3VzZWVudGVyJywgJ2NsdXN0ZXJzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwLm9uKCdtb3VzZWxlYXZlJywgJ2NsdXN0ZXJzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgICB9KTtcblxufSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjIuMC4wL21hcGJveC1nbC5jc3MnIHJlbD0nc3R5bGVzaGVldCcgLz5cbiAgICAgIDwvSGVhZD5cbiAgXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMzByZW0nIH19IGlkPVwibXlNYXBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICBcbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

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