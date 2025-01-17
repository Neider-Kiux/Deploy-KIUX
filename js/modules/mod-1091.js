"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[1091,6985,6329,9366,3472,7164],{

/***/ 2182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorRGB: () => (/* binding */ ColorRGB),
/* harmony export */   ColorRegistroOpcion: () => (/* binding */ ColorRegistroOpcion),
/* harmony export */   GetHSL: () => (/* binding */ GetHSL),
/* harmony export */   PorcentajeL: () => (/* binding */ PorcentajeL)
/* harmony export */ });
var PorcentajeL = ['94', '96', '45'];
function GetHSL(ColorRGBDecimal) {
  // let ColorRGBHexadecimal = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(`#${ColorPrincipal(ColorRGBDecimal)}`);
  var ColorRGBHexadecimal = '00000' + ColorRGBDecimal.toString(16);
  ColorRGBHexadecimal = ColorRGBHexadecimal.substr(ColorRGBHexadecimal.length - 6, 6);
  var R = parseInt(ColorRGBHexadecimal.substr(0, 2), 16) / 255;
  var G = parseInt(ColorRGBHexadecimal.substr(2, 2), 16) / 255;
  var B = parseInt(ColorRGBHexadecimal.substr(4, 2), 16) / 255;
  var max = Math.max(R, G, B),
    min = Math.min(R, G, B);
  var H,
    S,
    L = (max + min) / 2;
  if (max == min) {
    H = S = 0; // achromatic
  } else {
    var d = max - min;
    S = L > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case R:
        H = (G - B) / d + (G < B ? 6 : 0);
        break;
      case G:
        H = (B - R) / d + 2;
        break;
      case B:
        H = (R - G) / d + 4;
        break;
    }
    H /= 6;
  }
  H = Math.round(H * 360);
  S = Math.round(S * 100);
  L = Math.round(L * 100);
  return [H, S, L];
}

// Color RGB de decimal a hexadecimal
function ColorRGB(ColorRGBDecimal) {
  var ColorRGBHexadecimal = '00000' + ColorRGBDecimal.toString(16);
  ColorRGBHexadecimal = ColorRGBHexadecimal.substr(ColorRGBHexadecimal.length - 6, 6);
  return "#".concat(ColorRGBHexadecimal);
}

// Color Registro Opción
function ColorRegistroOpcion(Color) {
  var HSL = GetHSL(Color);
  return "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(PorcentajeL[0], "%)");
}

/***/ }),

/***/ 1091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarVentana: () => (/* binding */ CerrarVentana),
/* harmony export */   CerrarVentanaEsc: () => (/* binding */ CerrarVentanaEsc),
/* harmony export */   GetDatosBusqueda: () => (/* binding */ GetDatosBusqueda)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_cambiar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2407);
/* harmony import */ var _datepicker_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5916);
/* harmony import */ var _cerrar_sesion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8662);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2182);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7425);
/* harmony import */ var _seleccionar_proyecto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7327);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5836);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8380);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7433);


//import '../../../img/buscar.svg';












