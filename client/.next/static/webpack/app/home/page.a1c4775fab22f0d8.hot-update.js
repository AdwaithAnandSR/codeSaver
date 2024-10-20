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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar.jsx */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var _controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controller/getCodes.js */ \"(app-pages-browser)/./controller/getCodes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction YourComponent() {\n    _s();\n    const [codes, setCodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCodes = async ()=>{\n            const res = await (0,_controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n            if (res) {\n                setCodes(res);\n            }\n        };\n        fetchCodes();\n    });\n    const copyCodeToClipboard = (code)=>{\n        var _navigator_clipboard, _navigator;\n        (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_clipboard = _navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText(code);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"code copied to clipboard.\");\n    };\n    const copyIdToClipboard = (id)=>{\n        var _navigator_clipboard, _navigator;\n        (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_clipboard = _navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText(id);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"_id copied to clipboard.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"2vh\",\n                    marginTop: \"15vh\",\n                    marginBottom: \"5vh\"\n                },\n                children: codes.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    style: {\n                        margin: \"2vw\"\n                    },\n                    children: \"loading..\"\n                }, void 0, false, {\n                    fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 16\n                }, this) : codes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onPress: ()=>copyCodeToClipboard(item.code),\n                        style: {\n                            backgroundColor: \"#242424\",\n                            borderRadius: 23,\n                            height: \"8vh\",\n                            marginHorizontal: \"2vw\",\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            paddingLeft: \"4vw\",\n                            gap: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                style: {\n                                    color: \"white\",\n                                    fontSize: \"3.5vw\"\n                                },\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 22\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                onPress: ()=>copyIdToClipboard(item._id),\n                                style: {\n                                    color: \"white\",\n                                    fontSize: \"3.5vw\",\n                                    position: \"absolute\",\n                                    right: \"5%\",\n                                    top: \"70%\",\n                                    zIndex: 50\n                                },\n                                children: item._id\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 19\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                position: \"bottom-center\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                theme: \"dark\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 85,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, this);\n}\n_s(YourComponent, \"0n9QQbI3s+3fikQuO07AQuRJLuM=\");\n_c = YourComponent;\nvar _c;\n$RefreshReg$(_c, \"YourComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNhO0FBQ0Y7QUFDUjtBQUVFO0FBQ0c7QUFFckMsU0FBU1E7O0lBQ3JCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNQLE1BQU1VLGFBQWE7WUFDaEIsTUFBTUMsTUFBTSxNQUFNTCxtRUFBUUE7WUFDMUIsSUFBSUssS0FBSztnQkFDTkYsU0FBU0U7WUFDWjtRQUNIO1FBQ0FEO0lBQ0g7SUFFQSxNQUFNRSxzQkFBc0JDLENBQUFBO1lBQ3pCQyxzQkFBQUE7U0FBQUEsYUFBQUEsdUJBQUFBLGtDQUFBQSx1QkFBQUEsV0FBV0MsU0FBUyxjQUFwQkQsMkNBQUFBLHFCQUFzQkUsU0FBUyxDQUFDSDtRQUNoQ1QsaURBQUtBLENBQUNhLE9BQU8sQ0FBQztJQUNqQjtJQUNBLE1BQU1DLG9CQUFvQkMsQ0FBQUE7WUFDdkJMLHNCQUFBQTtTQUFBQSxhQUFBQSx1QkFBQUEsa0NBQUFBLHVCQUFBQSxXQUFXQyxTQUFTLGNBQXBCRCwyQ0FBQUEscUJBQXNCRSxTQUFTLENBQUNHO1FBQ2hDZixpREFBS0EsQ0FBQ2EsT0FBTyxDQUFDO0lBQ2pCO0lBRUEscUJBQ0csOERBQUNHOzswQkFDRSw4REFBQ2YsOERBQU1BOzs7OzswQkFDUCw4REFBQ2U7Z0JBQ0VDLE9BQU87b0JBQ0pDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hDLGNBQWM7Z0JBQ2pCOzBCQUNDbEIsTUFBTW1CLE1BQU0sR0FBRyxrQkFDYiw4REFBQ0M7b0JBQUdQLE9BQU87d0JBQUVRLFFBQVE7b0JBQU07OEJBQUc7Ozs7OzJCQUU5QnJCLE1BQU1zQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUMvQix3REFBZ0JBO3dCQUNkZ0MsU0FBUyxJQUFNckIsb0JBQW9CbUIsS0FBS2xCLElBQUk7d0JBRTVDUSxPQUFPOzRCQUNKYSxpQkFBaUI7NEJBQ2pCQyxjQUFjOzRCQUNkQyxRQUFROzRCQUNSQyxrQkFBa0I7NEJBQ2xCZixTQUFTOzRCQUNUQyxlQUFlOzRCQUNmZSxhQUFhOzRCQUNiZCxLQUFLO3dCQUNSOzswQ0FDQSw4REFBQ3RCLHdEQUFJQTtnQ0FFRm1CLE9BQU87b0NBQ0prQixPQUFPO29DQUNQQyxVQUFVO2dDQUNiOzBDQUNDVCxLQUFLVSxLQUFLOzs7Ozs7MENBRWQsOERBQUN4Qyx3REFBZ0JBO2dDQUNkZ0MsU0FBUyxJQUFNZixrQkFBa0JhLEtBQUtXLEdBQUc7Z0NBQ3pDckIsT0FBTztvQ0FDSmtCLE9BQU87b0NBQ1BDLFVBQVU7b0NBQ1ZHLFVBQVU7b0NBQ1ZDLE9BQU87b0NBQ1BDLEtBQUs7b0NBQ0xDLFFBQVE7Z0NBQ1g7MENBQ0NmLEtBQUtXLEdBQUc7Ozs7Ozs7dUJBN0JQVjs7Ozs7Ozs7OzswQkFvQ2pCLDhEQUFDN0IsMERBQWNBO2dCQUNad0MsVUFBUztnQkFDVEksV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsYUFBYTtnQkFDYkMsS0FBSztnQkFDTEMsZ0JBQWdCO2dCQUNoQkMsU0FBUztnQkFDVEMsT0FBTTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBdkZ3QjlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob21lL3BhZ2UuanN4P2E1OWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb3VjaGFibGVPcGFjaXR5LCBUZXh0fSBmcm9tIFwicmVhY3QtbmF0aXZlLXdlYlwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyLmpzeFwiO1xuaW1wb3J0IGdldENvZGVzIGZyb20gXCIuLi8uLi9jb250cm9sbGVyL2dldENvZGVzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXJDb21wb25lbnQoKSB7XG4gICBjb25zdCBbY29kZXMsIHNldENvZGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoQ29kZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRDb2RlcygpO1xuICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgc2V0Q29kZXMocmVzKTtcbiAgICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmZXRjaENvZGVzKCk7XG4gICB9KTtcblxuICAgY29uc3QgY29weUNvZGVUb0NsaXBib2FyZCA9IGNvZGUgPT4ge1xuICAgICAgbmF2aWdhdG9yPy5jbGlwYm9hcmQ/LndyaXRlVGV4dChjb2RlKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJjb2RlIGNvcGllZCB0byBjbGlwYm9hcmQuXCIpO1xuICAgfTtcbiAgIGNvbnN0IGNvcHlJZFRvQ2xpcGJvYXJkID0gaWQgPT4ge1xuICAgICAgbmF2aWdhdG9yPy5jbGlwYm9hcmQ/LndyaXRlVGV4dChpZCk7XG4gICAgICB0b2FzdC5zdWNjZXNzKFwiX2lkIGNvcGllZCB0byBjbGlwYm9hcmQuXCIpO1xuICAgfTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgZ2FwOiBcIjJ2aFwiLFxuICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1dmhcIixcbiAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1dmhcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7Y29kZXMubGVuZ3RoIDwgMSA/IChcbiAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IFwiMnZ3XCIgfX0+bG9hZGluZy4uPC9oND5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICBjb2Rlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eVxuICAgICAgICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gY29weUNvZGVUb0NsaXBib2FyZChpdGVtLmNvZGUpfVxuICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI0MjQyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI4dmhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkhvcml6b250YWw6IFwiMnZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCI0dndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMFxuICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjMuNXZ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gY29weUlkVG9DbGlwYm9hcmQoaXRlbS5faWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzLjV2d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjUlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbiAgICAgICAgICAgICAgICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbiAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgICAgcG9zaXRpb249J2JvdHRvbS1jZW50ZXInXG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezIwMDB9XG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgdGhlbWU9J2RhcmsnXG4gICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVG91Y2hhYmxlT3BhY2l0eSIsIlRleHQiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiTmF2YmFyIiwiZ2V0Q29kZXMiLCJZb3VyQ29tcG9uZW50IiwiY29kZXMiLCJzZXRDb2RlcyIsImZldGNoQ29kZXMiLCJyZXMiLCJjb3B5Q29kZVRvQ2xpcGJvYXJkIiwiY29kZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInN1Y2Nlc3MiLCJjb3B5SWRUb0NsaXBib2FyZCIsImlkIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsImg0IiwibWFyZ2luIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25QcmVzcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1hcmdpbkhvcml6b250YWwiLCJwYWRkaW5nTGVmdCIsImNvbG9yIiwiZm9udFNpemUiLCJ0aXRsZSIsIl9pZCIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJ6SW5kZXgiLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJkcmFnZ2FibGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});