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

/***/ "./src/pages/inicio.tsx":
/*!******************************!*\
  !*** ./src/pages/inicio.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Inicio; }\n/* harmony export */ });\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _components_Fomulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Fomulario */ \"./src/components/Fomulario.tsx\");\n/* harmony import */ var _components_PaginaInicial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PaginaInicial */ \"./src/components/PaginaInicial.tsx\");\n/* harmony import */ var _core_Morador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Morador */ \"./src/core/Morador.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mauriciogabriel/Documents/condominioNext/src/pages/inicio.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Inicio() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_core_Morador__WEBPACK_IMPORTED_MODULE_4__.default.Vazio),\n      morador = _useState[0],\n      setMorador = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('formulario'),\n      visivel = _useState2[0],\n      setVisivel = _useState2[1]; //exibe a tabela ou o form\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"),\n      titulo = _useState3[0],\n      setTitulo = _useState3[1];\n\n  var arrayMoradores = [new _core_Morador__WEBPACK_IMPORTED_MODULE_4__.default('Mauricio', 'Casado(a)', '1'), new _core_Morador__WEBPACK_IMPORTED_MODULE_4__.default('Lindsay', 'Casado(a)', '2'), new _core_Morador__WEBPACK_IMPORTED_MODULE_4__.default('Mônica', 'Casado(a)', '3'), new _core_Morador__WEBPACK_IMPORTED_MODULE_4__.default('Marcelo', 'Casado(a)', '4')];\n\n  function moradorSelecionado(morador) {\n    setTitulo(\"teste\");\n    setMorador(morador);\n    console.log(\"\".concat(morador.nome, \" foi selecionado...\")); //setVisivel('formulario')\n  }\n\n  function moradorExcluido(morador) {\n    console.log(\"Excluir... \".concat(morador.nome));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {\n      titulo: \"Página Inicial\",\n      children: visivel === 'tabela' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_1__.default, {\n          moradores: arrayMoradores,\n          moradorSelecionado: moradorSelecionado,\n          moradorExcluido: moradorExcluido,\n          alturaLinha: \"h-10\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 33\n        }, this)\n      }, void 0, false) : visivel === 'formulario' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Fomulario__WEBPACK_IMPORTED_MODULE_2__.default, {\n          morador: morador\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 37\n        }, this)\n      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_PaginaInicial__WEBPACK_IMPORTED_MODULE_3__.default, {\n        className: \"text-gray-800\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 29\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Inicio, \"5tizKOYrjX6Zf5xPPwIUfuBvnls=\");\n\n_c = Inicio;\n\nvar _c;\n\n$RefreshReg$(_c, \"Inicio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5pY2lvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU00sTUFBVCxHQUFrQjtBQUFBOztBQUU3QixrQkFBOEJELCtDQUFRLENBQVVELHdEQUFWLENBQXRDO0FBQUEsTUFBT0ksT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOEJKLCtDQUFRLENBQXFDLFlBQXJDLENBQXRDO0FBQUEsTUFBT0ssT0FBUDtBQUFBLE1BQWdCQyxVQUFoQixpQkFINkIsQ0FHNEQ7OztBQUN6RixtQkFBNEJOLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxDQUNuQixJQUFJVixrREFBSixDQUFZLFVBQVosRUFBd0IsV0FBeEIsRUFBcUMsR0FBckMsQ0FEbUIsRUFFbkIsSUFBSUEsa0RBQUosQ0FBWSxTQUFaLEVBQXVCLFdBQXZCLEVBQW9DLEdBQXBDLENBRm1CLEVBR25CLElBQUlBLGtEQUFKLENBQVksUUFBWixFQUFzQixXQUF0QixFQUFtQyxHQUFuQyxDQUhtQixFQUluQixJQUFJQSxrREFBSixDQUFZLFNBQVosRUFBdUIsV0FBdkIsRUFBb0MsR0FBcEMsQ0FKbUIsQ0FBdkI7O0FBT0EsV0FBU1csa0JBQVQsQ0FBNEJQLE9BQTVCLEVBQThDO0FBQzFDSyxJQUFBQSxTQUFTLENBQUMsT0FBRCxDQUFUO0FBQ0FKLElBQUFBLFVBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0FRLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlVCxPQUFPLENBQUNVLElBQXZCLDBCQUgwQyxDQUkxQztBQUNIOztBQUVELFdBQVNDLGVBQVQsQ0FBeUJYLE9BQXpCLEVBQTJDO0FBQ3ZDUSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsc0JBQTBCVCxPQUFPLENBQUNVLElBQWxDO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUUsZUFBaEI7QUFBQSwyQkFDSSw4REFBQyx1REFBRDtBQUFRLFlBQU0sRUFBRSxnQkFBaEI7QUFBQSxnQkFFUVIsT0FBTyxLQUFLLFFBQVosZ0JBRVE7QUFBQSwrQkFDSSw4REFBQyx1REFBRDtBQUNJLG1CQUFTLEVBQUVJLGNBRGY7QUFFSSw0QkFBa0IsRUFBRUMsa0JBRnhCO0FBR0kseUJBQWUsRUFBRUksZUFIckI7QUFJSSxxQkFBVyxFQUFFO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix1QkFGUixHQVVJVCxPQUFPLEtBQUssWUFBWixnQkFFUTtBQUFBLCtCQUNJLDhEQUFDLDBEQUFEO0FBQ0ksaUJBQU8sRUFBRUY7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosdUJBRlIsZ0JBT0ksOERBQUMsOERBQUQ7QUFBZSxpQkFBUyxFQUFFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7O0dBbER1QkY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmljaW8udHN4PzQ1YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJlbGEgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJlbGEnXG5pbXBvcnQgRm9ybXVsYXJpbyBmcm9tICcuLi9jb21wb25lbnRzL0ZvbXVsYXJpbydcbmltcG9ydCBQYWdpbmFJbmljaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hSW5pY2lhbCdcbmltcG9ydCBNb3JhZG9yIGZyb20gJy4uL2NvcmUvTW9yYWRvcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluaWNpbygpIHtcblxuICAgIGNvbnN0IFttb3JhZG9yLCBzZXRNb3JhZG9yXSA9IHVzZVN0YXRlPE1vcmFkb3I+KE1vcmFkb3IuVmF6aW8pXG4gICAgY29uc3QgW3Zpc2l2ZWwsIHNldFZpc2l2ZWxdID0gdXNlU3RhdGU8J3RhYmVsYScgfCAnZm9ybXVsYXJpbycgfCAnaW5pY2lvJz4oJ2Zvcm11bGFyaW8nKSAvL2V4aWJlIGEgdGFiZWxhIG91IG8gZm9ybVxuICAgIGNvbnN0IFt0aXR1bG8sIHNldFRpdHVsb10gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgYXJyYXlNb3JhZG9yZXMgPSBbXG4gICAgICAgIG5ldyBNb3JhZG9yKCdNYXVyaWNpbycsICdDYXNhZG8oYSknLCAnMScpLFxuICAgICAgICBuZXcgTW9yYWRvcignTGluZHNheScsICdDYXNhZG8oYSknLCAnMicpLFxuICAgICAgICBuZXcgTW9yYWRvcignTcO0bmljYScsICdDYXNhZG8oYSknLCAnMycpLFxuICAgICAgICBuZXcgTW9yYWRvcignTWFyY2VsbycsICdDYXNhZG8oYSknLCAnNCcpXG4gICAgXVxuXG4gICAgZnVuY3Rpb24gbW9yYWRvclNlbGVjaW9uYWRvKG1vcmFkb3I6IE1vcmFkb3IpIHtcbiAgICAgICAgc2V0VGl0dWxvKFwidGVzdGVcIilcbiAgICAgICAgc2V0TW9yYWRvcihtb3JhZG9yKVxuICAgICAgICBjb25zb2xlLmxvZyhgJHttb3JhZG9yLm5vbWV9IGZvaSBzZWxlY2lvbmFkby4uLmApXG4gICAgICAgIC8vc2V0VmlzaXZlbCgnZm9ybXVsYXJpbycpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9yYWRvckV4Y2x1aWRvKG1vcmFkb3I6IE1vcmFkb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEV4Y2x1aXIuLi4gJHttb3JhZG9yLm5vbWV9YClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGZsZXgtY29sXCJ9PlxuICAgICAgICAgICAgPExheW91dCB0aXR1bG89e1wiUMOhZ2luYSBJbmljaWFsXCJ9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXZlbCA9PT0gJ3RhYmVsYScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJlbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmFkb3Jlcz17YXJyYXlNb3JhZG9yZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JhZG9yU2VsZWNpb25hZG89e21vcmFkb3JTZWxlY2lvbmFkb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmFkb3JFeGNsdWlkbz17bW9yYWRvckV4Y2x1aWRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0dXJhTGluaGE9e1wiaC0xMFwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdmVsID09PSAnZm9ybXVsYXJpbycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtdWxhcmlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yYWRvcj17bW9yYWRvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYUluaWNpYWwgY2xhc3NOYW1lPXtcInRleHQtZ3JheS04MDBcIn0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxheW91dCIsIlRhYmVsYSIsIkZvcm11bGFyaW8iLCJQYWdpbmFJbmljaWFsIiwiTW9yYWRvciIsInVzZVN0YXRlIiwiSW5pY2lvIiwiVmF6aW8iLCJtb3JhZG9yIiwic2V0TW9yYWRvciIsInZpc2l2ZWwiLCJzZXRWaXNpdmVsIiwidGl0dWxvIiwic2V0VGl0dWxvIiwiYXJyYXlNb3JhZG9yZXMiLCJtb3JhZG9yU2VsZWNpb25hZG8iLCJjb25zb2xlIiwibG9nIiwibm9tZSIsIm1vcmFkb3JFeGNsdWlkbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/inicio.tsx\n");

/***/ })

});