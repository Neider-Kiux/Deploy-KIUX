"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[6936],{

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

/***/ })

}]);