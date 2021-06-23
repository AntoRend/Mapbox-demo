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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/layers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/dynamicLayer.js":
/*!************************************!*\
  !*** ./components/dynamicLayer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ \"mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/intermezzto/Documentos/codeProyects/mapbox-project/components/dynamicLayer.js\";\n\n\n\nconst dynamicLayer = () => {\n  const {\n    0: pageIsMounted,\n    1: setPageIsMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setPageIsMounted(true);\n    const map = new mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_2___default.a.Map({\n      container: 'dynamicLayer-map',\n      // style: 'mapbox://styles/mapbox/streets-v11',\n      style: 'mapbox://styles/mapbox/satellite-v9',\n      zoom: 15,\n      center: [-99.12766, 19.42847]\n    }); // Wait until the map has finished loading.\n    // Add a custom vector tileset source. This tileset contains\n\n    map.on('load', function () {\n      // point features representing museums. Each feature contains\n      // three properties. For example:\n      // {\n      //     alt_name: \"Museo Arqueologico\",\n      //     name: \"Museo Inka\",\n      //     tourism: \"museum\"\n      // }\n      map.addSource('museums', {\n        type: 'vector',\n        url: 'mapbox://mapbox.2opop9hr'\n      });\n      map.addLayer({\n        'id': 'museums',\n        'type': 'circle',\n        'source': 'museums',\n        'layout': {\n          // Make the layer visible by default.\n          'visibility': 'visible'\n        },\n        'paint': {\n          'circle-radius': 8,\n          'circle-color': 'rgba(55,148,179,1)'\n        },\n        'source-layer': 'museum-cusco'\n      }); // Add the Mapbox Terrain v2 vector tileset. Read more about\n      // the structure of data in this tileset in the documentation:\n      // https://docs.mapbox.com/vector-tiles/reference/mapbox-terrain-v2/\n\n      map.addSource('contours', {\n        type: 'vector',\n        url: 'mapbox://mapbox.mapbox-terrain-v2'\n      });\n      map.addLayer({\n        'id': 'contours',\n        'type': 'line',\n        'source': 'contours',\n        'source-layer': 'contour',\n        'layout': {\n          // Make the layer visible by default.\n          'visibility': 'visible',\n          'line-join': 'round',\n          'line-cap': 'round'\n        },\n        'paint': {\n          // 'line-color': '#877b59',\n          'line-color': '#fff',\n          'line-width': 2\n        }\n      });\n    }); // After the last frame rendered before the map enters an \"idle\" state.\n\n    map.on('idle', function () {\n      // If these two layers have been added to the style,\n      // add the toggle buttons.\n      if (map.getLayer('contours') && map.getLayer('museums')) {\n        // Enumerate ids of the layers.\n        var toggleableLayerIds = ['contours', 'museums']; // Set up the corresponding toggle button for each layer.\n\n        for (var i = 0; i < toggleableLayerIds.length; i++) {\n          var id = toggleableLayerIds[i];\n\n          if (!document.getElementById(id)) {\n            // Create a link.\n            var link = document.createElement('a');\n            link.id = id;\n            link.href = '#';\n            link.textContent = id;\n            link.className = 'active'; // Show or hide layer when the toggle is clicked.\n\n            link.onclick = function (e) {\n              var clickedLayer = this.textContent;\n              e.preventDefault();\n              e.stopPropagation();\n              var visibility = map.getLayoutProperty(clickedLayer, 'visibility'); // Toggle layer visibility by changing the layout object's visibility property.\n\n              if (visibility === 'visible') {\n                map.setLayoutProperty(clickedLayer, 'visibility', 'none');\n                this.className = '';\n              } else {\n                this.className = 'active';\n                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');\n              }\n            };\n\n            var layers = document.getElementById('dynamicLayer-menu');\n            layers.appendChild(link);\n          }\n        }\n      }\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      id: \"dynamicLayer-menu\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: `100%`,\n        height: `100vh`\n      },\n      id: \"dynamicLayer-map\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dynamicLayer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2R5bmFtaWNMYXllci5qcz8yMjQyIl0sIm5hbWVzIjpbImR5bmFtaWNMYXllciIsInBhZ2VJc01vdW50ZWQiLCJzZXRQYWdlSXNNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtYXAiLCJtYXBib3hnbCIsIk1hcCIsImNvbnRhaW5lciIsInN0eWxlIiwiem9vbSIsImNlbnRlciIsIm9uIiwiYWRkU291cmNlIiwidHlwZSIsInVybCIsImFkZExheWVyIiwiZ2V0TGF5ZXIiLCJ0b2dnbGVhYmxlTGF5ZXJJZHMiLCJpIiwibGVuZ3RoIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJvbmNsaWNrIiwiZSIsImNsaWNrZWRMYXllciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidmlzaWJpbGl0eSIsImdldExheW91dFByb3BlcnR5Iiwic2V0TGF5b3V0UHJvcGVydHkiLCJsYXllcnMiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsTUFBTTtBQUN6QixRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Msc0RBQVEsQ0FBQyxLQUFELENBQWxEO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkRixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBRUEsVUFBTUcsR0FBRyxHQUFHLElBQUlDLGtFQUFRLENBQUNDLEdBQWIsQ0FBaUI7QUFDM0JDLGVBQVMsRUFBRSxrQkFEZ0I7QUFFM0I7QUFDQUMsV0FBSyxFQUFFLHFDQUhvQjtBQUkzQkMsVUFBSSxFQUFFLEVBSnFCO0FBSzNCQyxZQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQUYsRUFBWSxRQUFaO0FB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Z0JBQUlNLE1BQU0sR0FBR2YsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQUFiO0FBQ0FjLGtCQUFNLENBQUNDLFdBQVAsQ0FBbUJkLElBQW5CO0FBQ0Q7QUFDRjtBQUNGO0FBQ0EsS0FqREg7QUFvREQsR0F2SFEsRUF1SE4sRUF2SE0sQ0FBVDtBQXlIQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssV0FBSyxFQUFFO0FBQUVlLGFBQUssRUFBRyxNQUFWO0FBQWlCQyxjQUFNLEVBQUc7QUFBMUIsT0FBWjtBQUFnRCxRQUFFLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLGtCQURGO0FBT0QsQ0FuSUQ7O0FBcUlleEMsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2R5bmFtaWNMYXllci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuanMnXG5cbmNvbnN0IGR5bmFtaWNMYXllciA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2VJc01vdW50ZWQsIHNldFBhZ2VJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlSXNNb3VudGVkKHRydWUpXG5cbiAgICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogJ2R5bmFtaWNMYXllci1tYXAnLFxuICAgICAgLy8gc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExJyxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zYXRlbGxpdGUtdjknLFxuICAgICAgem9vbTogMTUsXG4gICAgICBjZW50ZXI6IFstOTkuMTI3NjYsIDE5LjQyODQ3XVxuICAgIH0pO1xuXG4gICAgICAvLyBXYWl0IHVudGlsIHRoZSBtYXAgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAvLyBBZGQgYSBjdXN0b20gdmVjdG9yIHRpbGVzZXQgc291cmNlLiBUaGlzIHRpbGVzZXQgY29udGFpbnNcbiAgICBtYXAub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwb2ludCBmZWF0dXJlcyByZXByZXNlbnRpbmcgbXVzZXVtcy4gRWFjaCBmZWF0dXJlIGNvbnRhaW5zXG4gICAgICAvLyB0aHJlZSBwcm9wZXJ0aWVzLiBGb3IgZXhhbXBsZTpcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgICBhbHRfbmFtZTogXCJNdXNlbyBBcnF1ZW9sb2dpY29cIixcbiAgICAgIC8vICAgICBuYW1lOiBcIk11c2VvIElua2FcIixcbiAgICAgIC8vICAgICB0b3VyaXNtOiBcIm11c2V1bVwiXG4gICAgICAvLyB9XG4gICAgICBtYXAuYWRkU291cmNlKCdtdXNldW1zJywge1xuICAgICAgICB0eXBlOiAndmVjdG9yJyxcbiAgICAgICAgdXJsOiAnbWFwYm94Oi8vbWFwYm94LjJvcG9wOWhyJ1xuICAgICAgfSk7XG4gICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICAnaWQnOiAnbXVzZXVtcycsXG4gICAgICAgICd0eXBlJzogJ2NpcmNsZScsXG4gICAgICAgICdzb3VyY2UnOiAnbXVzZXVtcycsXG4gICAgICAgICdsYXlvdXQnOiB7XG4gICAgICAgICAgLy8gTWFrZSB0aGUgbGF5ZXIgdmlzaWJsZSBieSBkZWZhdWx0LlxuICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnXG4gICAgICAgIH0sXG4gICAgICAgICdwYWludCc6IHtcbiAgICAgICAgICAnY2lyY2xlLXJhZGl1cyc6IDgsXG4gICAgICAgICAgJ2NpcmNsZS1jb2xvcic6ICdyZ2JhKDU1LDE0OCwxNzksMSknXG4gICAgICAgIH0sXG4gICAgICAgICdzb3VyY2UtbGF5ZXInOiAnbXVzZXVtLWN1c2NvJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCB0aGUgTWFwYm94IFRlcnJhaW4gdjIgdmVjdG9yIHRpbGVzZXQuIFJlYWQgbW9yZSBhYm91dFxuICAgICAgLy8gdGhlIHN0cnVjdHVyZSBvZiBkYXRhIGluIHRoaXMgdGlsZXNldCBpbiB0aGUgZG9jdW1lbnRhdGlvbjpcbiAgICAgIC8vIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL3ZlY3Rvci10aWxlcy9yZWZlcmVuY2UvbWFwYm94LXRlcnJhaW4tdjIvXG4gICAgICBtYXAuYWRkU291cmNlKCdjb250b3VycycsIHtcbiAgICAgICAgdHlwZTogJ3ZlY3RvcicsXG4gICAgICAgIHVybDogJ21hcGJveDovL21hcGJveC5tYXBib3gtdGVycmFpbi12MidcbiAgICAgIH0pO1xuICAgICAgbWFwLmFkZExheWVyKHtcbiAgICAgICAgJ2lkJzogJ2NvbnRvdXJzJyxcbiAgICAgICAgJ3R5cGUnOiAnbGluZScsXG4gICAgICAgICdzb3VyY2UnOiAnY29udG91cnMnLFxuICAgICAgICAnc291cmNlLWxheWVyJzogJ2NvbnRvdXInLFxuICAgICAgICAnbGF5b3V0Jzoge1xuICAgICAgICAgIC8vIE1ha2UgdGhlIGxheWVyIHZpc2libGUgYnkgZGVmYXVsdC5cbiAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAnbGluZS1qb2luJzogJ3JvdW5kJyxcbiAgICAgICAgICAnbGluZS1jYXAnOiAncm91bmQnXG4gICAgICAgIH0sXG4gICAgICAgICdwYWludCc6IHtcbiAgICAgICAgICAvLyAnbGluZS1jb2xvcic6ICcjODc3YjU5JyxcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZmZmJyxcbiAgICAgICAgICAnbGluZS13aWR0aCc6IDJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAgIC8vIEFmdGVyIHRoZSBsYXN0IGZyYW1lIHJlbmRlcmVkIGJlZm9yZSB0aGUgbWFwIGVudGVycyBhbiBcImlkbGVcIiBzdGF0ZS5cbiAgICBtYXAub24oJ2lkbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJZiB0aGVzZSB0d28gbGF5ZXJzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgc3R5bGUsXG4gICAgICAvLyBhZGQgdGhlIHRvZ2dsZSBidXR0b25zLlxuICAgICAgaWYgKG1hcC5nZXRMYXllcignY29udG91cnMnKSAmJiBtYXAuZ2V0TGF5ZXIoJ211c2V1bXMnKSkge1xuICAgICAgICAvLyBFbnVtZXJhdGUgaWRzIG9mIHRoZSBsYXllcnMuXG4gICAgICAgIHZhciB0b2dnbGVhYmxlTGF5ZXJJZHMgPSBbJ2NvbnRvdXJzJywgJ211c2V1bXMnXTtcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBjb3JyZXNwb25kaW5nIHRvZ2dsZSBidXR0b24gZm9yIGVhY2ggbGF5ZXIuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9nZ2xlYWJsZUxheWVySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gdG9nZ2xlYWJsZUxheWVySWRzW2ldO1xuICAgICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBsaW5rLlxuICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSAnIyc7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gaWQ7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgLy8gU2hvdyBvciBoaWRlIGxheWVyIHdoZW4gdGhlIHRvZ2dsZSBpcyBjbGlja2VkLlxuICAgICAgICAgICAgbGluay5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIGNsaWNrZWRMYXllciA9IHRoaXMudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdmFyIHZpc2liaWxpdHkgPSBtYXAuZ2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgY2xpY2tlZExheWVyLFxuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5J1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBUb2dnbGUgbGF5ZXIgdmlzaWJpbGl0eSBieSBjaGFuZ2luZyB0aGUgbGF5b3V0IG9iamVjdCdzIHZpc2liaWxpdHkgcHJvcGVydHkuXG4gICAgICAgICAgICAgIGlmICh2aXNpYmlsaXR5ID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgY2xpY2tlZExheWVyLFxuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgY2xpY2tlZExheWVyLFxuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICAgICAndmlzaWJsZSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGxheWVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljTGF5ZXItbWVudScpO1xuICAgICAgICAgICAgbGF5ZXJzLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBcbiAgfSwgW10pXG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8bmF2IGlkPVwiZHluYW1pY0xheWVyLW1lbnVcIj48L25hdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAxMDAlYCwgaGVpZ2h0OiBgMTAwdmhgIH19IGlkPVwiZHluYW1pY0xheWVyLW1hcFwiPjwvZGl2PlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZHluYW1pY0xheWVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dynamicLayer.js\n");

/***/ }),

