"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[6517,8662,1812,4187],{

/***/ 8662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarSesion: () => (/* binding */ CerrarSesion)
/* harmony export */ });
function CerrarSesion(db, messaging) {
  if (localStorage.getItem('CollectionTokenID')) {
    db.collection('Tokens').doc(localStorage.getItem('CollectionTokenID'))["delete"]().then(function () {
      console.log('Document successfully deleted!');
      console.log(localStorage.getItem('TokenNotificacionesPush'));
      messaging.deleteToken(localStorage.getItem('TokenNotificacionesPush')).then(function (result) {
        localStorage.clear();
        location.href = 'login.html';
      });
    })["catch"](function (error) {
      console.error('Error removing document: ', error);
    });
  } else {
    localStorage.clear();
    location.href = 'login.html';
  }
}

/***/ }),

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

/***/ 6517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPpal: () => (/* binding */ menuPpal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2407);
/* harmony import */ var _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1812);
/* harmony import */ var _cerrar_sesion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8662);
/* harmony import */ var _utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4187);

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }





localStorage.setItem('IndicadoresVisibles', true);
function MostrarIndicadores(SwitchCircle) {
  if (JSON.parse(localStorage.getItem('IndicadoresVisibles'))) {
    SwitchCircle.parentElement.style.backgroundColor = '#d6eafb';
    SwitchCircle.style.backgroundColor = '#1e6dad';
    SwitchCircle.style.left = '.5rem';
    SwitchCircle.style.right = '-0.3125rem';
    SwitchCircle.style.boxShadow = '-0.1875rem 0 0.3125rem -0.125rem rgba(30, 109, 173, 0.9)';
  } else {
    SwitchCircle.parentElement.style.backgroundColor = '#aaaaaa';
    SwitchCircle.style.backgroundColor = '#dddddd';
    SwitchCircle.style.right = '0';
    SwitchCircle.style.left = '-0.125rem';
    SwitchCircle.style.boxShadow = '0.1875rem 0 0.3125rem -0.125rem rgba(93, 93, 93, 0.8)';
  }
}
function menuPpal(BotonMenuPpal, messaging, db) {
  if (document.getElementById('MenuPpal') != null) {
    document.getElementById('MenuPpal').remove();
    document.removeEventListener('mousedown', _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_1__.CerrarVentanaMenuPpalESC, false); // keydown);
  } else {
    var MenuPpal = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SECTION', 'MenuPpal', ['menu-principal']);
    var MenuPpalOpciones = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('UL', null, ['menu-principal__opciones']);
    var BtnAvance = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion', 'menu-principal__indicadores'], 'Gráfica de avance');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnAvance);
    var AvanceIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'grafica-avance-icon']);
    BtnAvance.insertAdjacentElement('afterbegin', AvanceIcon);
    var AvanceSwitch = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['indicadores-switch']);
    BtnAvance.insertAdjacentElement('beforeend', AvanceSwitch);
    var SwitchBackground = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['indicadores-switch__background']);
    AvanceSwitch.insertAdjacentElement('beforeend', SwitchBackground);
    var SwitchCircle = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'circle', ['indicadores-switch__circle']);
    SwitchBackground.insertAdjacentElement('beforeend', SwitchCircle);
    MostrarIndicadores(SwitchCircle);
    BtnAvance.addEventListener('click', function () {
      localStorage.setItem('IndicadoresVisibles', !JSON.parse(localStorage.getItem('IndicadoresVisibles')));
      MostrarIndicadores(SwitchCircle);
      document.getElementById('indicadores').classList.toggle('ocultar-indicadores');
      (0,_utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_3__.CalcularPosicionHistorial)();
      MenuPpalOpciones.style.left = "".concat(BotonMenuPpal.childNodes[0].getBoundingClientRect().left, "px");
    });
    var Separador1 = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__separador']);
    MenuPpalOpciones.insertAdjacentElement('beforeend', Separador1);
    var BtnRegistro = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Registro');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnRegistro);
    var BtnRegistroIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'registro-icon']);
    BtnRegistro.insertAdjacentElement('afterbegin', BtnRegistroIcon);
    BtnRegistro.addEventListener('click', function () {
      document.getElementById('MenuPpal').remove();
      location.href = 'registro.html';
    });
    var IndicadoresGestion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Indicadores de gestión');
    MenuPpalOpciones.insertAdjacentElement('beforeend', IndicadoresGestion);
    var IndicadoresGestionIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'indicadores-icon']);
    IndicadoresGestion.insertAdjacentElement('afterbegin', IndicadoresGestionIcon);
    IndicadoresGestion.addEventListener('click', function () {
      document.getElementById('MenuPpal').remove();
      location.href = 'indicadores.html';
    });
    var BtnRutas = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Rutas');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnRutas);
    var BtnRutasIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'rutas-icon']);
    BtnRutas.insertAdjacentElement('afterbegin', BtnRutasIcon);
    BtnRutas.addEventListener('click', function () {
      document.getElementById('MenuPpal').remove();
      location.href = 'rutas.html';
    });
    var BtnRevision = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Revisión');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnRevision);
    var BtnRevisionIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'revision-icon']);
    BtnRevision.insertAdjacentElement('afterbegin', BtnRevisionIcon);
    BtnRevision.addEventListener('click', function () {
      document.getElementById('MenuPpal').remove();
      location.href = 'revision.html';
    });
    var Separador2 = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__separador']);
    MenuPpalOpciones.insertAdjacentElement('beforeend', Separador2);

    // const BtnCuentaUsuario = CreateElement('LI', null, ['menu-principal__opcion'], 'Cuenta de usuario');
    // MenuPpalOpciones.insertAdjacentElement('beforeend', BtnCuentaUsuario);

    // const BtnCuentaUsuarioIcon = CreateElement('DIV', null, ['svg-icon', 'cuenta-usuario-icon']);
    // BtnCuentaUsuario.insertAdjacentElement('afterbegin', BtnCuentaUsuarioIcon);

    // BtnCuentaUsuario.addEventListener('click', () => {
    //   document.getElementById('MenuPpal').remove();
    // });

    var BtnCambiarPassword = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Cambiar password');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnCambiarPassword);
    var BtnCambiarPasswordIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'cambiar-password-icon']);
    BtnCambiarPassword.insertAdjacentElement('afterbegin', BtnCambiarPasswordIcon);
    BtnCambiarPassword.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _yield$import, CambiarPassword;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            document.getElementById('MenuPpal').remove();
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 4316).then(__webpack_require__.bind(__webpack_require__, 4316));
          case 3:
            _yield$import = _context.sent;
            CambiarPassword = _yield$import.CambiarPassword;
            CambiarPassword(db, messaging);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    var BtnActualizar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Actualizar');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnActualizar);
    var BtnActualizarIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'actualizar-icon']);
    BtnActualizar.insertAdjacentElement('afterbegin', BtnActualizarIcon);

    // -- Actualizar
    BtnActualizar.addEventListener('click', function () {
      window.caches.keys().then(function (key) {
        key.map(function (cache) {
          return caches["delete"](cache);
        });
      });
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          var _iterator = _createForOfIteratorHelper(registrations),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var registration = _step.value;
              registration.unregister();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        })["catch"](function (err) {
          console.log('Service Worker registration failed: ', err);
        });
      }
      var mensajeActualizacion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'MensajeActualizacion', ['mensaje-actualizando']);
      mensajeActualizacion.innerHTML = "<p id=\"contenidoMensajeActualizando\"> Gracias, un momento por favor</p>";
      main.insertAdjacentElement('afterbegin', mensajeActualizacion);
      setTimeout(function () {
        document.getElementById('contenidoMensajeActualizando').style.opacity = '0%';
      }, 1500);
      setTimeout(function () {
        window.location.reload(true);
      }, 3000);
    });
    var Separador3 = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__separador']);
    MenuPpalOpciones.insertAdjacentElement('beforeend', Separador3);
    var BtnHelp = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Ayuda');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnHelp);
    var BtnHelpIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'help-icon']);
    BtnHelp.insertAdjacentElement('afterbegin', BtnHelpIcon);
    BtnHelp.addEventListener('click', function () {
      window.open('http://kiux.com/tutorial/', 'blank');
    });
    var BtnLogout = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('LI', null, ['menu-principal__opcion'], 'Logout');
    MenuPpalOpciones.insertAdjacentElement('beforeend', BtnLogout);
    var BtnLogoutIcon = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['svg-icon', 'logout-icon']);
    BtnLogout.insertAdjacentElement('afterbegin', BtnLogoutIcon);
    BtnLogout.addEventListener('click', function () {
      (0,_cerrar_sesion__WEBPACK_IMPORTED_MODULE_5__.CerrarSesion)(db, messaging);
    });
    MenuPpal.insertAdjacentElement('beforeend', MenuPpalOpciones);
    MenuPpalOpciones.style.left = "".concat(BotonMenuPpal.childNodes[0].getBoundingClientRect().left, "px");
    window.addEventListener('resize', function () {
      return MenuPpalOpciones.style.left = "".concat(BotonMenuPpal.childNodes[0].getBoundingClientRect().left, "px");
    });
    document.querySelector('main').insertAdjacentElement('beforeend', MenuPpal);
    main.classList.add('ocultar-scroll');

    // Cerrar Modal con tecla [ESC] o Click por fuera del modal
    MenuPpal.addEventListener('mousedown', function (event) {
      (0,_cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_1__.CerrarVentanaMenuPpalClick)(event, 'MenuPpal');
    }, false); // mousedown
    document.addEventListener('keydown', _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_1__.CerrarVentanaMenuPpalESC, false); // keydown
  }
}

/***/ }),

/***/ 4187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcularPosicionHistorial: () => (/* binding */ CalcularPosicionHistorial)
/* harmony export */ });
function CalcularPosicionHistorial() {
  var EncabezadoHeight = document.getElementById('encabezado').getBoundingClientRect().height;
  var HistorialHeight = document.getElementById('dashboard').getBoundingClientRect().height;
  var AltoDelHistorial = "".concat(EncabezadoHeight + HistorialHeight - 35, "px");
  document.getElementById('historial').style.top = AltoDelHistorial;
}

/***/ })

}]);