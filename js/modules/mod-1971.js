"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[1971,1812,1723],{

/***/ 1971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CastigarRegistro: () => (/* binding */ CastigarRegistro)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_jogDial_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1723);
/* harmony import */ var autonumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8850);
/* harmony import */ var autonumeric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autonumeric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2407);
/* harmony import */ var _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1812);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7425);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7433);








function CastigarRegistro(_x, _x2) {
  return _CastigarRegistro.apply(this, arguments);
}
function _CastigarRegistro() {
  _CastigarRegistro = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(IDRegistro, CargarHistorialB) {
    var background, dialogo, CastigarRegistro, _yield$GetData, tipo_registro, codigo_iso, cantidad_castigada, cantidad_registrada, plazas_decimales, result_code, result_message, ValorCantidadRegistrada, ValorCantidadCastigada, ValorCantidadResultante, AnularCastigo, CastigarTodo, TiempoHHMM, ContenedorKnob, ContenedorTiempo, TiempoRegistradoTexto, TiempoCastigadoTexto, TiempoResultanteTexto, Dial, ContenedorFlechas, BtnAnularCastigo, BtnCastigarTodo, CantidadRegistrada, CantidadCastigada, CantidadResultante, JogDialOptions, Perilla, _AnularCastigo, _CastigarTodo, CastigarRegistroSeccion, CastigarRegistroWrapper, CantidadRegistradaDiv, CantidadRegistradaInput, CantidadCastigadaDiv, CantidadCastigadaInput, CantidadResultanteDiv, CantidadResultanteInput, _ContenedorFlechas, _BtnAnularCastigo, _BtnCastigarTodo, ContenedorBotones, BotonCancelar, BotonGuardar;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          background = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SECTION', 'background', ['background']);
          dialogo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SECTION', 'dialogo', ['dialogo']);
          CastigarRegistro = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SECTION', 'CastigarRegistro', ['editar-registro']);
          _context2.next = 5;
          return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('getdatoscastigar', IDRegistro, 'CastigarRegistro');
        case 5:
          _yield$GetData = _context2.sent;
          tipo_registro = _yield$GetData.tipo_registro;
          codigo_iso = _yield$GetData.codigo_iso;
          cantidad_castigada = _yield$GetData.cantidad_castigada;
          cantidad_registrada = _yield$GetData.cantidad_registrada;
          plazas_decimales = _yield$GetData.plazas_decimales;
          result_code = _yield$GetData.result_code;
          result_message = _yield$GetData.result_message;
          if (result_code == 0) {
            if (tipo_registro == 1) {
              // ContenedorFlechas.insertAdjacentElement('beforeend', BtnAnularCastigo);
              // ContenedorFlechas.insertAdjacentElement('beforeend', BtnCastigarTodo);
              // // Se agregan todos los elementos al DOM
              // Ejecución de funciones las cuales esperan que el DOM ya este listo.
              AnularCastigo = function AnularCastigo() {
                Perilla.angle(0);
                CantidadCastigada = 0;
                CantidadResultante = CantidadRegistrada - CantidadCastigada;
                TiempoCastigadoTexto.textContent = TiempoHHMM(CantidadCastigada);
                TiempoResultanteTexto.textContent = TiempoHHMM(CantidadResultante);
              };
              CastigarTodo = function CastigarTodo() {
                Perilla.angle(CantidadRegistrada * 360);
                CantidadCastigada = CantidadRegistrada;
                CantidadResultante = CantidadRegistrada - CantidadCastigada;
                TiempoCastigadoTexto.textContent = TiempoHHMM(CantidadCastigada);
                TiempoResultanteTexto.textContent = TiempoHHMM(CantidadResultante);
              };
              TiempoHHMM = function TiempoHHMM(Tiempo) {
                var SESENTA = 60;
                var CENTECIMA_SEGUNDO = 0.00000277777777777778;
                var HH = Math.trunc(Tiempo);
                var MM = Math.trunc((Tiempo - HH) * SESENTA + CENTECIMA_SEGUNDO);
                if (MM == 60) {
                  HH = HH + 1;
                  MM = 0;
                }
                var HH_ENT = Math.round(HH);
                var MM_ENT = Math.round(MM);
                return (HH_ENT < 10 ? '0' + HH_ENT : HH_ENT) + ':' + (MM_ENT < 10 ? '0' + MM_ENT : MM_ENT);
              };
              CastigarRegistro.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['castigar-registro__titulo'], "Castigar Actividad"));
              ContenedorKnob = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SECTION', null, ['contenedor-knob']);
              ContenedorTiempo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV');
              ContenedorTiempo.style.display = 'flex';
              ContenedorTiempo.style.flexDirection = 'column';
              TiempoRegistradoTexto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SPAN', 'TiempoTotal');
              ContenedorTiempo.insertAdjacentElement('beforeend', TiempoRegistradoTexto);
              TiempoCastigadoTexto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SPAN', 'TiempoActual');
              TiempoCastigadoTexto.style.color = '#d32f2f';
              ContenedorTiempo.insertAdjacentElement('beforeend', TiempoCastigadoTexto);
              TiempoResultanteTexto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SPAN', 'Total');
              TiempoResultanteTexto.style.borderTop = '0.0625rem solid #d32f2f';
              TiempoResultanteTexto.style.color = '#1a88d1';
              ContenedorTiempo.insertAdjacentElement('beforeend', TiempoResultanteTexto);
              ContenedorKnob.insertAdjacentElement('beforeend', ContenedorTiempo);
              CastigarRegistro.insertAdjacentElement('beforeend', ContenedorKnob);
              Dial = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', 'dial', ['dial']);
              ContenedorKnob.insertAdjacentElement('beforeend', Dial);
              //NOTE: Aqui hay svg
              ContenedorFlechas = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['contenedor-flechas']);
              ContenedorFlechas.innerHTML = "\n        <svg id=\"btn-anular-castigo\" title=\"Anular castigo\" viewbox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-anular--castigo\"></use></svg>\n        <svg id=\"btn-castigar-todo\" title=\"Castigar todo\" viewbox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-castigar--todo\"></use></svg>\n        ";
              ContenedorKnob.insertAdjacentElement('beforeend', ContenedorFlechas);
              dialogo.insertAdjacentElement('beforeend', CastigarRegistro);
              background.insertAdjacentElement('beforeend', dialogo);
              document.getElementById('main').insertAdjacentElement('beforeend', background);
              BtnAnularCastigo = document.getElementById('btn-anular-castigo');
              BtnAnularCastigo.addEventListener('click', AnularCastigo);
              BtnCastigarTodo = document.getElementById('btn-castigar-todo');
              BtnCastigarTodo.addEventListener('click', CastigarTodo);
              CantidadRegistrada = cantidad_registrada; // 02:30
              CantidadCastigada = cantidad_castigada; // 00:15
              CantidadResultante = CantidadRegistrada - CantidadCastigada;
              TiempoRegistradoTexto.textContent = TiempoHHMM(CantidadRegistrada);
              TiempoCastigadoTexto.textContent = TiempoHHMM(CantidadCastigada);
              TiempoResultanteTexto.textContent = TiempoHHMM(CantidadResultante);
              JogDialOptions = {
                debug: false,
                wheelSize: '98%',
                minDegree: 0,
                maxDegree: CantidadRegistrada * 360,
                // una vuelta = 30 minutos
                degreeStartAt: CantidadCastigada * 360
              };
              Perilla = JogDial(Dial, JogDialOptions).on('mousemove', function (event) {
                CantidadCastigada = Math.round(event.target.rotation / 6) / 60; // redondeo a "minutos" y convierto a horas
                CantidadResultante = CantidadRegistrada - CantidadCastigada;
                TiempoCastigadoTexto.textContent = TiempoHHMM(CantidadCastigada);
                TiempoResultanteTexto.textContent = TiempoHHMM(CantidadResultante);
              });
            } else {
              // Ejecución de funciones las cuales esperan que el DOM ya este listo.
              _AnularCastigo = function _AnularCastigo() {
                ValorCantidadCastigada.set(0);
                ValorCantidadResultante.set(cantidad_registrada - ValorCantidadCastigada.rawValue);
              };
              _CastigarTodo = function _CastigarTodo() {
                ValorCantidadCastigada.set(cantidad_registrada);
                ValorCantidadResultante.set(cantidad_registrada - ValorCantidadCastigada.rawValue);
              };
              CastigarRegistro.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['castigar-registro__titulo'], "Castigar Gasto"));
              CastigarRegistroSeccion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SECTION', null, ['castigar-registro-seccion']);
              CastigarRegistroWrapper = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['castigar-registro-wrapper']); // Cantidad registrada
              CantidadRegistradaDiv = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['castigar-registro-cantidad']);
              CantidadRegistradaDiv.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SPAN', null, ['castigar-registro-cantidad__codigo-iso'], codigo_iso));
              CantidadRegistradaInput = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.inputElement)('TEXT', null, ['castigar-registro-cantidad__valor', 'cantidad-registrada'], cantidad_registrada);
              CantidadRegistradaDiv.insertAdjacentElement('beforeend', CantidadRegistradaInput);

              // --------- AutoNumeric ---------
              ValorCantidadRegistrada = new (autonumeric__WEBPACK_IMPORTED_MODULE_2___default())(CantidadRegistradaInput, ['integerPos', {
                selectOnFocus: false,
                readOnly: true,
                decimalPlaces: plazas_decimales
              }]);
              // -------------------------------

              // Cantidad castigada
              CantidadCastigadaDiv = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['castigar-registro-cantidad']);
              CantidadCastigadaDiv.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SPAN', null, ['castigar-registro-cantidad__codigo-iso'], codigo_iso));
              CantidadCastigadaInput = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.inputElement)('TEXT', null, ['castigar-registro-cantidad__valor', 'cantidad-castigada'], cantidad_castigada);
              CantidadCastigadaDiv.insertAdjacentElement('beforeend', CantidadCastigadaInput);

              // --------- AutoNumeric ---------
              ValorCantidadCastigada = new (autonumeric__WEBPACK_IMPORTED_MODULE_2___default())(CantidadCastigadaInput, ['integerPos', {
                selectOnFocus: false,
                decimalPlaces: plazas_decimales,
                maximumValue: cantidad_registrada,
                modifyValueOnWheel: false
              }]);
              CantidadCastigadaInput.addEventListener('keyup', function () {
                ValorCantidadResultante.set(cantidad_registrada - ValorCantidadCastigada.rawValue);
              });

              // -------------------------------

              // Cantidad resultante
              CantidadResultanteDiv = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['castigar-registro-cantidad']);
              CantidadResultanteDiv.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('SPAN', null, ['castigar-registro-cantidad__codigo-iso'], codigo_iso));
              CantidadResultanteInput = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.inputElement)('TEXT', null, ['castigar-registro-cantidad__valor', 'cantidad-resultante'], ValorCantidadRegistrada.rawValue - ValorCantidadCastigada.rawValue);
              CantidadResultanteDiv.insertAdjacentElement('beforeend', CantidadResultanteInput);

              // --------- AutoNumeric ---------
              ValorCantidadResultante = new (autonumeric__WEBPACK_IMPORTED_MODULE_2___default())(CantidadResultanteInput, ['integerPos', {
                selectOnFocus: false,
                decimalPlaces: plazas_decimales,
                maximumValue: cantidad_registrada,
                modifyValueOnWheel: false
              }]);
              CantidadResultanteInput.addEventListener('keyup', function () {
                ValorCantidadCastigada.set(cantidad_registrada - ValorCantidadResultante.rawValue);
              });

              // -------------------------------
              _ContenedorFlechas = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', null, ['contenedor-flechas']); //NOTE: Aqui hay svg
              _ContenedorFlechas.innerHTML = "\n        <svg id=\"btn-anular-castigo\" title=\"Anular castigo\" viewbox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-anular--castigo\"></use></svg>\n        <svg id=\"btn-castigar-todo\" title=\"Castigar todo\" viewbox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-castigar--todo\"></use></svg>\n        ";
              _ContenedorFlechas.insertAdjacentElement('beforeend', _BtnAnularCastigo);
              _ContenedorFlechas.insertAdjacentElement('beforeend', _BtnCastigarTodo);

              // -------------------------------

              CastigarRegistroWrapper.insertAdjacentElement('beforeend', CantidadRegistradaDiv);
              CastigarRegistroWrapper.insertAdjacentElement('beforeend', CantidadCastigadaDiv);
              CastigarRegistroWrapper.insertAdjacentElement('beforeend', CantidadResultanteDiv);
              CastigarRegistroSeccion.insertAdjacentElement('beforeend', CastigarRegistroWrapper);
              CastigarRegistroSeccion.insertAdjacentElement('beforeend', _ContenedorFlechas);
              CastigarRegistro.insertAdjacentElement('beforeend', CastigarRegistroSeccion);
              dialogo.insertAdjacentElement('beforeend', CastigarRegistro);
              background.insertAdjacentElement('beforeend', dialogo);
              // Se agregar todos los elementos al DOM
              document.getElementById('main').insertAdjacentElement('beforeend', background);
              _BtnAnularCastigo = document.getElementById('btn-anular-castigo');
              _BtnAnularCastigo.addEventListener('click', _AnularCastigo);
              _BtnCastigarTodo = document.getElementById('btn-castigar-todo');
              _BtnCastigarTodo.addEventListener('click', _CastigarTodo);
            }

            // Contenedor de botones
            ContenedorBotones = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('DIV', 'c-Botones', ['cont_botones_3']);
            ContenedorBotones.style.justifyContent = 'flex-end';
            ContenedorBotones.style.marginTop = '0.5rem';

            // Botón Cancelar
            BotonCancelar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('BUTTON', 'btnCancelar', ['modal-button', 'modal-button--default-text', 'modal-button--text'], 'Cancelar');
            BotonCancelar.style.marginRight = '0.5rem';
            ContenedorBotones.insertAdjacentElement('beforeend', BotonCancelar);
            BotonCancelar.addEventListener('click', function () {
              document.getElementById('background').remove();
            });

            // Botón Guardar
            BotonGuardar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_5__.CreateElement)('BUTTON', 'btnGuardar', ['modal-button', 'modal-button--save', 'modal-button--text'], 'Guardar');
            ContenedorBotones.insertAdjacentElement('beforeend', BotonGuardar);
            BotonGuardar.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
              var CantidadCastigada, URL, body, result, CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    CantidadCastigada = tipo_registro == 1 ? document.getElementById('TiempoActual').textContent : ValorCantidadCastigada.rawValue;
                    URL = 'castigarregistro';
                    body = {
                      IDRegistro: IDRegistro,
                      CantidadCastigada: CantidadCastigada
                    };
                    _context.next = 5;
                    return (0,_api__WEBPACK_IMPORTED_MODULE_3__.PostData)(URL, body, 'Error al castigar datos', true);
                  case 5:
                    result = _context.sent;
                    if (!(result.result_code !== 0)) {
                      _context.next = 9;
                      break;
                    }
                    new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_6__.MostrarMensajeError(document.getElementById('dialogo'), result.result_message, 'Castigar Registro');
                    return _context.abrupt("return");
                  case 9:
                    document.getElementById('background').remove();
                    CodigoAlcance = localStorage.getItem('CodigoAlcance');
                    CodigoBuscado = localStorage.getItem('CodigoBuscado');
                    FechaDesde = localStorage.getItem('FechaDesde');
                    FechaHasta = localStorage.getItem('FechaHasta');
                    document.getElementById('main').classList.remove('ocultar-scroll');
                    CargarHistorialB(CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta);
                  case 16:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
            CastigarRegistro.insertAdjacentElement('beforeend', ContenedorBotones);
          } else {
            new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_6__.MostrarMensajeError(document.getElementById('dialogo'), result_message, 'getDatosCastigar');
          }
          dialogo.insertAdjacentElement('beforeend', CastigarRegistro);
          background.insertAdjacentElement('beforeend', dialogo);
          // Se agregar todos los elementos al DOM
          document.getElementById('main').insertAdjacentElement('beforeend', background);
          document.getElementById('main').classList.add('ocultar-scroll');

          // Cerrar Modal con tecla [ESC] o Click por fuera del modal
          document.getElementById('background').addEventListener('mousedown', function (event) {
            (0,_cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_7__.CerrarVentanaClick)(event, 'CastigarRegistro');
          }, false); // mousedown
          document.addEventListener('keydown', _cerrar_ventana_modal__WEBPACK_IMPORTED_MODULE_7__.CerrarVentanaESC, false); // keydown
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _CastigarRegistro.apply(this, arguments);
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