/***/ "./pages/layers.js":
/*!*************************!*\
  !*** ./pages/layers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ \"mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_dynamicLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dynamicLayer */ \"./components/dynamicLayer.js\");\n\n\nvar _jsxFileName = \"/home/intermezzto/Documentos/codeProyects/mapbox-project/pages/layers.js\";\n\n\n // import logoAzul from '../public/images/logo-azul.png'\n// https://www.toroto.mx/img/landing/logos/LOGO-BLANCO.png\n// https://admin.toroto.mx/toroto/img/companies/hugo_1600819436.png\n\n\nmapbox_gl_dist_mapbox_gl_js__WEBPACK_IMPORTED_MODULE_3___default.a.accessToken = \"pk.eyJ1IjoiYW50b3JlbmQiLCJhIjoiY2tqOWliZmlyMXBxdTMxbnkxMTY0Y2U0dSJ9.tmfZGDQN9JZUU6rg9GoAIw\";\n\nconst dynamicLayer = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n      className: \"logo-container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"https://www.toroto.mx/img/landing/logos/LOGO-BLANCO.png\",\n        alt: \"logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_dynamicLayer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dynamicLayer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXllcnMuanM/ZWYwYSJdLCJuYW1lcyI6WyJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicHJvY2VzcyIsImR5bmFtaWNMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQUEsa0VBQVEsQ0FBQ0MsV0FBVCxHQUF1QkMsNEZBQXZCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxNQUFNO0FBRXpCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQywwREFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBUSxlQUFTLEVBQUMsZ0JBQWxCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMseURBQVQ7QUFBbUUsV0FBRyxFQUFDO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBU0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBLGtCQURGO0FBYUQsQ0FmRDs7QUFpQmVBLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGF5ZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbC9kaXN0L21hcGJveC1nbC5qcydcblxuLy8gaW1wb3J0IGxvZ29BenVsIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbG9nby1henVsLnBuZydcbi8vIGh0dHBzOi8vd3d3LnRvcm90by5teC9pbWcvbGFuZGluZy9sb2dvcy9MT0dPLUJMQU5DTy5wbmdcbi8vIGh0dHBzOi8vYWRtaW4udG9yb3RvLm14L3Rvcm90by9pbWcvY29tcGFuaWVzL2h1Z29fMTYwMDgxOTQzNi5wbmdcbmltcG9ydCBEeW5hbWljTGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9keW5hbWljTGF5ZXInXG5cbm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTUFQQk9YX1RPS0VOO1xuXG5jb25zdCBkeW5hbWljTGF5ZXIgPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPSdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92Mi4wLjAvbWFwYm94LWdsLmNzcydcbiAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy50b3JvdG8ubXgvaW1nL2xhbmRpbmcvbG9nb3MvTE9HTy1CTEFOQ08ucG5nXCIgYWx0PVwibG9nb1wiLz5cbiAgICAgIDwvZmlndXJlPlxuICAgICAgPER5bmFtaWNMYXllciAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWNMYXllclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/layers.js\n");

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