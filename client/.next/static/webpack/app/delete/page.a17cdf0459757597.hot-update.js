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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var _components_PasswordModel_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PasswordModel.jsx */ \"(app-pages-browser)/./components/PasswordModel.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = ()=>{\n    _s();\n    const [isModelOpen, setIsModelOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handlePasswordSubmit = (pass)=>{\n        const password = \"adwaithgayu\";\n        if (pass.trim() === password) setIsModelOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            gap: \"5vh\",\n            alignItems: \"center\",\n            marginTop: \"10vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PasswordModel_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModelOpen,\n                onSubmit: handlePasswordSubmit\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n                lineNumber: 25,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Delete Code\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"enter _id here..\",\n                style: {\n                    width: \"85%\",\n                    height: \"4vh\",\n                    borderRadius: 23,\n                    border: 0,\n                    backgroundColor: \"#2c2c2c\",\n                    color: \"white\",\n                    padding: \"3vw\"\n                }\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n                lineNumber: 27,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                style: {\n                    backgroundColor: \"red\",\n                    width: \"85%\",\n                    height: \"5vh\",\n                    borderRadius: 23,\n                    color: \"white\",\n                    border: 0,\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n                lineNumber: 38,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/delete/page.jsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Page, \"NsjAGHxfzRyXE/3fJAMJHpJsCXU=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZWxldGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFaUM7QUFDbUI7QUFFVztBQUUvRCxNQUFNRyxPQUFPOztJQUNWLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTSx1QkFBdUJDLENBQUFBO1FBQzFCLE1BQU1DLFdBQVdDLGFBQXNDO1FBQ3ZELElBQUlGLEtBQUtLLElBQUksT0FBT0osVUFBVUgsZUFBZTtJQUNoRDtJQUVBLHFCQUNHLDhEQUFDUTtRQUNFQyxPQUFPO1lBQ0pDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxLQUFLO1lBQ0xDLFlBQVk7WUFDWkMsV0FBVztRQUNkOzswQkFDQSw4REFBQ2pCLHFFQUFhQTtnQkFBQ2tCLFFBQVFoQjtnQkFBYWlCLFVBQVVmOzs7Ozs7MEJBQzlDLDhEQUFDZ0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQ0VDLGFBQVk7Z0JBQ1pWLE9BQU87b0JBQ0pXLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLGNBQWM7b0JBQ2RDLFFBQVE7b0JBQ1JDLGlCQUFpQjtvQkFDakJDLE9BQU87b0JBQ1BDLFNBQVM7Z0JBQ1o7Ozs7OzswQkFDSCw4REFBQzlCLHdEQUFnQkE7Z0JBR2RhLE9BQU87b0JBQ0plLGlCQUFpQjtvQkFDakJKLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLGNBQWM7b0JBQ2RHLE9BQU87b0JBQ1BGLFFBQVE7b0JBQ1JiLFNBQVM7b0JBQ1RpQixnQkFBZ0I7b0JBQ2hCZCxZQUFZO2dCQUNmOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFLZjtHQWhETWY7S0FBQUE7QUFrRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RlbGV0ZS9wYWdlLmpzeD81ZDE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gXCJyZWFjdC1uYXRpdmUtd2ViXCI7XG5cbmltcG9ydCBQYXNzd29yZE1vZGVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bhc3N3b3JkTW9kZWwuanN4XCI7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICBjb25zdCBbaXNNb2RlbE9wZW4sIHNldElzTW9kZWxPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICBjb25zdCBoYW5kbGVQYXNzd29yZFN1Ym1pdCA9IHBhc3MgPT4ge1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BRE1JTl9QQVNTV09SRDtcbiAgICAgIGlmIChwYXNzLnRyaW0oKSA9PT0gcGFzc3dvcmQpIHNldElzTW9kZWxPcGVuKGZhbHNlKTtcbiAgIH07XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgZ2FwOiBcIjV2aFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMHZoXCJcbiAgICAgICAgIH19PlxuICAgICAgICAgPFBhc3N3b3JkTW9kZWwgaXNPcGVuPXtpc01vZGVsT3Blbn0gb25TdWJtaXQ9e2hhbmRsZVBhc3N3b3JkU3VibWl0fSAvPlxuICAgICAgICAgPGgxPkRlbGV0ZSBDb2RlPC9oMT5cbiAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2VudGVyIF9pZCBoZXJlLi4nXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgd2lkdGg6IFwiODUlXCIsXG4gICAgICAgICAgICAgICBoZWlnaHQ6IFwiNHZoXCIsXG4gICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIzLFxuICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYzJjMmNcIixcbiAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICBwYWRkaW5nOiBcIjN2d1wiXG4gICAgICAgICAgICB9fT48L2lucHV0PlxuICAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHlcbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgd2lkdGg6IFwiODUlXCIsXG4gICAgICAgICAgICAgICBoZWlnaHQ6IFwiNXZoXCIsXG4gICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIzLFxuICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgPC9kaXY+XG4gICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRvdWNoYWJsZU9wYWNpdHkiLCJQYXNzd29yZE1vZGVsIiwiUGFnZSIsImlzTW9kZWxPcGVuIiwic2V0SXNNb2RlbE9wZW4iLCJoYW5kbGVQYXNzd29yZFN1Ym1pdCIsInBhc3MiLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BRE1JTl9QQVNTV09SRCIsInRyaW0iLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsImlzT3BlbiIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/delete/page.jsx\n"));

/***/ })

});