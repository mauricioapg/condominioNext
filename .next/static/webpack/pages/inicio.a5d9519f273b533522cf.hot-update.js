"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/inicio",{

/***/ "./src/components/Menu.tsx":
/*!*********************************!*\
  !*** ./src/components/Menu.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ItemMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ItemMenu */ \"./src/components/ItemMenu.tsx\");\n/* harmony import */ var _Icones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icones */ \"./src/components/Icones.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mauriciogabriel/Documents/condominioNext/src/components/Menu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Menu(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('inicio'),\n      PaginaAtual = _useState[0],\n      setPaginaAtual = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"\".concat(props.className),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ItemMenu__WEBPACK_IMPORTED_MODULE_1__.default, {\n      className: \"hover:bg-gray-900 py-4\\n            flex flex-row justify-evenly text-sm\",\n      texto: \"Cadastrar Morador\",\n      icone: _Icones__WEBPACK_IMPORTED_MODULE_2__.IconeAdicionar,\n      onClick: function onClick() {\n        return setPaginaAtual('formulario');\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ItemMenu__WEBPACK_IMPORTED_MODULE_1__.default, {\n      className: \"hover:bg-gray-900 py-4\\n            flex flex-row justify-evenly text-lg\",\n      texto: \"Lista de Moradores\",\n      icone: _Icones__WEBPACK_IMPORTED_MODULE_2__.IconeLista,\n      onClick: function onClick() {\n        return setPaginaAtual('tabela');\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Menu, \"ej5I+ngCtLYnkL0xKbj+r6v3mJg=\");\n\n_c = Menu;\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFRZSxTQUFTSSxJQUFULENBQWNDLEtBQWQsRUFBZ0M7QUFBQTs7QUFFM0Msa0JBQXNDTCwrQ0FBUSxDQUFxQyxRQUFyQyxDQUE5QztBQUFBLE1BQU9NLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLFlBQUtGLEtBQUssQ0FBQ0csU0FBWCxDQUFkO0FBQUEsNEJBQ0ksOERBQUMseURBQUQ7QUFBVSxlQUFTLDRFQUFuQjtBQUVJLFdBQUssRUFBQyxtQkFGVjtBQUdJLFdBQUssRUFBRU4sbURBSFg7QUFJSSxhQUFPLEVBQUU7QUFBQSxlQUFNSyxjQUFjLENBQUMsWUFBRCxDQUFwQjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUksOERBQUMseURBQUQ7QUFBVSxlQUFTLDRFQUFuQjtBQUVJLFdBQUssRUFBQyxvQkFGVjtBQUdJLFdBQUssRUFBRUosK0NBSFg7QUFJSSxhQUFPLEVBQUU7QUFBQSxlQUFNSSxjQUFjLENBQUMsUUFBRCxDQUFwQjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBbEJ1Qkg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lbnUudHN4PzI3MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJdGVtTWVudSBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1NZW51J1xuaW1wb3J0IHsgSWNvbmVBZGljaW9uYXIsIEljb25lTGlzdGEgfSBmcm9tICcuL0ljb25lcydcblxuaW50ZXJmYWNlIFByb3BzTWVudSB7XG4gICAgY2hpbGRyZW46IGFueVxuICAgIGNsYXNzTmFtZTogU3RyaW5nXG4gICAgcGFnaW5hQXR1YWw/OiBhbnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudShwcm9wczogUHJvcHNNZW51KSB7XG5cbiAgICBjb25zdCBbUGFnaW5hQXR1YWwsIHNldFBhZ2luYUF0dWFsXSA9IHVzZVN0YXRlPCdpbmljaW8nIHwgJ2Zvcm11bGFyaW8nIHwgJ3RhYmVsYSc+KCdpbmljaW8nKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3Byb3BzLmNsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIDxJdGVtTWVudSBjbGFzc05hbWU9e2Bob3ZlcjpiZy1ncmF5LTkwMCBweS00XG4gICAgICAgICAgICBmbGV4IGZsZXgtcm93IGp1c3RpZnktZXZlbmx5IHRleHQtc21gfVxuICAgICAgICAgICAgICAgIHRleHRvPVwiQ2FkYXN0cmFyIE1vcmFkb3JcIlxuICAgICAgICAgICAgICAgIGljb25lPXtJY29uZUFkaWNpb25hcn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdpbmFBdHVhbCgnZm9ybXVsYXJpbycpfSAvPlxuICAgICAgICAgICAgPEl0ZW1NZW51IGNsYXNzTmFtZT17YGhvdmVyOmJnLWdyYXktOTAwIHB5LTRcbiAgICAgICAgICAgIGZsZXggZmxleC1yb3cganVzdGlmeS1ldmVubHkgdGV4dC1sZ2B9XG4gICAgICAgICAgICAgICAgdGV4dG89XCJMaXN0YSBkZSBNb3JhZG9yZXNcIlxuICAgICAgICAgICAgICAgIGljb25lPXtJY29uZUxpc3RhfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2luYUF0dWFsKCd0YWJlbGEnKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkl0ZW1NZW51IiwiSWNvbmVBZGljaW9uYXIiLCJJY29uZUxpc3RhIiwiTWVudSIsInByb3BzIiwiUGFnaW5hQXR1YWwiLCJzZXRQYWdpbmFBdHVhbCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu.tsx\n");

/***/ })

});