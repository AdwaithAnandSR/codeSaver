"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./app/home/page.jsx":
/*!***************************!*\
  !*** ./app/home/page.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar.jsx */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var _controller_getCodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller/getCodes.js */ \"(app-pages-browser)/./controller/getCodes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction YourComponent() {\n    _s();\n    const [codes, setCodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCodes = async ()=>{\n            const res = await (0,_controller_getCodes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            if (res) {\n                setCodes(res);\n            }\n        };\n        fetchCodes();\n    });\n    const copyToClipboard = ()=>{\n        alert(navigator.clipboard.writeText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"2vh\",\n                    marginTop: \"15vh\",\n                    marginBottom: \"5vh\"\n                },\n                children: codes.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    style: {\n                        margin: \"2vw\"\n                    },\n                    children: \"loading..\"\n                }, void 0, false, {\n                    fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 16\n                }, this) : codes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onPress: ()=>copyToClipboard(item.code),\n                        style: {\n                            backgroundColor: \"#242424\",\n                            padding: \"1vh\",\n                            borderRadius: 23,\n                            marginHorizontal: \"2vw\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                color: \"white\",\n                                fontSize: \"6vw\",\n                                marginLeft: \"3vw\"\n                            },\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 22\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 19\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, this);\n}\n_s(YourComponent, \"0n9QQbI3s+3fikQuO07AQuRJLuM=\");\n_c = YourComponent;\nvar _c;\n$RefreshReg$(_c, \"YourComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNRO0FBRUg7QUFFRztBQUVyQyxTQUFTSzs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1AsTUFBTU8sYUFBYTtZQUNoQixNQUFNQyxNQUFNLE1BQU1MLG1FQUFRQTtZQUMxQixJQUFJSyxLQUFLO2dCQUNORixTQUFTRTtZQUNaO1FBQ0g7UUFDQUQ7SUFDSDtJQUVBLE1BQU1FLGtCQUFrQjtRQUNyQkMsTUFBTUMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTO0lBQ3RDO0lBRUEscUJBQ0csOERBQUNDOzswQkFDRSw4REFBQ1osOERBQU1BOzs7OzswQkFDUCw4REFBQ1k7Z0JBQ0VDLE9BQU87b0JBQ0pDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hDLGNBQWM7Z0JBQ2pCOzBCQUNDZixNQUFNZ0IsTUFBTSxHQUFHLGtCQUNiLDhEQUFDQztvQkFBR1AsT0FBTzt3QkFBRVEsUUFBUTtvQkFBTTs4QkFBRzs7Ozs7MkJBRTlCbEIsTUFBTW1CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ3pCLHdEQUFnQkE7d0JBQ2QwQixTQUFTLElBQU1sQixnQkFBZ0JnQixLQUFLRyxJQUFJO3dCQUV4Q2IsT0FBTzs0QkFDSmMsaUJBQWlCOzRCQUNqQkMsU0FBUzs0QkFDVEMsY0FBYzs0QkFDZEMsa0JBQWtCO3dCQUNyQjtrQ0FDQSw0RUFBQ0M7NEJBQ0VsQixPQUFPO2dDQUNKbUIsT0FBTztnQ0FDUEMsVUFBVTtnQ0FDVkMsWUFBWTs0QkFDZjtzQ0FDQ1gsS0FBS1ksS0FBSzs7Ozs7O3VCQWJUWDs7Ozs7Ozs7Ozs7Ozs7OztBQXFCMUI7R0F2RHdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hvbWUvcGFnZS5qc3g/YTU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvdWNoYWJsZU9wYWNpdHkgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXdlYlwiO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhci5qc3hcIjtcblxuaW1wb3J0IGdldENvZGVzIGZyb20gXCIuLi8uLi9jb250cm9sbGVyL2dldENvZGVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXJDb21wb25lbnQoKSB7XG4gICBjb25zdCBbY29kZXMsIHNldENvZGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoQ29kZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRDb2RlcygpO1xuICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgc2V0Q29kZXMocmVzKTtcbiAgICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmZXRjaENvZGVzKCk7XG4gICB9KTtcbiAgIFxuICAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCk9PntcbiAgICAgIGFsZXJ0KG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KVxuICAgfVxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICBnYXA6IFwiMnZoXCIsXG4gICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTV2aFwiLFxuICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjV2aFwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjb2Rlcy5sZW5ndGggPCAxID8gKFxuICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIydndcIiB9fT5sb2FkaW5nLi48L2g0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgIGNvZGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQoaXRlbS5jb2RlKX1cbiAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNDI0MjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXZoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luSG9yaXpvbnRhbDogXCIydndcIlxuICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNnZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjN2d1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbiAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb3VjaGFibGVPcGFjaXR5IiwiTmF2YmFyIiwiZ2V0Q29kZXMiLCJZb3VyQ29tcG9uZW50IiwiY29kZXMiLCJzZXRDb2RlcyIsImZldGNoQ29kZXMiLCJyZXMiLCJjb3B5VG9DbGlwYm9hcmQiLCJhbGVydCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJoNCIsIm1hcmdpbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uUHJlc3MiLCJjb2RlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkhvcml6b250YWwiLCJoMyIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});