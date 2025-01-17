"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[4022,4187,1804],{

/***/ 1641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefrescarHistoriales: () => (/* binding */ RefrescarHistoriales)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2407);
/* harmony import */ var _utils_Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2188);
/* harmony import */ var _componentes_encabezado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(423);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9476);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8380);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3999);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7044);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8723);
/* harmony import */ var _utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4187);
/* harmony import */ var _utils_PintarGraficaSVG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1804);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7425);



// Importa los estilos para registro.html


// Importa los metodos para crear elementos [HTML]


// Importa las funcionalidades del color para los proyectos dependiento el tipo de la clase



// Importa la libreria nouislider

// Importa la libreria date-fns





var CargarAvanceExport = function CargarAvanceExport() {};
var CargarHistoryBarExport = function CargarHistoryBarExport() {};
var CargarHistorialAExport = function CargarHistorialAExport() {};
var CargarHistorialBExport = function CargarHistorialBExport() {};
(function () {
  var FechaInicial,
    PrimerDiaSemana = 0,
    HistoryBar,
    HistorialA,
    HistorialB,
    HistorialBTotal,
    Acumulado = 0.0,
    TimerHistoryBar,
    TimerHistorial,
    TimeoutHistorial,
    TimerOcultarCronos,
    Dias,
    FechasHistorialOLD,
    CtrlPressed = false,
    CodigoBuscado,
    Origen,
    IntervalCronometro;
  var UnDia = 86400000; // en milisegundos

  (0,_componentes_encabezado__WEBPACK_IMPORTED_MODULE_1__.Encabezado)();
  function CargarUltimosTresMeses() {
    return _CargarUltimosTresMeses.apply(this, arguments);
  }
  function _CargarUltimosTresMeses() {
    _CargarUltimosTresMeses = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
      var _yield$GetData, ultimos_3_meses;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('ultimos3meses', '', 'CargarUltimosTresMeses');
          case 2:
            _yield$GetData = _context12.sent;
            ultimos_3_meses = _yield$GetData.ultimos_3_meses;
            document.querySelector('#mes0').innerHTML = ultimos_3_meses[0];
            document.querySelector('#mes1').innerHTML = ultimos_3_meses[1];
            document.querySelector('#mes2').innerHTML = ultimos_3_meses[2];
          case 7:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return _CargarUltimosTresMeses.apply(this, arguments);
  }
  CargarUltimosTresMeses();
  function CargarAvance(_x) {
    return _CargarAvance.apply(this, arguments);
  }
  function _CargarAvance() {
    _CargarAvance = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(Alcance) {
      var _yield$GetData2, indice_horas_registradas, indice_horas_efectivas, porcentaje_esperado, porcentaje_alcanzado, descripcion;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('avance', Alcance, 'CargarAvance');
          case 2:
            _yield$GetData2 = _context13.sent;
            indice_horas_registradas = _yield$GetData2.indice_horas_registradas;
            indice_horas_efectivas = _yield$GetData2.indice_horas_efectivas;
            porcentaje_esperado = _yield$GetData2.porcentaje_esperado;
            porcentaje_alcanzado = _yield$GetData2.porcentaje_alcanzado;
            descripcion = _yield$GetData2.descripcion;
            (0,_utils_PintarGraficaSVG__WEBPACK_IMPORTED_MODULE_5__.PintarGraficaAvanceSVG)({
              Alcance: Alcance,
              IndiceHorasRegistradas: indice_horas_registradas,
              IndiceHorasEfectivas: indice_horas_efectivas,
              PorcentajeEsperado: porcentaje_esperado,
              PorcentajeAlcanzado: porcentaje_alcanzado,
              Descripcion: descripcion,
              CalcularPosicionHistorial: _utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_6__.CalcularPosicionHistorial,
              CargarHistorialB: CargarHistorialB
            });
          case 9:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return _CargarAvance.apply(this, arguments);
  }
  CargarAvanceExport = CargarAvance;
  function PintarHistoryBar(IndiceIzq, IndiceDer) {
    var Pasos = HistoryBar.length - 1;
    var HistoryBarWidth = (Dias * 18 + 2) * 0.0625; // REMs
    var SliderWidth = (Pasos * 18 + 2) * 0.0625; // REMs
    var HistoriBar_ = document.getElementById('history-bar');
    HistoriBar_.style.cssText = "width: ".concat(HistoryBarWidth, "rem;");
    HistoriBar_.replaceChildren();
    for (var I = 0; I < HistoryBar.length; I++) {
      var Dia = HistoryBar[I];
      HistoriBar_.innerHTML = "\n      \t<div class=\"dia\" title=\"".concat(Dia[0], "\"><div class=\"superior\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#hb-").concat(Dia[1], "\"></use></svg></div><div class=\"inferior\" data-fecha=\"").concat(Dia[0].substr(8, 2), "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#hb-").concat(Dia[2], "\"></use></svg></div></div>\n      ") + HistoriBar_.innerHTML;
    }
    document.querySelectorAll('.superior, .inferior').forEach(function (el) {
      el.addEventListener('click', function (e) {
        TimeoutHistorial = 0;
        UbicarHandles(e);
      });
    });
    document.querySelector('.c_slider').style.cssText = "width: ".concat(SliderWidth, "rem;");
    Slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: Pasos
      }
    });
    Slider.noUiSlider.set([IndiceDer, IndiceIzq]);
  }
  function CargarHistoryBar(_x2, _x3, _x4, _x5) {
    return _CargarHistoryBar.apply(this, arguments);
  }
  function _CargarHistoryBar() {
    _CargarHistoryBar = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14(Fecha, OrigenTxt, IndiceIzq, IndiceDer) {
      var style, fontSize, AnchoDia, _yield$GetData3, history_bar, indice_izq, indice_der;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            Origen = OrigenTxt;
            style = getComputedStyle(document.querySelector('html')).getPropertyValue('font-size');
            fontSize = parseFloat(style);
            AnchoDia = fontSize * 1.125; // Esto nos entrega el ancho en pixeles de un Dia del HistoryBar
            if (window.innerWidth > 900) {
              Dias = 56.25 * fontSize / AnchoDia;
            } else {
              Dias = window.innerWidth / AnchoDia - 1;
            }
            Dias = Math.round(Dias);
            _context14.next = 8;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('historybar', "".concat(Fecha, "/").concat(Dias), 'CargarUltimosTresMeses');
          case 8:
            _yield$GetData3 = _context14.sent;
            history_bar = _yield$GetData3.history_bar;
            indice_izq = _yield$GetData3.indice_izq;
            indice_der = _yield$GetData3.indice_der;
            HistoryBar = history_bar;
            if (Origen == 'home') {
              IndiceIzq = indice_izq;
              IndiceDer = indice_der;
            }
            FechaInicial = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* .parse */ .qg)(HistoryBar[0][0], 'yyyy-MM-dd', new Date());
            PintarHistoryBar(IndiceIzq, IndiceDer);
          case 16:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _CargarHistoryBar.apply(this, arguments);
  }
  CargarHistoryBarExport = CargarHistoryBar;
  CargarHistoryBar('today', 'home');
  CargarAvance(21); // 21 = gráfica de avance del período actual
  CargarAvance(11); // 11 = gráfica de avance del día de hoy
  function CargarHistorialA() {
    return _CargarHistorialA.apply(this, arguments);
  }
  function _CargarHistorialA() {
    _CargarHistorialA = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15() {
      var _yield$GetData4, historial_a;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('historiala', '', 'CargarHistorialA');
          case 2:
            _yield$GetData4 = _context15.sent;
            historial_a = _yield$GetData4.historial_a;
            HistorialA = historial_a;
            PintarHistorialA();
          case 6:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return _CargarHistorialA.apply(this, arguments);
  }
  CargarHistorialA();
  CargarHistorialAExport = CargarHistorialA;
  function ZeroFill(n, length) {
    var n = n.toString();
    while (n.length < length) n = '0' + n;
    return n;
  }
  function Cronometrar() {
    var Tiempo = Acumulado;
    var hh = Math.trunc(Tiempo);
    Tiempo = (Tiempo - hh) * 60;
    var mm = Math.trunc(Tiempo);
    Tiempo = (Tiempo - mm) * 60;
    var ss = Math.trunc(Tiempo);
    document.getElementById('hhmmss').textContent = "".concat(ZeroFill(hh, 2), ":").concat(ZeroFill(mm, 2), ":").concat(ZeroFill(ss, 2));
    Acumulado = Acumulado + 0.0000555556; // 0.0000555556 = 200 milisegundos
  }
  function PintarCronometro(Numero, Tiempo) {
    var HTML = "<div class=\"cantidad menu-preconcepto\"><span>".concat(Tiempo, "</span></div>");
    if (Numero == 2) {
      Acumulado = parseFloat(Tiempo);
      HTML = "<div class=\"cantidad menu-preconcepto\">\n            <div class=\"crono-contenedor\">\n              <div class=\"crono-fondo\">\n                <span class=\"crono-fuente\">88:88:88</span>\n              </div>\n              <div class=\"crono-activo\">\n                <span class=\"crono-fuente\">\n                  <span id=\"hhmmss\"></span>\n                </span>\n              </div>\n            </div>\n          </div>";
      IntervalCronometro = setInterval(Cronometrar, 200);
    }
    return HTML;
  }
  function PintarHistorialA() {
    var color_rgb_old = -1;
    var Color;
    var ColorRegistro = [];
    clearInterval(IntervalCronometro);
    var Historial_A_ = document.getElementById('historial-a');
    Historial_A_.replaceChildren();
    for (var I = 0; I < HistorialA.length; I++) {
      var RegistroH = HistorialA[I];
      var color_rgb = RegistroH.color_rgb;
      if (color_rgb != color_rgb_old) {
        Color = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_8__.ColorRGB)(color_rgb);
        var HSL = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_8__.GetHSL)(color_rgb);
        ColorRegistro[0] = "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_8__.PorcentajeL[0], "%)");
        ColorRegistro[1] = "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_8__.PorcentajeL[1], "%)");
        color_rgb_old = color_rgb;
      }
      Historial_A_.innerHTML = Historial_A_.innerHTML + "\n        <section class=\"grupo style\" id=\"preconceptos\">\n          <div class=\"cabeza\" style=\"background-color:".concat(Color, "\">\n            <div class=\"nombre titulo-cronos\"><span>").concat(RegistroH.nombre_seccion, "</span><span class=\"contador-cronos\">").concat(RegistroH.total, "</span></div>\n          </div>\n          <div class=\"cuerpo cuerpo-cronos\" id=\"contenedor_historial_a\"></div>\n        </section>\n      ");
      for (var J = 0; J < RegistroH.c_registros.length; J++) {
        var Registro = RegistroH.c_registros[J];
        var ContenedorHistorial_ = document.getElementById('contenedor_historial_a');
        ContenedorHistorial_.innerHTML = ContenedorHistorial_.innerHTML + "\n\t\t\t\t<div class=\"registro menuProyecto\" id=\"preconcepto-".concat(Registro.preconcepto, "\" data-codigo_subclase=\"").concat(Registro.codigo_subclase, "\" data-usuario_revisor=\"").concat(Registro.usuario_revisor, "\" data-tipo_registro=\"").concat(Registro.tipo_registro, "\" title=\"").concat(Registro.nombre_proyecto, "\" style=\"background-color:").concat(ColorRegistro[J % 2], "\">\n\t\t\t\t\t<div class=\"c1 crono-").concat(Registro.c1, "\" title=\"").concat(Registro.c1_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#cro").concat(Registro.c1, "\"></use></svg></div>\n\t\t\t\t\t<div class=\"c5\">\xB7</div>\n\t\t\t\t\t<div class=\"fecha menu-preconcepto\"><span>").concat(Registro.fecha, "</span></div>\n\t\t\t\t\t<div class=\"grow-inf menu-preconcepto\"></div>\n\t\t\t\t\t<div class=\"descripcion menu-preconcepto\" title=\"").concat(Registro.antiguedad_hint, "\" style=\"color: ").concat((0,_utils_Color__WEBPACK_IMPORTED_MODULE_8__.ColorRGB)(Registro.color_rgb), "\"><span>").concat(Registro.descripcion, "</span></div>\n\t\t\t\t\t<div class=\"subclase menu-preconcepto\"><span>").concat(Registro.nombre_subclase, "</span></div>\n\t\t\t\t\t").concat(PintarCronometro(Registro.c1, Registro.cantidad), "\n\t\t\t\t\t<div class=\"c3\" title=\"").concat(Registro.c3_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c3").concat(Registro.c3, "\"></use></svg></div>\n\t\t\t\t\t<div class=\"c4 log-registro-a\" title=\"").concat(Registro.c4_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c4").concat(Registro.c4, "\"></use></svg></div>\n\t\t\t\t\t<div class=\"revisor\"><span>").concat(Registro.iniciales_revisor, "</span></div>\n\t\t\t\t\t<div class=\"c2 cursor-pointer\" data-codigo=\"").concat(Registro.c2, "\" title=\"").concat(Registro.c2_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#reg").concat(Registro.c2, "\"></use></svg></div>\n\t\t\t\t</div>\n\t\t\t");
      }
    }
    document.querySelectorAll('.EditarRegistroA').forEach(function (el) {
      el.addEventListener('click', function (e) {
        EditarRegistro(e);
      });
    });
    document.querySelectorAll('.crono-0').forEach(function (el) {
      el.style.cssText = "cursor: auto;";
    });
    document.querySelectorAll('.crono-1, .crono-2').forEach(function (el) {
      el.addEventListener('click', function (e) {
        CronometroClick(e);
      });
    });
    document.querySelectorAll('.c2').forEach(function (el) {
      el.addEventListener('click', function (e) {
        ClickRegistrarConcepto(e);
      });
    });
    document.querySelectorAll('.log-registro-a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        LogRegistro(e);
      });
    });
    document.querySelectorAll('.titulo-cronos').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var CuerpoCronos_ = document.querySelector('.cuerpo-cronos');
        if (getComputedStyle(CuerpoCronos_).getPropertyValue('display') == 'none') {
          CuerpoCronos_.style.cssText = "display: flex";
          clearTimeout(TimerOcultarCronos);
        } else {
          CuerpoCronos_.style.cssText = "display: none";
          TimerOcultarCronos = setTimeout(function () {
            CuerpoCronos_.style.cssText = "display: flex";
          }, 900000); // Ocultar por máximo cinco (5) minutos
        }
      });
    });
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName('menu-preconcepto')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        var MitadX = Math.trunc(Math.min(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), 900) / 2);
        var position = {
          x: el.parentElement.offsetLeft + MitadX - 110,
          // 110 = la mitad del ancho del menú
          y: el.parentElement.offsetTop + 8
        };
        CrearMenuHistorial(position, el.parentElement, 'menu-historial-a');
      });
    });
  }
  function PintarHistorialB() {
    var color_rgb_old = -1;
    var Color;
    var ColorRegistro = [];
    var Historial_B_ = document.getElementById('historial-b');
    for (var I = 0; I < HistorialB.length; I++) {
      var RegistroH = HistorialB[I];
      var color_rgb = RegistroH.color_rgb;
      if (color_rgb != color_rgb_old) {
        Color = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_8__.ColorRGB)(color_rgb);
        var HSL = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_8__.GetHSL)(color_rgb);
        ColorRegistro[0] = "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_8__.PorcentajeL[0], "%)");
        ColorRegistro[1] = "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_8__.PorcentajeL[1], "%)");
        color_rgb_old = color_rgb;
      }
      var grupoSection = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('SECTION', "grupo-".concat(RegistroH.grupo), ['grupo']);
      grupoSection.innerHTML = "\n        <div class=\"cabeza\" style=\"background-color:".concat(Color, "\">\n          <input type=\"checkbox\" class=\"select_checkbox\" id=\"chk_").concat(RegistroH.grupo, "\">\n          <div class=\"checkbox\" id=\"c0_").concat(RegistroH.grupo, "\"><label for=\"chk_").concat(RegistroH.grupo, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-multiselect\"></use></svg></label></div>\n          <div class=\"idioma\" style=\"color:").concat(Color, "\"><span>").concat(RegistroH.idioma, "</span></div>\n          <div class=\"grow-sup\"></div>\n          <div class=\"nombre\" title=\"").concat(RegistroH.clase, " - ").concat(RegistroH.nombre_clase, "\"><span>").concat(RegistroH.nombre_proyecto, "</span></div>\n          <div class=\"total\" title=\"").concat(RegistroH.clase, " - ").concat(RegistroH.nombre_clase, "\"><span>").concat(RegistroH.total, "</span></div>\n          <div class=\"vacio\"></div>\n          <div class=\"info\" id=\"info-").concat(RegistroH.proyecto, "\" title=\"Click para ver:\n \u25CF M\xE1s per\xEDodos\n \u25CF Informaci\xF3n adicional\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#semaforo-").concat(RegistroH.semaforo, "\"></use></svg></div>\n        </div>\n        <div class=\"cuerpo\" id=\"registros-").concat(RegistroH.grupo, "\"></div>");
      document.getElementById('historial-b').appendChild(grupoSection);
      document.querySelectorAll("#chk_".concat(RegistroH.grupo)).forEach(function (el) {
        el.addEventListener('click', function (e) {
          ToggleCheckbox(e);
        });
      });
      var Registros_ = document.getElementById("registros-".concat(RegistroH.grupo));
      for (var J = 0; J < RegistroH.c_registros.length; J++) {
        var Registro = RegistroH.c_registros[J];
        Registros_.innerHTML = Registros_.innerHTML + "\n        <div class=\"registro menuProyecto\" id=\"concepto-".concat(Registro.registro, "\" data-codigo_subclase=\"").concat(Registro.codigo_subclase, "\" data-usuario_revisor=\"").concat(Registro.usuario_revisor, "\" data-tipo_registro=\"").concat(Registro.tipo_registro, "\" style=\"background-color:").concat(ColorRegistro[J % 2], "\">\n          <div class=\"c1 estrella c0_").concat(RegistroH.grupo, "\" data-estado=\"").concat(Registro.c1, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c1").concat(Registro.c1, "\"></use></svg></div>\n          <div class=\"c2\" title=\"").concat(Registro.c2_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c2").concat(Registro.c2, "\"></use></svg></div>\n          <div class=\"fecha menu-concepto\"><span>").concat(Registro.fecha, "</span></div>\n          <div class=\"grow-inf menu-concepto\"></div>\n          <div class=\"descripcion menu-concepto\"><span>").concat(Registro.descripcion, "</span></div>\n          <div class=\"subclase menu-concepto\"><span>").concat(Registro.nombre_subclase, "</span></div>\n          <div class=\"cantidad menu-concepto\" title=\"").concat(Registro.castigo_hint, "\"><span class=\"castigo-").concat(Registro.castigo, "\">").concat(Registro.cantidad, "</span></div>\n          <div class=\"c3\" title=\"").concat(Registro.c3_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c3").concat(Registro.c3, "\"></use></svg></div>\n          <div class=\"c4 log-registro-b\" title=\"").concat(Registro.c4_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c4").concat(Registro.c4, "\"></use></svg></div>\n          <div class=\"revisor\"><span>").concat(Registro.iniciales_revisor, "</span></div>\n          <div class=\"c5 revision cursor-pointer\" title=\"Estado de revisi\xF3n\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c5").concat(Registro.c5, "\"></use></svg></div>\n        </div>\n      ");
      }
    }
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName('EditarRegistroB')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        EditarRegistro(e);
      });
    });
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName('info')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        ProyectoInfoClick(e);
      });
    });
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName('estrella')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        EstrellaClick(e);
      });
    });
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName('log-registro-b')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        LogRegistro(e);
      });
    });
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName('revision')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        RevisionClick(e);
      });
    });
    document.querySelectorAll('.info svg').forEach(function (el) {
      el.addEventListener('click', function (e) {
        SemaforoClick(e);
      });
    });
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName('menu-concepto')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        var MitadX = Math.trunc(Math.min(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), 900) / 2);
        var position = {
          x: el.parentElement.offsetLeft + MitadX - 110,
          // 110 = la mitad del ancho del menú
          y: el.parentElement.offsetTop + 8
        };
        CrearMenuHistorial(position, el.parentElement, 'menu-historial-b');
      });
    });
  }
  function CrearMenuHistorial(posicion, contenedorConcepto, clase) {
    if (!document.querySelector('.menu-historial')) {
      var Background = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('SECTION', 'menu-historial-background', ['menu-historial-background']);
      var menuHistorialB = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('UL', 'menu-historial', ['menu-historial', 'context-menu-list', 'context-menu-root', clase]);
      menuHistorialB.style.left = "".concat(posicion.x, "px");
      menuHistorialB.style.top = "".concat(posicion.y, "px");
      var editar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('LI', null, ['context-menu-item']);
      var editarContenido = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', null, ['context-menu-icon', 'context-menu-icon-edit'], 'Editar');
      editar.appendChild(editarContenido);
      editarContenido.appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', 'topLayer', ['context-menu-item-topLayer']));
      editar.addEventListener('click', function (e) {
        clickEditarRegistro(e.target.parentElement.parentElement.parentElement);
      });
      var duplicar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('LI', null, ['context-menu-item']);
      var duplicarContenido = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', null, ['context-menu-icon', 'context-menu-icon-clone'], 'Duplicar');
      duplicar.appendChild(duplicarContenido);
      duplicarContenido.appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', 'topLayer', ['context-menu-item-topLayer']));
      duplicar.addEventListener('click', function (e) {
        ClickDuplicar(e.target.parentElement.parentElement.parentElement);
      });
      var eliminar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('LI', null, ['context-menu-item']);
      var eliminarContenido = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', null, ['context-menu-icon', 'context-menu-icon-delete'], 'Eliminar');
      eliminar.appendChild(eliminarContenido);
      eliminarContenido.appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', 'topLayer', ['context-menu-item-topLayer']));
      eliminar.addEventListener('click', function (e) {
        clickEliminar(e.target.parentElement.parentElement.parentElement);
      });
      var separador = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', null, ['menu-historial-separador', 'context-menu-separator']);
      menuHistorialB.appendChild(editar);
      menuHistorialB.appendChild(separador.cloneNode(true));
      menuHistorialB.appendChild(duplicar);
      menuHistorialB.appendChild(separador.cloneNode(true));
      if (clase === 'menu-historial-b') {
        var castigar = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('LI', null, ['context-menu-item']);
        var castigarContenido = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', null, ['context-menu-icon', 'context-menu-icon-castigar'], 'Castigar');
        castigar.appendChild(castigarContenido);
        castigarContenido.appendChild((0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', 'topLayer', ['context-menu-item-topLayer']));
        castigar.addEventListener('click', function (e) {
          clickCastigarRegistro(e.target.parentElement.parentElement.parentElement);
          castigar.insertAdjacentElement('beforeend', separador.cloneNode(true));
        });
        menuHistorialB.appendChild(castigar);
        menuHistorialB.appendChild(separador.cloneNode(true));
      }
      menuHistorialB.appendChild(eliminar);
      contenedorConcepto.appendChild(menuHistorialB);
      Background.addEventListener('click', function (e) {
        return removerMenuBackGround(e);
      });
      document.getElementById('main').insertAdjacentElement('beforeend', Background);
      document.getElementById('main').classList.add('ocultar-scroll');
    } else {
      document.querySelector('.menu-historial').remove();
    }
  }
  function removerMenuBackGround(e) {
    if (e.target.classList.contains('menu-historial-background')) {
      if (document.querySelector('.menu-historial')) {
        document.querySelector('.menu-historial').remove();
      }
      e.target.remove();
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
  function RemoverMenu() {
    document.querySelector('.menu-historial').remove();
    document.querySelector('.menu-historial-background').remove();
  }
  function PintarHistorialBTotal() {
    document.getElementById('historial-b').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('SECTION', 'ContenedorTotal', ['contenedor-total']));
    var ID;
    var I = 0;
    HistorialBTotal.forEach(function (_ref) {
      var color_rgb = _ref.color_rgb,
        nombre_clase = _ref.nombre_clase,
        total = _ref.total,
        parametros_url = _ref.parametros_url;
      ID = "Total".concat(I++);
      var HistorialTotalItem = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', ID, ['contenedor-total__item']);
      document.getElementById('ContenedorTotal').insertAdjacentElement('beforeend', HistorialTotalItem);
      HistorialTotalItem.style.color = "".concat((0,_utils_Color__WEBPACK_IMPORTED_MODULE_8__.ColorRGB)(color_rgb));
      HistorialTotalItem.style.cursor = 'pointer';
      HistorialTotalItem.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('SPAN', null, null, "".concat(nombre_clase)));
      HistorialTotalItem.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('SPAN', null, null, "".concat(total)));
      if (parametros_url.length > 0) {
        HistorialTotalItem.setAttribute('url', parametros_url);
        HistorialTotalItem.addEventListener('click', function (e) {
          var Path = HistorialTotalItem.getAttribute('url').split('/');
          CargarHistorialB(Path[0], Path[1], Path[2], Path[3], Path[4]);
        });
      }
    });
  }
  function CargarHistorialB(_x6, _x7, _x8, _x9) {
    return _CargarHistorialB.apply(this, arguments);
  }
  function _CargarHistorialB() {
    _CargarHistorialB = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16(CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta) {
      var Clases,
        Path,
        Result,
        _args16 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            Clases = _args16.length > 4 && _args16[4] !== undefined ? _args16[4] : '';
            Path = "".concat(CodigoAlcance, "/").concat(CodigoBuscado, "/").concat(FechaDesde, "/").concat(FechaHasta, "/").concat(Clases);
            _context16.next = 4;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('historialb', Path, 'CargarHistorialB');
          case 4:
            Result = _context16.sent;
            document.getElementById('historial-b').replaceChildren();
            HistorialB = Result.historial_b;
            HistorialBTotal = Result.historial_b_total;
            if (HistorialBTotal.length) PintarHistorialBTotal();
            if (HistorialB.length) PintarHistorialB();
            localStorage.setItem('CodigoAlcance', CodigoAlcance);
            localStorage.setItem('CodigoBuscado', CodigoBuscado);
            localStorage.setItem('FechaDesde', FechaDesde);
            localStorage.setItem('FechaHasta', FechaHasta);
          case 14:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }));
    return _CargarHistorialB.apply(this, arguments);
  }
  CargarHistorialBExport = CargarHistorialB;
  function UbicarHandles(event, Fecha) {
    var ShiftDate = 0;
    if (event.target.id.substr(0, 3) == 'btn') {
      var Factor = event.target.id.substr(0, 7) == 'btn-izq' ? 1 : -1;
      var IndiceDer = parseInt(Slider.noUiSlider.get()[0]);
      var IndiceIzq = parseInt(Slider.noUiSlider.get()[1]);
      if (IndiceDer > IndiceIzq) {
        var _ref2 = [IndiceIzq, IndiceDer];
        IndiceDer = _ref2[0];
        IndiceIzq = _ref2[1];
      }
      var ShiftIndice = (IndiceIzq - IndiceDer + 1) * Factor;
      IndiceIzq = IndiceIzq + ShiftIndice;
      IndiceDer = IndiceDer + ShiftIndice;
      if (IndiceIzq > HistoryBar.length - 1) {
        ShiftDate = HistoryBar.length - 1 - IndiceIzq;
      } else {
        if (IndiceDer < 0) {
          ShiftDate = -IndiceDer;
        }
      }
      if (ShiftDate != 0) {
        FechaInicial = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__/* .addDays */ .f)(FechaInicial, ShiftDate);
        var FechaISO = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__/* .format */ .GP)(FechaInicial, 'yyyy-MM-dd');
        IndiceIzq = IndiceIzq + ShiftDate;
        IndiceDer = IndiceDer + ShiftDate;
        CargarHistoryBar(FechaISO, 'boton', IndiceIzq, IndiceDer);
      } else {
        Slider.noUiSlider.set([IndiceDer, IndiceIzq]);
      }
    } else {
      var FechaSelecTxt = Fecha || event.currentTarget.parentElement.title;
      var FechaSelec = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* .parse */ .qg)(FechaSelecTxt, 'yyyy-MM-dd', new Date());
      var Indice = (FechaInicial - FechaSelec) / UnDia;
      if (event.target.className == 'inferior') {
        var DiaSemanaSelec = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__/* .getDay */ .P)(FechaSelecTxt);
        var ShiftLeft = DiaSemanaSelec - PrimerDiaSemana + 1;
        if (DiaSemanaSelec < PrimerDiaSemana) {
          ShiftLeft += 7;
        }
        var ShiftRight = 6 - ShiftLeft;
        var _IndiceDer = Indice - ShiftRight;
        var _IndiceIzq = Indice + ShiftLeft;
        if (_IndiceIzq > HistoryBar.length - 1) {
          ShiftDate = HistoryBar.length - 1 - _IndiceIzq;
        } else {
          if (_IndiceDer < 0) {
            ShiftDate = -_IndiceDer;
          }
        }
        if (ShiftDate != 0) {
          FechaInicial = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__/* .addDays */ .f)(FechaInicial, ShiftDate);
          var _FechaISO = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__/* .format */ .GP)(FechaInicial, 'yyyy-MM-dd');
          _IndiceIzq = _IndiceIzq + ShiftDate;
          _IndiceDer = _IndiceDer + ShiftDate;
          CargarHistoryBar(_FechaISO, 'slider', _IndiceIzq, _IndiceDer);
        } else {
          Slider.noUiSlider.set([Indice - ShiftRight, Indice + ShiftLeft]);
        }
      } else {
        Slider.noUiSlider.set([Indice, Indice]);
      }
    }
  }
  //NOTE:
  // Inicializar NoUiSlider
  var Slider = document.getElementById('slider');
  nouislider__WEBPACK_IMPORTED_MODULE_2__/* ["default"].create */ .Ay.create(Slider, {
    direction: 'rtl',
    start: [0, 0],
    connect: true,
    behaviour: 'unconstrained-drag-tap',
    step: 1,
    range: {
      min: 0,
      max: 1
    }
  });
  Slider.noUiSlider.on('start', function () {
    clearTimeout(TimerHistorial);
  });
  Slider.noUiSlider.on('slide', function () {
    TimeoutHistorial = 260;
    SliderChange();
  });
  Slider.noUiSlider.on('update', function () {
    SliderChange();
  });
  function SliderChange() {
    clearTimeout(TimerHistorial);
    TimerHistorial = setTimeout(function () {
      // Aquí se carga el Historial-B, si es necesario
      if (HistoryBar !== undefined) {
        var IndiceDer = parseInt(Slider.noUiSlider.get()[0]);
        var IndiceIzq = parseInt(Slider.noUiSlider.get()[1]);
        if (IndiceDer > IndiceIzq) {
          var _ref3 = [IndiceIzq, IndiceDer];
          IndiceDer = _ref3[0];
          IndiceIzq = _ref3[1];
        }
        var FechaDesde = HistoryBar[IndiceIzq][0];
        var FechaHasta = HistoryBar[IndiceDer][0];
        var DescripcionHistorial;
        if (FechaDesde != FechaHasta) {
          DescripcionHistorial = HistoryBar[IndiceIzq][0] + ' - ' + HistoryBar[IndiceDer][0];
        } else {
          DescripcionHistorial = HistoryBar[IndiceIzq][0];
        }
        document.getElementById('DescripcionHistorial').innerHTML = DescripcionHistorial;
        var FechasHistorialNEW = FechaDesde + FechaHasta;
        if (!((Origen == 'resize' || Origen == 'ctrlboton') && FechasHistorialNEW == FechasHistorialOLD)) {
          CargarHistorialB(1, 0, FechaDesde, FechaHasta);
          FechasHistorialOLD = FechasHistorialNEW;
        }
      }
    }, TimeoutHistorial);
  }
  function ToggleCheckbox(e) {
    var Checkbox = e.target;
    var N = Checkbox.id.substr(4, 100); // chk-NUMERO
    if (Checkbox.checked) {
      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.getElementsByClassName("c0_".concat(N))).forEach(function (el) {
        el.innerHTML = '<input type="checkbox">';
      });
      document.querySelectorAll(".c0_".concat(N, " input")).forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      });
    } else {
      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.querySelectorAll(".c0_".concat(N))).map(function (e) {
        return e.innerHTML = "<svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c1".concat(e.children[0].parentElement.dataset.estado, "\"></use></svg>");
      });
    }
  }
  var LogRegistro = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var IDRegistro, _yield$import, logRegistro;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            IDRegistro = e.target.parentElement.id;
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 2749).then(__webpack_require__.bind(__webpack_require__, 2749));
          case 3:
            _yield$import = _context.sent;
            logRegistro = _yield$import.logRegistro;
            logRegistro(IDRegistro);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function LogRegistro(_x10) {
      return _ref4.apply(this, arguments);
    };
  }();

  // Function EditarRegistro() -- botón de los registros
  var EditarRegistro = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
      var TipoRegistro, IDRegistro, CodigoSubclase, UsuarioRevisor, _yield$import2, GetDatosRegistro;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            TipoRegistro = e.target.parentElement.dataset.tipo_registro;
            IDRegistro = e.target.parentElement.id;
            CodigoSubclase = e.target.parentElement.dataset.codigo_subclase;
            UsuarioRevisor = e.target.parentElement.dataset.usuario_revisor;
            _context2.next = 6;
            return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(9158), __webpack_require__.e(6985)]).then(__webpack_require__.bind(__webpack_require__, 9158));
          case 6:
            _yield$import2 = _context2.sent;
            GetDatosRegistro = _yield$import2.GetDatosRegistro;
            GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function EditarRegistro(_x11) {
      return _ref5.apply(this, arguments);
    };
  }();
  function ClickRegistrarConcepto(_x12) {
    return _ClickRegistrarConcepto.apply(this, arguments);
  }
  function _ClickRegistrarConcepto() {
    _ClickRegistrarConcepto = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17(e) {
      var Numero, CodigoAlcance, _CodigoBuscado, FechaDesde, FechaHasta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            e.stopPropagation();
            Numero = e.currentTarget.parentElement.id.substr(12, 100); // preconcepto-NUMERO
            if (!(e.target.dataset.codigo == 0)) {
              _context17.next = 6;
              break;
            }
            // 0 = Sin completar.
            EditarRegistro(e);
            _context17.next = 17;
            break;
          case 6:
            _context17.next = 8;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('registrarconcepto', Numero, 'Registrar Concepto');
          case 8:
            CodigoAlcance = localStorage.getItem('CodigoAlcance');
            _CodigoBuscado = localStorage.getItem('CodigoBuscado');
            FechaDesde = localStorage.getItem('FechaDesde');
            FechaHasta = localStorage.getItem('FechaHasta');
            CargarAvance(21); // 21 = gráfica de avance del período actual
            CargarAvance(11); // 11 = gráfica de avance del día de hoy
            CargarHistoryBar('today', 'home');
            CargarHistorialA();
            CargarHistorialB(CodigoAlcance, _CodigoBuscado, FechaDesde, FechaHasta);
          case 17:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    return _ClickRegistrarConcepto.apply(this, arguments);
  }
  function CronometroClick(_x13) {
    return _CronometroClick.apply(this, arguments);
  }
  function _CronometroClick() {
    _CronometroClick = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee18(e) {
      var Numero;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            e.stopPropagation();
            Numero = e.currentTarget.parentElement.id.substr(12, 100); // preconcepto-NUMERO
            _context18.next = 4;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('clickcronometro', Numero, 'CronometroClick');
          case 4:
            CargarHistorialA();
          case 5:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }));
    return _CronometroClick.apply(this, arguments);
  }
  function EstrellaClick(_x14) {
    return _EstrellaClick.apply(this, arguments);
  }
  function _EstrellaClick() {
    _EstrellaClick = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee19(e) {
      var Numero, _yield$GetData5, numero_concepto, estado_estrella;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            e.stopPropagation();
            Numero = e.currentTarget.parentElement.id.substr(9, 100); // concepto-NUMERO
            _context19.next = 4;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('clickestrella', Numero, 'EstrellaClick');
          case 4:
            _yield$GetData5 = _context19.sent;
            numero_concepto = _yield$GetData5.numero_concepto;
            estado_estrella = _yield$GetData5.estado_estrella;
            document.querySelector("#concepto-".concat(numero_concepto, " .estrella")).getElementsByTagName('use')[0].setAttribute('xlink:href', "./img/sprite.svg#c1".concat(estado_estrella + 1));
          case 8:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }));
    return _EstrellaClick.apply(this, arguments);
  }
  function RevisionClick(_x15) {
    return _RevisionClick.apply(this, arguments);
  }
  function _RevisionClick() {
    _RevisionClick = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee20(e) {
      var Numero, _yield$GetData6, numero_concepto, estado_revision;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            e.stopPropagation();
            Numero = e.currentTarget.parentElement.id.substr(9, 100); // concepto-NUMERO
            _context20.next = 4;
            return (0,_api__WEBPACK_IMPORTED_MODULE_3__.GetData)('clickrevision', Numero, 'RevisionClick');
          case 4:
            _yield$GetData6 = _context20.sent;
            numero_concepto = _yield$GetData6.numero_concepto;
            estado_revision = _yield$GetData6.estado_revision;
            document.querySelector("#concepto-".concat(numero_concepto, " .revision")).getElementsByTagName('use')[0].setAttribute('xlink:href', "./img/sprite.svg#c5".concat(estado_revision));
          case 8:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }));
    return _RevisionClick.apply(this, arguments);
  }
  function ProyectoInfoClick(e) {
    e.stopPropagation();
  }
  function SemaforoClick(e) {
    CodigoBuscado = e.currentTarget.parentElement.id.substr(5, 100); // info-NUMERO
    var X = e.currentTarget.parentElement.offsetLeft + e.currentTarget.parentElement.offsetParent.offsetLeft - 150; // 150 = ancho del menú
    var Y = e.currentTarget.parentElement.offsetTop + e.currentTarget.parentElement.offsetParent.offsetTop + e.currentTarget.clientHeight * 0.5;
    var Semaforo_ = document.getElementsByClassName('menu-semaforo')[0];
    Semaforo_.style.cssText = 'display: block;';
    document.getElementById('menu-semaforo-cliente').checked = false;
    Semaforo_.style.cssText += "left: ".concat(X, "px; top: ").concat(Y, "px;");
    document.getElementById('menu-btn-toggle').style.display = 'none';
  }
  document.addEventListener('click', function (e) {
    document.getElementById('menu-btn-toggle').style.display = 'none';
    document.getElementById('MenuSemaforo').style.display = 'none';
  });
  document.getElementById('boton-ver').addEventListener('click', function (e) {
    e.stopPropagation();
    var MenuBTNToggle_ = document.getElementById('menu-btn-toggle');
    if (MenuBTNToggle_.style.display == 'none' || MenuBTNToggle_.style.display == '') {
      MenuBTNToggle_.style.display = 'block';
    } else {
      MenuBTNToggle_.style.display = 'none';
    }
    document.getElementById('MenuSemaforo').style.display = 'none';
  });

  // habilita de nuevo el slider ['.c_slider'];
  document.getElementById('history-bar').addEventListener('click', function () {
    document.querySelector('.c_slider').style.display = 'block';
    (0,_utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_6__.CalcularPosicionHistorial)();
  });

  // Obtener la Altura del encabezado.

  var Altura = document.getElementById('encabezado').getBoundingClientRect().height + document.getElementById('dashboard').getBoundingClientRect().height;
  document.querySelector('#historial').style.top = "".concat((Altura - 35) * 0.0624, "rem");
  document.querySelector('#historial-b').display = 'block';
  (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(document.querySelectorAll('#btn-izq, #btn-der')).forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (CtrlPressed) {
        var Factor = e.target.id.substr(0, 7) == 'btn-izq' ? -1 : 1;
        //NOTE: "addDays" necesita la fecha en formato ISO
        var Fecha = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__/* .addDays */ .f)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__/* .parse */ .qg)(HistoryBar[0][0], 'yyyy-MM-dd', new Date()), Factor);
        var IndiceDer = parseInt(Slider.noUiSlider.get()[0]) + 1 * Factor;
        var IndiceIzq = parseInt(Slider.noUiSlider.get()[1]) + 1 * Factor;
        if (IndiceDer > IndiceIzq) {
          var _ref6 = [IndiceIzq, IndiceDer];
          IndiceDer = _ref6[0];
          IndiceIzq = _ref6[1];
        }
        var FechaTxt = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__/* .format */ .GP)(Fecha, 'yyyy-MM-dd');
        CargarHistoryBar(FechaTxt, 'ctrlboton', IndiceIzq, IndiceDer);
      } else {
        TimeoutHistorial = 260;
        UbicarHandles(e);
      }
    });
  });

  // let mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgentData.platform);
  // console.log(mac);

  document.addEventListener('keydown', function (e) {
    if (e.key == 'Control') {
      CtrlPressed = true;
    }
  });
  document.addEventListener('keyup', function (e) {
    CtrlPressed = false;
  });
  document.getElementById('logo').addEventListener('click', function () {
    document.querySelector('.c_slider').style.display = 'block';
    (0,_utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_6__.CalcularPosicionHistorial)();
    TimeoutHistorial = 0;
    CargarHistoryBar('today', 'home');
  });
  window.onresize = function () {
    clearTimeout(TimerHistoryBar);
    var DiasNEW = Math.trunc(Math.min(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), 900) / 18);
    if (DiasNEW != Dias) {
      TimerHistoryBar = setTimeout(function () {
        var FechaISO = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__/* .format */ .GP)(FechaInicial, 'yyyy-MM-dd');
        CargarHistoryBar(FechaISO, 'resize');
      }, 25);
    }
  };
  document.getElementById('menu-semaforo-cliente').addEventListener('click', function (e) {
    e.stopPropagation();
  });
  document.querySelectorAll('.menu-ver .opcion').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.c_slider').style.display = 'none';
      (0,_utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_6__.CalcularPosicionHistorial)();
      document.getElementById('DescripcionHistorial').innerHTML = e.currentTarget.textContent;
      CargarHistorialB(e.target.dataset.opcion, 0, 'today', 'today');
    });
  });
  document.querySelectorAll('.menu-semaforo .opcion').forEach(function (el) {
    el.addEventListener('click', function (e) {
      document.getElementById('DescripcionHistorial').innerHTML = e.currentTarget.textContent;
      var Cliente = document.getElementById('menu-semaforo-cliente').checked;
      var CodigoAlcance = Cliente ? parseInt(e.target.dataset.opcion) + 10 : parseInt(e.target.dataset.opcion);
      CargarHistorialB(CodigoAlcance, CodigoBuscado, 'today', 'today');
    });
  });
  var clickEditarRegistro = /*#__PURE__*/function () {
    var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(event) {
      var TipoRegistro, IDRegistro, _yield$import3, GetDatosRegistro;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            TipoRegistro = event.parentElement.dataset.tipo_registro;
            IDRegistro = event.parentElement.id;
            _context3.next = 4;
            return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(9158), __webpack_require__.e(6985)]).then(__webpack_require__.bind(__webpack_require__, 9158));
          case 4:
            _yield$import3 = _context3.sent;
            GetDatosRegistro = _yield$import3.GetDatosRegistro;
            GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
            RemoverMenu();
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function clickEditarRegistro(_x16) {
      return _ref7.apply(this, arguments);
    };
  }();
  var ClickDuplicar = /*#__PURE__*/function () {
    var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(event) {
      var IDRegistro, _yield$import4, DuplicarRegistro;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            IDRegistro = event.parentElement.id;
            _context4.next = 3;
            return __webpack_require__.e(/* import() */ 2575).then(__webpack_require__.bind(__webpack_require__, 2575));
          case 3:
            _yield$import4 = _context4.sent;
            DuplicarRegistro = _yield$import4.DuplicarRegistro;
            DuplicarRegistro(IDRegistro, CargarHistorialA);
            RemoverMenu();
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function ClickDuplicar(_x17) {
      return _ref8.apply(this, arguments);
    };
  }();
  var clickCastigarRegistro = /*#__PURE__*/function () {
    var _ref9 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(event) {
      var IDRegistro, _yield$import5, CastigarRegistro;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            IDRegistro = event.parentElement.id;
            _context5.next = 3;
            return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(1971)]).then(__webpack_require__.bind(__webpack_require__, 1971));
          case 3:
            _yield$import5 = _context5.sent;
            CastigarRegistro = _yield$import5.CastigarRegistro;
            CastigarRegistro(IDRegistro, CargarHistorialB);
            RemoverMenu();
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function clickCastigarRegistro(_x18) {
      return _ref9.apply(this, arguments);
    };
  }();
  var clickEliminar = /*#__PURE__*/function () {
    var _ref10 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(event) {
      var IDRegistro, _yield$import6, EliminarRegistro;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            IDRegistro = event.parentElement.id;
            _context6.next = 3;
            return __webpack_require__.e(/* import() */ 9974).then(__webpack_require__.bind(__webpack_require__, 9974));
          case 3:
            _yield$import6 = _context6.sent;
            EliminarRegistro = _yield$import6.EliminarRegistro;
            EliminarRegistro(IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
            RemoverMenu();
          case 7:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function clickEliminar(_x19) {
      return _ref10.apply(this, arguments);
    };
  }();

  // Botón Información
  document.getElementById('informacion').addEventListener('click', /*#__PURE__*/function () {
    var _ref11 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(e) {
      var _yield$import7, informacion;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return __webpack_require__.e(/* import() */ 2420).then(__webpack_require__.bind(__webpack_require__, 2420));
          case 2:
            _yield$import7 = _context7.sent;
            informacion = _yield$import7.informacion;
            informacion(e);
          case 5:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x20) {
      return _ref11.apply(this, arguments);
    };
  }());

  // Registrar preconcepto tipo actividad (tiempo)
  document.getElementById('RegActividad').addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
    var TipoRegistro, IDRegistro, CodigoSubclase, UsuarioRevisor, _yield$import8, GetDatosRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          TipoRegistro = 1;
          IDRegistro = 'nuevo-1';
          CodigoSubclase = 0; // No tenemos CodigoSubclase aún
          UsuarioRevisor = ''; // No tenemos UsuarioRevisor aún
          _context8.next = 6;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(9158), __webpack_require__.e(6985)]).then(__webpack_require__.bind(__webpack_require__, 9158));
        case 6:
          _yield$import8 = _context8.sent;
          GetDatosRegistro = _yield$import8.GetDatosRegistro;
          GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
        case 9:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));

  // Regicstrar preconcepto tipo gasto (dinero)
  document.getElementById('RegGasto').addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
    var TipoRegistro, IDRegistro, CodigoSubclase, UsuarioRevisor, _yield$import9, GetDatosRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          TipoRegistro = 2;
          IDRegistro = 'nuevo-2';
          CodigoSubclase = 0; // No tenemos CodigoSubclase aún
          UsuarioRevisor = ''; // No tenemos UsuarioRevisor aún
          _context9.next = 6;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(9158), __webpack_require__.e(6985)]).then(__webpack_require__.bind(__webpack_require__, 9158));
        case 6:
          _yield$import9 = _context9.sent;
          GetDatosRegistro = _yield$import9.GetDatosRegistro;
          GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
        case 9:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  })));

  // Realizar Busqueda avanzada
  document.getElementById('RealizarBusqueda').addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
    var TipoRegistro, IDRegistro, CodigoSubclase, UsuarioRevisor, Path, _yield$import10, GetDatosBusqueda;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          TipoRegistro = 2;
          IDRegistro = 'nuevo-2';
          CodigoSubclase = 0; // No tenemos CodigoSubclase aún
          UsuarioRevisor = ''; // No tenemos UsuarioRevisor aún
          Path = 1;
          document.querySelector('.c_slider').style.display = 'none';
          (0,_utils_CalcularPosicionHistorial__WEBPACK_IMPORTED_MODULE_6__.CalcularPosicionHistorial)();
          _context10.next = 9;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(9158), __webpack_require__.e(1091)]).then(__webpack_require__.bind(__webpack_require__, 1091));
        case 9:
          _yield$import10 = _context10.sent;
          GetDatosBusqueda = _yield$import10.GetDatosBusqueda;
          GetDatosBusqueda(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB, Path);
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));

  // Registrar preconcepto tipo item (unidad)
  document.getElementById('RegItem').addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
    var TipoRegistro, IDRegistro, CodigoSubclase, UsuarioRevisor, _yield$import11, GetDatosRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          TipoRegistro = 3;
          IDRegistro = 'nuevo-3';
          CodigoSubclase = 0; // No tenemos CodigoSubclase aún
          UsuarioRevisor = ''; // No tenemos UsuarioRevisor aún
          _context11.next = 6;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(9158), __webpack_require__.e(6985)]).then(__webpack_require__.bind(__webpack_require__, 9158));
        case 6:
          _yield$import11 = _context11.sent;
          GetDatosRegistro = _yield$import11.GetDatosRegistro;
          GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
        case 9:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  })));

  // Navigator Online
  if ('onLine' in navigator) {
    var isOnLine = function isOnLine() {
      var enLineaContenedor = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', 'enLineaContenedor', ['enLineaContenedor']);
      var enLinea = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_10__.CreateElement)('DIV', 'MensajeIsOnLine', ['MensajeEnLinea'], 'De nuevo en línea');
      enLineaContenedor.appendChild(enLinea);
      document.body.appendChild(enLineaContenedor);
      if (navigator.onLine) {
        enLinea.innerHTML = 'de nuevo en línea';
        enLinea.classList.remove('ofline');
        enLinea.classList.add('online');
        setTimeout(function () {
          document.querySelectorAll('#enLineaContenedor').forEach(function (el) {
            el.remove();
          });
        }, 2000);
      } else {
        enLinea.innerHTML = 'sin conexión';
        enLinea.classList.remove('online');
        enLinea.classList.add('ofline');
      }
    };
    window.addEventListener('online', isOnLine);
    window.addEventListener('offline', isOnLine);
  }
})();
window.onload = function () {
  var insertarColleccion = /*#__PURE__*/function () {
    var _ref16 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee21() {
      var _yield$import12, collection, stringifieCollection;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return __webpack_require__.e(/* import() */ 3654).then(__webpack_require__.bind(__webpack_require__, 3654));
          case 2:
            _yield$import12 = _context21.sent;
            collection = _yield$import12.collection;
            stringifieCollection = JSON.stringify(collection);
            localStorage.setItem('ListaPalabras', stringifieCollection);
          case 6:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    }));
    return function insertarColleccion() {
      return _ref16.apply(this, arguments);
    };
  }();
  insertarColleccion();
};
function RefrescarHistoriales(stringRefrescar) {
  // if (stringRefrescar.includes('ha')) {
  //   console.log('Se va ha cargar el historial A');
  //   CargarHistorialAE();
  // }
  var CodigoAlcance = localStorage.getItem('CodigoAlcance');
  var CodigoBuscado = localStorage.getItem('CodigoBuscado');
  var FechaDesde = localStorage.getItem('FechaDesde');
  var FechaHasta = localStorage.getItem('FechaHasta');
  if (stringRefrescar.includes('avp')) CargarAvanceExport(21);
  if (stringRefrescar.includes('avd')) CargarAvanceExport(11);
  // Actualizar HistoryBar
  if (stringRefrescar.includes('hB')) CargarHistoryBarExport('today', 'home');
  // Actualizar HistorialA
  if (stringRefrescar.includes('ha')) CargarHistorialAExport();
  // Actualizar HistorialB
  if (stringRefrescar.includes('hb')) CargarHistorialBExport(CodigoAlcance, CodigoBuscado, FechaDesde, FechaHasta);
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

/***/ }),

