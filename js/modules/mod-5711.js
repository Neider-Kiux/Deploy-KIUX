"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[5711],{

/***/ 5711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAvance: () => (/* binding */ GetAvance),
/* harmony export */   GetHistorialB: () => (/* binding */ GetHistorialB)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



var GetAvance = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(PATH) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          URL = 'avance';
          _context.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, PATH, 'CargarHistorialB');
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function GetAvance(_x) {
    return _ref.apply(this, arguments);
  };
}();
var GetHistorialB = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(PATH) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          URL = 'historialb';
          _context2.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, PATH, 'CargarHistorialB');
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function GetHistorialB(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

}]);