/***/ 1723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2284);
/* module decorator */ module = __webpack_require__.hmd(module);

(function (window, undefined) {
  'use strict';

  var JogDial = function JogDial(element, options) {
    return new JogDial.Instance(element, options || {});
  };
  function setConstants() {
    if (JogDial.Ready) {
      return;
    }
    JogDial.Doc = window.document;
    JogDial.ToRad = Math.PI / 180;
    JogDial.ToDeg = 180 / Math.PI;
    JogDial.ModernEvent = JogDial.Doc.addEventListener ? true : false;
    JogDial.MobileRegEx = '/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/';
    JogDial.MobileEvent = 'ontouchstart' in window && window.navigator.userAgent.match(JogDial.MobileRegEx);
    JogDial.PointerEvent = window.navigator.pointerEnabled || window.navigator.msPointerEnabled ? true : false;
    JogDial.Defaults = {
      debug: false,
      touchMode: 'knob',
      knobSize: '30%',
      wheelSize: '100%',
      zIndex: 9999,
      degreeStartAt: 0,
      minDegree: null,
      maxDegree: null
    };
    JogDial.DegInfo = {
      rotation: 0,
      quadrant: 1
    };
    JogDial.DomEvent = {
      MOUSE_DOWN: 'mousedown',
      MOUSE_MOVE: 'mousemove',
      MOUSE_OUT: 'mouseout',
      MOUSE_UP: 'mouseup'
    };
    JogDial.CustomEvent = {
      MOUSE_DOWN: 'mousedown',
      MOUSE_MOVE: 'mousemove',
      MOUSE_UP: 'mouseup'
    };
    JogDial.utils = {
      extend: function extend(target, src) {
        for (var key in src) {
          target[key] = src[key];
        }
        return target;
      },
      getComputedStyle: function getComputedStyle(el, prop) {
        if (window.getComputedStyle) {
          return window.getComputedStyle(el).getPropertyValue(prop);
        } else if (el.currentStyle) {
          return el.currentStyle[prop];
        }
      },
      getCoordinates: function getCoordinates(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
          rect = target.getBoundingClientRect(),
          _x = (JogDial.MobileEvent ? e.targetTouches[0].clientX : e.clientX) - rect.left,
          _y = (JogDial.MobileEvent ? e.targetTouches[0].clientY : e.clientY) - rect.top;
        return {
          x: _x,
          y: _y
        };
      },
      getQuadrant: function getQuadrant(x, y) {
        if (x > 0 && y > 0) return 4;else if (x < 0 && y > 0) return 3;else if (x < 0 && y < 0) return 2;else if (x >= 0 && y < 0) return 1;
      },
      getRotation: function getRotation(self, quadrant, newDegree) {
        var rotation,
          delta = 0,
          info = self.info;
        if (quadrant == 1 && info.old.quadrant == 2) {
          delta = 360;
        } else if (quadrant == 2 && info.old.quadrant == 1) {
          delta = -360;
        }
        rotation = newDegree + delta - info.old.rotation + info.now.rotation;
        info.old.rotation = newDegree;
        info.old.quadrant = quadrant;
        return rotation;
      },
      checkBoxCollision: function checkBoxCollision(bound, point) {
        return bound.x1 < point.x && bound.x2 > point.x && bound.y1 < point.y && bound.y2 > point.y;
      },
      addEvent: function addEvent(el, type, handler, capture) {
        type = type.split(' ');
        for (var i = 0; i < type.length; i++) {
          if (el.addEventListener) {
            el.addEventListener(type[i], handler, capture);
          } else if (el.attachEvent) {
            el.attachEvent('on' + type[i], handler);
          }
        }
      },
      removeEvent: function removeEvent(el, type, handler) {
        type = type.split(' ');
        for (var i = 0; i < type.length; i++) {
          if (el.addEventListener) {
            el.removeEventListener(type[i], handler);
          } else if (el.detachEvent) {
            el.detachEvent('on' + type[i], handler);
          }
        }
      },
      triggerEvent: function triggerEvent(el, type) {
        var evt;
        if (JogDial.Doc.createEvent) {
          evt = JogDial.Doc.createEvent("HTMLEvents");
          evt.initEvent(type, true, true);
          el.dispatchEvent(evt);
        } else {
          evt = JogDial.Doc.createEventObject();
          evt.target = {};
          JogDial.utils.extend(evt.target, el);
          el.fireEvent('on' + type, evt);
        }
      },
      convertClockToUnit: function convertClockToUnit(n) {
        return n % 360 - 90;
      },
      convertUnitToClock: function convertUnitToClock(n) {
        return n >= -180 && n < -90 ? 450 + n : 90 + n;
      }
    };
    JogDial.Ready = true;
  }
  ;
  JogDial.Instance = function (el, opt) {
    if (el.getAttribute('_jogDial_')) {
      window.alert('Please Check your code:\njogDial can not be initialized twice in a same element.');
      return false;
    }
    setConstants();
    setInstance(this, el, opt);
    setStage(this);
    setEvents(this);
    angleTo(this, JogDial.utils.convertClockToUnit(this.opt.degreeStartAt));
    return this;
  };
  JogDial.Instance.prototype = {
    on: function onEvent(type, listener) {
      JogDial.utils.addEvent(this.knob, type, listener, false);
      return this;
    },
    off: function onEvent(type, listener) {
      JogDial.utils.removeEvent(this.knob, type, listener);
      return this;
    },
    trigger: function triggerEvent(type, data) {
      switch (type) {
        case 'angle':
          angleTo(this, data);
          break;
        default:
          window.alert('Please Check your code:\njogDial does not have triggering event [' + type + ']');
          break;
      }
      return this;
    },
    angle: function angle(data) {
      angleTo(this, JogDial.utils.convertClockToUnit(data));
    }
  };
  function setInstance(self, el, opt) {
    self.base = el;
    self.base.setAttribute('_JogDial_', true);
    self.opt = JogDial.utils.extend(JogDial.utils.extend({}, JogDial.Defaults), opt);
    self.info = {} || self;
    self.info.now = JogDial.utils.extend({}, JogDial.DegInfo);
    self.info.old = JogDial.utils.extend({}, JogDial.DegInfo);
    self.info.snapshot = JogDial.utils.extend({}, self.info);
    self.info.snapshot.direction = null;
  }
  ;
  function setStage(self) {
    var item = {},
      BId = self.base.getAttribute("id"),
      BW = self.base.clientWidth,
      BH = self.base.clientHeight,
      opt = self.opt,
      K = item.knob = document.createElement('div'),
      W = item.wheel = document.createElement('div'),
      KS = K.style,
      WS = W.style,
      KRad,
      WRad,
      WMargnLT,
      WMargnTP;
    if (JogDial.utils.getComputedStyle(self.base, 'position') === 'static') {
      self.base.style.position = 'relative';
    }
    self.base.appendChild(K);
    self.base.appendChild(W);
    JogDial.utils.extend(self, item);
    KS.position = WS.position = 'absolute';
    KS.width = KS.height = opt.knobSize;
    WS.width = WS.height = opt.wheelSize;
    KRad = K.clientWidth / 2;
    WRad = W.clientWidth / 2;
    K.setAttribute('id', BId + '_knob');
    KS.margin = -KRad + 'px 0 0 ' + -KRad + 'px';
    KS.zIndex = opt.zIndex;
    W.setAttribute('id', BId + '_wheel');
    WMargnLT = (BW - W.clientWidth) / 2;
    WMargnTP = (BH - W.clientHeight) / 2;
    WS.left = WS.top = 0;
    WS.margin = WMargnTP + 'px 0 0 ' + WMargnLT + 'px';
    WS.zIndex = opt.zIndex;
    self.radius = WRad - KRad;
    self.center = {
      x: WRad + WMargnLT,
      y: WRad + WMargnTP
    };
    if (opt.debug) setDebug(self);
  }
  ;
  function setDebug(self) {
    var KS = self.knob.style;
    var WS = self.wheel.style;
    KS.backgroundColor = '#00F';
    WS.backgroundColor = '#0F0';
    KS.opacity = WS.opacity = .4;
    KS.filter = WS.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
    KS.webkitBorderRadius = WS.webkitBorderRadius = "50%";
    KS.borderRadius = WS.borderRadius = "50%";
  }
  ;
  function setEvents(self) {
    if (JogDial.PointerEvent) {
      JogDial.utils.extend(JogDial.DomEvent, {
        MOUSE_DOWN: 'pointerdown MSPointerDown',
        MOUSE_MOVE: 'pointermove MSPointerMove',
        MOUSE_OUT: 'pointerout MSPointerOut',
        MOUSE_UP: 'pointerup pointercancel MSPointerUp MSPointerCancel'
      });
    } else if (JogDial.MobileEvent) {
      JogDial.utils.extend(JogDial.DomEvent, {
        MOUSE_DOWN: 'touchstart',
        MOUSE_MOVE: 'touchmove',
        MOUSE_OUT: 'touchleave',
        MOUSE_UP: 'touchend'
      });
    }
    var opt = self.opt,
      info = self.info,
      K = self.knob,
      W = self.wheel;
    self.pressed = false;
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_DOWN, mouseDownEvent, false);
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_MOVE, mouseDragEvent, false);
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_UP, mouseUpEvent, false);
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_OUT, mouseUpEvent, false);
    function mouseDownEvent(e) {
      switch (opt.touchMode) {
        case 'knob':
        default:
          self.pressed = JogDial.utils.checkBoxCollision({
            x1: K.offsetLeft - W.offsetLeft,
            y1: K.offsetTop - W.offsetTop,
            x2: K.offsetLeft - W.offsetLeft + K.clientWidth,
            y2: K.offsetTop - W.offsetTop + K.clientHeight
          }, JogDial.utils.getCoordinates(e));
          break;
        case 'wheel':
          self.pressed = true;
          mouseDragEvent(e);
          break;
      }
      if (self.pressed) JogDial.utils.triggerEvent(self.knob, JogDial.CustomEvent.MOUSE_DOWN);
    }
    ;
    function mouseDragEvent(e) {
      if (self.pressed) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var offset = JogDial.utils.getCoordinates(e),
          _x = offset.x - self.center.x + W.offsetLeft,
          _y = offset.y - self.center.y + W.offsetTop,
          radian = Math.atan2(_y, _x) * JogDial.ToDeg,
          quadrant = JogDial.utils.getQuadrant(_x, _y),
          degree = JogDial.utils.convertUnitToClock(radian),
          rotation;
        info.now.rotation = JogDial.utils.getRotation(self, quadrant == undefined ? info.old.quadrant : quadrant, degree);
        rotation = info.now.rotation;
        if (opt.maxDegree != null && opt.maxDegree <= rotation) {
          if (info.snapshot.direction == null) {
            info.snapshot.direction = 'right';
            info.snapshot.now = JogDial.utils.extend({}, info.now);
            info.snapshot.old = JogDial.utils.extend({}, info.old);
          }
          rotation = opt.maxDegree;
          radian = JogDial.utils.convertClockToUnit(rotation);
          degree = JogDial.utils.convertUnitToClock(radian);
        } else if (opt.minDegree != null && opt.minDegree >= rotation) {
          if (info.snapshot.direction == null) {
            info.snapshot.direction = 'left';
            info.snapshot.now = JogDial.utils.extend({}, info.now);
            info.snapshot.old = JogDial.utils.extend({}, info.old);
          }
          rotation = opt.minDegree;
          radian = JogDial.utils.convertClockToUnit(rotation);
          degree = JogDial.utils.convertUnitToClock(radian);
        } else if (info.snapshot.direction != null) {
          info.snapshot.direction = null;
        }
        JogDial.utils.extend(self.knob, {
          rotation: rotation,
          degree: degree
        });
        angleTo(self, radian);
      }
    }
    ;
    function mouseUpEvent() {
      if (self.pressed) {
        self.pressed = false;
        if (self.info.snapshot.direction != null) {
          self.info.now = JogDial.utils.extend({}, info.snapshot.now);
          self.info.old = JogDial.utils.extend({}, info.snapshot.old);
          self.info.snapshot.direction = null;
        }
        JogDial.utils.triggerEvent(self.knob, JogDial.CustomEvent.MOUSE_UP);
      }
    }
    ;
  }
  ;
  function angleTo(self, radian) {
    radian *= JogDial.ToRad;
    var _x = Math.cos(radian) * self.radius + self.center.x,
      _y = Math.sin(radian) * self.radius + self.center.y,
      quadrant = JogDial.utils.getQuadrant(_x, _y),
      degree = JogDial.utils.convertUnitToClock(radian);
    self.knob.style.left = _x + 'px';
    self.knob.style.top = _y + 'px';
    if (self.knob.rotation == undefined) {
      JogDial.utils.extend(self.knob, {
        rotation: self.opt.degreeStartAt,
        degree: JogDial.utils.convertUnitToClock(radian)
      });
    }
    JogDial.utils.triggerEvent(self.knob, JogDial.CustomEvent.MOUSE_MOVE);
  }
  ;
  if (typeof define === 'function' && __webpack_require__.amdO) {
    define(function () {
      return JogDial;
    });
  } else if ((typeof exports === "undefined" ? "undefined" : (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(exports)) === 'object') {
    module.exports = JogDial;
  } else {
    window.JogDial = JogDial;
  }
})(window);

/***/ })

}]);