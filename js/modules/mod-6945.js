"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[6945,1916],{

/***/ 1916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuAzul: () => (/* binding */ MenuAzul)
/* harmony export */ });
var MenuAzul = function MenuAzul(TITLE) {
  return "\n  <div class=\"revision-blue-bar\">\n    <button class=\"revision__btn-top\" id=\"volver\">\n      <svg class=\"svg_img svg_img_figure\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-izq\"></use></svg>\n    </button>\n    <h1 class=\"anexo-title\">".concat(TITLE, "</h1>\n    <button class=\"revision__btn-top revision__btn-ver\"\n      ").concat(window.location.pathname.includes('revision') ? "\n        id=\"RealizarBusqueda\"\n      " : 'id="ver"', "\n    >\n      <svg class=\"svg_img svg_img_figure\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-ver\"></use></svg>\n    </button>\n    ").concat(window.location.pathname.includes('registro') ? "\n      <div class=\"revision__menu-ver\" id=\"menu-btn-toggle\">\n        <div class=\"menu-ver__item\">\n          <a class=\"opcion\" data-opcion=\"101\" href=\"#\">Recientes</a>\n          <a class=\"opcion\" data-opcion=\"102\" href=\"#\">Sin revisar</a>\n          <a class=\"opcion\" data-opcion=\"103\" href=\"#\">Con estrella</a>\n        </div>\n        <div class=\"menu-ver__item\">\n          <button class=\"opcion opcion-style\" id=\"mes0\" data-opcion=\"10\">Julio</button>\n          <button class=\"opcion opcion-style\" id=\"mes1\" data-opcion=\"11\">Junio</button>\n          <button class=\"opcion opcion-style\" id=\"mes2\" data-opcion=\"12\">Mayo</button>\n        </div>\n        <div class=\"menu-ver__item\">\n          <button id=\"RealizarBusqueda\" class=\"opcion-style\">B\xFAsqueda avanzada</button>\n        </div>\n      </div>\n    " : '', "\n  </div>\n");
};

/***/ }),

/***/ 4709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnexoAdicional: () => (/* binding */ AnexoAdicional)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(902);
/* harmony import */ var _utils_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2188);




var AnexoAdicional = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ID) {
    var $AdicionalAnexo, Secciones, SeccionesLayout;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          $AdicionalAnexo = document.querySelector('.anexo-adicional-info');
          _context.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetInfoAdicionalAnexo)(ID);
        case 3:
          Secciones = _context.sent;
          SeccionesLayout = [];
          Secciones.forEach(function (Seccion) {
            var SeccionLayout = CrearAnexoAdicional(Seccion);
            SeccionesLayout.push(SeccionLayout);
          });
          $AdicionalAnexo.innerHTML = SeccionesLayout.join('');
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function AnexoAdicional(_x) {
    return _ref.apply(this, arguments);
  };
}();
var CrearAnexoAdicional = function CrearAnexoAdicional(_ref2) {
  var nombre = _ref2.nombre,
    color_rgb = _ref2.color_rgb,
    contenido = _ref2.contenido;
  var Color = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_3__.ColorRGB)(color_rgb);
  var Contenido = CrearAnexoAdicionalContenido(contenido);
  var HSL = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_3__.GetHSL)(Color);
  return "\n    <section\n      style=\"border:  0.0625rem solid ".concat(Color, ";\n        background-color: 0.0625rem solid hsl(").concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_3__.PorcentajeL[1], "%);\n      \"\n      class=\"contenidos-adicionales\">\n      <h2\n        style=\"background-color: ").concat(Color, "\"\n        class=\"contenidos-adicionales-titulo\"\n      >\n        ").concat(nombre, "\n      </h2>\n      <div class=\"contenido-adicional\">\n        ").concat(Contenido, "\n      </div>\n    </section>\n  ");
};
var CrearAnexoAdicionalContenido = function CrearAnexoAdicionalContenido(Contenidos) {
  var Items = Contenidos.map(function (Contenido, index) {
    if (Contenido.tipo === 1) {
      return "\n        <h3 class=\"adicional-subtitulo\">".concat(Contenido.titulo, "</h3>\n      ");
    }
    return "\n      <ul class=\"adicional-contenidos\">\n        <li class=\"adicional-contenido\">\n          <p class=\"adicional-campo\">\n          ".concat(Contenido.campo, "&nbsp;\n          </p>\n          <p class=\"adicional-valor\">\n          ").concat(Contenido.valor, "\n          </p>\n        </li>\n      </ul>\n      ");
  });
  return Items.join('');
};

