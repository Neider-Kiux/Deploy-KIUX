"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[5924,1812],{

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

/***/ 5924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listadoSuplantar: () => (/* binding */ listadoSuplantar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2407);
/* harmony import */ var _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1812);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7433);







function listadoSuplantar() {
  return _listadoSuplantar.apply(this, arguments);
}
function _listadoSuplantar() {
  _listadoSuplantar = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var _yield$GetData, result_code, proyectos, result_message, OpcionActiva, OrdenUsuario, Filtro, Opcion;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          document.getElementById('main').classList.add('ocultar-scroll');
          document.getElementById('main').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'background', ['background']));
          document.getElementById('background').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'dialogo', ['dialogo']));
          document.getElementById('dialogo').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'ListadoSuplantar', ['listado-suplantar']));
          document.getElementById('ListadoSuplantar').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'ListadoUsuarios', ['listado-suplantar__usuarios']));
          _context2.next = 7;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('getusuariossuplantar', '', 'GetUsuariosSuplantar');
        case 7:
          _yield$GetData = _context2.sent;
          result_code = _yield$GetData.result_code;
          proyectos = _yield$GetData.proyectos;
          result_message = _yield$GetData.result_message;
          if (result_code !== 0) {
            new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_4__.MostrarMensajeError(document.getElementById('dialogo'), result_message, 'BuscarProyectos');
          }
          OpcionActiva = localStorage.getItem('CodigoUsuario'); // Opciones
          OrdenUsuario = localStorage.getItem('OrdenUsuario');
          proyectos.forEach(function (usuario) {
            document.getElementById('ListadoUsuarios').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', null, OpcionActiva != usuario.usuario ? ['listado-suplantar__usuario'] : ['listado-suplantar__usuario', 'listado-suplantar__usuario--activo'], usuario.nombre_usuario, usuario.orden, 'disponible', usuario.usuario));
            if (OrdenUsuario > 10) {
              document.getElementById('ListadoUsuarios').scrollTop = (OrdenUsuario - 10) * 27;
            }
          });

          // Click en un usuario a suplantar
          document.getElementById('ListadoSuplantar').addEventListener('click', /*#__PURE__*/function () {
            var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(event.target.dataset.clase == 'disponible')) {
                      _context.next = 6;
                      break;
                    }
                    _context.next = 3;
                    return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('suplantar', event.target.dataset.codigo, 'ListadoSuplantar:39');
                  case 3:
                    localStorage.setItem('CodigoUsuario', event.target.dataset.codigo);
                    localStorage.setItem('OrdenUsuario', event.target.dataset.orden);
                    location.href = 'default.html';
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());

          // Buscar.
          document.getElementById('ListadoSuplantar').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BuscarUsuarios', ['listado-suplantar__buscar-usuario']));
          document.getElementById('BuscarUsuarios').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BuscarUsuariosTexto', ['buscar-usuario__texto'], null, null, null, null, null, true));
          // Activar el foco en dispositivos mobiles
          if (window.matchMedia('(min-width: 720px)').matches) {
            document.getElementById('BuscarUsuariosTexto').focus();
          }
          // Texto [KeyCode] tecla Enter
          document.getElementById('BuscarUsuariosTexto').addEventListener('keypress', function (event) {
            if (event.keyCode == 13 || event.code == 'Enter') {
              event.preventDefault();
            }
          });
          Filtro = function Filtro(query) {
            return proyectos.filter(function (el) {
              return el.nombre_usuario.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(query.toLowerCase()) > -1;
            });
          };
          Opcion = [];
          document.getElementById('BuscarUsuariosTexto').addEventListener('keyup', function (event) {
            (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.querySelectorAll('.listado-suplantar__usuario')).forEach(function (elemento) {
              document.getElementById('ListadoUsuarios').removeChild(elemento);
            });
            if (document.getElementById('BuscarUsuariosTexto').textContent.trim().length) {
              Opcion = Filtro(document.getElementById('BuscarUsuariosTexto').textContent.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
              Opcion.forEach(function (usuario) {
                document.getElementById('ListadoUsuarios').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', null, OpcionActiva != usuario.usuario ? ['listado-suplantar__usuario'] : ['listado-suplantar__usuario', 'listado-suplantar__usuario--activo'], usuario.nombre_usuario, usuario.orden, 'disponible', usuario.usuario));
              });
            } else {
              proyectos.forEach(function (usuario) {
                document.getElementById('ListadoUsuarios').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', null, OpcionActiva != usuario.usuario ? ['listado-suplantar__usuario'] : ['listado-suplantar__usuario', 'listado-suplantar__usuario--activo'], usuario.nombre_usuario, usuario.orden, 'disponible', usuario.usuario));
              });
            }
            Opcion = [];
          });
          document.getElementById('BuscarUsuarios').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BuscarUsuariosBoton', ['buscar-usuario__boton']));
          document.getElementById('BuscarUsuariosBoton').innerHTML += "<svg class=\"buscar-usuario__img\" viewbox=\"0 0 512 512\"><use xlink:href=\"./img/sprite.svg#search\"></use></svg>";
          document.getElementById('background').addEventListener('mousedown', function (event) {
            (0,_cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_6__.CerrarVentanaClick)(event, 'ListadoSuplantar');
          }, false);
          document.addEventListener('keydown', _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_6__.CerrarVentanaESC, false); // keydown
        case 27:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _listadoSuplantar.apply(this, arguments);
}

/***/ })

}]);