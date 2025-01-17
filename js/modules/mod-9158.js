"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[9158,8662,5916,3534,4021],{

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

/***/ 5916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   datepickerOptions: () => (/* binding */ datepickerOptions)
/* harmony export */ });
var button = {
  content: 'Hoy',
  className: 'custom-button-classname',
  onClick: function onClick(dp) {
    var date = new Date();
    dp.selectDate(date);
    dp.setViewDate(date);
  }
};
var datepickerOptions = {
  dateFormat: 'yyyy-MM-dd',
  locale: {
    days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    daysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    today: 'Hoy',
    clear: 'Limpiar',
    dateFormat: 'yyyy/mm/dd',
    timeFormat: 'hh:ii aa',
    firstDay: 1
  },
  buttons: [button],
  todayButton: new Date(),
  autoClose: true,
  onSelect: function onSelect(dp) {
    //console.log(dp.datepicker.$el);
    if (dp.datepicker.$el.id == 'fechaPreconcepto') {
      var Fecha_Preconcepto = document.getElementById('fechaPreconcepto');
      Fecha_Preconcepto.setAttribute('data-value', dp.formattedDate);
    }
    if (document.getElementById('fechaInicial')) {
      var Fecha_Inicial = document.getElementById('fechaInicial');
      var Fecha_Final = document.getElementById('fechaFinal');
      if (dp.datepicker.$el.id == 'fechaInicial') {
        Fecha_Inicial.setAttribute('data-value', dp.formattedDate);
      }
      if (dp.datepicker.$el.id == 'fechaInicial' && Fecha_Inicial.dataset.contador == 1) {
        Fecha_Final.setAttribute('data-value', dp.formattedDate);
        Fecha_Final.value = dp.formattedDate;
      }
      if (dp.datepicker.$el.id == 'fechaFinal') {
        Fecha_Inicial.dataset.contador++;
        Fecha_Final.setAttribute('data-value', dp.formattedDate);
      }
    }
    if (dp.datepicker.$el.id == 'fechaParaRuta') {
      var _Fecha_Preconcepto = document.getElementById('fechaParaRuta');
      _Fecha_Preconcepto.setAttribute('data-value', dp.formattedDate);
    }
  },
  position: function position(_ref) {
    var $datepicker = _ref.$datepicker,
      $target = _ref.$target,
      $pointer = _ref.$pointer;
    var coords = $target.getBoundingClientRect(),
      dpHeight = $datepicker.clientHeight,
      dpWidth = $datepicker.clientWidth,
      downMovement = 3;
    var top = coords.y + coords.height + downMovement;
    var left = coords.x;
    $datepicker.style.left = "".concat(left, "px");
    $datepicker.style.top = "".concat(top, "px");
    $pointer.style.display = 'none';
  }
};

/***/ }),

/***/ 9158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarPreconcepto: () => (/* binding */ CerrarPreconcepto),
/* harmony export */   GetDatosRegistro: () => (/* binding */ GetDatosRegistro),
/* harmony export */   QuitarBackgroundMostrarScroll: () => (/* binding */ QuitarBackgroundMostrarScroll),
/* harmony export */   RemoverPreconcepto: () => (/* binding */ RemoverPreconcepto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_cambiar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);
/* harmony import */ var _img_cambiar_disabled_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8221);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2407);
/* harmony import */ var _datepicker_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5916);
/* harmony import */ var _cerrar_sesion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8662);
/* harmony import */ var _seleccionar_proyecto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7327);
/* harmony import */ var _plantillas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7049);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5836);
/* harmony import */ var _utils_mascaraInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4021);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7425);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8380);
/* harmony import */ var autonumeric__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8850);
/* harmony import */ var autonumeric__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(autonumeric__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7433);

















var LongitudMinima = 5; // longitud mínima de texto para la descripción

var ToggleIdiomaSeleccion = 0;
// Cerrar ventana emergente [cerrarPreconceto] al hacer click por fuera de la ventana
function CerrarPreconcepto(event) {
  if (event.target.id == 'background' && document.getElementById('DatosRegistro')) {
    if (!document.getElementById('DlgSeleccion') && !document.getElementById('Plantillas') && !document.getElementById('AdjuntarArchivos') && !document.querySelector('#second-background')) {
      CerrarVentanaEmergente();
    }
  }
}

// Cerrar ventana emergente [removerPreconcepto] con la tecla de escape [ESC]
function RemoverPreconcepto(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('background') != null || document.getElementById('background') != undefined && !document.querySelector('#second-background')) {
      CerrarVentanaEmergente();
    }
  }
}
function CerrarVentanaEmergente() {
  if (document.getElementById('DatosRegistro') && document.getElementById('Guardar').classList.contains('modal-button--disabled')) {
    QuitarBackgroundMostrarScroll();
    console.log('Entra aquí');
  } else {
    new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_9__.MostrarSalirSinGuardar(document.querySelector('#dialogo'), '¿Quiere salir sin guardar? perderá los cambios', QuitarBackgroundMostrarScroll);
  }
}
function QuitarBackgroundMostrarScroll() {
  document.getElementById('background').remove();
  document.getElementById('main').classList.remove('ocultar-scroll');
}

// Función que valida si alguna Pestaña (Tab) fue cambiada
function SomeTabChanged() {
  var resultado = false;
  var tab_display = document.querySelectorAll('.tab-display');
  tab_display.forEach(function (element) {
    if (element.hasAttribute('data-changed')) {
      resultado = resultado || element.dataset.changed === 'true';
    }
  });
  return resultado;
}

// Función que valida si todas las Pestañas (Tabs) están llenas
function AllTabsFilled() {
  var resultado = true;
  var tab_display = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(document.querySelectorAll('.tab-display'));
  tab_display.forEach(function (element) {
    var TabIcono = document.getElementById("tab-".concat(element.dataset.id_tab, "-icono"));
    var Filled = element.hasAttribute('data-codigo') && element.dataset.codigo != 'undefined';
    resultado = resultado && Filled;
    if (Filled) {
      TabIcono.textContent = ''; // campo lleno
      TabIcono.style.color = '#0D9900'; // verde
      TabIcono.style.fontWeight = 600;
    } else {
      TabIcono.textContent = '⦁'; // campo vacío ⦁●◉⦿
      TabIcono.style.color = '#C92F2F'; // rojo
      TabIcono.style.fontWeight = 600;
    }
  });
  return resultado;
}

