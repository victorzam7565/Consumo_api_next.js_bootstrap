"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Users.js":
/*!*****************************!*\
  !*** ./Components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Users = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"list-group\",\n        children: props.users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-group-item list-group-item-action d-flex justify-content-between align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: [\n                                    user.first_name,\n                                    \" \",\n                                    user.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Vic\\\\Desktop\\\\nnnn\\\\Components\\\\Users.js\",\n                                lineNumber: 11,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" User\",\n                                    user.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Vic\\\\Desktop\\\\nnnn\\\\Components\\\\Users.js\",\n                                lineNumber: 12,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Vic\\\\Desktop\\\\nnnn\\\\Components\\\\Users.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.avatar,\n                        alt: user.first_name + user.last_name,\n                        style: {\n                            borderRadius: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vic\\\\Desktop\\\\nnnn\\\\Components\\\\Users.js\",\n                        lineNumber: 14,\n                        columnNumber: 12\n                    }, undefined)\n                ]\n            }, user.id, true, {\n                fileName: \"C:\\\\Users\\\\Vic\\\\Desktop\\\\nnnn\\\\Components\\\\Users.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vic\\\\Desktop\\\\nnnn\\\\Components\\\\Users.js\",\n        lineNumber: 5,\n        columnNumber: 1\n    }, undefined);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUEsTUFBTUEsUUFBUSxDQUFDQyxRQUFVO0lBQ3ZCLHFCQUdGLDhEQUFDQztRQUFHQyxXQUFVO2tCQUNQRixNQUFNRyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFHaEIsOERBQUNDO2dCQUFHSixXQUFVOztrQ0FDViw4REFBQ0s7OzBDQUNILDhEQUFDQzs7b0NBQUlILEtBQUtJLFVBQVU7b0NBQUM7b0NBQUVKLEtBQUtLLFNBQVM7Ozs7Ozs7MENBQ3JDLDhEQUFDQzs7b0NBQUU7b0NBQU1OLEtBQUtPLEtBQUs7Ozs7Ozs7Ozs7Ozs7a0NBRWxCLDhEQUFDQzt3QkFBSUMsS0FBS1QsS0FBS1UsTUFBTTt3QkFBRUMsS0FBS1gsS0FBS0ksVUFBVSxHQUFDSixLQUFLSyxTQUFTO3dCQUFHTyxPQUFPOzRCQUFDQyxjQUFhO3dCQUFLOzs7Ozs7O2VBTG9CYixLQUFLYyxFQUFFOzs7Ozs7Ozs7O0FBYzdIO0tBdEJNcEI7QUF1Qk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Vc2Vycy5qcz85NjIxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICAgIFxyXG48dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICB7cHJvcHMudXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoNT57dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9PC9oNT5cclxuICAgICAgICAgIDxwPiBVc2Vye3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gYWx0PXt1c2VyLmZpcnN0X25hbWUrdXNlci5sYXN0X25hbWUgfSBzdHlsZT17e2JvcmRlclJhZGl1czonNTAlJ319Lz4gXHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xyXG4iXSwibmFtZXMiOlsiVXNlcnMiLCJwcm9wcyIsInVsIiwiY2xhc3NOYW1lIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwibGkiLCJkaXYiLCJoNSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Users.js\n"));

/***/ })

});