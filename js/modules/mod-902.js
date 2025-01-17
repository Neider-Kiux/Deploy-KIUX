"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[902],{

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetGruposRevision: () => (/* binding */ GetGruposRevision),
/* harmony export */   GetHistorialB: () => (/* binding */ GetHistorialB),
/* harmony export */   GetInfoAdicionalAnexo: () => (/* binding */ GetInfoAdicionalAnexo),
/* harmony export */   GetInfoInicialAnexo: () => (/* binding */ GetInfoInicialAnexo),
/* harmony export */   GuardarInstruccionesRevisor: () => (/* binding */ GuardarInstruccionesRevisor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



var GetGruposRevision = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(PATH) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          URL = 'getgruposrevision';
          _context.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, PATH);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", {
            Grupos: data.grupos_revision
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function GetGruposRevision(_x) {
    return _ref.apply(this, arguments);
  };
}();
var GetInfoInicialAnexo = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ID) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          URL = 'getinfoinicialanexo';
          _context2.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, ID);
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", {
            clases: data.clases,
            instrucciones: data.instrucciones,
            observaciones: data.observaciones
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function GetInfoInicialAnexo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var GetInfoAdicionalAnexo = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(ID) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          URL = 'getinfoadicionalanexo';
          _context3.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, ID);
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", data.secciones);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function GetInfoAdicionalAnexo(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var GetHistorialB = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(PATH) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          URL = 'historialb';
          _context4.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, PATH);
        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function GetHistorialB(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var GuardarInstruccionesRevisor = /*#__PURE__*/function () {
  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(ID, Instrucciones, Boton) {
    var URL, body, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          URL = 'guardarinstruccionesrevisor';
          body = {
            IDRegistro: ID,
            InstruccionesRevisor: Instrucciones,
            IDBoton: Boton
          };
          _context5.next = 4;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.PostData)(URL, body, 'Se produjo un error al guardar las instrucciones.');
        case 4:
          data = _context5.sent;
          return _context5.abrupt("return", data);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function GuardarInstruccionesRevisor(_x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ })

}]);