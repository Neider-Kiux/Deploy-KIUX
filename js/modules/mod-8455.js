"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[8455],{

/***/ 8455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarModal: () => (/* binding */ CerrarModal),
/* harmony export */   ModalNotificaciones: () => (/* binding */ ModalNotificaciones)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);
/* harmony import */ var _utils_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2188);
/* harmony import */ var _utils_revisarNotificaciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2829);





var CerrarModal = function CerrarModal(event) {
  if (event.target.id == 'background') {
    document.querySelector('.background').remove();
    document.querySelector('main').classList.remove('ocultar-scroll');
    (0,_utils_revisarNotificaciones__WEBPACK_IMPORTED_MODULE_2__.revisarNotificaciones)();
  }
};
var ModalNotificaciones = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var Background, Dialogo, url, path, _yield$GetData, notificaciones, content;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          document.querySelector('main').classList.add('ocultar-scroll');
          Background = document.createElement('DIV');
          Dialogo = document.createElement('DIV');
          Background.classList.add('background');
          Background.id = 'background';
          Dialogo.classList.add('dialogo');
          Background.appendChild(Dialogo);
          document.body.appendChild(Background);
          url = 'getnotificaciones';
          path = '';
          _context.next = 12;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(url, path);
        case 12:
          _yield$GetData = _context.sent;
          notificaciones = _yield$GetData.notificaciones;
          content = crearNotificaciones(notificaciones);
          Dialogo.innerHTML = content.trim();
          document.getElementById('background').addEventListener('mousedown', CerrarModal);
          activarLeerNotificacion();
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function ModalNotificaciones() {
    return _ref.apply(this, arguments);
  };
}();

// la función ClickLink está en desarrollo y servirá para marcar como "leída"
// una notificación al hacer click en un link de ésta
var ClickLink = function ClickLink(Texto) {
  console.log('hizo click en una noticiación...');
};
var activarLeerNotificacion = function activarLeerNotificacion() {
  var checkboxes = document.querySelectorAll('#leer-notificacion');
  checkboxes.forEach(function (item) {
    var IntervalId = null;
    item.addEventListener('click', function (e) {
      if (e.target.checked) {
        IntervalId = setTimeout( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
          var url, path, data;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                url = 'clicknotificacion';
                path = e.target.value;
                _context2.next = 4;
                return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(url, path);
              case 4:
                data = _context2.sent;
                e.target.style.visibility = 'hidden';
                e.target.parentElement.parentElement.classList.add('notificacion-deshabilitada');
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })), 250);
      } else {
        clearTimeout(IntervalId);
      }
    });
  });
};
var crearNotificaciones = function crearNotificaciones(notificaciones) {
  var NotificacionesContent = notificaciones.map(function (_ref3) {
    var antiguedad = _ref3.antiguedad,
      color_rgb = _ref3.color_rgb,
      leida = _ref3.leida,
      notificacion = _ref3.notificacion,
      numero_notificacion = _ref3.numero_notificacion,
      titulo = _ref3.titulo;
    var Color = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(color_rgb);
    return "\n      <li style=\"border-color: ".concat(Color, "\" class=\"contenedor-notificacion ").concat(leida ? 'notificacion-deshabilitada' : '', "\" numero_notificacion=\"").concat(numero_notificacion, "\">\n        <label class=\"encabezado-notificacion\" style=\"background-color: ").concat(Color, "\">\n          <p class=\"tiempo-notificacion\">").concat(antiguedad, "</p>\n          <p class=\"titulo-notificacion\">").concat(titulo, "</p>\n          ").concat(!leida ? "<input type=\"checkbox\" id=\"leer-notificacion\" name=\"vista\" value=\"".concat(numero_notificacion, "\" class=\"notificacion-check\">") : '', "\n        </label>\n        <div class=\"contenido-notificacion\">\n          <p>").concat(notificacion, "</p>\n        </div>\n      </li>\n    ");
  });
  return "\n    <div class=\"contenedor-notificaciones\">\n      <ul>\n        ".concat(NotificacionesContent.join(''), "\n      </ul>\n    </div>\n  ");
};

/***/ })

}]);