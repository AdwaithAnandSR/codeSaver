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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar.jsx */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var _controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controller/getCodes.js */ \"(app-pages-browser)/./controller/getCodes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction YourComponent() {\n    _s();\n    const [codes, setCodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCodes = async ()=>{\n            const res = await (0,_controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n            if (res) {\n                setCodes(res);\n            }\n        };\n        fetchCodes();\n    });\n    const copyToClipboard = (code)=>{\n        navigator.clipboard.writeText(code);\n    };\n    const showToast = ()=>{\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"This is a success message!\");\n    };\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: showToast,\n                children: \"Show Toast\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 40,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"2vh\",\n                    marginTop: \"15vh\",\n                    marginBottom: \"5vh\"\n                },\n                children: codes.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    style: {\n                        margin: \"2vw\"\n                    },\n                    children: \"loading..\"\n                }, void 0, false, {\n                    fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 16\n                }, this) : codes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onPress: ()=>copyToClipboard(item.code),\n                        style: {\n                            backgroundColor: \"#242424\",\n                            padding: \"1vh\",\n                            borderRadius: 23,\n                            marginHorizontal: \"2vw\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                color: \"white\",\n                                fontSize: \"6vw\",\n                                marginLeft: \"3vw\"\n                            },\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 22\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 19\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 41,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n        lineNumber: 39,\n        columnNumber: 7\n    }, this);\n}\n_s(YourComponent, \"0n9QQbI3s+3fikQuO07AQuRJLuM=\");\n_c = YourComponent;\nvar _c;\n$RefreshReg$(_c, \"YourComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ1E7QUFDRztBQUNSO0FBRUU7QUFDRztBQUVyQyxTQUFTTzs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1AsTUFBTVMsYUFBYTtZQUNoQixNQUFNQyxNQUFNLE1BQU1MLG1FQUFRQTtZQUMxQixJQUFJSyxLQUFLO2dCQUNORixTQUFTRTtZQUNaO1FBQ0g7UUFDQUQ7SUFDSDtJQUVBLE1BQU1FLGtCQUFrQkMsQ0FBQUE7UUFDckJDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSDtJQUNqQztJQUVBLE1BQU1JLFlBQVk7UUFDZmIsaURBQUtBLENBQUNjLE9BQU8sQ0FBQztJQUNqQjtrQkFFQyw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBT0MsU0FBU0o7MEJBQVc7Ozs7OzswQkFDNUIsOERBQUNkLDBEQUFjQTs7Ozs7Ozs7Ozs7SUFLbEIscUJBQ0csOERBQUNnQjs7MEJBQ0UsOERBQUNkLDhEQUFNQTs7Ozs7MEJBQ1AsOERBQUNjO2dCQUNFRyxPQUFPO29CQUNKQyxTQUFTO29CQUNUQyxlQUFlO29CQUNmQyxLQUFLO29CQUNMQyxXQUFXO29CQUNYQyxjQUFjO2dCQUNqQjswQkFDQ25CLE1BQU1vQixNQUFNLEdBQUcsa0JBQ2IsOERBQUNDO29CQUFHUCxPQUFPO3dCQUFFUSxRQUFRO29CQUFNOzhCQUFHOzs7OzsyQkFFOUJ0QixNQUFNdUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNkLDhEQUFDL0Isd0RBQWdCQTt3QkFDZGdDLFNBQVMsSUFBTXRCLGdCQUFnQm9CLEtBQUtuQixJQUFJO3dCQUV4Q1MsT0FBTzs0QkFDSmEsaUJBQWlCOzRCQUNqQkMsU0FBUzs0QkFDVEMsY0FBYzs0QkFDZEMsa0JBQWtCO3dCQUNyQjtrQ0FDQSw0RUFBQ0M7NEJBQ0VqQixPQUFPO2dDQUNKa0IsT0FBTztnQ0FDUEMsVUFBVTtnQ0FDVkMsWUFBWTs0QkFDZjtzQ0FDQ1YsS0FBS1csS0FBSzs7Ozs7O3VCQWJUVjs7Ozs7Ozs7Ozs7Ozs7OztBQXFCMUI7R0FsRXdCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hvbWUvcGFnZS5qc3g/YTU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvdWNoYWJsZU9wYWNpdHkgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXdlYlwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyLmpzeFwiO1xuaW1wb3J0IGdldENvZGVzIGZyb20gXCIuLi8uLi9jb250cm9sbGVyL2dldENvZGVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXJDb21wb25lbnQoKSB7XG4gICBjb25zdCBbY29kZXMsIHNldENvZGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoQ29kZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRDb2RlcygpO1xuICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgc2V0Q29kZXMocmVzKTtcbiAgICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmZXRjaENvZGVzKCk7XG4gICB9KTtcblxuICAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gY29kZSA9PiB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKTtcbiAgIH07XG5cbiAgIGNvbnN0IHNob3dUb2FzdCA9ICgpID0+IHtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUaGlzIGlzIGEgc3VjY2VzcyBtZXNzYWdlIVwiKTtcbiAgIH07XG4gICBcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93VG9hc3R9PlNob3cgVG9hc3Q8L2J1dHRvbj5cbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgIDwvZGl2PlxuICBcblxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICBnYXA6IFwiMnZoXCIsXG4gICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTV2aFwiLFxuICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjV2aFwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjb2Rlcy5sZW5ndGggPCAxID8gKFxuICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIydndcIiB9fT5sb2FkaW5nLi48L2g0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgIGNvZGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQoaXRlbS5jb2RlKX1cbiAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNDI0MjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXZoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luSG9yaXpvbnRhbDogXCIydndcIlxuICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNnZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjN2d1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbiAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb3VjaGFibGVPcGFjaXR5IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIk5hdmJhciIsImdldENvZGVzIiwiWW91ckNvbXBvbmVudCIsImNvZGVzIiwic2V0Q29kZXMiLCJmZXRjaENvZGVzIiwicmVzIiwiY29weVRvQ2xpcGJvYXJkIiwiY29kZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNob3dUb2FzdCIsInN1Y2Nlc3MiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImg0IiwibWFyZ2luIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25QcmVzcyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ib3Jpem9udGFsIiwiaDMiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});