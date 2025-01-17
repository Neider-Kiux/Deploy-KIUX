"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[2575],{

/***/ 2575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DuplicarRegistro: () => (/* binding */ DuplicarRegistro)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2407);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);




function DuplicarRegistro(_x, _x2) {
  return _DuplicarRegistro.apply(this, arguments);
}
function _DuplicarRegistro() {
  _DuplicarRegistro = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(IDRegistro, CargarHistorialA) {
    var _yield$GetData, result_code, main;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('duplicarregistro', IDRegistro, 'DuplicarRegistro');
        case 2:
          _yield$GetData = _context.sent;
          result_code = _yield$GetData.result_code;
          main = document.getElementById('main');
          main.appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'background', ['background']));
          document.getElementById('background').style.alignItems = 'center';
          document.getElementById('background').style.background = 'none';
          document.getElementById('background').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'dialogo', ['dialogo']));
          document.getElementById('dialogo').style.top = '0';
          if (!(result_code !== 0)) {
            _context.next = 14;
            break;
          }
          document.getElementById('dialogo').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'DuplicarPreconcepto', ['duplicar-preconcepto']));
          document.getElementById('DuplicarRegistro').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('P', null, null, Resultado.result_message));
          return _context.abrupt("return");
        case 14:
          document.getElementById('dialogo').style.background = 'none';
          document.getElementById('dialogo').style.border = 'none';
          document.getElementById('dialogo').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'DuplicarRegistro', ['duplicar-registro']));
          document.getElementById('DuplicarRegistro').innerHTML += "<svg viewBox=\"0 0 426.667 426.667\" style=\"enable-background:new 0 0 426.667 426.667;\"><use xlink:href=\"./img/sprite.svg#duplicar-registro-success\"></use></svg>";

          // TO DO
          setTimeout(function () {
            document.getElementById('background').remove();
          }, 500);
          window.scrollTo(0, 0);
          CargarHistorialA();
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _DuplicarRegistro.apply(this, arguments);
}

/***/ })

}]);