/***/ }),

/***/ 6945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_encabezado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(423);
/* harmony import */ var _utils_Color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2188);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(902);
/* harmony import */ var _anexoAdicional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4709);
/* harmony import */ var _componentes_historialB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5696);
/* harmony import */ var _componentes_MenuAzul__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1916);









(0,_componentes_encabezado__WEBPACK_IMPORTED_MODULE_1__.Encabezado)();
var $ContenedorRevisiones = document.querySelector('.contenedor-revisiones');
var Parametros_OLD = {};
document.querySelector('#logo').addEventListener('click', function () {
  return RenderizarGruposRevision();
});
var RenderizarGruposRevision = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var codigoAlcance,
      codigoBuscado,
      fechaDesde,
      fechaHasta,
      opcionesSeleccionadas,
      Parametros,
      _yield$GetGruposRevis,
      Grupos,
      ContenidoGrupo,
      $MenuAzul,
      Contenido,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          codigoAlcance = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
          codigoBuscado = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
          fechaDesde = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'today';
          fechaHasta = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'today';
          opcionesSeleccionadas = _args.length > 4 && _args[4] !== undefined ? _args[4] : '';
          Parametros = "".concat(codigoAlcance, "/").concat(codigoBuscado, "/").concat(fechaDesde, "/").concat(fechaHasta, "/").concat(opcionesSeleccionadas);
          Parametros_OLD.codigoAlcance = codigoAlcance;
          Parametros_OLD.codigoBuscado = codigoBuscado;
          Parametros_OLD.fechaDesde = fechaDesde;
          Parametros_OLD.fechaHasta = fechaHasta;
          Parametros_OLD.opcionesSeleccionadas = opcionesSeleccionadas;
          _context.next = 13;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GetGruposRevision)(Parametros);
        case 13:
          _yield$GetGruposRevis = _context.sent;
          Grupos = _yield$GetGruposRevis.Grupos;
          if (Grupos.length > 0) {
            ContenidoGrupo = Grupos.map(function (grupo) {
              return CrearContenidoGrupoRevision(grupo);
            });
            $MenuAzul = (0,_componentes_MenuAzul__WEBPACK_IMPORTED_MODULE_6__.MenuAzul)('REVISIÓN DE ANEXOS, ACTIVIDADES Y GASTOS');
            Contenido = "\n      <div class=\"anexo--buscar\">\n        ".concat($MenuAzul, "\n        ").concat(ContenidoGrupo.join(''), "\n      </div>\n    ");
            $ContenedorRevisiones.innerHTML = Contenido;
            ActivarMenuVer();
            ActivarRenderAnexo();
          }
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function RenderizarGruposRevision() {
    return _ref.apply(this, arguments);
  };
}();
var CrearContenidoGrupoRevision = function CrearContenidoGrupoRevision(_ref2) {
  var color_rgb = _ref2.color_rgb,
    nombre_grupo = _ref2.nombre_grupo,
    registros = _ref2.registros,
    tipo_grupo = _ref2.tipo_grupo;
  var ColorFondo = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_7__.ColorRGB)(color_rgb);
  var HSL = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_7__.GetHSL)(color_rgb);
  var FontSize = '0.9rem';
  var ContenidoLista = CrearContenidoRegistrosRevision(registros, HSL, tipo_grupo);
  return "\n    <section class=\"revision-registros\" style=\"font-size: ".concat(FontSize, "; color: ").concat(ColorFondo, ";\">\n      <h2 class=\"titulo-revision\" style=\"background-color:").concat(ColorFondo, "; font-size: ").concat(FontSize, ";\">").concat(nombre_grupo, "</h2>\n      <ul>\n        ").concat(ContenidoLista, "\n      </ul>\n    </section>\n  ");
};
var CrearContenidoRegistrosRevision = function CrearContenidoRegistrosRevision(registros, HSL, tipo_grupo) {
  var ContenidoRegistros = registros.map(function (registro, index) {
    var id_registro = registro.id_registro,
      estado_revision = registro.estado_revision,
      ultimo_visto = registro.ultimo_visto,
      nombre_registro = registro.nombre_registro,
      revisor = registro.revisor,
      periodo = registro.periodo;
    var Simbolo = ['•', '', '⬤', '⬤', '⬤', '⬤'];
    var id_registro_visible = id_registro.substring(id_registro.indexOf('|') + 1);
    var ColorFondo = (index + 1) % 2 === 0 ? "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_7__.PorcentajeL[0], "%)") : "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_7__.PorcentajeL[1], "%)");
    return "\n      <li style=\"background-color: ".concat(ColorFondo, ";\"\n        class=\"revision-registro ").concat(tipo_grupo === 1 ? 'revision-con-anexos' : 'revision-sin-anexos', "\">\n        <div id-registro=\"").concat(id_registro, "\"><span ").concat(ultimo_visto ? 'class="ultimo_visto"' : '', ">").concat(id_registro_visible, "</span></div>\n        <div class=\"estado-revision-color-").concat(estado_revision, "\">").concat(Simbolo[estado_revision], "</div>\n        <div nombre-revision=\"").concat(nombre_registro, "\">").concat(nombre_registro, "</div>\n        <div><span>").concat(revisor, "</span></div>\n        <div>").concat(periodo, "</div>\n      </li>\n    ");
  });
  return ContenidoRegistros.join('');
};
var ActivarRenderAnexo = function ActivarRenderAnexo() {
  var $RevisionRegistro = document.querySelectorAll('.revision-registro');
  $RevisionRegistro.forEach(function ($Registro) {
    $Registro.addEventListener('click', function (e) {
      var ID = $Registro.children[0].getAttribute('id-registro');
      var HTML = $Registro.outerHTML;
      var Titulo = $Registro.parentElement.parentElement.children[0].innerText;
      var Title = $Registro;
      if ($Registro.classList[1] === 'revision-sin-anexos') {
        HTML = "<div class=\"revisando-nombre\">\n          ".concat($Registro.children[2].getAttribute('nombre-revision'), "\n        </div>");
      }
      RenderizarAnexo(ID, HTML, Titulo);
    });
  });
};
var RenderizarAnexo = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ID, HTML, Titulo) {
    var $ContenedorAnexo, $MenuAzul, data, ContenidoAnexo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          $ContenedorAnexo = document.querySelector('.contenedor-revisiones');
          $MenuAzul = (0,_componentes_MenuAzul__WEBPACK_IMPORTED_MODULE_6__.MenuAzul)(Titulo);
          localStorage.setItem('CodigoBuscado', ID);
          localStorage.setItem('FechaDesde', 'today');
          localStorage.setItem('FechaHasta', 'today');
          if (!HTML.includes('revision-con-anexos')) {
            _context2.next = 16;
            break;
          }
          _context2.next = 8;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GetInfoInicialAnexo)(ID);
        case 8:
          data = _context2.sent;
          ContenidoAnexo = CrearAnexo(data);
          $ContenedorAnexo.innerHTML = "\n      <div class=\"anexo-activo anexo--volver\">\n        ".concat($MenuAzul, "\n        ").concat(HTML, "\n        ").concat(ContenidoAnexo, "\n        <div id=\"historial-b\" class=\"historial-b\"></div>\n      </div>");
          localStorage.setItem('CodigoAlcance', '105'); // 105 = revisión conceptos anexo
          (0,_componentes_historialB__WEBPACK_IMPORTED_MODULE_4__.Historial)('105', ID);
          ActivarAnexo();
          _context2.next = 20;
          break;
        case 16:
          // console.log(HTML)
          $ContenedorAnexo.innerHTML = "\n    <div class=\"historial-revision anexo--volver anexo-activo-persona\">\n      ".concat($MenuAzul, "\n      ").concat(HTML, "\n    <div id=\"historial-b\" class=\"historial-b\"></div>\n    </div>\n    ");
          localStorage.setItem('CodigoAlcance', '104'); // 104 = revisión conceptos usuario
          document.querySelector('#volver').addEventListener('click', function (e) {
            var codigoAlcance = Parametros_OLD.codigoAlcance,
              codigoBuscado = Parametros_OLD.codigoBuscado,
              fechaDesde = Parametros_OLD.fechaDesde,
              fechaHasta = Parametros_OLD.fechaHasta,
              opcionesSeleccionadas = Parametros_OLD.opcionesSeleccionadas;
            RenderizarGruposRevision(codigoAlcance, codigoBuscado, fechaDesde, fechaHasta, opcionesSeleccionadas);
          });
          (0,_componentes_historialB__WEBPACK_IMPORTED_MODULE_4__.Historial)('104', ID);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function RenderizarAnexo(_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();
var CrearAnexo = function CrearAnexo(_ref4) {
  var clases = _ref4.clases,
    observaciones = _ref4.observaciones,
    instrucciones = _ref4.instrucciones;
  var ClasesContenido = clases.map(function (_ref5) {
    var color_rgb = _ref5.color_rgb,
      prefijo = _ref5.prefijo,
      nombre_clase = _ref5.nombre_clase;
    var ColorFondo = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_7__.ColorRGB)(color_rgb);
    var HSL = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_7__.GetHSL)(ColorFondo);
    return "<span title=\"".concat(prefijo, " - ").concat(nombre_clase, "\"\n      style=\"background-color: ").concat(ColorFondo, ";\n      cursor: default; \n      border:  0.0625rem solid hsl(").concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_7__.PorcentajeL[2], "%);\"\n      >").concat(prefijo, "</span>");
  });
  return "\n  <div class=\"anexo-container\">\n    <div class=\"anexo-left\">\n      <button id=\"guardar\" title=\"Guardar y Continuar\" class=\"u-btn u-btn--default u-btn--image u-btn--disabled\">\n        <svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#guardar-disabled\"></use></svg>\n      </button>\n      <button id=\"terminar\" title=\"Guardar y Terminar\" class=\"u-btn u-btn--default u-btn--image u-btn--disabled\">\n        <svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#terminar-disabled\"></use></svg>\n      </button>\n      ".concat(ClasesContenido.join(''), "\n    </div>\n    <div class=\"textos\">\n      <textarea class=\"texto-anexo\" name=\"observaciones\" readonly id=\"observaciones\" cols=\"30\" rows=\"10\">").concat(observaciones, "</textarea>\n      <textarea class=\"texto-anexo\" name=\"instrucciones\" maxlength=\"500\" id=\"instrucciones\" cols=\"30\" rows=\"10\" placeholder=\"Aqu\xED van sus instrucciones para el \xE1rea de Facturaci\xF3n sobre este Anexo\">").concat(instrucciones, "</textarea>\n    </div>\n  </div>\n  <div class=\"anexo-adicional\">\n    <details>\n      <summary>Informaci\xF3n adicional del Anexo</summary>\n      <div class=\"anexo-adicional-info\">\n      </div>\n    </details>\n  </div>\n  ");
};
var ActivarAnexo = function ActivarAnexo() {
  var $Volver = document.querySelector('#volver');
  var $Guardar = document.querySelector('#guardar');
  var $Terminar = document.querySelector('#terminar');
  var $Instrucciones = document.querySelector('#instrucciones');
  var codigoAlcance = Parametros_OLD.codigoAlcance,
    codigoBuscado = Parametros_OLD.codigoBuscado,
    fechaDesde = Parametros_OLD.fechaDesde,
    fechaHasta = Parametros_OLD.fechaHasta,
    opcionesSeleccionadas = Parametros_OLD.opcionesSeleccionadas;
  var VolverARevision = function VolverARevision(e) {
    RenderizarGruposRevision(codigoAlcance, codigoBuscado, fechaDesde, fechaHasta, opcionesSeleccionadas);
  };
  var ValorAnterior = $Instrucciones.value;
  var InstruccionCambio = false;
  var change = InstruccionCambio;
  $Instrucciones.oninput = function () {
    InstruccionCambio = $Instrucciones.value.trim() !== ValorAnterior;
    if (change !== InstruccionCambio) {
      if (InstruccionCambio) {
        ActivarBotones();
        change = InstruccionCambio;
      } else {
        DesactivarBotones();
        return;
      }
    }
    change = InstruccionCambio;
  };
  var DesactivarBotones = function DesactivarBotones() {
    ValorAnterior = $Instrucciones.value.trim();
    InstruccionCambio = false;
    change = false;
    $Guardar.classList.add('u-btn--disabled');
    $Guardar.innerHTML = "\n      <svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#guardar-disabled\"></use></svg>\n    ";
    $Terminar.classList.add('u-btn--disabled');
    $Terminar.innerHTML = "\n      <svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#terminar-disabled\"></use></svg>\n    ";
  };
  var ActivarBotones = function ActivarBotones() {
    $Guardar.classList.remove('u-btn--disabled');
    $Guardar.innerHTML = "\n      <svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#guardar\"></use></svg>\n    ";
    $Terminar.classList.remove('u-btn--disabled');
    $Terminar.innerHTML = "\n      <svg class=\"datos-registro__botones_button_svg\" viewBox=\"-10 -10 200 200\"><use xlink:href=\"./img/sprite.svg#terminar\"></use></svg>\n    ";
  };
  $Volver.addEventListener('click', VolverARevision);
  $Guardar.addEventListener('click', function () {
    var ID = document.querySelector('.revision-registro').querySelector('div').getAttribute('id-registro');
    var Instrucciones = $Instrucciones.value;
    var Boton = 'guardar';
    DesactivarBotones();
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.GuardarInstruccionesRevisor)(ID, Instrucciones, Boton);
  });
  $Terminar.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
    var ID, Instrucciones, Boton;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          ID = document.querySelector('.revision-registro').querySelector('div').getAttribute('id-registro');
          Instrucciones = $Instrucciones.value;
          Boton = 'terminar';
          _context3.next = 5;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GuardarInstruccionesRevisor)(ID, Instrucciones, Boton);
        case 5:
          RenderizarGruposRevision(codigoAlcance, codigoBuscado, fechaDesde, fechaHasta, opcionesSeleccionadas);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  var Summary = document.querySelector('summary');
  Summary.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
    var ID, DetailsOpen;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          ID = document.querySelector('.revision-registro').querySelector('div').getAttribute('id-registro');
          DetailsOpen = document.querySelector('details').hasAttribute('open');
          if (!DetailsOpen) {
            (0,_anexoAdicional__WEBPACK_IMPORTED_MODULE_3__.AnexoAdicional)(ID);
          }
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
};
var ActivarMenuVer = function ActivarMenuVer() {
  // OJO se dejó en comentario porque no hay elementos de clase .opcion
  // const $Opciones = document.querySelectorAll('.opcion')
  // $Opciones.forEach($Opcion => {
  //   $Opcion.onclick = () => Historial(0, $Opcion.dataset.opcion, 'today', 'today')
  // });
  var $BusquedaAvanzada = document.querySelector('#RealizarBusqueda');
  $BusquedaAvanzada.onclick = /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
    var CargarAvance, CargarHistoryBar, CargarHistorialA, TipoRegistro, IDRegistro, CodigoSubclase, UsuarioRevisor, TipoBusqueda, _yield$import, GetDatosBusqueda;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          CargarAvance = function CargarAvance() {
            return console.log('Success');
          }, CargarHistoryBar = function CargarHistoryBar() {
            return console.log('Success');
          }, CargarHistorialA = function CargarHistorialA() {
            return console.log('Success');
          };
          TipoRegistro = 2;
          IDRegistro = 'nuevo-2';
          CodigoSubclase = 0; // No tenemos CodigoSubclase aún
          UsuarioRevisor = ''; // No tenemos UsuarioRevisor aún
          TipoBusqueda = 2; // 2 = Revisores
          _context5.next = 8;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(912), __webpack_require__.e(8380), __webpack_require__.e(9158), __webpack_require__.e(6329)]).then(__webpack_require__.bind(__webpack_require__, 1091));
        case 8:
          _yield$import = _context5.sent;
          GetDatosBusqueda = _yield$import.GetDatosBusqueda;
          GetDatosBusqueda(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, RenderizarGruposRevision, TipoBusqueda);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
};
RenderizarGruposRevision();

/***/ })

}]);