// Get Datos Registro
function GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB) {
  var Background = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('SECTION', 'background', ['background']);
  var Dialogo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('SECTION', 'dialogo', ['dialogo']);
  var DatosRegistro = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'DatosRegistro', ['preconcepto']);
  var TabDisplaySubclase; // toma valor cuando se tenga la pestaña "Subclase"
  var ReadyToEnd; // toma valor al validar los botones
  var Path = "".concat(TipoRegistro, "/").concat(IDRegistro);
  (0,_api__WEBPACK_IMPORTED_MODULE_7__.GetData)('getdatosregistro', Path, 'Error al traer datos del registros', true).then(function (result) {
    if (result.result_code == 0) {
      // botón Terminar
      // Envío de datos al servidor y otros procesos al hacer click en botón
      // Tabs = arreglo con respuestas de Pestañas (Tabs)
      var BotonClick = /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Boton) {
          var Prefijo, Tabs, tab_display, URL, body, MensajeDeError, _yield$PostData, result_code, result_message, actualizar, CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                // si es un "concepto" y se oprime "Guardar" se debe cumplir que todos los Tabs están llenos
                Prefijo = IDRegistro.substring(0, IDRegistro.indexOf('-'));
                if (!(Prefijo == 'concepto' && Boton.id == 'Guardar' && !AllTabsFilled())) {
                  _context.next = 4;
                  break;
                }
                new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_9__.MostrarMensajeError(Dialogo, 'Hay campos pendientes por llenar', 'Guardar');
                return _context.abrupt("return");
              case 4:
                Tabs = [];
                tab_display = document.querySelectorAll('.tab-display');
                tab_display.forEach(function (element) {
                  if (element.hasAttribute('data-codigo')) Tabs.push({
                    id_tab: element.dataset.id_tab,
                    codigo: element.dataset.codigo
                  });
                });
                URL = 'setdatosregistro';
                body = {
                  IDRegistro: IDRegistro,
                  Tipo: parseInt(TipoRegistro),
                  Proyecto: parseInt(Proyecto.dataset.codigo),
                  Fecha: Fecha.value,
                  FechaChecked: true,
                  //[x] Es necesario enviar <<FechaChecked>> en true para que la la API responda correctamente.
                  Moneda: Moneda.textContent || 'NA',
                  Cantidad: Cantidad.value,
                  Descripcion: Descripcion.textContent.trim(),
                  Item: DatosRegistro.dataset.item ? DatosRegistro.dataset.item : 0,
                  Tabs: Tabs,
                  IDBoton: Boton.id,
                  ReadyToEnd: ReadyToEnd
                };
                MensajeDeError = 'Lamentablente, no pudimos guardar tu registro';
                _context.next = 12;
                return (0,_api__WEBPACK_IMPORTED_MODULE_7__.PostData)(URL, body, MensajeDeError, true);
              case 12:
                _yield$PostData = _context.sent;
                result_code = _yield$PostData.result_code;
                result_message = _yield$PostData.result_message;
                actualizar = _yield$PostData.actualizar;
                if (!(result_code > 1000)) {
                  _context.next = 20;
                  break;
                }
                alert("".concat(result.result_message, "\nProceso: SetDatosRegistro\nSe cerrar\xE1 la sesi\xF3n."));
                (0,_cerrar_sesion__WEBPACK_IMPORTED_MODULE_13__.CerrarSesion)();
                return _context.abrupt("return");
              case 20:
                if (!(result_code !== 0)) {
                  _context.next = 23;
                  break;
                }
                new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_9__.MostrarMensajeError(document.getElementById('dialogo'), result_message, 'GuardarRegistro');
                return _context.abrupt("return");
              case 23:
                CodigoAlcance = localStorage.getItem('CodigoAlcance');
                CodigoBuscado = localStorage.getItem('CodigoBuscado');
                FechaDesde = localStorage.getItem('FechaDesde');
                FechaHasta = localStorage.getItem('FechaHasta'); // Remueve la ventana modal.
                background.remove();
                // Ubicar el Scroll en el inicio de la página
                document.getElementById('main').classList.remove('ocultar-scroll');
                window.scrollTo(0, 0);
                // Actualizar Gráficas de Avance
                if (actualizar.includes('avp')) CargarAvance(21);
                if (actualizar.includes('avd')) CargarAvance(11);
                // Actualizar HistoryBar
                if (actualizar.includes('hB')) CargarHistoryBar('today', 'home');
                // Actualizar HistorialA
                if (actualizar.includes('ha')) CargarHistorialA();
                // Actualizar HistorialB
                if (actualizar.includes('hb')) CargarHistorialB(CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta);
              case 35:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function BotonClick(_x) {
          return _ref.apply(this, arguments);
        };
      }(); // Creamos referencias a las funciones BotonClick para cada boton
      // Aqui manejamos los eventos de los botones
      var HabilitarBoton = function HabilitarBoton(Boton) {
        if (!Boton.classList.contains('modal-button--default')) {
          Boton.classList.remove('modal-button--disabled');
          Boton.classList.add('modal-button--default');
          //Boton.children[0].src = `/img/${Boton.id.toLowerCase()}.svg`;
          Boton.innerHTML = "<svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#".concat(Boton.id.toLowerCase(), "\"></use></svg>");
          if (Boton.id == 'Encantar') Boton.addEventListener('click', BotonClickEncantar);
          if (Boton.id == 'Activar') Boton.addEventListener('click', BotonClickActivar);
          if (Boton.id == 'Guardar') Boton.addEventListener('click', BotonClickGuardar);
          if (Boton.id == 'Terminar') Boton.addEventListener('click', BotonClickTerminar);
        }
      };
      var DeshabilitarBoton = function DeshabilitarBoton(Boton) {
        if (!Boton.classList.contains('modal-button--disabled')) {
          Boton.classList.remove('modal-button--default');
          Boton.classList.add('modal-button--disabled');
          //Boton.children[0].src = `/img/${Boton.id.toLowerCase()}-disabled.svg`;
          Boton.innerHTML = "<svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#".concat(Boton.id.toLowerCase(), "-disabled\"></use></svg>");
          if (Boton.id == 'Encantar') Boton.removeEventListener('click', BotonClickEncantar);
          if (Boton.id == 'Activar') Boton.removeEventListener('click', BotonClickActivar);
          if (Boton.id == 'Guardar') Boton.removeEventListener('click', BotonClickGuardar);
          if (Boton.id == 'Terminar') Boton.removeEventListener('click', BotonClickTerminar);
        }
      };
      var ValidarBotones = function ValidarBotones() {
        var vSomeTabChanged = SomeTabChanged();
        var vAllTabsFilled = AllTabsFilled();
        // Validar botón Activar
        if (BotonesDisponibles.includes('a') && DescripcionValid) {
          HabilitarBoton(Activar);
        } else {
          DeshabilitarBoton(Activar);
        }
        // Validar botón Guardar
        if (BotonesDisponibles.includes('g') && (ProyectoCodigoChanged || FechaChanged || MonedaChanged || CantidadChanged || DescripcionChanged || vSomeTabChanged)) {
          HabilitarBoton(Guardar);
        } else {
          DeshabilitarBoton(Guardar);
        }
        // Validar botón Terminar
        if (BotonesDisponibles.includes('t') && ProyectoCodigoValid && CantidadValid && DescripcionValid && vAllTabsFilled) {
          HabilitarBoton(Terminar);
          ReadyToEnd = 1; // Equivale a que todos los campos fueron llenados
        } else {
          DeshabilitarBoton(Terminar);
          ReadyToEnd = 0; // Existe al menos un campo pendiente por llenar
        }
      }; // Proyecto
      // Get Tabs Registro
      var GetTabsRegistro = /*#__PURE__*/function () {
        var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(Dialogo, CodigoProyecto, CodigoSubclase, TipoRegistro, IDRegistro) {
          var Path;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                // puede pasar que CodigoSubclase = undefined
                if (CodigoSubclase === 'undefined' || CodigoSubclase === undefined) CodigoSubclase = 0;
                Path = "".concat(CodigoProyecto, "/").concat(CodigoSubclase, "/").concat(TipoRegistro, "/").concat(IDRegistro);
                _context8.next = 4;
                return (0,_api__WEBPACK_IMPORTED_MODULE_7__.GetData)('gettabsregistro', Path, 'Error al traer tabs del registro', true).then(function (result) {
                  if (result.result_code == 0) {
                    ObserverTabDisplays.disconnect();
                    ObserverTabDisplaySubclase.disconnect();
                    // eliminamos "tabs"
                    document.getElementById('tabs').remove();
                    // hacemos un backup de "tab-displays"
                    var BackupTabDisplays = document.getElementById('tab-displays');
                    BackupTabDisplays.id = "bk-".concat(BackupTabDisplays.id);
                    BackupTabDisplays.style.display = 'none';
                    BackupTabDisplays.className = '';
                    BackupTabDisplays.childNodes.forEach(function (element) {
                      element.id = "bk-".concat(element.id);
                      element.style.display = 'none';
                      element.className = '';
                    });
                    // Tabs - construcción dinámica de las Pestañas
                    var _ContenedorTabs = document.getElementById('contenedor-tabs');
                    var _Tabs = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'tabs');
                    var _TabDisplays = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'tab-displays');
                    // forEach para construir la estructura
                    result.tabs.forEach(function (element, i) {
                      var Tab = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-".concat(element.id_tab), ['tab']);
                      var TabTexto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-".concat(element.id_tab, "-texto"));
                      TabTexto.textContent = element.caption;
                      var TabIcono = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-".concat(element.id_tab, "-icono"));
                      Tab.insertAdjacentElement('beforeend', TabTexto);
                      Tab.insertAdjacentElement('beforeend', TabIcono);
                      _Tabs.insertAdjacentElement('beforeend', Tab);
                      var TabDisplay = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-display-".concat(element.id_tab), ['tab-display']);
                      if (element.enabled) TabDisplay.classList.add('enabled');
                      TabDisplay.dataset.id_tab = element.id_tab;
                      TabDisplay.textContent = element.title_vacio;
                      TabDisplay.title = element.title_vacio;
                      // Backup
                      var Backup = document.getElementById("bk-".concat(TabDisplay.id));
                      if (Backup && element.peso_backup && element.peso_backup > element.peso_opcion_activa) {
                        TabDisplay.dataset.clase = Backup.dataset.clase;
                        TabDisplay.dataset.orden = Backup.dataset.orden;
                        TabDisplay.dataset.codigo_old = Backup.dataset.codigo_old;
                        TabDisplay.dataset.codigo = Backup.dataset.codigo;
                        TabDisplay.dataset.changed = Backup.dataset.changed;
                        TabDisplay.textContent = Backup.textContent;
                        TabDisplay.title = Backup.title;
                      }
                      // Opción Activa
                      if (element.opcion_activa && element.peso_opcion_activa && element.peso_opcion_activa > element.peso_backup) {
                        var _element$opcion_activ2 = element.opcion_activa,
                          id_grupo = _element$opcion_activ2.id_grupo,
                          nombre_opcion = _element$opcion_activ2.nombre_opcion,
                          orden = _element$opcion_activ2.orden,
                          id_opcion = _element$opcion_activ2.id_opcion;
                        TabDisplay.dataset.clase = id_grupo;
                        TabDisplay.dataset.orden = orden;
                        TabDisplay.dataset.codigo_old = id_opcion;
                        TabDisplay.dataset.codigo = id_opcion;
                        TabDisplay.dataset.changed = false;
                        TabDisplay.textContent = "".concat(id_grupo, " - ").concat(nombre_opcion);
                        TabDisplay.title = element.title_lleno;
                      }
                      // poner indicador de campo lleno o vacío
                      if (TabDisplay.hasAttribute('data-codigo') && TabDisplay.dataset.codigo != 'undefined') {
                        TabIcono.textContent = ''; // campo lleno
                        TabIcono.style.color = '#0D9900'; // verde
                        TabIcono.style.fontWeight = 600;
                      } else {
                        TabIcono.textContent = '⦁'; // campo vacío ⦁●◉⦿
                        TabIcono.style.color = '#C92F2F'; // rojo
                        TabIcono.style.fontWeight = 600;
                      }
                      // asignar evento 'click' al TabDisplay
                      if (TabDisplay.classList.contains('enabled')) TabDisplay.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
                        var _yield$import4, MostrarDialogo;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.next = 2;
                              return __webpack_require__.e(/* import() */ 6109).then(__webpack_require__.bind(__webpack_require__, 6109));
                            case 2:
                              _yield$import4 = _context7.sent;
                              MostrarDialogo = _yield$import4.MostrarDialogo;
                              MostrarDialogo(Dialogo, TabDisplay, element, true);
                            case 5:
                            case "end":
                              return _context7.stop();
                          }
                        }, _callee7);
                      })));
                      _TabDisplays.insertAdjacentElement('beforeend', TabDisplay);
                    });
                    // eliminar el backup de "tab-displays"
                    BackupTabDisplays.remove();
                    // agregar elementos al DOM
                    _ContenedorTabs.insertAdjacentElement('beforeend', _Tabs);
                    _ContenedorTabs.insertAdjacentElement('beforeend', _TabDisplays);
                    // arreglos de tab's y tab_display's
                    var _tab = document.querySelectorAll('.tab');
                    var _tab_display = document.querySelectorAll('.tab-display');
                    // seleccionar la primera pestaña
                    if (_tab.length) {
                      _tab[0].classList.add('seleccionado');
                      _tab_display[0].classList.add('seleccionado');
                    }
                    // asignar evento 'click' a los tab's
                    _tab.forEach(function (element, i) {
                      _tab[i].addEventListener('click', function () {
                        _tab.forEach(function (element, j) {
                          _tab[j].classList.remove('seleccionado');
                          _tab_display[j].classList.remove('seleccionado');
                        });
                        _tab[i].classList.add('seleccionado');
                        _tab_display[i].classList.add('seleccionado');
                      });
                    });
                    // ponemos Mutation Observer a TabDisplays
                    ObserverTabDisplays.observe(_TabDisplays, {
                      attributes: true,
                      attributeFilter: ['data-codigo'],
                      subtree: true
                    });
                    TabDisplaySubclase = document.getElementById('tab-display-1');
                    ObserverTabDisplaySubclase.observe(TabDisplaySubclase, {
                      attributes: true,
                      attributeFilter: ['data-codigo'],
                      subtree: true
                    });
                    ValidarBotones();
                  } else {
                    new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_9__.MostrarMensajeError(Dialogo, result.result_message, 'GetTabsRegistro');
                  }
                });
              case 4:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        return function GetTabsRegistro(_x2, _x3, _x4, _x5, _x6) {
          return _ref7.apply(this, arguments);
        };
      }(); // Contenedor de botones
      // Cargar el valor inicial de los campos
      var ProyectoCodigoOld = result.codigo_proyecto;
      var ProyectoCodigoUltimo = result.codigo_proyecto; // para controlar GetTabsRegistro
      var FechaOld = result.fecha;
      var MonedaOld = result.moneda_default;
      var CantidadOld = result.cantidad;
      var DescripcionOld = result.descripcion.trim();
      var BotonesDisponibles = result.botones_disponibles;
      // Determinar si el valor de los campos "obligatorios" es válido
      var ProyectoCodigoValid = ProyectoCodigoOld > 0; // 0 = 'ACTIVIDADES O GASTOS PARA TRASLADAR'
      var CantidadValid = CantidadOld.match(/[1-9]/) && CantidadOld.match(/[1-9]/).length > 0; // contiene dígitos entre 1 y 9;
      var DescripcionValid = DescripcionOld.length > LongitudMinima; // longitud mínima
      // Inicialmente ningún campo ha cambiado
      var ProyectoCodigoChanged = false;
      var FechaChanged = false;
      var MonedaChanged = false;
      var CantidadChanged = false;
      var DescripcionChanged = false;
      // Declaramos la variables que representarán los botones
      var Encantar; // botón Encantar
      var Activar; // botón Activar
      var Guardar; // botón Guardar
      var Terminar;
      var BotonClickEncantar = function BotonClickEncantar() {
        return BotonClick(Encantar);
      };
      var BotonClickActivar = function BotonClickActivar() {
        return BotonClick(Activar);
      };
      var BotonClickGuardar = function BotonClickGuardar() {
        return BotonClick(Guardar);
      };
      var BotonClickTerminar = function BotonClickTerminar() {
        return BotonClick(Terminar);
      };
      var Proyecto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.Selector)('DIV', 'Proyecto', ['border-style--default', 'editar-registro__nombre-proyecto'], result.nombre_proyecto, '', '', result.codigo_proyecto);

      // Añadiendo Evento click a [Proyecto]
      Proyecto.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$import, SeleccionarProyecto;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7327));
            case 2:
              _yield$import = _context2.sent;
              SeleccionarProyecto = _yield$import.SeleccionarProyecto;
              _context2.next = 6;
              return SeleccionarProyecto(ToggleIdiomaArreglo);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      })));

      // ponemos Mutation Observer a Proyecto
      var ObserverProyecto = new MutationObserver( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var campo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              ProyectoCodigoChanged = Proyecto.dataset.codigo != ProyectoCodigoOld;
              if (!(Proyecto.dataset.codigo != ProyectoCodigoUltimo)) {
                _context3.next = 5;
                break;
              }
              ProyectoCodigoUltimo = Proyecto.dataset.codigo;
              _context3.next = 5;
              return GetTabsRegistro(Dialogo, Proyecto.dataset.codigo, TabDisplaySubclase.dataset.codigo, TipoRegistro, IDRegistro);
            case 5:
              // ProyectoCodigoValid = ProyectoCodigoChanged && Proyecto.dataset.codigo > 0; // 0 = 'ACTIVIDADES O GASTOS PARA TRASLADAR'
              ProyectoCodigoValid = Proyecto.dataset.codigo > 0; // 0 = 'ACTIVIDADES O GASTOS PARA TRASLADAR'
              ToggleIdiomaSeleccion = Proyecto.dataset.ordinal_idioma;
              Idioma.dataset.value = ToggleIdiomaArreglo[ToggleIdiomaSeleccion];
              Idioma.textContent = ToggleIdiomaArreglo[ToggleIdiomaSeleccion];
              // if (!DescripcionChanged && TextosPlantillaArreglo.length > 0) {
              if (_plantillas__WEBPACK_IMPORTED_MODULE_5__.TextosPlantillaArreglo.length > 0) {
                Descripcion.innerHTML = _plantillas__WEBPACK_IMPORTED_MODULE_5__.TextosPlantillaArreglo[ToggleIdiomaSeleccion];
                campo = document.querySelector('.campo');
                if (campo) campo.addEventListener('click', function (e) {
                  return (0,_plantillas__WEBPACK_IMPORTED_MODULE_5__.selectText)(e.target.id);
                });
              }
              Idioma.classList.add('idioma-proyecto');
              ValidarBotones();
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      })));
      ObserverProyecto.observe(Proyecto, {
        attributes: true,
        attributeFilter: ['data-codigo']
      });

      // Insertando [Proyecto] a [DatosRegistro]
      DatosRegistro.insertAdjacentElement('beforeend', Proyecto);

      // Contenedor de Fecha y tiempo
      var ContenedorFechaCantidad = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'c-FechaCantidad', ['c-ancho-completo']);
      // Insertando [ContenedorFechaCantidad] a [DatosRegistro]
      DatosRegistro.insertAdjacentElement('beforeend', ContenedorFechaCantidad);
      var ContenedorFecha = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'c-Fecha', ['contenedorCheck', 'fecha-por-dia']);
      // Insertando [ContenedorFechaCantidad] a [DatosRegistro]
      ContenedorFechaCantidad.insertAdjacentElement('beforeend', ContenedorFecha);
      // Fecha
      var Fecha = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.inputElement)('TEXT', 'fechaPreconcepto', ['ancho--default', 'border-style--default', 'c-alto-completo'], null, 'true');
      //[x]

      if (false) {}

      // Insertando [Fecha] a [ContenedorFechaCantidad]
      ContenedorFecha.insertAdjacentElement('beforeend', Fecha);
      // ContenedorFecha.insertAdjacentElement('beforeend', CreateElement('DIV', null, ['transition']));

      var calendario = new air_datepicker__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A('#fechaPreconcepto', _datepicker_options__WEBPACK_IMPORTED_MODULE_3__.datepickerOptions);
      calendario.selectDate((0,date_fns__WEBPACK_IMPORTED_MODULE_14__/* .parse */ .qg)(result.fecha, 'yyyy-MM-dd', new Date()));
      Fecha.setAttribute('data-value', result.fecha);
      var cambioFecha = 0;
      if (Fecha.dataset.value !== result.fecha_hoy) {
        Fecha.classList.add('titilante');
      }
      var FechaHoyAyer = function FechaHoyAyer() {
        var fechaInput = document.querySelector('#fechaPreconcepto');
        var fecha = fechaInput.dataset.value;
        if (fecha === result.fecha_hoy) {
          fechaInput.value = result.fecha_hoy_txt;
        } else if (fecha === result.fecha_ayer) {
          fechaInput.value = result.fecha_ayer_txt;
        } else {
          fechaInput.value = fecha;
        }
      };
      FechaHoyAyer();

      // ponemos Mutation Observer a Fecha
      var ObserverFecha = new MutationObserver(function () {
        console.log("".concat(document.getElementById('air-datepicker-global-container').innerHTML));
        FechaChanged = Fecha.dataset.value != FechaOld;
        cambioFecha = 1;
        ValidarBotones();
        FechaHoyAyer();
      });
      ObserverFecha.observe(Fecha, {
        attributes: true,
        attributeFilter: ['data-value']
      });

      // Contenedor Cantidad
      var ContenedorCantidad = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'c-Cantidad', ['cont-cantidad']);
      // Insertando [ContenedorCantidad] a [ContenedorFechaCantidad]
      ContenedorFechaCantidad.insertAdjacentElement('beforeend', ContenedorCantidad);

      // Moneda
      var Moneda = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'toggle-moneda', ['ancho--default', 'border-style--default', 'toggle-moneda']);
      if (TipoRegistro == 2) {
        var ToggleMonedaArreglo = result.moneda_arreglo;
        var ToggleMonedaSeleccion = result.moneda_default;
        ContenedorCantidad.insertAdjacentElement('beforeend', Moneda);
        document.getElementById('toggle-moneda').textContent = ToggleMonedaArreglo[ToggleMonedaSeleccion];
        document.getElementById('toggle-moneda').addEventListener('click', function () {
          ToggleMonedaSeleccion++;
          ToggleMonedaSeleccion = ToggleMonedaSeleccion % ToggleMonedaArreglo.length;
          document.getElementById('toggle-moneda').textContent = ToggleMonedaArreglo[ToggleMonedaSeleccion];
        });
        // ponemos Mutation Observer a Moneda
        var ObserverMoneda = new MutationObserver(function () {
          MonedaChanged = ToggleMonedaSeleccion != MonedaOld;
          ValidarBotones();
        });
        ObserverMoneda.observe(Moneda, {
          childList: true
        });
      }
      var Cantidad; // esperando asignación dependiendo del tipo de registro

      // Tipo 1 = Actividad
      // Tipo 2 = Gastos
      // Tipo 3 = Item

      if (TipoRegistro == 1) {
        Cantidad = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.inputElement)('TEXT', 'cantidad', ['ancho--default', 'border-style--default', 'preconcepto__cantidad'], result.cantidad, null, null, 'HH:MM');
        ContenedorCantidad.insertAdjacentElement('beforeend', Cantidad);
        (0,_utils_mascaraInput__WEBPACK_IMPORTED_MODULE_15__.aplicarMascaraHora)('cantidad');
      }
      if (TipoRegistro == 2) {
        Cantidad = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.inputElement)('TEXT', 'cantidad', ['ancho--default', 'border-style--default', 'preconcepto__cantidad'], result.cantidad == '0.00' ? '' : result.cantidad, null, 13, 'Valor');
        ContenedorCantidad.insertAdjacentElement('beforeend', Cantidad);
        (function () {
          return new (autonumeric__WEBPACK_IMPORTED_MODULE_8___default())('#cantidad', {
            selectOnFocus: false
          });
        })();
      }
      if (TipoRegistro == 3) {
        Cantidad = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.inputElement)('TEXT', 'cantidad', ['ancho--default', 'border-style--default', 'preconcepto__cantidad'], result.cantidad == '0' ? '' : result.cantidad, null, 5, 'Cantidad');
        ContenedorCantidad.insertAdjacentElement('beforeend', Cantidad);
        (function () {
          return new (autonumeric__WEBPACK_IMPORTED_MODULE_8___default())('#cantidad', ['integerPos', {
            selectOnFocus: false
          }]);
        })();
      }
      Cantidad.addEventListener('keyup', function (event) {
        event.target.dataset.value = event.target.value;
      });

      // ponemos Mutation Observer a Cantidad
      var ObserverCantidad = new MutationObserver(function () {
        CantidadChanged = Cantidad.dataset.value != CantidadOld;
        if (Cantidad.dataset.value) {
          CantidadValid = Cantidad.dataset.value.match(/[1-9]/) && Cantidad.dataset.value.match(/[1-9]/).length > 0; // contiene dígitos entre 1 y 9;
        }
        ValidarBotones();
      });
      ObserverCantidad.observe(Cantidad, {
        attributes: true,
        attributeFilter: ['data-value']
      });

      // Contenedor Descripcion + toggle idioma + plantillas + corrección ortografica
      var ContenedorDescripcion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'ContenedorDescripcion', ['contenedor-descripcion']);

      // Insertando a [DatosRegistro]
      DatosRegistro.insertAdjacentElement('beforeend', ContenedorDescripcion);

      // Descripción
      var Descripcion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'descripcion', ['border-style--default', 'contenedor-descripcion__descripcion'], result.descripcion ? result.descripcion : null, null, 'autofocus', null, null, true, false);
      // Insertando a [ContenedorDescripcion]
      ContenedorDescripcion.insertAdjacentElement('beforeend', Descripcion);
      // ponemos Mutation Observer a Descripcion
      var ObserverDescripcion = new MutationObserver(function () {
        DescripcionChanged = Descripcion.textContent.trim() != DescripcionOld;
        DescripcionValid = Descripcion.textContent.trim().length >= LongitudMinima && !Descripcion.textContent.includes('_____'); // longitud mínima y campos por llenar
        ValidarBotones();
      });
      ObserverDescripcion.observe(Descripcion, {
        childList: true,
        characterData: true,
        subtree: true
      });
      var Herramientas = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', null, ['contenedor-descripcion__herramientas', ['herramientas-descripcion']]);
      // Insertando a [ContenedorDescripcion]
      ContenedorDescripcion.insertAdjacentElement('beforeend', Herramientas);
      var Idioma = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'Idioma', ['herramientas-descripcion__opcion']);
      // Insertando a [ContenedorDescripcion]
      Herramientas.insertAdjacentElement('beforeend', Idioma);
      var ToggleIdiomaArreglo = result.idioma_arreglo;
      ToggleIdiomaSeleccion = result.idioma_default;
      Proyecto.dataset.ordinal_idioma = result.idioma_default;
      //let IdiomaDefaultOld =  result.idioma_default;
      Idioma.dataset.value = ToggleIdiomaArreglo[ToggleIdiomaSeleccion];
      Idioma.textContent = ToggleIdiomaArreglo[ToggleIdiomaSeleccion];
      if (Idioma.dataset.value == ToggleIdiomaArreglo[ToggleIdiomaSeleccion]) {
        Idioma.classList.add('idioma-proyecto');
      }
      Idioma.addEventListener('click', function () {
        ToggleIdiomaSeleccion++;
        ToggleIdiomaSeleccion = ToggleIdiomaSeleccion % ToggleIdiomaArreglo.length;
        Idioma.dataset.value = ToggleIdiomaArreglo[ToggleIdiomaSeleccion];
        Idioma.textContent = ToggleIdiomaArreglo[ToggleIdiomaSeleccion];
        // if (!DescripcionChanged && TextosPlantillaArreglo.length > 0) {
        if (_plantillas__WEBPACK_IMPORTED_MODULE_5__.TextosPlantillaArreglo.length > 0) {
          Descripcion.innerHTML = _plantillas__WEBPACK_IMPORTED_MODULE_5__.TextosPlantillaArreglo[ToggleIdiomaSeleccion];
          document.querySelector('.campo').addEventListener('click', function (e) {
            return (0,_plantillas__WEBPACK_IMPORTED_MODULE_5__.selectText)(e.target.id);
          });
          // DescripcionOld = Descripcion.textContent.trim();
        }
        if (Idioma.dataset.value == ToggleIdiomaArreglo[Proyecto.dataset.ordinal_idioma]) {
          Idioma.classList.add('idioma-proyecto');
        } else {
          Idioma.classList.remove('idioma-proyecto');
        }
      });
      var Plantillas = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'Plantilla', ['herramientas-descripcion__opcion'], null, '', '', '');
      // Plantillas.insertAdjacentElement('beforeend', CreateElement('IMG', null, null, null, null, null, null, '/img/plantilla.svg'));
      Plantillas.innerHTML = '<svg class="datos-registro__botones_button_svg" viewBox="0 0 180 216" style="transform: scale(1.3);"><use xlink:href="./img/sprite.svg#btn-plantilla"></use></svg>';
      Plantillas.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _yield$import2, Plantillas;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7049));
            case 2:
              _yield$import2 = _context4.sent;
              Plantillas = _yield$import2.Plantillas;
              Plantillas(Dialogo, result.plantilla_grupos, ToggleIdiomaSeleccion);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      })));

      // Insertando a [Herramientas]
      Herramientas.insertAdjacentElement('beforeend', Plantillas);
      var Spelling = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', null, ['herramientas-descripcion__opcion']);
      //Spelling.insertAdjacentElement('beforeend', CreateElement('IMG', null, null, null, null, null, null, '/img/spelling.svg'));
      Spelling.innerHTML = '<svg class="datos-registro__botones_button_svg" viewBox="0 0 180 216" style="transform: scale(1.3);"><use xlink:href="./img/sprite.svg#btn-spelling"></use></svg>';

      // Insertando a [Herramientas]
      Herramientas.insertAdjacentElement('beforeend', Spelling);
      Spelling.addEventListener('click', function () {
        if (Descripcion.textContent.trim().length > 0) {
          var IdiomaSeleccionado = Idioma.textContent.toLowerCase() == 'en' ? 'en-US' : Idioma.textContent.toLowerCase();
          var TextoRevisar = Descripcion.textContent.trim();
          var url = 'https://languagetool.org/api/v2/check';
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Origin: 'https://kiux.app'
            },
            body: new URLSearchParams({
              text: TextoRevisar,
              language: IdiomaSeleccionado // la api solo acepta los parametros con este formato
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log('Respuesta de la API:', data);
            var hallazgo = data.matches;
            var ResetStyleDescripcion = function ResetStyleDescripcion() {
              setTimeout(function () {
                Descripcion.style.border = '0.0625rem solid #dbdbdb';
                Descripcion.style.background = '#fefefe';
              }, 2500);
            };
            if (hallazgo.length === 0) {
              clearTimeout(ResetStyleDescripcion);
              Descripcion.style.border = '0.0625rem double #75e3b8';
              Descripcion.style.background = '#d1f5e7';
              ResetStyleDescripcion();
            } else {
              clearTimeout(ResetStyleDescripcion);
              Descripcion.style.border = '0.0625rem double #e39d93';
              Descripcion.style.background = '#f5dedb';
              ResetStyleDescripcion();
            }
            for (var i = hallazgo.length - 1; i >= 0; i--) {
              var tipoHallazgo = hallazgo[i].rule.issueType,
                textoAntes = TextoRevisar.substr(0, hallazgo[i].offset),
                textoResaltar = TextoRevisar.substr(hallazgo[i].offset, hallazgo[i].length),
                N = hallazgo[i].offset + hallazgo[i].length,
                textoDespues = TextoRevisar.substr(N, TextoRevisar.length - N),
                id = 'hallazgo-' + i;
              TextoRevisar = textoAntes + "<span class='issueType-".concat(tipoHallazgo, "--line issueType' id='").concat(id, "'>").concat(textoResaltar, "</span>") + textoDespues;
            }
            Descripcion.innerHTML = TextoRevisar;
            var detectIssue = function detectIssue(e) {
              Descripcion.setAttribute('contenteditable', false);
              var element = e;
              var id = e.id;
              var N = id.substr(9, id.length - 8);
              var mensaje = hallazgo[N].message;
              var tipoDeHallazgo = hallazgo[N].rule.issueType;
              var issueTypeMensaje = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'issueTypeMensaje', ['issueType-mensaje']);
              Descripcion.insertAdjacentElement('beforeend', issueTypeMensaje);
              var c_IssueTypeMensaje = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'c-IssueTypeMensaje', ['c-issueType-mensaje', "issueType-".concat(tipoDeHallazgo)]);
              issueTypeMensaje.insertAdjacentElement('beforeend', c_IssueTypeMensaje);
              c_IssueTypeMensaje.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'issueTypeTitulo', ['issueType-titulo'], mensaje));
              c_IssueTypeMensaje.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('UL', 'issueTypeLista', ["issueType-lista"]));
              var reemplazo = hallazgo[N].replacements;
              for (var _i = 0; _i < reemplazo.length; _i++) {
                var elReemplazo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('LI', _i, ["issueType-".concat(tipoDeHallazgo, "--item")], reemplazo[_i].value);
                elReemplazo.addEventListener('click', function (e) {
                  document.getElementById(id).outerHTML = e.target.textContent;
                  issueTypeMensaje.remove();
                  Descripcion.setAttribute('contenteditable', true);
                });
                document.getElementById('issueTypeLista').insertAdjacentElement('beforeend', elReemplazo);
              }
              issueTypeMensaje.addEventListener('click', function (e) {
                if (tipoDeHallazgo == 'inconsistency') {
                  element.classList.remove('issueType-inconsistency--line');
                  element.classList.remove('issueType');
                  element.removeEventListener('click', myClosure);
                  e.target.remove();
                } else {
                  e.target.remove();
                }
                Descripcion.setAttribute('contenteditable', true);
              });
            };
            function myClosure() {
              detectIssue(this);
            }
            (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(document.querySelectorAll('.issueType')).forEach(function (issue) {
              issue.addEventListener('click', myClosure);
            });
          })["catch"](function (error) {
            console.error('Error al realizar la solicitud:', error);
          });
        }
      });
      // #region Adjuntar Archivo
      //NOTE: En este clip se agregara la captura de imagen momentaneamente
      var Clip = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'Plantilla', ['herramientas-descripcion__opcion'], null, '', '', '');
      //Clip.insertAdjacentElement('beforeend', CreateElement('IMG', null, null, null, null, null, null, '/img/clip.svg'));
      Clip.innerHTML = '<svg class="datos-registro__botones_button_svg" viewBox="0 0 180 216" style="transform: scale(1.3);"><use xlink:href="./img/sprite.svg#btn-clip"></use></svg>';

      // Clip.addEventListener('click', async () => {
      //   const {AdjuntarArchivos} = await import('./adjuntar-archivos');
      //   AdjuntarArchivos(Dialogo);
      // });

      //INCOMPLETE: Mientras no se complete el back-end para controlar los archivos este boton estara deshabilitado.

      // Insertando a [Herramientas]
      Herramientas.insertAdjacentElement('beforeend', Clip);

      // Tabs - construcción dinámica de las Pestañas
      var ContenedorTabs = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'contenedor-tabs');
      var Tabs = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'tabs');
      var TabDisplays = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'tab-displays');
      // forEach para construir la estructura
      result.tabs.forEach(function (element, i) {
        var Tab = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-".concat(element.id_tab), ['tab']);
        var TabTexto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-".concat(element.id_tab, "-texto"));
        TabTexto.textContent = element.caption;
        var TabIcono = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-".concat(element.id_tab, "-icono"));
        Tab.insertAdjacentElement('beforeend', TabTexto);
        Tab.insertAdjacentElement('beforeend', TabIcono);
        Tabs.insertAdjacentElement('beforeend', Tab);
        var TabDisplay = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', "tab-display-".concat(element.id_tab), ['tab-display']);
        if (element.enabled) TabDisplay.classList.add('enabled');
        TabDisplay.dataset.id_tab = element.id_tab;
        TabDisplay.textContent = element.title_vacio;
        TabDisplay.title = element.title_vacio;
        // Opción Activa
        if (element.opcion_activa) {
          var _element$opcion_activ = element.opcion_activa,
            id_grupo = _element$opcion_activ.id_grupo,
            nombre_opcion = _element$opcion_activ.nombre_opcion,
            orden = _element$opcion_activ.orden,
            id_opcion = _element$opcion_activ.id_opcion;
          TabDisplay.dataset.clase = id_grupo;
          TabDisplay.dataset.orden = orden;
          TabDisplay.dataset.codigo_old = id_opcion;
          TabDisplay.dataset.codigo = id_opcion;
          TabDisplay.dataset.changed = false;
          TabDisplay.textContent = "".concat(id_grupo, " - ").concat(nombre_opcion);
          TabDisplay.title = element.title_lleno;
        }
        // poner indicador de campo lleno o vacío
        if (TabDisplay.hasAttribute('data-codigo') && TabDisplay.dataset.codigo != 'undefined') {
          TabIcono.textContent = ''; // campo lleno
          TabIcono.style.color = '#0D9900'; // verde
          TabIcono.style.fontWeight = 600;
        } else {
          TabIcono.textContent = '⦁'; // campo vacío ⦁●◉⦿
          TabIcono.style.color = '#C92F2F'; // rojo
          TabIcono.style.fontWeight = 600;
        }
        // asignar evento 'click' al TabDisplay
        if (TabDisplay.classList.contains('enabled')) TabDisplay.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
          var _yield$import3, MostrarDialogo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __webpack_require__.e(/* import() */ 6109).then(__webpack_require__.bind(__webpack_require__, 6109));
              case 2:
                _yield$import3 = _context5.sent;
                MostrarDialogo = _yield$import3.MostrarDialogo;
                MostrarDialogo(Dialogo, TabDisplay, element, true);
              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        })));
        TabDisplays.insertAdjacentElement('beforeend', TabDisplay);
      });
      // agregar elementos al DOM
      ContenedorTabs.insertAdjacentElement('beforeend', Tabs);
      ContenedorTabs.insertAdjacentElement('beforeend', TabDisplays);
      DatosRegistro.insertAdjacentElement('beforeend', ContenedorTabs);
      // arreglos de tab's y tab_display's
      var tab = document.querySelectorAll('.tab');
      var tab_display = document.querySelectorAll('.tab-display');
      // seleccionar la primera pestaña
      if (tab.length) {
        tab[0].classList.add('seleccionado');
        tab_display[0].classList.add('seleccionado');
      }
      // asignar evento 'click' a los tab's
      tab.forEach(function (element, i) {
        tab[i].addEventListener('click', function () {
          tab.forEach(function (element, j) {
            tab[j].classList.remove('seleccionado');
            tab_display[j].classList.remove('seleccionado');
          });
          tab[i].classList.add('seleccionado');
          tab_display[i].classList.add('seleccionado');
        });
      });
      // ponemos Mutation Observer a TabDisplays
      var ObserverTabDisplays = new MutationObserver(function () {
        ValidarBotones();
      });
      ObserverTabDisplays.observe(TabDisplays, {
        attributes: true,
        attributeFilter: ['data-codigo'],
        subtree: true
      });
      // declaramos Mutation Observer para TabDisplaySubclase
      // estará vinculado SOLO al TabDisplay de "SUBCLASE" (tab-display-1)
      TabDisplaySubclase = document.getElementById('tab-display-1');
      var ObserverTabDisplaySubclase = new MutationObserver( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return GetTabsRegistro(Dialogo, Proyecto.dataset.codigo, TabDisplaySubclase.dataset.codigo, TipoRegistro, IDRegistro);
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      })));
      ObserverTabDisplaySubclase.observe(TabDisplaySubclase, {
        attributes: true,
        attributeFilter: ['data-codigo'],
        subtree: true
      });
      var ContenedorBotones = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('DIV', 'c-Botones', ['datos-registro__botones', 'botones']);

      // Insertando a [DatosRegistro]
      DatosRegistro.insertAdjacentElement('beforeend', ContenedorBotones);

      // botón Encantar
      Encantar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'Encantar', ['modal-button', 'modal-button--disabled', 'modal-button--image']);
      Encantar.innerHTML = '<svg class="datos-registro__botones_button_svg" viewBox="-10 -10 200 200"><use xlink:href="./img/sprite.svg#encantar-disabled"></use></svg>';
      ContenedorBotones.insertAdjacentElement('beforeend', Encantar); // Insertando a [ContenedorBotones]

      // botón Activar
      Activar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'Activar', ['modal-button', 'modal-button--disabled', 'modal-button--image']);
      Activar.innerHTML = '<svg class="datos-registro__botones_button_svg" viewBox="-10 -10 200 200"><use xlink:href="./img/sprite.svg#activar-disabled"></use></svg>';
      ContenedorBotones.insertAdjacentElement('beforeend', Activar); // Insertando a [ContenedorBotones]

      // botón Guardar
      Guardar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'Guardar', ['modal-button', 'modal-button--disabled', 'modal-button--image']);
      Guardar.innerHTML = '<svg class="datos-registro__botones_button_svg" viewBox="-10 -10 200 200"><use xlink:href="./img/sprite.svg#guardar-disabled"></use></svg>';
      ContenedorBotones.insertAdjacentElement('beforeend', Guardar); // Insertando a [ContenedorBotones]

      // botón Terminar
      Terminar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_11__.CreateElement)('BUTTON', 'Terminar', ['modal-button', 'modal-button--disabled', 'modal-button--image']);
      Terminar.innerHTML = '<svg class="datos-registro__botones_button_svg" viewBox="-10 -10 200 200"><use xlink:href="./img/sprite.svg#terminar-disabled"></use></svg>';
      ContenedorBotones.insertAdjacentElement('beforeend', Terminar); // Insertando a [ContenedorBotones]

      // Habilitamos ciertos botones según corresponda - no todos
      if (BotonesDisponibles.includes('e')) {
        HabilitarBoton(Encantar);
      }
      if (BotonesDisponibles.includes('a')) {
        HabilitarBoton(Activar);
      }
      // Hacemos una validación inicial de los botones
      ValidarBotones();
      localStorage.setItem('Token', result.new_token);
      // Reiniciar TextosPlantillaArreglo
      (0,_plantillas__WEBPACK_IMPORTED_MODULE_5__.ReiniciarTextosPlantillaArreglo)();
    } else {
      new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_9__.MostrarMensajeError(Dialogo, result.result_message, 'GetDatosRegistro');
    }
  })["catch"](function (error) {
    return console.log(error);
  });
  Dialogo.insertAdjacentElement('beforeend', DatosRegistro);
  Background.insertAdjacentElement('beforeend', Dialogo);
  document.getElementById('main').insertAdjacentElement('beforeend', Background);
  document.getElementById('main').classList.add('ocultar-scroll');
  if (document.getElementById('background') != null || document.getElementById('background') != undefined) {
    // Mousedown - Click en el fondo para salir.
    document.getElementById('background').addEventListener('mousedown', CerrarPreconcepto, false);
    // Keydown - Tecla [ESC] para salir.
    document.addEventListener('keydown', RemoverPreconcepto, false);
  }
}

