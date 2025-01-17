"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[2749,1812],{

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarVentanaClick: () => (/* binding */ CerrarVentanaClick),
/* harmony export */   CerrarVentanaESC: () => (/* binding */ CerrarVentanaESC),
/* harmony export */   CerrarVentanaMenuPpalClick: () => (/* binding */ CerrarVentanaMenuPpalClick),
/* harmony export */   CerrarVentanaMenuPpalESC: () => (/* binding */ CerrarVentanaMenuPpalESC)
/* harmony export */ });
function CerrarVentanaMenuPpalClick(event, ventana) {
  if (event.target.id == 'MenuPpal' && document.getElementById(ventana)) {
    document.getElementById('MenuPpal').remove();
    document.removeEventListener('mousedown', CerrarVentanaESC, false); // keydown)
    document.getElementById('main').classList.remove('ocultar-scroll');
  }
}

// Cerrar ventana modal con la tecla de escape [ESC]
function CerrarVentanaMenuPpalESC(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('MenuPpal') != null || document.getElementById('MenuPpal') != undefined) {
      document.getElementById('MenuPpal').remove();
      document.removeEventListener('keydown', CerrarVentanaESC, false); // keydown)
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
}

// Cerrar ventana modal al hacer click por fuera de la ventana
function CerrarVentanaClick(event, ventana) {
  if (event.target.id == 'background' && document.getElementById(ventana)) {
    document.getElementById('background').remove();
    document.removeEventListener('mousedown', CerrarVentanaESC, false); // keydown)
    document.getElementById('main').classList.remove('ocultar-scroll');
  }
}

// Cerrar ventana modal con la tecla de escape [ESC]
function CerrarVentanaESC(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('background') != null || document.getElementById('background') != undefined) {
      document.getElementById('background').remove();
      document.removeEventListener('keydown', CerrarVentanaESC, false); // keydown)
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
}

/***/ }),

/***/ 2749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logRegistro: () => (/* binding */ logRegistro)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2407);
/* harmony import */ var _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1812);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);





function logRegistro(_x) {
  return _logRegistro.apply(this, arguments);
}
function _logRegistro() {
  _logRegistro = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(IDRegistro) {
    var main, _yield$GetData, log_registro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          main = document.getElementById('main');
          main.classList.add('ocultar-scroll');
          main.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'background', ['background']));
          document.getElementById('background').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'dialogo', ['dialogo']));
          document.getElementById('background').style.alignItems = 'center';
          document.getElementById('dialogo').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'LogRegistro', ['log-registro', 'width-default-modal']));
          document.getElementById('dialogo').style.top = '0';
          _context.next = 9;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('getlogregistro', IDRegistro, 'LogRegistro:15');
        case 9:
          _yield$GetData = _context.sent;
          log_registro = _yield$GetData.log_registro;
          log_registro.forEach(function (log, indx) {
            document.getElementById('LogRegistro').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "log-".concat(indx), !log.titular ? ['log', 'log--activo'] : ['log']));
            document.getElementById("log-".concat(indx)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', null, ['log-registro-nombre'], log.nombre_usuario));
            document.getElementById("log-".concat(indx)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', null, ['log-registro-fecha-hora'], log.fecha_hora));
            document.getElementById("log-".concat(indx)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', null, null, log.observaciones));
          });

          // Cerrar modal
          document.getElementById('background').addEventListener('mousedown', function (event) {
            (0,_cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_4__.CerrarVentanaClick)(event, 'LogRegistro');
          }, false); // mousedown
          document.addEventListener('keydown', _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_4__.CerrarVentanaESC, false); // keydown
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _logRegistro.apply(this, arguments);
}

/***/ })

}]);