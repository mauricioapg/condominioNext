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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _Icones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icones */ \"./src/components/Icones.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mauriciogabriel/Documents/condominioNext/src/components/Tabela.tsx\";\n\n\n\nfunction Tabela(props) {\n  var ExibirAcoes = props.moradorSelecionado || props.moradorExcluido;\n\n  function renderizarCabecalho() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tr\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-left p-4',\n        children: \"ID\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-left p-4',\n        children: \"Nome\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-left p-4',\n        children: \"Estado Civil\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), ExibirAcoes ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"th\", {\n        className: 'text-center p-4',\n        children: \"A\\xE7\\xF5es\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 21\n      }, this) : false]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this);\n  }\n\n  function renderizarDados() {\n    var _props$moradores,\n        _this = this;\n\n    return (_props$moradores = props.moradores) === null || _props$moradores === void 0 ? void 0 : _props$moradores.map(function (morador, i) {\n      //percorre o array de clientes\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tr\", {\n        className: \"\".concat(i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n          className: 'text-left p-4',\n          children: morador.id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n          className: 'text-left p-4',\n          children: morador.nome\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n          className: 'text-left p-4',\n          children: morador.estadoCivil\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, _this), ExibirAcoes ? renderizarAcoes(morador) : false]\n      }, morador.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this);\n    });\n  }\n\n  function renderizarAcoes(morador) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n      className: \"flex justify-center\",\n      children: [props.moradorSelecionado ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_0__.default, {\n        className: \"\\n                flex justify-center items-center\\n                text-green-600 rounded-full p-2 m-1\\n                hover:bg-purple-50\\n                \",\n        onClick: function onClick() {\n          return props.moradorSelecionado(morador);\n        },\n        children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeEdicao\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 21\n      }, this) : false, props.moradorExcluido ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_0__.default, {\n        className: \"\\n                flex justify-center items-center\\n                text-red-600 rounded-full p-2 m-1\\n                hover:bg-purple-50\\n                \",\n        onClick: function onClick() {\n          return props.moradorExcluido(morador);\n        },\n        children: _Icones__WEBPACK_IMPORTED_MODULE_1__.IconeLixeira\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 21\n      }, this) : false]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"table\", {\n    className: \"text-black w-full mx-2 rounded-lg overflow-hidden\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"thead\", {\n      className: \"bg-gray-600 text-white\",\n      children: renderizarCabecalho()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"tbody\", {\n      className: \"text-center\",\n      children: renderizarDados()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 9\n  }, this);\n}\n_c = Tabela;\n\nvar _c;\n\n$RefreshReg$(_c, \"Tabela\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxVQURKO0FBVUg7S0FwRXVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJlbGEudHN4P2RkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvdGFvQWNvZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Cb3RhbydcbmltcG9ydCB7IEljb25lRWRpY2FvLCBJY29uZUxpeGVpcmEgfSBmcm9tICcuL0ljb25lcydcbmltcG9ydCBNb3JhZG9yIGZyb20gJy4uL2NvcmUvTW9yYWRvcidcblxuaW50ZXJmYWNlIFByb3BzVGFiZWxhIHtcbiAgICBtb3JhZG9yZXM6IE1vcmFkb3JbXVxuICAgIGFsdHVyYUxpbmhhOiBTdHJpbmdcbiAgICBtb3JhZG9yU2VsZWNpb25hZG8/OiAobW9yYWRvcjogTW9yYWRvcikgPT4gdm9pZFxuICAgIG1vcmFkb3JFeGNsdWlkbz86IChtb3JhZG9yOiBNb3JhZG9yKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmVsYShwcm9wczogUHJvcHNUYWJlbGEpIHtcblxuICAgIGNvbnN0IEV4aWJpckFjb2VzID0gcHJvcHMubW9yYWRvclNlbGVjaW9uYWRvIHx8IHByb3BzLm1vcmFkb3JFeGNsdWlkb1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyaXphckNhYmVjYWxobygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXsndGV4dC1sZWZ0IHAtNCd9PklEPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXsndGV4dC1sZWZ0IHAtNCd9Pk5vbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9eyd0ZXh0LWxlZnQgcC00J30+RXN0YWRvIENpdmlsPC90aD5cbiAgICAgICAgICAgICAgICB7RXhpYmlyQWNvZXMgP1xuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXsndGV4dC1jZW50ZXIgcC00J30+QcOnw7VlczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2V9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyaXphckRhZG9zKCkge1xuICAgICAgICByZXR1cm4gcHJvcHMubW9yYWRvcmVzPy5tYXAoKG1vcmFkb3IsIGkpID0+IHsgLy9wZXJjb3JyZSBvIGFycmF5IGRlIGNsaWVudGVzXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e21vcmFkb3IuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aSAlIDIgPT09IDAgPyAnYmctcHVycGxlLTIwMCcgOiAnYmctcHVycGxlLTEwMCd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9eyd0ZXh0LWxlZnQgcC00J30+e21vcmFkb3IuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17J3RleHQtbGVmdCBwLTQnfT57bW9yYWRvci5ub21lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9eyd0ZXh0LWxlZnQgcC00J30+e21vcmFkb3IuZXN0YWRvQ2l2aWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge0V4aWJpckFjb2VzID8gcmVuZGVyaXphckFjb2VzKG1vcmFkb3IpIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJpemFyQWNvZXMobW9yYWRvcjogTW9yYWRvcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMubW9yYWRvclNlbGVjaW9uYWRvID9cbiAgICAgICAgICAgICAgICAgICAgPEJvdGFvQWNvZXMgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICB0ZXh0LWdyZWVuLTYwMCByb3VuZGVkLWZ1bGwgcC0yIG0tMVxuICAgICAgICAgICAgICAgIGhvdmVyOmJnLXB1cnBsZS01MFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5tb3JhZG9yU2VsZWNpb25hZG8obW9yYWRvcil9PlxuICAgICAgICAgICAgICAgICAgICAgICAge0ljb25lRWRpY2FvfVxuICAgICAgICAgICAgICAgICAgICA8L0JvdGFvQWNvZXM+XG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2V9XG4gICAgICAgICAgICAgICAge3Byb3BzLm1vcmFkb3JFeGNsdWlkbyA/XG4gICAgICAgICAgICAgICAgICAgIDxCb3Rhb0Fjb2VzIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXG4gICAgICAgICAgICAgICAgdGV4dC1yZWQtNjAwIHJvdW5kZWQtZnVsbCBwLTIgbS0xXG4gICAgICAgICAgICAgICAgaG92ZXI6YmctcHVycGxlLTUwXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm1vcmFkb3JFeGNsdWlkbyhtb3JhZG9yKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7SWNvbmVMaXhlaXJhfVxuICAgICAgICAgICAgICAgICAgICA8L0JvdGFvQWNvZXM+XG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2V9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YHRleHQtYmxhY2sgdy1mdWxsIG14LTIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5gfT5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAge3JlbmRlcml6YXJDYWJlY2FsaG8oKX1cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVyaXphckRhZG9zKCl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIClcbn0iXSwibmFtZXMiOlsiQm90YW9BY29lcyIsIkljb25lRWRpY2FvIiwiSWNvbmVMaXhlaXJhIiwiVGFiZWxhIiwicHJvcHMiLCJFeGliaXJBY29lcyIsIm1vcmFkb3JTZWxlY2lvbmFkbyIsIm1vcmFkb3JFeGNsdWlkbyIsInJlbmRlcml6YXJDYWJlY2FsaG8iLCJyZW5kZXJpemFyRGFkb3MiLCJtb3JhZG9yZXMiLCJtYXAiLCJtb3JhZG9yIiwiaSIsImlkIiwibm9tZSIsImVzdGFkb0NpdmlsIiwicmVuZGVyaXphckFjb2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Tabela.tsx\n");

/***/ })

});