/***/ }),

/***/ 7049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarPlantillas: () => (/* binding */ CerrarPlantillas),
/* harmony export */   Plantillas: () => (/* binding */ Plantillas),
/* harmony export */   ReiniciarTextosPlantillaArreglo: () => (/* binding */ ReiniciarTextosPlantillaArreglo),
/* harmony export */   RemoverPlantillas: () => (/* binding */ RemoverPlantillas),
/* harmony export */   TextosPlantillaArreglo: () => (/* binding */ TextosPlantillaArreglo),
/* harmony export */   selectText: () => (/* binding */ selectText)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2407);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2182);
/* harmony import */ var _datos_registro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9158);
/* harmony import */ var _cerrar_sesion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8662);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7433);









// Cerrar ventana emergente [cerrarSeleccionarProyecto] al hacer click por fuera de la ventana
function CerrarPlantillas(event) {
  if (event.target.id == 'background' && document.getElementById('Plantillas')) {
    document.getElementById('Plantillas').remove();
  }
}

// Cerrar ventana emergente [removerSeleccionarProyecto] con la tecla de escape [ESC]
function RemoverPlantillas(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('Plantillas') != null || document.getElementById('Plantillas') != undefined) {
      document.getElementById('Plantillas').remove();
      // document.addEventListener('keydown', removerEditarRegistro, false);
      document.addEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_1__.RemoverPreconcepto, false);
    }
  }
}
function selectText(node) {
  node = document.getElementById(node);
  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var _range = document.createRange();
    _range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(_range);
  } else {
    console.warn('Could not select text in node: Unsupported browser.');
  }
}
var TextosPlantillaArreglo = [];
function ReiniciarTextosPlantillaArreglo() {
  TextosPlantillaArreglo = [];
}
function Plantillas(Dialogo, GruposPlantillas, ToggleIdiomaSeleccion) {
  var OpcionSeleccionada = document.getElementById('Plantilla');
  var GrupoActivo = OpcionSeleccionada.dataset && OpcionSeleccionada.dataset.clase;
  var OpcionActiva = OpcionSeleccionada.dataset && OpcionSeleccionada.dataset.codigo;
  var Orden = OpcionSeleccionada.dataset && OpcionSeleccionada.dataset.orden;
  var Plantillas = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'Plantillas', ['seleccionar-proyecto']);
  Dialogo.insertAdjacentElement('beforeend', Plantillas);
  Plantillas.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'contenedorPlantillas', ['contenedor-plantillas']));
  var ResultadoArray = [];
  var GrupoColorRGB = [];
  GruposPlantillas.forEach(function (grupo) {
    grupo.opciones.forEach(function (opt) {
      return ResultadoArray.push(opt);
    });
    GrupoColorRGB.push({
      color_rgb: grupo.color_rgb,
      id_grupo: grupo.id_grupo,
      nombre_grupo: grupo.nombre_grupo
    });
    document.getElementById('contenedorPlantillas').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Plantillas-".concat(grupo.id_grupo)));
    // Título del grupo
    document.getElementById("Plantillas-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "".concat(grupo.id_grupo, "-tituloGrupo"), ['clase__titulo'], "".concat(grupo.id_grupo, " - ").concat(grupo.nombre_grupo), null, null, null, null, null, null, "".concat(grupo.id_grupo)));
    // Color del grupo
    document.getElementById("Plantillas-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(grupo.color_rgb));
    // Color título del grupo
    document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(grupo.color_rgb));
    document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.color = '#fefefe';
    var Opciones = function Opciones() {
      // Opciones del grupo
      grupo.opciones.forEach(function (opcion) {
        document.getElementById("Opcion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(opcion.id_opcion), OpcionActiva != opcion.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(opcion.nombre_opcion), "".concat(opcion.orden), "".concat(opcion.id_grupo)));
      });
      // Click en Opción.
      document.getElementById("Opcion-".concat(grupo.id_grupo)).addEventListener('click', /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
          var activo, path, result, tab_id_clasificacion, DatosRegistro, TabDisplay, _result$complemento, orden, clase, codigo, item, descripcion;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                activo = event.target;
                path = "datosplantilla/".concat(localStorage.getItem('Token'), "/").concat(activo.id);
                _context.next = 4;
                return (0,_api__WEBPACK_IMPORTED_MODULE_2__.CustomFetch)(path);
              case 4:
                result = _context.sent;
                if (result.result_code == 0) {
                  if (event.target.tagName == 'DIV') {
                    OpcionSeleccionada.dataset.orden = activo.dataset.orden;
                    OpcionSeleccionada.dataset.clase = activo.dataset.clase;
                    OpcionSeleccionada.dataset.codigo = activo.id;
                    TextosPlantillaArreglo = result.arreglo;
                    document.getElementById('descripcion').innerHTML = TextosPlantillaArreglo[ToggleIdiomaSeleccion];
                    console.log('llamado a datosplantilla - ruta 1');
                    localStorage.setItem('Token', result.new_token);

                    //Para que tome todos los espcacios y no solo el primero se utiliza el getElementsByClassName
                    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(document.getElementsByClassName('campo')).forEach(function (el) {
                      if (el) el.addEventListener('click', function (e) {
                        return selectText(e.target.id);
                      });
                    });
                    if (result.complemento) {
                      tab_id_clasificacion = 'tab-display-1'; // TAB_ID = 1 = "CLASIFICACION"
                      DatosRegistro = document.getElementById('DatosRegistro');
                      TabDisplay = document.getElementById(tab_id_clasificacion);
                      _result$complemento = result.complemento, orden = _result$complemento.orden, clase = _result$complemento.clase, codigo = _result$complemento.codigo, item = _result$complemento.item, descripcion = _result$complemento.descripcion;
                      TabDisplay.dataset.orden = orden;
                      TabDisplay.dataset.clase = clase;
                      TabDisplay.dataset.codigo = codigo;
                      DatosRegistro.dataset.item = item;
                      TabDisplay.textContent = descripcion;
                    }
                    Plantillas.remove();
                  }
                } else {
                  if (result.result_code > 1000) {
                    alert("".concat(result.result_message, "\nProceso: Seleccionar Plantilla\nSe cerrar\xE1 la sesi\xF3n."));
                    (0,_cerrar_sesion__WEBPACK_IMPORTED_MODULE_7__.CerrarSesion)();
                  } else {
                    new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_8__.MostrarMensajeError(Dialogo, result.result_message, 'Seleccionar Plantilla');
                  }
                }
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
    };
    var clickOpcion = function clickOpcion() {
      document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).addEventListener('click', function (event) {
        if (event.target.tagName == 'SPAN') {
          // Remueve a la lista adversa del seleccionado.
          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(document.querySelectorAll('.lista-plantillas')).forEach(function (element) {
            if (element.parentElement.id != event.target.parentElement.id) {
              element.previousElementSibling.classList.remove('clase__titulo--activo');
              element.remove();
            }
          });
          if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
            document.getElementById("Plantillas-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-plantillas']));
            document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
            Opciones();
          } else {
            document.getElementById("Opcion-".concat(grupo.id_grupo)).remove();
            document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.remove('clase__titulo--activo');
          }
        }
      });
    };

    // Abrir grupo si se encuentra una opción seleccionada.
    if (GrupoActivo == document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).dataset.value) {
      document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
      if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
        document.getElementById("Plantillas-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-plantillas']));
        Opciones();
      }
      clickOpcion();
    } else {
      clickOpcion();
    }

    // Orden
    if (Orden > 5) {
      if (document.getElementById('contenedorPlantillas') != null) {
        document.getElementById('contenedorPlantillas').scrollTop = (Orden - 5) * 28;
      }
    }
  });

  // Buscar Plantillas.
  document.getElementById('Plantillas').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BuscarPlantillas', ['buscar-plantillas']));
  document.getElementById('BuscarPlantillas').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BuscarPlantillasTexto', ['buscar-plantillas__texto'], null, null, null, null, null, true));

  // Activar el foco en dispositivos mobiles
  if (window.matchMedia('(min-width: 720px)').matches) {
    document.getElementById('BuscarPlantillasTexto').focus();
  }

  // Texto [KeyCode] tecla Enter
  document.getElementById('BuscarPlantillasTexto').addEventListener('keypress', function (event) {
    if (event.keyCode == 13 || event.code == 'Enter') {
      event.preventDefault();
    }
  });
  var Filtro = function Filtro(query) {
    return ResultadoArray.filter(function (el) {
      return el.nombre_opcion.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(query.toLowerCase()) > -1;
    });
  };
  var Opcion = [];
  var ResultadoFiltro = function ResultadoFiltro(Opcion) {
    Opcion.forEach(function (element) {
      GrupoColorRGB.forEach(function (j) {
        if (j.id_grupo != element.id_grupo) {
          return;
        } else {
          if (document.getElementById("Plantillas-".concat(element.id_grupo)) == null || document.getElementById("Plantillas-".concat(element.id_grupo) == undefined)) {
            document.getElementById('contenedorPlantillas').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Plantillas-".concat(element.id_grupo)));
            // Título del grupo
            document.getElementById("Plantillas-".concat(element.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "".concat(element.id_grupo, "-tituloGrupo"), ['clase__titulo'], "".concat(element.id_grupo, " - ").concat(j.nombre_grupo), null, null, null, null, null, null, "".concat(element.id_grupo)));
            // Color del grupo
            document.getElementById("Plantillas-".concat(element.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(j.color_rgb));
            // Color título del grupo
            document.getElementById("".concat(element.id_grupo, "-tituloGrupo")).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(j.color_rgb));
            document.getElementById("".concat(element.id_grupo, "-tituloGrupo")).style.color = '#fefefe';
            if (document.getElementById("Opcion-".concat(element.id_grupo)) == null || document.getElementById("Opcion-".concat(element.id_grupo)) == undefined) {
              document.getElementById("Plantillas-".concat(element.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(element.id_grupo), ['lista-plantillas']));
            }
          }

          // Opciones del grupo
          document.getElementById("Opcion-".concat(element.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(element.id_opcion), OpcionActiva != element.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(element.nombre_opcion), "".concat(element.orden), "".concat(element.id_grupo)));

          // Click en Opción.
          document.getElementById("Opcion-".concat(element.id_grupo)).addEventListener('click', /*#__PURE__*/function () {
            var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(event) {
              var activo, path, result, tab_id_clasificacion, DatosRegistro, TabDisplay, _result$complemento2, orden, clase, codigo, item, descripcion;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    activo = event.target;
                    path = "datosplantilla/".concat(localStorage.getItem('Token'), "/").concat(activo.id);
                    _context2.next = 4;
                    return (0,_api__WEBPACK_IMPORTED_MODULE_2__.CustomFetch)(path);
                  case 4:
                    result = _context2.sent;
                    if (result.result_code == 0) {
                      if (event.target.tagName == 'DIV') {
                        OpcionSeleccionada.dataset.orden = activo.dataset.orden;
                        OpcionSeleccionada.dataset.clase = activo.dataset.clase;
                        OpcionSeleccionada.dataset.codigo = activo.id;
                        TextosPlantillaArreglo = result.arreglo;
                        document.getElementById('descripcion').innerHTML = TextosPlantillaArreglo[ToggleIdiomaSeleccion];
                        console.log('llamado a datosplantilla - ruta 2');
                        localStorage.setItem('Token', result.new_token);
                        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(document.getElementsByClassName('campo')).forEach(function (el) {
                          if (el) el.addEventListener('click', function (e) {
                            return selectText(e.target.id);
                          });
                        });
                        if (result.complemento) {
                          tab_id_clasificacion = 'tab-display-1'; // TAB_ID = 1 = "CLASIFICACION"
                          DatosRegistro = document.getElementById('DatosRegistro');
                          TabDisplay = document.getElementById(tab_id_clasificacion);
                          _result$complemento2 = result.complemento, orden = _result$complemento2.orden, clase = _result$complemento2.clase, codigo = _result$complemento2.codigo, item = _result$complemento2.item, descripcion = _result$complemento2.descripcion;
                          TabDisplay.dataset.orden = orden;
                          TabDisplay.dataset.clase = clase;
                          TabDisplay.dataset.codigo = codigo;
                          DatosRegistro.dataset.item = item;
                          TabDisplay.textContent = descripcion;
                        }
                        Plantillas.remove();
                      }
                    } else {
                      if (result.result_code > 1000) {
                        alert("".concat(result.result_message, "\nProceso: Seleccionar Plantilla\nSe cerrar\xE1 la sesi\xF3n."));
                        (0,_cerrar_sesion__WEBPACK_IMPORTED_MODULE_7__.CerrarSesion)();
                      } else {
                        new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_8__.MostrarMensajeError(Dialogo, result.result_message, 'Seleccionar Plantilla');
                      }
                    }
                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        }
      });
    });
  };
  document.getElementById('BuscarPlantillasTexto').addEventListener('keyup', function (event) {
    var ContenedorPlantillas = document.getElementById('contenedorPlantillas');
    if (document.getElementById('BuscarPlantillasTexto').textContent.trim().length) {
      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(ContenedorPlantillas.children).forEach(function (child) {
        return ContenedorPlantillas.removeChild(child);
      });
      Opcion = Filtro(document.getElementById('BuscarPlantillasTexto').textContent.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
      ResultadoFiltro(Opcion);
      if (Opcion.length == 0) {
        document.getElementById('contenedorPlantillas').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', null, null, 'La búsqueda no arrojó resultados.'));
        document.getElementById('contenedorPlantillas').classList.add('contenedor-plantillas--flex');
      } else {
        document.getElementById('contenedorPlantillas').classList.remove('contenedor-plantillas--flex');
      }
      Opcion = [];
    } else {
      if (ContenedorPlantillas.childNodes[0].tagName == 'SPAN' || Opcion.length == 0) {
        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(ContenedorPlantillas.children).forEach(function (child) {
          return ContenedorPlantillas.removeChild(child);
        });
        document.getElementById('contenedorPlantillas').classList.remove('contenedor-plantillas--flex');
        GruposPlantillas.forEach(function (grupo) {
          document.getElementById('contenedorPlantillas').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Plantillas-".concat(grupo.id_grupo)));
          // Título del grupo
          document.getElementById("Plantillas-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "".concat(grupo.id_grupo, "-tituloGrupo"), ['clase__titulo'], "".concat(grupo.id_grupo, " - ").concat(grupo.nombre_grupo), null, null, null, null, null, null, "".concat(grupo.id_grupo)));
          // Color del grupo
          document.getElementById("Plantillas-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(grupo.color_rgb));
          // Color título del grupo
          document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(grupo.color_rgb));
          document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.color = '#fefefe';
          var Opciones = function Opciones() {
            // Opciones del grupo
            grupo.opciones.forEach(function (opcion) {
              document.getElementById("Opcion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(opcion.id_opcion), OpcionActiva != opcion.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(opcion.nombre_opcion), "".concat(opcion.orden), "".concat(opcion.id_grupo)));
            });
            // Click en Opción.
            document.getElementById("Opcion-".concat(grupo.id_grupo)).addEventListener('click', /*#__PURE__*/function () {
              var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(event) {
                var activo, path, result, tab_id_clasificacion, DatosRegistro, TabDisplay, _result$complemento3, orden, clase, codigo, item, descripcion;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      activo = event.target;
                      path = "datosplantilla/".concat(localStorage.getItem('Token'), "/").concat(activo.id);
                      _context3.next = 4;
                      return (0,_api__WEBPACK_IMPORTED_MODULE_2__.CustomFetch)(path);
                    case 4:
                      result = _context3.sent;
                      if (result.result_code == 0) {
                        if (event.target.tagName == 'DIV') {
                          OpcionSeleccionada.dataset.orden = activo.dataset.orden;
                          OpcionSeleccionada.dataset.clase = activo.dataset.clase;
                          OpcionSeleccionada.dataset.codigo = activo.id;
                          TextosPlantillaArreglo = result.arreglo;
                          document.getElementById('descripcion').innerHTML = TextosPlantillaArreglo[ToggleIdiomaSeleccion];
                          console.log('llamado a datosplantilla - ruta 3');
                          localStorage.setItem('Token', result.new_token);
                          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(document.getElementsByClassName('campo')).forEach(function (el) {
                            if (el) el.addEventListener('click', function (e) {
                              return selectText(e.target.id);
                            });
                          });
                          if (result.complemento) {
                            tab_id_clasificacion = 'tab-display-1'; // TAB_ID = 1 = "CLASIFICACION"
                            DatosRegistro = document.getElementById('DatosRegistro');
                            TabDisplay = document.getElementById(tab_id_clasificacion);
                            _result$complemento3 = result.complemento, orden = _result$complemento3.orden, clase = _result$complemento3.clase, codigo = _result$complemento3.codigo, item = _result$complemento3.item, descripcion = _result$complemento3.descripcion;
                            TabDisplay.dataset.orden = orden;
                            TabDisplay.dataset.clase = clase;
                            TabDisplay.dataset.codigo = codigo;
                            DatosRegistro.dataset.item = item;
                            TabDisplay.textContent = descripcion;
                          }
                          Plantillas.remove();
                        }
                      } else {
                        if (result.result_code > 1000) {
                          alert("".concat(result.result_message, "\nProceso: Seleccionar Plantilla\nSe cerrar\xE1 la sesi\xF3n."));
                          (0,_cerrar_sesion__WEBPACK_IMPORTED_MODULE_7__.CerrarSesion)();
                        } else {
                          new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_8__.MostrarMensajeError(Dialogo, result.result_message, 'Seleccionar Plantilla');
                        }
                      }
                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());
          };
          var clickOpcion = function clickOpcion() {
            document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).addEventListener('click', function (event) {
              if (event.target.tagName == 'SPAN') {
                // Remueve a la lista adversa del seleccionado.
                (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(document.querySelectorAll('.lista-plantillas')).forEach(function (element) {
                  if (element.parentElement.id != event.target.parentElement.id) {
                    element.previousElementSibling.classList.remove('clase__titulo--activo');
                    element.remove();
                  }
                });
                if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
                  document.getElementById("Plantillas-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-plantillas']));
                  document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
                  Opciones();
                } else {
                  document.getElementById("Opcion-".concat(grupo.id_grupo)).remove();
                  document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.remove('clase__titulo--activo');
                }
              }
            });
          };

          // Abrir grupo si se encuentra una opción seleccionada.
          if (GrupoActivo == document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).dataset.value) {
            document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
            if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
              document.getElementById("Plantillas-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-plantillas']));
              Opciones();
            }
            clickOpcion();
          } else {
            clickOpcion();
          }

          // Orden
          if (Orden > 5) {
            if (document.getElementById('contenedorPlantillas') != null) {
              document.getElementById('contenedorPlantillas').scrollTop = (Orden - 5) * 28;
            }
          }
        });
      }
    }
  });
  document.getElementById('BuscarPlantillas').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BuscarPlantillasBoton', ['buscar-plantillas__boton']));
  var BtnBuscarPlantilla = document.getElementById('BuscarPlantillasBoton');
  BtnBuscarPlantilla.innerHTML += "<svg class=\"buscar-plantillas__img\" viewbox=\"0 0 512 512\"><use xlink:href=\"./img/sprite.svg#btn-accion-dialogo-1\"></use></svg>";
  if (document.getElementById('Plantillas') != null || document.getElementById('Plantillas') != undefined) {
    // [removeEventListener] - Detener handler [cerrarEditarRegistro, removerEditarRegistro] mientras esta abierta la ventana SeleccionarProyecto
    document.removeEventListener('mousedown', _datos_registro__WEBPACK_IMPORTED_MODULE_1__.CerrarPreconcepto, false); // mousedown
    // document.removeEventListener('keydown', removerEditarRegistro, false); // keydown
    document.removeEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_1__.RemoverPreconcepto, false); // keydown
    // [addEventListener]
    document.getElementById('background').addEventListener('mousedown', CerrarPlantillas, false); // mousedown
    document.addEventListener('keydown', RemoverPlantillas, false); // keydown
  }
}

/***/ }),

/***/ 7327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarSeleccionarProyecto: () => (/* binding */ CerrarSeleccionarProyecto),
/* harmony export */   RemoverSeleccionarProyecto: () => (/* binding */ RemoverSeleccionarProyecto),
/* harmony export */   SeleccionarProyecto: () => (/* binding */ SeleccionarProyecto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2407);
/* harmony import */ var _datos_registro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9158);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var _utils_MenuPredictor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3534);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7433);




// import { removerEditarRegistro, cerrarEditarRegistro } from './editar-registro';





// Cerrar ventana emergente [cerrarSeleccionarProyecto] al hacer click por fuera de la ventana
function CerrarSeleccionarProyecto(event) {
  if (event.target.id == 'background' && document.getElementById('DlgSeleccion')) {
    document.getElementById('DlgSeleccion').remove();
    if (document.getElementById('BuscarProyectosTexto')) {
      (0,_utils_MenuPredictor__WEBPACK_IMPORTED_MODULE_3__.eliminarDropDown)();
    }
  }
}

// Cerrar ventana emergente [removerSeleccionarProyecto] con la tecla de escape [ESC]
function RemoverSeleccionarProyecto(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('DlgSeleccion') != null || document.getElementById('DlgSeleccion') != undefined) {
      document.getElementById('DlgSeleccion').remove();
      // document.addEventListener('keydown', removerEditarRegistro, false);
      document.addEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_1__.RemoverPreconcepto, false);
      document.getElementById('main').classList.remove('ocultar-scroll');
      if (document.getElementById('BuscarProyectosTexto')) {
        (0,_utils_MenuPredictor__WEBPACK_IMPORTED_MODULE_3__.eliminarDropDown)();
      }
    }
  }
}
function Busqueda() {
  return _Busqueda.apply(this, arguments);
}
function _Busqueda() {
  _Busqueda = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var CriterioDeBusqueda, Path, _yield$GetData, result_code, result_message, proyectos, ancho_maximo_rem, OpcionActiva;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          CriterioDeBusqueda = document.getElementById('BuscarProyectosTexto').textContent.trim();
          Path = "".concat(CriterioDeBusqueda, "/").concat(document.getElementById('Proyecto').dataset.codigo);
          if (!(CriterioDeBusqueda.length > 0)) {
            _context.next = 14;
            break;
          }
          //
          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.querySelectorAll('.listado-proyecto__opcion')).forEach(function (elemento) {
            document.getElementById('ListadoProyectos').removeChild(elemento);
          });
          _context.next = 6;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GetData)('buscarproyectos', Path, 'Busqueda:33');
        case 6:
          _yield$GetData = _context.sent;
          result_code = _yield$GetData.result_code;
          result_message = _yield$GetData.result_message;
          proyectos = _yield$GetData.proyectos;
          ancho_maximo_rem = _yield$GetData.ancho_maximo_rem;
          if (result_code !== 0) {
            new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_6__.MostrarMensajeError(document.getElementById('dialogo'), result_message, 'BuscarProyectos');
          }
          OpcionActiva = document.getElementById('Proyecto').dataset.codigo || null; // Opciones
          if (document.getElementById('ListadoProyectos').childNodes.length == 0) {
            proyectos.forEach(function (opcion) {
              document.getElementById('ListadoProyectos').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.Selector)('DIV', null, OpcionActiva != opcion.codigo_proyecto ? ['listado-proyecto__opcion', "listado-proyecto__opcion--".concat(opcion.estilo)] : ['listado-proyecto__opcion', "listado-proyecto__opcion--".concat(opcion.estilo), 'listado-proyecto__opcion--activa'], opcion.nombre_proyecto, opcion.orden, opcion.estilo, opcion.codigo_proyecto, null, opcion.ordinal_revisor, opcion.ordinal_idioma));
            });
            // Agregando el ancho maximo a los casos.
            (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.querySelectorAll('.listado-proyecto__opcion')).forEach(function (elemento) {
              elemento.style.width = "".concat(ancho_maximo_rem, "rem");
            });
          }
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _Busqueda.apply(this, arguments);
}
function SeleccionarProyecto() {
  return _SeleccionarProyecto.apply(this, arguments);
}
function _SeleccionarProyecto() {
  _SeleccionarProyecto = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var Resultado, OpcionActiva, Orden;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          document.getElementById('dialogo').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('SECTION', 'DlgSeleccion', ['seleccionar-proyecto']));
          // Listado proyectos
          document.getElementById('DlgSeleccion').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'ListadoProyectos', ['listado-proyecto']));
          _context2.next = 4;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GetData)('buscarproyectos', "/".concat(document.getElementById('Proyecto').dataset.codigo), 'SeleccionarProyecto:70', true);
        case 4:
          Resultado = _context2.sent;
          if (!(Resultado.result_code !== 0)) {
            _context2.next = 8;
            break;
          }
          new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_6__.MostrarMensajeError(document.getElementById('dialogo'), Resultado.result_message, 'BuscarProyectos');
          return _context2.abrupt("return");
        case 8:
          OpcionActiva = document.getElementById('Proyecto').dataset.codigo || null;
          Orden = null; // Opciones
          Resultado.proyectos.forEach(function (opcion) {
            document.getElementById('ListadoProyectos').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.Selector)('DIV', null, OpcionActiva != opcion.codigo_proyecto ? ['listado-proyecto__opcion', "listado-proyecto__opcion--".concat(opcion.estilo)] : ['listado-proyecto__opcion', "listado-proyecto__opcion--".concat(opcion.estilo), 'listado-proyecto__opcion--activa'], opcion.nombre_proyecto, opcion.orden, opcion.estilo, opcion.codigo_proyecto, null, opcion.ordinal_revisor, opcion.ordinal_idioma));
          });
          // Agregando el ancho maximo a los casos.
          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.querySelectorAll('.listado-proyecto__opcion')).forEach(function (elemento) {
            elemento.style.width = "".concat(Resultado.ancho_maximo_rem, "rem");
          });
          // Click en un proyecto clase 'disponible' o 'trasladar'
          document.getElementById('ListadoProyectos').addEventListener('click', function (event) {
            if (event.target.dataset.clase == 'disponible' || event.target.dataset.clase == 'trasladar') {
              document.getElementById('Proyecto').textContent = event.target.textContent;
              document.getElementById('Proyecto').dataset.orden = event.target.dataset.orden;
              document.getElementById('Proyecto').dataset.clase = event.target.dataset.clase;
              document.getElementById('Proyecto').dataset.codigo = event.target.dataset.codigo;
              document.getElementById('Proyecto').dataset.ordinal_revisor = event.target.dataset.ordinal_revisor;
              document.getElementById('Proyecto').dataset.ordinal_idioma = event.target.dataset.ordinal_idioma;
              if (document.getElementById('DlgSeleccion')) {
                document.getElementById('DlgSeleccion').remove();
              }
            }
          });
          // Ajustar el scroll para mostrar la opción activa.
          if (Resultado.proyecto_activo != null || Resultado.proyecto_activo != undefined) {
            if (OpcionActiva == Resultado.proyecto_activo.codigo_proyecto) {
              Orden = Resultado.proyecto_activo.orden;
              if (Orden > 9) {
                document.getElementById('ListadoProyectos').scrollTop = (Orden - 9) * 56;
              }
            }
          }
          localStorage.setItem('Token', Resultado.new_token);

          // Buscar Proyectos.
          document.getElementById('DlgSeleccion').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'BuscarProyectos', ['buscar-proyectos']));
          document.getElementById('BuscarProyectos').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'BuscarProyectosTexto', ['buscar-proyectos__texto'], null, null, null, null, null, true));
          document.getElementById('BuscarProyectosTexto').focus();
          (0,_utils_MenuPredictor__WEBPACK_IMPORTED_MODULE_3__.menuPredictor)('BuscarProyectosTexto');
          // Texto [KeyCode] tecla Enter
          document.getElementById('BuscarProyectosTexto').addEventListener('keypress', function (event) {
            if (event.keyCode == 13) {
              event.preventDefault();
              Busqueda();
            }
          });
          document.getElementById('BuscarProyectos').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_7__.CreateElement)('DIV', 'BuscarProyectosBoton', ['buscar-proyectos__boton']));
          document.getElementById('BuscarProyectosBoton').innerHTML += "<svg class=\"buscar-proyectos__img\" viewbox=\"0 0 512 512\"><use xlink:href=\"./img/sprite.svg#search\"></use></svg>";
          // Botón Busqueda.
          document.getElementById('BuscarProyectosBoton').addEventListener('click', function () {
            Busqueda();
          });
          if (document.getElementById('DlgSeleccion') != null || document.getElementById('DlgSeleccion') != undefined) {
            // [removeEventListener] - Detener handler [cerrarEditarRegistro, removerEditarRegistro] mientras esta abierta la ventana SeleccionarProyecto
            // document.removeEventListener('mousedown', cerrarEditarRegistro, false); // mousedown
            document.removeEventListener('mousedown', _datos_registro__WEBPACK_IMPORTED_MODULE_1__.CerrarPreconcepto, false); // mousedown
            // document.removeEventListener('keydown', removerEditarRegistro, false); // keydown
            document.removeEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_1__.RemoverPreconcepto, false); // keydown
            // [addEventListener]
            document.getElementById('background').addEventListener('mousedown', CerrarSeleccionarProyecto, false); // mousedown
            document.addEventListener('keydown', RemoverSeleccionarProyecto, false); // keydown
          }
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _SeleccionarProyecto.apply(this, arguments);
}

