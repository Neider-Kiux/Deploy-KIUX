"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[9974],{

/***/ 9974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EliminarRegistro: () => (/* binding */ EliminarRegistro)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2407);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7433);






// Cerrar ventana emergente [cerrarEditarRegistro] al hacer click por fuera de la ventana
function cerrarRegistrarPreconcepto(event) {
  if (event.target.id == 'background' && document.getElementById('eliminarPreconcepto')) {
    document.getElementById('background').remove();
    document.removeEventListener('mousedown', removerRegistrarPreconcepto, false); // keydown)
    document.getElementById('main').classList.remove('ocultar-scroll');
  }
}

// Cerrar ventana emergente [removerEditarRegistro] con la tecla de escape [ESC]
function removerRegistrarPreconcepto(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('background') != null || document.getElementById('background') != undefined) {
      document.getElementById('background').remove();
      document.removeEventListener('keydown', removerRegistrarPreconcepto, false); // keydown)
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
}
function EliminarRegistro(IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB) {
  var main = document.getElementById('main');
  main.classList.add('ocultar-scroll');
  main.appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SECTION', 'background', ['background']));
  document.getElementById('background').style.alignItems = 'center';
  document.getElementById('background').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SECTION', 'dialogo', ['dialogo']));
  document.getElementById('dialogo').style.top = '0';
  document.getElementById('dialogo').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'eliminarPreconcepto', ['eliminar-preconcepto']));
  document.getElementById('eliminarPreconcepto').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'c-Imagen', ['c-imagen']));
  document.getElementById('c-Imagen').innerHTML += "<svg viewbox=\"0 0 216 216\"><use xlink:href=\"./img/sprite.svg#delete-warning\"></use></svg>";
  document.getElementById('eliminarPreconcepto').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'mensaje', ['eliminar-preconcepto__mensaje', 'mensaje']));
  document.getElementById('mensaje').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SPAN', 'titulo', ['mensaje__titulo'], 'Eliminar un registro'));
  document.getElementById('mensaje').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'descripcion', ['mensaje__descripcion']));
  document.getElementById('mensaje').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SPAN', null, null, '¿Desea continuar?'));
  document.getElementById('mensaje').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SPAN', 'frase', null, 'Este proceso no se puede deshacer.'));
  document.getElementById('frase').style.textAlign = 'center';
  // document.getElementById('eliminarPreconcepto').appendChild(CreateElement('SPAN', 'nPreconcepto', null, `Numero de preconcepto: ${Number(numero.slice(12))}`));

  document.getElementById('eliminarPreconcepto').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'c-Botones', ['cont_botones_3']));
  document.getElementById('c-Botones').style.justifyContent = 'flex-end';
  // Lista de botones
  document.getElementById('c-Botones').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('BUTTON', 'button1', ['modal-button', 'modal-button--default-text', 'modal-button--text'], 'Cancelar'));
  document.getElementById('c-Botones').appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('BUTTON', 'button2', ['modal-button', 'modal-button--delete', 'modal-button--text'], 'Eliminar'));
  document.getElementById('button1').style.marginRight = '0.5rem';
  document.getElementById('button1').addEventListener('click', function () {
    document.getElementById('background').remove();
  });
  document.getElementById('button2').addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var _yield$GetData, result_code, result_message, CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('eliminarregistro', IDRegistro, 'EliminarRegistro', true);
        case 2:
          _yield$GetData = _context.sent;
          result_code = _yield$GetData.result_code;
          result_message = _yield$GetData.result_message;
          if (!(result_code !== 0)) {
            _context.next = 8;
            break;
          }
          new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_4__.MostrarMensajeError(document.getElementById('dialogo'), result_message, 'EliminarRegistro');
          return _context.abrupt("return");
        case 8:
          document.getElementById('background').remove();
          if (IDRegistro.search('preconcepto') == 0) {
            CargarHistorialA();
          } else {
            CodigoAlcance = localStorage.getItem('CodigoAlcance');
            CodigoBuscado = localStorage.getItem('CodigoBuscado');
            FechaDesde = localStorage.getItem('FechaDesde');
            FechaHasta = localStorage.getItem('FechaHasta');
            CargarAvance(21); // 21 = gráfica de avance del período actual
            CargarAvance(11); // 11 = gráfica de avance del día de hoy
            CargarHistorialB(CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta);
            CargarHistoryBar('today', 'home');
          }
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  document.getElementById('background').addEventListener('mousedown', cerrarRegistrarPreconcepto, false); // mousedown
  document.addEventListener('keydown', removerRegistrarPreconcepto, false); // keydown
}

/***/ })

}]);