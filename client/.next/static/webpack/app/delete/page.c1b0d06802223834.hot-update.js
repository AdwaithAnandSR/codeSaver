"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/delete/page",{

/***/ "(app-pages-browser)/./app/delete/page.jsx":
/*!*****************************!*\
  !*** ./app/delete/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var _components_PasswordModel_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PasswordModel.jsx */ \"(app-pages-browser)/./components/PasswordModel.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = ()=>{\n    _s();\n    const [isModelOpen, setIsModelOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handlePasswordSubmit = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {},\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordModel_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModelOpen,\n                onSubmit: handlePasswordSubmit\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n                lineNumber: 15,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"enter _id here..\",\n                style: {\n                    width: \"85%\",\n                    height: \"4vh\",\n                    borderRadius: 23,\n                    border: 0,\n                    backgroundColor: \"#2c2c2c\",\n                    color: \"white\",\n                    padding: \"3vw\"\n                }\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                style: {\n                    backgroundColor: \"red\",\n                    width: \"85%\"\n                },\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Page, \"NsjAGHxfzRyXE/3fJAMJHpJsCXU=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZWxldGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFaUM7QUFDbUI7QUFFVztBQUUvRCxNQUFNRyxPQUFPOztJQUNWLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTSx1QkFBdUIsS0FBTztJQUVwQyxxQkFDRyw4REFBQ0M7UUFBSUMsT0FBTyxDQUFDOzswQkFDViw4REFBQ04scUVBQWFBO2dCQUFDTyxRQUFRTDtnQkFBYU0sVUFBVUo7Ozs7OzswQkFFOUMsOERBQUNLO2dCQUNFQyxhQUFZO2dCQUNaSixPQUFPO29CQUNKSyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxjQUFjO29CQUNkQyxRQUFRO29CQUNSQyxpQkFBaUI7b0JBQ2pCQyxPQUFPO29CQUNQQyxTQUFTO2dCQUNaOzs7Ozs7MEJBQ0EsOERBQUNsQix3REFBZ0JBO2dCQUFDTyxPQUFPO29CQUN0QlMsaUJBQWlCO29CQUNqQkosT0FBTztnQkFDVjswQkFBRzs7Ozs7Ozs7Ozs7O0FBT2Y7R0E5Qk1WO0tBQUFBO0FBZ0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kZWxldGUvcGFnZS5qc3g/NWQxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvdWNoYWJsZU9wYWNpdHkgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJztcblxuaW1wb3J0IFBhc3N3b3JkTW9kZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFzc3dvcmRNb2RlbC5qc3hcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgIGNvbnN0IFtpc01vZGVsT3Blbiwgc2V0SXNNb2RlbE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkU3VibWl0ID0gKCkgPT4ge307XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICA8UGFzc3dvcmRNb2RlbCBpc09wZW49e2lzTW9kZWxPcGVufSBvblN1Ym1pdD17aGFuZGxlUGFzc3dvcmRTdWJtaXR9IC8+XG5cbiAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2VudGVyIF9pZCBoZXJlLi4nXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgd2lkdGg6IFwiODUlXCIsXG4gICAgICAgICAgICAgICBoZWlnaHQ6IFwiNHZoXCIsXG4gICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIzLFxuICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYzJjMmNcIixcbiAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICBwYWRkaW5nOiAnM3Z3JyxcbiAgICAgICAgICAgIH19PjwvaW5wdXQ+XG4gICAgICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBzdHlsZT17e1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgIHdpZHRoOiAnODUlJyxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHkgPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUb3VjaGFibGVPcGFjaXR5IiwiUGFzc3dvcmRNb2RlbCIsIlBhZ2UiLCJpc01vZGVsT3BlbiIsInNldElzTW9kZWxPcGVuIiwiaGFuZGxlUGFzc3dvcmRTdWJtaXQiLCJkaXYiLCJzdHlsZSIsImlzT3BlbiIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/delete/page.jsx\n"));

/***/ })

});