/***/ }),

/***/ 3534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eliminarDropDown: () => (/* binding */ eliminarDropDown),
/* harmony export */   menuPredictor: () => (/* binding */ menuPredictor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5458);

var TidInput = '';
var previousText = '';
var collection = JSON.parse(localStorage.getItem('ListaPalabras'));
function menuPredictor(idInput) {
  TidInput = idInput;
  var dropdown = document.createElement('div');
  dropdown.className = 'dropdown-content';
  dropdown.id = 'dropdown-content';
  var Entrada = document.getElementById(idInput);
  Entrada.parentElement.insertAdjacentElement('beforeend', dropdown);
  Entrada.addEventListener('input', entradaAInput);
  Entrada.addEventListener('keydown', precionarFlechasEnter);
}
function entradaAInput(e) {
  var limiteOpciones = 15;
  var dropdown = document.createElement('div');
  dropdown.className = 'dropdown-content';
  dropdown.id = 'dropdown-content';
  var Entrada = e.target;
  var input = this.innerHTML.toLowerCase();
  var dropdownContent = document.getElementById('dropdown-content');
  var posLastSeparator = last_Separator(input);
  var splitInput = dividirInput(input, posLastSeparator);
  var lastWord = splitInput[1];
  previousText = splitInput[0];
  // Limpiar el contenido previo del dropdown
  dropdownContent.innerHTML = '';
  if (input) {
    // Filtrar las palabras que comienzan con el texto ingresado
    var filteredWords = [];
    if (lastWord != '') {
      filteredWords = collection.filter(function (word) {
        return word.toLocaleLowerCase().startsWith(lastWord);
      });
    }
    var _loop = function _loop() {
      var word = filteredWords[i];
      if (word) {
        var option = document.createElement('div');
        option.textContent = word.toLocaleLowerCase();
        if (i == 0) {
          option.classList.add('seleccionado');
        }
        option.addEventListener('click', function () {
          // Al hacer clic en una opción, completar el input con la palabra seleccionada
          Entrada.innerHTML = previousText + word.toLocaleLowerCase();
          // Limpiar el contenido del dropdown
          dropdownContent.innerHTML = '';
          ordenerTexto(document.getElementById('BuscarProyectosTexto'));
        });
        option.addEventListener('mouseover', hoverEnOpcion);
        dropdownContent.appendChild(option);
      }
    };
    for (var i = 0; i < limiteOpciones; i++) {
      _loop();
    }

    // Mostrar el dropdown si hay opciones
    if (filteredWords.length >= 1) {
      dropdownContent.style.display = 'grid';
    } else {
      dropdownContent.style.display = 'none';
    }
  } else {
    dropdownContent.style.display = 'none';
  }

  // Ocultar el dropdown cuando se hace clic fuera del mismo
  document.addEventListener('click', oculatarDropDown(e));
}
function dividirInput(input, posLastSeparator) {
  var arrayRetorno = ['', ''];
  arrayRetorno[0] = input.slice(0, posLastSeparator + 1);
  arrayRetorno[1] = input.slice(posLastSeparator + 1, input.length);
  return arrayRetorno;
}
function last_Separator(text) {
  var regex = /[ -]/g;
  var lastPosition = -1;
  var match;
  while ((match = regex.exec(text)) !== null) {
    lastPosition = match.index;
  }
  return lastPosition;
}
function oculatarDropDown(e) {
  if (!e.target.matches('#autocomplete-input')) {
    document.getElementById('dropdown-content').parentElement.classList.remove('show');
  }
}
function precionarFlechasEnter(e) {
  var contenidoDropDown = '';
  if (document.getElementById('dropdown-content')) {
    contenidoDropDown = document.getElementById('dropdown-content').innerHTML;
  }
  if ((e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'Enter') && contenidoDropDown && document.getElementById('dropdown-content')) {
    e.preventDefault();
    var listaOpciones = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(document.getElementById('dropdown-content').querySelectorAll('div'));
    if (e.key == 'ArrowUp') {
      moverOpcion(-1, listaOpciones);
    } else if (e.key == 'ArrowDown') {
      moverOpcion(1, listaOpciones);
    } else if (e.key == 'Enter') {
      seleccionarConEnter(listaOpciones);
    }
  }
}
function moverOpcion(direccion, listaOpciones) {
  var nuevaPosicion = 0;
  listaOpciones.forEach(function (opcion, iterador) {
    if (opcion.classList.contains('seleccionado')) {
      nuevaPosicion = iterador + direccion;
      if (nuevaPosicion < 0) {
        nuevaPosicion = listaOpciones.length - 1;
      }
      if (nuevaPosicion > listaOpciones.length - 1) {
        nuevaPosicion = 0;
      }
      opcion.classList.remove('seleccionado');
    }
  });
  listaOpciones[nuevaPosicion].classList.add('seleccionado');
}
function seleccionarConEnter(listaOpciones) {
  var entradaParaTexto = document.getElementById(TidInput);
  listaOpciones.forEach(function (opcion) {
    if (opcion.classList.contains('seleccionado')) {
      entradaParaTexto.innerHTML = previousText + opcion.innerHTML.toLocaleLowerCase();
      document.getElementById('dropdown-content').innerHTML = '';
      ordenerTexto(entradaParaTexto);
    }
  });
}
function ordenerTexto(entradaParaTexto) {
  var texto = entradaParaTexto.innerHTML;
  var tamaño = texto.length;
  texto = texto.replace(/\n/g, ' ');
  entradaParaTexto.innerHTML = texto;
  var range = document.createRange();
  // Crear una selección
  var selection = window.getSelection();
  // Seleccionar el contenido del div
  range.selectNodeContents(entradaParaTexto);
  // Colocar el cursor al final
  range.collapse(false);
  // Limpiar la selección existente
  selection.removeAllRanges();
  // Añadir el nuevo rango con el cursor al final
  selection.addRange(range);
  // Enfocar el elemento editable
  entradaParaTexto.focus();
}
function hoverEnOpcion(e) {
  var listaOpciones = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(document.getElementById('dropdown-content').querySelectorAll('div'));
  listaOpciones.forEach(function (opcion, iterador) {
    if (opcion.classList.contains('seleccionado')) {
      opcion.classList.remove('seleccionado');
    }
  });
  e.target.classList.add('seleccionado');
}
function eliminarDropDown() {
  document.getElementById('BuscarProyectosTexto').removeEventListener('input', entradaAInput);
  document.removeEventListener('click', oculatarDropDown(e));
}

