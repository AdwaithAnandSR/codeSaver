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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navbar.jsx */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var _controller_getCodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller/getCodes.js */ \"(app-pages-browser)/./controller/getCodes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction YourComponent() {\n    _s();\n    const [codes, setCodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCodes = async ()=>{\n            const res = await (0,_controller_getCodes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            if (res) {\n                setCodes(res);\n            }\n        };\n        fetchCodes();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 24,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"2vh\",\n                    marginTop: \"5vh\",\n                    marginBottom: \"5vh\"\n                },\n                children: codes.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    style: {\n                        margin: \"2vw\"\n                    },\n                    children: \"loading..\"\n                }, void 0, false, {\n                    fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 18\n                }, this) : codes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            backgroundColor: \"#242424\",\n                            padding: \"1vh\",\n                            borderRadius: 23,\n                            marginHorizontal: \"2vw\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                color: \"white\",\n                                fontSize: \"6vw\",\n                                marginLeft: \"3vw\"\n                            },\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 24\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 25,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n        lineNumber: 23,\n        columnNumber: 7\n    }, this);\n}\n_s(YourComponent, \"0n9QQbI3s+3fikQuO07AQuRJLuM=\");\n_c = YourComponent;\nvar _c;\n$RefreshReg$(_c, \"YourComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNRO0FBRUg7QUFFRztBQUVyQyxTQUFTSzs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1AsTUFBTU8sYUFBYTtZQUNoQixNQUFNQyxNQUFNLE1BQU1MLG1FQUFRQTtZQUMxQixJQUFJSyxLQUFLO2dCQUNORixTQUFTRTtZQUNaO1FBQ0g7UUFDQUQ7SUFDSDtJQUVBLHFCQUNHLDhEQUFDRTs7MEJBQ0UsOERBQUNQLDhEQUFNQTs7Ozs7MEJBQ1AsOERBQUNPO2dCQUNFQyxPQUFPO29CQUNKQyxTQUFTO29CQUNUQyxlQUFlO29CQUNmQyxLQUFLO29CQUNMQyxXQUFXO29CQUNYQyxjQUFjO2dCQUNqQjswQkFDQ1YsTUFBTVcsTUFBTSxHQUFHLGtCQUNYLDhEQUFDQztvQkFBR1AsT0FBTzt3QkFBRVEsUUFBUTtvQkFBTTs4QkFBRzs7Ozs7MkJBQzlCYixNQUFNYyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUNwQix3REFBZ0JBO3dCQUVkUyxPQUFPOzRCQUNKWSxpQkFBaUI7NEJBQ2pCQyxTQUFTOzRCQUNUQyxjQUFjOzRCQUNkQyxrQkFBa0I7d0JBQ3JCO2tDQUNBLDRFQUFDQzs0QkFDRWhCLE9BQU87Z0NBQ0ppQixPQUFPO2dDQUNQQyxVQUFVO2dDQUNWQyxZQUFZOzRCQUNmO3NDQUNDVCxLQUFLVSxLQUFLOzs7Ozs7dUJBYlRUOzs7Ozs7Ozs7Ozs7Ozs7O0FBb0I1QjtHQWhEd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaG9tZS9wYWdlLmpzeD9hNTliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gXCJyZWFjdC1uYXRpdmUtd2ViXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyLmpzeFwiO1xuXG5pbXBvcnQgZ2V0Q29kZXMgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXIvZ2V0Q29kZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWW91ckNvbXBvbmVudCgpIHtcbiAgIGNvbnN0IFtjb2Rlcywgc2V0Q29kZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hDb2RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldENvZGVzKCk7XG4gICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBzZXRDb2RlcyhyZXMpO1xuICAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZldGNoQ29kZXMoKTtcbiAgIH0pO1xuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICBnYXA6IFwiMnZoXCIsXG4gICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNXZoXCIsXG4gICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc1dmgnLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7Y29kZXMubGVuZ3RoIDwgMVxuICAgICAgICAgICAgICAgPyA8aDQgc3R5bGU9e3sgbWFyZ2luOiAnMnZ3Jyx9fT5sb2FkaW5nLi48L2g0PlxuICAgICAgICAgICAgICAgOiBjb2Rlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjQyNDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXZoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkhvcml6b250YWw6ICcydncnLFxuICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjZ2d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjN2d1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVG91Y2hhYmxlT3BhY2l0eSIsIk5hdmJhciIsImdldENvZGVzIiwiWW91ckNvbXBvbmVudCIsImNvZGVzIiwic2V0Q29kZXMiLCJmZXRjaENvZGVzIiwicmVzIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImg0IiwibWFyZ2luIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkhvcml6b250YWwiLCJoMyIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});