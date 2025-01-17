"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[5696,902,6936],{

/***/ 5696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Historial: () => (/* binding */ Historial)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2188);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2407);
/* harmony import */ var _utils_CreateSomeMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6936);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var _pages_revision_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(902);
/* harmony import */ var _utils_CastigarRegistro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3962);
/* harmony import */ var _utils_EditarRegistro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5397);










var Historial = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Alcance, ID) {
    var FechaInicial,
      FechaFinal,
      URL,
      _yield$GetHistorialB,
      historial_b,
      historial_b_total,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          FechaInicial = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'today';
          FechaFinal = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'today';
          console.log(Alcance, ID);
          URL = "".concat(Alcance, "/").concat(ID, "/").concat(FechaInicial, "/").concat(FechaFinal, "/");
          _context.next = 6;
          return (0,_pages_revision_api__WEBPACK_IMPORTED_MODULE_3__.GetHistorialB)(URL);
        case 6:
          _yield$GetHistorialB = _context.sent;
          historial_b = _yield$GetHistorialB.historial_b;
          historial_b_total = _yield$GetHistorialB.historial_b_total;
          PintarHistorialBTotal(historial_b_total);
          PintarHistorialB(historial_b);
          console.log('Se pinta el historial B');
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Historial(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var PintarHistorialB = function PintarHistorialB(HistorialB) {
  document.querySelector('#historial-b').innerHTML = '';
  var color_rgb_old = -1;
  var Color;
  var ColorRegistro = [];
  for (var I = 0; I < HistorialB.length; I += 1) {
    var RegistroH = HistorialB[I];
    var color_rgb = RegistroH.color_rgb;
    if (color_rgb != color_rgb_old) {
      Color = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_7__.ColorRGB)(color_rgb);
      var HSL = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_7__.GetHSL)(color_rgb);
      ColorRegistro[0] = "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_7__.PorcentajeL[0], "%)");
      ColorRegistro[1] = "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_7__.PorcentajeL[1], "%)");
      color_rgb_old = color_rgb;
    }
    var Historial_B_ = document.getElementById('historial-b');
    if (Historial_B_) {
      Historial_B_.innerHTML = Historial_B_.innerHTML + "<section class=\"grupo style\" id=\"grupo-".concat(RegistroH.grupo, "\">\n      <div class=\"cabeza\" style=\"background-color:").concat(Color, "\">\n        <input type=\"checkbox\" class=\"select_checkbox\" id=\"chk_").concat(RegistroH.grupo, "\">\n        <div class=\"checkbox\" id=\"c0_").concat(RegistroH.grupo, "\"><label for=\"chk_").concat(RegistroH.grupo, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-multiselect\"></use></svg></label></div>\n        <div class=\"idioma\" style=\"color:").concat(Color, "\"><span>").concat(RegistroH.idioma, "</span></div>\n        <div class=\"grow-sup\"></div>\n        <div class=\"nombre\" title=\"").concat(RegistroH.clase, " - ").concat(RegistroH.nombre_clase, "\"><span>").concat(RegistroH.nombre_proyecto, "</span></div>\n        <div class=\"total\" title=\"").concat(RegistroH.clase, " - ").concat(RegistroH.nombre_clase, "\"><span>").concat(RegistroH.total, "</span></div>\n        <div class=\"vacio\"></div>\n        <div class=\"info\" id=\"info-").concat(RegistroH.proyecto, "\"\n          ").concat(window.location.pathname.includes('registro') && 'title="Click para ver:\n ● Más períodos\n ● Información adicional"', "\n        >\n          <input type=\"checkbox\" name=\"\" id=\"info-check-").concat(I, "\" class=\"info-check menu-check\">\n          <label for=\"info-check-").concat(I, "\" class=\"info-label\">\n            <svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#semaforo-").concat(RegistroH.semaforo, "\"></use></svg>\n          </label>\n          <div class=\"menu-semaforo\" id=\"MenuSemaforo\">\n          <ul class=\"opciones\">\n            <li class=\"opcion-semaforo\" data-opcion=\"21\" id=\"ultimo-mes\">\xDAltimo Mes</li>\n            <li class=\"opcion-semaforo\" data-opcion=\"22\" id=\"ultimo-bimestre\">\xDAltimo bimestre</li>\n            <li class=\"opcion-semaforo\" data-opcion=\"23\" id=\"ultimo-trimestre\">\xDAltimo trimestre</li>\n            <li class=\"opcion-semaforo\" data-opcion=\"24\" id=\"ultimo-semestre\">\xDAltimo semestre</li>\n            <li class=\"opcion-semaforo\" data-opcion=\"25\" id=\"ultimo-ano\">\xDAltimo a\xF1o</li>\n            <li class=\"cliente\">\n              <input type=\"checkbox\" id=\"menu-semaforo-cliente\">\n              <span>Cliente</span>\n            </li>\n            <li id=\"informacion\">Informacion</li>\n          </ul>\n        </div>\n        </div>\n      </div>\n      <div class=\"cuerpo\" id=\"registros-").concat(RegistroH.grupo, "\"></div>\n    </section>\n    ");
    }
    document.getElementById("chk_".concat(RegistroH.grupo)).addEventListener('click', function (e) {
      ToggleCheckbox(e);
    });
    for (var J = 0; J < RegistroH.c_registros.length; J++) {
      var Registro = RegistroH.c_registros[J];
      var Registros_ = document.getElementById("registros-".concat(RegistroH.grupo));
      if (Registros_) {
        Registros_.innerHTML = Registros_.innerHTML + "\n        <div class=\"registro menuProyecto\" id=\"concepto-".concat(Registro.registro, "\" data-codigo_subclase=\"").concat(Registro.codigo_subclase, "\" data-usuario_revisor=\"").concat(Registro.usuario_revisor, "\" data-tipo_registro=\"").concat(Registro.tipo_registro, "\" style=\"background-color:").concat(ColorRegistro[J % 2], "\">\n          <div class=\"c1 estrella c0_").concat(RegistroH.grupo, "\" data-estado=\"").concat(Registro.c1, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c1").concat(Registro.c1, "\"></use></svg></div>\n          <div class=\"c2\" title=\"").concat(Registro.c2_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c2").concat(Registro.c2, "\"></use></svg></div>\n          <input type=\"checkbox\" name=\"\" id=\"concepto-check-").concat(J, "\" class=\"concepto-check menu-check\">\n          <button class=\"fecha menu-concepto\">\n            <label for=\"concepto-check-").concat(J, "\" class=\"menu-label\">\n              <span>").concat(Registro.fecha, "</span>\n            </label>\n          </button>\n          <div class=\"grow-inf menu-concepto\"></div>\n          <button class=\"descripcion menu-concepto\">\n            <label for=\"concepto-check-").concat(J, "\" class=\"menu-label\">\n              <span>").concat(Registro.descripcion, "</span>\n            </label>\n          </button>\n          <button class=\"subclase menu-concepto\">\n            <label for=\"concepto-check-").concat(J, "\" class=\"menu-label\">\n              <span>").concat(Registro.nombre_subclase, "</span>\n            </label>\n          </button>\n          <button class=\"cantidad menu-concepto\" title=\"").concat(Registro.castigo_hint, "\">\n            <label for=\"concepto-check-").concat(J, "\" class=\"menu-label\">\n              <span class=\"castigo-").concat(Registro.castigo, "\">").concat(Registro.cantidad, "</span>\n            </label>\n          </button>\n          <ul class=\"menu-registro\">\n            <button class=\"menu-registro__btn\">\n              <li class=\"menu-registro__item menu-registro__item--editar\" id-registro=\"concepto-").concat(Registro.registro, "\">\n                Editar\n              </li>\n            </button>\n            <button class=\"menu-registro__btn\">\n              <li class=\"menu-registro__item menu-registro__item--castigar\" id-registro=\"concepto-").concat(Registro.registro, "\">\n                Castigar\n              </li>\n            </button>\n          </ul>\n          <div class=\"c3\" title=\"").concat(Registro.c3_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c3").concat(Registro.c3, "\"></use></svg></div>\n          <div class=\"c4 log-registro-b\" title=\"").concat(Registro.c4_hint, "\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c4").concat(Registro.c4, "\"></use></svg></div>\n          <div class=\"revisor\"><span>").concat(Registro.iniciales_revisor, "</span></div>\n          <div class=\"c5 revision revision-hb cursor-pointer\" title=\"Estado de revisi\xF3n\"><svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c5").concat(Registro.c5, "\"></use></svg></div>\n        </div>\n      ");
      }
    }
  }
  document.querySelectorAll('.estrella').forEach(function (item) {
    return item.onclick = function (e) {
      EstrellaClick(e);
    };
  });
  document.querySelectorAll('.log-registro-b').forEach(function (item) {
    return item.onclick = function (e) {
      LogRegistro(e);
    };
  });
  document.querySelectorAll('.revision-hb').forEach(function (item) {
    return item.onclick = function (e) {
      RevisionClick(e);
    };
  });

  //NOTE: El historialB se utiliza en la revisión

  // [...document.getElementsByClassName('menu-concepto')].forEach((el) => {
  //   el.addEventListener('click', (e) => {
  //     let MitadX = Math.trunc(Math.min(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), 900) / 2);
  //     let position = {
  //       x: el.parentElement.offsetLeft + MitadX - 110, // 110 = la mitad del ancho del menú
  //       y: el.parentElement.offsetTop + 8,
  //     };
  //     CrearMenuHistorial(position, el.parentElement, 'menu-historial-b');
  //   });
  // });

  // Buscamos que cuando selecciones un menu desplegable los demas se oculten
  document.querySelectorAll('.info-check').forEach(function (item) {
    item.addEventListener('click', function (e) {
      return unchackeAll(e, '.info-check');
    });
  });
  document.querySelectorAll('.opcion-semaforo').forEach(function (opcion) {
    opcion.addEventListener('click', FilterHistorial);
  });
  document.querySelectorAll('.menu-check').forEach(function (item) {
    item.addEventListener('click', function (e) {
      return unchackeAll(e, '.menu-check');
    });
  });
  var unchackeAll = function unchackeAll(e, element) {
    if (e.target.checked === true) {
      document.querySelectorAll(element).forEach(function (item) {
        if (item.id !== e.target.id) {
          item.checked = false;
        }
      });
    }
  };
  document.querySelectorAll('.menu-registro__item--castigar').forEach(function (item) {
    item.addEventListener('click', function (e) {
      return (0,_utils_CastigarRegistro__WEBPACK_IMPORTED_MODULE_4__.CastigarRegistro)(item.getAttribute('id-registro'));
    });
  });
  document.querySelectorAll('.menu-registro__item--editar').forEach(function (item) {
    item.addEventListener('click', function (e) {
      return (0,_utils_EditarRegistro__WEBPACK_IMPORTED_MODULE_5__.EditarRegistro)(item.getAttribute('id-registro'));
    });
  });
};
var FilterHistorial = function FilterHistorial(e) {
  var Alcance = e.target.attributes[1].value;
  var ID = e.path[5].id.replace('grupo-', '');
  var Grupo = ID.substr(-4);
  ID.replace(Grupo, '');
  document.querySelectorAll('.opcion-semaforo').forEach(function (opcion) {
    return opcion.removeEventListener('click', FilterHistorial);
  });
  Historial(ID, Alcance);
};
var PintarHistorialBTotal = function PintarHistorialBTotal(HistorialBTotal) {
  document.getElementById('historial-b').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_8__.CreateElement)('SECTION', 'ContenedorTotal', ['contenedor-total']));
  var ID;
  var I = 0;
  HistorialBTotal.forEach(function (element) {
    ID = "Total".concat(I++);
    document.getElementById('ContenedorTotal').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_8__.CreateElement)('DIV', ID, ['contenedor-total__item']));
    document.getElementById(ID).style.color = "".concat((0,_utils_Color__WEBPACK_IMPORTED_MODULE_7__.ColorRGB)(element.color_rgb));
    document.getElementById(ID).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_8__.CreateElement)('SPAN', null, null, "".concat(element.nombre_clase)));
    document.getElementById(ID).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_8__.CreateElement)('SPAN', null, null, "".concat(element.total)));
  });
};
function ToggleCheckbox(e) {
  var Checkbox = e.delegateTarget;
  var N = Checkbox.id.substr(4, 100); // chk-NUMEROf
  if (Checkbox.checked) {
    document.querySelector(".c0_".concat(N)).innerHTML = '<input type="checkbox">';
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
function EstrellaClick(_x3) {
  return _EstrellaClick.apply(this, arguments);
}
function _EstrellaClick() {
  _EstrellaClick = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(e) {
    var Numero, _yield$GetData, numero_concepto, estado_estrella;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          e.stopPropagation();
          Numero = e.currentTarget.parentElement.id.substr(9, 100); // concepto-NUMERO
          _context3.next = 4;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GetData)('clickestrella', Numero, 'EstrellaClick');
        case 4:
          _yield$GetData = _context3.sent;
          numero_concepto = _yield$GetData.numero_concepto;
          estado_estrella = _yield$GetData.estado_estrella;
          document.querySelector("#concepto-".concat(numero_concepto, " .estrella")).getElementsByTagName('use')[0].setAttribute('xlink:href', "./img/sprite.svg#c1".concat(estado_estrella + 1));
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _EstrellaClick.apply(this, arguments);
}
function RevisionClick(_x4) {
  return _RevisionClick.apply(this, arguments);
}
function _RevisionClick() {
  _RevisionClick = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(e) {
    var Numero, _yield$GetData2, numero_concepto, estado_revision;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          e.stopPropagation();
          Numero = e.currentTarget.parentElement.id.substr(9, 100); // concepto-NUMERO
          _context4.next = 4;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GetData)('clickrevision', Numero, 'RevisionClick');
        case 4:
          _yield$GetData2 = _context4.sent;
          numero_concepto = _yield$GetData2.numero_concepto;
          estado_revision = _yield$GetData2.estado_revision;
          document.querySelector("#concepto-".concat(numero_concepto, " .revision")).getElementsByTagName('use')[0].setAttribute('xlink:href', "./img/sprite.svg#c5".concat(estado_revision));
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _RevisionClick.apply(this, arguments);
}
var LogRegistro = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
    var IDRegistro, _yield$import, logRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          IDRegistro = e.target.parentElement.id;
          _context2.next = 3;
          return __webpack_require__.e(/* import() */ 2749).then(__webpack_require__.bind(__webpack_require__, 2749));
        case 3:
          _yield$import = _context2.sent;
          logRegistro = _yield$import.logRegistro;
          logRegistro(IDRegistro);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function LogRegistro(_x5) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetGruposRevision: () => (/* binding */ GetGruposRevision),
/* harmony export */   GetHistorialB: () => (/* binding */ GetHistorialB),
/* harmony export */   GetInfoAdicionalAnexo: () => (/* binding */ GetInfoAdicionalAnexo),
/* harmony export */   GetInfoInicialAnexo: () => (/* binding */ GetInfoInicialAnexo),
/* harmony export */   GuardarInstruccionesRevisor: () => (/* binding */ GuardarInstruccionesRevisor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



var GetGruposRevision = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(PATH) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          URL = 'getgruposrevision';
          _context.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, PATH);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", {
            Grupos: data.grupos_revision
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function GetGruposRevision(_x) {
    return _ref.apply(this, arguments);
  };
}();
var GetInfoInicialAnexo = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ID) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          URL = 'getinfoinicialanexo';
          _context2.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, ID);
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", {
            clases: data.clases,
            instrucciones: data.instrucciones,
            observaciones: data.observaciones
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function GetInfoInicialAnexo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var GetInfoAdicionalAnexo = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(ID) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          URL = 'getinfoadicionalanexo';
          _context3.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, ID);
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", data.secciones);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function GetInfoAdicionalAnexo(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var GetHistorialB = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(PATH) {
    var URL, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          URL = 'historialb';
          _context4.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)(URL, PATH);
        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function GetHistorialB(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var GuardarInstruccionesRevisor = /*#__PURE__*/function () {
  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(ID, Instrucciones, Boton) {
    var URL, body, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          URL = 'guardarinstruccionesrevisor';
          body = {
            IDRegistro: ID,
            InstruccionesRevisor: Instrucciones,
            IDBoton: Boton
          };
          _context5.next = 4;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.PostData)(URL, body, 'Se produjo un error al guardar las instrucciones.');
        case 4:
          data = _context5.sent;
          return _context5.abrupt("return", data);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function GuardarInstruccionesRevisor(_x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ 3962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CastigarRegistro: () => (/* binding */ CastigarRegistro)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_historialB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5696);



var CastigarRegistro = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(IDRegistro) {
    var _yield$import, CastigarRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log(IDRegistro);
          _context.next = 3;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(1971)]).then(__webpack_require__.bind(__webpack_require__, 1971));
        case 3:
          _yield$import = _context.sent;
          CastigarRegistro = _yield$import.CastigarRegistro;
          CastigarRegistro(IDRegistro, _componentes_historialB__WEBPACK_IMPORTED_MODULE_1__.Historial);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function CastigarRegistro(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 6936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearMenuHistorial: () => (/* binding */ CrearMenuHistorial)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var CrearMenuHistorial = function CrearMenuHistorial(posicion, contenedorConcepto, clase) {
  if (!document.querySelector('.menu-historial')) {
    var Background = CreateElement('SECTION', 'menu-historial-background', ['menu-historial-background']);
    var menuHistorialB = CreateElement('UL', 'menu-historial', ['menu-historial', clase]);
    menuHistorialB.style.left = "".concat(posicion.x, "px");
    menuHistorialB.style.top = "".concat(posicion.y, "px");
    var editar = CreateElement('LI', null, ['menu-historial-item']);
    var imagenEditar = CreateElement('div', null, ['menu-historial-item-imagen']);
    imagenEditar.insertAdjacentHTML('beforeend', '<svg class="svg_img" viewBox="0 0 180 216"><use xlink:href="./img/sprite.svg#btn-editar"></use></svg>');
    var editarContenido = CreateElement('DIV', null, ['menu-historial-item-contenido'], 'Editar');
    editarContenido.insertAdjacentElement('afterbegin', imagenEditar);
    editar.appendChild(editarContenido);
    editar.addEventListener('click', function (e) {
      clickEditarRegistro(e.target.parentElement.parentElement);
    });
    var duplicar = CreateElement('LI', null, ['menu-historial-item']);
    var duplicarImagen = CreateElement('DIV', null, ['menu-historial-item-imagen']);
    duplicarImagen.insertAdjacentHTML('beforeend', '<svg class="svg_img" viewBox="0 0 580 580"><use xlink:href="./img/sprite.svg#btn-duplicar"></use></svg>');
    var duplicarContenido = CreateElement('DIV', null, ['menu-historial-item-contenido'], 'Duplicar');
    duplicarContenido.insertAdjacentElement('afterbegin', duplicarImagen);
    duplicar.appendChild(duplicarContenido);
    duplicar.addEventListener('click', function (e) {
      ClickDuplicar(e.target.parentElement.parentElement);
    });
    var eliminar = CreateElement('LI', null, ['menu-historial-item']);
    var eliminarImagen = CreateElement('DIV', null, ['menu-historial-item-imagen']);
    eliminarImagen.insertAdjacentHTML('beforeend', '<svg class="svg_img" viewBox="0 0 180 216"><use xlink:href="./img/sprite.svg#btn-eliminar"></use></svg>');
    var eliminarContenido = CreateElement('DIV', null, ['menu-historial-item-contenido'], 'Eliminar');
    eliminarContenido.insertAdjacentElement('afterbegin', eliminarImagen);
    eliminar.appendChild(eliminarContenido);
    eliminar.addEventListener('click', function (e) {
      clickEliminar(e.target.parentElement.parentElement);
    });
    var separador = CreateElement('DIV', null, ['menu-historial-separador']);
    editar.insertAdjacentElement('beforeend', separador);
    duplicar.insertAdjacentElement('beforeend', separador.cloneNode(true));
    menuHistorialB.appendChild(editar);
    menuHistorialB.appendChild(duplicar);
    if (clase === 'menu-historial-b') {
      var castigar = CreateElement('LI', null, ['menu-historial-item', 'menu-historial-item-castigar']);
      var castigarImagen = CreateElement('DIV', null, ['menu-historial-item-imagen']);
      castigarImagen.insertAdjacentHTML('beforeend', '<svg class="svg_img" viewBox="0 0 180 216"><use xlink:href="./img/sprite.svg#btn-castigar"></use></svg>');
      var castigarContenido = CreateElement('DIV', null, ['menu-historial-item-contenido'], 'Castigar');
      castigarContenido.insertAdjacentElement('afterbegin', castigarImagen);
      castigar.appendChild(castigarContenido);
      castigar.addEventListener('click', function (e) {
        clickCastigarRegistro(e.target.parentElement.parentElement);
        castigar.insertAdjacentElement('beforeend', separador.cloneNode(true));
      });
      menuHistorialB.appendChild(castigar);
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
};
function removerMenuBackGround(e) {
  if (e.target.classList.contains('menu-historial-background')) {
    document.querySelector('.menu-historial').remove();
    e.target.remove();
    document.getElementById('main').classList.remove('ocultar-scroll');
  }
}
function RemoverMenu() {
  document.querySelector('.menu-historial').remove();
  document.querySelector('.menu-historial-background').remove();
}

//NOTE: La forma en que se usan estos metodos indica que deberian existir los metoods CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB, pero no esta, no entiendo el
//funcionamiento de estos metodos, por lo que no puedo reemplazarlos.

var clickEditarRegistro = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
    var TipoRegistro, IDRegistro, CodigoSubclase, UsuarioRevisor, _yield$import, GetDatosRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          TipoRegistro = event.parentElement.dataset.tipo_registro;
          IDRegistro = event.parentElement.id;
          CodigoSubclase = event.parentElement.dataset.codigo_subclase;
          UsuarioRevisor = event.parentElement.dataset.usuario_revisor;
          _context.next = 6;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(912), __webpack_require__.e(8380), __webpack_require__.e(9158), __webpack_require__.e(9366)]).then(__webpack_require__.bind(__webpack_require__, 9158));
        case 6:
          _yield$import = _context.sent;
          GetDatosRegistro = _yield$import.GetDatosRegistro;
          // Shit, this is shit, really shit, help with this xD
          GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function clickEditarRegistro(_x) {
    return _ref.apply(this, arguments);
  };
}();
var ClickDuplicar = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(event) {
    var IDRegistro, _yield$import2, DuplicarRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          IDRegistro = event.parentElement.id;
          _context2.next = 3;
          return __webpack_require__.e(/* import() */ 2575).then(__webpack_require__.bind(__webpack_require__, 2575));
        case 3:
          _yield$import2 = _context2.sent;
          DuplicarRegistro = _yield$import2.DuplicarRegistro;
          DuplicarRegistro(IDRegistro, CargarHistorialA);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function ClickDuplicar(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var clickCastigarRegistro = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(event) {
    var IDRegistro, _yield$import3, CastigarRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          IDRegistro = event.parentElement.id;
          _context3.next = 3;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(1971)]).then(__webpack_require__.bind(__webpack_require__, 1971));
        case 3:
          _yield$import3 = _context3.sent;
          CastigarRegistro = _yield$import3.CastigarRegistro;
          CastigarRegistro(IDRegistro, CargarHistorialB);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function clickCastigarRegistro(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var clickEliminar = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(event) {
    var IDRegistro, _yield$import4, EliminarRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          IDRegistro = event.parentElement.id;
          _context4.next = 3;
          return __webpack_require__.e(/* import() */ 9974).then(__webpack_require__.bind(__webpack_require__, 9974));
        case 3:
          _yield$import4 = _context4.sent;
          EliminarRegistro = _yield$import4.EliminarRegistro;
          EliminarRegistro(IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, CargarHistorialB);
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function clickEliminar(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ 5397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarRegistro: () => (/* binding */ EditarRegistro)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_historialB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5696);


var CargarAvance = function CargarAvance() {},
  CargarHistoryBar = function CargarHistoryBar() {},
  CargarHistorialA = function CargarHistorialA() {};
// CargarHistorialB = () => console.log('aaa');


var EditarRegistro = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(IDRegistro) {
    var _document$querySelect, dataset, TipoRegistro, _yield$import, GetDatosRegistro;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _document$querySelect = document.querySelector("#".concat(IDRegistro)), dataset = _document$querySelect.dataset;
          TipoRegistro = dataset.tipo_registro;
          _context.next = 4;
          return Promise.all(/* import() */[__webpack_require__.e(8850), __webpack_require__.e(5836), __webpack_require__.e(912), __webpack_require__.e(8380), __webpack_require__.e(9158), __webpack_require__.e(9366)]).then(__webpack_require__.bind(__webpack_require__, 9158));
        case 4:
          _yield$import = _context.sent;
          GetDatosRegistro = _yield$import.GetDatosRegistro;
          GetDatosRegistro(TipoRegistro, IDRegistro, CargarAvance, CargarHistoryBar, CargarHistorialA, _componentes_historialB__WEBPACK_IMPORTED_MODULE_1__.Historial);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function EditarRegistro(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

}]);