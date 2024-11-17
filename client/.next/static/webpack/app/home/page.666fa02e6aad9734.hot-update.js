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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive */ \"(app-pages-browser)/./node_modules/react-responsive/dist/esm/index.js\");\n/* harmony import */ var _components_Navbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar.jsx */ \"(app-pages-browser)/./components/Navbar.jsx\");\n/* harmony import */ var _controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controller/getCodes.js */ \"(app-pages-browser)/./controller/getCodes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction YourComponent() {\n    _s();\n    const [codes, setCodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)({\n        minWidth: 768\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCodes = async ()=>{\n            const res = await (0,_controller_getCodes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n            if (res) {\n                setCodes(res);\n            }\n        };\n        fetchCodes();\n    }, []);\n    const copyCodeToClipboard = (code)=>{\n        var _navigator_clipboard, _navigator;\n        (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_clipboard = _navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText(code);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"code copied to clipboard.\");\n    };\n    const copyIdToClipboard = (id)=>{\n        var _navigator_clipboard, _navigator;\n        (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_clipboard = _navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : _navigator_clipboard.writeText(id);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"_id copied to clipboard.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            gap: \"2vh\",\n            height: \"75vh\",\n            overflowY: \"auto\",\n            padding: \"1vh\",\n            paddingBottom: \"15vh\",\n            backgroundColor: \"black\"\n        },\n        children: codes.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            style: {\n                margin: \"2vw\"\n            },\n            children: \"loading..\"\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/home/page.jsx\",\n            lineNumber: 49,\n            columnNumber: 16\n        }, this) : codes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onPress: ()=>copyCodeToClipboard(item.code),\n                style: {\n                    backgroundColor: \"#242424\",\n                    borderRadius: 23,\n                    height: isDesktop ? \"20vh\" : \"9vh\",\n                    marginHorizontal: \"2vw\",\n                    paddingLeft: \"4vw\",\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        numberOfLines: 1,\n                        style: {\n                            color: \"white\",\n                            fontSize: isDesktop ? \"3vw\" : \"4vw\",\n                            width: \"90%\",\n                            fontWeight: \"bold\"\n                        },\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/home/page.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 22\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onPress: ()=>copyIdToClipboard(item._id),\n                        style: {\n                            color: \"white\",\n                            fontSize: \"3.5vw\",\n                            position: \"absolute\",\n                            right: \"3%\",\n                            bottom: \"10%\",\n                            zIndex: 50,\n                            color: \"#a1a1a1d9\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            numberOfLines: 1,\n                            style: {\n                                color: \"white\",\n                                fontSize: isDesktop ? \"2vw\" : \"3vw\"\n                            },\n                            children: item._id\n                        }, void 0, false, {\n                            fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/home/page.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 22\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/home/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/home/page.jsx\",\n                lineNumber: 52,\n                columnNumber: 19\n            }, this))\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/home/page.jsx\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n}\n_s(YourComponent, \"pbQWrUoV0YuaCsATXuXq9HxC2F0=\", false, function() {\n    return [\n        react_responsive__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery\n    ];\n});\n_c = YourComponent;\nvar _c;\n$RefreshReg$(_c, \"YourComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYztBQUNIO0FBQ1I7QUFDQztBQUVDO0FBQ0c7QUFFckMsU0FBU1M7O0lBQ3JCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU1ZLFlBQVlOLCtEQUFhQSxDQUFDO1FBQUVPLFVBQVU7SUFBSTtJQUVoRFosZ0RBQVNBLENBQUM7UUFDUCxNQUFNYSxhQUFhO1lBQ2hCLE1BQU1DLE1BQU0sTUFBTVAsbUVBQVFBO1lBQzFCLElBQUlPLEtBQUs7Z0JBQ05KLFNBQVNJO1lBQ1o7UUFDSDtRQUNBRDtJQUNILEdBQUcsRUFBRTtJQUVMLE1BQU1FLHNCQUFzQkMsQ0FBQUE7WUFDekJDLHNCQUFBQTtTQUFBQSxhQUFBQSx1QkFBQUEsa0NBQUFBLHVCQUFBQSxXQUFXQyxTQUFTLGNBQXBCRCwyQ0FBQUEscUJBQXNCRSxTQUFTLENBQUNIO1FBQ2hDWixpREFBS0EsQ0FBQ2dCLE9BQU8sQ0FBQztJQUNqQjtJQUNBLE1BQU1DLG9CQUFvQkMsQ0FBQUE7WUFFdkJMLHNCQUFBQTtTQUFBQSxhQUFBQSx1QkFBQUEsa0NBQUFBLHVCQUFBQSxXQUFXQyxTQUFTLGNBQXBCRCwyQ0FBQUEscUJBQXNCRSxTQUFTLENBQUNHO1FBQ2hDbEIsaURBQUtBLENBQUNnQixPQUFPLENBQUM7SUFDakI7SUFFQSxxQkFFTSw4REFBQ0c7UUFDRUMsT0FBTztZQUNKQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGlCQUFpQjtRQUNwQjtrQkFDQ3ZCLE1BQU13QixNQUFNLEdBQUcsa0JBQ2IsOERBQUNDO1lBQUdWLE9BQU87Z0JBQUVXLFFBQVE7WUFBTTtzQkFBRzs7Ozs7bUJBRTlCMUIsTUFBTTJCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ3JDLHdEQUFnQkE7Z0JBQ2RzQyxTQUFTLElBQU14QixvQkFBb0JzQixLQUFLckIsSUFBSTtnQkFFNUNRLE9BQU87b0JBQ0pRLGlCQUFpQjtvQkFDakJRLGNBQWM7b0JBQ2RaLFFBQVFqQixZQUFZLFNBQVM7b0JBQzdCOEIsa0JBQWtCO29CQUNsQkMsYUFBYTtvQkFDYmpCLFNBQVM7b0JBQ1RrQixnQkFBZ0I7Z0JBQ25COztrQ0FDQSw4REFBQ3pDLHdEQUFJQTt3QkFDRjBDLGVBQWU7d0JBQ2ZwQixPQUFPOzRCQUNKcUIsT0FBTzs0QkFDUEMsVUFBVW5DLFlBQVksUUFBUTs0QkFDOUJvQyxPQUFPOzRCQUNQQyxZQUFZO3dCQUNmO2tDQUNDWCxLQUFLWSxLQUFLOzs7Ozs7a0NBRWQsOERBQUNoRCx3REFBZ0JBO3dCQUNkc0MsU0FBUyxJQUFNbEIsa0JBQWtCZ0IsS0FBS2EsR0FBRzt3QkFDekMxQixPQUFPOzRCQUNKcUIsT0FBTzs0QkFDUEMsVUFBVTs0QkFDVkssVUFBVTs0QkFDVkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsUUFBUTs0QkFDUlQsT0FBTzt3QkFDVjtrQ0FDSCw0RUFBQzNDLHdEQUFJQTs0QkFDRjBDLGVBQWU7NEJBQ2ZwQixPQUFPO2dDQUNKcUIsT0FBTztnQ0FDUEMsVUFBVW5DLFlBQVksUUFBUTs0QkFDakM7c0NBQ0MwQixLQUFLYSxHQUFHOzs7Ozs7Ozs7Ozs7ZUFyQ1BaOzs7Ozs7Ozs7O0FBNkMxQjtHQXhGd0I5Qjs7UUFFSEgsMkRBQWFBOzs7S0FGVkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hvbWUvcGFnZS5qc3g/YTU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvdWNoYWJsZU9wYWNpdHksIFRleHQgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXdlYlwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSdcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXIuanN4XCI7XG5pbXBvcnQgZ2V0Q29kZXMgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXIvZ2V0Q29kZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWW91ckNvbXBvbmVudCgpIHtcbiAgIGNvbnN0IFtjb2Rlcywgc2V0Q29kZXNdID0gdXNlU3RhdGUoW10pO1xuICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiA3NjggfSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBmZXRjaENvZGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q29kZXMoKTtcbiAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHNldENvZGVzKHJlcyk7XG4gICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZmV0Y2hDb2RlcygpO1xuICAgfSwgW10pO1xuXG4gICBjb25zdCBjb3B5Q29kZVRvQ2xpcGJvYXJkID0gY29kZSA9PiB7XG4gICAgICBuYXZpZ2F0b3I/LmNsaXBib2FyZD8ud3JpdGVUZXh0KGNvZGUpO1xuICAgICAgdG9hc3Quc3VjY2VzcyhcImNvZGUgY29waWVkIHRvIGNsaXBib2FyZC5cIik7XG4gICB9O1xuICAgY29uc3QgY29weUlkVG9DbGlwYm9hcmQgPSBpZCA9PiB7XG4gICAgICBcbiAgICAgIG5hdmlnYXRvcj8uY2xpcGJvYXJkPy53cml0ZVRleHQoaWQpO1xuICAgICAgdG9hc3Quc3VjY2VzcyhcIl9pZCBjb3BpZWQgdG8gY2xpcGJvYXJkLlwiKTtcbiAgIH07XG5cbiAgIHJldHVybiAoXG5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICBnYXA6IFwiMnZoXCIsXG4gICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzV2aFwiLFxuICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgICAgICBwYWRkaW5nOiAnMXZoJyxcbiAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcxNXZoJyxcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAge2NvZGVzLmxlbmd0aCA8IDEgPyAoXG4gICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjJ2d1wiIH19PmxvYWRpbmcuLjwvaDQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgY29kZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IGNvcHlDb2RlVG9DbGlwYm9hcmQoaXRlbS5jb2RlKX1cbiAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNDI0MjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzRGVza3RvcCA/IFwiMjB2aFwiIDogXCI5dmhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkhvcml6b250YWw6IFwiMnZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCI0dndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZMaW5lcz17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGlzRGVza3RvcCA/IFwiM3Z3XCIgOiBcIjR2d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBjb3B5SWRUb0NsaXBib2FyZChpdGVtLl9pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjMuNXZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzEwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYTFhMWExZDknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZMaW5lcz17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGlzRGVza3RvcCA/IFwiMnZ3XCIgOiBcIjN2d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5faWR9XG4gICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgIDwvZGl2PlxuICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRvdWNoYWJsZU9wYWNpdHkiLCJUZXh0IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZU1lZGlhUXVlcnkiLCJOYXZiYXIiLCJnZXRDb2RlcyIsIllvdXJDb21wb25lbnQiLCJjb2RlcyIsInNldENvZGVzIiwiaXNEZXNrdG9wIiwibWluV2lkdGgiLCJmZXRjaENvZGVzIiwicmVzIiwiY29weUNvZGVUb0NsaXBib2FyZCIsImNvZGUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzdWNjZXNzIiwiY29weUlkVG9DbGlwYm9hcmQiLCJpZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwicGFkZGluZ0JvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImxlbmd0aCIsImg0IiwibWFyZ2luIiwibWFwIiwiaXRlbSIsImluZGV4Iiwib25QcmVzcyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkhvcml6b250YWwiLCJwYWRkaW5nTGVmdCIsImp1c3RpZnlDb250ZW50IiwibnVtYmVyT2ZMaW5lcyIsImNvbG9yIiwiZm9udFNpemUiLCJ3aWR0aCIsImZvbnRXZWlnaHQiLCJ0aXRsZSIsIl9pZCIsInBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});