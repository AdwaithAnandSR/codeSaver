"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const api = \"http://localhost:4000\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchHealth = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(api, \"/health\"));\n            return res.status === 200;\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"connection failed: Retrying in 10 seconds...\");\n            console.error(\"Error fetching health:\", error);\n            return false;\n        }\n    };\n    const initApp = async ()=>{\n        const isConnected = await fetchHealth();\n        if (isConnected) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"connect to the server.\");\n            router.push(\"/home\");\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"connection failed: Retrying in 10 seconds...\");\n            setTimeout(initApp, 10000);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        initApp();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"80vh\",\n            fontSize: \"8vw\",\n            position: \"relative\",\n            top: 0,\n            zIndex: 999999\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"CodeSpace\"\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/page.js\",\n            lineNumber: 53,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/page.js\",\n        lineNumber: 42,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDRztBQUNlO0FBQ1Y7QUFDcUI7QUFDUjtBQUVoQyxTQUFTTTs7SUFDckIsTUFBTUMsTUFBTUMsdUJBQStCO0lBRTNDLE1BQU1HLFNBQVNULDBEQUFTQTtJQUV4QixNQUFNVSxjQUFjO1FBQ2pCLElBQUk7WUFDRCxNQUFNQyxNQUFNLE1BQU1iLDZDQUFLQSxDQUFDYyxHQUFHLENBQUMsR0FBTyxPQUFKUCxLQUFJO1lBQ25DLE9BQU9NLElBQUlFLE1BQU0sS0FBSztRQUN6QixFQUFFLE9BQU9DLE9BQU87WUFDYlgsaURBQUtBLENBQUNXLEtBQUssQ0FBQztZQUNaQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUN4QyxPQUFPO1FBQ1Y7SUFDSDtJQUVBLE1BQU1FLFVBQVU7UUFDYixNQUFNQyxjQUFjLE1BQU1QO1FBQzFCLElBQUlPLGFBQWE7WUFDZGQsaURBQUtBLENBQUNlLE9BQU8sQ0FBQztZQUNkVCxPQUFPVSxJQUFJLENBQUM7UUFDZixPQUFPO1lBQ0poQixpREFBS0EsQ0FBQ1csS0FBSyxDQUFDO1lBQ1pNLFdBQVdKLFNBQVM7UUFDdkI7SUFDSDtJQUVBZixnREFBU0EsQ0FBQztRQUNQZTtJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNHLDhEQUFDSztRQUNFQyxPQUFPO1lBQ0pDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsUUFBUTtRQUNYO2tCQUNBLDRFQUFDQztzQkFBRzs7Ozs7Ozs7Ozs7QUFHYjtHQTlDd0IzQjs7UUFHTkosc0RBQVNBOzs7S0FISEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgLy8gTWFya3MgdGhlIGNvbXBvbmVudCBhcyBhIENsaWVudCBDb21wb25lbnRcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgIGNvbnN0IGFwaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XG5cbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICBjb25zdCBmZXRjaEhlYWx0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpfS9oZWFsdGhgKTtcbiAgICAgICAgIHJldHVybiByZXMuc3RhdHVzID09PSAyMDA7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgdG9hc3QuZXJyb3IoXCJjb25uZWN0aW9uIGZhaWxlZDogUmV0cnlpbmcgaW4gMTAgc2Vjb25kcy4uLlwiKTtcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBoZWFsdGg6XCIsIGVycm9yKTtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgIH07XG5cbiAgIGNvbnN0IGluaXRBcHAgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IGZldGNoSGVhbHRoKCk7XG4gICAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJjb25uZWN0IHRvIHRoZSBzZXJ2ZXIuXCIpO1xuICAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0b2FzdC5lcnJvcihcImNvbm5lY3Rpb24gZmFpbGVkOiBSZXRyeWluZyBpbiAxMCBzZWNvbmRzLi4uXCIpO1xuICAgICAgICAgc2V0VGltZW91dChpbml0QXBwLCAxMDAwMCk7XG4gICAgICB9XG4gICB9O1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaW5pdEFwcCgpO1xuICAgfSwgW10pO1xuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwdmhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjh2d1wiLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsIFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgekluZGV4OiA5OTk5OTksXG4gICAgICAgICB9fT5cbiAgICAgICAgIDxoMT5Db2RlU3BhY2U8L2gxPlxuICAgICAgPC9kaXY+XG4gICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJIb21lIiwiYXBpIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJyb3V0ZXIiLCJmZXRjaEhlYWx0aCIsInJlcyIsImdldCIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSIsImluaXRBcHAiLCJpc0Nvbm5lY3RlZCIsInN1Y2Nlc3MiLCJwdXNoIiwic2V0VGltZW91dCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImZvbnRTaXplIiwicG9zaXRpb24iLCJ0b3AiLCJ6SW5kZXgiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});