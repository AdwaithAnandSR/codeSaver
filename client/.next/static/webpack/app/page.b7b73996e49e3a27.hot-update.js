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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const api = \"http://lo\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchHealth = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(api, \"/health\"));\n            return res.status === 200;\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"connection failed: Retrying in 10 seconds...\");\n            console.error(\"Error fetching health:\", error);\n            return false;\n        }\n    };\n    const initApp = async ()=>{\n        const isConnected = await fetchHealth();\n        if (isConnected) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"connect to the server.\");\n            router.push(\"/home\");\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"connection failed: Retrying in 10 seconds...\");\n            setTimeout(initApp, 10000);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        initApp();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"80vh\",\n            fontSize: \"8vw\",\n            position: \"relative\",\n            top: 0,\n            zIndex: 999999\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"CodeSpace\"\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/page.js\",\n            lineNumber: 53,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/codeSpace/client/app/page.js\",\n        lineNumber: 42,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDRztBQUNlO0FBQ1Y7QUFDcUI7QUFDUjtBQUVoQyxTQUFTTTs7SUFDckIsTUFBTUMsTUFBTUMsV0FBK0I7SUFFM0MsTUFBTUcsU0FBU1QsMERBQVNBO0lBRXhCLE1BQU1VLGNBQWM7UUFDakIsSUFBSTtZQUNELE1BQU1DLE1BQU0sTUFBTWIsNkNBQUtBLENBQUNjLEdBQUcsQ0FBQyxHQUFPLE9BQUpQLEtBQUk7WUFDbkMsT0FBT00sSUFBSUUsTUFBTSxLQUFLO1FBQ3pCLEVBQUUsT0FBT0MsT0FBTztZQUNiWCxpREFBS0EsQ0FBQ1csS0FBSyxDQUFDO1lBQ1pDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQ3hDLE9BQU87UUFDVjtJQUNIO0lBRUEsTUFBTUUsVUFBVTtRQUNiLE1BQU1DLGNBQWMsTUFBTVA7UUFDMUIsSUFBSU8sYUFBYTtZQUNkZCxpREFBS0EsQ0FBQ2UsT0FBTyxDQUFDO1lBQ2RULE9BQU9VLElBQUksQ0FBQztRQUNmLE9BQU87WUFDSmhCLGlEQUFLQSxDQUFDVyxLQUFLLENBQUM7WUFDWk0sV0FBV0osU0FBUztRQUN2QjtJQUNIO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1BlO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0csOERBQUNLO1FBQ0VDLE9BQU87WUFDSkMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxRQUFRO1FBQ1g7a0JBQ0EsNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdiO0dBOUN3QjNCOztRQUdOSixzREFBU0E7OztLQUhISSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAvLyBNYXJrcyB0aGUgY29tcG9uZW50IGFzIGEgQ2xpZW50IENvbXBvbmVudFxuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgY29uc3QgYXBpID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcblxuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgIGNvbnN0IGZldGNoSGVhbHRoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGl9L2hlYWx0aGApO1xuICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMgPT09IDIwMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICB0b2FzdC5lcnJvcihcImNvbm5lY3Rpb24gZmFpbGVkOiBSZXRyeWluZyBpbiAxMCBzZWNvbmRzLi4uXCIpO1xuICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhlYWx0aDpcIiwgZXJyb3IpO1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgfTtcblxuICAgY29uc3QgaW5pdEFwcCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGlzQ29ubmVjdGVkID0gYXdhaXQgZmV0Y2hIZWFsdGgoKTtcbiAgICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgdG9hc3Quc3VjY2VzcyhcImNvbm5lY3QgdG8gdGhlIHNlcnZlci5cIik7XG4gICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRvYXN0LmVycm9yKFwiY29ubmVjdGlvbiBmYWlsZWQ6IFJldHJ5aW5nIGluIDEwIHNlY29uZHMuLi5cIik7XG4gICAgICAgICBzZXRUaW1lb3V0KGluaXRBcHAsIDEwMDAwKTtcbiAgICAgIH1cbiAgIH07XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpbml0QXBwKCk7XG4gICB9LCBbXSk7XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODB2aFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiOHZ3XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcbiAgICAgICAgIH19PlxuICAgICAgICAgPGgxPkNvZGVTcGFjZTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkhvbWUiLCJhcGkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJvdXRlciIsImZldGNoSGVhbHRoIiwicmVzIiwiZ2V0Iiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwiaW5pdEFwcCIsImlzQ29ubmVjdGVkIiwic3VjY2VzcyIsInB1c2giLCJzZXRUaW1lb3V0IiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});