"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[9037],{

/***/ 9037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargarDatosUsuario: () => (/* binding */ CargarDatosUsuario)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BotonesActivos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9850);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);





function CargarDatosUsuario() {
  return _CargarDatosUsuario.apply(this, arguments);
}
function _CargarDatosUsuario() {
  _CargarDatosUsuario = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var path, result, botones_registrar;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          path = "getdatosusuario/".concat(localStorage.getItem('Token'));
          _context.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.CustomFetch)(path);
        case 3:
          result = _context.sent;
          if (!(result.result_code == 0)) {
            _context.next = 20;
            break;
          }
          localStorage.setItem('NombreUsuario', result.nombre_usuario);
          localStorage.setItem('NombreAnexo', result.nombre_anexo);
          localStorage.setItem('PuedeSuplantar', result.puede_suplantar);
          localStorage.setItem('Suplantando', result.suplantando);
          botones_registrar = JSON.stringify(result.botones_registrar);
          localStorage.setItem('BotonesRegistrar', botones_registrar);
          localStorage.setItem('Token', result.new_token);
          if (window.location.pathname.includes('registro')) {
            if ((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(document.querySelectorAll('.btn-oculto')).length > 0) {
              (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(document.querySelectorAll('.btn-oculto')).forEach(function (btnOcultar) {
                btnOcultar.style.display = 'none';
              });
            }
            (0,_BotonesActivos__WEBPACK_IMPORTED_MODULE_4__.BotonesActivos)();
          }
          if (!window.location.pathname.includes('registro')) {
            _context.next = 17;
            break;
          }
          return _context.abrupt("return");
        case 17:
          location.href = 'registro.html';
        case 18:
          _context.next = 22;
          break;
        case 20:
          localStorage.clear();
          location.href = 'login.html';
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _CargarDatosUsuario.apply(this, arguments);
}

/***/ })

}]);