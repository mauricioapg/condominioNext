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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Inicio; }\n/* harmony export */ });\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _components_Fomulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Fomulario */ \"./src/components/Fomulario.tsx\");\n/* harmony import */ var _core_Morador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Morador */ \"./src/core/Morador.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mauriciogabriel/Documents/condominioNext/src/pages/inicio.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Inicio() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_core_Morador__WEBPACK_IMPORTED_MODULE_3__.default.Vazio),\n      morador = _useState[0],\n      setMorador = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('tabela'),\n      visivel = _useState2[0],\n      setVisivel = _useState2[1]; //exibe a tabela ou o form\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      titulo = _useState3[0],\n      setTitulo = _useState3[1];\n\n  var arrayMoradores = [new _core_Morador__WEBPACK_IMPORTED_MODULE_3__.default('Mauricio', 'Casado(a)', '1'), new _core_Morador__WEBPACK_IMPORTED_MODULE_3__.default('Lindsay', 'Casado(a)', '2'), new _core_Morador__WEBPACK_IMPORTED_MODULE_3__.default('Mônica', 'Casado(a)', '3'), new _core_Morador__WEBPACK_IMPORTED_MODULE_3__.default('Marcelo', 'Casado(a)', '4')];\n\n  function moradorSelecionado(morador) {\n    setTitulo(\"teste\");\n    setMorador(morador);\n    console.log(\"\".concat(morador.nome, \" foi selecionado...\")); //setVisivel('formulario')\n  }\n\n  function moradorExcluido(morador) {\n    console.log(\"Excluir... \".concat(morador.nome));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"flex flex-col\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {\n      titulo: \"Página Inicial\",\n      children: visivel === 'tabela' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_1__.default, {\n          moradores: arrayMoradores,\n          moradorSelecionado: moradorSelecionado,\n          moradorExcluido: moradorExcluido,\n          alturaLinha: \"h-10\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 25\n        }, this)\n      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Fomulario__WEBPACK_IMPORTED_MODULE_2__.default, {\n        morador: morador\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 25\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Inicio, \"cEr3Z7avykY35jAPLd+r4ZDW/4Y=\");\n\n_c = Inicio;\n\nvar _c;\n\n$RefreshReg$(_c, \"Inicio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5pY2lvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0ssTUFBVCxHQUFrQjtBQUFBOztBQUU3QixrQkFBOEJELCtDQUFRLENBQVVELHdEQUFWLENBQXRDO0FBQUEsTUFBT0ksT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOEJKLCtDQUFRLENBQTBCLFFBQTFCLENBQXRDO0FBQUEsTUFBT0ssT0FBUDtBQUFBLE1BQWdCQyxVQUFoQixpQkFINkIsQ0FHNkM7OztBQUMxRSxtQkFBNEJOLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9PLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxDQUNuQixJQUFJVixrREFBSixDQUFZLFVBQVosRUFBd0IsV0FBeEIsRUFBcUMsR0FBckMsQ0FEbUIsRUFFbkIsSUFBSUEsa0RBQUosQ0FBWSxTQUFaLEVBQXVCLFdBQXZCLEVBQW9DLEdBQXBDLENBRm1CLEVBR25CLElBQUlBLGtEQUFKLENBQVksUUFBWixFQUFzQixXQUF0QixFQUFtQyxHQUFuQyxDQUhtQixFQUluQixJQUFJQSxrREFBSixDQUFZLFNBQVosRUFBdUIsV0FBdkIsRUFBb0MsR0FBcEMsQ0FKbUIsQ0FBdkI7O0FBT0EsV0FBU1csa0JBQVQsQ0FBNEJQLE9BQTVCLEVBQThDO0FBQzFDSyxJQUFBQSxTQUFTLENBQUMsT0FBRCxDQUFUO0FBQ0FKLElBQUFBLFVBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0FRLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlVCxPQUFPLENBQUNVLElBQXZCLDBCQUgwQyxDQUkxQztBQUNIOztBQUVELFdBQVNDLGVBQVQsQ0FBeUJYLE9BQXpCLEVBQTJDO0FBQ3ZDUSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsc0JBQTBCVCxPQUFPLENBQUNVLElBQWxDO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUUsZUFBaEI7QUFBQSwyQkFDSSw4REFBQyx1REFBRDtBQUFRLFlBQU0sRUFBRSxnQkFBaEI7QUFBQSxnQkFFUVIsT0FBTyxLQUFLLFFBQVosZ0JBRUk7QUFBQSwrQkFDQSw4REFBQyx1REFBRDtBQUNJLG1CQUFTLEVBQUVJLGNBRGY7QUFFSSw0QkFBa0IsRUFBRUMsa0JBRnhCO0FBR0kseUJBQWUsRUFBRUksZUFIckI7QUFJSSxxQkFBVyxFQUFFO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSx1QkFGSixnQkFVSSw4REFBQywwREFBRDtBQUNBLGVBQU8sRUFBRVg7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7R0E3Q3VCRjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luaWNpby50c3g/NDVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmVsYSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmVsYSdcbmltcG9ydCBGb3JtdWxhcmlvIGZyb20gJy4uL2NvbXBvbmVudHMvRm9tdWxhcmlvJ1xuaW1wb3J0IE1vcmFkb3IgZnJvbSAnLi4vY29yZS9Nb3JhZG9yJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5pY2lvKCkge1xuXG4gICAgY29uc3QgW21vcmFkb3IsIHNldE1vcmFkb3JdID0gdXNlU3RhdGU8TW9yYWRvcj4oTW9yYWRvci5WYXppbylcbiAgICBjb25zdCBbdmlzaXZlbCwgc2V0VmlzaXZlbF0gPSB1c2VTdGF0ZTwndGFiZWxhJyB8ICdmb3JtdWxhcmlvJz4oJ3RhYmVsYScpIC8vZXhpYmUgYSB0YWJlbGEgb3UgbyBmb3JtXG4gICAgY29uc3QgW3RpdHVsbywgc2V0VGl0dWxvXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBhcnJheU1vcmFkb3JlcyA9IFtcbiAgICAgICAgbmV3IE1vcmFkb3IoJ01hdXJpY2lvJywgJ0Nhc2FkbyhhKScsICcxJyksXG4gICAgICAgIG5ldyBNb3JhZG9yKCdMaW5kc2F5JywgJ0Nhc2FkbyhhKScsICcyJyksXG4gICAgICAgIG5ldyBNb3JhZG9yKCdNw7RuaWNhJywgJ0Nhc2FkbyhhKScsICczJyksXG4gICAgICAgIG5ldyBNb3JhZG9yKCdNYXJjZWxvJywgJ0Nhc2FkbyhhKScsICc0JylcbiAgICBdXG5cbiAgICBmdW5jdGlvbiBtb3JhZG9yU2VsZWNpb25hZG8obW9yYWRvcjogTW9yYWRvcikge1xuICAgICAgICBzZXRUaXR1bG8oXCJ0ZXN0ZVwiKVxuICAgICAgICBzZXRNb3JhZG9yKG1vcmFkb3IpXG4gICAgICAgIGNvbnNvbGUubG9nKGAke21vcmFkb3Iubm9tZX0gZm9pIHNlbGVjaW9uYWRvLi4uYClcbiAgICAgICAgLy9zZXRWaXNpdmVsKCdmb3JtdWxhcmlvJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JhZG9yRXhjbHVpZG8obW9yYWRvcjogTW9yYWRvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXhjbHVpci4uLiAke21vcmFkb3Iubm9tZX1gKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggZmxleC1jb2xcIn0+XG4gICAgICAgICAgICA8TGF5b3V0IHRpdHVsbz17XCJQw6FnaW5hIEluaWNpYWxcIn0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2aXNpdmVsID09PSAndGFiZWxhJyA/XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiZWxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yYWRvcmVzPXthcnJheU1vcmFkb3Jlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JhZG9yU2VsZWNpb25hZG89e21vcmFkb3JTZWxlY2lvbmFkb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JhZG9yRXhjbHVpZG89e21vcmFkb3JFeGNsdWlkb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHR1cmFMaW5oYT17XCJoLTEwXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtdWxhcmlvXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JhZG9yPXttb3JhZG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGF5b3V0IiwiVGFiZWxhIiwiRm9ybXVsYXJpbyIsIk1vcmFkb3IiLCJ1c2VTdGF0ZSIsIkluaWNpbyIsIlZhemlvIiwibW9yYWRvciIsInNldE1vcmFkb3IiLCJ2aXNpdmVsIiwic2V0VmlzaXZlbCIsInRpdHVsbyIsInNldFRpdHVsbyIsImFycmF5TW9yYWRvcmVzIiwibW9yYWRvclNlbGVjaW9uYWRvIiwiY29uc29sZSIsImxvZyIsIm5vbWUiLCJtb3JhZG9yRXhjbHVpZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/inicio.tsx\n");

/***/ })

});