/***/ 1804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PintarGraficaAvanceSVG: () => (/* binding */ PintarGraficaAvanceSVG)
/* harmony export */ });
function ColorBarra(ColorSugerido, Indice, AnchoPixeles) {
  var AnchoBarra = 14;
  var Apagado = '#000000';
  if (AnchoPixeles > AnchoBarra * Indice) {
    return ColorSugerido;
  } else {
    return Apagado;
  }
}
function PintarGraficaAvanceSVG(config) {
  var Alcance = config.Alcance,
    IndiceHorasRegistradas = config.IndiceHorasRegistradas,
    IndiceHorasEfectivas = config.IndiceHorasEfectivas,
    PorcentajeEsperado = config.PorcentajeEsperado,
    PorcentajeAlcanzado = config.PorcentajeAlcanzado,
    Descripcion = config.Descripcion,
    CalcularPosicionHistorial = config.CalcularPosicionHistorial,
    CargarHistorialB = config.CargarHistorialB;
  // Calcular Posicion Historial,CargrHistotialB y Ubicar Handles deberian de ser modulos
  var IndiceHorasRegistradasPixeles = Math.min(IndiceHorasRegistradas * 195, 252);
  var IndiceHorasEfectivasPixeles = Math.min(IndiceHorasEfectivas * 195, 252);
  var PorcentajeEsperadoPixeles = Math.min(PorcentajeEsperado * 189, 238);
  var PorcentajeAlcanzadoPixeles = Math.min(PorcentajeAlcanzado * 189, 238);
  var Imagen;
  var id;
  var CodigoAlcance; // para CargarHistorialB
  switch (Alcance) {
    case 21:
      Imagen = document.getElementById('avance-p');
      id = 'avance-p';
      CodigoAlcance = 10;
      break;
    case 11:
      Imagen = document.getElementById('avance-d');
      id = 'avance-d';
      CodigoAlcance = 1;
      break;
  }
  var svg = "\n\t  <svg id=\"".concat(id, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 254 94\" width=\"254\" height=\"94\">\n\t\t  <g>\n\t\t\t  <rect fill=\"#303030\" x=\"0\" y=\"0\" width=\"254\" height=\"94\"></rect>\n\t\t\t  <rect fill=\"#FFFFFF\" x=\"2\" y=\"35\" width=\"250\" height=\"37\"></rect>\n\t\t\t  <rect fill=\"").concat(ColorBarra('#CC0000', 0, IndiceHorasRegistradasPixeles), "\" x=\"2\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D01700', 1, IndiceHorasRegistradasPixeles), "\" x=\"16\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D52E00', 2, IndiceHorasRegistradasPixeles), "\" x=\"30\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D94500', 3, IndiceHorasRegistradasPixeles), "\" x=\"44\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#DE5C00', 4, IndiceHorasRegistradasPixeles), "\" x=\"58\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E37300', 5, IndiceHorasRegistradasPixeles), "\" x=\"72\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E78B00', 6, IndiceHorasRegistradasPixeles), "\" x=\"86\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#ECA200', 7, IndiceHorasRegistradasPixeles), "\" x=\"100\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F1B900', 8, IndiceHorasRegistradasPixeles), "\" x=\"114\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F5D000', 9, IndiceHorasRegistradasPixeles), "\" x=\"128\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FAE700', 10, IndiceHorasRegistradasPixeles), "\" x=\"142\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FFFF00', 11, IndiceHorasRegistradasPixeles), "\" x=\"156\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D4FF00', 12, IndiceHorasRegistradasPixeles), "\" x=\"170\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#AAFF00', 13, IndiceHorasRegistradasPixeles), "\" x=\"184\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#7FFF00', 14, IndiceHorasRegistradasPixeles), "\" x=\"198\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#55FF00', 15, IndiceHorasRegistradasPixeles), "\" x=\"212\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#2AFF00', 16, IndiceHorasRegistradasPixeles), "\" x=\"226\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#00FF00', 17, IndiceHorasRegistradasPixeles), "\" x=\"240\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#CC0000', 0, IndiceHorasEfectivasPixeles), "\" x=\"2\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D01700', 1, IndiceHorasEfectivasPixeles), "\" x=\"16\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D52E00', 2, IndiceHorasEfectivasPixeles), "\" x=\"30\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D94500', 3, IndiceHorasEfectivasPixeles), "\" x=\"44\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#DE5C00', 4, IndiceHorasEfectivasPixeles), "\" x=\"58\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E37300', 5, IndiceHorasEfectivasPixeles), "\" x=\"72\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E78B00', 6, IndiceHorasEfectivasPixeles), "\" x=\"86\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#ECA200', 7, IndiceHorasEfectivasPixeles), "\" x=\"100\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F1B900', 8, IndiceHorasEfectivasPixeles), "\" x=\"114\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F5D000', 9, IndiceHorasEfectivasPixeles), "\" x=\"128\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FAE700', 10, IndiceHorasEfectivasPixeles), "\" x=\"142\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FFFF00', 11, IndiceHorasEfectivasPixeles), "\" x=\"156\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D4FF00', 12, IndiceHorasEfectivasPixeles), "\" x=\"170\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#AAFF00', 13, IndiceHorasEfectivasPixeles), "\" x=\"184\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#7FFF00', 14, IndiceHorasEfectivasPixeles), "\" x=\"198\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#55FF00', 15, IndiceHorasEfectivasPixeles), "\" x=\"212\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#2AFF00', 16, IndiceHorasEfectivasPixeles), "\" x=\"226\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#00FF00', 17, IndiceHorasEfectivasPixeles), "\" x=\"240\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"#303030\" x=\"8\" y=\"53\" width=\"238\" height=\"1\"></rect>\n\t\t\t  <rect fill=\"#303030\" x=\"196\" y=\"51\" width=\"2\" height=\"5\"></rect>\n\t\t\t  <polygon points=\"").concat(PorcentajeEsperadoPixeles, ",37 ").concat(PorcentajeEsperadoPixeles + 16, ",37 ").concat(PorcentajeEsperadoPixeles + 8, ",51\" fill=\"#0080FF\"/>\n\t\t\t  <polygon points=\"").concat(PorcentajeAlcanzadoPixeles, ",70 ").concat(PorcentajeAlcanzadoPixeles + 16, ",70 ").concat(PorcentajeAlcanzadoPixeles + 8, ",56\" fill=\"#FF8000\"/>\n\t\t\t  <text x=\"3\" y=\"89\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"initial\" fill=\"white\">").concat(Descripcion, "</text>\n\t\t  </g>\n\t  </svg>");
  Imagen.outerHTML = svg;
  document.getElementById(id).addEventListener('click', function (event) {
    document.querySelector('.c_slider').style.display = 'none';
    CalcularPosicionHistorial();
    CargarHistorialB(CodigoAlcance, 0, 'today', 'today');
    document.getElementById('DescripcionHistorial').innerHTML = Descripcion;
  });
}

/***/ })

}]);