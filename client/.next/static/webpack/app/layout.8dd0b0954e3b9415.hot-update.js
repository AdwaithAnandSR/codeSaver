"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ \"(app-pages-browser)/./node_modules/react-responsive/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)({\n        minWidth: 768\n    });\n    const fetchHome = ()=>{\n        if (pathname != \"/home\") {\n            router.replace(\"/home\");\n        }\n    };\n    const fetchUpload = ()=>{\n        if (pathname != \"/upload\") {\n            router.replace(\"/upload\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            height: isDesktop ? \"20vh\" : \"9vh\",\n            paddingLeft: \"3vw\",\n            backgroundColor: \"black\",\n            color: \"white\",\n            position: \"relative\",\n            zIndex: 999,\n            padding: isDesktop ? 30 : 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            style: {\n                fontSize: isDesktop ? \"1.5vw\" : \"4vw\"\n            },\n            onPress: fetchHome,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"CodeSpace\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSpace/client/components/Navbar.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/codeSpace/client/components/Navbar.jsx\",\n            lineNumber: 41,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/codeSpace/client/components/Navbar.jsx\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Navbar, \"52jE4NxKZLEcQ2wyJdAouWzjEDY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        react_responsive__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkI7QUFDNEI7QUFDYjtBQUNRO0FBQ0o7QUFHaEQsTUFBTU8sU0FBUzs7SUFDWixNQUFNQyxTQUFTUCwwREFBU0E7SUFDeEIsTUFBTVEsV0FBV1AsNERBQVdBO0lBQzVCLE1BQU1RLFlBQVlKLCtEQUFhQSxDQUFDO1FBQUVLLFVBQVU7SUFBSTtJQUdoRCxNQUFNQyxZQUFZO1FBQ2YsSUFBSUgsWUFBWSxTQUFTO1lBQ3RCRCxPQUFPSyxPQUFPLENBQUM7UUFDbEI7SUFDSDtJQUVBLE1BQU1DLGNBQWM7UUFDakIsSUFBSUwsWUFBWSxXQUFXO1lBQ3hCRCxPQUFPSyxPQUFPLENBQUM7UUFDbEI7SUFDSDtJQUVBLHFCQUNHLDhEQUFDRTtRQUNFQyxPQUFPO1lBQ0pDLFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxnQkFBZ0I7WUFDaEJDLFFBQVFWLFlBQVksU0FBUztZQUM3QlcsYUFBYTtZQUNiQyxpQkFBaUI7WUFDakJDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLFNBQVNoQixZQUFXLEtBQUk7UUFDM0I7a0JBQ0EsNEVBQUNMLHdEQUFnQkE7WUFBQ1csT0FBTztnQkFBRVcsVUFBV2pCLFlBQVksVUFBVTtZQUFLO1lBQUdrQixTQUFTaEI7c0JBQzFFLDRFQUFDaUI7MEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0FyQ010Qjs7UUFDWU4sc0RBQVNBO1FBQ1BDLHdEQUFXQTtRQUNWSSwyREFBYUE7OztLQUg1QkM7QUF1Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4PzNhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG91Y2hhYmxlT3BhY2l0eSB9IGZyb20gXCJyZWFjdC1uYXRpdmUtd2ViXCI7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSdcblxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkoeyBtaW5XaWR0aDogNzY4IH0pO1xuICAgXG5cbiAgIGNvbnN0IGZldGNoSG9tZSA9ICgpID0+IHtcbiAgICAgIGlmIChwYXRobmFtZSAhPSBcIi9ob21lXCIpIHtcbiAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2hvbWVcIik7XG4gICAgICB9XG4gICB9O1xuXG4gICBjb25zdCBmZXRjaFVwbG9hZCA9ICgpID0+IHtcbiAgICAgIGlmIChwYXRobmFtZSAhPSBcIi91cGxvYWRcIikge1xuICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvdXBsb2FkXCIpO1xuICAgICAgfVxuICAgfTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IGlzRGVza3RvcCA/IFwiMjB2aFwiIDogXCI5dmhcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjN2d1wiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgcGFkZGluZzogaXNEZXNrdG9wPyAzMCA6MCxcbiAgICAgICAgIH19PlxuICAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHkgc3R5bGU9e3sgZm9udFNpemU6ICBpc0Rlc2t0b3AgPyAnMS41dncnIDogJzR2dyd9fSBvblByZXNzPXtmZXRjaEhvbWV9PlxuICAgICAgICAgICAgPGgxPkNvZGVTcGFjZTwvaDE+XG4gICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICA8L2Rpdj5cbiAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVBhdGhuYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb3VjaGFibGVPcGFjaXR5IiwidXNlTWVkaWFRdWVyeSIsIk5hdmJhciIsInJvdXRlciIsInBhdGhuYW1lIiwiaXNEZXNrdG9wIiwibWluV2lkdGgiLCJmZXRjaEhvbWUiLCJyZXBsYWNlIiwiZmV0Y2hVcGxvYWQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWRkaW5nTGVmdCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJvblByZXNzIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.jsx\n"));

/***/ })

});