// Cerrar ventana emergente [CerrarVentana] al hacer click por fuera de la ventana
function CerrarVentana(event) {
  if (event.target.id == 'background' && document.getElementById('DatosBusqueda')) {
    if (!document.getElementById('DlgSeleccion')) {
      document.getElementById('background').remove();
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
}

// Cerrar ventana emergente [CerrarVentanaEsc] con la tecla de escape [ESC]
function CerrarVentanaEsc(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('background') != null || document.getElementById('background') != undefined) {
      document.getElementById('background').remove();
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
}

// Datos Registro
function GetDatosBusqueda(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _GetDatosBusqueda.apply(this, arguments);
}
function _GetDatosBusqueda() {
  _GetDatosBusqueda = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB, TipoBusqueda) {
    var Background, Dialogo, DatosBusqueda, route;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          Background = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('SECTION', 'background', ['background']);
          Dialogo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('SECTION', 'dialogo', ['dialogo']);
          DatosBusqueda = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'DatosBusqueda', ['preconcepto']);
          route = "getdatosbuscar/".concat(localStorage.getItem('Token'), "/").concat(TipoBusqueda);
          (0,_api__WEBPACK_IMPORTED_MODULE_3__.CustomFetch)(route).then(function (result) {
            if (result.result_code == 0) {
              // botón Buscar
              var BotonClick = function BotonClick(Button) {
                var CodigoAlcance;
                var CodigoBuscado = Proyecto.dataset.codigo;
                var Fecha_Inicial_Consultada = calendario.selectedDates[0].toISOString().slice(0, 10);
                var Decha_Final_Consultada = calendario2.selectedDates[0].toISOString().slice(0, 10);
                if (CodigoBuscado == 0) {
                  CodigoAlcance = 51; // alcance "todos"
                } else if (CodigoBuscado > 0 && ClienteCheckbox.checked) {
                  CodigoAlcance = 53; // alcance "Cliente" (todos los Casos de un Cliente)
                } else {
                  CodigoAlcance = 52; // alcance "Caso"
                }
                document.getElementById('main').classList.remove('ocultar-scroll');
                Background.remove();
                CargarHistorialB(CodigoAlcance, CodigoBuscado, Fecha_Inicial_Consultada, Decha_Final_Consultada, OpcionesSeleccionadas);
                if (document.querySelector('.c_slider')) {
                  document.querySelector('.c_slider').style.display = 'none';
                }
                if (document.getElementById('DescripcionHistorial')) document.getElementById('DescripcionHistorial').innerHTML = Fecha_Inicial_Consultada + ' - ' + Decha_Final_Consultada;
              }; // Creamos referencias a las funciones BotonClick para cada boton
              var HabilitarBoton = function HabilitarBoton(Boton) {
                if (!Boton.classList.contains('modal-button--default')) {
                  Boton.classList.remove('modal-button--disabled');
                  Boton.classList.add('modal-button--default');
                  Boton.children[0].src = "/img/".concat(Boton.id.toLowerCase(), ".svg");
                  if (Boton.id == 'Buscar') Boton.addEventListener('click', BotonClickBuscar);
                }
              };
              var DeshabilitarBoton = function DeshabilitarBoton(Boton) {
                if (!Boton.classList.contains('modal-button--disabled')) {
                  Boton.classList.remove('modal-button--default');
                  Boton.classList.add('modal-button--disabled');
                  Boton.children[0].src = "/img/".concat(Boton.id.toLowerCase(), "-disabled.svg");
                  if (Boton.id == 'Buscar') Boton.removeEventListener('click', BotonClickBuscar);
                }
              };
              var ValidarBotones = function ValidarBotones() {
                OpcionesSeleccionadas = '';
                var Checkboxes = document.getElementsByClassName('CheckboxClase');
                for (var I = 0; I < Checkboxes.length; I++) {
                  if (Checkboxes.item(I).checked) OpcionesSeleccionadas += Checkboxes.item(I).getAttribute('dato');
                }
                if (OpcionesSeleccionadas.length > 0) HabilitarBoton(Buscar);else DeshabilitarBoton(Buscar);
              }; // Proyecto
              //Cambia las fechas cuando se selecciona Un periodo
              var CargarFechasPeriodo = function CargarFechasPeriodo() {
                var OpcionSeleccionada = document.getElementById('controlPeriodo').options[SelectPeriodo.selectedIndex].value;
                if (opciones[OpcionSeleccionada - 1]) {
                  FechaInicial.dataset.contador = 2;
                  calendario.selectDate((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* .parse */ .qg)(opciones[OpcionSeleccionada - 1].fecha_inicial, 'yyyy-MM-dd', new Date()));
                  calendario2.selectDate((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* .parse */ .qg)(opciones[OpcionSeleccionada - 1].fecha_final, 'yyyy-MM-dd', new Date()));
                  FechaInicial.setAttribute('data-value', (0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* .parse */ .qg)(opciones[OpcionSeleccionada - 1].fecha_inicial, 'yyyy-MM-dd', new Date()));
                }
              };
              // Cargar el valor inicial de los campos
              var Buscar;
              var BotonClickBuscar = function BotonClickBuscar() {
                return BotonClick(Buscar);
              };
              var Proyecto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.Selector)('DIV', 'Proyecto', ['border-style--default', 'editar-registro__nombre-proyecto'], result.nombre_proyecto, '', '', result.codigo_proyecto);

              // Añadiendo Evento click a [Proyecto]
              Proyecto.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                var _yield$import, SeleccionarProyecto;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7327));
                    case 2:
                      _yield$import = _context.sent;
                      SeleccionarProyecto = _yield$import.SeleccionarProyecto;
                      SeleccionarProyecto();
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })));

              // Insertando [Proyecto] a [DatosBusqueda]
              DatosBusqueda.insertAdjacentElement('beforeend', Proyecto);

              // Contenedor de Fecha y tiempo
              var ContenedorFechaCliente = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', null, ['c-ancho-completo']);
              // Insertando [ContenedorFechaCantidad] a [DatosBusqueda]
              DatosBusqueda.insertAdjacentElement('beforeend', ContenedorFechaCliente);

              // Fecha
              var FechaInicial = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.inputElement)('TEXT', 'fechaInicial', ['ancho--default', 'border-style--default'], null, 'true');
              // Insertando [Fecha] a [ContenedorFechaCantidad]
              ContenedorFechaCliente.insertAdjacentElement('beforeend', FechaInicial);

              // FechaInicial
              var FechaFinal = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.inputElement)('TEXT', 'fechaFinal', ['ancho--default', 'border-style--default'], null, 'true');
              // Insertando [Fecha] a [ContenedorFechaCliente]
              ContenedorFechaCliente.insertAdjacentElement('beforeend', FechaFinal);
              FechaInicial.setAttribute('data-contador', 0);
              var calendario = new air_datepicker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A('#fechaInicial', _datepicker_options__WEBPACK_IMPORTED_MODULE_2__.datepickerOptions);
              calendario.selectDate((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* .parse */ .qg)(result.fecha_inicial, 'yyyy-MM-dd', new Date())); //[x]

              var calendario2 = new air_datepicker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A('#fechaFinal', _datepicker_options__WEBPACK_IMPORTED_MODULE_2__.datepickerOptions);
              calendario2.selectDate((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* .parse */ .qg)(result.fecha_final, 'yyyy-MM-dd', new Date()));
              var ObserverFechaInicial = new MutationObserver( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (FechaInicial.dataset.contador == 1) {
                        calendario2.selectDate((0,date_fns__WEBPACK_IMPORTED_MODULE_8__/* .parse */ .qg)(FechaFinal.value, 'yyyy-MM-dd', new Date()));
                      }
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              })));
              ObserverFechaInicial.observe(FechaInicial, {
                attributes: true,
                attributeFilter: ['data-value']
              });

              // Contenedor cliente checkbox
              var ContenedorCliente = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'contenedorCliente', ['border-style--default', 'contenedorCliente'], 'Cliente');
              ContenedorFechaCliente.insertAdjacentElement('beforeend', ContenedorCliente);

              //Contenedor checkBox para seleccionar cliente
              var ContenedorCheckboxCliente = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', null, ['text-rigth']);

              //Checkbox para selecionar cliente
              var ClienteCheckbox = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.inputElement)('checkbox', 'cliente', null, 'false');
              ContenedorCheckboxCliente.insertAdjacentElement('beforeend', ClienteCheckbox);
              ContenedorCliente.insertAdjacentElement('beforeend', ContenedorCheckboxCliente);

              // Contenedor de periodo y clase
              var ContenedorPeriodoClase = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'contenedorPeriodoClase', ['c-ancho-completo']);
              // Insertando [ContenedorFechaCantidad] a [DatosBusqueda]
              DatosBusqueda.insertAdjacentElement('beforeend', ContenedorPeriodoClase);

              //Secition para el periodo
              var Periodo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('SECTION', 'periodo', ['seleccionPeriodo']);
              Periodo.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      CargarFechasPeriodo();
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              })));
              Periodo.addEventListener('change', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      CargarFechasPeriodo();
                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              })));
              var SelectPeriodo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('SELECT', 'controlPeriodo', ['selectImagen', 'border-style--default']);
              Periodo.insertAdjacentElement('beforeend', SelectPeriodo);

              //Creamos una opción por defecto
              var OpcionesPeriodo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.optionElement)('0', 'Periodos sugeridos');
              SelectPeriodo.insertAdjacentElement('beforeend', OpcionesPeriodo);

              // Pinta las opciones del select recibidas de la API
              var opciones = result.periodo_opciones;
              for (var i = 0; i < opciones.length; i++) {
                OpcionesPeriodo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.optionElement)(opciones[i].id_periodo, opciones[i].nombre_periodo);
                SelectPeriodo.insertAdjacentElement('beforeend', OpcionesPeriodo);
              }

              // Clase(toggle para marcar o desmarcar todo)
              var ToggleClase = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('SECTION', null, ['seleccionClase']);

              //Variable para almacenar cuales checkbox se han seleccionado
              var OpcionesSeleccionadas = '';

              //Cuando se oprime el toggle selecciona todos los chechbox o los deselecciona en caso de que todos esten marcados
              ToggleClase.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
                var Checkboxes, Valor, I;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      Checkboxes = document.getElementsByClassName('CheckboxClase');
                      Valor = OpcionesSeleccionadas.length < Checkboxes.length;
                      for (I = 0; I < Checkboxes.length; I++) {
                        Checkboxes.item(I).checked = Valor;
                      }
                      ValidarBotones();
                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              })));

              //Icono svg para el toggle de clase
              var ControlToggleClase = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'controlClase', ['control', 'controlClase']);
              ToggleClase.insertAdjacentElement('beforeend', ControlToggleClase);

              //Texto que acompaña el toggle
              var TextoToggle = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', null, ['control__texto'], result.nombre_lista);
              ControlToggleClase.insertAdjacentElement('beforeend', TextoToggle);
              //Imagen del toogle
              var ImagenClase = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'imagenClase', ['control__imagenToggle']);
              ImagenClase.innerHTML += "<svg viewbox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-toggle-clases\"></use></svg>";
              ControlToggleClase.insertAdjacentElement('beforeend', ImagenClase);
              ContenedorPeriodoClase.insertAdjacentElement('beforeend', Periodo);
              ContenedorPeriodoClase.insertAdjacentElement('beforeend', ToggleClase);

              // Contenedor Clases
              var ContenedorClase = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'ContenedorClase', ['contenedorClase']);
              DatosBusqueda.insertAdjacentElement('beforeend', ContenedorClase);
              // Insertando a [ContenedorContenedorClase]

              var Check = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.inputElement)('checkbox', 'cliente', null, 'false');
              var I = 0;

              //itera sobre las clases y las pinta con su respectivo Checkbox
              result.lista_opciones.forEach(function (_ref6) {
                var color_rgb = _ref6.color_rgb,
                  nombre_opcion = _ref6.nombre_opcion,
                  id_opcion = _ref6.id_opcion,
                  checked = _ref6.checked;
                var Opcion = document.createElement('DIV');
                Opcion.classList.add('ClaseBusqueda');
                Opcion.style.background = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_9__.ColorRGB)(color_rgb));
                var NombreOpcion = document.createElement('SPAN');
                NombreOpcion.appendChild(document.createTextNode("".concat(nombre_opcion)));
                NombreOpcion.classList.add(['ClaseBusqueda__titulo']);
                Opcion.insertAdjacentElement('beforeend', NombreOpcion);
                var ContenedorCheckbox = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', "contenedorCheckbox-".concat(id_opcion), ['text-rigth']);
                var Checkbox = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.inputElement)('checkbox', "CheckboxClase-".concat(id_opcion), ['CheckboxClase']);
                if (checked) {
                  Checkbox.checked = true;
                }
                Checkbox.setAttribute('dato', "".concat(id_opcion));
                Checkbox.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        ValidarBotones();
                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                })));
                ContenedorCheckbox.insertAdjacentElement('beforeend', Checkbox);
                NombreOpcion.insertAdjacentElement('beforeend', ContenedorCheckbox);
                ContenedorClase.insertAdjacentElement('beforeend', Opcion);
                I++;
              });
              // Contenedor de botones
              var ContenedorBotones = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'c-Botones');

              // Insertando a [DatosBusqueda]
              DatosBusqueda.insertAdjacentElement('beforeend', ContenedorBotones);

              // Botón Buscar
              Buscar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('BUTTON', 'Buscar', ['modal-button', 'modal-button--imageBuscar', 'modal-button--full', 'ancho--default']);
              Buscar.innerHTML += "<svg viewbox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#buscar\"></use></svg>";
              ContenedorBotones.insertAdjacentElement('beforeend', Buscar); // Insertando a [ContenedorBotones]

              ValidarBotones();
              localStorage.setItem('Token', result.new_token);
              // Reiniciar TextosPlantillaArreglo
            } else {
              if (result.result_code > 1000) {
                alert("".concat(result.result_message, "\nProceso: GetDatosBusqueda\nSe cerrar\xE1 la sesi\xF3n."));
                (0,_cerrar_sesion__WEBPACK_IMPORTED_MODULE_10__.CerrarSesion)();
              } else {
                new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_11__.MostrarMensajeError(Dialogo, result.result_message, 'GetDatosBusqueda');
              }
            }
          })["catch"](function (error) {
            return console.log(error);
          });
          Dialogo.insertAdjacentElement('beforeend', DatosBusqueda);
          Background.insertAdjacentElement('beforeend', Dialogo);
          document.getElementById('main').insertAdjacentElement('beforeend', Background);
          document.getElementById('main').classList.add('ocultar-scroll');
          if (document.getElementById('background') != null || document.getElementById('background') != undefined) {
            // Mousedown - Click en el fondo para salir.
            document.getElementById('background').addEventListener('mousedown', CerrarVentana, false);
            // Keydown - Tecla [ESC] para salir.
            document.addEventListener('keydown', CerrarVentanaEsc, false);
          }
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _GetDatosBusqueda.apply(this, arguments);
}

/***/ })

}]);