/***/ }),

/***/ 4021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aplicarMascaraHora: () => (/* binding */ aplicarMascaraHora)
/* harmony export */ });
function aplicarMascaraHora(elementoID, element) {
  var input;
  if (!element) {
    input = document.getElementById(elementoID);
  } else {
    input = element;
  }
  var valorEntrada = '';
  var horaMinutos = [];
  var hora = '';
  var minutos = '';
  var seleccionado = false;
  var seleccionadoInicio = 0;
  var seleccionadoFinal = 0;
  var resultadoComprobarHora = {};
  var resultadoComprobarMinutos = {};
  var posicionDosPuntos = 0;
  input.addEventListener('input', function (event) {
    valorEntrada = input.value;
    posicionDosPuntos = valorEntrada.indexOf(':');
    if (posicionDosPuntos == -1 || posicionDosPuntos == 3) {
      var valorEntradaArray = valorEntrada.split('');
      valorEntradaArray.splice(2, 0, ':');
      valorEntrada = '';
      valorEntradaArray.forEach(function (_char) {
        valorEntrada += _char;
      });
    }
    horaMinutos = valorEntrada.split(':');
    resultadoComprobarHora = comprobarHoraMinutos(horaMinutos[0], 23);
    resultadoComprobarMinutos = comprobarHoraMinutos(horaMinutos[1], 59);
    hora = resultadoComprobarHora.retorno;
    minutos = resultadoComprobarMinutos.retorno;
    if (resultadoComprobarHora.resto) {
      if (minutos) {
        if (parseInt(minutos) < 10) {
          minutos = parseInt(minutos) * 10;
        }
        var minutosCedidos = parseInt(resultadoComprobarHora.resto * 100) + parseInt(minutos);
        minutos = comprobarHoraMinutos("".concat(minutosCedidos)).retorno;
      } else {
        minutos = comprobarHoraMinutos(resultadoComprobarHora.resto).retorno;
      }
    }
    input.value = "".concat(hora, ":").concat(minutos);
    valorEntrada = input.value;
    if (event.inputType === 'deleteContentBackward') {
      if (valorEntrada[input.selectionStart - 1] == ':') {
        input.setSelectionRange(input.value.indexOf(':'), input.value.indexOf(':'));
      }
    }
    if (seleccionado && seleccionadoInicio < input.value.indexOf(':') && seleccionadoFinal > input.value.indexOf(':')) {
      input.setSelectionRange(input.value.indexOf(':'), input.value.indexOf(':'));
    }
    seleccionado = false;
  });
  input.addEventListener('select', function (evento) {
    seleccionadoInicio = input.selectionStart;
    seleccionadoFinal = input.selectionEnd;
    seleccionado = true;
  });
  input.addEventListener('click', function () {
    seleccionado = false;
  });
  input.onpaste = function (e) {
    seleccionado = false;
  };
}
var EsNumero = function EsNumero(_char2) {
  return !isNaN(_char2 - parseInt(_char2));
};
var comprobarHoraMinutos = function comprobarHoraMinutos(dato, limite) {
  var resultado = {
    retorno: '',
    resto: ''
  };
  if (dato) {
    var salida = dato.replace(/\D/g, '');
    if (salida.length > 2) {
      salida = salida.slice(0, 2);
    }
    if (parseInt(salida) > limite) {
      var demas = salida;
      salida = salida.slice(0, 1);
      resultado.resto = demas.slice(1, 2);
    }
    resultado.retorno = salida;
  } else {
    resultado.retorno = '';
  }
  return resultado;
};

/***/ })

}]);