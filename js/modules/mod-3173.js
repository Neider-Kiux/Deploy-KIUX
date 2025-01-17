"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[3173],{

/***/ 3173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarDialogo: () => (/* binding */ MostrarDialogo)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



function MostrarDialogo(_x) {
  return _MostrarDialogo.apply(this, arguments);
}
function _MostrarDialogo() {
  _MostrarDialogo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Dialogo) {
    var _yield$GetData, opcion_dlg_grupos, Opcion;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('getopcionesdialogo', Dialogo, 'MostrarDialogo');
        case 2:
          _yield$GetData = _context.sent;
          opcion_dlg_grupos = _yield$GetData.opcion_dlg_grupos;
          console.log(opcion_dlg_grupos);
          Opcion = prompt("\xBFCu\xE1l es su elecci\xF3n? \"".concat(Dialogo, "\""));
          return _context.abrupt("return", Opcion);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _MostrarDialogo.apply(this, arguments);
}

/***/ })

}]);