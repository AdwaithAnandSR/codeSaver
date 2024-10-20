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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar.jsx */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var _controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controller/getCodes.js */ \"(app-pages-browser)/./controller/getCodes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction YourComponent() {\n    _s();\n    const [codes, setCodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCodes = async ()=>{\n            const res = await (0,_controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n            if (res) {\n                setCodes(res);\n            }\n        };\n        fetchCodes();\n    });\n    const copyCodeToClipboard = (code)=>{\n        var _navigator_clipboard, _navigator;\n        (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_clipboard = _navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText(code);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"code copied to clipboard.\");\n    };\n    const copyIdToClipboard = (id)=>{\n        var _navigator_clipboard, _navigator;\n        (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_clipboard = _navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText(id);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"_id copied to clipboard.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 34,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"2vh\",\n                    marginTop: \"15vh\",\n                    marginBottom: \"5vh\"\n                },\n                children: codes.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    style: {\n                        margin: \"2vw\"\n                    },\n                    children: \"loading..\"\n                }, void 0, false, {\n                    fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 16\n                }, this) : codes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        onPress: ()=>copyCodeToClipboard(item.code),\n                        style: {\n                            backgroundColor: \"#242424\",\n                            borderRadius: 23,\n                            height: \"8vh\",\n                            marginHorizontal: \"2vw\",\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            justifyContent: \"\",\n                            paddingLeft: \"4vw\",\n                            gap: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                numberOfLines: 1,\n                                style: {\n                                    color: \"white\",\n                                    fontSize: \"3.5vw\"\n                                },\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 22\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                onPress: ()=>copyIdToClipboard(item._id),\n                                style: {\n                                    color: \"white\",\n                                    fontSize: \"3.5vw\",\n                                    position: \"absolute\",\n                                    right: \"5%\",\n                                    top: \"70%\",\n                                    zIndex: 50\n                                },\n                                children: item._id\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 19\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                position: \"bottom-center\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                theme: \"dark\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n                lineNumber: 86,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/home/page.jsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, this);\n}\n_s(YourComponent, \"0n9QQbI3s+3fikQuO07AQuRJLuM=\");\n_c = YourComponent;\nvar _c;\n$RefreshReg$(_c, \"YourComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNhO0FBQ0Y7QUFDUjtBQUVFO0FBQ0c7QUFFckMsU0FBU1E7O0lBQ3JCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNQLE1BQU1VLGFBQWE7WUFDaEIsTUFBTUMsTUFBTSxNQUFNTCxtRUFBUUE7WUFDMUIsSUFBSUssS0FBSztnQkFDTkYsU0FBU0U7WUFDWjtRQUNIO1FBQ0FEO0lBQ0g7SUFFQSxNQUFNRSxzQkFBc0JDLENBQUFBO1lBQ3pCQyxzQkFBQUE7U0FBQUEsYUFBQUEsdUJBQUFBLGtDQUFBQSx1QkFBQUEsV0FBV0MsU0FBUyxjQUFwQkQsMkNBQUFBLHFCQUFzQkUsU0FBUyxDQUFDSDtRQUNoQ1QsaURBQUtBLENBQUNhLE9BQU8sQ0FBQztJQUNqQjtJQUNBLE1BQU1DLG9CQUFvQkMsQ0FBQUE7WUFDdkJMLHNCQUFBQTtTQUFBQSxhQUFBQSx1QkFBQUEsa0NBQUFBLHVCQUFBQSxXQUFXQyxTQUFTLGNBQXBCRCwyQ0FBQUEscUJBQXNCRSxTQUFTLENBQUNHO1FBQ2hDZixpREFBS0EsQ0FBQ2EsT0FBTyxDQUFDO0lBQ2pCO0lBRUEscUJBQ0csOERBQUNHOzswQkFDRSw4REFBQ2YsOERBQU1BOzs7OzswQkFDUCw4REFBQ2U7Z0JBQ0VDLE9BQU87b0JBQ0pDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hDLGNBQWM7Z0JBQ2pCOzBCQUNDbEIsTUFBTW1CLE1BQU0sR0FBRyxrQkFDYiw4REFBQ0M7b0JBQUdQLE9BQU87d0JBQUVRLFFBQVE7b0JBQU07OEJBQUc7Ozs7OzJCQUU5QnJCLE1BQU1zQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUMvQix3REFBZ0JBO3dCQUNkZ0MsU0FBUyxJQUFNckIsb0JBQW9CbUIsS0FBS2xCLElBQUk7d0JBRTVDUSxPQUFPOzRCQUNKYSxpQkFBaUI7NEJBQ2pCQyxjQUFjOzRCQUNkQyxRQUFROzRCQUNSQyxrQkFBa0I7NEJBQ2xCZixTQUFTOzRCQUNUQyxlQUFlOzRCQUNmZSxnQkFBZ0I7NEJBQ2hCQyxhQUFhOzRCQUNiZixLQUFLO3dCQUNSOzswQ0FDQSw4REFBQ3RCLHdEQUFJQTtnQ0FDRnNDLGVBQWU7Z0NBQ2ZuQixPQUFPO29DQUNKb0IsT0FBTztvQ0FDUEMsVUFBVTtnQ0FDYjswQ0FDQ1gsS0FBS1ksS0FBSzs7Ozs7OzBDQUVkLDhEQUFDMUMsd0RBQWdCQTtnQ0FDZGdDLFNBQVMsSUFBTWYsa0JBQWtCYSxLQUFLYSxHQUFHO2dDQUN6Q3ZCLE9BQU87b0NBQ0pvQixPQUFPO29DQUNQQyxVQUFVO29DQUNWRyxVQUFVO29DQUNWQyxPQUFPO29DQUNQQyxLQUFLO29DQUNMQyxRQUFRO2dDQUNYOzBDQUNDakIsS0FBS2EsR0FBRzs7Ozs7Ozt1QkE5QlBaOzs7Ozs7Ozs7OzBCQXFDakIsOERBQUM3QiwwREFBY0E7Z0JBQ1owQyxVQUFTO2dCQUNUSSxXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxhQUFhO2dCQUNiQyxLQUFLO2dCQUNMQyxnQkFBZ0I7Z0JBQ2hCQyxTQUFTO2dCQUNUQyxPQUFNOzs7Ozs7Ozs7Ozs7QUFJbEI7R0F4RndCaEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hvbWUvcGFnZS5qc3g/YTU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvdWNoYWJsZU9wYWNpdHksIFRleHR9IGZyb20gXCJyZWFjdC1uYXRpdmUtd2ViXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXIuanN4XCI7XG5pbXBvcnQgZ2V0Q29kZXMgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXIvZ2V0Q29kZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWW91ckNvbXBvbmVudCgpIHtcbiAgIGNvbnN0IFtjb2Rlcywgc2V0Q29kZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hDb2RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldENvZGVzKCk7XG4gICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBzZXRDb2RlcyhyZXMpO1xuICAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZldGNoQ29kZXMoKTtcbiAgIH0pO1xuXG4gICBjb25zdCBjb3B5Q29kZVRvQ2xpcGJvYXJkID0gY29kZSA9PiB7XG4gICAgICBuYXZpZ2F0b3I/LmNsaXBib2FyZD8ud3JpdGVUZXh0KGNvZGUpO1xuICAgICAgdG9hc3Quc3VjY2VzcyhcImNvZGUgY29waWVkIHRvIGNsaXBib2FyZC5cIik7XG4gICB9O1xuICAgY29uc3QgY29weUlkVG9DbGlwYm9hcmQgPSBpZCA9PiB7XG4gICAgICBuYXZpZ2F0b3I/LmNsaXBib2FyZD8ud3JpdGVUZXh0KGlkKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJfaWQgY29waWVkIHRvIGNsaXBib2FyZC5cIik7XG4gICB9O1xuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICBnYXA6IFwiMnZoXCIsXG4gICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTV2aFwiLFxuICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjV2aFwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjb2Rlcy5sZW5ndGggPCAxID8gKFxuICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCIydndcIiB9fT5sb2FkaW5nLi48L2g0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgIGNvZGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBjb3B5Q29kZVRvQ2xpcGJvYXJkKGl0ZW0uY29kZSl9XG4gICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjQyNDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjh2aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luSG9yaXpvbnRhbDogXCIydndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjR2d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAwXG4gICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZkxpbmVzPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzLjV2d1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IGNvcHlJZFRvQ2xpcGJvYXJkKGl0ZW0uX2lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMy41dndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCI1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjcwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5faWR9XG4gICAgICAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICAgIHBvc2l0aW9uPSdib3R0b20tY2VudGVyJ1xuICAgICAgICAgICAgYXV0b0Nsb3NlPXsyMDAwfVxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgICAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIHRoZW1lPSdkYXJrJ1xuICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRvdWNoYWJsZU9wYWNpdHkiLCJUZXh0IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIk5hdmJhciIsImdldENvZGVzIiwiWW91ckNvbXBvbmVudCIsImNvZGVzIiwic2V0Q29kZXMiLCJmZXRjaENvZGVzIiwicmVzIiwiY29weUNvZGVUb0NsaXBib2FyZCIsImNvZGUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzdWNjZXNzIiwiY29weUlkVG9DbGlwYm9hcmQiLCJpZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJoNCIsIm1hcmdpbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uUHJlc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJtYXJnaW5Ib3Jpem9udGFsIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nTGVmdCIsIm51bWJlck9mTGluZXMiLCJjb2xvciIsImZvbnRTaXplIiwidGl0bGUiLCJfaWQiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiekluZGV4IiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJydGwiLCJwYXVzZU9uRm9jdXNMb3NzIiwiZHJhZ2dhYmxlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});