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

/***/ "./src/components/Tabela.tsx":
/*!***********************************!*\
  !*** ./src/components/Tabela.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _Icones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icones */ \"./src/components/Icones.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mauriciogabriel/Documents/condominioNext/src/components/Tabela.tsx\";\n\n\n\nfunction Tabela(props) {\n  var ExibirAcoes = props.moradorSelecionado || props.moradorExcluido;\n\n  function renderizarCabecalho() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tr\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-left p-4',\n        children: \"ID\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-left p-4',\n        children: \"Nome\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-left p-4',\n        children: \"Estado Civil\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), ExibirAcoes ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-center p-4',\n        children: \"A\\xE7\\xF5es\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 21\n      }, this) : false]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this);\n  }\n\n  function renderizarDados() {\n    var _props$moradores,\n        _this = this;\n\n    return (_props$moradores = props.moradores) === null || _props$moradores === void 0 ? void 0 : _props$moradores.map(function (morador, i) {\n      //percorre o array de clientes\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tr\", {\n        className: \"\".concat(i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n          className: 'text-left p-4',\n          children: morador.id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n          className: 'text-left p-4',\n          children: morador.nome\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n          className: 'text-left p-4',\n          children: morador.estadoCivil\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_0__.default, {\n            className: \"flex justify-center\",\n            children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeEdicao\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, _this)]\n      }, morador.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this);\n    });\n  }\n\n  function renderizarAcoes(morador) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n      className: \"flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_0__.default, {\n        className: \"\\n                flex justify-center items-center\\n                text-green-600 rounded-full p-2 m-1\\n                hover:bg-purple-50\\n                \",\n        onClick: function onClick() {\n          props.moradorSelecionado(morador);\n        },\n        children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeEdicao\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"table\", {\n    className: \"text-black w-full mx-2 rounded-lg overflow-hidden\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"thead\", {\n      className: \"bg-gray-600 text-white\",\n      children: renderizarCabecalho()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tbody\", {\n      className: \"text-center\",\n      children: renderizarDados()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 9\n  }, this);\n}\n_c = Tabela;\n\nvar _c;\n\n$RefreshReg$(_c, \"Tabela\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJlbGEudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVVlLFNBQVNFLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQW9DO0FBRS9DLE1BQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxrQkFBTixJQUE0QkYsS0FBSyxDQUFDRyxlQUF0RDs7QUFFQSxXQUFTQyxtQkFBVCxHQUErQjtBQUMzQix3QkFDSTtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRSxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFJLGlCQUFTLEVBQUUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSSxpQkFBUyxFQUFFLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixFQUlLSCxXQUFXLGdCQUNSO0FBQUksaUJBQVMsRUFBRSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURRLEdBRU4sS0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVVIOztBQUVELFdBQVNJLGVBQVQsR0FBMkI7QUFBQTtBQUFBOztBQUN2QiwrQkFBT0wsS0FBSyxDQUFDTSxTQUFiLHFEQUFPLGlCQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQUU7QUFDMUMsMEJBQ0k7QUFDSSxpQkFBUyxZQUFLQSxDQUFDLEdBQUcsQ0FBSixLQUFVLENBQVYsR0FBYyxlQUFkLEdBQWdDLGVBQXJDLENBRGI7QUFBQSxnQ0FFSTtBQUFJLG1CQUFTLEVBQUUsZUFBZjtBQUFBLG9CQUFpQ0QsT0FBTyxDQUFDRTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBSSxtQkFBUyxFQUFFLGVBQWY7QUFBQSxvQkFBaUNGLE9BQU8sQ0FBQ0c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQUksbUJBQVMsRUFBRSxlQUFmO0FBQUEsb0JBQWlDSCxPQUFPLENBQUNJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFBLGlDQUNJLDhEQUFDLHNEQUFEO0FBQVkscUJBQVMsdUJBQXJCO0FBQUEsc0JBQ0tkLGdEQUFXQTtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBLFNBQVNVLE9BQU8sQ0FBQ0UsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBY0gsS0FmTSxDQUFQO0FBZ0JIOztBQUVELFdBQVNHLGVBQVQsQ0FBeUJMLE9BQXpCLEVBQTJDO0FBQ3ZDLHdCQUNJO0FBQUksZUFBUyxFQUFDLHFCQUFkO0FBQUEsNkJBRVEsOERBQUMsc0RBQUQ7QUFBWSxpQkFBUyxpS0FBckI7QUFLSSxlQUFPLEVBQUUsbUJBQU07QUFBQ1IsVUFBQUEsS0FBSyxDQUFDRSxrQkFBTixDQUF5Qk0sT0FBekI7QUFBa0MsU0FMdEQ7QUFBQSxrQkFNS1YsZ0RBQVdBO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF3Qkg7O0FBRUQsc0JBQ0k7QUFBTyxhQUFTLHFEQUFoQjtBQUFBLDRCQUNJO0FBQU8sZUFBUyxFQUFDLHdCQUFqQjtBQUFBLGdCQUNLTSxtQkFBbUI7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBQSxnQkFDS0MsZUFBZTtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDtLQXpFdUJOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmVsYS50c3g/ZGRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm90YW9BY29lcyBmcm9tICcuLi9jb21wb25lbnRzL0JvdGFvJ1xuaW1wb3J0IHsgSWNvbmVFZGljYW8sIEljb25lTGl4ZWlyYSB9IGZyb20gJy4vSWNvbmVzJ1xuaW1wb3J0IE1vcmFkb3IgZnJvbSAnLi4vY29yZS9Nb3JhZG9yJ1xuXG5pbnRlcmZhY2UgUHJvcHNUYWJlbGEge1xuICAgIG1vcmFkb3JlczogTW9yYWRvcltdXG4gICAgYWx0dXJhTGluaGE6IFN0cmluZ1xuICAgIG1vcmFkb3JTZWxlY2lvbmFkbz86IChtb3JhZG9yOiBNb3JhZG9yKSA9PiB2b2lkXG4gICAgbW9yYWRvckV4Y2x1aWRvPzogKG1vcmFkb3I6IE1vcmFkb3IpID0+IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFiZWxhKHByb3BzOiBQcm9wc1RhYmVsYSkge1xuXG4gICAgY29uc3QgRXhpYmlyQWNvZXMgPSBwcm9wcy5tb3JhZG9yU2VsZWNpb25hZG8gfHwgcHJvcHMubW9yYWRvckV4Y2x1aWRvXG5cbiAgICBmdW5jdGlvbiByZW5kZXJpemFyQ2FiZWNhbGhvKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9eyd0ZXh0LWxlZnQgcC00J30+SUQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9eyd0ZXh0LWxlZnQgcC00J30+Tm9tZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17J3RleHQtbGVmdCBwLTQnfT5Fc3RhZG8gQ2l2aWw8L3RoPlxuICAgICAgICAgICAgICAgIHtFeGliaXJBY29lcyA/XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9eyd0ZXh0LWNlbnRlciBwLTQnfT5Bw6fDtWVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJpemFyRGFkb3MoKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5tb3JhZG9yZXM/Lm1hcCgobW9yYWRvciwgaSkgPT4geyAvL3BlcmNvcnJlIG8gYXJyYXkgZGUgY2xpZW50ZXNcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17bW9yYWRvci5pZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpICUgMiA9PT0gMCA/ICdiZy1wdXJwbGUtMjAwJyA6ICdiZy1wdXJwbGUtMTAwJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17J3RleHQtbGVmdCBwLTQnfT57bW9yYWRvci5pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXsndGV4dC1sZWZ0IHAtNCd9Pnttb3JhZG9yLm5vbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17J3RleHQtbGVmdCBwLTQnfT57bW9yYWRvci5lc3RhZG9DaXZpbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW9BY29lcyBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0ljb25lRWRpY2FvfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3Rhb0Fjb2VzPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge0V4aWJpckFjb2VzID8gcmVuZGVyaXphckFjb2VzKG1vcmFkb3IpIDogZmFsc2V9ICovfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyaXphckFjb2VzKG1vcmFkb3I6IE1vcmFkb3IpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgey8qIHtwcm9wcy5tb3JhZG9yU2VsZWNpb25hZG8gPyAqL31cbiAgICAgICAgICAgICAgICAgICAgPEJvdGFvQWNvZXMgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICB0ZXh0LWdyZWVuLTYwMCByb3VuZGVkLWZ1bGwgcC0yIG0tMVxuICAgICAgICAgICAgICAgIGhvdmVyOmJnLXB1cnBsZS01MFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7cHJvcHMubW9yYWRvclNlbGVjaW9uYWRvKG1vcmFkb3IpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7SWNvbmVFZGljYW99XG4gICAgICAgICAgICAgICAgICAgIDwvQm90YW9BY29lcz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDogZmFsc2V9ICovfVxuICAgICAgICAgICAgICAgIHsvKiB7cHJvcHMubW9yYWRvckV4Y2x1aWRvID9cbiAgICAgICAgICAgICAgICAgICAgPEJvdGFvQWNvZXMgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICB0ZXh0LXJlZC02MDAgcm91bmRlZC1mdWxsIHAtMiBtLTFcbiAgICAgICAgICAgICAgICBob3ZlcjpiZy1wdXJwbGUtNTBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMubW9yYWRvckV4Y2x1aWRvKG1vcmFkb3IpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtJY29uZUxpeGVpcmF9XG4gICAgICAgICAgICAgICAgICAgIDwvQm90YW9BY29lcz5cbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZX0gKi99XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YHRleHQtYmxhY2sgdy1mdWxsIG14LTIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5gfT5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAge3JlbmRlcml6YXJDYWJlY2FsaG8oKX1cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVyaXphckRhZG9zKCl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIClcbn0iXSwibmFtZXMiOlsiQm90YW9BY29lcyIsIkljb25lRWRpY2FvIiwiVGFiZWxhIiwicHJvcHMiLCJFeGliaXJBY29lcyIsIm1vcmFkb3JTZWxlY2lvbmFkbyIsIm1vcmFkb3JFeGNsdWlkbyIsInJlbmRlcml6YXJDYWJlY2FsaG8iLCJyZW5kZXJpemFyRGFkb3MiLCJtb3JhZG9yZXMiLCJtYXAiLCJtb3JhZG9yIiwiaSIsImlkIiwibm9tZSIsImVzdGFkb0NpdmlsIiwicmVuZGVyaXphckFjb2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Tabela.tsx\n");

/***/ })

});