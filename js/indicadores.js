/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API: () => (/* binding */ API),
/* harmony export */   CustomFetch: () => (/* binding */ CustomFetch),
/* harmony export */   GetData: () => (/* binding */ GetData),
/* harmony export */   PostData: () => (/* binding */ PostData),
/* harmony export */   URL_API: () => (/* binding */ URL_API)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4467);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3029);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2901);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CerrarSesion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1197);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7433);
/* harmony import */ var mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3061);
/* harmony import */ var _controladores_mqtt_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7331);




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





var URL_API = 'https://kiux.app/api';
//export const URL_API = 'https://kiux.app/apidev';

function CustomFetch(_x) {
  return _CustomFetch.apply(this, arguments);
}
function _CustomFetch() {
  _CustomFetch = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(MetodoREST_Parametros) {
    var Response, Datos;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch("".concat(URL_API, "/").concat(MetodoREST_Parametros));
        case 2:
          Response = _context4.sent;
          _context4.next = 5;
          return Response.json();
        case 5:
          Datos = _context4.sent;
          return _context4.abrupt("return", Datos);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _CustomFetch.apply(this, arguments);
}
var API = /*#__PURE__*/function () {
  function API() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(this, API);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(API, [{
    key: "GetData",
    value: function () {
      var _GetData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", fetch(url) //Este es el retorno para la funcion que estaria devolviendo una promesa
              .then(function (response) {
                return response.json();
              }).then(function (data) {
                return data; //Este es el retorno que se encabsulará en la promesa
              })["catch"](function (error) {
                return console.error('Error:', error);
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function GetData(_x2) {
        return _GetData.apply(this, arguments);
      }
      return GetData;
    }()
  }]);
}();
var GetData = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var MetodoREST,
      Parametros,
      NombreProceso,
      isModal,
      Token,
      URL_Request,
      Response,
      data,
      _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          MetodoREST = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
          Parametros = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : '';
          NombreProceso = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : '';
          isModal = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : false;
          _context2.prev = 4;
          Token = localStorage.getItem('Token');
          URL_Request = "".concat(URL_API, "/").concat(MetodoREST, "/").concat(Token, "/").concat(Parametros);
          _context2.next = 9;
          return fetch(URL_Request);
        case 9:
          Response = _context2.sent;
          _context2.next = 12;
          return Response.json();
        case 12:
          data = _context2.sent;
          if (data.new_token) localStorage.setItem('Token', data.new_token);
          if (!(data.result_code === 1)) {
            _context2.next = 21;
            break;
          }
          if (!isModal) {
            _context2.next = 17;
            break;
          }
          return _context2.abrupt("return", data);
        case 17:
          new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_5__.MostrarError(data.result_message, NombreProceso);
          return _context2.abrupt("return");
        case 21:
          if (data.result_code > 1000) {
            new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_5__.MostrarError(data.result_message, NombreProceso);
            (0,_utils_CerrarSesion__WEBPACK_IMPORTED_MODULE_6__.CerrarSesion)();
          }
        case 22:
          if (data.actualizar || MetodoREST == 'castigarregistro' || MetodoREST == 'registrarconcepto' || MetodoREST == 'eliminarregistro') {
            RevisarPeticionesRefrescar(MetodoREST, data, Parametros);
          }
          return _context2.abrupt("return", data);
        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](4);
          new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_5__.MostrarError(_context2.t0, NombreProceso);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 26]]);
  }));
  return function GetData() {
    return _ref.apply(this, arguments);
  };
}();
var PostData = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    var MetodoREST,
      body,
      NombreProceso,
      isModal,
      Token,
      URL_Request,
      Response,
      data,
      _args3 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          MetodoREST = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : '';
          body = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          NombreProceso = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : '';
          isModal = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
          _context3.prev = 4;
          Token = localStorage.getItem('Token');
          URL_Request = "".concat(URL_API, "/").concat(MetodoREST);
          _context3.next = 9;
          return fetch("".concat(URL_Request), {
            method: 'POST',
            body: JSON.stringify(_objectSpread({
              Token: "".concat(Token)
            }, body))
          });
        case 9:
          Response = _context3.sent;
          _context3.next = 12;
          return Response.json();
        case 12:
          data = _context3.sent;
          if (data.new_token) localStorage.setItem('Token', data.new_token);
          if (!(data.result_code === 1)) {
            _context3.next = 21;
            break;
          }
          if (!isModal) {
            _context3.next = 17;
            break;
          }
          return _context3.abrupt("return", data);
        case 17:
          new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_5__.MostrarError(data.result_message, NombreProceso);
          return _context3.abrupt("return");
        case 21:
          if (data.result_code > 1000) {
            new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_5__.MostrarError(data.result_message, NombreProceso);
            (0,_utils_CerrarSesion__WEBPACK_IMPORTED_MODULE_6__.CerrarSesion)();
          }
        case 22:
          if (data.actualizar || MetodoREST == 'castigarregistro' || MetodoREST == 'registrarconcepto' || MetodoREST == 'eliminarregistro') {
            RevisarPeticionesRefrescar(MetodoREST, data);
          }
          return _context3.abrupt("return", data);
        case 26:
          _context3.prev = 26;
          _context3.t0 = _context3["catch"](4);
          new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_5__.MostrarError(_context3.t0, NombreProceso);
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[4, 26]]);
  }));
  return function PostData() {
    return _ref2.apply(this, arguments);
  };
}();
function RevisarPeticionesRefrescar(MetodoRest, data) {
  var parametros = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var actualizar = '';
  switch (MetodoRest) {
    case 'castigarregistro':
      actualizar = 'hb';
      break;
    case 'registrarconcepto':
      actualizar = 'avp.avd.hB.ha.hb';
      break;
    case 'eliminarregistro':
      if (parametros.includes('concepto')) {
        actualizar = 'avp.avd.hb.hB';
      }
      if (parametros.includes('preconcepto')) {
        actualizar = 'ha';
      }
  }
  if (data.actualizar) actualizar += data.actualizar;
  if (actualizar) {
    (0,_controladores_mqtt_actions__WEBPACK_IMPORTED_MODULE_3__.enviarMQTT)("".concat(localStorage.getItem('NombreEmpresaModificado'), "/").concat(localStorage.getItem('NombreUserModificado'), "/refs"), "{\"refrescar\": \"".concat(actualizar, "\",\"IdVentana\": \"").concat(window.name, "\", \"msg\": \"Hay que refrescar lo siguiente: ").concat(data.actualizar, "\"}"));
  }
}

/***/ }),

/***/ 423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Encabezado: () => (/* binding */ Encabezado)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/img/actualizar-icon--activo.svg
/* harmony default export */ const actualizar_icon_activo = (__webpack_require__.p + "img/actualizar-icon--activo.svg");
;// CONCATENATED MODULE: ./src/img/actualizar-icon.svg
/* harmony default export */ const actualizar_icon = (__webpack_require__.p + "img/actualizar-icon.svg");
;// CONCATENATED MODULE: ./src/img/avance-d.svg
/* harmony default export */ const avance_d = (__webpack_require__.p + "img/avance-d.svg");
;// CONCATENATED MODULE: ./src/img/avance-p.svg
/* harmony default export */ const avance_p = (__webpack_require__.p + "img/avance-p.svg");
;// CONCATENATED MODULE: ./src/img/btn-eliminar-disable.svg
/* harmony default export */ const btn_eliminar_disable = (__webpack_require__.p + "img/btn-eliminar-disable.svg");
;// CONCATENATED MODULE: ./src/img/btn-eliminar.svg
/* harmony default export */ const btn_eliminar = (__webpack_require__.p + "img/btn-eliminar.svg");
;// CONCATENATED MODULE: ./src/img/btn-restablecer-disable.svg
/* harmony default export */ const btn_restablecer_disable = (__webpack_require__.p + "img/btn-restablecer-disable.svg");
;// CONCATENATED MODULE: ./src/img/btn-restablecer.svg
/* harmony default export */ const btn_restablecer = (__webpack_require__.p + "img/btn-restablecer.svg");
// EXTERNAL MODULE: ./src/img/cambiar-disabled.svg
var cambiar_disabled = __webpack_require__(8221);
;// CONCATENATED MODULE: ./src/img/cambiar-password-icon--activo.svg
/* harmony default export */ const cambiar_password_icon_activo = (__webpack_require__.p + "img/cambiar-password-icon--activo.svg");
;// CONCATENATED MODULE: ./src/img/cambiar-password-icon.svg
/* harmony default export */ const cambiar_password_icon = (__webpack_require__.p + "img/cambiar-password-icon.svg");
// EXTERNAL MODULE: ./src/img/cambiar.svg
var cambiar = __webpack_require__(216);
;// CONCATENATED MODULE: ./src/img/campana-1.svg
/* harmony default export */ const campana_1 = (__webpack_require__.p + "img/campana-1.svg");
;// CONCATENATED MODULE: ./src/img/campana-2.svg
/* harmony default export */ const campana_2 = (__webpack_require__.p + "img/campana-2.svg");
;// CONCATENATED MODULE: ./src/img/cuenta-usuario-icon--activo.svg
/* harmony default export */ const cuenta_usuario_icon_activo = (__webpack_require__.p + "img/cuenta-usuario-icon--activo.svg");
;// CONCATENATED MODULE: ./src/img/cuenta-usuario-icon.svg
/* harmony default export */ const cuenta_usuario_icon = (__webpack_require__.p + "img/cuenta-usuario-icon.svg");
// EXTERNAL MODULE: ./src/img/delete-1-svgrepo-com.svg
var delete_1_svgrepo_com = __webpack_require__(4935);
;// CONCATENATED MODULE: ./src/img/favicon.ico
/* harmony default export */ const favicon = (__webpack_require__.p + "img/favicon.ico");
;// CONCATENATED MODULE: ./src/img/grafica-avance-icon.svg
/* harmony default export */ const grafica_avance_icon = (__webpack_require__.p + "img/grafica-avance-icon.svg");
;// CONCATENATED MODULE: ./src/img/help-icon--activo.svg
/* harmony default export */ const help_icon_activo = (__webpack_require__.p + "img/help-icon--activo.svg");
;// CONCATENATED MODULE: ./src/import-images.js




















// EXTERNAL MODULE: ./src/js/elements/htmlElements.js
var htmlElements = __webpack_require__(2407);
// EXTERNAL MODULE: ./src/js/utils/ToggleNombre.js
var ToggleNombre = __webpack_require__(426);
// EXTERNAL MODULE: ./src/js/registro/modal/suplantar-off.js
var suplantar_off = __webpack_require__(6435);
// EXTERNAL MODULE: ./src/js/utils/BotonesActivos.js
var BotonesActivos = __webpack_require__(9850);
// EXTERNAL MODULE: ./src/js/utils/revisarNotificaciones.js
var revisarNotificaciones = __webpack_require__(2829);
// EXTERNAL MODULE: ./src/js/controladores/mqtt-actions.js
var mqtt_actions = __webpack_require__(7331);
;// CONCATENATED MODULE: ./src/js/componentes/encabezado.js









(0,mqtt_actions.configurarMQTT)();
function Encabezado() {
  // Menú principal
  (0,ToggleNombre.ToggleNombre)(document.getElementById('NombreUsuario'));
  document.getElementById('NombreUsuario').dataset.codigo = localStorage.getItem('CodigoUsuario');
  document.getElementById('NombreUsuario').dataset.orden = localStorage.getItem('OrdenUsuario');
  window.addEventListener('resize', function () {
    (0,ToggleNombre.ToggleNombre)(document.getElementById('NombreUsuario'));
  });
  var SuplantarUsuario = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _yield$import, listadoSuplantar;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/* import() */ 5924).then(__webpack_require__.bind(__webpack_require__, 5924));
          case 2:
            _yield$import = _context.sent;
            listadoSuplantar = _yield$import.listadoSuplantar;
            listadoSuplantar();
            // TimeoutHistorial = 0; OJO - confirmar si se elimina esta instrucción
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function SuplantarUsuario() {
      return _ref.apply(this, arguments);
    };
  }();
  if (JSON.parse(localStorage.getItem('PuedeSuplantar'))) {
    document.getElementById('NombreUsuario').addEventListener('click', function () {
      SuplantarUsuario();
    });
    document.getElementById('NombreUsuario').classList.add('puede-suplantar');
  }
  if (JSON.parse(localStorage.getItem('Suplantando'))) {
    document.getElementById('NombreUsuario').insertAdjacentElement('afterend', (0,htmlElements.CreateElement)('DIV', 'SuplantarOff', ['suplantar-off']));
    document.getElementById('SuplantarOff').addEventListener('click', suplantar_off.SuplantarOFF);
  }
  (0,BotonesActivos.BotonesActivos)();
  var BotonMenuPpal = document.getElementById('BotonMenuPpal');
  BotonMenuPpal.addEventListener('click', /*#__PURE__*/(0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
    var _yield$import2, menuPpal;
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.e(/* import() */ 6517).then(__webpack_require__.bind(__webpack_require__, 6517));
        case 2:
          _yield$import2 = _context2.sent;
          menuPpal = _yield$import2.menuPpal;
          menuPpal(BotonMenuPpal);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  var NombreEmpresa = localStorage.getItem('NombreEmpresa');
  document.getElementById('NombreEmpresa').textContent = NombreEmpresa ? NombreEmpresa : 'Nombre de empresa';
  var CampanaNotificacion = document.getElementById('CampanaNotificacion');
  CampanaNotificacion.classList.add('campana-notificacion--no-after');
  CampanaNotificacion.style.backgroundImage = "url('/img/campana-1.svg')";
  (0,revisarNotificaciones.revisarNotificaciones)();

  //TODO: Agregar la funcion en el backend para lansar la señal de revisar las notificaciones
  // setInterval(() => {
  //   revisarNotificaciones();
  // }, 600000);

  var nombreArchivo = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1).split('.').slice(0, -1).join('.');
  if (!nombreArchivo) {
    nombreArchivo = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
  }
  sessionStorage.setItem('Ubicación', nombreArchivo);

  //TODO: Mientras las personas no pasen por el ingreso a la cuenta no se agregaran los datos necesarios para mqtt, por lo que se hace aca mientras tanto
  //TODO: Tambien se deben consultar de la base de datos
  if (!localStorage.setItem('NombreUserModificado', 'user1')) localStorage.setItem('NombreUserModificado', 'user1');
  if (!localStorage.setItem('NombreEmpresaModificado', 'testK1')) localStorage.setItem('NombreEmpresaModificado', 'testK1');
  CampanaNotificacion.onclick = /*#__PURE__*/(0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
    var _yield$import3, ModalNotificaciones;
    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return __webpack_require__.e(/* import() */ 8455).then(__webpack_require__.bind(__webpack_require__, 8455));
        case 2:
          _yield$import3 = _context3.sent;
          ModalNotificaciones = _yield$import3.ModalNotificaciones;
          ModalNotificaciones();
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
}

/***/ }),

/***/ 7433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarError: () => (/* binding */ MostrarError),
/* harmony export */   MostrarErrorRuta: () => (/* binding */ MostrarErrorRuta),
/* harmony export */   MostrarMensajeError: () => (/* binding */ MostrarMensajeError),
/* harmony export */   MostrarSalirSinGuardar: () => (/* binding */ MostrarSalirSinGuardar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6822);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3954);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5361);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3029);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2901);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4467);
/* harmony import */ var _elements_CrearElementoHTML__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3384);






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var MostrarError = /*#__PURE__*/function () {
  function MostrarError(error, mensaje, contenedor) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, MostrarError);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "error", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "mensaje", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "background", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "recipiente", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "contenedor", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "error_mensaje", void 0);
    this.error = error;
    this.mensaje = mensaje;
    this.contenedor = contenedor ? contenedor : document.body;
    if (contenedor || !document.getElementById('background') && !document.getElementById('second-background')) {
      this.InnerMessage();
      this.BuildBackground();
      this.BuilRecipient();
      this.AddMessage();
      this.AddComponents();
    }
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(MostrarError, [{
    key: "BuildBackground",
    value: function BuildBackground() {
      document.querySelector('main').classList.add('ocultar-scroll');
      this.background = new _elements_CrearElementoHTML__WEBPACK_IMPORTED_MODULE_5__.CrearElementoHTML('DIV', 'background', 'background').getElement();
    }
  }, {
    key: "BuilRecipient",
    value: function BuilRecipient() {
      var _this = this;
      this.recipiente = new _elements_CrearElementoHTML__WEBPACK_IMPORTED_MODULE_5__.CrearElementoHTML('DIV', null, 'error').getElement();
      this.recipiente.addEventListener('click', function () {
        _this.CloseMessage();
      });
    }
  }, {
    key: "InnerMessage",
    value: function InnerMessage() {
      this.error_mensaje = "<p>".concat(this.error, "</p>").concat(this.mensaje ? "<p class=\"error__origen\">Proceso: ".concat(this.mensaje, "</p>") : '', "<span class=\"error__close\">&#x274C;</span>");
    }
  }, {
    key: "AddMessage",
    value: function AddMessage() {
      this.recipiente.appendChild(new _elements_CrearElementoHTML__WEBPACK_IMPORTED_MODULE_5__.CrearElementoHTML('DIV', null, 'error__mensaje', null, this.error_mensaje).getElement());
    }
  }, {
    key: "AddComponents",
    value: function AddComponents() {
      this.background.appendChild(this.recipiente);
      this.contenedor.appendChild(this.background);
    }
  }, {
    key: "CloseMessage",
    value: function CloseMessage() {
      this.background.remove();
      document.querySelector('main').classList.remove('ocultar-scroll');
    }
  }]);
}();
var MostrarErrorRuta = /*#__PURE__*/function (_MostrarError2) {
  function MostrarErrorRuta(error, mensaje) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, MostrarErrorRuta);
    return _callSuper(this, MostrarErrorRuta, [error, mensaje]);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(MostrarErrorRuta, _MostrarError2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(MostrarErrorRuta, [{
    key: "InnerMessage",
    value: function InnerMessage() {
      this.error_mensaje = "<p>".concat(this.error, "</p>").concat(this.mensaje ? "<p class=\"error__origen\">".concat(this.mensaje, "</p>") : '', "<span class=\"error__close\">&#x274C;</span>");
    }
  }]);
}(MostrarError);
var MostrarMensajeError = /*#__PURE__*/function (_MostrarError3) {
  function MostrarMensajeError(contenedor, message, tipo) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, MostrarMensajeError);
    return _callSuper(this, MostrarMensajeError, [message, tipo, contenedor]);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(MostrarMensajeError, _MostrarError3);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(MostrarMensajeError, [{
    key: "BuildBackground",
    value: function BuildBackground() {}
  }, {
    key: "AddComponents",
    value: function AddComponents() {
      this.contenedor.appendChild(this.recipiente);
    }
  }, {
    key: "CloseMessage",
    value: function CloseMessage() {
      this.recipiente.remove();
      if (document.getElementById('descripcion') != null) {
        document.getElementById('descripcion').focus();
      }
    }
  }]);
}(MostrarError);
var MostrarSalirSinGuardar = /*#__PURE__*/function (_MostrarError4) {
  function MostrarSalirSinGuardar(contenedor, message, funcionCerrar) {
    var _this2;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, MostrarSalirSinGuardar);
    _this2 = _callSuper(this, MostrarSalirSinGuardar, [message, null, contenedor]);
    _this2.funcionCerrar = funcionCerrar;
    return _this2;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(MostrarSalirSinGuardar, _MostrarError4);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(MostrarSalirSinGuardar, [{
    key: "InnerMessage",
    value: function InnerMessage() {
      this.error_mensaje = "<p>".concat(this.error, "</p><div class=\"button-container\"><button class=\"modal-cancelar\">No</button><button class=\"modal-aceptar\">Si</button></div>");
    }
  }, {
    key: "BuildBackground",
    value: function BuildBackground() {
      this.background = new _elements_CrearElementoHTML__WEBPACK_IMPORTED_MODULE_5__.CrearElementoHTML('DIV', 'second-background', 'background').getElement();
    }
  }, {
    key: "BuilRecipient",
    value: function BuilRecipient() {
      this.recipiente = new _elements_CrearElementoHTML__WEBPACK_IMPORTED_MODULE_5__.CrearElementoHTML('DIV', null, 'error').getElement();
    }
  }, {
    key: "AddComponents",
    value: function AddComponents() {
      var _this3 = this;
      this.background.appendChild(this.recipiente);
      this.contenedor.appendChild(this.background);
      var Cancelar = document.querySelector('.modal-cancelar');
      var Aceptar = document.querySelector('.modal-aceptar');
      Cancelar.addEventListener('click', function () {
        _this3.background.remove();
      });
      Aceptar.addEventListener('click', function () {
        return _this3.funcionCerrar();
      });
    }
  }]);
}(MostrarError);

/***/ }),

/***/ 7331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configurarMQTT: () => (/* binding */ configurarMQTT),
/* harmony export */   enviarMQTT: () => (/* binding */ enviarMQTT)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mqtt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3061);
/* harmony import */ var _utils_revisarNotificaciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2829);




//import {RefrescarHistoriales} from '../pages/registro/registro';

if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}
var host = 'broker.emqx.io';
var topicoBase = localStorage.getItem('NombreEmpresaModificado');
var topicoUser = localStorage.getItem('NombreUserModificado');
var topicoRevisarNotificaciones = 'revnot';
var refrescar = 'refs';
var options = {
  clean: true
};
function configurarMQTT() {
  var client = mqtt__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.connect("wss://".concat(host, ":8084/mqtt"), options);
  client.on('connect', function () {
    client.subscribe("".concat(topicoBase, "/").concat(topicoUser, "/#"), function (err) {
      if (!err) console.log('MQTT subscription successful');
    });
    client.subscribe('testk', function (err) {
      console.log('MQTT subscription successful all');
    });
  });
  client.on('message', function (topic, message) {
    procesarMQTT(topic, message);
  });
}
function enviarMQTT(topics, message) {
  var client = mqtt__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.connect("wss://".concat(host, ":8084/mqtt"), options);
  client.publish(topics, message, {
    qos: 0,
    retain: false
  }, function (error) {
    if (error) console.log(error + " Error al publicar");
  });
}
function procesarMQTT(_x, _x2) {
  return _procesarMQTT.apply(this, arguments);
}
function _procesarMQTT() {
  _procesarMQTT = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(topic, message) {
    var mensajeJSON, _yield$import, RefrescarHistoriales;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          mensajeJSON = '';
          try {
            mensajeJSON = JSON.parse(message.toString());
          } catch (_unused) {
            console.log("El mensaje no esta en formato JSON: \t ".concat(message));
          }
          if (!mensajeJSON) {
            _context.next = 22;
            break;
          }
          _context.t0 = topic;
          _context.next = _context.t0 === "".concat(topicoBase, "/").concat(topicoUser, "/").concat(topicoRevisarNotificaciones) ? 6 : _context.t0 === "".concat(topicoBase, "/").concat(topicoUser, "/").concat(refrescar) ? 10 : 22;
          break;
        case 6:
          console.log(topic);
          (0,_utils_revisarNotificaciones__WEBPACK_IMPORTED_MODULE_2__.revisarNotificaciones)();
          mostrarNotificación(mensajeJSON, 'Se revisaran las notificaciones');
          return _context.abrupt("break", 22);
        case 10:
          if (!(sessionStorage.getItem('Ubicación') == 'registro')) {
            _context.next = 22;
            break;
          }
          _context.prev = 11;
          _context.next = 14;
          return Promise.all(/* import() */[__webpack_require__.e(912), __webpack_require__.e(8380), __webpack_require__.e(7044), __webpack_require__.e(4102), __webpack_require__.e(1641)]).then(__webpack_require__.bind(__webpack_require__, 1641));
        case 14:
          _yield$import = _context.sent;
          RefrescarHistoriales = _yield$import.RefrescarHistoriales;
          if (window.name != mensajeJSON.IdVentana) {
            RefrescarHistoriales(mensajeJSON.refrescar);
          }
          _context.next = 22;
          break;
        case 19:
          _context.prev = 19;
          _context.t1 = _context["catch"](11);
          console.error('Error al pedir refrescar');
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[11, 19]]);
  }));
  return _procesarMQTT.apply(this, arguments);
}
function mostrarNotificación(mensaje) {
  var adicional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (Notification.permission == 'granted') {
    new Notification(mensaje.title, {
      body: mensaje.msg + ' ' + adicional,
      icon: mensaje.icon ? mensaje.icon : ''
    });
  }
}
(function asignarNombreVentana() {
  if (!window.name) {
    var IDUnico = "window_".concat(Math.random().toString(36).slice(2)).concat(Math.random().toString(36).slice(2));
    window.name = IDUnico;
  }
})();

/***/ }),

/***/ 3384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearElementoHTML: () => (/* binding */ CrearElementoHTML),
/* harmony export */   CrearElementoHTML_A: () => (/* binding */ CrearElementoHTML_A),
/* harmony export */   CrearElementoHTML_Button: () => (/* binding */ CrearElementoHTML_Button),
/* harmony export */   CrearElementoHTML_Imagen: () => (/* binding */ CrearElementoHTML_Imagen),
/* harmony export */   CrearElementoHTML_Input: () => (/* binding */ CrearElementoHTML_Input),
/* harmony export */   CrearElementoHTML_Option: () => (/* binding */ CrearElementoHTML_Option),
/* harmony export */   CrearElementoHTML_Select: () => (/* binding */ CrearElementoHTML_Select),
/* harmony export */   CrearElementoHTML_Text: () => (/* binding */ CrearElementoHTML_Text)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6822);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3954);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5361);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3029);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2901);





function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CrearElementoHTML = /*#__PURE__*/function () {
  function CrearElementoHTML(tagName, id, classList, style, innerHTML, title) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML);
    this.elemento = document.createElement(tagName);
    if (id) this.elemento.id = id;
    if (classList) this.elemento.classList = classList;
    if (style) this.elemento.style = style;
    if (innerHTML) this.elemento.innerHTML = innerHTML;
    if (title) this.elemento.title = title;
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML, [{
    key: "getElement",
    value: function getElement() {
      return this.elemento;
    }
  }]);
}();
var CrearElementoHTML_Imagen = /*#__PURE__*/function (_CrearElementoHTML) {
  function CrearElementoHTML_Imagen(src, alt, id, classList, style, innerHTML, title) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML_Imagen);
    _this = _callSuper(this, CrearElementoHTML_Imagen, ['IMG', id, classList, style, innerHTML, title]);
    if (!src) console.error('Debe proporcionar el atributo src');else _this.elemento.src = src;
    if (alt) _this.elemento.alt = alt;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CrearElementoHTML_Imagen, _CrearElementoHTML);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML_Imagen);
}(CrearElementoHTML);
var CrearElementoHTML_A = /*#__PURE__*/function (_CrearElementoHTML2) {
  function CrearElementoHTML_A(href, target, id, classList, style, innerHTML, title) {
    var _this2;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML_A);
    _this2 = _callSuper(this, CrearElementoHTML_A, ['A', id, classList, style, innerHTML, title]);
    if (!href) console.error('Debe proporcionar el atriburo href');else {
      _this2.elemento.href = href;
      if (target) _this2.elemento.target = target /*'_blank'*/;
    }
    return _this2;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CrearElementoHTML_A, _CrearElementoHTML2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML_A);
}(CrearElementoHTML);
var CrearElementoHTML_Text = /*#__PURE__*/function (_CrearElementoHTML3) {
  function CrearElementoHTML_Text(tagName, text, id, classList, style, innerHTML, title) {
    var _this3;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML_Text);
    _this3 = _callSuper(this, CrearElementoHTML_Text, [tagName, id, classList, style, innerHTML, title]);
    if (!text) _this3.elemento.innerHTML = '';else _this3.elemento.innerHTML = text;
    return _this3;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CrearElementoHTML_Text, _CrearElementoHTML3);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML_Text);
}(CrearElementoHTML);
var CrearElementoHTML_Option = /*#__PURE__*/function (_CrearElementoHTML4) {
  function CrearElementoHTML_Option(value, id, classList, style, innerHTML, title) {
    var _this4;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML_Option);
    _this4 = _callSuper(this, CrearElementoHTML_Option, ['OPTION', id, classList, style, innerHTML, title]);
    _this4.elemento.value = value;
    return _this4;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CrearElementoHTML_Option, _CrearElementoHTML4);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML_Option);
}(CrearElementoHTML);
var CrearElementoHTML_Select = /*#__PURE__*/function (_CrearElementoHTML5) {
  function CrearElementoHTML_Select(OptionList, name, id, classList, style, innerHTML, title) {
    var _this5;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML_Select);
    _this5 = _callSuper(this, CrearElementoHTML_Select, ['SELECT', id, classList, style, innerHTML, title]);
    _this5.elemento.name = name;
    var PrimeraOpcion = new CrearElementoHTML('Option', null, null, 'display: none').getElement();
    PrimeraOpcion.value = 'primeraOpcion';
    _this5.elemento.appendChild(PrimeraOpcion);
    OptionList.forEach(function (optionValue) {
      var option = new CrearElementoHTML('OPTION').getElement();
      option.value = optionValue;
      option.innerHTML = optionValue;
      _this5.elemento.appendChild(option);
    });
    return _this5;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CrearElementoHTML_Select, _CrearElementoHTML5);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML_Select);
}(CrearElementoHTML);
var CrearElementoHTML_Input = /*#__PURE__*/function (_CrearElementoHTML6) {
  function CrearElementoHTML_Input(type, id, classList, style, innerHTML, title) {
    var _this6;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML_Input);
    _this6 = _callSuper(this, CrearElementoHTML_Input, ['INPUT', id, classList, style, innerHTML, title]);
    _this6.elemento.type = type;
    return _this6;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CrearElementoHTML_Input, _CrearElementoHTML6);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML_Input);
}(CrearElementoHTML);
var CrearElementoHTML_Button = /*#__PURE__*/function (_CrearElementoHTML7) {
  function CrearElementoHTML_Button(disabled, id, classList, style, innerHTML, title) {
    var _this7;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, CrearElementoHTML_Button);
    _this7 = _callSuper(this, CrearElementoHTML_Button, ['BUTTON', id, classList, style, innerHTML, title]);
    if (disabled) _this7.elemento.disabled = true;
    return _this7;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CrearElementoHTML_Button, _CrearElementoHTML7);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(CrearElementoHTML_Button);
}(CrearElementoHTML);

/***/ }),

/***/ 2407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateElement: () => (/* binding */ CreateElement),
/* harmony export */   Selector: () => (/* binding */ Selector),
/* harmony export */   inputElement: () => (/* binding */ inputElement),
/* harmony export */   labelElement: () => (/* binding */ labelElement),
/* harmony export */   optionElement: () => (/* binding */ optionElement)
/* harmony export */ });
function CreateElement() {
  for (var _len = arguments.length, arrayArguments = new Array(_len), _key = 0; _key < _len; _key++) {
    arrayArguments[_key] = arguments[_key];
  }
  // document.createElement - crea un elemento nodo tipo HTML
  var elementNode = document.createElement(arrayArguments[0]);
  if (arrayArguments[1] != null || arrayArguments[1] != undefined) {
    // setAttribute - Agrega el atributo especificado
    elementNode.setAttribute('id', arrayArguments[1]);
    // if (arrayArguments[1] == arrayArguments[1].toLowerCase())
    //   console.log('Minúsculas = ', arrayArguments[1]);
    // else
    //   console.log('NO Minúsculas = ', arrayArguments[1]);
  }
  if (arrayArguments[2] != null || arrayArguments[2] != undefined) {
    // el metodo .map() itera sobre un array pasando un callback sobre cada elemento
    arrayArguments[2].map(function (valor) {
      // El metodo classList.add() agrega una clase a un nodo te tipo HTML
      elementNode.classList.add(valor);
    });
  }
  if (arrayArguments[3] != null || arrayArguments[3] != undefined) {
    // document.createTextNode - crea un elemento nodo tipo Texto
    var textNode = document.createTextNode(arrayArguments[3]);
    // El metodo .appendChild(); inserta un nodo al elemento especificado
    elementNode.appendChild(textNode);
  }
  if (arrayArguments[4] != null || arrayArguments[4] != undefined) {
    // setAttribute - Agrega el atributo especificado
    elementNode.setAttribute('value', arrayArguments[4]);
  }
  if (arrayArguments[5] != null || arrayArguments[5] != undefined) {
    // setAttribute - Agrega el atributo especificado
    elementNode.setAttribute('autofocus', 'autofocus');
  }
  if (arrayArguments[6] != null || arrayArguments[6] != undefined) {
    // setAttribute - Agrega el atributo especificado
    elementNode.setAttribute('xlink:href', arrayArguments[6]);
  }
  if (arrayArguments[7] != null || arrayArguments[7] != undefined) {
    // setAttribute - Agrega el atributo especificado
    elementNode.setAttribute('src', arrayArguments[7]);
  }
  if (arrayArguments[8] != null || arrayArguments[8] != undefined) {
    // setAttribute - Agrega el atributo especificado
    // Boolean
    elementNode.setAttribute('contenteditable', arrayArguments[8]);
  }
  if (arrayArguments[9] != null || arrayArguments[9] != undefined) {
    // setAttribute - Agrega el atributo especificado
    // Boolean
    elementNode.setAttribute('spellcheck', arrayArguments[9]);
  }
  if (arrayArguments[10] != null || arrayArguments[10] != undefined) {
    // setAttribute - Agrega el atributo especificado
    // data-value="[valor]"
    elementNode.setAttribute('data-value', arrayArguments[10]);
  }
  if (arrayArguments[11] != null || arrayArguments[11] != undefined) {
    elementNode.setAttribute('title', arrayArguments[11]);
  }
  // returnando el valor final del elemento creado
  return elementNode;
  // CreateElement(nodeElement, id, ['className' ...], nodeText).
  /**
   * nodeElement --> Elemento de HTML a crear ('div', 'p').
   * nodeText --> Texto a insertar.
   * id --> id del elemento
   * Opcional
   * Array de string con nombres de clases
   */
}
function Selector() {
  for (var _len2 = arguments.length, arrayArguments = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arrayArguments[_key2] = arguments[_key2];
  }
  // Type nodeElement
  var elementNode = document.createElement(arrayArguments[0]);
  // ID
  if (arrayArguments[1] != null || arrayArguments[1] != undefined) {
    elementNode.setAttribute('id', arrayArguments[1]);
    // if (arrayArguments[1] == arrayArguments[1].toLowerCase())
    //   console.log('Minúsculas = ', arrayArguments[1]);
    // else
    //   console.log('NO Minúsculas = ', arrayArguments[1]);
  }
  // Class
  if (arrayArguments[2] != null || arrayArguments[2] != undefined) {
    arrayArguments[2].map(function (valor) {
      elementNode.classList.add(valor);
    });
  }
  // Type nodeText
  if (arrayArguments[3] != null || arrayArguments[3] != undefined) {
    var textNode = document.createTextNode(arrayArguments[3]);
    elementNode.appendChild(textNode);
  }
  // Attribute data-[valor]
  if (arrayArguments[4] != null || arrayArguments[4] != undefined) {
    elementNode.setAttribute('data-orden', arrayArguments[4]);
  }
  if (arrayArguments[5] != null || arrayArguments[5] != undefined) {
    elementNode.setAttribute('data-clase', arrayArguments[5]);
  }
  if (arrayArguments[6] != null || arrayArguments[6] != undefined) {
    elementNode.setAttribute('data-codigo', arrayArguments[6]);
  }
  if (arrayArguments[7] != null || arrayArguments[7] != undefined) {
    elementNode.setAttribute('data-item', arrayArguments[7]);
  }
  if (arrayArguments[8] != null || arrayArguments[8] != undefined) {
    elementNode.setAttribute('data-ordinal_revisor', arrayArguments[8]);
  }
  if (arrayArguments[9] != null || arrayArguments[9] != undefined) {
    elementNode.setAttribute('data-ordinal_idioma', arrayArguments[9]);
  }
  return elementNode;
}
function inputElement() {
  var inputElement = document.createElement('INPUT');
  // Tipo del input
  for (var _len3 = arguments.length, arrayArguments = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    arrayArguments[_key3] = arguments[_key3];
  }
  inputElement.setAttribute('type', arrayArguments[0]);
  // Id del elemento
  if (arrayArguments[1] != null || arrayArguments[1] != undefined) {
    inputElement.setAttribute('id', arrayArguments[1]);
    // if (arrayArguments[1] == arrayArguments[1].toLowerCase())
    //   console.log('Minúsculas = ', arrayArguments[1]);
    // else
    //   console.log('NO Minúsculas = ', arrayArguments[1]);
  }
  // Class del elemento
  if (arrayArguments[2] != null || arrayArguments[2] != undefined) {
    arrayArguments[2].map(function (valor) {
      inputElement.classList.add(valor);
    });
  }
  // Valor del elemento
  if (arrayArguments[3] != null || arrayArguments[3] != undefined) {
    inputElement.setAttribute('value', arrayArguments[3]);
  }
  if (arrayArguments[4] != null || arrayArguments[4] != undefined) {
    inputElement.setAttribute('readonly', arrayArguments[4]);
  }
  if (arrayArguments[5] != null || arrayArguments[5] != undefined) {
    inputElement.setAttribute('maxlength', arrayArguments[5]);
  }
  // Placeholder
  if (arrayArguments[6] != null || arrayArguments[6] != undefined) {
    inputElement.setAttribute('placeholder', arrayArguments[6]);
  }
  // Placeholder
  if (arrayArguments[7] != null || arrayArguments[7] != undefined) {
    inputElement.setAttribute('autocomplete', arrayArguments[7]);
  } else {
    // autocomplete="off" deshabilita el autocompletado.
    inputElement.setAttribute('autocomplete', 'off');
  }
  return inputElement;
}
function optionElement() {
  // document.createElement('HTMLElementOption') - crea un elemento de html <option>;
  var optionElement = document.createElement('OPTION');
  // variable textValue que sera utilizada mas adelante
  var textValue;
  // Condicional Sí arrayArguments[0] != null ó arrayArguments[0] != undefined se
  // agregara un atributo tipo value al elemento html creado anteriormente
  if ((arguments.length <= 0 ? undefined : arguments[0]) != null || (arguments.length <= 0 ? undefined : arguments[0]) != undefined) {
    optionElement.setAttribute('value', arguments.length <= 0 ? undefined : arguments[0]);
  }
  // Sí arrayArguments[1] != null ó arrayArguments[1] != undefined
  // sera asignado el valor de acuerdo si se cumple la condicion a la variable textValue
  if ((arguments.length <= 1 ? undefined : arguments[1]) != null || (arguments.length <= 1 ? undefined : arguments[1]) != undefined) {
    // document.createTextNode(texto); creara un texNode que sera el valor asignado a la variable textValue
    textValue = document.createTextNode(arguments.length <= 1 ? undefined : arguments[1]);
  } else {
    // si el valor es igual a null o undefined la varible tendra como lo que este en arrayArguments[0]
    textValue = document.createTextNode(arguments.length <= 0 ? undefined : arguments[0]);
  }
  // Sí arrayArguments[2] != null ó arrayArguments[2] != undefined agregara un atributo de tipo label
  if ((arguments.length <= 2 ? undefined : arguments[2]) != null || (arguments.length <= 2 ? undefined : arguments[2]) != undefined) {
    optionElement.setAttribute('label', arguments.length <= 2 ? undefined : arguments[2]);
    // Sí arrayArguments[0] == null y arrayArguments[1] == null estan sin contenido es decir null o undefined
    // la variable textValue tendra el valor que este en arrayArguments[2]
    if ((arguments.length <= 0 ? undefined : arguments[0]) == null && (arguments.length <= 1 ? undefined : arguments[1]) == null) {
      textValue = document.createTextNode(arguments.length <= 2 ? undefined : arguments[2]);
    }
  }
  if ((arguments.length <= 3 ? undefined : arguments[3]) != null || (arguments.length <= 3 ? undefined : arguments[3]) != undefined) {
    optionElement.setAttribute('selected', arguments.length <= 3 ? undefined : arguments[3]);
  }
  // agrega el valor final de textValue y lo inserta como textNode al elemento html <option>
  optionElement.appendChild(textValue);
  // returna el elemento HTML creado.
  return optionElement;
  // optionElement(value, textNode, [... label]).
  /**
   * value --> string - atributo value
   * textNode --> string - texto a insertar dentro del elemento creado
   * label --> string (opcional) atributo label
   */
}
function labelElement() {
  var labelElement = document.createElement('LABEL');
  labelElement.setAttribute('for', arguments.length <= 0 ? undefined : arguments[0]);
  labelElement.appendChild(document.createTextNode(arguments.length <= 1 ? undefined : arguments[1]));
  return labelElement;
}

/***/ }),

/***/ 3149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_encabezado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(423);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var _utils_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2188);



// Importa los estilos para registro.html
 // OJO - sería bueno dejar en un archivo CSS aparte, los estilos de los diálogos





// Importa las funcionalidades del color para los proyectos dependiento el tipo de la clase

function CargarListadoIndicadores() {
  return _CargarListadoIndicadores.apply(this, arguments);
}
function _CargarListadoIndicadores() {
  _CargarListadoIndicadores = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var BotonRegresar, Fragmento, _yield$GetData, indicadores;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          BotonRegresar = document.getElementById('BtnRegresar');
          BotonRegresar.addEventListener('click', function () {
            document.getElementById('BtnRegresar').style.display = 'none';
            // document.getElementById('BtnMaximizar').style.display = 'none';
            // document.getElementById('BtnRestablecer').style.display = 'none';
            document.getElementById('chartdiv').style.display = 'none';
            document.getElementById('listado-indicadores').style.display = 'block';
          });

          // const BotonMaximizar = document.getElementById('BtnMaximizar');
          // const BotonRestablecer = document.getElementById('BtnRestablecer');

          // BotonMaximizar.addEventListener('click', () => {
          //   document.getElementById('chartdiv').classList.toggle('chart-default-size');
          //   document.getElementById('chartdiv').classList.toggle('chart-full-size');
          //   BotonMaximizar.style.display = 'none';
          //   BotonRestablecer.style.display = 'flex';
          // });

          // BotonRestablecer.addEventListener('click', () => {
          //   document.getElementById('chartdiv').classList.toggle('chart-full-size');
          //   document.getElementById('chartdiv').classList.toggle('chart-default-size');
          //   BotonMaximizar.style.display = 'flex';
          //   BotonRestablecer.style.display = 'none';
          // });
          Fragmento = document.createDocumentFragment();
          _context.next = 5;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.GetData)('getindicadores', '', 'CargarListadoIndicadores');
        case 5:
          _yield$GetData = _context.sent;
          indicadores = _yield$GetData.indicadores;
          // OJO - quitar esos "pinches" espacios en blanco al inicio y final de las {}
          indicadores.forEach(function (grupo_indicadores, I) {
            var Grupo = document.createElement('div');
            var GrupoEncabezado = document.createElement('div');
            GrupoEncabezado.classList.add('grupo-encabezado', I == 0 ? 'grupo-encabezado-acordeon-desplegado' : 'grupo-encabezado-acordeon-recogido');
            var NombreGrupo = document.createElement('span');
            NombreGrupo.innerText = grupo_indicadores.nombre_grupo;
            GrupoEncabezado.appendChild(NombreGrupo);
            var ColorGrupo = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(grupo_indicadores.color_rgb_grupo);
            GrupoEncabezado.style.backgroundColor = ColorGrupo;
            Grupo.insertAdjacentElement('beforeend', GrupoEncabezado);
            var GrupoIndicadores = document.createElement('div');
            GrupoIndicadores.className = 'grupo-indicadores';
            GrupoIndicadores.style.display = I > 0 ? 'none' : 'flex';
            GrupoEncabezado.addEventListener('click', function () {
              if (GrupoEncabezado.classList.contains('grupo-encabezado-acordeon-recogido')) {
                (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.getElementsByClassName('grupo-encabezado-acordeon-desplegado')).forEach(function (elemento) {
                  elemento.nextElementSibling.style.display = 'none';
                  elemento.classList.replace('grupo-encabezado-acordeon-desplegado', 'grupo-encabezado-acordeon-recogido');
                });
              }
              GrupoEncabezado.classList.toggle('grupo-encabezado-acordeon-recogido');
              GrupoEncabezado.classList.toggle('grupo-encabezado-acordeon-desplegado');
              GrupoIndicadores.style.display = GrupoEncabezado.classList.contains('grupo-encabezado-acordeon-desplegado') ? 'flex' : 'none';
            });
            grupo_indicadores.registros.forEach(function (indicador) {
              var Indicador = document.createElement('div');
              Indicador.className = 'indicador';
              Indicador.style.border = "0.0625rem solid ".concat(ColorGrupo);
              var ColorIndicador = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(indicador.color_rgb_indicador);
              var HSL = (0,_utils_Color__WEBPACK_IMPORTED_MODULE_4__.GetHSL)(indicador.color_rgb_indicador);
              var ColorIndicadorBackground = "hsl(".concat(HSL[0], ",").concat(HSL[1], "%,").concat(_utils_Color__WEBPACK_IMPORTED_MODULE_4__.PorcentajeL[0], "%)");
              Indicador.style.backgroundColor = ColorIndicadorBackground;
              Indicador.dataset.codigo_indicador = indicador.codigo_indicador;
              Indicador.dataset.dialogos = JSON.stringify(indicador.dialogos);
              Indicador.dataset.controlador = indicador.controlador;
              var IndicadorEncabezado = document.createElement('div');
              IndicadorEncabezado.className = 'indicador-encabezado';
              IndicadorEncabezado.style.background = "linear-gradient(45deg, ".concat(ColorIndicador, " 50%, ").concat(ColorGrupo, " 50%");
              var IndicadorTitulo = document.createElement('div');
              IndicadorTitulo.className = 'indicador-titulo';
              var NombreIndicador = document.createElement('span');
              NombreIndicador.innerText = indicador.nombre_indicador;
              IndicadorTitulo.appendChild(NombreIndicador);
              var IndicadorBotonFavorito = document.createElement('div');
              IndicadorBotonFavorito.className = 'indicador-boton-favorito';
              var BotonFavorito = document.createElement('span');
              BotonFavorito.innerHTML = '&#10084;';
              IndicadorBotonFavorito.appendChild(BotonFavorito);
              IndicadorBotonFavorito.title = 'Click para añadir a favoritos';
              IndicadorEncabezado.appendChild(IndicadorTitulo);
              IndicadorEncabezado.appendChild(IndicadorBotonFavorito);
              var IndicadorCaja = document.createElement('div');
              IndicadorCaja.className = 'indicador-caja';
              var IndicadorImagen = document.createElement('div');
              IndicadorImagen.className = 'indicador-imagen';
              var Thumbnail = document.createElement('img');
              Thumbnail.src = indicador.thumbnail;
              Thumbnail.alt = 'Thumbnail';
              Thumbnail.title = 'Click para ver el indicador';
              IndicadorImagen.appendChild(Thumbnail);
              IndicadorImagen.addEventListener('click', function () {
                MostrarIndicador(Indicador);
              });
              var IndicadorDescripcion = document.createElement('div');
              IndicadorDescripcion.className = 'indicador-descripcion';
              var Descripcion = document.createElement('span');
              Descripcion.innerText = indicador.descripcion;
              IndicadorDescripcion.appendChild(Descripcion);
              IndicadorCaja.appendChild(IndicadorImagen);
              IndicadorCaja.appendChild(IndicadorDescripcion);
              Indicador.appendChild(IndicadorEncabezado);
              Indicador.appendChild(IndicadorCaja);
              GrupoIndicadores.appendChild(Indicador);
            });
            Grupo.appendChild(GrupoIndicadores);
            Fragmento.appendChild(Grupo);
          });
          document.getElementById('listado-indicadores').appendChild(Fragmento);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _CargarListadoIndicadores.apply(this, arguments);
}
function MostrarIndicador(_x) {
  return _MostrarIndicador.apply(this, arguments);
}
function _MostrarIndicador() {
  _MostrarIndicador = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(Indicador) {
    var ArregloDialogos, ArregloOpciones, _yield$import, MostrarDialogo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          ArregloDialogos = JSON.parse(Indicador.dataset.dialogos); // Arreglo para recibir la lista de diálogos a mostrar / procesar
          ArregloOpciones = []; // Arreglo para almacenar las opciones elegidas en cada diálogo
          _context2.next = 4;
          return __webpack_require__.e(/* import() */ 7651).then(__webpack_require__.bind(__webpack_require__, 234));
        case 4:
          _yield$import = _context2.sent;
          MostrarDialogo = _yield$import.MostrarDialogo;
          MostrarDialogo(Indicador, ArregloDialogos, ArregloOpciones);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _MostrarIndicador.apply(this, arguments);
}
(0,_componentes_encabezado__WEBPACK_IMPORTED_MODULE_1__.Encabezado)();
CargarListadoIndicadores();

/***/ }),

/***/ 6435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuplantarOFF: () => (/* binding */ SuplantarOFF)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



function SuplantarOFF() {
  return _SuplantarOFF.apply(this, arguments);
}
function _SuplantarOFF() {
  _SuplantarOFF = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('suplantaroff', '', 'SuplantarOff');
        case 2:
          localStorage.removeItem('CodigoUsuario');
          localStorage.removeItem('OrdenUsuario');
          document.getElementById('SuplantarOff').remove();
          location.href = 'default.html';
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _SuplantarOFF.apply(this, arguments);
}

/***/ }),

/***/ 9850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BotonesActivos: () => (/* binding */ BotonesActivos)
/* harmony export */ });
function BotonesActivos() {
  var PathName = location.pathname;
  if (PathName.includes('revision')) {
    return;
  }
  if (PathName.includes('indicadores') || PathName.includes('rutas')) {
    document.querySelector('#RegActividad').style.display = 'none';
    return;
  }
  var BotonesActivosDatosUsuario = localStorage.getItem('BotonesRegistrar');
  if (BotonesActivosDatosUsuario != null || BotonesActivosDatosUsuario != undefined) {
    JSON.parse(BotonesActivosDatosUsuario).forEach(function (element) {
      document.getElementById(element).style.display = 'flex';
    });
  }
}

/***/ }),

/***/ 1197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorRGB: () => (/* binding */ ColorRGB),
/* harmony export */   ColorRegistroOpcion: () => (/* binding */ ColorRegistroOpcion),
/* harmony export */   GetHSL: () => (/* binding */ GetHSL),
/* harmony export */   PorcentajeL: () => (/* binding */ PorcentajeL)
/* harmony export */ });
var PorcentajeL = ['94', '96', '45', '70'];
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

/***/ 426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleNombre: () => (/* binding */ ToggleNombre)
/* harmony export */ });
// Alternar Nombre de Usuario (Largo / Corto)
function ToggleNombre(NombreUsuario) {
  if (window.matchMedia('(min-width: 520px)').matches) {
    NombreUsuario.textContent = localStorage.getItem('NombreUsuario');
  } else {
    NombreUsuario.textContent = localStorage.getItem('NombreAnexo');
  }
}

/***/ }),

/***/ 2829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   revisarNotificaciones: () => (/* binding */ revisarNotificaciones)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



var revisarNotificaciones = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var _yield$GetData, numero_de_notificaciones;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('getcampanita', '', 'revisarNotificaciones');
        case 2:
          _yield$GetData = _context.sent;
          numero_de_notificaciones = _yield$GetData.numero_de_notificaciones;
          if (numero_de_notificaciones === 0) {
            CampanaNotificacion.style.backgroundImage = "url('/img/campana-1.svg')";
            CampanaNotificacion.classList.add('campana-notificacion--no-after');
          } else {
            CampanaNotificacion.setAttribute('notificaciones', numero_de_notificaciones);
            CampanaNotificacion.style.backgroundImage = "url('/img/campana-2.svg')";
            CampanaNotificacion.classList.remove('campana-notificacion--no-after');
          }
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function revisarNotificaciones() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 8221:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/cambiar-disabled.svg");

/***/ }),

/***/ 216:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/cambiar.svg");

/***/ }),

/***/ 4935:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/delete-1-svgrepo-com.svg");

/***/ }),

/***/ 3061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var gs=Object.defineProperty;var zg=Object.getOwnPropertyDescriptor;var Kg=Object.getOwnPropertyNames;var Gg=Object.prototype.hasOwnProperty;var _e=(t,e)=>()=>(t&&(e=t(t=0)),e);var M=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Jt=(t,e)=>{for(var r in e)gs(t,r,{get:e[r],enumerable:!0})},Qg=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Kg(e))!Gg.call(t,n)&&n!==r&&gs(t,n,{get:()=>e[n],enumerable:!(i=zg(e,n))||i.enumerable});return t};var X=t=>Qg(gs({},"__esModule",{value:!0}),t);var _=_e(()=>{});var C={};Jt(C,{_debugEnd:()=>yu,_debugProcess:()=>gu,_events:()=>Ou,_eventsCount:()=>xu,_exiting:()=>Yl,_fatalExceptions:()=>cu,_getActiveHandles:()=>eu,_getActiveRequests:()=>Zl,_kill:()=>ru,_linkedBinding:()=>Gl,_maxListeners:()=>ku,_preload_modules:()=>Cu,_rawDebug:()=>zl,_startProfilerIdleNotifier:()=>bu,_stopProfilerIdleNotifier:()=>wu,_tickCallback:()=>pu,abort:()=>Eu,addListener:()=>Mu,allowedNodeEnvironmentFlags:()=>lu,arch:()=>xl,argv:()=>Ul,argv0:()=>Ru,assert:()=>uu,binding:()=>Fl,chdir:()=>Hl,config:()=>Jl,cpuUsage:()=>$i,cwd:()=>$l,debugPort:()=>Tu,default:()=>$u,dlopen:()=>Xl,domain:()=>Ql,emit:()=>Du,emitWarning:()=>jl,env:()=>Ll,execArgv:()=>Nl,execPath:()=>Iu,exit:()=>ou,features:()=>fu,hasUncaughtExceptionCaptureCallback:()=>du,hrtime:()=>Wi,kill:()=>su,listeners:()=>Wu,memoryUsage:()=>nu,moduleLoadList:()=>Kl,nextTick:()=>Pl,off:()=>Uu,on:()=>wt,once:()=>Lu,openStdin:()=>au,pid:()=>Su,platform:()=>Ml,ppid:()=>Au,prependListener:()=>ju,prependOnceListener:()=>Fu,reallyExit:()=>tu,release:()=>Vl,removeAllListeners:()=>qu,removeListener:()=>Nu,resourceUsage:()=>iu,setSourceMapsEnabled:()=>Bu,setUncaughtExceptionCaptureCallback:()=>hu,stderr:()=>mu,stdin:()=>vu,stdout:()=>_u,title:()=>Ol,umask:()=>Wl,uptime:()=>Pu,version:()=>ql,versions:()=>Dl});function ws(t){throw new Error("Node.js process "+t+" is not supported by JSPM core outside of Node.js")}function Yg(){!Mr||!Xt||(Mr=!1,Xt.length?bt=Xt.concat(bt):Fi=-1,bt.length&&Bl())}function Bl(){if(!Mr){var t=setTimeout(Yg,0);Mr=!0;for(var e=bt.length;e;){for(Xt=bt,bt=[];++Fi<e;)Xt&&Xt[Fi].run();Fi=-1,e=bt.length}Xt=null,Mr=!1,clearTimeout(t)}}function Pl(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];bt.push(new kl(t,e)),bt.length===1&&!Mr&&setTimeout(Bl,0)}function kl(t,e){this.fun=t,this.array=e}function Ee(){}function Gl(t){ws("_linkedBinding")}function Xl(t){ws("dlopen")}function Zl(){return[]}function eu(){return[]}function uu(t,e){if(!t)throw new Error(e||"assertion error")}function du(){return!1}function Pu(){return Lt.now()/1e3}function Wi(t){var e=Math.floor((Date.now()-Lt.now())*.001),r=Lt.now()*.001,i=Math.floor(r)+e,n=Math.floor(r%1*1e9);return t&&(i=i-t[0],n=n-t[1],n<0&&(i--,n+=bs)),[i,n]}function wt(){return $u}function Wu(t){return[]}var bt,Mr,Xt,Fi,Ol,xl,Ml,Ll,Ul,Nl,ql,Dl,jl,Fl,Wl,$l,Hl,Vl,zl,Kl,Ql,Yl,Jl,tu,ru,$i,iu,nu,su,ou,au,lu,fu,cu,hu,pu,gu,yu,bu,wu,_u,mu,vu,Eu,Su,Au,Iu,Tu,Ru,Cu,Bu,Lt,ys,bs,ku,Ou,xu,Mu,Lu,Uu,Nu,qu,Du,ju,Fu,$u,Hu=_e(()=>{_();v();m();bt=[],Mr=!1,Fi=-1;kl.prototype.run=function(){this.fun.apply(null,this.array)};Ol="browser",xl="x64",Ml="browser",Ll={PATH:"/usr/bin",LANG:navigator.language+".UTF-8",PWD:"/",HOME:"/home",TMP:"/tmp"},Ul=["/usr/bin/node"],Nl=[],ql="v16.8.0",Dl={},jl=function(t,e){console.warn((e?e+": ":"")+t)},Fl=function(t){ws("binding")},Wl=function(t){return 0},$l=function(){return"/"},Hl=function(t){},Vl={name:"node",sourceUrl:"",headersUrl:"",libUrl:""};zl=Ee,Kl=[];Ql={},Yl=!1,Jl={};tu=Ee,ru=Ee,$i=function(){return{}},iu=$i,nu=$i,su=Ee,ou=Ee,au=Ee,lu={};fu={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},cu=Ee,hu=Ee;pu=Ee,gu=Ee,yu=Ee,bu=Ee,wu=Ee,_u=void 0,mu=void 0,vu=void 0,Eu=Ee,Su=2,Au=1,Iu="/bin/usr/node",Tu=9229,Ru="node",Cu=[],Bu=Ee,Lt={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0};Lt.now===void 0&&(ys=Date.now(),Lt.timing&&Lt.timing.navigationStart&&(ys=Lt.timing.navigationStart),Lt.now=()=>Date.now()-ys);bs=1e9;Wi.bigint=function(t){var e=Wi(t);return typeof BigInt>"u"?e[0]*bs+e[1]:BigInt(e[0]*bs)+BigInt(e[1])};ku=10,Ou={},xu=0;Mu=wt,Lu=wt,Uu=wt,Nu=wt,qu=wt,Du=Ee,ju=wt,Fu=wt;$u={version:ql,versions:Dl,arch:xl,platform:Ml,release:Vl,_rawDebug:zl,moduleLoadList:Kl,binding:Fl,_linkedBinding:Gl,_events:Ou,_eventsCount:xu,_maxListeners:ku,on:wt,addListener:Mu,once:Lu,off:Uu,removeListener:Nu,removeAllListeners:qu,emit:Du,prependListener:ju,prependOnceListener:Fu,listeners:Wu,domain:Ql,_exiting:Yl,config:Jl,dlopen:Xl,uptime:Pu,_getActiveRequests:Zl,_getActiveHandles:eu,reallyExit:tu,_kill:ru,cpuUsage:$i,resourceUsage:iu,memoryUsage:nu,kill:su,exit:ou,openStdin:au,allowedNodeEnvironmentFlags:lu,assert:uu,features:fu,_fatalExceptions:cu,setUncaughtExceptionCaptureCallback:hu,hasUncaughtExceptionCaptureCallback:du,emitWarning:jl,nextTick:Pl,_tickCallback:pu,_debugProcess:gu,_debugEnd:yu,_startProfilerIdleNotifier:bu,_stopProfilerIdleNotifier:wu,stdout:_u,stdin:vu,stderr:mu,abort:Eu,umask:Wl,chdir:Hl,cwd:$l,env:Ll,title:Ol,argv:Ul,execArgv:Nl,pid:Su,ppid:Au,execPath:Iu,debugPort:Tu,hrtime:Wi,argv0:Ru,_preload_modules:Cu,setSourceMapsEnabled:Bu}});var m=_e(()=>{Hu()});var me={};Jt(me,{Buffer:()=>x,INSPECT_MAX_BYTES:()=>ey,default:()=>Ut,kMaxLength:()=>ty});function Jg(){if(Vu)return ci;Vu=!0,ci.byteLength=a,ci.toByteArray=c,ci.fromByteArray=g;for(var t=[],e=[],r=typeof Uint8Array<"u"?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0,o=i.length;n<o;++n)t[n]=i[n],e[i.charCodeAt(n)]=n;e["-".charCodeAt(0)]=62,e["_".charCodeAt(0)]=63;function s(y){var w=y.length;if(w%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var E=y.indexOf("=");E===-1&&(E=w);var S=E===w?0:4-E%4;return[E,S]}function a(y){var w=s(y),E=w[0],S=w[1];return(E+S)*3/4-S}function l(y,w,E){return(w+E)*3/4-E}function c(y){var w,E=s(y),S=E[0],I=E[1],B=new r(l(y,S,I)),R=0,U=I>0?S-4:S,N;for(N=0;N<U;N+=4)w=e[y.charCodeAt(N)]<<18|e[y.charCodeAt(N+1)]<<12|e[y.charCodeAt(N+2)]<<6|e[y.charCodeAt(N+3)],B[R++]=w>>16&255,B[R++]=w>>8&255,B[R++]=w&255;return I===2&&(w=e[y.charCodeAt(N)]<<2|e[y.charCodeAt(N+1)]>>4,B[R++]=w&255),I===1&&(w=e[y.charCodeAt(N)]<<10|e[y.charCodeAt(N+1)]<<4|e[y.charCodeAt(N+2)]>>2,B[R++]=w>>8&255,B[R++]=w&255),B}function h(y){return t[y>>18&63]+t[y>>12&63]+t[y>>6&63]+t[y&63]}function d(y,w,E){for(var S,I=[],B=w;B<E;B+=3)S=(y[B]<<16&16711680)+(y[B+1]<<8&65280)+(y[B+2]&255),I.push(h(S));return I.join("")}function g(y){for(var w,E=y.length,S=E%3,I=[],B=16383,R=0,U=E-S;R<U;R+=B)I.push(d(y,R,R+B>U?U:R+B));return S===1?(w=y[E-1],I.push(t[w>>2]+t[w<<4&63]+"==")):S===2&&(w=(y[E-2]<<8)+y[E-1],I.push(t[w>>10]+t[w>>4&63]+t[w<<2&63]+"=")),I.join("")}return ci}function Xg(){if(zu)return Hi;zu=!0;return Hi.read=function(t,e,r,i,n){var o,s,a=n*8-i-1,l=(1<<a)-1,c=l>>1,h=-7,d=r?n-1:0,g=r?-1:1,y=t[e+d];for(d+=g,o=y&(1<<-h)-1,y>>=-h,h+=a;h>0;o=o*256+t[e+d],d+=g,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=i;h>0;s=s*256+t[e+d],d+=g,h-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(y?-1:1)*(1/0);s=s+Math.pow(2,i),o=o-c}return(y?-1:1)*s*Math.pow(2,o-i)},Hi.write=function(t,e,r,i,n,o){var s,a,l,c=o*8-n-1,h=(1<<c)-1,d=h>>1,g=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=i?0:o-1,w=i?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=g/l:e+=g*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=h?(a=0,s=h):s+d>=1?(a=(e*l-1)*Math.pow(2,n),s=s+d):(a=e*Math.pow(2,d-1)*Math.pow(2,n),s=0));n>=8;t[r+y]=a&255,y+=w,a/=256,n-=8);for(s=s<<n|a,c+=n;c>0;t[r+y]=s&255,y+=w,s/=256,c-=8);t[r+y-w]|=E*128},Hi}function Zg(){if(Ku)return Zt;Ku=!0;let t=Jg(),e=Xg(),r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Zt.Buffer=s,Zt.SlowBuffer=I,Zt.INSPECT_MAX_BYTES=50;let i=2147483647;Zt.kMaxLength=i,s.TYPED_ARRAY_SUPPORT=n(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function n(){try{let p=new Uint8Array(1),u={foo:function(){return 42}};return Object.setPrototypeOf(u,Uint8Array.prototype),Object.setPrototypeOf(p,u),p.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function o(p){if(p>i)throw new RangeError('The value "'+p+'" is invalid for option "size"');let u=new Uint8Array(p);return Object.setPrototypeOf(u,s.prototype),u}function s(p,u,f){if(typeof p=="number"){if(typeof u=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h(p)}return a(p,u,f)}s.poolSize=8192;function a(p,u,f){if(typeof p=="string")return d(p,u);if(ArrayBuffer.isView(p))return y(p);if(p==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if(Ye(p,ArrayBuffer)||p&&Ye(p.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ye(p,SharedArrayBuffer)||p&&Ye(p.buffer,SharedArrayBuffer)))return w(p,u,f);if(typeof p=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let b=p.valueOf&&p.valueOf();if(b!=null&&b!==p)return s.from(b,u,f);let A=E(p);if(A)return A;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof p[Symbol.toPrimitive]=="function")return s.from(p[Symbol.toPrimitive]("string"),u,f);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}s.from=function(p,u,f){return a(p,u,f)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function l(p){if(typeof p!="number")throw new TypeError('"size" argument must be of type number');if(p<0)throw new RangeError('The value "'+p+'" is invalid for option "size"')}function c(p,u,f){return l(p),p<=0?o(p):u!==void 0?typeof f=="string"?o(p).fill(u,f):o(p).fill(u):o(p)}s.alloc=function(p,u,f){return c(p,u,f)};function h(p){return l(p),o(p<0?0:S(p)|0)}s.allocUnsafe=function(p){return h(p)},s.allocUnsafeSlow=function(p){return h(p)};function d(p,u){if((typeof u!="string"||u==="")&&(u="utf8"),!s.isEncoding(u))throw new TypeError("Unknown encoding: "+u);let f=B(p,u)|0,b=o(f),A=b.write(p,u);return A!==f&&(b=b.slice(0,A)),b}function g(p){let u=p.length<0?0:S(p.length)|0,f=o(u);for(let b=0;b<u;b+=1)f[b]=p[b]&255;return f}function y(p){if(Ye(p,Uint8Array)){let u=new Uint8Array(p);return w(u.buffer,u.byteOffset,u.byteLength)}return g(p)}function w(p,u,f){if(u<0||p.byteLength<u)throw new RangeError('"offset" is outside of buffer bounds');if(p.byteLength<u+(f||0))throw new RangeError('"length" is outside of buffer bounds');let b;return u===void 0&&f===void 0?b=new Uint8Array(p):f===void 0?b=new Uint8Array(p,u):b=new Uint8Array(p,u,f),Object.setPrototypeOf(b,s.prototype),b}function E(p){if(s.isBuffer(p)){let u=S(p.length)|0,f=o(u);return f.length===0||p.copy(f,0,0,u),f}if(p.length!==void 0)return typeof p.length!="number"||ps(p.length)?o(0):g(p);if(p.type==="Buffer"&&Array.isArray(p.data))return g(p.data)}function S(p){if(p>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return p|0}function I(p){return+p!=p&&(p=0),s.alloc(+p)}s.isBuffer=function(u){return u!=null&&u._isBuffer===!0&&u!==s.prototype},s.compare=function(u,f){if(Ye(u,Uint8Array)&&(u=s.from(u,u.offset,u.byteLength)),Ye(f,Uint8Array)&&(f=s.from(f,f.offset,f.byteLength)),!s.isBuffer(u)||!s.isBuffer(f))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(u===f)return 0;let b=u.length,A=f.length;for(let T=0,P=Math.min(b,A);T<P;++T)if(u[T]!==f[T]){b=u[T],A=f[T];break}return b<A?-1:A<b?1:0},s.isEncoding=function(u){switch(String(u).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(u,f){if(!Array.isArray(u))throw new TypeError('"list" argument must be an Array of Buffers');if(u.length===0)return s.alloc(0);let b;if(f===void 0)for(f=0,b=0;b<u.length;++b)f+=u[b].length;let A=s.allocUnsafe(f),T=0;for(b=0;b<u.length;++b){let P=u[b];if(Ye(P,Uint8Array))T+P.length>A.length?(s.isBuffer(P)||(P=s.from(P)),P.copy(A,T)):Uint8Array.prototype.set.call(A,P,T);else if(s.isBuffer(P))P.copy(A,T);else throw new TypeError('"list" argument must be an Array of Buffers');T+=P.length}return A};function B(p,u){if(s.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||Ye(p,ArrayBuffer))return p.byteLength;if(typeof p!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);let f=p.length,b=arguments.length>2&&arguments[2]===!0;if(!b&&f===0)return 0;let A=!1;for(;;)switch(u){case"ascii":case"latin1":case"binary":return f;case"utf8":case"utf-8":return ds(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f*2;case"hex":return f>>>1;case"base64":return Cl(p).length;default:if(A)return b?-1:ds(p).length;u=(""+u).toLowerCase(),A=!0}}s.byteLength=B;function R(p,u,f){let b=!1;if((u===void 0||u<0)&&(u=0),u>this.length||((f===void 0||f>this.length)&&(f=this.length),f<=0)||(f>>>=0,u>>>=0,f<=u))return"";for(p||(p="utf8");;)switch(p){case"hex":return Ng(this,u,f);case"utf8":case"utf-8":return Br(this,u,f);case"ascii":return cs(this,u,f);case"latin1":case"binary":return Ug(this,u,f);case"base64":return ge(this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qg(this,u,f);default:if(b)throw new TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),b=!0}}s.prototype._isBuffer=!0;function U(p,u,f){let b=p[u];p[u]=p[f],p[f]=b}s.prototype.swap16=function(){let u=this.length;if(u%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let f=0;f<u;f+=2)U(this,f,f+1);return this},s.prototype.swap32=function(){let u=this.length;if(u%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let f=0;f<u;f+=4)U(this,f,f+3),U(this,f+1,f+2);return this},s.prototype.swap64=function(){let u=this.length;if(u%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let f=0;f<u;f+=8)U(this,f,f+7),U(this,f+1,f+6),U(this,f+2,f+5),U(this,f+3,f+4);return this},s.prototype.toString=function(){let u=this.length;return u===0?"":arguments.length===0?Br(this,0,u):R.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(u){if(!s.isBuffer(u))throw new TypeError("Argument must be a Buffer");return this===u?!0:s.compare(this,u)===0},s.prototype.inspect=function(){let u="",f=Zt.INSPECT_MAX_BYTES;return u=this.toString("hex",0,f).replace(/(.{2})/g,"$1 ").trim(),this.length>f&&(u+=" ... "),"<Buffer "+u+">"},r&&(s.prototype[r]=s.prototype.inspect),s.prototype.compare=function(u,f,b,A,T){if(Ye(u,Uint8Array)&&(u=s.from(u,u.offset,u.byteLength)),!s.isBuffer(u))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof u);if(f===void 0&&(f=0),b===void 0&&(b=u?u.length:0),A===void 0&&(A=0),T===void 0&&(T=this.length),f<0||b>u.length||A<0||T>this.length)throw new RangeError("out of range index");if(A>=T&&f>=b)return 0;if(A>=T)return-1;if(f>=b)return 1;if(f>>>=0,b>>>=0,A>>>=0,T>>>=0,this===u)return 0;let P=T-A,$=b-f,se=Math.min(P,$),te=this.slice(A,T),oe=u.slice(f,b);for(let J=0;J<se;++J)if(te[J]!==oe[J]){P=te[J],$=oe[J];break}return P<$?-1:$<P?1:0};function N(p,u,f,b,A){if(p.length===0)return-1;if(typeof f=="string"?(b=f,f=0):f>2147483647?f=2147483647:f<-2147483648&&(f=-2147483648),f=+f,ps(f)&&(f=A?0:p.length-1),f<0&&(f=p.length+f),f>=p.length){if(A)return-1;f=p.length-1}else if(f<0)if(A)f=0;else return-1;if(typeof u=="string"&&(u=s.from(u,b)),s.isBuffer(u))return u.length===0?-1:W(p,u,f,b,A);if(typeof u=="number")return u=u&255,typeof Uint8Array.prototype.indexOf=="function"?A?Uint8Array.prototype.indexOf.call(p,u,f):Uint8Array.prototype.lastIndexOf.call(p,u,f):W(p,[u],f,b,A);throw new TypeError("val must be string, number or Buffer")}function W(p,u,f,b,A){let T=1,P=p.length,$=u.length;if(b!==void 0&&(b=String(b).toLowerCase(),b==="ucs2"||b==="ucs-2"||b==="utf16le"||b==="utf-16le")){if(p.length<2||u.length<2)return-1;T=2,P/=2,$/=2,f/=2}function se(oe,J){return T===1?oe[J]:oe.readUInt16BE(J*T)}let te;if(A){let oe=-1;for(te=f;te<P;te++)if(se(p,te)===se(u,oe===-1?0:te-oe)){if(oe===-1&&(oe=te),te-oe+1===$)return oe*T}else oe!==-1&&(te-=te-oe),oe=-1}else for(f+$>P&&(f=P-$),te=f;te>=0;te--){let oe=!0;for(let J=0;J<$;J++)if(se(p,te+J)!==se(u,J)){oe=!1;break}if(oe)return te}return-1}s.prototype.includes=function(u,f,b){return this.indexOf(u,f,b)!==-1},s.prototype.indexOf=function(u,f,b){return N(this,u,f,b,!0)},s.prototype.lastIndexOf=function(u,f,b){return N(this,u,f,b,!1)};function K(p,u,f,b){f=Number(f)||0;let A=p.length-f;b?(b=Number(b),b>A&&(b=A)):b=A;let T=u.length;b>T/2&&(b=T/2);let P;for(P=0;P<b;++P){let $=parseInt(u.substr(P*2,2),16);if(ps($))return P;p[f+P]=$}return P}function z(p,u,f,b){return ji(ds(u,p.length-f),p,f,b)}function Q(p,u,f,b){return ji(Wg(u),p,f,b)}function pe(p,u,f,b){return ji(Cl(u),p,f,b)}function Yt(p,u,f,b){return ji($g(u,p.length-f),p,f,b)}s.prototype.write=function(u,f,b,A){if(f===void 0)A="utf8",b=this.length,f=0;else if(b===void 0&&typeof f=="string")A=f,b=this.length,f=0;else if(isFinite(f))f=f>>>0,isFinite(b)?(b=b>>>0,A===void 0&&(A="utf8")):(A=b,b=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let T=this.length-f;if((b===void 0||b>T)&&(b=T),u.length>0&&(b<0||f<0)||f>this.length)throw new RangeError("Attempt to write outside buffer bounds");A||(A="utf8");let P=!1;for(;;)switch(A){case"hex":return K(this,u,f,b);case"utf8":case"utf-8":return z(this,u,f,b);case"ascii":case"latin1":case"binary":return Q(this,u,f,b);case"base64":return pe(this,u,f,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yt(this,u,f,b);default:if(P)throw new TypeError("Unknown encoding: "+A);A=(""+A).toLowerCase(),P=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ge(p,u,f){return u===0&&f===p.length?t.fromByteArray(p):t.fromByteArray(p.slice(u,f))}function Br(p,u,f){f=Math.min(p.length,f);let b=[],A=u;for(;A<f;){let T=p[A],P=null,$=T>239?4:T>223?3:T>191?2:1;if(A+$<=f){let se,te,oe,J;switch($){case 1:T<128&&(P=T);break;case 2:se=p[A+1],(se&192)===128&&(J=(T&31)<<6|se&63,J>127&&(P=J));break;case 3:se=p[A+1],te=p[A+2],(se&192)===128&&(te&192)===128&&(J=(T&15)<<12|(se&63)<<6|te&63,J>2047&&(J<55296||J>57343)&&(P=J));break;case 4:se=p[A+1],te=p[A+2],oe=p[A+3],(se&192)===128&&(te&192)===128&&(oe&192)===128&&(J=(T&15)<<18|(se&63)<<12|(te&63)<<6|oe&63,J>65535&&J<1114112&&(P=J))}}P===null?(P=65533,$=1):P>65535&&(P-=65536,b.push(P>>>10&1023|55296),P=56320|P&1023),b.push(P),A+=$}return kr(b)}let Pr=4096;function kr(p){let u=p.length;if(u<=Pr)return String.fromCharCode.apply(String,p);let f="",b=0;for(;b<u;)f+=String.fromCharCode.apply(String,p.slice(b,b+=Pr));return f}function cs(p,u,f){let b="";f=Math.min(p.length,f);for(let A=u;A<f;++A)b+=String.fromCharCode(p[A]&127);return b}function Ug(p,u,f){let b="";f=Math.min(p.length,f);for(let A=u;A<f;++A)b+=String.fromCharCode(p[A]);return b}function Ng(p,u,f){let b=p.length;(!u||u<0)&&(u=0),(!f||f<0||f>b)&&(f=b);let A="";for(let T=u;T<f;++T)A+=Hg[p[T]];return A}function qg(p,u,f){let b=p.slice(u,f),A="";for(let T=0;T<b.length-1;T+=2)A+=String.fromCharCode(b[T]+b[T+1]*256);return A}s.prototype.slice=function(u,f){let b=this.length;u=~~u,f=f===void 0?b:~~f,u<0?(u+=b,u<0&&(u=0)):u>b&&(u=b),f<0?(f+=b,f<0&&(f=0)):f>b&&(f=b),f<u&&(f=u);let A=this.subarray(u,f);return Object.setPrototypeOf(A,s.prototype),A};function ye(p,u,f){if(p%1!==0||p<0)throw new RangeError("offset is not uint");if(p+u>f)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(u,f,b){u=u>>>0,f=f>>>0,b||ye(u,f,this.length);let A=this[u],T=1,P=0;for(;++P<f&&(T*=256);)A+=this[u+P]*T;return A},s.prototype.readUintBE=s.prototype.readUIntBE=function(u,f,b){u=u>>>0,f=f>>>0,b||ye(u,f,this.length);let A=this[u+--f],T=1;for(;f>0&&(T*=256);)A+=this[u+--f]*T;return A},s.prototype.readUint8=s.prototype.readUInt8=function(u,f){return u=u>>>0,f||ye(u,1,this.length),this[u]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(u,f){return u=u>>>0,f||ye(u,2,this.length),this[u]|this[u+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(u,f){return u=u>>>0,f||ye(u,2,this.length),this[u]<<8|this[u+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(u,f){return u=u>>>0,f||ye(u,4,this.length),(this[u]|this[u+1]<<8|this[u+2]<<16)+this[u+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(u,f){return u=u>>>0,f||ye(u,4,this.length),this[u]*16777216+(this[u+1]<<16|this[u+2]<<8|this[u+3])},s.prototype.readBigUInt64LE=Mt(function(u){u=u>>>0,xr(u,"offset");let f=this[u],b=this[u+7];(f===void 0||b===void 0)&&fi(u,this.length-8);let A=f+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24,T=this[++u]+this[++u]*2**8+this[++u]*2**16+b*2**24;return BigInt(A)+(BigInt(T)<<BigInt(32))}),s.prototype.readBigUInt64BE=Mt(function(u){u=u>>>0,xr(u,"offset");let f=this[u],b=this[u+7];(f===void 0||b===void 0)&&fi(u,this.length-8);let A=f*2**24+this[++u]*2**16+this[++u]*2**8+this[++u],T=this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+b;return(BigInt(A)<<BigInt(32))+BigInt(T)}),s.prototype.readIntLE=function(u,f,b){u=u>>>0,f=f>>>0,b||ye(u,f,this.length);let A=this[u],T=1,P=0;for(;++P<f&&(T*=256);)A+=this[u+P]*T;return T*=128,A>=T&&(A-=Math.pow(2,8*f)),A},s.prototype.readIntBE=function(u,f,b){u=u>>>0,f=f>>>0,b||ye(u,f,this.length);let A=f,T=1,P=this[u+--A];for(;A>0&&(T*=256);)P+=this[u+--A]*T;return T*=128,P>=T&&(P-=Math.pow(2,8*f)),P},s.prototype.readInt8=function(u,f){return u=u>>>0,f||ye(u,1,this.length),this[u]&128?(255-this[u]+1)*-1:this[u]},s.prototype.readInt16LE=function(u,f){u=u>>>0,f||ye(u,2,this.length);let b=this[u]|this[u+1]<<8;return b&32768?b|4294901760:b},s.prototype.readInt16BE=function(u,f){u=u>>>0,f||ye(u,2,this.length);let b=this[u+1]|this[u]<<8;return b&32768?b|4294901760:b},s.prototype.readInt32LE=function(u,f){return u=u>>>0,f||ye(u,4,this.length),this[u]|this[u+1]<<8|this[u+2]<<16|this[u+3]<<24},s.prototype.readInt32BE=function(u,f){return u=u>>>0,f||ye(u,4,this.length),this[u]<<24|this[u+1]<<16|this[u+2]<<8|this[u+3]},s.prototype.readBigInt64LE=Mt(function(u){u=u>>>0,xr(u,"offset");let f=this[u],b=this[u+7];(f===void 0||b===void 0)&&fi(u,this.length-8);let A=this[u+4]+this[u+5]*2**8+this[u+6]*2**16+(b<<24);return(BigInt(A)<<BigInt(32))+BigInt(f+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24)}),s.prototype.readBigInt64BE=Mt(function(u){u=u>>>0,xr(u,"offset");let f=this[u],b=this[u+7];(f===void 0||b===void 0)&&fi(u,this.length-8);let A=(f<<24)+this[++u]*2**16+this[++u]*2**8+this[++u];return(BigInt(A)<<BigInt(32))+BigInt(this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+b)}),s.prototype.readFloatLE=function(u,f){return u=u>>>0,f||ye(u,4,this.length),e.read(this,u,!0,23,4)},s.prototype.readFloatBE=function(u,f){return u=u>>>0,f||ye(u,4,this.length),e.read(this,u,!1,23,4)},s.prototype.readDoubleLE=function(u,f){return u=u>>>0,f||ye(u,8,this.length),e.read(this,u,!0,52,8)},s.prototype.readDoubleBE=function(u,f){return u=u>>>0,f||ye(u,8,this.length),e.read(this,u,!1,52,8)};function Ce(p,u,f,b,A,T){if(!s.isBuffer(p))throw new TypeError('"buffer" argument must be a Buffer instance');if(u>A||u<T)throw new RangeError('"value" argument is out of bounds');if(f+b>p.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(u,f,b,A){if(u=+u,f=f>>>0,b=b>>>0,!A){let $=Math.pow(2,8*b)-1;Ce(this,u,f,b,$,0)}let T=1,P=0;for(this[f]=u&255;++P<b&&(T*=256);)this[f+P]=u/T&255;return f+b},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(u,f,b,A){if(u=+u,f=f>>>0,b=b>>>0,!A){let $=Math.pow(2,8*b)-1;Ce(this,u,f,b,$,0)}let T=b-1,P=1;for(this[f+T]=u&255;--T>=0&&(P*=256);)this[f+T]=u/P&255;return f+b},s.prototype.writeUint8=s.prototype.writeUInt8=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,1,255,0),this[f]=u&255,f+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,2,65535,0),this[f]=u&255,this[f+1]=u>>>8,f+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,2,65535,0),this[f]=u>>>8,this[f+1]=u&255,f+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,4,4294967295,0),this[f+3]=u>>>24,this[f+2]=u>>>16,this[f+1]=u>>>8,this[f]=u&255,f+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,4,4294967295,0),this[f]=u>>>24,this[f+1]=u>>>16,this[f+2]=u>>>8,this[f+3]=u&255,f+4};function vl(p,u,f,b,A){Rl(u,b,A,p,f,7);let T=Number(u&BigInt(4294967295));p[f++]=T,T=T>>8,p[f++]=T,T=T>>8,p[f++]=T,T=T>>8,p[f++]=T;let P=Number(u>>BigInt(32)&BigInt(4294967295));return p[f++]=P,P=P>>8,p[f++]=P,P=P>>8,p[f++]=P,P=P>>8,p[f++]=P,f}function El(p,u,f,b,A){Rl(u,b,A,p,f,7);let T=Number(u&BigInt(4294967295));p[f+7]=T,T=T>>8,p[f+6]=T,T=T>>8,p[f+5]=T,T=T>>8,p[f+4]=T;let P=Number(u>>BigInt(32)&BigInt(4294967295));return p[f+3]=P,P=P>>8,p[f+2]=P,P=P>>8,p[f+1]=P,P=P>>8,p[f]=P,f+8}s.prototype.writeBigUInt64LE=Mt(function(u,f=0){return vl(this,u,f,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=Mt(function(u,f=0){return El(this,u,f,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(u,f,b,A){if(u=+u,f=f>>>0,!A){let se=Math.pow(2,8*b-1);Ce(this,u,f,b,se-1,-se)}let T=0,P=1,$=0;for(this[f]=u&255;++T<b&&(P*=256);)u<0&&$===0&&this[f+T-1]!==0&&($=1),this[f+T]=(u/P>>0)-$&255;return f+b},s.prototype.writeIntBE=function(u,f,b,A){if(u=+u,f=f>>>0,!A){let se=Math.pow(2,8*b-1);Ce(this,u,f,b,se-1,-se)}let T=b-1,P=1,$=0;for(this[f+T]=u&255;--T>=0&&(P*=256);)u<0&&$===0&&this[f+T+1]!==0&&($=1),this[f+T]=(u/P>>0)-$&255;return f+b},s.prototype.writeInt8=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,1,127,-128),u<0&&(u=255+u+1),this[f]=u&255,f+1},s.prototype.writeInt16LE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,2,32767,-32768),this[f]=u&255,this[f+1]=u>>>8,f+2},s.prototype.writeInt16BE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,2,32767,-32768),this[f]=u>>>8,this[f+1]=u&255,f+2},s.prototype.writeInt32LE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,4,2147483647,-2147483648),this[f]=u&255,this[f+1]=u>>>8,this[f+2]=u>>>16,this[f+3]=u>>>24,f+4},s.prototype.writeInt32BE=function(u,f,b){return u=+u,f=f>>>0,b||Ce(this,u,f,4,2147483647,-2147483648),u<0&&(u=4294967295+u+1),this[f]=u>>>24,this[f+1]=u>>>16,this[f+2]=u>>>8,this[f+3]=u&255,f+4},s.prototype.writeBigInt64LE=Mt(function(u,f=0){return vl(this,u,f,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=Mt(function(u,f=0){return El(this,u,f,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Sl(p,u,f,b,A,T){if(f+b>p.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("Index out of range")}function Al(p,u,f,b,A){return u=+u,f=f>>>0,A||Sl(p,u,f,4),e.write(p,u,f,b,23,4),f+4}s.prototype.writeFloatLE=function(u,f,b){return Al(this,u,f,!0,b)},s.prototype.writeFloatBE=function(u,f,b){return Al(this,u,f,!1,b)};function Il(p,u,f,b,A){return u=+u,f=f>>>0,A||Sl(p,u,f,8),e.write(p,u,f,b,52,8),f+8}s.prototype.writeDoubleLE=function(u,f,b){return Il(this,u,f,!0,b)},s.prototype.writeDoubleBE=function(u,f,b){return Il(this,u,f,!1,b)},s.prototype.copy=function(u,f,b,A){if(!s.isBuffer(u))throw new TypeError("argument should be a Buffer");if(b||(b=0),!A&&A!==0&&(A=this.length),f>=u.length&&(f=u.length),f||(f=0),A>0&&A<b&&(A=b),A===b||u.length===0||this.length===0)return 0;if(f<0)throw new RangeError("targetStart out of bounds");if(b<0||b>=this.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("sourceEnd out of bounds");A>this.length&&(A=this.length),u.length-f<A-b&&(A=u.length-f+b);let T=A-b;return this===u&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(f,b,A):Uint8Array.prototype.set.call(u,this.subarray(b,A),f),T},s.prototype.fill=function(u,f,b,A){if(typeof u=="string"){if(typeof f=="string"?(A=f,f=0,b=this.length):typeof b=="string"&&(A=b,b=this.length),A!==void 0&&typeof A!="string")throw new TypeError("encoding must be a string");if(typeof A=="string"&&!s.isEncoding(A))throw new TypeError("Unknown encoding: "+A);if(u.length===1){let P=u.charCodeAt(0);(A==="utf8"&&P<128||A==="latin1")&&(u=P)}}else typeof u=="number"?u=u&255:typeof u=="boolean"&&(u=Number(u));if(f<0||this.length<f||this.length<b)throw new RangeError("Out of range index");if(b<=f)return this;f=f>>>0,b=b===void 0?this.length:b>>>0,u||(u=0);let T;if(typeof u=="number")for(T=f;T<b;++T)this[T]=u;else{let P=s.isBuffer(u)?u:s.from(u,A),$=P.length;if($===0)throw new TypeError('The value "'+u+'" is invalid for argument "value"');for(T=0;T<b-f;++T)this[T+f]=P[T%$]}return this};let Or={};function hs(p,u,f){Or[p]=class extends f{constructor(){super(),Object.defineProperty(this,"message",{value:u.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${p}]`,this.stack,delete this.name}get code(){return p}set code(A){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:A,writable:!0})}toString(){return`${this.name} [${p}]: ${this.message}`}}}hs("ERR_BUFFER_OUT_OF_BOUNDS",function(p){return p?`${p} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),hs("ERR_INVALID_ARG_TYPE",function(p,u){return`The "${p}" argument must be of type number. Received type ${typeof u}`},TypeError),hs("ERR_OUT_OF_RANGE",function(p,u,f){let b=`The value of "${p}" is out of range.`,A=f;return Number.isInteger(f)&&Math.abs(f)>2**32?A=Tl(String(f)):typeof f=="bigint"&&(A=String(f),(f>BigInt(2)**BigInt(32)||f<-(BigInt(2)**BigInt(32)))&&(A=Tl(A)),A+="n"),b+=` It must be ${u}. Received ${A}`,b},RangeError);function Tl(p){let u="",f=p.length,b=p[0]==="-"?1:0;for(;f>=b+4;f-=3)u=`_${p.slice(f-3,f)}${u}`;return`${p.slice(0,f)}${u}`}function Dg(p,u,f){xr(u,"offset"),(p[u]===void 0||p[u+f]===void 0)&&fi(u,p.length-(f+1))}function Rl(p,u,f,b,A,T){if(p>f||p<u){let P=typeof u=="bigint"?"n":"",$;throw T>3?u===0||u===BigInt(0)?$=`>= 0${P} and < 2${P} ** ${(T+1)*8}${P}`:$=`>= -(2${P} ** ${(T+1)*8-1}${P}) and < 2 ** ${(T+1)*8-1}${P}`:$=`>= ${u}${P} and <= ${f}${P}`,new Or.ERR_OUT_OF_RANGE("value",$,p)}Dg(b,A,T)}function xr(p,u){if(typeof p!="number")throw new Or.ERR_INVALID_ARG_TYPE(u,"number",p)}function fi(p,u,f){throw Math.floor(p)!==p?(xr(p,f),new Or.ERR_OUT_OF_RANGE(f||"offset","an integer",p)):u<0?new Or.ERR_BUFFER_OUT_OF_BOUNDS:new Or.ERR_OUT_OF_RANGE(f||"offset",`>= ${f?1:0} and <= ${u}`,p)}let jg=/[^+/0-9A-Za-z-_]/g;function Fg(p){if(p=p.split("=")[0],p=p.trim().replace(jg,""),p.length<2)return"";for(;p.length%4!==0;)p=p+"=";return p}function ds(p,u){u=u||1/0;let f,b=p.length,A=null,T=[];for(let P=0;P<b;++P){if(f=p.charCodeAt(P),f>55295&&f<57344){if(!A){if(f>56319){(u-=3)>-1&&T.push(239,191,189);continue}else if(P+1===b){(u-=3)>-1&&T.push(239,191,189);continue}A=f;continue}if(f<56320){(u-=3)>-1&&T.push(239,191,189),A=f;continue}f=(A-55296<<10|f-56320)+65536}else A&&(u-=3)>-1&&T.push(239,191,189);if(A=null,f<128){if((u-=1)<0)break;T.push(f)}else if(f<2048){if((u-=2)<0)break;T.push(f>>6|192,f&63|128)}else if(f<65536){if((u-=3)<0)break;T.push(f>>12|224,f>>6&63|128,f&63|128)}else if(f<1114112){if((u-=4)<0)break;T.push(f>>18|240,f>>12&63|128,f>>6&63|128,f&63|128)}else throw new Error("Invalid code point")}return T}function Wg(p){let u=[];for(let f=0;f<p.length;++f)u.push(p.charCodeAt(f)&255);return u}function $g(p,u){let f,b,A,T=[];for(let P=0;P<p.length&&!((u-=2)<0);++P)f=p.charCodeAt(P),b=f>>8,A=f%256,T.push(A),T.push(b);return T}function Cl(p){return t.toByteArray(Fg(p))}function ji(p,u,f,b){let A;for(A=0;A<b&&!(A+f>=u.length||A>=p.length);++A)u[A+f]=p[A];return A}function Ye(p,u){return p instanceof u||p!=null&&p.constructor!=null&&p.constructor.name!=null&&p.constructor.name===u.name}function ps(p){return p!==p}let Hg=function(){let p="0123456789abcdef",u=new Array(256);for(let f=0;f<16;++f){let b=f*16;for(let A=0;A<16;++A)u[b+A]=p[f]+p[A]}return u}();function Mt(p){return typeof BigInt>"u"?Vg:p}function Vg(){throw new Error("BigInt not supported")}return Zt}var ci,Vu,Hi,zu,Zt,Ku,Ut,x,ey,ty,be=_e(()=>{_();v();m();ci={},Vu=!1;Hi={},zu=!1;Zt={},Ku=!1;Ut=Zg();Ut.Buffer;Ut.SlowBuffer;Ut.INSPECT_MAX_BYTES;Ut.kMaxLength;x=Ut.Buffer,ey=Ut.INSPECT_MAX_BYTES,ty=Ut.kMaxLength});var v=_e(()=>{be()});var Gu=M(ms=>{"use strict";_();v();m();Object.defineProperty(ms,"__esModule",{value:!0});var _s=class{constructor(e){this.aliasToTopic={},this.max=e}put(e,r){return r===0||r>this.max?!1:(this.aliasToTopic[r]=e,this.length=Object.keys(this.aliasToTopic).length,!0)}getTopicByAlias(e){return this.aliasToTopic[e]}clear(){this.aliasToTopic={}}};ms.default=_s});var ce=M((OA,Qu)=>{"use strict";_();v();m();Qu.exports={ArrayIsArray(t){return Array.isArray(t)},ArrayPrototypeIncludes(t,e){return t.includes(e)},ArrayPrototypeIndexOf(t,e){return t.indexOf(e)},ArrayPrototypeJoin(t,e){return t.join(e)},ArrayPrototypeMap(t,e){return t.map(e)},ArrayPrototypePop(t,e){return t.pop(e)},ArrayPrototypePush(t,e){return t.push(e)},ArrayPrototypeSlice(t,e,r){return t.slice(e,r)},Error,FunctionPrototypeCall(t,e,...r){return t.call(e,...r)},FunctionPrototypeSymbolHasInstance(t,e){return Function.prototype[Symbol.hasInstance].call(t,e)},MathFloor:Math.floor,Number,NumberIsInteger:Number.isInteger,NumberIsNaN:Number.isNaN,NumberMAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER,NumberMIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER,NumberParseInt:Number.parseInt,ObjectDefineProperties(t,e){return Object.defineProperties(t,e)},ObjectDefineProperty(t,e,r){return Object.defineProperty(t,e,r)},ObjectGetOwnPropertyDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)},ObjectKeys(t){return Object.keys(t)},ObjectSetPrototypeOf(t,e){return Object.setPrototypeOf(t,e)},Promise,PromisePrototypeCatch(t,e){return t.catch(e)},PromisePrototypeThen(t,e,r){return t.then(e,r)},PromiseReject(t){return Promise.reject(t)},ReflectApply:Reflect.apply,RegExpPrototypeTest(t,e){return t.test(e)},SafeSet:Set,String,StringPrototypeSlice(t,e,r){return t.slice(e,r)},StringPrototypeToLowerCase(t){return t.toLowerCase()},StringPrototypeToUpperCase(t){return t.toUpperCase()},StringPrototypeTrim(t){return t.trim()},Symbol,SymbolFor:Symbol.for,SymbolAsyncIterator:Symbol.asyncIterator,SymbolHasInstance:Symbol.hasInstance,SymbolIterator:Symbol.iterator,TypedArrayPrototypeSet(t,e,r){return t.set(e,r)},Uint8Array}});var Je=M((WA,Es)=>{"use strict";_();v();m();var ry=(be(),X(me)),iy=Object.getPrototypeOf(async function(){}).constructor,Yu=globalThis.Blob||ry.Blob,ny=typeof Yu<"u"?function(e){return e instanceof Yu}:function(e){return!1},vs=class extends Error{constructor(e){if(!Array.isArray(e))throw new TypeError(`Expected input to be an Array, got ${typeof e}`);let r="";for(let i=0;i<e.length;i++)r+=`    ${e[i].stack}
`;super(r),this.name="AggregateError",this.errors=e}};Es.exports={AggregateError:vs,kEmptyObject:Object.freeze({}),once(t){let e=!1;return function(...r){e||(e=!0,t.apply(this,r))}},createDeferredPromise:function(){let t,e;return{promise:new Promise((i,n)=>{t=i,e=n}),resolve:t,reject:e}},promisify(t){return new Promise((e,r)=>{t((i,...n)=>i?r(i):e(...n))})},debuglog(){return function(){}},format(t,...e){return t.replace(/%([sdifj])/g,function(...[r,i]){let n=e.shift();return i==="f"?n.toFixed(6):i==="j"?JSON.stringify(n):i==="s"&&typeof n=="object"?`${n.constructor!==Object?n.constructor.name:""} {}`.trim():n.toString()})},inspect(t){switch(typeof t){case"string":if(t.includes("'"))if(t.includes('"')){if(!t.includes("`")&&!t.includes("${"))return`\`${t}\``}else return`"${t}"`;return`'${t}'`;case"number":return isNaN(t)?"NaN":Object.is(t,-0)?String(t):t;case"bigint":return`${String(t)}n`;case"boolean":case"undefined":return String(t);case"object":return"{}"}},types:{isAsyncFunction(t){return t instanceof iy},isArrayBufferView(t){return ArrayBuffer.isView(t)}},isBlob:ny};Es.exports.promisify.custom=Symbol.for("nodejs.util.promisify.custom")});var zi=M((XA,Vi)=>{"use strict";_();v();m();var{AbortController:Ju,AbortSignal:sy}=typeof self<"u"?self:typeof window<"u"?window:void 0;Vi.exports=Ju;Vi.exports.AbortSignal=sy;Vi.exports.default=Ju});var Ae=M((lI,ef)=>{"use strict";_();v();m();var{format:oy,inspect:Ki,AggregateError:ay}=Je(),ly=globalThis.AggregateError||ay,uy=Symbol("kIsNodeError"),fy=["string","function","number","object","Function","Object","boolean","bigint","symbol"],cy=/^([A-Z][a-z0-9]*)+$/,hy="__node_internal_",Gi={};function er(t,e){if(!t)throw new Gi.ERR_INTERNAL_ASSERTION(e)}function Xu(t){let e="",r=t.length,i=t[0]==="-"?1:0;for(;r>=i+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function dy(t,e,r){if(typeof e=="function")return er(e.length<=r.length,`Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${e.length}).`),e(...r);let i=(e.match(/%[dfijoOs]/g)||[]).length;return er(i===r.length,`Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${i}).`),r.length===0?e:oy(e,...r)}function ve(t,e,r){r||(r=Error);class i extends r{constructor(...o){super(dy(t,e,o))}toString(){return`${this.name} [${t}]: ${this.message}`}}Object.defineProperties(i.prototype,{name:{value:r.name,writable:!0,enumerable:!1,configurable:!0},toString:{value(){return`${this.name} [${t}]: ${this.message}`},writable:!0,enumerable:!1,configurable:!0}}),i.prototype.code=t,i.prototype[uy]=!0,Gi[t]=i}function Zu(t){let e=hy+t.name;return Object.defineProperty(t,"name",{value:e}),t}function py(t,e){if(t&&e&&t!==e){if(Array.isArray(e.errors))return e.errors.push(t),e;let r=new ly([e,t],e.message);return r.code=e.code,r}return t||e}var Ss=class extends Error{constructor(e="The operation was aborted",r=void 0){if(r!==void 0&&typeof r!="object")throw new Gi.ERR_INVALID_ARG_TYPE("options","Object",r);super(e,r),this.code="ABORT_ERR",this.name="AbortError"}};ve("ERR_ASSERTION","%s",Error);ve("ERR_INVALID_ARG_TYPE",(t,e,r)=>{er(typeof t=="string","'name' must be a string"),Array.isArray(e)||(e=[e]);let i="The ";t.endsWith(" argument")?i+=`${t} `:i+=`"${t}" ${t.includes(".")?"property":"argument"} `,i+="must be ";let n=[],o=[],s=[];for(let l of e)er(typeof l=="string","All expected entries have to be of type string"),fy.includes(l)?n.push(l.toLowerCase()):cy.test(l)?o.push(l):(er(l!=="object",'The value "object" should be written as "Object"'),s.push(l));if(o.length>0){let l=n.indexOf("object");l!==-1&&(n.splice(n,l,1),o.push("Object"))}if(n.length>0){switch(n.length){case 1:i+=`of type ${n[0]}`;break;case 2:i+=`one of type ${n[0]} or ${n[1]}`;break;default:{let l=n.pop();i+=`one of type ${n.join(", ")}, or ${l}`}}(o.length>0||s.length>0)&&(i+=" or ")}if(o.length>0){switch(o.length){case 1:i+=`an instance of ${o[0]}`;break;case 2:i+=`an instance of ${o[0]} or ${o[1]}`;break;default:{let l=o.pop();i+=`an instance of ${o.join(", ")}, or ${l}`}}s.length>0&&(i+=" or ")}switch(s.length){case 0:break;case 1:s[0].toLowerCase()!==s[0]&&(i+="an "),i+=`${s[0]}`;break;case 2:i+=`one of ${s[0]} or ${s[1]}`;break;default:{let l=s.pop();i+=`one of ${s.join(", ")}, or ${l}`}}if(r==null)i+=`. Received ${r}`;else if(typeof r=="function"&&r.name)i+=`. Received function ${r.name}`;else if(typeof r=="object"){var a;if((a=r.constructor)!==null&&a!==void 0&&a.name)i+=`. Received an instance of ${r.constructor.name}`;else{let l=Ki(r,{depth:-1});i+=`. Received ${l}`}}else{let l=Ki(r,{colors:!1});l.length>25&&(l=`${l.slice(0,25)}...`),i+=`. Received type ${typeof r} (${l})`}return i},TypeError);ve("ERR_INVALID_ARG_VALUE",(t,e,r="is invalid")=>{let i=Ki(e);return i.length>128&&(i=i.slice(0,128)+"..."),`The ${t.includes(".")?"property":"argument"} '${t}' ${r}. Received ${i}`},TypeError);ve("ERR_INVALID_RETURN_VALUE",(t,e,r)=>{var i;let n=r!=null&&(i=r.constructor)!==null&&i!==void 0&&i.name?`instance of ${r.constructor.name}`:`type ${typeof r}`;return`Expected ${t} to be returned from the "${e}" function but got ${n}.`},TypeError);ve("ERR_MISSING_ARGS",(...t)=>{er(t.length>0,"At least one arg needs to be specified");let e,r=t.length;switch(t=(Array.isArray(t)?t:[t]).map(i=>`"${i}"`).join(" or "),r){case 1:e+=`The ${t[0]} argument`;break;case 2:e+=`The ${t[0]} and ${t[1]} arguments`;break;default:{let i=t.pop();e+=`The ${t.join(", ")}, and ${i} arguments`}break}return`${e} must be specified`},TypeError);ve("ERR_OUT_OF_RANGE",(t,e,r)=>{er(e,'Missing "range" argument');let i;return Number.isInteger(r)&&Math.abs(r)>2**32?i=Xu(String(r)):typeof r=="bigint"?(i=String(r),(r>2n**32n||r<-(2n**32n))&&(i=Xu(i)),i+="n"):i=Ki(r),`The value of "${t}" is out of range. It must be ${e}. Received ${i}`},RangeError);ve("ERR_MULTIPLE_CALLBACK","Callback called multiple times",Error);ve("ERR_METHOD_NOT_IMPLEMENTED","The %s method is not implemented",Error);ve("ERR_STREAM_ALREADY_FINISHED","Cannot call %s after a stream was finished",Error);ve("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable",Error);ve("ERR_STREAM_DESTROYED","Cannot call %s after a stream was destroyed",Error);ve("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError);ve("ERR_STREAM_PREMATURE_CLOSE","Premature close",Error);ve("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF",Error);ve("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event",Error);ve("ERR_STREAM_WRITE_AFTER_END","write after end",Error);ve("ERR_UNKNOWN_ENCODING","Unknown encoding: %s",TypeError);ef.exports={AbortError:Ss,aggregateTwoErrors:Zu(py),hideStackFrames:Zu,codes:Gi}});var hi=M((wI,ff)=>{"use strict";_();v();m();var{ArrayIsArray:Is,ArrayPrototypeIncludes:sf,ArrayPrototypeJoin:of,ArrayPrototypeMap:gy,NumberIsInteger:Ts,NumberIsNaN:yy,NumberMAX_SAFE_INTEGER:by,NumberMIN_SAFE_INTEGER:wy,NumberParseInt:_y,ObjectPrototypeHasOwnProperty:my,RegExpPrototypeExec:af,String:vy,StringPrototypeToUpperCase:Ey,StringPrototypeTrim:Sy}=ce(),{hideStackFrames:Ue,codes:{ERR_SOCKET_BAD_PORT:Ay,ERR_INVALID_ARG_TYPE:Ie,ERR_INVALID_ARG_VALUE:Lr,ERR_OUT_OF_RANGE:tr,ERR_UNKNOWN_SIGNAL:tf}}=Ae(),{normalizeEncoding:Iy}=Je(),{isAsyncFunction:Ty,isArrayBufferView:Ry}=Je().types,rf={};function Cy(t){return t===(t|0)}function By(t){return t===t>>>0}var Py=/^[0-7]+$/,ky="must be a 32-bit unsigned integer or an octal string";function Oy(t,e,r){if(typeof t>"u"&&(t=r),typeof t=="string"){if(af(Py,t)===null)throw new Lr(e,t,ky);t=_y(t,8)}return lf(t,e),t}var xy=Ue((t,e,r=wy,i=by)=>{if(typeof t!="number")throw new Ie(e,"number",t);if(!Ts(t))throw new tr(e,"an integer",t);if(t<r||t>i)throw new tr(e,`>= ${r} && <= ${i}`,t)}),My=Ue((t,e,r=-2147483648,i=2147483647)=>{if(typeof t!="number")throw new Ie(e,"number",t);if(!Ts(t))throw new tr(e,"an integer",t);if(t<r||t>i)throw new tr(e,`>= ${r} && <= ${i}`,t)}),lf=Ue((t,e,r=!1)=>{if(typeof t!="number")throw new Ie(e,"number",t);if(!Ts(t))throw new tr(e,"an integer",t);let i=r?1:0,n=4294967295;if(t<i||t>n)throw new tr(e,`>= ${i} && <= ${n}`,t)});function Rs(t,e){if(typeof t!="string")throw new Ie(e,"string",t)}function Ly(t,e,r=void 0,i){if(typeof t!="number")throw new Ie(e,"number",t);if(r!=null&&t<r||i!=null&&t>i||(r!=null||i!=null)&&yy(t))throw new tr(e,`${r!=null?`>= ${r}`:""}${r!=null&&i!=null?" && ":""}${i!=null?`<= ${i}`:""}`,t)}var Uy=Ue((t,e,r)=>{if(!sf(r,t)){let n="must be one of: "+of(gy(r,o=>typeof o=="string"?`'${o}'`:vy(o)),", ");throw new Lr(e,t,n)}});function uf(t,e){if(typeof t!="boolean")throw new Ie(e,"boolean",t)}function As(t,e,r){return t==null||!my(t,e)?r:t[e]}var Ny=Ue((t,e,r=null)=>{let i=As(r,"allowArray",!1),n=As(r,"allowFunction",!1);if(!As(r,"nullable",!1)&&t===null||!i&&Is(t)||typeof t!="object"&&(!n||typeof t!="function"))throw new Ie(e,"Object",t)}),qy=Ue((t,e)=>{if(t!=null&&typeof t!="object"&&typeof t!="function")throw new Ie(e,"a dictionary",t)}),Cs=Ue((t,e,r=0)=>{if(!Is(t))throw new Ie(e,"Array",t);if(t.length<r){let i=`must be longer than ${r}`;throw new Lr(e,t,i)}});function Dy(t,e){Cs(t,e);for(let r=0;r<t.length;r++)Rs(t[r],`${e}[${r}]`)}function jy(t,e){Cs(t,e);for(let r=0;r<t.length;r++)uf(t[r],`${e}[${r}]`)}function Fy(t,e="signal"){if(Rs(t,e),rf[t]===void 0)throw rf[Ey(t)]!==void 0?new tf(t+" (signals must use all capital letters)"):new tf(t)}var Wy=Ue((t,e="buffer")=>{if(!Ry(t))throw new Ie(e,["Buffer","TypedArray","DataView"],t)});function $y(t,e){let r=Iy(e),i=t.length;if(r==="hex"&&i%2!==0)throw new Lr("encoding",e,`is invalid for data of length ${i}`)}function Hy(t,e="Port",r=!0){if(typeof t!="number"&&typeof t!="string"||typeof t=="string"&&Sy(t).length===0||+t!==+t>>>0||t>65535||t===0&&!r)throw new Ay(e,t,r);return t|0}var Vy=Ue((t,e)=>{if(t!==void 0&&(t===null||typeof t!="object"||!("aborted"in t)))throw new Ie(e,"AbortSignal",t)}),zy=Ue((t,e)=>{if(typeof t!="function")throw new Ie(e,"Function",t)}),Ky=Ue((t,e)=>{if(typeof t!="function"||Ty(t))throw new Ie(e,"Function",t)}),Gy=Ue((t,e)=>{if(t!==void 0)throw new Ie(e,"undefined",t)});function Qy(t,e,r){if(!sf(r,t))throw new Ie(e,`('${of(r,"|")}')`,t)}var Yy=/^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;function nf(t,e){if(typeof t>"u"||!af(Yy,t))throw new Lr(e,t,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}function Jy(t){if(typeof t=="string")return nf(t,"hints"),t;if(Is(t)){let e=t.length,r="";if(e===0)return r;for(let i=0;i<e;i++){let n=t[i];nf(n,"hints"),r+=n,i!==e-1&&(r+=", ")}return r}throw new Lr("hints",t,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}ff.exports={isInt32:Cy,isUint32:By,parseFileMode:Oy,validateArray:Cs,validateStringArray:Dy,validateBooleanArray:jy,validateBoolean:uf,validateBuffer:Wy,validateDictionary:qy,validateEncoding:$y,validateFunction:zy,validateInt32:My,validateInteger:xy,validateNumber:Ly,validateObject:Ny,validateOneOf:Uy,validatePlainFunction:Ky,validatePort:Hy,validateSignalName:Fy,validateString:Rs,validateUint32:lf,validateUndefined:Gy,validateUnion:Qy,validateAbortSignal:Vy,validateLinkHeaderValue:Jy}});var Nt=M((CI,pf)=>{_();v();m();var ae=pf.exports={},Xe,Ze;function Bs(){throw new Error("setTimeout has not been defined")}function Ps(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Xe=setTimeout:Xe=Bs}catch{Xe=Bs}try{typeof clearTimeout=="function"?Ze=clearTimeout:Ze=Ps}catch{Ze=Ps}})();function cf(t){if(Xe===setTimeout)return setTimeout(t,0);if((Xe===Bs||!Xe)&&setTimeout)return Xe=setTimeout,setTimeout(t,0);try{return Xe(t,0)}catch{try{return Xe.call(null,t,0)}catch{return Xe.call(this,t,0)}}}function Xy(t){if(Ze===clearTimeout)return clearTimeout(t);if((Ze===Ps||!Ze)&&clearTimeout)return Ze=clearTimeout,clearTimeout(t);try{return Ze(t)}catch{try{return Ze.call(null,t)}catch{return Ze.call(this,t)}}}var _t=[],Ur=!1,rr,Qi=-1;function Zy(){!Ur||!rr||(Ur=!1,rr.length?_t=rr.concat(_t):Qi=-1,_t.length&&hf())}function hf(){if(!Ur){var t=cf(Zy);Ur=!0;for(var e=_t.length;e;){for(rr=_t,_t=[];++Qi<e;)rr&&rr[Qi].run();Qi=-1,e=_t.length}rr=null,Ur=!1,Xy(t)}}ae.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];_t.push(new df(t,e)),_t.length===1&&!Ur&&cf(hf)};function df(t,e){this.fun=t,this.array=e}df.prototype.run=function(){this.fun.apply(null,this.array)};ae.title="browser";ae.browser=!0;ae.env={};ae.argv=[];ae.version="";ae.versions={};function mt(){}ae.on=mt;ae.addListener=mt;ae.once=mt;ae.off=mt;ae.removeListener=mt;ae.removeAllListeners=mt;ae.emit=mt;ae.prependListener=mt;ae.prependOnceListener=mt;ae.listeners=function(t){return[]};ae.binding=function(t){throw new Error("process.binding is not supported")};ae.cwd=function(){return"/"};ae.chdir=function(t){throw new Error("process.chdir is not supported")};ae.umask=function(){return 0}});var tt=M((qI,Pf)=>{"use strict";_();v();m();var{Symbol:Yi,SymbolAsyncIterator:gf,SymbolIterator:yf,SymbolFor:bf}=ce(),wf=Yi("kDestroyed"),_f=Yi("kIsErrored"),ks=Yi("kIsReadable"),mf=Yi("kIsDisturbed"),eb=bf("nodejs.webstream.isClosedPromise"),tb=bf("nodejs.webstream.controllerErrorFunction");function Ji(t,e=!1){var r;return!!(t&&typeof t.pipe=="function"&&typeof t.on=="function"&&(!e||typeof t.pause=="function"&&typeof t.resume=="function")&&(!t._writableState||((r=t._readableState)===null||r===void 0?void 0:r.readable)!==!1)&&(!t._writableState||t._readableState))}function Xi(t){var e;return!!(t&&typeof t.write=="function"&&typeof t.on=="function"&&(!t._readableState||((e=t._writableState)===null||e===void 0?void 0:e.writable)!==!1))}function rb(t){return!!(t&&typeof t.pipe=="function"&&t._readableState&&typeof t.on=="function"&&typeof t.write=="function")}function et(t){return t&&(t._readableState||t._writableState||typeof t.write=="function"&&typeof t.on=="function"||typeof t.pipe=="function"&&typeof t.on=="function")}function vf(t){return!!(t&&!et(t)&&typeof t.pipeThrough=="function"&&typeof t.getReader=="function"&&typeof t.cancel=="function")}function Ef(t){return!!(t&&!et(t)&&typeof t.getWriter=="function"&&typeof t.abort=="function")}function Sf(t){return!!(t&&!et(t)&&typeof t.readable=="object"&&typeof t.writable=="object")}function ib(t){return vf(t)||Ef(t)||Sf(t)}function nb(t,e){return t==null?!1:e===!0?typeof t[gf]=="function":e===!1?typeof t[yf]=="function":typeof t[gf]=="function"||typeof t[yf]=="function"}function Zi(t){if(!et(t))return null;let e=t._writableState,r=t._readableState,i=e||r;return!!(t.destroyed||t[wf]||i!=null&&i.destroyed)}function Af(t){if(!Xi(t))return null;if(t.writableEnded===!0)return!0;let e=t._writableState;return e!=null&&e.errored?!1:typeof e?.ended!="boolean"?null:e.ended}function sb(t,e){if(!Xi(t))return null;if(t.writableFinished===!0)return!0;let r=t._writableState;return r!=null&&r.errored?!1:typeof r?.finished!="boolean"?null:!!(r.finished||e===!1&&r.ended===!0&&r.length===0)}function ob(t){if(!Ji(t))return null;if(t.readableEnded===!0)return!0;let e=t._readableState;return!e||e.errored?!1:typeof e?.ended!="boolean"?null:e.ended}function If(t,e){if(!Ji(t))return null;let r=t._readableState;return r!=null&&r.errored?!1:typeof r?.endEmitted!="boolean"?null:!!(r.endEmitted||e===!1&&r.ended===!0&&r.length===0)}function Tf(t){return t&&t[ks]!=null?t[ks]:typeof t?.readable!="boolean"?null:Zi(t)?!1:Ji(t)&&t.readable&&!If(t)}function Rf(t){return typeof t?.writable!="boolean"?null:Zi(t)?!1:Xi(t)&&t.writable&&!Af(t)}function ab(t,e){return et(t)?Zi(t)?!0:!(e?.readable!==!1&&Tf(t)||e?.writable!==!1&&Rf(t)):null}function lb(t){var e,r;return et(t)?t.writableErrored?t.writableErrored:(e=(r=t._writableState)===null||r===void 0?void 0:r.errored)!==null&&e!==void 0?e:null:null}function ub(t){var e,r;return et(t)?t.readableErrored?t.readableErrored:(e=(r=t._readableState)===null||r===void 0?void 0:r.errored)!==null&&e!==void 0?e:null:null}function fb(t){if(!et(t))return null;if(typeof t.closed=="boolean")return t.closed;let e=t._writableState,r=t._readableState;return typeof e?.closed=="boolean"||typeof r?.closed=="boolean"?e?.closed||r?.closed:typeof t._closed=="boolean"&&Cf(t)?t._closed:null}function Cf(t){return typeof t._closed=="boolean"&&typeof t._defaultKeepAlive=="boolean"&&typeof t._removedConnection=="boolean"&&typeof t._removedContLen=="boolean"}function Bf(t){return typeof t._sent100=="boolean"&&Cf(t)}function cb(t){var e;return typeof t._consuming=="boolean"&&typeof t._dumped=="boolean"&&((e=t.req)===null||e===void 0?void 0:e.upgradeOrConnect)===void 0}function hb(t){if(!et(t))return null;let e=t._writableState,r=t._readableState,i=e||r;return!i&&Bf(t)||!!(i&&i.autoDestroy&&i.emitClose&&i.closed===!1)}function db(t){var e;return!!(t&&((e=t[mf])!==null&&e!==void 0?e:t.readableDidRead||t.readableAborted))}function pb(t){var e,r,i,n,o,s,a,l,c,h;return!!(t&&((e=(r=(i=(n=(o=(s=t[_f])!==null&&s!==void 0?s:t.readableErrored)!==null&&o!==void 0?o:t.writableErrored)!==null&&n!==void 0?n:(a=t._readableState)===null||a===void 0?void 0:a.errorEmitted)!==null&&i!==void 0?i:(l=t._writableState)===null||l===void 0?void 0:l.errorEmitted)!==null&&r!==void 0?r:(c=t._readableState)===null||c===void 0?void 0:c.errored)!==null&&e!==void 0?e:!((h=t._writableState)===null||h===void 0)&&h.errored))}Pf.exports={kDestroyed:wf,isDisturbed:db,kIsDisturbed:mf,isErrored:pb,kIsErrored:_f,isReadable:Tf,kIsReadable:ks,kIsClosedPromise:eb,kControllerErrorFunction:tb,isClosed:fb,isDestroyed:Zi,isDuplexNodeStream:rb,isFinished:ab,isIterable:nb,isReadableNodeStream:Ji,isReadableStream:vf,isReadableEnded:ob,isReadableFinished:If,isReadableErrored:ub,isNodeStream:et,isWebStream:ib,isWritable:Rf,isWritableNodeStream:Xi,isWritableStream:Ef,isWritableEnded:Af,isWritableFinished:sb,isWritableErrored:lb,isServerRequest:cb,isServerResponse:Bf,willEmitClose:hb,isTransformStream:Sf}});var vt=M((GI,Us)=>{_();v();m();var qt=Nt(),{AbortError:Df,codes:gb}=Ae(),{ERR_INVALID_ARG_TYPE:yb,ERR_STREAM_PREMATURE_CLOSE:kf}=gb,{kEmptyObject:xs,once:Ms}=Je(),{validateAbortSignal:bb,validateFunction:wb,validateObject:_b,validateBoolean:mb}=hi(),{Promise:vb,PromisePrototypeThen:Eb}=ce(),{isClosed:Sb,isReadable:Of,isReadableNodeStream:Os,isReadableStream:Ab,isReadableFinished:xf,isReadableErrored:Mf,isWritable:Lf,isWritableNodeStream:Uf,isWritableStream:Ib,isWritableFinished:Nf,isWritableErrored:qf,isNodeStream:Tb,willEmitClose:Rb,kIsClosedPromise:Cb}=tt();function Bb(t){return t.setHeader&&typeof t.abort=="function"}var Ls=()=>{};function jf(t,e,r){var i,n;if(arguments.length===2?(r=e,e=xs):e==null?e=xs:_b(e,"options"),wb(r,"callback"),bb(e.signal,"options.signal"),r=Ms(r),Ab(t)||Ib(t))return Pb(t,e,r);if(!Tb(t))throw new yb("stream",["ReadableStream","WritableStream","Stream"],t);let o=(i=e.readable)!==null&&i!==void 0?i:Os(t),s=(n=e.writable)!==null&&n!==void 0?n:Uf(t),a=t._writableState,l=t._readableState,c=()=>{t.writable||g()},h=Rb(t)&&Os(t)===o&&Uf(t)===s,d=Nf(t,!1),g=()=>{d=!0,t.destroyed&&(h=!1),!(h&&(!t.readable||o))&&(!o||y)&&r.call(t)},y=xf(t,!1),w=()=>{y=!0,t.destroyed&&(h=!1),!(h&&(!t.writable||s))&&(!s||d)&&r.call(t)},E=N=>{r.call(t,N)},S=Sb(t),I=()=>{S=!0;let N=qf(t)||Mf(t);if(N&&typeof N!="boolean")return r.call(t,N);if(o&&!y&&Os(t,!0)&&!xf(t,!1))return r.call(t,new kf);if(s&&!d&&!Nf(t,!1))return r.call(t,new kf);r.call(t)},B=()=>{S=!0;let N=qf(t)||Mf(t);if(N&&typeof N!="boolean")return r.call(t,N);r.call(t)},R=()=>{t.req.on("finish",g)};Bb(t)?(t.on("complete",g),h||t.on("abort",I),t.req?R():t.on("request",R)):s&&!a&&(t.on("end",c),t.on("close",c)),!h&&typeof t.aborted=="boolean"&&t.on("aborted",I),t.on("end",w),t.on("finish",g),e.error!==!1&&t.on("error",E),t.on("close",I),S?qt.nextTick(I):a!=null&&a.errorEmitted||l!=null&&l.errorEmitted?h||qt.nextTick(B):(!o&&(!h||Of(t))&&(d||Lf(t)===!1)||!s&&(!h||Lf(t))&&(y||Of(t)===!1)||l&&t.req&&t.aborted)&&qt.nextTick(B);let U=()=>{r=Ls,t.removeListener("aborted",I),t.removeListener("complete",g),t.removeListener("abort",I),t.removeListener("request",R),t.req&&t.req.removeListener("finish",g),t.removeListener("end",c),t.removeListener("close",c),t.removeListener("finish",g),t.removeListener("end",w),t.removeListener("error",E),t.removeListener("close",I)};if(e.signal&&!S){let N=()=>{let W=r;U(),W.call(t,new Df(void 0,{cause:e.signal.reason}))};if(e.signal.aborted)qt.nextTick(N);else{let W=r;r=Ms((...K)=>{e.signal.removeEventListener("abort",N),W.apply(t,K)}),e.signal.addEventListener("abort",N)}}return U}function Pb(t,e,r){let i=!1,n=Ls;if(e.signal)if(n=()=>{i=!0,r.call(t,new Df(void 0,{cause:e.signal.reason}))},e.signal.aborted)qt.nextTick(n);else{let s=r;r=Ms((...a)=>{e.signal.removeEventListener("abort",n),s.apply(t,a)}),e.signal.addEventListener("abort",n)}let o=(...s)=>{i||qt.nextTick(()=>r.apply(t,s))};return Eb(t[Cb].promise,o,o),Ls}function kb(t,e){var r;let i=!1;return e===null&&(e=xs),(r=e)!==null&&r!==void 0&&r.cleanup&&(mb(e.cleanup,"cleanup"),i=e.cleanup),new vb((n,o)=>{let s=jf(t,e,a=>{i&&s(),a?o(a):n()})})}Us.exports=jf;Us.exports.finished=kb});var ir=M((nT,Gf)=>{"use strict";_();v();m();var rt=Nt(),{aggregateTwoErrors:Ob,codes:{ERR_MULTIPLE_CALLBACK:xb},AbortError:Mb}=Ae(),{Symbol:$f}=ce(),{kDestroyed:Lb,isDestroyed:Ub,isFinished:Nb,isServerRequest:qb}=tt(),Hf=$f("kDestroy"),Ns=$f("kConstruct");function Vf(t,e,r){t&&(t.stack,e&&!e.errored&&(e.errored=t),r&&!r.errored&&(r.errored=t))}function Db(t,e){let r=this._readableState,i=this._writableState,n=i||r;return i!=null&&i.destroyed||r!=null&&r.destroyed?(typeof e=="function"&&e(),this):(Vf(t,i,r),i&&(i.destroyed=!0),r&&(r.destroyed=!0),n.constructed?Ff(this,t,e):this.once(Hf,function(o){Ff(this,Ob(o,t),e)}),this)}function Ff(t,e,r){let i=!1;function n(o){if(i)return;i=!0;let s=t._readableState,a=t._writableState;Vf(o,a,s),a&&(a.closed=!0),s&&(s.closed=!0),typeof r=="function"&&r(o),o?rt.nextTick(jb,t,o):rt.nextTick(zf,t)}try{t._destroy(e||null,n)}catch(o){n(o)}}function jb(t,e){qs(t,e),zf(t)}function zf(t){let e=t._readableState,r=t._writableState;r&&(r.closeEmitted=!0),e&&(e.closeEmitted=!0),(r!=null&&r.emitClose||e!=null&&e.emitClose)&&t.emit("close")}function qs(t,e){let r=t._readableState,i=t._writableState;i!=null&&i.errorEmitted||r!=null&&r.errorEmitted||(i&&(i.errorEmitted=!0),r&&(r.errorEmitted=!0),t.emit("error",e))}function Fb(){let t=this._readableState,e=this._writableState;t&&(t.constructed=!0,t.closed=!1,t.closeEmitted=!1,t.destroyed=!1,t.errored=null,t.errorEmitted=!1,t.reading=!1,t.ended=t.readable===!1,t.endEmitted=t.readable===!1),e&&(e.constructed=!0,e.destroyed=!1,e.closed=!1,e.closeEmitted=!1,e.errored=null,e.errorEmitted=!1,e.finalCalled=!1,e.prefinished=!1,e.ended=e.writable===!1,e.ending=e.writable===!1,e.finished=e.writable===!1)}function Ds(t,e,r){let i=t._readableState,n=t._writableState;if(n!=null&&n.destroyed||i!=null&&i.destroyed)return this;i!=null&&i.autoDestroy||n!=null&&n.autoDestroy?t.destroy(e):e&&(e.stack,n&&!n.errored&&(n.errored=e),i&&!i.errored&&(i.errored=e),r?rt.nextTick(qs,t,e):qs(t,e))}function Wb(t,e){if(typeof t._construct!="function")return;let r=t._readableState,i=t._writableState;r&&(r.constructed=!1),i&&(i.constructed=!1),t.once(Ns,e),!(t.listenerCount(Ns)>1)&&rt.nextTick($b,t)}function $b(t){let e=!1;function r(i){if(e){Ds(t,i??new xb);return}e=!0;let n=t._readableState,o=t._writableState,s=o||n;n&&(n.constructed=!0),o&&(o.constructed=!0),s.destroyed?t.emit(Hf,i):i?Ds(t,i,!0):rt.nextTick(Hb,t)}try{t._construct(i=>{rt.nextTick(r,i)})}catch(i){rt.nextTick(r,i)}}function Hb(t){t.emit(Ns)}function Wf(t){return t?.setHeader&&typeof t.abort=="function"}function Kf(t){t.emit("close")}function Vb(t,e){t.emit("error",e),rt.nextTick(Kf,t)}function zb(t,e){!t||Ub(t)||(!e&&!Nb(t)&&(e=new Mb),qb(t)?(t.socket=null,t.destroy(e)):Wf(t)?t.abort():Wf(t.req)?t.req.abort():typeof t.destroy=="function"?t.destroy(e):typeof t.close=="function"?t.close():e?rt.nextTick(Vb,t,e):rt.nextTick(Kf,t),t.destroyed||(t[Lb]=!0))}Gf.exports={construct:Wb,destroyer:zb,destroy:Db,undestroy:Fb,errorOrDestroy:Ds}});function Y(){Y.init.call(this)}function en(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function nc(t){return t._maxListeners===void 0?Y.defaultMaxListeners:t._maxListeners}function Xf(t,e,r,i){var n,o,s,a;if(en(r),(o=t._events)===void 0?(o=t._events=Object.create(null),t._eventsCount=0):(o.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),s=o[e]),s===void 0)s=o[e]=r,++t._eventsCount;else if(typeof s=="function"?s=o[e]=i?[r,s]:[s,r]:i?s.unshift(r):s.push(r),(n=nc(t))>0&&s.length>n&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=s.length,a=l,console&&console.warn&&console.warn(a)}return t}function Kb(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Zf(t,e,r){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},n=Kb.bind(i);return n.listener=r,i.wrapFn=n,n}function ec(t,e,r){var i=t._events;if(i===void 0)return[];var n=i[e];return n===void 0?[]:typeof n=="function"?r?[n.listener||n]:[n]:r?function(o){for(var s=new Array(o.length),a=0;a<s.length;++a)s[a]=o[a].listener||o[a];return s}(n):sc(n,n.length)}function tc(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}function sc(t,e){for(var r=new Array(e),i=0;i<e;++i)r[i]=t[i];return r}var rc,ic,Nr,Qf,Yf,Jf,Be,js=_e(()=>{_();v();m();Nr=typeof Reflect=="object"?Reflect:null,Qf=Nr&&typeof Nr.apply=="function"?Nr.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};ic=Nr&&typeof Nr.ownKeys=="function"?Nr.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};Yf=Number.isNaN||function(t){return t!=t};rc=Y,Y.EventEmitter=Y,Y.prototype._events=void 0,Y.prototype._eventsCount=0,Y.prototype._maxListeners=void 0;Jf=10;Object.defineProperty(Y,"defaultMaxListeners",{enumerable:!0,get:function(){return Jf},set:function(t){if(typeof t!="number"||t<0||Yf(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Jf=t}}),Y.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},Y.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||Yf(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},Y.prototype.getMaxListeners=function(){return nc(this)},Y.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i=t==="error",n=this._events;if(n!==void 0)i=i&&n.error===void 0;else if(!i)return!1;if(i){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var a=n[t];if(a===void 0)return!1;if(typeof a=="function")Qf(a,this,e);else{var l=a.length,c=sc(a,l);for(r=0;r<l;++r)Qf(c[r],this,e)}return!0},Y.prototype.addListener=function(t,e){return Xf(this,t,e,!1)},Y.prototype.on=Y.prototype.addListener,Y.prototype.prependListener=function(t,e){return Xf(this,t,e,!0)},Y.prototype.once=function(t,e){return en(e),this.on(t,Zf(this,t,e)),this},Y.prototype.prependOnceListener=function(t,e){return en(e),this.prependListener(t,Zf(this,t,e)),this},Y.prototype.removeListener=function(t,e){var r,i,n,o,s;if(en(e),(i=this._events)===void 0)return this;if((r=i[t])===void 0)return this;if(r===e||r.listener===e)--this._eventsCount==0?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,r.listener||e));else if(typeof r!="function"){for(n=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){s=r[o].listener,n=o;break}if(n<0)return this;n===0?r.shift():function(a,l){for(;l+1<a.length;l++)a[l]=a[l+1];a.pop()}(r,n),r.length===1&&(i[t]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",t,s||e)}return this},Y.prototype.off=Y.prototype.removeListener,Y.prototype.removeAllListeners=function(t){var e,r,i;if((r=this._events)===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[t]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete r[t]),this;if(arguments.length===0){var n,o=Object.keys(r);for(i=0;i<o.length;++i)(n=o[i])!=="removeListener"&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(e=r[t])=="function")this.removeListener(t,e);else if(e!==void 0)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this},Y.prototype.listeners=function(t){return ec(this,t,!0)},Y.prototype.rawListeners=function(t){return ec(this,t,!1)},Y.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):tc.call(t,e)},Y.prototype.listenerCount=tc,Y.prototype.eventNames=function(){return this._eventsCount>0?ic(this._events):[]};Be=rc;Be.EventEmitter;Be.defaultMaxListeners;Be.init;Be.listenerCount;Be.EventEmitter;Be.defaultMaxListeners;Be.init;Be.listenerCount});var nr={};Jt(nr,{EventEmitter:()=>Gb,default:()=>Be,defaultMaxListeners:()=>Qb,init:()=>Yb,listenerCount:()=>Jb,on:()=>Xb,once:()=>Zb});var Gb,Qb,Yb,Jb,Xb,Zb,sr=_e(()=>{_();v();m();js();js();Be.once=function(t,e){return new Promise((r,i)=>{function n(...s){o!==void 0&&t.removeListener("error",o),r(s)}let o;e!=="error"&&(o=s=>{t.removeListener(name,n),i(s)},t.once("error",o)),t.once(e,n)})};Be.on=function(t,e){let r=[],i=[],n=null,o=!1,s={async next(){let c=r.shift();if(c)return createIterResult(c,!1);if(n){let h=Promise.reject(n);return n=null,h}return o?createIterResult(void 0,!0):new Promise((h,d)=>i.push({resolve:h,reject:d}))},async return(){t.removeListener(e,a),t.removeListener("error",l),o=!0;for(let c of i)c.resolve(createIterResult(void 0,!0));return createIterResult(void 0,!0)},throw(c){n=c,t.removeListener(e,a),t.removeListener("error",l)},[Symbol.asyncIterator](){return this}};return t.on(e,a),t.on("error",l),s;function a(...c){let h=i.shift();h?h.resolve(createIterResult(c,!1)):r.push(c)}function l(c){o=!0;let h=i.shift();h?h.reject(c):n=c,s.return()}};({EventEmitter:Gb,defaultMaxListeners:Qb,init:Yb,listenerCount:Jb,on:Xb,once:Zb}=Be)});var nn=M((LT,ac)=>{"use strict";_();v();m();var{ArrayIsArray:ew,ObjectSetPrototypeOf:oc}=ce(),{EventEmitter:tn}=(sr(),X(nr));function rn(t){tn.call(this,t)}oc(rn.prototype,tn.prototype);oc(rn,tn);rn.prototype.pipe=function(t,e){let r=this;function i(h){t.writable&&t.write(h)===!1&&r.pause&&r.pause()}r.on("data",i);function n(){r.readable&&r.resume&&r.resume()}t.on("drain",n),!t._isStdio&&(!e||e.end!==!1)&&(r.on("end",s),r.on("close",a));let o=!1;function s(){o||(o=!0,t.end())}function a(){o||(o=!0,typeof t.destroy=="function"&&t.destroy())}function l(h){c(),tn.listenerCount(this,"error")===0&&this.emit("error",h)}Fs(r,"error",l),Fs(t,"error",l);function c(){r.removeListener("data",i),t.removeListener("drain",n),r.removeListener("end",s),r.removeListener("close",a),r.removeListener("error",l),t.removeListener("error",l),r.removeListener("end",c),r.removeListener("close",c),t.removeListener("close",c)}return r.on("end",c),r.on("close",c),t.on("close",c),t.emit("pipe",r),t};function Fs(t,e,r){if(typeof t.prependListener=="function")return t.prependListener(e,r);!t._events||!t._events[e]?t.on(e,r):ew(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]}ac.exports={Stream:rn,prependListener:Fs}});var di=M((VT,sn)=>{"use strict";_();v();m();var{AbortError:lc,codes:tw}=Ae(),{isNodeStream:uc,isWebStream:rw,kControllerErrorFunction:iw}=tt(),nw=vt(),{ERR_INVALID_ARG_TYPE:fc}=tw,sw=(t,e)=>{if(typeof t!="object"||!("aborted"in t))throw new fc(e,"AbortSignal",t)};sn.exports.addAbortSignal=function(e,r){if(sw(e,"signal"),!uc(r)&&!rw(r))throw new fc("stream",["ReadableStream","WritableStream","Stream"],r);return sn.exports.addAbortSignalNoValidate(e,r)};sn.exports.addAbortSignalNoValidate=function(t,e){if(typeof t!="object"||!("aborted"in t))return e;let r=uc(e)?()=>{e.destroy(new lc(void 0,{cause:t.reason}))}:()=>{e[iw](new lc(void 0,{cause:t.reason}))};return t.aborted?r():(t.addEventListener("abort",r),nw(e,()=>t.removeEventListener("abort",r))),e}});var dc=M((r2,hc)=>{"use strict";_();v();m();var{StringPrototypeSlice:cc,SymbolIterator:ow,TypedArrayPrototypeSet:on,Uint8Array:aw}=ce(),{Buffer:Ws}=(be(),X(me)),{inspect:lw}=Je();hc.exports=class{constructor(){this.head=null,this.tail=null,this.length=0}push(e){let r={data:e,next:null};this.length>0?this.tail.next=r:this.head=r,this.tail=r,++this.length}unshift(e){let r={data:e,next:this.head};this.length===0&&(this.tail=r),this.head=r,++this.length}shift(){if(this.length===0)return;let e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}clear(){this.head=this.tail=null,this.length=0}join(e){if(this.length===0)return"";let r=this.head,i=""+r.data;for(;(r=r.next)!==null;)i+=e+r.data;return i}concat(e){if(this.length===0)return Ws.alloc(0);let r=Ws.allocUnsafe(e>>>0),i=this.head,n=0;for(;i;)on(r,i.data,n),n+=i.data.length,i=i.next;return r}consume(e,r){let i=this.head.data;if(e<i.length){let n=i.slice(0,e);return this.head.data=i.slice(e),n}return e===i.length?this.shift():r?this._getString(e):this._getBuffer(e)}first(){return this.head.data}*[ow](){for(let e=this.head;e;e=e.next)yield e.data}_getString(e){let r="",i=this.head,n=0;do{let o=i.data;if(e>o.length)r+=o,e-=o.length;else{e===o.length?(r+=o,++n,i.next?this.head=i.next:this.head=this.tail=null):(r+=cc(o,0,e),this.head=i,i.data=cc(o,e));break}++n}while((i=i.next)!==null);return this.length-=n,r}_getBuffer(e){let r=Ws.allocUnsafe(e),i=e,n=this.head,o=0;do{let s=n.data;if(e>s.length)on(r,s,i-e),e-=s.length;else{e===s.length?(on(r,s,i-e),++o,n.next?this.head=n.next:this.head=this.tail=null):(on(r,new aw(s.buffer,s.byteOffset,e),i-e),this.head=n,n.data=s.slice(e));break}++o}while((n=n.next)!==null);return this.length-=o,r}[Symbol.for("nodejs.util.inspect.custom")](e,r){return lw(this,{...r,depth:0,customInspect:!1})}}});var an=M((h2,gc)=>{"use strict";_();v();m();var{MathFloor:uw,NumberIsInteger:fw}=ce(),{ERR_INVALID_ARG_VALUE:cw}=Ae().codes;function hw(t,e,r){return t.highWaterMark!=null?t.highWaterMark:e?t[r]:null}function pc(t){return t?16:16*1024}function dw(t,e,r,i){let n=hw(e,i,r);if(n!=null){if(!fw(n)||n<0){let o=i?`options.${r}`:"options.highWaterMark";throw new cw(o,n)}return uw(n)}return pc(t.objectMode)}gc.exports={getHighWaterMark:dw,getDefaultHighWaterMark:pc}});function wc(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return r===-1&&(r=e),[r,r===e?0:4-r%4]}function pw(t,e,r){for(var i,n,o=[],s=e;s<r;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),o.push($e[(n=i)>>18&63]+$e[n>>12&63]+$e[n>>6&63]+$e[63&n]);return o.join("")}function Et(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,O.prototype),e}function O(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return zs(t)}return Cc(t,e,r)}function Cc(t,e,r){if(typeof t=="string")return function(o,s){if(typeof s=="string"&&s!==""||(s="utf8"),!O.isEncoding(s))throw new TypeError("Unknown encoding: "+s);var a=0|Pc(o,s),l=Et(a),c=l.write(o,s);return c!==a&&(l=l.slice(0,c)),l}(t,e);if(ArrayBuffer.isView(t))return $s(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(St(t,ArrayBuffer)||t&&St(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(St(t,SharedArrayBuffer)||t&&St(t.buffer,SharedArrayBuffer)))return mc(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(i!=null&&i!==t)return O.from(i,e,r);var n=function(o){if(O.isBuffer(o)){var s=0|Qs(o.length),a=Et(s);return a.length===0||o.copy(a,0,0,s),a}if(o.length!==void 0)return typeof o.length!="number"||Ys(o.length)?Et(0):$s(o);if(o.type==="Buffer"&&Array.isArray(o.data))return $s(o.data)}(t);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return O.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function Bc(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function zs(t){return Bc(t),Et(t<0?0:0|Qs(t))}function $s(t){for(var e=t.length<0?0:0|Qs(t.length),r=Et(e),i=0;i<e;i+=1)r[i]=255&t[i];return r}function mc(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var i;return i=e===void 0&&r===void 0?new Uint8Array(t):r===void 0?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(i,O.prototype),i}function Qs(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647 .toString(16)+" bytes");return 0|t}function Pc(t,e){if(O.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||St(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&r===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Ks(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return Mc(t).length;default:if(n)return i?-1:Ks(t).length;e=(""+e).toLowerCase(),n=!0}}function yw(t,e,r){var i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Iw(this,e,r);case"utf8":case"utf-8":return Oc(this,e,r);case"ascii":return Sw(this,e,r);case"latin1":case"binary":return Aw(this,e,r);case"base64":return Ew(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Tw(this,e,r);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ar(t,e,r){var i=t[e];t[e]=t[r],t[r]=i}function vc(t,e,r,i,n){if(t.length===0)return-1;if(typeof r=="string"?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Ys(r=+r)&&(r=n?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(n)return-1;r=t.length-1}else if(r<0){if(!n)return-1;r=0}if(typeof e=="string"&&(e=O.from(e,i)),O.isBuffer(e))return e.length===0?-1:Ec(t,e,r,i,n);if(typeof e=="number")return e&=255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):Ec(t,[e],r,i,n);throw new TypeError("val must be string, number or Buffer")}function Ec(t,e,r,i,n){var o,s=1,a=t.length,l=e.length;if(i!==void 0&&((i=String(i).toLowerCase())==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(t.length<2||e.length<2)return-1;s=2,a/=2,l/=2,r/=2}function c(y,w){return s===1?y[w]:y.readUInt16BE(w*s)}if(n){var h=-1;for(o=r;o<a;o++)if(c(t,o)===c(e,h===-1?0:o-h)){if(h===-1&&(h=o),o-h+1===l)return h*s}else h!==-1&&(o-=o-h),h=-1}else for(r+l>a&&(r=a-l),o=r;o>=0;o--){for(var d=!0,g=0;g<l;g++)if(c(t,o+g)!==c(e,g)){d=!1;break}if(d)return o}return-1}function bw(t,e,r,i){r=Number(r)||0;var n=t.length-r;i?(i=Number(i))>n&&(i=n):i=n;var o=e.length;i>o/2&&(i=o/2);for(var s=0;s<i;++s){var a=parseInt(e.substr(2*s,2),16);if(Ys(a))return s;t[r+s]=a}return s}function ww(t,e,r,i){return cn(Ks(e,t.length-r),t,r,i)}function kc(t,e,r,i){return cn(function(n){for(var o=[],s=0;s<n.length;++s)o.push(255&n.charCodeAt(s));return o}(e),t,r,i)}function _w(t,e,r,i){return kc(t,e,r,i)}function mw(t,e,r,i){return cn(Mc(e),t,r,i)}function vw(t,e,r,i){return cn(function(n,o){for(var s,a,l,c=[],h=0;h<n.length&&!((o-=2)<0);++h)s=n.charCodeAt(h),a=s>>8,l=s%256,c.push(l),c.push(a);return c}(e,t.length-r),t,r,i)}function Ew(t,e,r){return e===0&&r===t.length?Vs.fromByteArray(t):Vs.fromByteArray(t.slice(e,r))}function Oc(t,e,r){r=Math.min(t.length,r);for(var i=[],n=e;n<r;){var o,s,a,l,c=t[n],h=null,d=c>239?4:c>223?3:c>191?2:1;if(n+d<=r)switch(d){case 1:c<128&&(h=c);break;case 2:(192&(o=t[n+1]))==128&&(l=(31&c)<<6|63&o)>127&&(h=l);break;case 3:o=t[n+1],s=t[n+2],(192&o)==128&&(192&s)==128&&(l=(15&c)<<12|(63&o)<<6|63&s)>2047&&(l<55296||l>57343)&&(h=l);break;case 4:o=t[n+1],s=t[n+2],a=t[n+3],(192&o)==128&&(192&s)==128&&(192&a)==128&&(l=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(h=l)}h===null?(h=65533,d=1):h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|1023&h),i.push(h),n+=d}return function(g){var y=g.length;if(y<=4096)return String.fromCharCode.apply(String,g);for(var w="",E=0;E<y;)w+=String.fromCharCode.apply(String,g.slice(E,E+=4096));return w}(i)}function Sw(t,e,r){var i="";r=Math.min(t.length,r);for(var n=e;n<r;++n)i+=String.fromCharCode(127&t[n]);return i}function Aw(t,e,r){var i="";r=Math.min(t.length,r);for(var n=e;n<r;++n)i+=String.fromCharCode(t[n]);return i}function Iw(t,e,r){var i=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>i)&&(r=i);for(var n="",o=e;o<r;++o)n+=Cw[t[o]];return n}function Tw(t,e,r){for(var i=t.slice(e,r),n="",o=0;o<i.length;o+=2)n+=String.fromCharCode(i[o]+256*i[o+1]);return n}function we(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function Pe(t,e,r,i,n,o){if(!O.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<o)throw new RangeError('"value" argument is out of bounds');if(r+i>t.length)throw new RangeError("Index out of range")}function xc(t,e,r,i,n,o){if(r+i>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Sc(t,e,r,i,n){return e=+e,r>>>=0,n||xc(t,0,r,4),qr.write(t,e,r,i,23,4),r+4}function Ac(t,e,r,i,n){return e=+e,r>>>=0,n||xc(t,0,r,8),qr.write(t,e,r,i,52,8),r+8}function Ks(t,e){var r;e=e||1/0;for(var i=t.length,n=null,o=[],s=0;s<i;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!n){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(e-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(e-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function Mc(t){return Vs.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(Rw,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(t))}function cn(t,e,r,i){for(var n=0;n<i&&!(n+r>=e.length||n>=t.length);++n)e[n+r]=t[n];return n}function St(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Ys(t){return t!=t}function Ic(t,e){for(var r in t)e[r]=t[r]}function lr(t,e,r){return it(t,e,r)}function pi(t){var e;switch(this.encoding=function(r){var i=function(n){if(!n)return"utf8";for(var o;;)switch(n){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return n;default:if(o)return;n=(""+n).toLowerCase(),o=!0}}(r);if(typeof i!="string"&&(Gs.isEncoding===Tc||!Tc(r)))throw new Error("Unknown encoding: "+r);return i||r}(t),this.encoding){case"utf16le":this.text=kw,this.end=Ow,e=4;break;case"utf8":this.fillLast=Pw,e=4;break;case"base64":this.text=xw,this.end=Mw,e=3;break;default:return this.write=Lw,this.end=Uw,void 0}this.lastNeed=0,this.lastTotal=0,this.lastChar=Gs.allocUnsafe(e)}function Hs(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function Pw(t){var e=this.lastTotal-this.lastNeed,r=function(i,n,o){if((192&n[0])!=128)return i.lastNeed=0,"\uFFFD";if(i.lastNeed>1&&n.length>1){if((192&n[1])!=128)return i.lastNeed=1,"\uFFFD";if(i.lastNeed>2&&n.length>2&&(192&n[2])!=128)return i.lastNeed=2,"\uFFFD"}}(this,t);return r!==void 0?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),this.lastNeed-=t.length,void 0)}function kw(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e);if(r){var i=r.charCodeAt(r.length-1);if(i>=55296&&i<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function Ow(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function xw(t,e){var r=(t.length-e)%3;return r===0?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,r===1?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function Mw(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function Lw(t){return t.toString(this.encoding)}function Uw(t){return t&&t.length?this.write(t):""}var Rc,$e,Oe,yc,ln,or,bc,gw,At,Vs,qr,_c,Rw,Cw,un,fn,it,Bw,ur,Gs,Tc,Js=_e(()=>{_();v();m();for(Rc={byteLength:function(t){var e=wc(t),r=e[0],i=e[1];return 3*(r+i)/4-i},toByteArray:function(t){var e,r,i=wc(t),n=i[0],o=i[1],s=new yc(function(c,h,d){return 3*(h+d)/4-d}(0,n,o)),a=0,l=o>0?n-4:n;for(r=0;r<l;r+=4)e=Oe[t.charCodeAt(r)]<<18|Oe[t.charCodeAt(r+1)]<<12|Oe[t.charCodeAt(r+2)]<<6|Oe[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return o===2&&(e=Oe[t.charCodeAt(r)]<<2|Oe[t.charCodeAt(r+1)]>>4,s[a++]=255&e),o===1&&(e=Oe[t.charCodeAt(r)]<<10|Oe[t.charCodeAt(r+1)]<<4|Oe[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s},fromByteArray:function(t){for(var e,r=t.length,i=r%3,n=[],o=0,s=r-i;o<s;o+=16383)n.push(pw(t,o,o+16383>s?s:o+16383));return i===1?(e=t[r-1],n.push($e[e>>2]+$e[e<<4&63]+"==")):i===2&&(e=(t[r-2]<<8)+t[r-1],n.push($e[e>>10]+$e[e>>4&63]+$e[e<<2&63]+"=")),n.join("")}},$e=[],Oe=[],yc=typeof Uint8Array<"u"?Uint8Array:Array,ln="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",or=0,bc=ln.length;or<bc;++or)$e[or]=ln[or],Oe[ln.charCodeAt(or)]=or;Oe["-".charCodeAt(0)]=62,Oe["_".charCodeAt(0)]=63;gw={read:function(t,e,r,i,n){var o,s,a=8*n-i-1,l=(1<<a)-1,c=l>>1,h=-7,d=r?n-1:0,g=r?-1:1,y=t[e+d];for(d+=g,o=y&(1<<-h)-1,y>>=-h,h+=a;h>0;o=256*o+t[e+d],d+=g,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=i;h>0;s=256*s+t[e+d],d+=g,h-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:1/0*(y?-1:1);s+=Math.pow(2,i),o-=c}return(y?-1:1)*s*Math.pow(2,o-i)},write:function(t,e,r,i,n,o){var s,a,l,c=8*o-n-1,h=(1<<c)-1,d=h>>1,g=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=i?0:o-1,w=i?1:-1,E=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),(e+=s+d>=1?g/l:g*Math.pow(2,1-d))*l>=2&&(s++,l/=2),s+d>=h?(a=0,s=h):s+d>=1?(a=(e*l-1)*Math.pow(2,n),s+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,n),s=0));n>=8;t[r+y]=255&a,y+=w,a/=256,n-=8);for(s=s<<n|a,c+=n;c>0;t[r+y]=255&s,y+=w,s/=256,c-=8);t[r+y-w]|=128*E}},At={},Vs=Rc,qr=gw,_c=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;At.Buffer=O,At.SlowBuffer=function(t){return+t!=t&&(t=0),O.alloc(+t)},At.INSPECT_MAX_BYTES=50;At.kMaxLength=2147483647,O.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch{return!1}}(),O.TYPED_ARRAY_SUPPORT||typeof console>"u"||typeof console.error!="function"||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(O.prototype,"parent",{enumerable:!0,get:function(){if(O.isBuffer(this))return this.buffer}}),Object.defineProperty(O.prototype,"offset",{enumerable:!0,get:function(){if(O.isBuffer(this))return this.byteOffset}}),O.poolSize=8192,O.from=function(t,e,r){return Cc(t,e,r)},Object.setPrototypeOf(O.prototype,Uint8Array.prototype),Object.setPrototypeOf(O,Uint8Array),O.alloc=function(t,e,r){return function(i,n,o){return Bc(i),i<=0?Et(i):n!==void 0?typeof o=="string"?Et(i).fill(n,o):Et(i).fill(n):Et(i)}(t,e,r)},O.allocUnsafe=function(t){return zs(t)},O.allocUnsafeSlow=function(t){return zs(t)},O.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==O.prototype},O.compare=function(t,e){if(St(t,Uint8Array)&&(t=O.from(t,t.offset,t.byteLength)),St(e,Uint8Array)&&(e=O.from(e,e.offset,e.byteLength)),!O.isBuffer(t)||!O.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,i=e.length,n=0,o=Math.min(r,i);n<o;++n)if(t[n]!==e[n]){r=t[n],i=e[n];break}return r<i?-1:i<r?1:0},O.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},O.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return O.alloc(0);var r;if(e===void 0)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var i=O.allocUnsafe(e),n=0;for(r=0;r<t.length;++r){var o=t[r];if(St(o,Uint8Array)&&(o=O.from(o)),!O.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(i,n),n+=o.length}return i},O.byteLength=Pc,O.prototype._isBuffer=!0,O.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)ar(this,e,e+1);return this},O.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)ar(this,e,e+3),ar(this,e+1,e+2);return this},O.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)ar(this,e,e+7),ar(this,e+1,e+6),ar(this,e+2,e+5),ar(this,e+3,e+4);return this},O.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?Oc(this,0,t):yw.apply(this,arguments)},O.prototype.toLocaleString=O.prototype.toString,O.prototype.equals=function(t){if(!O.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||O.compare(this,t)===0},O.prototype.inspect=function(){var t="",e=At.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},_c&&(O.prototype[_c]=O.prototype.inspect),O.prototype.compare=function(t,e,r,i,n){if(St(t,Uint8Array)&&(t=O.from(t,t.offset,t.byteLength)),!O.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),r===void 0&&(r=t?t.length:0),i===void 0&&(i=0),n===void 0&&(n=this.length),e<0||r>t.length||i<0||n>this.length)throw new RangeError("out of range index");if(i>=n&&e>=r)return 0;if(i>=n)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(n>>>=0)-(i>>>=0),s=(r>>>=0)-(e>>>=0),a=Math.min(o,s),l=this.slice(i,n),c=t.slice(e,r),h=0;h<a;++h)if(l[h]!==c[h]){o=l[h],s=c[h];break}return o<s?-1:s<o?1:0},O.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},O.prototype.indexOf=function(t,e,r){return vc(this,t,e,r,!0)},O.prototype.lastIndexOf=function(t,e,r){return vc(this,t,e,r,!1)},O.prototype.write=function(t,e,r,i){if(e===void 0)i="utf8",r=this.length,e=0;else if(r===void 0&&typeof e=="string")i=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,i===void 0&&(i="utf8")):(i=r,r=void 0)}var n=this.length-e;if((r===void 0||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var o=!1;;)switch(i){case"hex":return bw(this,t,e,r);case"utf8":case"utf-8":return ww(this,t,e,r);case"ascii":return kc(this,t,e,r);case"latin1":case"binary":return _w(this,t,e,r);case"base64":return mw(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vw(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},O.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};O.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=e===void 0?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var i=this.subarray(t,e);return Object.setPrototypeOf(i,O.prototype),i},O.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||we(t,e,this.length);for(var i=this[t],n=1,o=0;++o<e&&(n*=256);)i+=this[t+o]*n;return i},O.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||we(t,e,this.length);for(var i=this[t+--e],n=1;e>0&&(n*=256);)i+=this[t+--e]*n;return i},O.prototype.readUInt8=function(t,e){return t>>>=0,e||we(t,1,this.length),this[t]},O.prototype.readUInt16LE=function(t,e){return t>>>=0,e||we(t,2,this.length),this[t]|this[t+1]<<8},O.prototype.readUInt16BE=function(t,e){return t>>>=0,e||we(t,2,this.length),this[t]<<8|this[t+1]},O.prototype.readUInt32LE=function(t,e){return t>>>=0,e||we(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},O.prototype.readUInt32BE=function(t,e){return t>>>=0,e||we(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},O.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||we(t,e,this.length);for(var i=this[t],n=1,o=0;++o<e&&(n*=256);)i+=this[t+o]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*e)),i},O.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||we(t,e,this.length);for(var i=e,n=1,o=this[t+--i];i>0&&(n*=256);)o+=this[t+--i]*n;return o>=(n*=128)&&(o-=Math.pow(2,8*e)),o},O.prototype.readInt8=function(t,e){return t>>>=0,e||we(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},O.prototype.readInt16LE=function(t,e){t>>>=0,e||we(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},O.prototype.readInt16BE=function(t,e){t>>>=0,e||we(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},O.prototype.readInt32LE=function(t,e){return t>>>=0,e||we(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},O.prototype.readInt32BE=function(t,e){return t>>>=0,e||we(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},O.prototype.readFloatLE=function(t,e){return t>>>=0,e||we(t,4,this.length),qr.read(this,t,!0,23,4)},O.prototype.readFloatBE=function(t,e){return t>>>=0,e||we(t,4,this.length),qr.read(this,t,!1,23,4)},O.prototype.readDoubleLE=function(t,e){return t>>>=0,e||we(t,8,this.length),qr.read(this,t,!0,52,8)},O.prototype.readDoubleBE=function(t,e){return t>>>=0,e||we(t,8,this.length),qr.read(this,t,!1,52,8)},O.prototype.writeUIntLE=function(t,e,r,i){t=+t,e>>>=0,r>>>=0,i||Pe(this,t,e,r,Math.pow(2,8*r)-1,0);var n=1,o=0;for(this[e]=255&t;++o<r&&(n*=256);)this[e+o]=t/n&255;return e+r},O.prototype.writeUIntBE=function(t,e,r,i){t=+t,e>>>=0,r>>>=0,i||Pe(this,t,e,r,Math.pow(2,8*r)-1,0);var n=r-1,o=1;for(this[e+n]=255&t;--n>=0&&(o*=256);)this[e+n]=t/o&255;return e+r},O.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,1,255,0),this[e]=255&t,e+1},O.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},O.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},O.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},O.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},O.prototype.writeIntLE=function(t,e,r,i){if(t=+t,e>>>=0,!i){var n=Math.pow(2,8*r-1);Pe(this,t,e,r,n-1,-n)}var o=0,s=1,a=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&a===0&&this[e+o-1]!==0&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},O.prototype.writeIntBE=function(t,e,r,i){if(t=+t,e>>>=0,!i){var n=Math.pow(2,8*r-1);Pe(this,t,e,r,n-1,-n)}var o=r-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&a===0&&this[e+o+1]!==0&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},O.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},O.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},O.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},O.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},O.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||Pe(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},O.prototype.writeFloatLE=function(t,e,r){return Sc(this,t,e,!0,r)},O.prototype.writeFloatBE=function(t,e,r){return Sc(this,t,e,!1,r)},O.prototype.writeDoubleLE=function(t,e,r){return Ac(this,t,e,!0,r)},O.prototype.writeDoubleBE=function(t,e,r){return Ac(this,t,e,!1,r)},O.prototype.copy=function(t,e,r,i){if(!O.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),i||i===0||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<r&&(i=r),i===r||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-r&&(i=t.length-e+r);var n=i-r;if(this===t&&typeof Uint8Array.prototype.copyWithin=="function")this.copyWithin(e,r,i);else if(this===t&&r<e&&e<i)for(var o=n-1;o>=0;--o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,i),e);return n},O.prototype.fill=function(t,e,r,i){if(typeof t=="string"){if(typeof e=="string"?(i=e,e=0,r=this.length):typeof r=="string"&&(i=r,r=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!O.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(t.length===1){var n=t.charCodeAt(0);(i==="utf8"&&n<128||i==="latin1")&&(t=n)}}else typeof t=="number"?t&=255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=r===void 0?this.length:r>>>0,t||(t=0),typeof t=="number")for(o=e;o<r;++o)this[o]=t;else{var s=O.isBuffer(t)?t:O.from(t,i),a=s.length;if(a===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%a]}return this};Rw=/[^+/0-9A-Za-z-_]/g;Cw=function(){for(var t=new Array(256),e=0;e<16;++e)for(var r=16*e,i=0;i<16;++i)t[r+i]="0123456789abcdef"[e]+"0123456789abcdef"[i];return t}();At.Buffer;At.INSPECT_MAX_BYTES;At.kMaxLength;un={},fn=At,it=fn.Buffer;it.from&&it.alloc&&it.allocUnsafe&&it.allocUnsafeSlow?un=fn:(Ic(fn,un),un.Buffer=lr),lr.prototype=Object.create(it.prototype),Ic(it,lr),lr.from=function(t,e,r){if(typeof t=="number")throw new TypeError("Argument must not be a number");return it(t,e,r)},lr.alloc=function(t,e,r){if(typeof t!="number")throw new TypeError("Argument must be a number");var i=it(t);return e!==void 0?typeof r=="string"?i.fill(e,r):i.fill(e):i.fill(0),i},lr.allocUnsafe=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return it(t)},lr.allocUnsafeSlow=function(t){if(typeof t!="number")throw new TypeError("Argument must be a number");return fn.SlowBuffer(t)};Bw=un,ur={},Gs=Bw.Buffer,Tc=Gs.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};ur.StringDecoder=pi,pi.prototype.write=function(t){if(t.length===0)return"";var e,r;if(this.lastNeed){if((e=this.fillLast(t))===void 0)return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},pi.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"\uFFFD":e},pi.prototype.text=function(t,e){var r=function(n,o,s){var a=o.length-1;if(a<s)return 0;var l=Hs(o[a]);return l>=0?(l>0&&(n.lastNeed=l-1),l):--a<s||l===-2?0:(l=Hs(o[a]))>=0?(l>0&&(n.lastNeed=l-2),l):--a<s||l===-2?0:(l=Hs(o[a]))>=0?(l>0&&(l===2?l=0:n.lastNeed=l-3),l):0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var i=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,i),t.toString("utf8",e,i)},pi.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length};ur.StringDecoder;ur.StringDecoder});var Lc={};Jt(Lc,{StringDecoder:()=>Nw,default:()=>ur});var Nw,Uc=_e(()=>{_();v();m();Js();Js();Nw=ur.StringDecoder});var Xs=M(($2,jc)=>{"use strict";_();v();m();var Nc=Nt(),{PromisePrototypeThen:qw,SymbolAsyncIterator:qc,SymbolIterator:Dc}=ce(),{Buffer:Dw}=(be(),X(me)),{ERR_INVALID_ARG_TYPE:jw,ERR_STREAM_NULL_VALUES:Fw}=Ae().codes;function Ww(t,e,r){let i;if(typeof e=="string"||e instanceof Dw)return new t({objectMode:!0,...r,read(){this.push(e),this.push(null)}});let n;if(e&&e[qc])n=!0,i=e[qc]();else if(e&&e[Dc])n=!1,i=e[Dc]();else throw new jw("iterable",["Iterable"],e);let o=new t({objectMode:!0,highWaterMark:1,...r}),s=!1;o._read=function(){s||(s=!0,l())},o._destroy=function(c,h){qw(a(c),()=>Nc.nextTick(h,c),d=>Nc.nextTick(h,d||c))};async function a(c){let h=c!=null,d=typeof i.throw=="function";if(h&&d){let{value:g,done:y}=await i.throw(c);if(await g,y)return}if(typeof i.return=="function"){let{value:g}=await i.return();await g}}async function l(){for(;;){try{let{value:c,done:h}=n?await i.next():i.next();if(h)o.push(null);else{let d=c&&typeof c.then=="function"?await c:c;if(d===null)throw s=!1,new Fw;if(o.push(d))continue;s=!1}}catch(c){o.destroy(c)}break}}return o}jc.exports=Ww});var gi=M((Z2,Zc)=>{_();v();m();var He=Nt(),{ArrayPrototypeIndexOf:$w,NumberIsInteger:Hw,NumberIsNaN:Vw,NumberParseInt:zw,ObjectDefineProperties:$c,ObjectKeys:Kw,ObjectSetPrototypeOf:Hc,Promise:Gw,SafeSet:Qw,SymbolAsyncIterator:Yw,Symbol:Jw}=ce();Zc.exports=F;F.ReadableState=no;var{EventEmitter:Xw}=(sr(),X(nr)),{Stream:Dt,prependListener:Zw}=nn(),{Buffer:Zs}=(be(),X(me)),{addAbortSignal:e_}=di(),t_=vt(),H=Je().debuglog("stream",t=>{H=t}),r_=dc(),jr=ir(),{getHighWaterMark:i_,getDefaultHighWaterMark:n_}=an(),{aggregateTwoErrors:Fc,codes:{ERR_INVALID_ARG_TYPE:s_,ERR_METHOD_NOT_IMPLEMENTED:o_,ERR_OUT_OF_RANGE:a_,ERR_STREAM_PUSH_AFTER_EOF:l_,ERR_STREAM_UNSHIFT_AFTER_END_EVENT:u_}}=Ae(),{validateObject:f_}=hi(),fr=Jw("kPaused"),{StringDecoder:Vc}=(Uc(),X(Lc)),c_=Xs();Hc(F.prototype,Dt.prototype);Hc(F,Dt);var eo=()=>{},{errorOrDestroy:Dr}=jr;function no(t,e,r){typeof r!="boolean"&&(r=e instanceof nt()),this.objectMode=!!(t&&t.objectMode),r&&(this.objectMode=this.objectMode||!!(t&&t.readableObjectMode)),this.highWaterMark=t?i_(this,t,"readableHighWaterMark",r):n_(!1),this.buffer=new r_,this.length=0,this.pipes=[],this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.constructed=!0,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this[fr]=null,this.errorEmitted=!1,this.emitClose=!t||t.emitClose!==!1,this.autoDestroy=!t||t.autoDestroy!==!1,this.destroyed=!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this.defaultEncoding=t&&t.defaultEncoding||"utf8",this.awaitDrainWriters=null,this.multiAwaitDrain=!1,this.readingMore=!1,this.dataEmitted=!1,this.decoder=null,this.encoding=null,t&&t.encoding&&(this.decoder=new Vc(t.encoding),this.encoding=t.encoding)}function F(t){if(!(this instanceof F))return new F(t);let e=this instanceof nt();this._readableState=new no(t,this,e),t&&(typeof t.read=="function"&&(this._read=t.read),typeof t.destroy=="function"&&(this._destroy=t.destroy),typeof t.construct=="function"&&(this._construct=t.construct),t.signal&&!e&&e_(t.signal,this)),Dt.call(this,t),jr.construct(this,()=>{this._readableState.needReadable&&hn(this,this._readableState)})}F.prototype.destroy=jr.destroy;F.prototype._undestroy=jr.undestroy;F.prototype._destroy=function(t,e){e(t)};F.prototype[Xw.captureRejectionSymbol]=function(t){this.destroy(t)};F.prototype.push=function(t,e){return zc(this,t,e,!1)};F.prototype.unshift=function(t,e){return zc(this,t,e,!0)};function zc(t,e,r,i){H("readableAddChunk",e);let n=t._readableState,o;if(n.objectMode||(typeof e=="string"?(r=r||n.defaultEncoding,n.encoding!==r&&(i&&n.encoding?e=Zs.from(e,r).toString(n.encoding):(e=Zs.from(e,r),r=""))):e instanceof Zs?r="":Dt._isUint8Array(e)?(e=Dt._uint8ArrayToBuffer(e),r=""):e!=null&&(o=new s_("chunk",["string","Buffer","Uint8Array"],e))),o)Dr(t,o);else if(e===null)n.reading=!1,p_(t,n);else if(n.objectMode||e&&e.length>0)if(i)if(n.endEmitted)Dr(t,new u_);else{if(n.destroyed||n.errored)return!1;to(t,n,e,!0)}else if(n.ended)Dr(t,new l_);else{if(n.destroyed||n.errored)return!1;n.reading=!1,n.decoder&&!r?(e=n.decoder.write(e),n.objectMode||e.length!==0?to(t,n,e,!1):hn(t,n)):to(t,n,e,!1)}else i||(n.reading=!1,hn(t,n));return!n.ended&&(n.length<n.highWaterMark||n.length===0)}function to(t,e,r,i){e.flowing&&e.length===0&&!e.sync&&t.listenerCount("data")>0?(e.multiAwaitDrain?e.awaitDrainWriters.clear():e.awaitDrainWriters=null,e.dataEmitted=!0,t.emit("data",r)):(e.length+=e.objectMode?1:r.length,i?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&dn(t)),hn(t,e)}F.prototype.isPaused=function(){let t=this._readableState;return t[fr]===!0||t.flowing===!1};F.prototype.setEncoding=function(t){let e=new Vc(t);this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding;let r=this._readableState.buffer,i="";for(let n of r)i+=e.write(n);return r.clear(),i!==""&&r.push(i),this._readableState.length=i.length,this};var h_=1073741824;function d_(t){if(t>h_)throw new a_("size","<= 1GiB",t);return t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++,t}function Wc(t,e){return t<=0||e.length===0&&e.ended?0:e.objectMode?1:Vw(t)?e.flowing&&e.length?e.buffer.first().length:e.length:t<=e.length?t:e.ended?e.length:0}F.prototype.read=function(t){H("read",t),t===void 0?t=NaN:Hw(t)||(t=zw(t,10));let e=this._readableState,r=t;if(t>e.highWaterMark&&(e.highWaterMark=d_(t)),t!==0&&(e.emittedReadable=!1),t===0&&e.needReadable&&((e.highWaterMark!==0?e.length>=e.highWaterMark:e.length>0)||e.ended))return H("read: emitReadable",e.length,e.ended),e.length===0&&e.ended?ro(this):dn(this),null;if(t=Wc(t,e),t===0&&e.ended)return e.length===0&&ro(this),null;let i=e.needReadable;if(H("need readable",i),(e.length===0||e.length-t<e.highWaterMark)&&(i=!0,H("length less than watermark",i)),e.ended||e.reading||e.destroyed||e.errored||!e.constructed)i=!1,H("reading, ended or constructing",i);else if(i){H("do read"),e.reading=!0,e.sync=!0,e.length===0&&(e.needReadable=!0);try{this._read(e.highWaterMark)}catch(o){Dr(this,o)}e.sync=!1,e.reading||(t=Wc(r,e))}let n;return t>0?n=Jc(t,e):n=null,n===null?(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.multiAwaitDrain?e.awaitDrainWriters.clear():e.awaitDrainWriters=null),e.length===0&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&ro(this)),n!==null&&!e.errorEmitted&&!e.closeEmitted&&(e.dataEmitted=!0,this.emit("data",n)),n};function p_(t,e){if(H("onEofChunk"),!e.ended){if(e.decoder){let r=e.decoder.end();r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.sync?dn(t):(e.needReadable=!1,e.emittedReadable=!0,Kc(t))}}function dn(t){let e=t._readableState;H("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(H("emitReadable",e.flowing),e.emittedReadable=!0,He.nextTick(Kc,t))}function Kc(t){let e=t._readableState;H("emitReadable_",e.destroyed,e.length,e.ended),!e.destroyed&&!e.errored&&(e.length||e.ended)&&(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,Qc(t)}function hn(t,e){!e.readingMore&&e.constructed&&(e.readingMore=!0,He.nextTick(g_,t,e))}function g_(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&e.length===0);){let r=e.length;if(H("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}F.prototype._read=function(t){throw new o_("_read()")};F.prototype.pipe=function(t,e){let r=this,i=this._readableState;i.pipes.length===1&&(i.multiAwaitDrain||(i.multiAwaitDrain=!0,i.awaitDrainWriters=new Qw(i.awaitDrainWriters?[i.awaitDrainWriters]:[]))),i.pipes.push(t),H("pipe count=%d opts=%j",i.pipes.length,e);let o=(!e||e.end!==!1)&&t!==He.stdout&&t!==He.stderr?a:S;i.endEmitted?He.nextTick(o):r.once("end",o),t.on("unpipe",s);function s(I,B){H("onunpipe"),I===r&&B&&B.hasUnpiped===!1&&(B.hasUnpiped=!0,h())}function a(){H("onend"),t.end()}let l,c=!1;function h(){H("cleanup"),t.removeListener("close",w),t.removeListener("finish",E),l&&t.removeListener("drain",l),t.removeListener("error",y),t.removeListener("unpipe",s),r.removeListener("end",a),r.removeListener("end",S),r.removeListener("data",g),c=!0,l&&i.awaitDrainWriters&&(!t._writableState||t._writableState.needDrain)&&l()}function d(){c||(i.pipes.length===1&&i.pipes[0]===t?(H("false write response, pause",0),i.awaitDrainWriters=t,i.multiAwaitDrain=!1):i.pipes.length>1&&i.pipes.includes(t)&&(H("false write response, pause",i.awaitDrainWriters.size),i.awaitDrainWriters.add(t)),r.pause()),l||(l=y_(r,t),t.on("drain",l))}r.on("data",g);function g(I){H("ondata");let B=t.write(I);H("dest.write",B),B===!1&&d()}function y(I){if(H("onerror",I),S(),t.removeListener("error",y),t.listenerCount("error")===0){let B=t._writableState||t._readableState;B&&!B.errorEmitted?Dr(t,I):t.emit("error",I)}}Zw(t,"error",y);function w(){t.removeListener("finish",E),S()}t.once("close",w);function E(){H("onfinish"),t.removeListener("close",w),S()}t.once("finish",E);function S(){H("unpipe"),r.unpipe(t)}return t.emit("pipe",r),t.writableNeedDrain===!0?i.flowing&&d():i.flowing||(H("pipe resume"),r.resume()),t};function y_(t,e){return function(){let i=t._readableState;i.awaitDrainWriters===e?(H("pipeOnDrain",1),i.awaitDrainWriters=null):i.multiAwaitDrain&&(H("pipeOnDrain",i.awaitDrainWriters.size),i.awaitDrainWriters.delete(e)),(!i.awaitDrainWriters||i.awaitDrainWriters.size===0)&&t.listenerCount("data")&&t.resume()}}F.prototype.unpipe=function(t){let e=this._readableState,r={hasUnpiped:!1};if(e.pipes.length===0)return this;if(!t){let n=e.pipes;e.pipes=[],this.pause();for(let o=0;o<n.length;o++)n[o].emit("unpipe",this,{hasUnpiped:!1});return this}let i=$w(e.pipes,t);return i===-1?this:(e.pipes.splice(i,1),e.pipes.length===0&&this.pause(),t.emit("unpipe",this,r),this)};F.prototype.on=function(t,e){let r=Dt.prototype.on.call(this,t,e),i=this._readableState;return t==="data"?(i.readableListening=this.listenerCount("readable")>0,i.flowing!==!1&&this.resume()):t==="readable"&&!i.endEmitted&&!i.readableListening&&(i.readableListening=i.needReadable=!0,i.flowing=!1,i.emittedReadable=!1,H("on readable",i.length,i.reading),i.length?dn(this):i.reading||He.nextTick(b_,this)),r};F.prototype.addListener=F.prototype.on;F.prototype.removeListener=function(t,e){let r=Dt.prototype.removeListener.call(this,t,e);return t==="readable"&&He.nextTick(Gc,this),r};F.prototype.off=F.prototype.removeListener;F.prototype.removeAllListeners=function(t){let e=Dt.prototype.removeAllListeners.apply(this,arguments);return(t==="readable"||t===void 0)&&He.nextTick(Gc,this),e};function Gc(t){let e=t._readableState;e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&e[fr]===!1?e.flowing=!0:t.listenerCount("data")>0?t.resume():e.readableListening||(e.flowing=null)}function b_(t){H("readable nexttick read 0"),t.read(0)}F.prototype.resume=function(){let t=this._readableState;return t.flowing||(H("resume"),t.flowing=!t.readableListening,w_(this,t)),t[fr]=!1,this};function w_(t,e){e.resumeScheduled||(e.resumeScheduled=!0,He.nextTick(__,t,e))}function __(t,e){H("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),Qc(t),e.flowing&&!e.reading&&t.read(0)}F.prototype.pause=function(){return H("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(H("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState[fr]=!0,this};function Qc(t){let e=t._readableState;for(H("flow",e.flowing);e.flowing&&t.read()!==null;);}F.prototype.wrap=function(t){let e=!1;t.on("data",i=>{!this.push(i)&&t.pause&&(e=!0,t.pause())}),t.on("end",()=>{this.push(null)}),t.on("error",i=>{Dr(this,i)}),t.on("close",()=>{this.destroy()}),t.on("destroy",()=>{this.destroy()}),this._read=()=>{e&&t.resume&&(e=!1,t.resume())};let r=Kw(t);for(let i=1;i<r.length;i++){let n=r[i];this[n]===void 0&&typeof t[n]=="function"&&(this[n]=t[n].bind(t))}return this};F.prototype[Yw]=function(){return Yc(this)};F.prototype.iterator=function(t){return t!==void 0&&f_(t,"options"),Yc(this,t)};function Yc(t,e){typeof t.read!="function"&&(t=F.wrap(t,{objectMode:!0}));let r=m_(t,e);return r.stream=t,r}async function*m_(t,e){let r=eo;function i(s){this===t?(r(),r=eo):r=s}t.on("readable",i);let n,o=t_(t,{writable:!1},s=>{n=s?Fc(n,s):null,r(),r=eo});try{for(;;){let s=t.destroyed?null:t.read();if(s!==null)yield s;else{if(n)throw n;if(n===null)return;await new Gw(i)}}}catch(s){throw n=Fc(n,s),n}finally{(n||e?.destroyOnReturn!==!1)&&(n===void 0||t._readableState.autoDestroy)?jr.destroyer(t,null):(t.off("readable",i),o())}}$c(F.prototype,{readable:{__proto__:null,get(){let t=this._readableState;return!!t&&t.readable!==!1&&!t.destroyed&&!t.errorEmitted&&!t.endEmitted},set(t){this._readableState&&(this._readableState.readable=!!t)}},readableDidRead:{__proto__:null,enumerable:!1,get:function(){return this._readableState.dataEmitted}},readableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._readableState.readable!==!1&&(this._readableState.destroyed||this._readableState.errored)&&!this._readableState.endEmitted)}},readableHighWaterMark:{__proto__:null,enumerable:!1,get:function(){return this._readableState.highWaterMark}},readableBuffer:{__proto__:null,enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}},readableFlowing:{__proto__:null,enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}},readableLength:{__proto__:null,enumerable:!1,get(){return this._readableState.length}},readableObjectMode:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.objectMode:!1}},readableEncoding:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.encoding:null}},errored:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.errored:null}},closed:{__proto__:null,get(){return this._readableState?this._readableState.closed:!1}},destroyed:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.destroyed:!1},set(t){this._readableState&&(this._readableState.destroyed=t)}},readableEnded:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.endEmitted:!1}}});$c(no.prototype,{pipesCount:{__proto__:null,get(){return this.pipes.length}},paused:{__proto__:null,get(){return this[fr]!==!1},set(t){this[fr]=!!t}}});F._fromList=Jc;function Jc(t,e){if(e.length===0)return null;let r;return e.objectMode?r=e.buffer.shift():!t||t>=e.length?(e.decoder?r=e.buffer.join(""):e.buffer.length===1?r=e.buffer.first():r=e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r}function ro(t){let e=t._readableState;H("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,He.nextTick(v_,e,t))}function v_(t,e){if(H("endReadableNT",t.endEmitted,t.length),!t.errored&&!t.closeEmitted&&!t.endEmitted&&t.length===0){if(t.endEmitted=!0,e.emit("end"),e.writable&&e.allowHalfOpen===!1)He.nextTick(E_,e);else if(t.autoDestroy){let r=e._writableState;(!r||r.autoDestroy&&(r.finished||r.writable===!1))&&e.destroy()}}}function E_(t){t.writable&&!t.writableEnded&&!t.destroyed&&t.end()}F.from=function(t,e){return c_(F,t,e)};var io;function Xc(){return io===void 0&&(io={}),io}F.fromWeb=function(t,e){return Xc().newStreamReadableFromReadableStream(t,e)};F.toWeb=function(t,e){return Xc().newReadableStreamFromStreamReadable(t,e)};F.wrap=function(t,e){var r,i;return new F({objectMode:(r=(i=t.readableObjectMode)!==null&&i!==void 0?i:t.objectMode)!==null&&r!==void 0?r:!0,...e,destroy(n,o){jr.destroyer(t,n),o(n)}}).wrap(t)}});var co=M((uR,ch)=>{_();v();m();var cr=Nt(),{ArrayPrototypeSlice:rh,Error:S_,FunctionPrototypeSymbolHasInstance:ih,ObjectDefineProperty:nh,ObjectDefineProperties:A_,ObjectSetPrototypeOf:sh,StringPrototypeToLowerCase:I_,Symbol:T_,SymbolHasInstance:R_}=ce();ch.exports=ie;ie.WritableState=wi;var{EventEmitter:C_}=(sr(),X(nr)),yi=nn().Stream,{Buffer:pn}=(be(),X(me)),bn=ir(),{addAbortSignal:B_}=di(),{getHighWaterMark:P_,getDefaultHighWaterMark:k_}=an(),{ERR_INVALID_ARG_TYPE:O_,ERR_METHOD_NOT_IMPLEMENTED:x_,ERR_MULTIPLE_CALLBACK:oh,ERR_STREAM_CANNOT_PIPE:M_,ERR_STREAM_DESTROYED:bi,ERR_STREAM_ALREADY_FINISHED:L_,ERR_STREAM_NULL_VALUES:U_,ERR_STREAM_WRITE_AFTER_END:N_,ERR_UNKNOWN_ENCODING:ah}=Ae().codes,{errorOrDestroy:Fr}=bn;sh(ie.prototype,yi.prototype);sh(ie,yi);function ao(){}var Wr=T_("kOnFinished");function wi(t,e,r){typeof r!="boolean"&&(r=e instanceof nt()),this.objectMode=!!(t&&t.objectMode),r&&(this.objectMode=this.objectMode||!!(t&&t.writableObjectMode)),this.highWaterMark=t?P_(this,t,"writableHighWaterMark",r):k_(!1),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;let i=!!(t&&t.decodeStrings===!1);this.decodeStrings=!i,this.defaultEncoding=t&&t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=D_.bind(void 0,e),this.writecb=null,this.writelen=0,this.afterWriteTickInfo=null,yn(this),this.pendingcb=0,this.constructed=!0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!t||t.emitClose!==!1,this.autoDestroy=!t||t.autoDestroy!==!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this[Wr]=[]}function yn(t){t.buffered=[],t.bufferedIndex=0,t.allBuffers=!0,t.allNoop=!0}wi.prototype.getBuffer=function(){return rh(this.buffered,this.bufferedIndex)};nh(wi.prototype,"bufferedRequestCount",{__proto__:null,get(){return this.buffered.length-this.bufferedIndex}});function ie(t){let e=this instanceof nt();if(!e&&!ih(ie,this))return new ie(t);this._writableState=new wi(t,this,e),t&&(typeof t.write=="function"&&(this._write=t.write),typeof t.writev=="function"&&(this._writev=t.writev),typeof t.destroy=="function"&&(this._destroy=t.destroy),typeof t.final=="function"&&(this._final=t.final),typeof t.construct=="function"&&(this._construct=t.construct),t.signal&&B_(t.signal,this)),yi.call(this,t),bn.construct(this,()=>{let r=this._writableState;r.writing||uo(this,r),fo(this,r)})}nh(ie,R_,{__proto__:null,value:function(t){return ih(this,t)?!0:this!==ie?!1:t&&t._writableState instanceof wi}});ie.prototype.pipe=function(){Fr(this,new M_)};function lh(t,e,r,i){let n=t._writableState;if(typeof r=="function")i=r,r=n.defaultEncoding;else{if(!r)r=n.defaultEncoding;else if(r!=="buffer"&&!pn.isEncoding(r))throw new ah(r);typeof i!="function"&&(i=ao)}if(e===null)throw new U_;if(!n.objectMode)if(typeof e=="string")n.decodeStrings!==!1&&(e=pn.from(e,r),r="buffer");else if(e instanceof pn)r="buffer";else if(yi._isUint8Array(e))e=yi._uint8ArrayToBuffer(e),r="buffer";else throw new O_("chunk",["string","Buffer","Uint8Array"],e);let o;return n.ending?o=new N_:n.destroyed&&(o=new bi("write")),o?(cr.nextTick(i,o),Fr(t,o,!0),o):(n.pendingcb++,q_(t,n,e,r,i))}ie.prototype.write=function(t,e,r){return lh(this,t,e,r)===!0};ie.prototype.cork=function(){this._writableState.corked++};ie.prototype.uncork=function(){let t=this._writableState;t.corked&&(t.corked--,t.writing||uo(this,t))};ie.prototype.setDefaultEncoding=function(e){if(typeof e=="string"&&(e=I_(e)),!pn.isEncoding(e))throw new ah(e);return this._writableState.defaultEncoding=e,this};function q_(t,e,r,i,n){let o=e.objectMode?1:r.length;e.length+=o;let s=e.length<e.highWaterMark;return s||(e.needDrain=!0),e.writing||e.corked||e.errored||!e.constructed?(e.buffered.push({chunk:r,encoding:i,callback:n}),e.allBuffers&&i!=="buffer"&&(e.allBuffers=!1),e.allNoop&&n!==ao&&(e.allNoop=!1)):(e.writelen=o,e.writecb=n,e.writing=!0,e.sync=!0,t._write(r,i,e.onwrite),e.sync=!1),s&&!e.errored&&!e.destroyed}function eh(t,e,r,i,n,o,s){e.writelen=i,e.writecb=s,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new bi("write")):r?t._writev(n,e.onwrite):t._write(n,o,e.onwrite),e.sync=!1}function th(t,e,r,i){--e.pendingcb,i(r),lo(e),Fr(t,r)}function D_(t,e){let r=t._writableState,i=r.sync,n=r.writecb;if(typeof n!="function"){Fr(t,new oh);return}r.writing=!1,r.writecb=null,r.length-=r.writelen,r.writelen=0,e?(e.stack,r.errored||(r.errored=e),t._readableState&&!t._readableState.errored&&(t._readableState.errored=e),i?cr.nextTick(th,t,r,e,n):th(t,r,e,n)):(r.buffered.length>r.bufferedIndex&&uo(t,r),i?r.afterWriteTickInfo!==null&&r.afterWriteTickInfo.cb===n?r.afterWriteTickInfo.count++:(r.afterWriteTickInfo={count:1,cb:n,stream:t,state:r},cr.nextTick(j_,r.afterWriteTickInfo)):uh(t,r,1,n))}function j_({stream:t,state:e,count:r,cb:i}){return e.afterWriteTickInfo=null,uh(t,e,r,i)}function uh(t,e,r,i){for(!e.ending&&!t.destroyed&&e.length===0&&e.needDrain&&(e.needDrain=!1,t.emit("drain"));r-- >0;)e.pendingcb--,i();e.destroyed&&lo(e),fo(t,e)}function lo(t){if(t.writing)return;for(let n=t.bufferedIndex;n<t.buffered.length;++n){var e;let{chunk:o,callback:s}=t.buffered[n],a=t.objectMode?1:o.length;t.length-=a,s((e=t.errored)!==null&&e!==void 0?e:new bi("write"))}let r=t[Wr].splice(0);for(let n=0;n<r.length;n++){var i;r[n]((i=t.errored)!==null&&i!==void 0?i:new bi("end"))}yn(t)}function uo(t,e){if(e.corked||e.bufferProcessing||e.destroyed||!e.constructed)return;let{buffered:r,bufferedIndex:i,objectMode:n}=e,o=r.length-i;if(!o)return;let s=i;if(e.bufferProcessing=!0,o>1&&t._writev){e.pendingcb-=o-1;let a=e.allNoop?ao:c=>{for(let h=s;h<r.length;++h)r[h].callback(c)},l=e.allNoop&&s===0?r:rh(r,s);l.allBuffers=e.allBuffers,eh(t,e,!0,e.length,l,"",a),yn(e)}else{do{let{chunk:a,encoding:l,callback:c}=r[s];r[s++]=null;let h=n?1:a.length;eh(t,e,!1,h,a,l,c)}while(s<r.length&&!e.writing);s===r.length?yn(e):s>256?(r.splice(0,s),e.bufferedIndex=0):e.bufferedIndex=s}e.bufferProcessing=!1}ie.prototype._write=function(t,e,r){if(this._writev)this._writev([{chunk:t,encoding:e}],r);else throw new x_("_write()")};ie.prototype._writev=null;ie.prototype.end=function(t,e,r){let i=this._writableState;typeof t=="function"?(r=t,t=null,e=null):typeof e=="function"&&(r=e,e=null);let n;if(t!=null){let o=lh(this,t,e);o instanceof S_&&(n=o)}return i.corked&&(i.corked=1,this.uncork()),n||(!i.errored&&!i.ending?(i.ending=!0,fo(this,i,!0),i.ended=!0):i.finished?n=new L_("end"):i.destroyed&&(n=new bi("end"))),typeof r=="function"&&(n||i.finished?cr.nextTick(r,n):i[Wr].push(r)),this};function gn(t){return t.ending&&!t.destroyed&&t.constructed&&t.length===0&&!t.errored&&t.buffered.length===0&&!t.finished&&!t.writing&&!t.errorEmitted&&!t.closeEmitted}function F_(t,e){let r=!1;function i(n){if(r){Fr(t,n??oh());return}if(r=!0,e.pendingcb--,n){let o=e[Wr].splice(0);for(let s=0;s<o.length;s++)o[s](n);Fr(t,n,e.sync)}else gn(e)&&(e.prefinished=!0,t.emit("prefinish"),e.pendingcb++,cr.nextTick(oo,t,e))}e.sync=!0,e.pendingcb++;try{t._final(i)}catch(n){i(n)}e.sync=!1}function W_(t,e){!e.prefinished&&!e.finalCalled&&(typeof t._final=="function"&&!e.destroyed?(e.finalCalled=!0,F_(t,e)):(e.prefinished=!0,t.emit("prefinish")))}function fo(t,e,r){gn(e)&&(W_(t,e),e.pendingcb===0&&(r?(e.pendingcb++,cr.nextTick((i,n)=>{gn(n)?oo(i,n):n.pendingcb--},t,e)):gn(e)&&(e.pendingcb++,oo(t,e))))}function oo(t,e){e.pendingcb--,e.finished=!0;let r=e[Wr].splice(0);for(let i=0;i<r.length;i++)r[i]();if(t.emit("finish"),e.autoDestroy){let i=t._readableState;(!i||i.autoDestroy&&(i.endEmitted||i.readable===!1))&&t.destroy()}}A_(ie.prototype,{closed:{__proto__:null,get(){return this._writableState?this._writableState.closed:!1}},destroyed:{__proto__:null,get(){return this._writableState?this._writableState.destroyed:!1},set(t){this._writableState&&(this._writableState.destroyed=t)}},writable:{__proto__:null,get(){let t=this._writableState;return!!t&&t.writable!==!1&&!t.destroyed&&!t.errored&&!t.ending&&!t.ended},set(t){this._writableState&&(this._writableState.writable=!!t)}},writableFinished:{__proto__:null,get(){return this._writableState?this._writableState.finished:!1}},writableObjectMode:{__proto__:null,get(){return this._writableState?this._writableState.objectMode:!1}},writableBuffer:{__proto__:null,get(){return this._writableState&&this._writableState.getBuffer()}},writableEnded:{__proto__:null,get(){return this._writableState?this._writableState.ending:!1}},writableNeedDrain:{__proto__:null,get(){let t=this._writableState;return t?!t.destroyed&&!t.ending&&t.needDrain:!1}},writableHighWaterMark:{__proto__:null,get(){return this._writableState&&this._writableState.highWaterMark}},writableCorked:{__proto__:null,get(){return this._writableState?this._writableState.corked:0}},writableLength:{__proto__:null,get(){return this._writableState&&this._writableState.length}},errored:{__proto__:null,enumerable:!1,get(){return this._writableState?this._writableState.errored:null}},writableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._writableState.writable!==!1&&(this._writableState.destroyed||this._writableState.errored)&&!this._writableState.finished)}}});var $_=bn.destroy;ie.prototype.destroy=function(t,e){let r=this._writableState;return!r.destroyed&&(r.bufferedIndex<r.buffered.length||r[Wr].length)&&cr.nextTick(lo,r),$_.call(this,t,e),this};ie.prototype._undestroy=bn.undestroy;ie.prototype._destroy=function(t,e){e(t)};ie.prototype[C_.captureRejectionSymbol]=function(t){this.destroy(t)};var so;function fh(){return so===void 0&&(so={}),so}ie.fromWeb=function(t,e){return fh().newStreamWritableFromWritableStream(t,e)};ie.toWeb=function(t){return fh().newWritableStreamFromStreamWritable(t)}});var Sh=M((_R,Eh)=>{_();v();m();var ho=Nt(),H_=(be(),X(me)),{isReadable:V_,isWritable:z_,isIterable:hh,isNodeStream:K_,isReadableNodeStream:dh,isWritableNodeStream:ph,isDuplexNodeStream:G_}=tt(),gh=vt(),{AbortError:vh,codes:{ERR_INVALID_ARG_TYPE:Q_,ERR_INVALID_RETURN_VALUE:yh}}=Ae(),{destroyer:$r}=ir(),Y_=nt(),J_=gi(),{createDeferredPromise:bh}=Je(),wh=Xs(),_h=globalThis.Blob||H_.Blob,X_=typeof _h<"u"?function(e){return e instanceof _h}:function(e){return!1},Z_=globalThis.AbortController||zi().AbortController,{FunctionPrototypeCall:mh}=ce(),hr=class extends Y_{constructor(e){super(e),e?.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),e?.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)}};Eh.exports=function t(e,r){if(G_(e))return e;if(dh(e))return wn({readable:e});if(ph(e))return wn({writable:e});if(K_(e))return wn({writable:!1,readable:!1});if(typeof e=="function"){let{value:n,write:o,final:s,destroy:a}=e0(e);if(hh(n))return wh(hr,n,{objectMode:!0,write:o,final:s,destroy:a});let l=n?.then;if(typeof l=="function"){let c,h=mh(l,n,d=>{if(d!=null)throw new yh("nully","body",d)},d=>{$r(c,d)});return c=new hr({objectMode:!0,readable:!1,write:o,final(d){s(async()=>{try{await h,ho.nextTick(d,null)}catch(g){ho.nextTick(d,g)}})},destroy:a})}throw new yh("Iterable, AsyncIterable or AsyncFunction",r,n)}if(X_(e))return t(e.arrayBuffer());if(hh(e))return wh(hr,e,{objectMode:!0,writable:!1});if(typeof e?.writable=="object"||typeof e?.readable=="object"){let n=e!=null&&e.readable?dh(e?.readable)?e?.readable:t(e.readable):void 0,o=e!=null&&e.writable?ph(e?.writable)?e?.writable:t(e.writable):void 0;return wn({readable:n,writable:o})}let i=e?.then;if(typeof i=="function"){let n;return mh(i,e,o=>{o!=null&&n.push(o),n.push(null)},o=>{$r(n,o)}),n=new hr({objectMode:!0,writable:!1,read(){}})}throw new Q_(r,["Blob","ReadableStream","WritableStream","Stream","Iterable","AsyncIterable","Function","{ readable, writable } pair","Promise"],e)};function e0(t){let{promise:e,resolve:r}=bh(),i=new Z_,n=i.signal;return{value:t(async function*(){for(;;){let s=e;e=null;let{chunk:a,done:l,cb:c}=await s;if(ho.nextTick(c),l)return;if(n.aborted)throw new vh(void 0,{cause:n.reason});({promise:e,resolve:r}=bh()),yield a}}(),{signal:n}),write(s,a,l){let c=r;r=null,c({chunk:s,done:!1,cb:l})},final(s){let a=r;r=null,a({done:!0,cb:s})},destroy(s,a){i.abort(),a(s)}}}function wn(t){let e=t.readable&&typeof t.readable.read!="function"?J_.wrap(t.readable):t.readable,r=t.writable,i=!!V_(e),n=!!z_(r),o,s,a,l,c;function h(d){let g=l;l=null,g?g(d):d&&c.destroy(d)}return c=new hr({readableObjectMode:!!(e!=null&&e.readableObjectMode),writableObjectMode:!!(r!=null&&r.writableObjectMode),readable:i,writable:n}),n&&(gh(r,d=>{n=!1,d&&$r(e,d),h(d)}),c._write=function(d,g,y){r.write(d,g)?y():o=y},c._final=function(d){r.end(),s=d},r.on("drain",function(){if(o){let d=o;o=null,d()}}),r.on("finish",function(){if(s){let d=s;s=null,d()}})),i&&(gh(e,d=>{i=!1,d&&$r(e,d),h(d)}),e.on("readable",function(){if(a){let d=a;a=null,d()}}),e.on("end",function(){c.push(null)}),c._read=function(){for(;;){let d=e.read();if(d===null){a=c._read;return}if(!c.push(d))return}}),c._destroy=function(d,g){!d&&l!==null&&(d=new vh),a=null,o=null,s=null,l===null?g(d):(l=g,$r(r,d),$r(e,d))},c}});var nt=M((BR,Th)=>{"use strict";_();v();m();var{ObjectDefineProperties:t0,ObjectGetOwnPropertyDescriptor:It,ObjectKeys:r0,ObjectSetPrototypeOf:Ah}=ce();Th.exports=Ve;var yo=gi(),Ne=co();Ah(Ve.prototype,yo.prototype);Ah(Ve,yo);{let t=r0(Ne.prototype);for(let e=0;e<t.length;e++){let r=t[e];Ve.prototype[r]||(Ve.prototype[r]=Ne.prototype[r])}}function Ve(t){if(!(this instanceof Ve))return new Ve(t);yo.call(this,t),Ne.call(this,t),t?(this.allowHalfOpen=t.allowHalfOpen!==!1,t.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),t.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)):this.allowHalfOpen=!0}t0(Ve.prototype,{writable:{__proto__:null,...It(Ne.prototype,"writable")},writableHighWaterMark:{__proto__:null,...It(Ne.prototype,"writableHighWaterMark")},writableObjectMode:{__proto__:null,...It(Ne.prototype,"writableObjectMode")},writableBuffer:{__proto__:null,...It(Ne.prototype,"writableBuffer")},writableLength:{__proto__:null,...It(Ne.prototype,"writableLength")},writableFinished:{__proto__:null,...It(Ne.prototype,"writableFinished")},writableCorked:{__proto__:null,...It(Ne.prototype,"writableCorked")},writableEnded:{__proto__:null,...It(Ne.prototype,"writableEnded")},writableNeedDrain:{__proto__:null,...It(Ne.prototype,"writableNeedDrain")},destroyed:{__proto__:null,get(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set(t){this._readableState&&this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}}});var po;function Ih(){return po===void 0&&(po={}),po}Ve.fromWeb=function(t,e){return Ih().newStreamDuplexFromReadableWritablePair(t,e)};Ve.toWeb=function(t){return Ih().newReadableWritablePairFromDuplex(t)};var go;Ve.from=function(t){return go||(go=Sh()),go(t,"body")}});var _o=M((DR,Ch)=>{"use strict";_();v();m();var{ObjectSetPrototypeOf:Rh,Symbol:i0}=ce();Ch.exports=Tt;var{ERR_METHOD_NOT_IMPLEMENTED:n0}=Ae().codes,wo=nt(),{getHighWaterMark:s0}=an();Rh(Tt.prototype,wo.prototype);Rh(Tt,wo);var _i=i0("kCallback");function Tt(t){if(!(this instanceof Tt))return new Tt(t);let e=t?s0(this,t,"readableHighWaterMark",!0):null;e===0&&(t={...t,highWaterMark:null,readableHighWaterMark:e,writableHighWaterMark:t.writableHighWaterMark||0}),wo.call(this,t),this._readableState.sync=!1,this[_i]=null,t&&(typeof t.transform=="function"&&(this._transform=t.transform),typeof t.flush=="function"&&(this._flush=t.flush)),this.on("prefinish",o0)}function bo(t){typeof this._flush=="function"&&!this.destroyed?this._flush((e,r)=>{if(e){t?t(e):this.destroy(e);return}r!=null&&this.push(r),this.push(null),t&&t()}):(this.push(null),t&&t())}function o0(){this._final!==bo&&bo.call(this)}Tt.prototype._final=bo;Tt.prototype._transform=function(t,e,r){throw new n0("_transform()")};Tt.prototype._write=function(t,e,r){let i=this._readableState,n=this._writableState,o=i.length;this._transform(t,e,(s,a)=>{if(s){r(s);return}a!=null&&this.push(a),n.ended||o===i.length||i.length<i.highWaterMark?r():this[_i]=r})};Tt.prototype._read=function(){if(this[_i]){let t=this[_i];this[_i]=null,t()}}});var vo=M((QR,Ph)=>{"use strict";_();v();m();var{ObjectSetPrototypeOf:Bh}=ce();Ph.exports=Hr;var mo=_o();Bh(Hr.prototype,mo.prototype);Bh(Hr,mo);function Hr(t){if(!(this instanceof Hr))return new Hr(t);mo.call(this,t)}Hr.prototype._transform=function(t,e,r){r(null,t)}});var En=M((sC,Lh)=>{_();v();m();var mi=Nt(),{ArrayIsArray:a0,Promise:l0,SymbolAsyncIterator:u0}=ce(),vn=vt(),{once:f0}=Je(),c0=ir(),kh=nt(),{aggregateTwoErrors:h0,codes:{ERR_INVALID_ARG_TYPE:Bo,ERR_INVALID_RETURN_VALUE:Eo,ERR_MISSING_ARGS:d0,ERR_STREAM_DESTROYED:p0,ERR_STREAM_PREMATURE_CLOSE:g0},AbortError:y0}=Ae(),{validateFunction:b0,validateAbortSignal:w0}=hi(),{isIterable:dr,isReadable:So,isReadableNodeStream:mn,isNodeStream:Oh,isTransformStream:Vr,isWebStream:_0,isReadableStream:Ao,isReadableEnded:m0}=tt(),v0=globalThis.AbortController||zi().AbortController,Io,To;function xh(t,e,r){let i=!1;t.on("close",()=>{i=!0});let n=vn(t,{readable:e,writable:r},o=>{i=!o});return{destroy:o=>{i||(i=!0,c0.destroyer(t,o||new p0("pipe")))},cleanup:n}}function E0(t){return b0(t[t.length-1],"streams[stream.length - 1]"),t.pop()}function Ro(t){if(dr(t))return t;if(mn(t))return S0(t);throw new Bo("val",["Readable","Iterable","AsyncIterable"],t)}async function*S0(t){To||(To=gi()),yield*To.prototype[u0].call(t)}async function _n(t,e,r,{end:i}){let n,o=null,s=c=>{if(c&&(n=c),o){let h=o;o=null,h()}},a=()=>new l0((c,h)=>{n?h(n):o=()=>{n?h(n):c()}});e.on("drain",s);let l=vn(e,{readable:!1},s);try{e.writableNeedDrain&&await a();for await(let c of t)e.write(c)||await a();i&&e.end(),await a(),r()}catch(c){r(n!==c?h0(n,c):c)}finally{l(),e.off("drain",s)}}async function Co(t,e,r,{end:i}){Vr(e)&&(e=e.writable);let n=e.getWriter();try{for await(let o of t)await n.ready,n.write(o).catch(()=>{});await n.ready,i&&await n.close(),r()}catch(o){try{await n.abort(o),r(o)}catch(s){r(s)}}}function A0(...t){return Mh(t,f0(E0(t)))}function Mh(t,e,r){if(t.length===1&&a0(t[0])&&(t=t[0]),t.length<2)throw new d0("streams");let i=new v0,n=i.signal,o=r?.signal,s=[];w0(o,"options.signal");function a(){y(new y0)}o?.addEventListener("abort",a);let l,c,h=[],d=0;function g(B){y(B,--d===0)}function y(B,R){if(B&&(!l||l.code==="ERR_STREAM_PREMATURE_CLOSE")&&(l=B),!(!l&&!R)){for(;h.length;)h.shift()(l);o?.removeEventListener("abort",a),i.abort(),R&&(l||s.forEach(U=>U()),mi.nextTick(e,l,c))}}let w;for(let B=0;B<t.length;B++){let R=t[B],U=B<t.length-1,N=B>0,W=U||r?.end!==!1,K=B===t.length-1;if(Oh(R)){let z=function(Q){Q&&Q.name!=="AbortError"&&Q.code!=="ERR_STREAM_PREMATURE_CLOSE"&&g(Q)};var I=z;if(W){let{destroy:Q,cleanup:pe}=xh(R,U,N);h.push(Q),So(R)&&K&&s.push(pe)}R.on("error",z),So(R)&&K&&s.push(()=>{R.removeListener("error",z)})}if(B===0)if(typeof R=="function"){if(w=R({signal:n}),!dr(w))throw new Eo("Iterable, AsyncIterable or Stream","source",w)}else dr(R)||mn(R)||Vr(R)?w=R:w=kh.from(R);else if(typeof R=="function"){if(Vr(w)){var E;w=Ro((E=w)===null||E===void 0?void 0:E.readable)}else w=Ro(w);if(w=R(w,{signal:n}),U){if(!dr(w,!0))throw new Eo("AsyncIterable",`transform[${B-1}]`,w)}else{var S;Io||(Io=vo());let z=new Io({objectMode:!0}),Q=(S=w)===null||S===void 0?void 0:S.then;if(typeof Q=="function")d++,Q.call(w,ge=>{c=ge,ge!=null&&z.write(ge),W&&z.end(),mi.nextTick(g)},ge=>{z.destroy(ge),mi.nextTick(g,ge)});else if(dr(w,!0))d++,_n(w,z,g,{end:W});else if(Ao(w)||Vr(w)){let ge=w.readable||w;d++,_n(ge,z,g,{end:W})}else throw new Eo("AsyncIterable or Promise","destination",w);w=z;let{destroy:pe,cleanup:Yt}=xh(w,!1,!0);h.push(pe),K&&s.push(Yt)}}else if(Oh(R)){if(mn(w)){d+=2;let z=I0(w,R,g,{end:W});So(R)&&K&&s.push(z)}else if(Vr(w)||Ao(w)){let z=w.readable||w;d++,_n(z,R,g,{end:W})}else if(dr(w))d++,_n(w,R,g,{end:W});else throw new Bo("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],w);w=R}else if(_0(R)){if(mn(w))d++,Co(Ro(w),R,g,{end:W});else if(Ao(w)||dr(w))d++,Co(w,R,g,{end:W});else if(Vr(w))d++,Co(w.readable,R,g,{end:W});else throw new Bo("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],w);w=R}else w=kh.from(R)}return(n!=null&&n.aborted||o!=null&&o.aborted)&&mi.nextTick(a),w}function I0(t,e,r,{end:i}){let n=!1;if(e.on("close",()=>{n||r(new g0)}),t.pipe(e,{end:!1}),i){let s=function(){n=!0,e.end()};var o=s;m0(t)?mi.nextTick(s):t.once("end",s)}else r();return vn(t,{readable:!0,writable:!1},s=>{let a=t._readableState;s&&s.code==="ERR_STREAM_PREMATURE_CLOSE"&&a&&a.ended&&!a.errored&&!a.errorEmitted?t.once("end",r).once("error",r):r(s)}),vn(e,{readable:!1,writable:!0},r)}Lh.exports={pipelineImpl:Mh,pipeline:A0}});var ko=M((gC,Fh)=>{"use strict";_();v();m();var{pipeline:T0}=En(),Sn=nt(),{destroyer:R0}=ir(),{isNodeStream:An,isReadable:Uh,isWritable:Nh,isWebStream:Po,isTransformStream:pr,isWritableStream:qh,isReadableStream:Dh}=tt(),{AbortError:C0,codes:{ERR_INVALID_ARG_VALUE:jh,ERR_MISSING_ARGS:B0}}=Ae(),P0=vt();Fh.exports=function(...e){if(e.length===0)throw new B0("streams");if(e.length===1)return Sn.from(e[0]);let r=[...e];if(typeof e[0]=="function"&&(e[0]=Sn.from(e[0])),typeof e[e.length-1]=="function"){let y=e.length-1;e[y]=Sn.from(e[y])}for(let y=0;y<e.length;++y)if(!(!An(e[y])&&!Po(e[y]))){if(y<e.length-1&&!(Uh(e[y])||Dh(e[y])||pr(e[y])))throw new jh(`streams[${y}]`,r[y],"must be readable");if(y>0&&!(Nh(e[y])||qh(e[y])||pr(e[y])))throw new jh(`streams[${y}]`,r[y],"must be writable")}let i,n,o,s,a;function l(y){let w=s;s=null,w?w(y):y?a.destroy(y):!g&&!d&&a.destroy()}let c=e[0],h=T0(e,l),d=!!(Nh(c)||qh(c)||pr(c)),g=!!(Uh(h)||Dh(h)||pr(h));if(a=new Sn({writableObjectMode:!!(c!=null&&c.writableObjectMode),readableObjectMode:!!(h!=null&&h.writableObjectMode),writable:d,readable:g}),d){if(An(c))a._write=function(w,E,S){c.write(w,E)?S():i=S},a._final=function(w){c.end(),n=w},c.on("drain",function(){if(i){let w=i;i=null,w()}});else if(Po(c)){let E=(pr(c)?c.writable:c).getWriter();a._write=async function(S,I,B){try{await E.ready,E.write(S).catch(()=>{}),B()}catch(R){B(R)}},a._final=async function(S){try{await E.ready,E.close().catch(()=>{}),n=S}catch(I){S(I)}}}let y=pr(h)?h.readable:h;P0(y,()=>{if(n){let w=n;n=null,w()}})}if(g){if(An(h))h.on("readable",function(){if(o){let y=o;o=null,y()}}),h.on("end",function(){a.push(null)}),a._read=function(){for(;;){let y=h.read();if(y===null){o=a._read;return}if(!a.push(y))return}};else if(Po(h)){let w=(pr(h)?h.readable:h).getReader();a._read=async function(){for(;;)try{let{value:E,done:S}=await w.read();if(!a.push(E))return;if(S){a.push(null);return}}catch{return}}}}return a._destroy=function(y,w){!y&&s!==null&&(y=new C0),o=null,i=null,n=null,s===null?w(y):(s=w,An(h)&&R0(h,y))},a}});var Qh=M((IC,Mo)=>{"use strict";_();v();m();var Vh=globalThis.AbortController||zi().AbortController,{codes:{ERR_INVALID_ARG_VALUE:k0,ERR_INVALID_ARG_TYPE:vi,ERR_MISSING_ARGS:O0,ERR_OUT_OF_RANGE:x0},AbortError:st}=Ae(),{validateAbortSignal:gr,validateInteger:M0,validateObject:yr}=hi(),L0=ce().Symbol("kWeak"),{finished:U0}=vt(),N0=ko(),{addAbortSignalNoValidate:q0}=di(),{isWritable:D0,isNodeStream:j0}=tt(),{ArrayPrototypePush:F0,MathFloor:W0,Number:$0,NumberIsNaN:H0,Promise:Wh,PromiseReject:$h,PromisePrototypeThen:V0,Symbol:zh}=ce(),In=zh("kEmpty"),Hh=zh("kEof");function z0(t,e){if(e!=null&&yr(e,"options"),e?.signal!=null&&gr(e.signal,"options.signal"),j0(t)&&!D0(t))throw new k0("stream",t,"must be writable");let r=N0(this,t);return e!=null&&e.signal&&q0(e.signal,r),r}function Tn(t,e){if(typeof t!="function")throw new vi("fn",["Function","AsyncFunction"],t);e!=null&&yr(e,"options"),e?.signal!=null&&gr(e.signal,"options.signal");let r=1;return e?.concurrency!=null&&(r=W0(e.concurrency)),M0(r,"concurrency",1),async function*(){var n,o;let s=new Vh,a=this,l=[],c=s.signal,h={signal:c},d=()=>s.abort();e!=null&&(n=e.signal)!==null&&n!==void 0&&n.aborted&&d(),e==null||(o=e.signal)===null||o===void 0||o.addEventListener("abort",d);let g,y,w=!1;function E(){w=!0}async function S(){try{for await(let R of a){var I;if(w)return;if(c.aborted)throw new st;try{R=t(R,h)}catch(U){R=$h(U)}R!==In&&(typeof((I=R)===null||I===void 0?void 0:I.catch)=="function"&&R.catch(E),l.push(R),g&&(g(),g=null),!w&&l.length&&l.length>=r&&await new Wh(U=>{y=U}))}l.push(Hh)}catch(R){let U=$h(R);V0(U,void 0,E),l.push(U)}finally{var B;w=!0,g&&(g(),g=null),e==null||(B=e.signal)===null||B===void 0||B.removeEventListener("abort",d)}}S();try{for(;;){for(;l.length>0;){let I=await l[0];if(I===Hh)return;if(c.aborted)throw new st;I!==In&&(yield I),l.shift(),y&&(y(),y=null)}await new Wh(I=>{g=I})}}finally{s.abort(),w=!0,y&&(y(),y=null)}}.call(this)}function K0(t=void 0){return t!=null&&yr(t,"options"),t?.signal!=null&&gr(t.signal,"options.signal"),async function*(){let r=0;for await(let n of this){var i;if(t!=null&&(i=t.signal)!==null&&i!==void 0&&i.aborted)throw new st({cause:t.signal.reason});yield[r++,n]}}.call(this)}async function Kh(t,e=void 0){for await(let r of xo.call(this,t,e))return!0;return!1}async function G0(t,e=void 0){if(typeof t!="function")throw new vi("fn",["Function","AsyncFunction"],t);return!await Kh.call(this,async(...r)=>!await t(...r),e)}async function Q0(t,e){for await(let r of xo.call(this,t,e))return r}async function Y0(t,e){if(typeof t!="function")throw new vi("fn",["Function","AsyncFunction"],t);async function r(i,n){return await t(i,n),In}for await(let i of Tn.call(this,r,e));}function xo(t,e){if(typeof t!="function")throw new vi("fn",["Function","AsyncFunction"],t);async function r(i,n){return await t(i,n)?i:In}return Tn.call(this,r,e)}var Oo=class extends O0{constructor(){super("reduce"),this.message="Reduce of an empty stream requires an initial value"}};async function J0(t,e,r){var i;if(typeof t!="function")throw new vi("reducer",["Function","AsyncFunction"],t);r!=null&&yr(r,"options"),r?.signal!=null&&gr(r.signal,"options.signal");let n=arguments.length>1;if(r!=null&&(i=r.signal)!==null&&i!==void 0&&i.aborted){let c=new st(void 0,{cause:r.signal.reason});throw this.once("error",()=>{}),await U0(this.destroy(c)),c}let o=new Vh,s=o.signal;if(r!=null&&r.signal){let c={once:!0,[L0]:this};r.signal.addEventListener("abort",()=>o.abort(),c)}let a=!1;try{for await(let c of this){var l;if(a=!0,r!=null&&(l=r.signal)!==null&&l!==void 0&&l.aborted)throw new st;n?e=await t(e,c,{signal:s}):(e=c,n=!0)}if(!a&&!n)throw new Oo}finally{o.abort()}return e}async function X0(t){t!=null&&yr(t,"options"),t?.signal!=null&&gr(t.signal,"options.signal");let e=[];for await(let i of this){var r;if(t!=null&&(r=t.signal)!==null&&r!==void 0&&r.aborted)throw new st(void 0,{cause:t.signal.reason});F0(e,i)}return e}function Z0(t,e){let r=Tn.call(this,t,e);return async function*(){for await(let n of r)yield*n}.call(this)}function Gh(t){if(t=$0(t),H0(t))return 0;if(t<0)throw new x0("number",">= 0",t);return t}function em(t,e=void 0){return e!=null&&yr(e,"options"),e?.signal!=null&&gr(e.signal,"options.signal"),t=Gh(t),async function*(){var i;if(e!=null&&(i=e.signal)!==null&&i!==void 0&&i.aborted)throw new st;for await(let o of this){var n;if(e!=null&&(n=e.signal)!==null&&n!==void 0&&n.aborted)throw new st;t--<=0&&(yield o)}}.call(this)}function tm(t,e=void 0){return e!=null&&yr(e,"options"),e?.signal!=null&&gr(e.signal,"options.signal"),t=Gh(t),async function*(){var i;if(e!=null&&(i=e.signal)!==null&&i!==void 0&&i.aborted)throw new st;for await(let o of this){var n;if(e!=null&&(n=e.signal)!==null&&n!==void 0&&n.aborted)throw new st;if(t-- >0)yield o;else return}}.call(this)}Mo.exports.streamReturningOperators={asIndexedPairs:K0,drop:em,filter:xo,flatMap:Z0,map:Tn,take:tm,compose:z0};Mo.exports.promiseReturningOperators={every:G0,forEach:Y0,reduce:J0,toArray:X0,some:Kh,find:Q0}});var Lo=M((LC,Yh)=>{"use strict";_();v();m();var{ArrayPrototypePop:rm,Promise:im}=ce(),{isIterable:nm,isNodeStream:sm,isWebStream:om}=tt(),{pipelineImpl:am}=En(),{finished:lm}=vt();Uo();function um(...t){return new im((e,r)=>{let i,n,o=t[t.length-1];if(o&&typeof o=="object"&&!sm(o)&&!nm(o)&&!om(o)){let s=rm(t);i=s.signal,n=s.end}am(t,(s,a)=>{s?r(s):e(a)},{signal:i,end:n})})}Yh.exports={finished:lm,pipeline:um}});var Uo=M((VC,sd)=>{_();v();m();var{Buffer:fm}=(be(),X(me)),{ObjectDefineProperty:Rt,ObjectKeys:Zh,ReflectApply:ed}=ce(),{promisify:{custom:td}}=Je(),{streamReturningOperators:Jh,promiseReturningOperators:Xh}=Qh(),{codes:{ERR_ILLEGAL_CONSTRUCTOR:rd}}=Ae(),cm=ko(),{pipeline:id}=En(),{destroyer:hm}=ir(),nd=vt(),No=Lo(),qo=tt(),le=sd.exports=nn().Stream;le.isDisturbed=qo.isDisturbed;le.isErrored=qo.isErrored;le.isReadable=qo.isReadable;le.Readable=gi();for(let t of Zh(Jh)){let r=function(...i){if(new.target)throw rd();return le.Readable.from(ed(e,this,i))};Do=r;let e=Jh[t];Rt(r,"name",{__proto__:null,value:e.name}),Rt(r,"length",{__proto__:null,value:e.length}),Rt(le.Readable.prototype,t,{__proto__:null,value:r,enumerable:!1,configurable:!0,writable:!0})}var Do;for(let t of Zh(Xh)){let r=function(...n){if(new.target)throw rd();return ed(e,this,n)};Do=r;let e=Xh[t];Rt(r,"name",{__proto__:null,value:e.name}),Rt(r,"length",{__proto__:null,value:e.length}),Rt(le.Readable.prototype,t,{__proto__:null,value:r,enumerable:!1,configurable:!0,writable:!0})}var Do;le.Writable=co();le.Duplex=nt();le.Transform=_o();le.PassThrough=vo();le.pipeline=id;var{addAbortSignal:dm}=di();le.addAbortSignal=dm;le.finished=nd;le.destroy=hm;le.compose=cm;Rt(le,"promises",{__proto__:null,configurable:!0,enumerable:!0,get(){return No}});Rt(id,td,{__proto__:null,enumerable:!0,get(){return No.pipeline}});Rt(nd,td,{__proto__:null,enumerable:!0,get(){return No.finished}});le.Stream=le;le._isUint8Array=function(e){return e instanceof Uint8Array};le._uint8ArrayToBuffer=function(e){return fm.from(e.buffer,e.byteOffset,e.byteLength)}});var jt=M((tB,ue)=>{"use strict";_();v();m();var he=Uo(),pm=Lo(),gm=he.Readable.destroy;ue.exports=he.Readable;ue.exports._uint8ArrayToBuffer=he._uint8ArrayToBuffer;ue.exports._isUint8Array=he._isUint8Array;ue.exports.isDisturbed=he.isDisturbed;ue.exports.isErrored=he.isErrored;ue.exports.isReadable=he.isReadable;ue.exports.Readable=he.Readable;ue.exports.Writable=he.Writable;ue.exports.Duplex=he.Duplex;ue.exports.Transform=he.Transform;ue.exports.PassThrough=he.PassThrough;ue.exports.addAbortSignal=he.addAbortSignal;ue.exports.finished=he.finished;ue.exports.destroy=he.destroy;ue.exports.destroy=gm;ue.exports.pipeline=he.pipeline;ue.exports.compose=he.compose;Object.defineProperty(he,"promises",{configurable:!0,enumerable:!0,get(){return pm}});ue.exports.Stream=he.Stream;ue.exports.default=ue.exports});var od=M((cB,jo)=>{_();v();m();typeof Object.create=="function"?jo.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:jo.exports=function(e,r){if(r){e.super_=r;var i=function(){};i.prototype=r.prototype,e.prototype=new i,e.prototype.constructor=e}}});var ud=M((vB,ld)=>{"use strict";_();v();m();var{Buffer:ze}=(be(),X(me)),ad=Symbol.for("BufferList");function ee(t){if(!(this instanceof ee))return new ee(t);ee._init.call(this,t)}ee._init=function(e){Object.defineProperty(this,ad,{value:!0}),this._bufs=[],this.length=0,e&&this.append(e)};ee.prototype._new=function(e){return new ee(e)};ee.prototype._offset=function(e){if(e===0)return[0,0];let r=0;for(let i=0;i<this._bufs.length;i++){let n=r+this._bufs[i].length;if(e<n||i===this._bufs.length-1)return[i,e-r];r=n}};ee.prototype._reverseOffset=function(t){let e=t[0],r=t[1];for(let i=0;i<e;i++)r+=this._bufs[i].length;return r};ee.prototype.get=function(e){if(e>this.length||e<0)return;let r=this._offset(e);return this._bufs[r[0]][r[1]]};ee.prototype.slice=function(e,r){return typeof e=="number"&&e<0&&(e+=this.length),typeof r=="number"&&r<0&&(r+=this.length),this.copy(null,0,e,r)};ee.prototype.copy=function(e,r,i,n){if((typeof i!="number"||i<0)&&(i=0),(typeof n!="number"||n>this.length)&&(n=this.length),i>=this.length||n<=0)return e||ze.alloc(0);let o=!!e,s=this._offset(i),a=n-i,l=a,c=o&&r||0,h=s[1];if(i===0&&n===this.length){if(!o)return this._bufs.length===1?this._bufs[0]:ze.concat(this._bufs,this.length);for(let d=0;d<this._bufs.length;d++)this._bufs[d].copy(e,c),c+=this._bufs[d].length;return e}if(l<=this._bufs[s[0]].length-h)return o?this._bufs[s[0]].copy(e,r,h,h+l):this._bufs[s[0]].slice(h,h+l);o||(e=ze.allocUnsafe(a));for(let d=s[0];d<this._bufs.length;d++){let g=this._bufs[d].length-h;if(l>g)this._bufs[d].copy(e,c,h),c+=g;else{this._bufs[d].copy(e,c,h,h+l),c+=g;break}l-=g,h&&(h=0)}return e.length>c?e.slice(0,c):e};ee.prototype.shallowSlice=function(e,r){if(e=e||0,r=typeof r!="number"?this.length:r,e<0&&(e+=this.length),r<0&&(r+=this.length),e===r)return this._new();let i=this._offset(e),n=this._offset(r),o=this._bufs.slice(i[0],n[0]+1);return n[1]===0?o.pop():o[o.length-1]=o[o.length-1].slice(0,n[1]),i[1]!==0&&(o[0]=o[0].slice(i[1])),this._new(o)};ee.prototype.toString=function(e,r,i){return this.slice(r,i).toString(e)};ee.prototype.consume=function(e){if(e=Math.trunc(e),Number.isNaN(e)||e<=0)return this;for(;this._bufs.length;)if(e>=this._bufs[0].length)e-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift();else{this._bufs[0]=this._bufs[0].slice(e),this.length-=e;break}return this};ee.prototype.duplicate=function(){let e=this._new();for(let r=0;r<this._bufs.length;r++)e.append(this._bufs[r]);return e};ee.prototype.append=function(e){if(e==null)return this;if(e.buffer)this._appendBuffer(ze.from(e.buffer,e.byteOffset,e.byteLength));else if(Array.isArray(e))for(let r=0;r<e.length;r++)this.append(e[r]);else if(this._isBufferList(e))for(let r=0;r<e._bufs.length;r++)this.append(e._bufs[r]);else typeof e=="number"&&(e=e.toString()),this._appendBuffer(ze.from(e));return this};ee.prototype._appendBuffer=function(e){this._bufs.push(e),this.length+=e.length};ee.prototype.indexOf=function(t,e,r){if(r===void 0&&typeof e=="string"&&(r=e,e=void 0),typeof t=="function"||Array.isArray(t))throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');if(typeof t=="number"?t=ze.from([t]):typeof t=="string"?t=ze.from(t,r):this._isBufferList(t)?t=t.slice():Array.isArray(t.buffer)?t=ze.from(t.buffer,t.byteOffset,t.byteLength):ze.isBuffer(t)||(t=ze.from(t)),e=Number(e||0),isNaN(e)&&(e=0),e<0&&(e=this.length+e),e<0&&(e=0),t.length===0)return e>this.length?this.length:e;let i=this._offset(e),n=i[0],o=i[1];for(;n<this._bufs.length;n++){let s=this._bufs[n];for(;o<s.length;)if(s.length-o>=t.length){let l=s.indexOf(t,o);if(l!==-1)return this._reverseOffset([n,l]);o=s.length-t.length+1}else{let l=this._reverseOffset([n,o]);if(this._match(l,t))return l;o++}o=0}return-1};ee.prototype._match=function(t,e){if(this.length-t<e.length)return!1;for(let r=0;r<e.length;r++)if(this.get(t+r)!==e[r])return!1;return!0};(function(){let t={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readBigInt64BE:8,readBigInt64LE:8,readBigUInt64BE:8,readBigUInt64LE:8,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1,readIntBE:null,readIntLE:null,readUIntBE:null,readUIntLE:null};for(let e in t)(function(r){t[r]===null?ee.prototype[r]=function(i,n){return this.slice(i,i+n)[r](0,n)}:ee.prototype[r]=function(i=0){return this.slice(i,i+t[r])[r](0)}})(e)})();ee.prototype._isBufferList=function(e){return e instanceof ee||ee.isBufferList(e)};ee.isBufferList=function(e){return e!=null&&e[ad]};ld.exports=ee});var fd=M((kB,Rn)=>{"use strict";_();v();m();var Fo=jt().Duplex,ym=od(),Ei=ud();function Se(t){if(!(this instanceof Se))return new Se(t);if(typeof t=="function"){this._callback=t;let e=function(i){this._callback&&(this._callback(i),this._callback=null)}.bind(this);this.on("pipe",function(i){i.on("error",e)}),this.on("unpipe",function(i){i.removeListener("error",e)}),t=null}Ei._init.call(this,t),Fo.call(this)}ym(Se,Fo);Object.assign(Se.prototype,Ei.prototype);Se.prototype._new=function(e){return new Se(e)};Se.prototype._write=function(e,r,i){this._appendBuffer(e),typeof i=="function"&&i()};Se.prototype._read=function(e){if(!this.length)return this.push(null);e=Math.min(e,this.length),this.push(this.slice(0,e)),this.consume(e)};Se.prototype.end=function(e){Fo.prototype.end.call(this,e),this._callback&&(this._callback(null,this.slice()),this._callback=null)};Se.prototype._destroy=function(e,r){this._bufs.length=0,this.length=0,r(e)};Se.prototype._isBufferList=function(e){return e instanceof Se||e instanceof Ei||Se.isBufferList(e)};Se.isBufferList=Ei.isBufferList;Rn.exports=Se;Rn.exports.BufferListStream=Se;Rn.exports.BufferList=Ei});var hd=M((FB,cd)=>{_();v();m();var Wo=class{constructor(){this.cmd=null,this.retain=!1,this.qos=0,this.dup=!1,this.length=-1,this.topic=null,this.payload=null}};cd.exports=Wo});var $o=M((JB,dd)=>{_();v();m();var L=dd.exports,{Buffer:ke}=(be(),X(me));L.types={0:"reserved",1:"connect",2:"connack",3:"publish",4:"puback",5:"pubrec",6:"pubrel",7:"pubcomp",8:"subscribe",9:"suback",10:"unsubscribe",11:"unsuback",12:"pingreq",13:"pingresp",14:"disconnect",15:"auth"};L.requiredHeaderFlags={1:0,2:0,4:0,5:0,6:2,7:0,8:2,9:0,10:2,11:0,12:0,13:0,14:0,15:0};L.requiredHeaderFlagsErrors={};for(let t in L.requiredHeaderFlags){let e=L.requiredHeaderFlags[t];L.requiredHeaderFlagsErrors[t]="Invalid header flag bits, must be 0x"+e.toString(16)+" for "+L.types[t]+" packet"}L.codes={};for(let t in L.types){let e=L.types[t];L.codes[e]=t}L.CMD_SHIFT=4;L.CMD_MASK=240;L.DUP_MASK=8;L.QOS_MASK=3;L.QOS_SHIFT=1;L.RETAIN_MASK=1;L.VARBYTEINT_MASK=127;L.VARBYTEINT_FIN_MASK=128;L.VARBYTEINT_MAX=268435455;L.SESSIONPRESENT_MASK=1;L.SESSIONPRESENT_HEADER=ke.from([L.SESSIONPRESENT_MASK]);L.CONNACK_HEADER=ke.from([L.codes.connack<<L.CMD_SHIFT]);L.USERNAME_MASK=128;L.PASSWORD_MASK=64;L.WILL_RETAIN_MASK=32;L.WILL_QOS_MASK=24;L.WILL_QOS_SHIFT=3;L.WILL_FLAG_MASK=4;L.CLEAN_SESSION_MASK=2;L.CONNECT_HEADER=ke.from([L.codes.connect<<L.CMD_SHIFT]);L.properties={sessionExpiryInterval:17,willDelayInterval:24,receiveMaximum:33,maximumPacketSize:39,topicAliasMaximum:34,requestResponseInformation:25,requestProblemInformation:23,userProperties:38,authenticationMethod:21,authenticationData:22,payloadFormatIndicator:1,messageExpiryInterval:2,contentType:3,responseTopic:8,correlationData:9,maximumQoS:36,retainAvailable:37,assignedClientIdentifier:18,reasonString:31,wildcardSubscriptionAvailable:40,subscriptionIdentifiersAvailable:41,sharedSubscriptionAvailable:42,serverKeepAlive:19,responseInformation:26,serverReference:28,topicAlias:35,subscriptionIdentifier:11};L.propertiesCodes={};for(let t in L.properties){let e=L.properties[t];L.propertiesCodes[e]=t}L.propertiesTypes={sessionExpiryInterval:"int32",willDelayInterval:"int32",receiveMaximum:"int16",maximumPacketSize:"int32",topicAliasMaximum:"int16",requestResponseInformation:"byte",requestProblemInformation:"byte",userProperties:"pair",authenticationMethod:"string",authenticationData:"binary",payloadFormatIndicator:"byte",messageExpiryInterval:"int32",contentType:"string",responseTopic:"string",correlationData:"binary",maximumQoS:"int8",retainAvailable:"byte",assignedClientIdentifier:"string",reasonString:"string",wildcardSubscriptionAvailable:"byte",subscriptionIdentifiersAvailable:"byte",sharedSubscriptionAvailable:"byte",serverKeepAlive:"int16",responseInformation:"string",serverReference:"string",topicAlias:"int16",subscriptionIdentifier:"var"};function Ft(t){return[0,1,2].map(e=>[0,1].map(r=>[0,1].map(i=>{let n=ke.alloc(1);return n.writeUInt8(L.codes[t]<<L.CMD_SHIFT|(r?L.DUP_MASK:0)|e<<L.QOS_SHIFT|i,0,!0),n})))}L.PUBLISH_HEADER=Ft("publish");L.SUBSCRIBE_HEADER=Ft("subscribe");L.SUBSCRIBE_OPTIONS_QOS_MASK=3;L.SUBSCRIBE_OPTIONS_NL_MASK=1;L.SUBSCRIBE_OPTIONS_NL_SHIFT=2;L.SUBSCRIBE_OPTIONS_RAP_MASK=1;L.SUBSCRIBE_OPTIONS_RAP_SHIFT=3;L.SUBSCRIBE_OPTIONS_RH_MASK=3;L.SUBSCRIBE_OPTIONS_RH_SHIFT=4;L.SUBSCRIBE_OPTIONS_RH=[0,16,32];L.SUBSCRIBE_OPTIONS_NL=4;L.SUBSCRIBE_OPTIONS_RAP=8;L.SUBSCRIBE_OPTIONS_QOS=[0,1,2];L.UNSUBSCRIBE_HEADER=Ft("unsubscribe");L.ACKS={unsuback:Ft("unsuback"),puback:Ft("puback"),pubcomp:Ft("pubcomp"),pubrel:Ft("pubrel"),pubrec:Ft("pubrec")};L.SUBACK_HEADER=ke.from([L.codes.suback<<L.CMD_SHIFT]);L.VERSION3=ke.from([3]);L.VERSION4=ke.from([4]);L.VERSION5=ke.from([5]);L.VERSION131=ke.from([131]);L.VERSION132=ke.from([132]);L.QOS=[0,1,2].map(t=>ke.from([t]));L.EMPTY={pingreq:ke.from([L.codes.pingreq<<4,0]),pingresp:ke.from([L.codes.pingresp<<4,0]),disconnect:ke.from([L.codes.disconnect<<4,0])};L.MQTT5_PUBACK_PUBREC_CODES={0:"Success",16:"No matching subscribers",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",144:"Topic Name invalid",145:"Packet identifier in use",151:"Quota exceeded",153:"Payload format invalid"};L.MQTT5_PUBREL_PUBCOMP_CODES={0:"Success",146:"Packet Identifier not found"};L.MQTT5_SUBACK_CODES={0:"Granted QoS 0",1:"Granted QoS 1",2:"Granted QoS 2",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use",151:"Quota exceeded",158:"Shared Subscriptions not supported",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"};L.MQTT5_UNSUBACK_CODES={0:"Success",17:"No subscription existed",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use"};L.MQTT5_DISCONNECT_CODES={0:"Normal disconnection",4:"Disconnect with Will Message",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",135:"Not authorized",137:"Server busy",139:"Server shutting down",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"};L.MQTT5_AUTH_CODES={0:"Success",24:"Continue authentication",25:"Re-authenticate"}});var gd=M((aP,pd)=>{_();v();m();var zr=1e3,Kr=zr*60,Gr=Kr*60,br=Gr*24,bm=br*7,wm=br*365.25;pd.exports=function(t,e){e=e||{};var r=typeof t;if(r==="string"&&t.length>0)return _m(t);if(r==="number"&&isFinite(t))return e.long?vm(t):mm(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function _m(t){if(t=String(t),!(t.length>100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),i=(e[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return r*wm;case"weeks":case"week":case"w":return r*bm;case"days":case"day":case"d":return r*br;case"hours":case"hour":case"hrs":case"hr":case"h":return r*Gr;case"minutes":case"minute":case"mins":case"min":case"m":return r*Kr;case"seconds":case"second":case"secs":case"sec":case"s":return r*zr;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function mm(t){var e=Math.abs(t);return e>=br?Math.round(t/br)+"d":e>=Gr?Math.round(t/Gr)+"h":e>=Kr?Math.round(t/Kr)+"m":e>=zr?Math.round(t/zr)+"s":t+"ms"}function vm(t){var e=Math.abs(t);return e>=br?Cn(t,e,br,"day"):e>=Gr?Cn(t,e,Gr,"hour"):e>=Kr?Cn(t,e,Kr,"minute"):e>=zr?Cn(t,e,zr,"second"):t+" ms"}function Cn(t,e,r,i){var n=e>=r*1.5;return Math.round(t/r)+" "+i+(n?"s":"")}});var bd=M((bP,yd)=>{_();v();m();function Em(t){r.debug=r,r.default=r,r.coerce=l,r.disable=o,r.enable=n,r.enabled=s,r.humanize=gd(),r.destroy=c,Object.keys(t).forEach(h=>{r[h]=t[h]}),r.names=[],r.skips=[],r.formatters={};function e(h){let d=0;for(let g=0;g<h.length;g++)d=(d<<5)-d+h.charCodeAt(g),d|=0;return r.colors[Math.abs(d)%r.colors.length]}r.selectColor=e;function r(h){let d,g=null,y,w;function E(...S){if(!E.enabled)return;let I=E,B=Number(new Date),R=B-(d||B);I.diff=R,I.prev=d,I.curr=B,d=B,S[0]=r.coerce(S[0]),typeof S[0]!="string"&&S.unshift("%O");let U=0;S[0]=S[0].replace(/%([a-zA-Z%])/g,(W,K)=>{if(W==="%%")return"%";U++;let z=r.formatters[K];if(typeof z=="function"){let Q=S[U];W=z.call(I,Q),S.splice(U,1),U--}return W}),r.formatArgs.call(I,S),(I.log||r.log).apply(I,S)}return E.namespace=h,E.useColors=r.useColors(),E.color=r.selectColor(h),E.extend=i,E.destroy=r.destroy,Object.defineProperty(E,"enabled",{enumerable:!0,configurable:!1,get:()=>g!==null?g:(y!==r.namespaces&&(y=r.namespaces,w=r.enabled(h)),w),set:S=>{g=S}}),typeof r.init=="function"&&r.init(E),E}function i(h,d){let g=r(this.namespace+(typeof d>"u"?":":d)+h);return g.log=this.log,g}function n(h){r.save(h),r.namespaces=h,r.names=[],r.skips=[];let d,g=(typeof h=="string"?h:"").split(/[\s,]+/),y=g.length;for(d=0;d<y;d++)g[d]&&(h=g[d].replace(/\*/g,".*?"),h[0]==="-"?r.skips.push(new RegExp("^"+h.slice(1)+"$")):r.names.push(new RegExp("^"+h+"$")))}function o(){let h=[...r.names.map(a),...r.skips.map(a).map(d=>"-"+d)].join(",");return r.enable(""),h}function s(h){if(h[h.length-1]==="*")return!0;let d,g;for(d=0,g=r.skips.length;d<g;d++)if(r.skips[d].test(h))return!1;for(d=0,g=r.names.length;d<g;d++)if(r.names[d].test(h))return!0;return!1}function a(h){return h.toString().substring(2,h.toString().length-2).replace(/\.\*\?$/,"*")}function l(h){return h instanceof Error?h.stack||h.message:h}function c(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return r.enable(r.load()),r}yd.exports=Em});var ot=M((xe,Bn)=>{_();v();m();xe.formatArgs=Am;xe.save=Im;xe.load=Tm;xe.useColors=Sm;xe.storage=Rm();xe.destroy=(()=>{let t=!1;return()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})();xe.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function Sm(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function Am(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+Bn.exports.humanize(this.diff),!this.useColors)return;let e="color: "+this.color;t.splice(1,0,e,"color: inherit");let r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(r++,n==="%c"&&(i=r))}),t.splice(i,0,e)}xe.log=console.debug||console.log||(()=>{});function Im(t){try{t?xe.storage.setItem("debug",t):xe.storage.removeItem("debug")}catch{}}function Tm(){let t;try{t=xe.storage.getItem("debug")}catch{}return!t&&typeof C<"u"&&"env"in C&&(t=C.env.DEBUG),t}function Rm(){try{return localStorage}catch{}}Bn.exports=bd()(xe);var{formatters:Cm}=Bn.exports;Cm.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}});var md=M((UP,_d)=>{_();v();m();var Bm=fd(),{EventEmitter:Pm}=(sr(),X(nr)),wd=hd(),V=$o(),D=ot()("mqtt-packet:parser"),Ho=class t extends Pm{constructor(){super(),this.parser=this.constructor.parser}static parser(e){return this instanceof t?(this.settings=e||{},this._states=["_parseHeader","_parseLength","_parsePayload","_newPacket"],this._resetState(),this):new t().parser(e)}_resetState(){D("_resetState: resetting packet, error, _list, and _stateCounter"),this.packet=new wd,this.error=null,this._list=Bm(),this._stateCounter=0}parse(e){for(this.error&&this._resetState(),this._list.append(e),D("parse: current state: %s",this._states[this._stateCounter]);(this.packet.length!==-1||this._list.length>0)&&this[this._states[this._stateCounter]]()&&!this.error;)this._stateCounter++,D("parse: state complete. _stateCounter is now: %d",this._stateCounter),D("parse: packet.length: %d, buffer list length: %d",this.packet.length,this._list.length),this._stateCounter>=this._states.length&&(this._stateCounter=0);return D("parse: exited while loop. packet: %d, buffer list length: %d",this.packet.length,this._list.length),this._list.length}_parseHeader(){let e=this._list.readUInt8(0),r=e>>V.CMD_SHIFT;this.packet.cmd=V.types[r];let i=e&15,n=V.requiredHeaderFlags[r];return n!=null&&i!==n?this._emitError(new Error(V.requiredHeaderFlagsErrors[r])):(this.packet.retain=(e&V.RETAIN_MASK)!==0,this.packet.qos=e>>V.QOS_SHIFT&V.QOS_MASK,this.packet.qos>2?this._emitError(new Error("Packet must not have both QoS bits set to 1")):(this.packet.dup=(e&V.DUP_MASK)!==0,D("_parseHeader: packet: %o",this.packet),this._list.consume(1),!0))}_parseLength(){let e=this._parseVarByteNum(!0);return e&&(this.packet.length=e.value,this._list.consume(e.bytes)),D("_parseLength %d",e.value),!!e}_parsePayload(){D("_parsePayload: payload %O",this._list);let e=!1;if(this.packet.length===0||this._list.length>=this.packet.length){switch(this._pos=0,this.packet.cmd){case"connect":this._parseConnect();break;case"connack":this._parseConnack();break;case"publish":this._parsePublish();break;case"puback":case"pubrec":case"pubrel":case"pubcomp":this._parseConfirmation();break;case"subscribe":this._parseSubscribe();break;case"suback":this._parseSuback();break;case"unsubscribe":this._parseUnsubscribe();break;case"unsuback":this._parseUnsuback();break;case"pingreq":case"pingresp":break;case"disconnect":this._parseDisconnect();break;case"auth":this._parseAuth();break;default:this._emitError(new Error("Not supported"))}e=!0}return D("_parsePayload complete result: %s",e),e}_parseConnect(){D("_parseConnect");let e,r,i,n,o={},s=this.packet,a=this._parseString();if(a===null)return this._emitError(new Error("Cannot parse protocolId"));if(a!=="MQTT"&&a!=="MQIsdp")return this._emitError(new Error("Invalid protocolId"));if(s.protocolId=a,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(s.protocolVersion=this._list.readUInt8(this._pos),s.protocolVersion>=128&&(s.bridgeMode=!0,s.protocolVersion=s.protocolVersion-128),s.protocolVersion!==3&&s.protocolVersion!==4&&s.protocolVersion!==5)return this._emitError(new Error("Invalid protocol version"));if(this._pos++,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(this._list.readUInt8(this._pos)&1)return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));o.username=this._list.readUInt8(this._pos)&V.USERNAME_MASK,o.password=this._list.readUInt8(this._pos)&V.PASSWORD_MASK,o.will=this._list.readUInt8(this._pos)&V.WILL_FLAG_MASK;let l=!!(this._list.readUInt8(this._pos)&V.WILL_RETAIN_MASK),c=(this._list.readUInt8(this._pos)&V.WILL_QOS_MASK)>>V.WILL_QOS_SHIFT;if(o.will)s.will={},s.will.retain=l,s.will.qos=c;else{if(l)return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));if(c)return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"))}if(s.clean=(this._list.readUInt8(this._pos)&V.CLEAN_SESSION_MASK)!==0,this._pos++,s.keepalive=this._parseNum(),s.keepalive===-1)return this._emitError(new Error("Packet too short"));if(s.protocolVersion===5){let d=this._parseProperties();Object.getOwnPropertyNames(d).length&&(s.properties=d)}let h=this._parseString();if(h===null)return this._emitError(new Error("Packet too short"));if(s.clientId=h,D("_parseConnect: packet.clientId: %s",s.clientId),o.will){if(s.protocolVersion===5){let d=this._parseProperties();Object.getOwnPropertyNames(d).length&&(s.will.properties=d)}if(e=this._parseString(),e===null)return this._emitError(new Error("Cannot parse will topic"));if(s.will.topic=e,D("_parseConnect: packet.will.topic: %s",s.will.topic),r=this._parseBuffer(),r===null)return this._emitError(new Error("Cannot parse will payload"));s.will.payload=r,D("_parseConnect: packet.will.paylaod: %s",s.will.payload)}if(o.username){if(n=this._parseString(),n===null)return this._emitError(new Error("Cannot parse username"));s.username=n,D("_parseConnect: packet.username: %s",s.username)}if(o.password){if(i=this._parseBuffer(),i===null)return this._emitError(new Error("Cannot parse password"));s.password=i}return this.settings=s,D("_parseConnect: complete"),s}_parseConnack(){D("_parseConnack");let e=this.packet;if(this._list.length<1)return null;let r=this._list.readUInt8(this._pos++);if(r>1)return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));if(e.sessionPresent=!!(r&V.SESSIONPRESENT_MASK),this.settings.protocolVersion===5)this._list.length>=2?e.reasonCode=this._list.readUInt8(this._pos++):e.reasonCode=0;else{if(this._list.length<2)return null;e.returnCode=this._list.readUInt8(this._pos++)}if(e.returnCode===-1||e.reasonCode===-1)return this._emitError(new Error("Cannot parse return code"));if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(e.properties=i)}D("_parseConnack: complete")}_parsePublish(){D("_parsePublish");let e=this.packet;if(e.topic=this._parseString(),e.topic===null)return this._emitError(new Error("Cannot parse topic"));if(!(e.qos>0&&!this._parseMessageId())){if(this.settings.protocolVersion===5){let r=this._parseProperties();Object.getOwnPropertyNames(r).length&&(e.properties=r)}e.payload=this._list.slice(this._pos,e.length),D("_parsePublish: payload from buffer list: %o",e.payload)}}_parseSubscribe(){D("_parseSubscribe");let e=this.packet,r,i,n,o,s,a,l;if(e.subscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let c=this._parseProperties();Object.getOwnPropertyNames(c).length&&(e.properties=c)}if(e.length<=0)return this._emitError(new Error("Malformed subscribe, no payload specified"));for(;this._pos<e.length;){if(r=this._parseString(),r===null)return this._emitError(new Error("Cannot parse topic"));if(this._pos>=e.length)return this._emitError(new Error("Malformed Subscribe Payload"));if(i=this._parseByte(),this.settings.protocolVersion===5){if(i&192)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))}else if(i&252)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));if(n=i&V.SUBSCRIBE_OPTIONS_QOS_MASK,n>2)return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));if(a=(i>>V.SUBSCRIBE_OPTIONS_NL_SHIFT&V.SUBSCRIBE_OPTIONS_NL_MASK)!==0,s=(i>>V.SUBSCRIBE_OPTIONS_RAP_SHIFT&V.SUBSCRIBE_OPTIONS_RAP_MASK)!==0,o=i>>V.SUBSCRIBE_OPTIONS_RH_SHIFT&V.SUBSCRIBE_OPTIONS_RH_MASK,o>2)return this._emitError(new Error("Invalid retain handling, must be <= 2"));l={topic:r,qos:n},this.settings.protocolVersion===5?(l.nl=a,l.rap=s,l.rh=o):this.settings.bridgeMode&&(l.rh=0,l.rap=!0,l.nl=!0),D("_parseSubscribe: push subscription `%s` to subscription",l),e.subscriptions.push(l)}}}_parseSuback(){D("_parseSuback");let e=this.packet;if(this.packet.granted=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let r=this._parseProperties();Object.getOwnPropertyNames(r).length&&(e.properties=r)}if(e.length<=0)return this._emitError(new Error("Malformed suback, no payload specified"));for(;this._pos<this.packet.length;){let r=this._list.readUInt8(this._pos++);if(this.settings.protocolVersion===5){if(!V.MQTT5_SUBACK_CODES[r])return this._emitError(new Error("Invalid suback code"))}else if(r>2&&r!==128)return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));this.packet.granted.push(r)}}}_parseUnsubscribe(){D("_parseUnsubscribe");let e=this.packet;if(e.unsubscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let r=this._parseProperties();Object.getOwnPropertyNames(r).length&&(e.properties=r)}if(e.length<=0)return this._emitError(new Error("Malformed unsubscribe, no payload specified"));for(;this._pos<e.length;){let r=this._parseString();if(r===null)return this._emitError(new Error("Cannot parse topic"));D("_parseUnsubscribe: push topic `%s` to unsubscriptions",r),e.unsubscriptions.push(r)}}}_parseUnsuback(){D("_parseUnsuback");let e=this.packet;if(!this._parseMessageId())return this._emitError(new Error("Cannot parse messageId"));if((this.settings.protocolVersion===3||this.settings.protocolVersion===4)&&e.length!==2)return this._emitError(new Error("Malformed unsuback, payload length must be 2"));if(e.length<=0)return this._emitError(new Error("Malformed unsuback, no payload specified"));if(this.settings.protocolVersion===5){let r=this._parseProperties();for(Object.getOwnPropertyNames(r).length&&(e.properties=r),e.granted=[];this._pos<this.packet.length;){let i=this._list.readUInt8(this._pos++);if(!V.MQTT5_UNSUBACK_CODES[i])return this._emitError(new Error("Invalid unsuback code"));this.packet.granted.push(i)}}}_parseConfirmation(){D("_parseConfirmation: packet.cmd: `%s`",this.packet.cmd);let e=this.packet;if(this._parseMessageId(),this.settings.protocolVersion===5){if(e.length>2){switch(e.reasonCode=this._parseByte(),this.packet.cmd){case"puback":case"pubrec":if(!V.MQTT5_PUBACK_PUBREC_CODES[e.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break;case"pubrel":case"pubcomp":if(!V.MQTT5_PUBREL_PUBCOMP_CODES[e.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break}D("_parseConfirmation: packet.reasonCode `%d`",e.reasonCode)}else e.reasonCode=0;if(e.length>3){let r=this._parseProperties();Object.getOwnPropertyNames(r).length&&(e.properties=r)}}return!0}_parseDisconnect(){let e=this.packet;if(D("_parseDisconnect"),this.settings.protocolVersion===5){this._list.length>0?(e.reasonCode=this._parseByte(),V.MQTT5_DISCONNECT_CODES[e.reasonCode]||this._emitError(new Error("Invalid disconnect reason code"))):e.reasonCode=0;let r=this._parseProperties();Object.getOwnPropertyNames(r).length&&(e.properties=r)}return D("_parseDisconnect result: true"),!0}_parseAuth(){D("_parseAuth");let e=this.packet;if(this.settings.protocolVersion!==5)return this._emitError(new Error("Not supported auth packet for this version MQTT"));if(e.reasonCode=this._parseByte(),!V.MQTT5_AUTH_CODES[e.reasonCode])return this._emitError(new Error("Invalid auth reason code"));let r=this._parseProperties();return Object.getOwnPropertyNames(r).length&&(e.properties=r),D("_parseAuth: result: true"),!0}_parseMessageId(){let e=this.packet;return e.messageId=this._parseNum(),e.messageId===null?(this._emitError(new Error("Cannot parse messageId")),!1):(D("_parseMessageId: packet.messageId %d",e.messageId),!0)}_parseString(e){let r=this._parseNum(),i=r+this._pos;if(r===-1||i>this._list.length||i>this.packet.length)return null;let n=this._list.toString("utf8",this._pos,i);return this._pos+=r,D("_parseString: result: %s",n),n}_parseStringPair(){return D("_parseStringPair"),{name:this._parseString(),value:this._parseString()}}_parseBuffer(){let e=this._parseNum(),r=e+this._pos;if(e===-1||r>this._list.length||r>this.packet.length)return null;let i=this._list.slice(this._pos,r);return this._pos+=e,D("_parseBuffer: result: %o",i),i}_parseNum(){if(this._list.length-this._pos<2)return-1;let e=this._list.readUInt16BE(this._pos);return this._pos+=2,D("_parseNum: result: %s",e),e}_parse4ByteNum(){if(this._list.length-this._pos<4)return-1;let e=this._list.readUInt32BE(this._pos);return this._pos+=4,D("_parse4ByteNum: result: %s",e),e}_parseVarByteNum(e){D("_parseVarByteNum");let r=4,i=0,n=1,o=0,s=!1,a,l=this._pos?this._pos:0;for(;i<r&&l+i<this._list.length;){if(a=this._list.readUInt8(l+i++),o+=n*(a&V.VARBYTEINT_MASK),n*=128,!(a&V.VARBYTEINT_FIN_MASK)){s=!0;break}if(this._list.length<=i)break}return!s&&i===r&&this._list.length>=i&&this._emitError(new Error("Invalid variable byte integer")),l&&(this._pos+=i),s?e?s={bytes:i,value:o}:s=o:s=!1,D("_parseVarByteNum: result: %o",s),s}_parseByte(){let e;return this._pos<this._list.length&&(e=this._list.readUInt8(this._pos),this._pos++),D("_parseByte: result: %o",e),e}_parseByType(e){switch(D("_parseByType: type: %s",e),e){case"byte":return this._parseByte()!==0;case"int8":return this._parseByte();case"int16":return this._parseNum();case"int32":return this._parse4ByteNum();case"var":return this._parseVarByteNum();case"string":return this._parseString();case"pair":return this._parseStringPair();case"binary":return this._parseBuffer()}}_parseProperties(){D("_parseProperties");let e=this._parseVarByteNum(),i=this._pos+e,n={};for(;this._pos<i;){let o=this._parseByte();if(!o)return this._emitError(new Error("Cannot parse property code type")),!1;let s=V.propertiesCodes[o];if(!s)return this._emitError(new Error("Unknown property")),!1;if(s==="userProperties"){n[s]||(n[s]=Object.create(null));let a=this._parseByType(V.propertiesTypes[s]);if(n[s][a.name])if(Array.isArray(n[s][a.name]))n[s][a.name].push(a.value);else{let l=n[s][a.name];n[s][a.name]=[l],n[s][a.name].push(a.value)}else n[s][a.name]=a.value;continue}n[s]?Array.isArray(n[s])?n[s].push(this._parseByType(V.propertiesTypes[s])):(n[s]=[n[s]],n[s].push(this._parseByType(V.propertiesTypes[s]))):n[s]=this._parseByType(V.propertiesTypes[s])}return n}_newPacket(){return D("_newPacket"),this.packet&&(this._list.consume(this.packet.length),D("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d",this.packet.cmd,this.packet.payload,this.packet.length),this.emit("packet",this.packet)),D("_newPacket: new packet"),this.packet=new wd,this._pos=0,!0}_emitError(e){D("_emitError",e),this.error=e,this.emit("error",e)}};_d.exports=Ho});var Ad=M((zP,Sd)=>{_();v();m();var{Buffer:Si}=(be(),X(me)),km=65536,vd={},Om=Si.isBuffer(Si.from([1,2]).subarray(0,1));function Ed(t){let e=Si.allocUnsafe(2);return e.writeUInt8(t>>8,0),e.writeUInt8(t&255,0+1),e}function xm(){for(let t=0;t<km;t++)vd[t]=Ed(t)}function Mm(t){let r=0,i=0,n=Si.allocUnsafe(4);do r=t%128|0,t=t/128|0,t>0&&(r=r|128),n.writeUInt8(r,i++);while(t>0&&i<4);return t>0&&(i=0),Om?n.subarray(0,i):n.slice(0,i)}function Lm(t){let e=Si.allocUnsafe(4);return e.writeUInt32BE(t,0),e}Sd.exports={cache:vd,generateCache:xm,generateNumber:Ed,genBufVariableByteInt:Mm,generate4ByteBuffer:Lm}});var Id=M((rk,Vo)=>{"use strict";_();v();m();typeof C>"u"||!C.version||C.version.indexOf("v0.")===0||C.version.indexOf("v1.")===0&&C.version.indexOf("v1.8.")!==0?Vo.exports={nextTick:Um}:Vo.exports=C;function Um(t,e,r,i){if(typeof t!="function")throw new TypeError('"callback" argument must be a function');var n=arguments.length,o,s;switch(n){case 0:case 1:return C.nextTick(t);case 2:return C.nextTick(function(){t.call(null,e)});case 3:return C.nextTick(function(){t.call(null,e,r)});case 4:return C.nextTick(function(){t.call(null,e,r,i)});default:for(o=new Array(n-1),s=0;s<o.length;)o[s++]=arguments[s];return C.nextTick(function(){t.apply(null,o)})}}});var Go=M((hk,xd)=>{_();v();m();var j=$o(),{Buffer:q}=(be(),X(me)),Nm=q.allocUnsafe(0),qm=q.from([0]),Ai=Ad(),Dm=Id().nextTick,qe=ot()("mqtt-packet:writeToStream"),Pn=Ai.cache,jm=Ai.generateNumber,Fm=Ai.generateCache,zo=Ai.genBufVariableByteInt,Wm=Ai.generate4ByteBuffer,Te=Ko,kn=!0;function kd(t,e,r){switch(qe("generate called"),e.cork&&(e.cork(),Dm($m,e)),kn&&(kn=!1,Fm()),qe("generate: packet.cmd: %s",t.cmd),t.cmd){case"connect":return Hm(t,e,r);case"connack":return Vm(t,e,r);case"publish":return zm(t,e,r);case"puback":case"pubrec":case"pubrel":case"pubcomp":return Km(t,e,r);case"subscribe":return Gm(t,e,r);case"suback":return Qm(t,e,r);case"unsubscribe":return Ym(t,e,r);case"unsuback":return Jm(t,e,r);case"pingreq":case"pingresp":return Xm(t,e,r);case"disconnect":return Zm(t,e,r);case"auth":return e1(t,e,r);default:return e.destroy(new Error("Unknown command")),!1}}Object.defineProperty(kd,"cacheNumbers",{get(){return Te===Ko},set(t){t?((!Pn||Object.keys(Pn).length===0)&&(kn=!0),Te=Ko):(kn=!1,Te=t1)}});function $m(t){t.uncork()}function Hm(t,e,r){let i=t||{},n=i.protocolId||"MQTT",o=i.protocolVersion||4,s=i.will,a=i.clean,l=i.keepalive||0,c=i.clientId||"",h=i.username,d=i.password,g=i.properties;a===void 0&&(a=!0);let y=0;if(!n||typeof n!="string"&&!q.isBuffer(n))return e.destroy(new Error("Invalid protocolId")),!1;if(y+=n.length+2,o!==3&&o!==4&&o!==5)return e.destroy(new Error("Invalid protocol version")),!1;if(y+=1,(typeof c=="string"||q.isBuffer(c))&&(c||o>=4)&&(c||a))y+=q.byteLength(c)+2;else{if(o<4)return e.destroy(new Error("clientId must be supplied before 3.1.1")),!1;if(a*1===0)return e.destroy(new Error("clientId must be given if cleanSession set to 0")),!1}if(typeof l!="number"||l<0||l>65535||l%1!==0)return e.destroy(new Error("Invalid keepalive")),!1;y+=2,y+=1;let w,E;if(o===5){if(w=Wt(e,g),!w)return!1;y+=w.length}if(s){if(typeof s!="object")return e.destroy(new Error("Invalid will")),!1;if(!s.topic||typeof s.topic!="string")return e.destroy(new Error("Invalid will topic")),!1;if(y+=q.byteLength(s.topic)+2,y+=2,s.payload)if(s.payload.length>=0)typeof s.payload=="string"?y+=q.byteLength(s.payload):y+=s.payload.length;else return e.destroy(new Error("Invalid will payload")),!1;if(E={},o===5){if(E=Wt(e,s.properties),!E)return!1;y+=E.length}}let S=!1;if(h!=null)if(Pd(h))S=!0,y+=q.byteLength(h)+2;else return e.destroy(new Error("Invalid username")),!1;if(d!=null){if(!S)return e.destroy(new Error("Username is required to use password")),!1;if(Pd(d))y+=Od(d)+2;else return e.destroy(new Error("Invalid password")),!1}e.write(j.CONNECT_HEADER),De(e,y),Qr(e,n),i.bridgeMode&&(o+=128),e.write(o===131?j.VERSION131:o===132?j.VERSION132:o===4?j.VERSION4:o===5?j.VERSION5:j.VERSION3);let I=0;return I|=h!=null?j.USERNAME_MASK:0,I|=d!=null?j.PASSWORD_MASK:0,I|=s&&s.retain?j.WILL_RETAIN_MASK:0,I|=s&&s.qos?s.qos<<j.WILL_QOS_SHIFT:0,I|=s?j.WILL_FLAG_MASK:0,I|=a?j.CLEAN_SESSION_MASK:0,e.write(q.from([I])),Te(e,l),o===5&&w.write(),Qr(e,c),s&&(o===5&&E.write(),wr(e,s.topic),Qr(e,s.payload)),h!=null&&Qr(e,h),d!=null&&Qr(e,d),!0}function Vm(t,e,r){let i=r?r.protocolVersion:4,n=t||{},o=i===5?n.reasonCode:n.returnCode,s=n.properties,a=2;if(typeof o!="number")return e.destroy(new Error("Invalid return code")),!1;let l=null;if(i===5){if(l=Wt(e,s),!l)return!1;a+=l.length}return e.write(j.CONNACK_HEADER),De(e,a),e.write(n.sessionPresent?j.SESSIONPRESENT_HEADER:qm),e.write(q.from([o])),l?.write(),!0}function zm(t,e,r){qe("publish: packet: %o",t);let i=r?r.protocolVersion:4,n=t||{},o=n.qos||0,s=n.retain?j.RETAIN_MASK:0,a=n.topic,l=n.payload||Nm,c=n.messageId,h=n.properties,d=0;if(typeof a=="string")d+=q.byteLength(a)+2;else if(q.isBuffer(a))d+=a.length+2;else return e.destroy(new Error("Invalid topic")),!1;if(q.isBuffer(l)?d+=l.length:d+=q.byteLength(l),o&&typeof c!="number")return e.destroy(new Error("Invalid messageId")),!1;o&&(d+=2);let g=null;if(i===5){if(g=Wt(e,h),!g)return!1;d+=g.length}return e.write(j.PUBLISH_HEADER[o][n.dup?1:0][s?1:0]),De(e,d),Te(e,Od(a)),e.write(a),o>0&&Te(e,c),g?.write(),qe("publish: payload: %o",l),e.write(l)}function Km(t,e,r){let i=r?r.protocolVersion:4,n=t||{},o=n.cmd||"puback",s=n.messageId,a=n.dup&&o==="pubrel"?j.DUP_MASK:0,l=0,c=n.reasonCode,h=n.properties,d=i===5?3:2;if(o==="pubrel"&&(l=1),typeof s!="number")return e.destroy(new Error("Invalid messageId")),!1;let g=null;if(i===5&&typeof h=="object"){if(g=Ii(e,h,r,d),!g)return!1;d+=g.length}return e.write(j.ACKS[o][l][a][0]),d===3&&(d+=c!==0?1:-1),De(e,d),Te(e,s),i===5&&d!==2&&e.write(q.from([c])),g!==null?g.write():d===4&&e.write(q.from([0])),!0}function Gm(t,e,r){qe("subscribe: packet: ");let i=r?r.protocolVersion:4,n=t||{},o=n.dup?j.DUP_MASK:0,s=n.messageId,a=n.subscriptions,l=n.properties,c=0;if(typeof s!="number")return e.destroy(new Error("Invalid messageId")),!1;c+=2;let h=null;if(i===5){if(h=Wt(e,l),!h)return!1;c+=h.length}if(typeof a=="object"&&a.length)for(let g=0;g<a.length;g+=1){let y=a[g].topic,w=a[g].qos;if(typeof y!="string")return e.destroy(new Error("Invalid subscriptions - invalid topic")),!1;if(typeof w!="number")return e.destroy(new Error("Invalid subscriptions - invalid qos")),!1;if(i===5){if(typeof(a[g].nl||!1)!="boolean")return e.destroy(new Error("Invalid subscriptions - invalid No Local")),!1;if(typeof(a[g].rap||!1)!="boolean")return e.destroy(new Error("Invalid subscriptions - invalid Retain as Published")),!1;let I=a[g].rh||0;if(typeof I!="number"||I>2)return e.destroy(new Error("Invalid subscriptions - invalid Retain Handling")),!1}c+=q.byteLength(y)+2+1}else return e.destroy(new Error("Invalid subscriptions")),!1;qe("subscribe: writing to stream: %o",j.SUBSCRIBE_HEADER),e.write(j.SUBSCRIBE_HEADER[1][o?1:0][0]),De(e,c),Te(e,s),h!==null&&h.write();let d=!0;for(let g of a){let y=g.topic,w=g.qos,E=+g.nl,S=+g.rap,I=g.rh,B;wr(e,y),B=j.SUBSCRIBE_OPTIONS_QOS[w],i===5&&(B|=E?j.SUBSCRIBE_OPTIONS_NL:0,B|=S?j.SUBSCRIBE_OPTIONS_RAP:0,B|=I?j.SUBSCRIBE_OPTIONS_RH[I]:0),d=e.write(q.from([B]))}return d}function Qm(t,e,r){let i=r?r.protocolVersion:4,n=t||{},o=n.messageId,s=n.granted,a=n.properties,l=0;if(typeof o!="number")return e.destroy(new Error("Invalid messageId")),!1;if(l+=2,typeof s=="object"&&s.length)for(let h=0;h<s.length;h+=1){if(typeof s[h]!="number")return e.destroy(new Error("Invalid qos vector")),!1;l+=1}else return e.destroy(new Error("Invalid qos vector")),!1;let c=null;if(i===5){if(c=Ii(e,a,r,l),!c)return!1;l+=c.length}return e.write(j.SUBACK_HEADER),De(e,l),Te(e,o),c!==null&&c.write(),e.write(q.from(s))}function Ym(t,e,r){let i=r?r.protocolVersion:4,n=t||{},o=n.messageId,s=n.dup?j.DUP_MASK:0,a=n.unsubscriptions,l=n.properties,c=0;if(typeof o!="number")return e.destroy(new Error("Invalid messageId")),!1;if(c+=2,typeof a=="object"&&a.length)for(let g=0;g<a.length;g+=1){if(typeof a[g]!="string")return e.destroy(new Error("Invalid unsubscriptions")),!1;c+=q.byteLength(a[g])+2}else return e.destroy(new Error("Invalid unsubscriptions")),!1;let h=null;if(i===5){if(h=Wt(e,l),!h)return!1;c+=h.length}e.write(j.UNSUBSCRIBE_HEADER[1][s?1:0][0]),De(e,c),Te(e,o),h!==null&&h.write();let d=!0;for(let g=0;g<a.length;g++)d=wr(e,a[g]);return d}function Jm(t,e,r){let i=r?r.protocolVersion:4,n=t||{},o=n.messageId,s=n.dup?j.DUP_MASK:0,a=n.granted,l=n.properties,c=n.cmd,h=0,d=2;if(typeof o!="number")return e.destroy(new Error("Invalid messageId")),!1;if(i===5)if(typeof a=="object"&&a.length)for(let y=0;y<a.length;y+=1){if(typeof a[y]!="number")return e.destroy(new Error("Invalid qos vector")),!1;d+=1}else return e.destroy(new Error("Invalid qos vector")),!1;let g=null;if(i===5){if(g=Ii(e,l,r,d),!g)return!1;d+=g.length}return e.write(j.ACKS[c][h][s][0]),De(e,d),Te(e,o),g!==null&&g.write(),i===5&&e.write(q.from(a)),!0}function Xm(t,e,r){return e.write(j.EMPTY[t.cmd])}function Zm(t,e,r){let i=r?r.protocolVersion:4,n=t||{},o=n.reasonCode,s=n.properties,a=i===5?1:0,l=null;if(i===5){if(l=Ii(e,s,r,a),!l)return!1;a+=l.length}return e.write(q.from([j.codes.disconnect<<4])),De(e,a),i===5&&e.write(q.from([o])),l!==null&&l.write(),!0}function e1(t,e,r){let i=r?r.protocolVersion:4,n=t||{},o=n.reasonCode,s=n.properties,a=i===5?1:0;i!==5&&e.destroy(new Error("Invalid mqtt version for auth packet"));let l=Ii(e,s,r,a);return l?(a+=l.length,e.write(q.from([j.codes.auth<<4])),De(e,a),e.write(q.from([o])),l!==null&&l.write(),!0):!1}var Td={};function De(t,e){if(e>j.VARBYTEINT_MAX)return t.destroy(new Error(`Invalid variable byte integer: ${e}`)),!1;let r=Td[e];return r||(r=zo(e),e<16384&&(Td[e]=r)),qe("writeVarByteInt: writing to stream: %o",r),t.write(r)}function wr(t,e){let r=q.byteLength(e);return Te(t,r),qe("writeString: %s",e),t.write(e,"utf8")}function Rd(t,e,r){wr(t,e),wr(t,r)}function Ko(t,e){return qe("writeNumberCached: number: %d",e),qe("writeNumberCached: %o",Pn[e]),t.write(Pn[e])}function t1(t,e){let r=jm(e);return qe("writeNumberGenerated: %o",r),t.write(r)}function r1(t,e){let r=Wm(e);return qe("write4ByteNumber: %o",r),t.write(r)}function Qr(t,e){typeof e=="string"?wr(t,e):e?(Te(t,e.length),t.write(e)):Te(t,0)}function Wt(t,e){if(typeof e!="object"||e.length!=null)return{length:1,write(){Bd(t,{},0)}};let r=0;function i(o,s){let a=j.propertiesTypes[o],l=0;switch(a){case"byte":{if(typeof s!="boolean")return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=1+1;break}case"int8":{if(typeof s!="number"||s<0||s>255)return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=1+1;break}case"binary":{if(s&&s===null)return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=1+q.byteLength(s)+2;break}case"int16":{if(typeof s!="number"||s<0||s>65535)return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=1+2;break}case"int32":{if(typeof s!="number"||s<0||s>4294967295)return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=1+4;break}case"var":{if(typeof s!="number"||s<0||s>268435455)return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=1+q.byteLength(zo(s));break}case"string":{if(typeof s!="string")return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=1+2+q.byteLength(s.toString());break}case"pair":{if(typeof s!="object")return t.destroy(new Error(`Invalid ${o}: ${s}`)),!1;l+=Object.getOwnPropertyNames(s).reduce((c,h)=>{let d=s[h];return Array.isArray(d)?c+=d.reduce((g,y)=>(g+=1+2+q.byteLength(h.toString())+2+q.byteLength(y.toString()),g),0):c+=1+2+q.byteLength(h.toString())+2+q.byteLength(s[h].toString()),c},0);break}default:return t.destroy(new Error(`Invalid property ${o}: ${s}`)),!1}return l}if(e)for(let o in e){let s=0,a=0,l=e[o];if(Array.isArray(l))for(let c=0;c<l.length;c++){if(a=i(o,l[c]),!a)return!1;s+=a}else{if(a=i(o,l),!a)return!1;s=a}if(!s)return!1;r+=s}return{length:q.byteLength(zo(r))+r,write(){Bd(t,e,r)}}}function Ii(t,e,r,i){let n=["reasonString","userProperties"],o=r&&r.properties&&r.properties.maximumPacketSize?r.properties.maximumPacketSize:0,s=Wt(t,e);if(o)for(;i+s.length>o;){let a=n.shift();if(a&&e[a])delete e[a],s=Wt(t,e);else return!1}return s}function Cd(t,e,r){switch(j.propertiesTypes[e]){case"byte":{t.write(q.from([j.properties[e]])),t.write(q.from([+r]));break}case"int8":{t.write(q.from([j.properties[e]])),t.write(q.from([r]));break}case"binary":{t.write(q.from([j.properties[e]])),Qr(t,r);break}case"int16":{t.write(q.from([j.properties[e]])),Te(t,r);break}case"int32":{t.write(q.from([j.properties[e]])),r1(t,r);break}case"var":{t.write(q.from([j.properties[e]])),De(t,r);break}case"string":{t.write(q.from([j.properties[e]])),wr(t,r);break}case"pair":{Object.getOwnPropertyNames(r).forEach(n=>{let o=r[n];Array.isArray(o)?o.forEach(s=>{t.write(q.from([j.properties[e]])),Rd(t,n.toString(),s.toString())}):(t.write(q.from([j.properties[e]])),Rd(t,n.toString(),o.toString()))});break}default:return t.destroy(new Error(`Invalid property ${e} value: ${r}`)),!1}}function Bd(t,e,r){De(t,r);for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==null){let n=e[i];if(Array.isArray(n))for(let o=0;o<n.length;o++)Cd(t,i,n[o]);else Cd(t,i,n)}}function Od(t){return t?t instanceof q?t.length:q.byteLength(t):0}function Pd(t){return typeof t=="string"||t instanceof q}xd.exports=kd});var Ud=M((Ek,Ld)=>{_();v();m();var i1=Go(),{EventEmitter:n1}=(sr(),X(nr)),{Buffer:Md}=(be(),X(me));function s1(t,e){let r=new Qo;return i1(t,r,e),r.concat()}var Qo=class extends n1{constructor(){super(),this._array=new Array(20),this._i=0}write(e){return this._array[this._i++]=e,!0}concat(){let e=0,r=new Array(this._array.length),i=this._array,n=0,o;for(o=0;o<i.length&&i[o]!==void 0;o++)typeof i[o]!="string"?r[o]=i[o].length:r[o]=Md.byteLength(i[o]),e+=r[o];let s=Md.allocUnsafe(e);for(o=0;o<i.length&&i[o]!==void 0;o++)typeof i[o]!="string"?(i[o].copy(s,n),n+=r[o]):(s.write(i[o],n),n+=r[o]);return s}destroy(e){e&&this.emit("error",e)}};Ld.exports=s1});var Nd=M(On=>{_();v();m();On.parser=md().parser;On.generate=Ud();On.writeToStream=Go()});var Xo=M(Jo=>{"use strict";_();v();m();Object.defineProperty(Jo,"__esModule",{value:!0});var Yo=class{constructor(){this.nextId=Math.max(1,Math.floor(Math.random()*65535))}allocate(){let e=this.nextId++;return this.nextId===65536&&(this.nextId=1),e}getLastAllocated(){return this.nextId===1?65535:this.nextId-1}register(e){return!0}deallocate(e){}clear(){}};Jo.default=Yo});var Dd=M((Xk,qd)=>{"use strict";_();v();m();qd.exports=o1;function Yr(t){return t instanceof x?x.from(t):new t.constructor(t.buffer.slice(),t.byteOffset,t.length)}function o1(t){if(t=t||{},t.circles)return a1(t);return t.proto?i:r;function e(n,o){for(var s=Object.keys(n),a=new Array(s.length),l=0;l<s.length;l++){var c=s[l],h=n[c];typeof h!="object"||h===null?a[c]=h:h instanceof Date?a[c]=new Date(h):ArrayBuffer.isView(h)?a[c]=Yr(h):a[c]=o(h)}return a}function r(n){if(typeof n!="object"||n===null)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return e(n,r);if(n instanceof Map)return new Map(e(Array.from(n),r));if(n instanceof Set)return new Set(e(Array.from(n),r));var o={};for(var s in n)if(Object.hasOwnProperty.call(n,s)!==!1){var a=n[s];typeof a!="object"||a===null?o[s]=a:a instanceof Date?o[s]=new Date(a):a instanceof Map?o[s]=new Map(e(Array.from(a),r)):a instanceof Set?o[s]=new Set(e(Array.from(a),r)):ArrayBuffer.isView(a)?o[s]=Yr(a):o[s]=r(a)}return o}function i(n){if(typeof n!="object"||n===null)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return e(n,i);if(n instanceof Map)return new Map(e(Array.from(n),i));if(n instanceof Set)return new Set(e(Array.from(n),i));var o={};for(var s in n){var a=n[s];typeof a!="object"||a===null?o[s]=a:a instanceof Date?o[s]=new Date(a):a instanceof Map?o[s]=new Map(e(Array.from(a),i)):a instanceof Set?o[s]=new Set(e(Array.from(a),i)):ArrayBuffer.isView(a)?o[s]=Yr(a):o[s]=i(a)}return o}}function a1(t){var e=[],r=[];return t.proto?o:n;function i(s,a){for(var l=Object.keys(s),c=new Array(l.length),h=0;h<l.length;h++){var d=l[h],g=s[d];if(typeof g!="object"||g===null)c[d]=g;else if(g instanceof Date)c[d]=new Date(g);else if(ArrayBuffer.isView(g))c[d]=Yr(g);else{var y=e.indexOf(g);y!==-1?c[d]=r[y]:c[d]=a(g)}}return c}function n(s){if(typeof s!="object"||s===null)return s;if(s instanceof Date)return new Date(s);if(Array.isArray(s))return i(s,n);if(s instanceof Map)return new Map(i(Array.from(s),n));if(s instanceof Set)return new Set(i(Array.from(s),n));var a={};e.push(s),r.push(a);for(var l in s)if(Object.hasOwnProperty.call(s,l)!==!1){var c=s[l];if(typeof c!="object"||c===null)a[l]=c;else if(c instanceof Date)a[l]=new Date(c);else if(c instanceof Map)a[l]=new Map(i(Array.from(c),n));else if(c instanceof Set)a[l]=new Set(i(Array.from(c),n));else if(ArrayBuffer.isView(c))a[l]=Yr(c);else{var h=e.indexOf(c);h!==-1?a[l]=r[h]:a[l]=n(c)}}return e.pop(),r.pop(),a}function o(s){if(typeof s!="object"||s===null)return s;if(s instanceof Date)return new Date(s);if(Array.isArray(s))return i(s,o);if(s instanceof Map)return new Map(i(Array.from(s),o));if(s instanceof Set)return new Set(i(Array.from(s),o));var a={};e.push(s),r.push(a);for(var l in s){var c=s[l];if(typeof c!="object"||c===null)a[l]=c;else if(c instanceof Date)a[l]=new Date(c);else if(c instanceof Map)a[l]=new Map(i(Array.from(c),o));else if(c instanceof Set)a[l]=new Set(i(Array.from(c),o));else if(ArrayBuffer.isView(c))a[l]=Yr(c);else{var h=e.indexOf(c);h!==-1?a[l]=r[h]:a[l]=o(c)}}return e.pop(),r.pop(),a}}});var Fd=M((lO,jd)=>{"use strict";_();v();m();jd.exports=Dd()()});var $d=M(Jr=>{"use strict";_();v();m();Object.defineProperty(Jr,"__esModule",{value:!0});Jr.validateTopics=Jr.validateTopic=void 0;function Wd(t){let e=t.split("/");for(let r=0;r<e.length;r++)if(e[r]!=="+"){if(e[r]==="#")return r===e.length-1;if(e[r].indexOf("+")!==-1||e[r].indexOf("#")!==-1)return!1}return!0}Jr.validateTopic=Wd;function l1(t){if(t.length===0)return"empty_topic_list";for(let e=0;e<t.length;e++)if(!Wd(t[e]))return t[e];return null}Jr.validateTopics=l1});var ta=M(ea=>{"use strict";_();v();m();Object.defineProperty(ea,"__esModule",{value:!0});var u1=jt(),f1={objectMode:!0},c1={clean:!0},Zo=class{constructor(e){this.options=e||{},this.options=Object.assign(Object.assign({},c1),e),this._inflights=new Map}put(e,r){return this._inflights.set(e.messageId,e),r&&r(),this}createStream(){let e=new u1.Readable(f1),r=[],i=!1,n=0;return this._inflights.forEach((o,s)=>{r.push(o)}),e._read=()=>{!i&&n<r.length?e.push(r[n++]):e.push(null)},e.destroy=o=>{if(!i)return i=!0,setTimeout(()=>{e.emit("close")},0),e},e}del(e,r){let i=this._inflights.get(e.messageId);return i?(this._inflights.delete(e.messageId),r(null,i)):r&&r(new Error("missing packet")),this}get(e,r){let i=this._inflights.get(e.messageId);return i?r(null,i):r&&r(new Error("missing packet")),this}close(e){this.options.clean&&(this._inflights=null),e&&e()}};ea.default=Zo});var Vd=M(ra=>{"use strict";_();v();m();Object.defineProperty(ra,"__esModule",{value:!0});var Hd=[0,16,128,131,135,144,145,151,153],h1=(t,e,r)=>{t.log("handlePublish: packet %o",e),r=typeof r<"u"?r:t.noop;let i=e.topic.toString(),n=e.payload,{qos:o}=e,{messageId:s}=e,{options:a}=t;if(t.options.protocolVersion===5){let l;if(e.properties&&(l=e.properties.topicAlias),typeof l<"u")if(i.length===0)if(l>0&&l<=65535){let c=t.topicAliasRecv.getTopicByAlias(l);if(c)i=c,t.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d",i,l);else{t.log("handlePublish :: unregistered topic alias. alias: %d",l),t.emit("error",new Error("Received unregistered Topic Alias"));return}}else{t.log("handlePublish :: topic alias out of range. alias: %d",l),t.emit("error",new Error("Received Topic Alias is out of range"));return}else if(t.topicAliasRecv.put(i,l))t.log("handlePublish :: registered topic: %s - alias: %d",i,l);else{t.log("handlePublish :: topic alias out of range. alias: %d",l),t.emit("error",new Error("Received Topic Alias is out of range"));return}}switch(t.log("handlePublish: qos %d",o),o){case 2:{a.customHandleAcks(i,n,e,(l,c)=>{if(typeof l=="number"&&(c=l,l=null),l)return t.emit("error",l);if(Hd.indexOf(c)===-1)return t.emit("error",new Error("Wrong reason code for pubrec"));c?t._sendPacket({cmd:"pubrec",messageId:s,reasonCode:c},r):t.incomingStore.put(e,()=>{t._sendPacket({cmd:"pubrec",messageId:s},r)})});break}case 1:{a.customHandleAcks(i,n,e,(l,c)=>{if(typeof l=="number"&&(c=l,l=null),l)return t.emit("error",l);if(Hd.indexOf(c)===-1)return t.emit("error",new Error("Wrong reason code for puback"));c||t.emit("message",i,n,e),t.handleMessage(e,h=>{if(h)return r&&r(h);t._sendPacket({cmd:"puback",messageId:s,reasonCode:c},r)})});break}case 0:t.emit("message",i,n,e),t.handleMessage(e,r);break;default:t.log("handlePublish: unknown QoS. Doing nothing.");break}};ra.default=h1});var zd=M((GO,d1)=>{d1.exports={version:"5.9.0"}});var Xr=M(at=>{"use strict";_();v();m();Object.defineProperty(at,"__esModule",{value:!0});at.MQTTJS_VERSION=at.nextTick=at.applyMixin=at.ErrorWithReasonCode=void 0;var ia=class t extends Error{constructor(e,r){super(e),this.code=r,Object.setPrototypeOf(this,t.prototype),Object.getPrototypeOf(this).name="ErrorWithReasonCode"}};at.ErrorWithReasonCode=ia;function p1(t,e,r=!1){var i;let n=[e];for(;;){let o=n[0],s=Object.getPrototypeOf(o);if(s?.prototype)n.unshift(s);else break}for(let o of n)for(let s of Object.getOwnPropertyNames(o.prototype))(r||s!=="constructor")&&Object.defineProperty(t.prototype,s,(i=Object.getOwnPropertyDescriptor(o.prototype,s))!==null&&i!==void 0?i:Object.create(null))}at.applyMixin=p1;at.nextTick=typeof(C===null||C===void 0?void 0:C.nextTick)=="function"?C.nextTick:t=>{setTimeout(t,0)};at.MQTTJS_VERSION=zd().version});var Ti=M($t=>{"use strict";_();v();m();Object.defineProperty($t,"__esModule",{value:!0});$t.ReasonCodes=void 0;$t.ReasonCodes={0:"",1:"Unacceptable protocol version",2:"Identifier rejected",3:"Server unavailable",4:"Bad username or password",5:"Not authorized",16:"No matching subscribers",17:"No subscription existed",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",132:"Unsupported Protocol Version",133:"Client Identifier not valid",134:"Bad User Name or Password",135:"Not authorized",136:"Server unavailable",137:"Server busy",138:"Banned",139:"Server shutting down",140:"Bad authentication method",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",145:"Packet identifier in use",146:"Packet Identifier not found",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"};var g1=(t,e)=>{let{messageId:r}=e,i=e.cmd,n=null,o=t.outgoing[r]?t.outgoing[r].cb:null,s=null;if(!o){t.log("_handleAck :: Server sent an ack in error. Ignoring.");return}switch(t.log("_handleAck :: packet type",i),i){case"pubcomp":case"puback":{let a=e.reasonCode;a&&a>0&&a!==16?(s=new Error(`Publish error: ${$t.ReasonCodes[a]}`),s.code=a,t._removeOutgoingAndStoreMessage(r,()=>{o(s,e)})):t._removeOutgoingAndStoreMessage(r,o);break}case"pubrec":{n={cmd:"pubrel",qos:2,messageId:r};let a=e.reasonCode;a&&a>0&&a!==16?(s=new Error(`Publish error: ${$t.ReasonCodes[a]}`),s.code=a,t._removeOutgoingAndStoreMessage(r,()=>{o(s,e)})):t._sendPacket(n);break}case"suback":{delete t.outgoing[r],t.messageIdProvider.deallocate(r);let a=e.granted;for(let l=0;l<a.length;l++){let c=a[l];if(c&128){s=new Error(`Subscribe error: ${$t.ReasonCodes[c]}`),s.code=c;let h=t.messageIdToTopic[r];h&&h.forEach(d=>{delete t._resubscribeTopics[d]})}}delete t.messageIdToTopic[r],t._invokeStoreProcessingQueue(),o(s,e);break}case"unsuback":{delete t.outgoing[r],t.messageIdProvider.deallocate(r),t._invokeStoreProcessingQueue(),o(null);break}default:t.emit("error",new Error("unrecognized packet type"))}t.disconnecting&&Object.keys(t.outgoing).length===0&&t.emit("outgoingEmpty")};$t.default=g1});var Gd=M(na=>{"use strict";_();v();m();Object.defineProperty(na,"__esModule",{value:!0});var Kd=Xr(),y1=Ti(),b1=(t,e)=>{let{options:r}=t,i=r.protocolVersion,n=i===5?e.reasonCode:e.returnCode;if(i!==5){let o=new Kd.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${i}`,n);t.emit("error",o);return}t.handleAuth(e,(o,s)=>{if(o){t.emit("error",o);return}if(n===24)t.reconnecting=!1,t._sendPacket(s);else{let a=new Kd.ErrorWithReasonCode(`Connection refused: ${y1.ReasonCodes[n]}`,n);t.emit("error",a)}})};na.default=b1});var Zd=M(Mn=>{"use strict";_();v();m();Object.defineProperty(Mn,"__esModule",{value:!0});Mn.LRUCache=void 0;var Ri=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,Yd=new Set,sa=typeof C=="object"&&C?C:{},Jd=(t,e,r,i)=>{typeof sa.emitWarning=="function"?sa.emitWarning(t,e,r,i):console.error(`[${r}] ${e}: ${t}`)},xn=globalThis.AbortController,Qd=globalThis.AbortSignal;if(typeof xn>"u"){Qd=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(i,n){this._onabort.push(n)}},xn=class{constructor(){e()}signal=new Qd;abort(i){if(!this.signal.aborted){this.signal.reason=i,this.signal.aborted=!0;for(let n of this.signal._onabort)n(i);this.signal.onabort?.(i)}}};let t=sa.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",e=()=>{t&&(t=!1,Jd("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",e))}}var w1=t=>!Yd.has(t),Cx=Symbol("type"),Ht=t=>t&&t===Math.floor(t)&&t>0&&isFinite(t),Xd=t=>Ht(t)?t<=Math.pow(2,8)?Uint8Array:t<=Math.pow(2,16)?Uint16Array:t<=Math.pow(2,32)?Uint32Array:t<=Number.MAX_SAFE_INTEGER?Zr:null:null,Zr=class extends Array{constructor(e){super(e),this.fill(0)}},oa=class t{heap;length;static#l=!1;static create(e){let r=Xd(e);if(!r)return[];t.#l=!0;let i=new t(e,r);return t.#l=!1,i}constructor(e,r){if(!t.#l)throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new r(e),this.length=0}push(e){this.heap[this.length++]=e}pop(){return this.heap[--this.length]}},aa=class t{#l;#c;#p;#g;#B;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#i;#y;#n;#r;#e;#u;#h;#a;#s;#b;#o;#E;#S;#w;#_;#I;#f;static unsafeExposeInternals(e){return{starts:e.#S,ttls:e.#w,sizes:e.#E,keyMap:e.#n,keyList:e.#r,valList:e.#e,next:e.#u,prev:e.#h,get head(){return e.#a},get tail(){return e.#s},free:e.#b,isBackgroundFetch:r=>e.#t(r),backgroundFetch:(r,i,n,o)=>e.#O(r,i,n,o),moveToTail:r=>e.#C(r),indexes:r=>e.#m(r),rindexes:r=>e.#v(r),isStale:r=>e.#d(r)}}get max(){return this.#l}get maxSize(){return this.#c}get calculatedSize(){return this.#y}get size(){return this.#i}get fetchMethod(){return this.#B}get dispose(){return this.#p}get disposeAfter(){return this.#g}constructor(e){let{max:r=0,ttl:i,ttlResolution:n=1,ttlAutopurge:o,updateAgeOnGet:s,updateAgeOnHas:a,allowStale:l,dispose:c,disposeAfter:h,noDisposeOnSet:d,noUpdateTTL:g,maxSize:y=0,maxEntrySize:w=0,sizeCalculation:E,fetchMethod:S,noDeleteOnFetchRejection:I,noDeleteOnStaleGet:B,allowStaleOnFetchRejection:R,allowStaleOnFetchAbort:U,ignoreFetchAbort:N}=e;if(r!==0&&!Ht(r))throw new TypeError("max option must be a nonnegative integer");let W=r?Xd(r):Array;if(!W)throw new Error("invalid max value: "+r);if(this.#l=r,this.#c=y,this.maxEntrySize=w||this.#c,this.sizeCalculation=E,this.sizeCalculation){if(!this.#c&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(S!==void 0&&typeof S!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#B=S,this.#I=!!S,this.#n=new Map,this.#r=new Array(r).fill(void 0),this.#e=new Array(r).fill(void 0),this.#u=new W(r),this.#h=new W(r),this.#a=0,this.#s=0,this.#b=oa.create(r),this.#i=0,this.#y=0,typeof c=="function"&&(this.#p=c),typeof h=="function"?(this.#g=h,this.#o=[]):(this.#g=void 0,this.#o=void 0),this.#_=!!this.#p,this.#f=!!this.#g,this.noDisposeOnSet=!!d,this.noUpdateTTL=!!g,this.noDeleteOnFetchRejection=!!I,this.allowStaleOnFetchRejection=!!R,this.allowStaleOnFetchAbort=!!U,this.ignoreFetchAbort=!!N,this.maxEntrySize!==0){if(this.#c!==0&&!Ht(this.#c))throw new TypeError("maxSize must be a positive integer if specified");if(!Ht(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#q()}if(this.allowStale=!!l,this.noDeleteOnStaleGet=!!B,this.updateAgeOnGet=!!s,this.updateAgeOnHas=!!a,this.ttlResolution=Ht(n)||n===0?n:1,this.ttlAutopurge=!!o,this.ttl=i||0,this.ttl){if(!Ht(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#x()}if(this.#l===0&&this.ttl===0&&this.#c===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#l&&!this.#c){let K="LRU_CACHE_UNBOUNDED";w1(K)&&(Yd.add(K),Jd("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",K,t))}}getRemainingTTL(e){return this.#n.has(e)?1/0:0}#x(){let e=new Zr(this.#l),r=new Zr(this.#l);this.#w=e,this.#S=r,this.#M=(o,s,a=Ri.now())=>{if(r[o]=s!==0?a:0,e[o]=s,s!==0&&this.ttlAutopurge){let l=setTimeout(()=>{this.#d(o)&&this.delete(this.#r[o])},s+1);l.unref&&l.unref()}},this.#T=o=>{r[o]=e[o]!==0?Ri.now():0},this.#A=(o,s)=>{if(e[s]){let a=e[s],l=r[s];o.ttl=a,o.start=l,o.now=i||n();let c=o.now-l;o.remainingTTL=a-c}};let i=0,n=()=>{let o=Ri.now();if(this.ttlResolution>0){i=o;let s=setTimeout(()=>i=0,this.ttlResolution);s.unref&&s.unref()}return o};this.getRemainingTTL=o=>{let s=this.#n.get(o);if(s===void 0)return 0;let a=e[s],l=r[s];if(a===0||l===0)return 1/0;let c=(i||n())-l;return a-c},this.#d=o=>e[o]!==0&&r[o]!==0&&(i||n())-r[o]>e[o]}#T=()=>{};#A=()=>{};#M=()=>{};#d=()=>!1;#q(){let e=new Zr(this.#l);this.#y=0,this.#E=e,this.#R=r=>{this.#y-=e[r],e[r]=0},this.#L=(r,i,n,o)=>{if(this.#t(i))return 0;if(!Ht(n))if(o){if(typeof o!="function")throw new TypeError("sizeCalculation must be a function");if(n=o(i,r),!Ht(n))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return n},this.#P=(r,i,n)=>{if(e[r]=i,this.#c){let o=this.#c-e[r];for(;this.#y>o;)this.#k(!0)}this.#y+=e[r],n&&(n.entrySize=i,n.totalCalculatedSize=this.#y)}}#R=e=>{};#P=(e,r,i)=>{};#L=(e,r,i,n)=>{if(i||n)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#m({allowStale:e=this.allowStale}={}){if(this.#i)for(let r=this.#s;!(!this.#U(r)||((e||!this.#d(r))&&(yield r),r===this.#a));)r=this.#h[r]}*#v({allowStale:e=this.allowStale}={}){if(this.#i)for(let r=this.#a;!(!this.#U(r)||((e||!this.#d(r))&&(yield r),r===this.#s));)r=this.#u[r]}#U(e){return e!==void 0&&this.#n.get(this.#r[e])===e}*entries(){for(let e of this.#m())this.#e[e]!==void 0&&this.#r[e]!==void 0&&!this.#t(this.#e[e])&&(yield[this.#r[e],this.#e[e]])}*rentries(){for(let e of this.#v())this.#e[e]!==void 0&&this.#r[e]!==void 0&&!this.#t(this.#e[e])&&(yield[this.#r[e],this.#e[e]])}*keys(){for(let e of this.#m()){let r=this.#r[e];r!==void 0&&!this.#t(this.#e[e])&&(yield r)}}*rkeys(){for(let e of this.#v()){let r=this.#r[e];r!==void 0&&!this.#t(this.#e[e])&&(yield r)}}*values(){for(let e of this.#m())this.#e[e]!==void 0&&!this.#t(this.#e[e])&&(yield this.#e[e])}*rvalues(){for(let e of this.#v())this.#e[e]!==void 0&&!this.#t(this.#e[e])&&(yield this.#e[e])}[Symbol.iterator](){return this.entries()}find(e,r={}){for(let i of this.#m()){let n=this.#e[i],o=this.#t(n)?n.__staleWhileFetching:n;if(o!==void 0&&e(o,this.#r[i],this))return this.get(this.#r[i],r)}}forEach(e,r=this){for(let i of this.#m()){let n=this.#e[i],o=this.#t(n)?n.__staleWhileFetching:n;o!==void 0&&e.call(r,o,this.#r[i],this)}}rforEach(e,r=this){for(let i of this.#v()){let n=this.#e[i],o=this.#t(n)?n.__staleWhileFetching:n;o!==void 0&&e.call(r,o,this.#r[i],this)}}purgeStale(){let e=!1;for(let r of this.#v({allowStale:!0}))this.#d(r)&&(this.delete(this.#r[r]),e=!0);return e}dump(){let e=[];for(let r of this.#m({allowStale:!0})){let i=this.#r[r],n=this.#e[r],o=this.#t(n)?n.__staleWhileFetching:n;if(o===void 0||i===void 0)continue;let s={value:o};if(this.#w&&this.#S){s.ttl=this.#w[r];let a=Ri.now()-this.#S[r];s.start=Math.floor(Date.now()-a)}this.#E&&(s.size=this.#E[r]),e.unshift([i,s])}return e}load(e){this.clear();for(let[r,i]of e){if(i.start){let n=Date.now()-i.start;i.start=Ri.now()-n}this.set(r,i.value,i)}}set(e,r,i={}){if(r===void 0)return this.delete(e),this;let{ttl:n=this.ttl,start:o,noDisposeOnSet:s=this.noDisposeOnSet,sizeCalculation:a=this.sizeCalculation,status:l}=i,{noUpdateTTL:c=this.noUpdateTTL}=i,h=this.#L(e,r,i.size||0,a);if(this.maxEntrySize&&h>this.maxEntrySize)return l&&(l.set="miss",l.maxEntrySizeExceeded=!0),this.delete(e),this;let d=this.#i===0?void 0:this.#n.get(e);if(d===void 0)d=this.#i===0?this.#s:this.#b.length!==0?this.#b.pop():this.#i===this.#l?this.#k(!1):this.#i,this.#r[d]=e,this.#e[d]=r,this.#n.set(e,d),this.#u[this.#s]=d,this.#h[d]=this.#s,this.#s=d,this.#i++,this.#P(d,h,l),l&&(l.set="add"),c=!1;else{this.#C(d);let g=this.#e[d];if(r!==g){if(this.#I&&this.#t(g)){g.__abortController.abort(new Error("replaced"));let{__staleWhileFetching:y}=g;y!==void 0&&!s&&(this.#_&&this.#p?.(y,e,"set"),this.#f&&this.#o?.push([y,e,"set"]))}else s||(this.#_&&this.#p?.(g,e,"set"),this.#f&&this.#o?.push([g,e,"set"]));if(this.#R(d),this.#P(d,h,l),this.#e[d]=r,l){l.set="replace";let y=g&&this.#t(g)?g.__staleWhileFetching:g;y!==void 0&&(l.oldValue=y)}}else l&&(l.set="update")}if(n!==0&&!this.#w&&this.#x(),this.#w&&(c||this.#M(d,n,o),l&&this.#A(l,d)),!s&&this.#f&&this.#o){let g=this.#o,y;for(;y=g?.shift();)this.#g?.(...y)}return this}pop(){try{for(;this.#i;){let e=this.#e[this.#a];if(this.#k(!0),this.#t(e)){if(e.__staleWhileFetching)return e.__staleWhileFetching}else if(e!==void 0)return e}}finally{if(this.#f&&this.#o){let e=this.#o,r;for(;r=e?.shift();)this.#g?.(...r)}}}#k(e){let r=this.#a,i=this.#r[r],n=this.#e[r];return this.#I&&this.#t(n)?n.__abortController.abort(new Error("evicted")):(this.#_||this.#f)&&(this.#_&&this.#p?.(n,i,"evict"),this.#f&&this.#o?.push([n,i,"evict"])),this.#R(r),e&&(this.#r[r]=void 0,this.#e[r]=void 0,this.#b.push(r)),this.#i===1?(this.#a=this.#s=0,this.#b.length=0):this.#a=this.#u[r],this.#n.delete(i),this.#i--,r}has(e,r={}){let{updateAgeOnHas:i=this.updateAgeOnHas,status:n}=r,o=this.#n.get(e);if(o!==void 0){let s=this.#e[o];if(this.#t(s)&&s.__staleWhileFetching===void 0)return!1;if(this.#d(o))n&&(n.has="stale",this.#A(n,o));else return i&&this.#T(o),n&&(n.has="hit",this.#A(n,o)),!0}else n&&(n.has="miss");return!1}peek(e,r={}){let{allowStale:i=this.allowStale}=r,n=this.#n.get(e);if(n!==void 0&&(i||!this.#d(n))){let o=this.#e[n];return this.#t(o)?o.__staleWhileFetching:o}}#O(e,r,i,n){let o=r===void 0?void 0:this.#e[r];if(this.#t(o))return o;let s=new xn,{signal:a}=i;a?.addEventListener("abort",()=>s.abort(a.reason),{signal:s.signal});let l={signal:s.signal,options:i,context:n},c=(E,S=!1)=>{let{aborted:I}=s.signal,B=i.ignoreFetchAbort&&E!==void 0;if(i.status&&(I&&!S?(i.status.fetchAborted=!0,i.status.fetchError=s.signal.reason,B&&(i.status.fetchAbortIgnored=!0)):i.status.fetchResolved=!0),I&&!B&&!S)return d(s.signal.reason);let R=y;return this.#e[r]===y&&(E===void 0?R.__staleWhileFetching?this.#e[r]=R.__staleWhileFetching:this.delete(e):(i.status&&(i.status.fetchUpdated=!0),this.set(e,E,l.options))),E},h=E=>(i.status&&(i.status.fetchRejected=!0,i.status.fetchError=E),d(E)),d=E=>{let{aborted:S}=s.signal,I=S&&i.allowStaleOnFetchAbort,B=I||i.allowStaleOnFetchRejection,R=B||i.noDeleteOnFetchRejection,U=y;if(this.#e[r]===y&&(!R||U.__staleWhileFetching===void 0?this.delete(e):I||(this.#e[r]=U.__staleWhileFetching)),B)return i.status&&U.__staleWhileFetching!==void 0&&(i.status.returnedStale=!0),U.__staleWhileFetching;if(U.__returned===U)throw E},g=(E,S)=>{let I=this.#B?.(e,o,l);I&&I instanceof Promise&&I.then(B=>E(B===void 0?void 0:B),S),s.signal.addEventListener("abort",()=>{(!i.ignoreFetchAbort||i.allowStaleOnFetchAbort)&&(E(void 0),i.allowStaleOnFetchAbort&&(E=B=>c(B,!0)))})};i.status&&(i.status.fetchDispatched=!0);let y=new Promise(g).then(c,h),w=Object.assign(y,{__abortController:s,__staleWhileFetching:o,__returned:void 0});return r===void 0?(this.set(e,w,{...l.options,status:void 0}),r=this.#n.get(e)):this.#e[r]=w,w}#t(e){if(!this.#I)return!1;let r=e;return!!r&&r instanceof Promise&&r.hasOwnProperty("__staleWhileFetching")&&r.__abortController instanceof xn}async fetch(e,r={}){let{allowStale:i=this.allowStale,updateAgeOnGet:n=this.updateAgeOnGet,noDeleteOnStaleGet:o=this.noDeleteOnStaleGet,ttl:s=this.ttl,noDisposeOnSet:a=this.noDisposeOnSet,size:l=0,sizeCalculation:c=this.sizeCalculation,noUpdateTTL:h=this.noUpdateTTL,noDeleteOnFetchRejection:d=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:g=this.allowStaleOnFetchRejection,ignoreFetchAbort:y=this.ignoreFetchAbort,allowStaleOnFetchAbort:w=this.allowStaleOnFetchAbort,context:E,forceRefresh:S=!1,status:I,signal:B}=r;if(!this.#I)return I&&(I.fetch="get"),this.get(e,{allowStale:i,updateAgeOnGet:n,noDeleteOnStaleGet:o,status:I});let R={allowStale:i,updateAgeOnGet:n,noDeleteOnStaleGet:o,ttl:s,noDisposeOnSet:a,size:l,sizeCalculation:c,noUpdateTTL:h,noDeleteOnFetchRejection:d,allowStaleOnFetchRejection:g,allowStaleOnFetchAbort:w,ignoreFetchAbort:y,status:I,signal:B},U=this.#n.get(e);if(U===void 0){I&&(I.fetch="miss");let N=this.#O(e,U,R,E);return N.__returned=N}else{let N=this.#e[U];if(this.#t(N)){let pe=i&&N.__staleWhileFetching!==void 0;return I&&(I.fetch="inflight",pe&&(I.returnedStale=!0)),pe?N.__staleWhileFetching:N.__returned=N}let W=this.#d(U);if(!S&&!W)return I&&(I.fetch="hit"),this.#C(U),n&&this.#T(U),I&&this.#A(I,U),N;let K=this.#O(e,U,R,E),Q=K.__staleWhileFetching!==void 0&&i;return I&&(I.fetch=W?"stale":"refresh",Q&&W&&(I.returnedStale=!0)),Q?K.__staleWhileFetching:K.__returned=K}}get(e,r={}){let{allowStale:i=this.allowStale,updateAgeOnGet:n=this.updateAgeOnGet,noDeleteOnStaleGet:o=this.noDeleteOnStaleGet,status:s}=r,a=this.#n.get(e);if(a!==void 0){let l=this.#e[a],c=this.#t(l);return s&&this.#A(s,a),this.#d(a)?(s&&(s.get="stale"),c?(s&&i&&l.__staleWhileFetching!==void 0&&(s.returnedStale=!0),i?l.__staleWhileFetching:void 0):(o||this.delete(e),s&&i&&(s.returnedStale=!0),i?l:void 0)):(s&&(s.get="hit"),c?l.__staleWhileFetching:(this.#C(a),n&&this.#T(a),l))}else s&&(s.get="miss")}#N(e,r){this.#h[r]=e,this.#u[e]=r}#C(e){e!==this.#s&&(e===this.#a?this.#a=this.#u[e]:this.#N(this.#h[e],this.#u[e]),this.#N(this.#s,e),this.#s=e)}delete(e){let r=!1;if(this.#i!==0){let i=this.#n.get(e);if(i!==void 0)if(r=!0,this.#i===1)this.clear();else{this.#R(i);let n=this.#e[i];this.#t(n)?n.__abortController.abort(new Error("deleted")):(this.#_||this.#f)&&(this.#_&&this.#p?.(n,e,"delete"),this.#f&&this.#o?.push([n,e,"delete"])),this.#n.delete(e),this.#r[i]=void 0,this.#e[i]=void 0,i===this.#s?this.#s=this.#h[i]:i===this.#a?this.#a=this.#u[i]:(this.#u[this.#h[i]]=this.#u[i],this.#h[this.#u[i]]=this.#h[i]),this.#i--,this.#b.push(i)}}if(this.#f&&this.#o?.length){let i=this.#o,n;for(;n=i?.shift();)this.#g?.(...n)}return r}clear(){for(let e of this.#v({allowStale:!0})){let r=this.#e[e];if(this.#t(r))r.__abortController.abort(new Error("deleted"));else{let i=this.#r[e];this.#_&&this.#p?.(r,i,"delete"),this.#f&&this.#o?.push([r,i,"delete"])}}if(this.#n.clear(),this.#e.fill(void 0),this.#r.fill(void 0),this.#w&&this.#S&&(this.#w.fill(0),this.#S.fill(0)),this.#E&&this.#E.fill(0),this.#a=0,this.#s=0,this.#b.length=0,this.#y=0,this.#i=0,this.#f&&this.#o){let e=this.#o,r;for(;r=e?.shift();)this.#g?.(...r)}}};Mn.LRUCache=aa});var lt=M(Vt=>{"use strict";_();v();m();Object.defineProperty(Vt,"t",{value:!0});Vt.ContainerIterator=Vt.Container=Vt.Base=void 0;var la=class{constructor(e=0){this.iteratorType=e}equals(e){return this.o===e.o}};Vt.ContainerIterator=la;var Ln=class{constructor(){this.i=0}get length(){return this.i}size(){return this.i}empty(){return this.i===0}};Vt.Base=Ln;var ua=class extends Ln{};Vt.Container=ua});var ep=M(Un=>{"use strict";_();v();m();Object.defineProperty(Un,"t",{value:!0});Un.default=void 0;var _1=lt(),fa=class extends _1.Base{constructor(e=[]){super(),this.S=[];let r=this;e.forEach(function(i){r.push(i)})}clear(){this.i=0,this.S=[]}push(e){return this.S.push(e),this.i+=1,this.i}pop(){if(this.i!==0)return this.i-=1,this.S.pop()}top(){return this.S[this.i-1]}},m1=fa;Un.default=m1});var tp=M(Nn=>{"use strict";_();v();m();Object.defineProperty(Nn,"t",{value:!0});Nn.default=void 0;var v1=lt(),ca=class extends v1.Base{constructor(e=[]){super(),this.j=0,this.q=[];let r=this;e.forEach(function(i){r.push(i)})}clear(){this.q=[],this.i=this.j=0}push(e){let r=this.q.length;if(this.j/r>.5&&this.j+this.i>=r&&r>4096){let i=this.i;for(let n=0;n<i;++n)this.q[n]=this.q[this.j+n];this.j=0,this.q[this.i]=e}else this.q[this.j+this.i]=e;return++this.i}pop(){if(this.i===0)return;let e=this.q[this.j++];return this.i-=1,e}front(){if(this.i!==0)return this.q[this.j]}},E1=ca;Nn.default=E1});var rp=M(qn=>{"use strict";_();v();m();Object.defineProperty(qn,"t",{value:!0});qn.default=void 0;var S1=lt(),ha=class extends S1.Base{constructor(e=[],r=function(n,o){return n>o?-1:n<o?1:0},i=!0){if(super(),this.v=r,Array.isArray(e))this.C=i?[...e]:e;else{this.C=[];let o=this;e.forEach(function(s){o.C.push(s)})}this.i=this.C.length;let n=this.i>>1;for(let o=this.i-1>>1;o>=0;--o)this.k(o,n)}m(e){let r=this.C[e];for(;e>0;){let i=e-1>>1,n=this.C[i];if(this.v(n,r)<=0)break;this.C[e]=n,e=i}this.C[e]=r}k(e,r){let i=this.C[e];for(;e<r;){let n=e<<1|1,o=n+1,s=this.C[n];if(o<this.i&&this.v(s,this.C[o])>0&&(n=o,s=this.C[o]),this.v(s,i)>=0)break;this.C[e]=s,e=n}this.C[e]=i}clear(){this.i=0,this.C.length=0}push(e){this.C.push(e),this.m(this.i),this.i+=1}pop(){if(this.i===0)return;let e=this.C[0],r=this.C.pop();return this.i-=1,this.i&&(this.C[0]=r,this.k(0,this.i>>1)),e}top(){return this.C[0]}find(e){return this.C.indexOf(e)>=0}remove(e){let r=this.C.indexOf(e);return r<0?!1:(r===0?this.pop():r===this.i-1?(this.C.pop(),this.i-=1):(this.C.splice(r,1,this.C.pop()),this.i-=1,this.m(r),this.k(r,this.i>>1)),!0)}updateItem(e){let r=this.C.indexOf(e);return r<0?!1:(this.m(r),this.k(r,this.i>>1),!0)}toArray(){return[...this.C]}},A1=ha;qn.default=A1});var jn=M(Dn=>{"use strict";_();v();m();Object.defineProperty(Dn,"t",{value:!0});Dn.default=void 0;var I1=lt(),da=class extends I1.Container{},T1=da;Dn.default=T1});var ut=M(pa=>{"use strict";_();v();m();Object.defineProperty(pa,"t",{value:!0});pa.throwIteratorAccessError=R1;function R1(){throw new RangeError("Iterator access denied!")}});var ya=M(Wn=>{"use strict";_();v();m();Object.defineProperty(Wn,"t",{value:!0});Wn.RandomIterator=void 0;var C1=lt(),Fn=ut(),ga=class extends C1.ContainerIterator{constructor(e,r){super(r),this.o=e,this.iteratorType===0?(this.pre=function(){return this.o===0&&(0,Fn.throwIteratorAccessError)(),this.o-=1,this},this.next=function(){return this.o===this.container.size()&&(0,Fn.throwIteratorAccessError)(),this.o+=1,this}):(this.pre=function(){return this.o===this.container.size()-1&&(0,Fn.throwIteratorAccessError)(),this.o+=1,this},this.next=function(){return this.o===-1&&(0,Fn.throwIteratorAccessError)(),this.o-=1,this})}get pointer(){return this.container.getElementByPos(this.o)}set pointer(e){this.container.setElementByPos(this.o,e)}};Wn.RandomIterator=ga});var ip=M($n=>{"use strict";_();v();m();Object.defineProperty($n,"t",{value:!0});$n.default=void 0;var B1=k1(jn()),P1=ya();function k1(t){return t&&t.t?t:{default:t}}var _r=class t extends P1.RandomIterator{constructor(e,r,i){super(e,i),this.container=r}copy(){return new t(this.o,this.container,this.iteratorType)}},ba=class extends B1.default{constructor(e=[],r=!0){if(super(),Array.isArray(e))this.J=r?[...e]:e,this.i=e.length;else{this.J=[];let i=this;e.forEach(function(n){i.pushBack(n)})}}clear(){this.i=0,this.J.length=0}begin(){return new _r(0,this)}end(){return new _r(this.i,this)}rBegin(){return new _r(this.i-1,this,1)}rEnd(){return new _r(-1,this,1)}front(){return this.J[0]}back(){return this.J[this.i-1]}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;return this.J[e]}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;return this.J.splice(e,1),this.i-=1,this.i}eraseElementByValue(e){let r=0;for(let i=0;i<this.i;++i)this.J[i]!==e&&(this.J[r++]=this.J[i]);return this.i=this.J.length=r,this.i}eraseElementByIterator(e){let r=e.o;return e=e.next(),this.eraseElementByPos(r),e}pushBack(e){return this.J.push(e),this.i+=1,this.i}popBack(){if(this.i!==0)return this.i-=1,this.J.pop()}setElementByPos(e,r){if(e<0||e>this.i-1)throw new RangeError;this.J[e]=r}insert(e,r,i=1){if(e<0||e>this.i)throw new RangeError;return this.J.splice(e,0,...new Array(i).fill(r)),this.i+=i,this.i}find(e){for(let r=0;r<this.i;++r)if(this.J[r]===e)return new _r(r,this);return this.end()}reverse(){this.J.reverse()}unique(){let e=1;for(let r=1;r<this.i;++r)this.J[r]!==this.J[r-1]&&(this.J[e++]=this.J[r]);return this.i=this.J.length=e,this.i}sort(e){this.J.sort(e)}forEach(e){for(let r=0;r<this.i;++r)e(this.J[r],r,this)}[Symbol.iterator](){return function*(){yield*this.J}.bind(this)()}},O1=ba;$n.default=O1});var np=M(Hn=>{"use strict";_();v();m();Object.defineProperty(Hn,"t",{value:!0});Hn.default=void 0;var x1=L1(jn()),M1=lt(),mr=ut();function L1(t){return t&&t.t?t:{default:t}}var vr=class t extends M1.ContainerIterator{constructor(e,r,i,n){super(n),this.o=e,this.h=r,this.container=i,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,mr.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,mr.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,mr.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,mr.throwIteratorAccessError)(),this.o=this.o.L,this})}get pointer(){return this.o===this.h&&(0,mr.throwIteratorAccessError)(),this.o.l}set pointer(e){this.o===this.h&&(0,mr.throwIteratorAccessError)(),this.o.l=e}copy(){return new t(this.o,this.h,this.container,this.iteratorType)}},wa=class extends x1.default{constructor(e=[]){super(),this.h={},this.p=this._=this.h.L=this.h.B=this.h;let r=this;e.forEach(function(i){r.pushBack(i)})}V(e){let{L:r,B:i}=e;r.B=i,i.L=r,e===this.p&&(this.p=i),e===this._&&(this._=r),this.i-=1}G(e,r){let i=r.B,n={l:e,L:r,B:i};r.B=n,i.L=n,r===this.h&&(this.p=n),i===this.h&&(this._=n),this.i+=1}clear(){this.i=0,this.p=this._=this.h.L=this.h.B=this.h}begin(){return new vr(this.p,this.h,this)}end(){return new vr(this.h,this.h,this)}rBegin(){return new vr(this._,this.h,this,1)}rEnd(){return new vr(this.h,this.h,this,1)}front(){return this.p.l}back(){return this._.l}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let r=this.p;for(;e--;)r=r.B;return r.l}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let r=this.p;for(;e--;)r=r.B;return this.V(r),this.i}eraseElementByValue(e){let r=this.p;for(;r!==this.h;)r.l===e&&this.V(r),r=r.B;return this.i}eraseElementByIterator(e){let r=e.o;return r===this.h&&(0,mr.throwIteratorAccessError)(),e=e.next(),this.V(r),e}pushBack(e){return this.G(e,this._),this.i}popBack(){if(this.i===0)return;let e=this._.l;return this.V(this._),e}pushFront(e){return this.G(e,this.h),this.i}popFront(){if(this.i===0)return;let e=this.p.l;return this.V(this.p),e}setElementByPos(e,r){if(e<0||e>this.i-1)throw new RangeError;let i=this.p;for(;e--;)i=i.B;i.l=r}insert(e,r,i=1){if(e<0||e>this.i)throw new RangeError;if(i<=0)return this.i;if(e===0)for(;i--;)this.pushFront(r);else if(e===this.i)for(;i--;)this.pushBack(r);else{let n=this.p;for(let s=1;s<e;++s)n=n.B;let o=n.B;for(this.i+=i;i--;)n.B={l:r,L:n},n.B.L=n,n=n.B;n.B=o,o.L=n}return this.i}find(e){let r=this.p;for(;r!==this.h;){if(r.l===e)return new vr(r,this.h,this);r=r.B}return this.end()}reverse(){if(this.i<=1)return;let e=this.p,r=this._,i=0;for(;i<<1<this.i;){let n=e.l;e.l=r.l,r.l=n,e=e.B,r=r.L,i+=1}}unique(){if(this.i<=1)return this.i;let e=this.p;for(;e!==this.h;){let r=e;for(;r.B!==this.h&&r.l===r.B.l;)r=r.B,this.i-=1;e.B=r.B,e.B.L=e,e=e.B}return this.i}sort(e){if(this.i<=1)return;let r=[];this.forEach(function(n){r.push(n)}),r.sort(e);let i=this.p;r.forEach(function(n){i.l=n,i=i.B})}merge(e){let r=this;if(this.i===0)e.forEach(function(i){r.pushBack(i)});else{let i=this.p;e.forEach(function(n){for(;i!==r.h&&i.l<=n;)i=i.B;r.G(n,i.L)})}return this.i}forEach(e){let r=this.p,i=0;for(;r!==this.h;)e(r.l,i++,this),r=r.B}[Symbol.iterator](){return function*(){if(this.i===0)return;let e=this.p;for(;e!==this.h;)yield e.l,e=e.B}.bind(this)()}},U1=wa;Hn.default=U1});var sp=M(Vn=>{"use strict";_();v();m();Object.defineProperty(Vn,"t",{value:!0});Vn.default=void 0;var N1=D1(jn()),q1=ya();function D1(t){return t&&t.t?t:{default:t}}var Er=class t extends q1.RandomIterator{constructor(e,r,i){super(e,i),this.container=r}copy(){return new t(this.o,this.container,this.iteratorType)}},_a=class extends N1.default{constructor(e=[],r=4096){super(),this.j=0,this.D=0,this.R=0,this.N=0,this.P=0,this.A=[];let i=(()=>{if(typeof e.length=="number")return e.length;if(typeof e.size=="number")return e.size;if(typeof e.size=="function")return e.size();throw new TypeError("Cannot get the length or size of the container")})();this.F=r,this.P=Math.max(Math.ceil(i/this.F),1);for(let s=0;s<this.P;++s)this.A.push(new Array(this.F));let n=Math.ceil(i/this.F);this.j=this.R=(this.P>>1)-(n>>1),this.D=this.N=this.F-i%this.F>>1;let o=this;e.forEach(function(s){o.pushBack(s)})}T(){let e=[],r=Math.max(this.P>>1,1);for(let i=0;i<r;++i)e[i]=new Array(this.F);for(let i=this.j;i<this.P;++i)e[e.length]=this.A[i];for(let i=0;i<this.R;++i)e[e.length]=this.A[i];e[e.length]=[...this.A[this.R]],this.j=r,this.R=e.length-1;for(let i=0;i<r;++i)e[e.length]=new Array(this.F);this.A=e,this.P=e.length}O(e){let r=this.D+e+1,i=r%this.F,n=i-1,o=this.j+(r-i)/this.F;return i===0&&(o-=1),o%=this.P,n<0&&(n+=this.F),{curNodeBucketIndex:o,curNodePointerIndex:n}}clear(){this.A=[new Array(this.F)],this.P=1,this.j=this.R=this.i=0,this.D=this.N=this.F>>1}begin(){return new Er(0,this)}end(){return new Er(this.i,this)}rBegin(){return new Er(this.i-1,this,1)}rEnd(){return new Er(-1,this,1)}front(){if(this.i!==0)return this.A[this.j][this.D]}back(){if(this.i!==0)return this.A[this.R][this.N]}pushBack(e){return this.i&&(this.N<this.F-1?this.N+=1:this.R<this.P-1?(this.R+=1,this.N=0):(this.R=0,this.N=0),this.R===this.j&&this.N===this.D&&this.T()),this.i+=1,this.A[this.R][this.N]=e,this.i}popBack(){if(this.i===0)return;let e=this.A[this.R][this.N];return this.i!==1&&(this.N>0?this.N-=1:this.R>0?(this.R-=1,this.N=this.F-1):(this.R=this.P-1,this.N=this.F-1)),this.i-=1,e}pushFront(e){return this.i&&(this.D>0?this.D-=1:this.j>0?(this.j-=1,this.D=this.F-1):(this.j=this.P-1,this.D=this.F-1),this.j===this.R&&this.D===this.N&&this.T()),this.i+=1,this.A[this.j][this.D]=e,this.i}popFront(){if(this.i===0)return;let e=this.A[this.j][this.D];return this.i!==1&&(this.D<this.F-1?this.D+=1:this.j<this.P-1?(this.j+=1,this.D=0):(this.j=0,this.D=0)),this.i-=1,e}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let{curNodeBucketIndex:r,curNodePointerIndex:i}=this.O(e);return this.A[r][i]}setElementByPos(e,r){if(e<0||e>this.i-1)throw new RangeError;let{curNodeBucketIndex:i,curNodePointerIndex:n}=this.O(e);this.A[i][n]=r}insert(e,r,i=1){if(e<0||e>this.i)throw new RangeError;if(e===0)for(;i--;)this.pushFront(r);else if(e===this.i)for(;i--;)this.pushBack(r);else{let n=[];for(let o=e;o<this.i;++o)n.push(this.getElementByPos(o));this.cut(e-1);for(let o=0;o<i;++o)this.pushBack(r);for(let o=0;o<n.length;++o)this.pushBack(n[o])}return this.i}cut(e){if(e<0)return this.clear(),0;let{curNodeBucketIndex:r,curNodePointerIndex:i}=this.O(e);return this.R=r,this.N=i,this.i=e+1,this.i}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;if(e===0)this.popFront();else if(e===this.i-1)this.popBack();else{let r=[];for(let n=e+1;n<this.i;++n)r.push(this.getElementByPos(n));this.cut(e),this.popBack();let i=this;r.forEach(function(n){i.pushBack(n)})}return this.i}eraseElementByValue(e){if(this.i===0)return 0;let r=[];for(let n=0;n<this.i;++n){let o=this.getElementByPos(n);o!==e&&r.push(o)}let i=r.length;for(let n=0;n<i;++n)this.setElementByPos(n,r[n]);return this.cut(i-1)}eraseElementByIterator(e){let r=e.o;return this.eraseElementByPos(r),e=e.next(),e}find(e){for(let r=0;r<this.i;++r)if(this.getElementByPos(r)===e)return new Er(r,this);return this.end()}reverse(){let e=0,r=this.i-1;for(;e<r;){let i=this.getElementByPos(e);this.setElementByPos(e,this.getElementByPos(r)),this.setElementByPos(r,i),e+=1,r-=1}}unique(){if(this.i<=1)return this.i;let e=1,r=this.getElementByPos(0);for(let i=1;i<this.i;++i){let n=this.getElementByPos(i);n!==r&&(r=n,this.setElementByPos(e++,n))}for(;this.i>e;)this.popBack();return this.i}sort(e){let r=[];for(let i=0;i<this.i;++i)r.push(this.getElementByPos(i));r.sort(e);for(let i=0;i<this.i;++i)this.setElementByPos(i,r[i])}shrinkToFit(){if(this.i===0)return;let e=[];this.forEach(function(r){e.push(r)}),this.P=Math.max(Math.ceil(this.i/this.F),1),this.i=this.j=this.R=this.D=this.N=0,this.A=[];for(let r=0;r<this.P;++r)this.A.push(new Array(this.F));for(let r=0;r<e.length;++r)this.pushBack(e[r])}forEach(e){for(let r=0;r<this.i;++r)e(this.getElementByPos(r),r,this)}[Symbol.iterator](){return function*(){for(let e=0;e<this.i;++e)yield this.getElementByPos(e)}.bind(this)()}},j1=_a;Vn.default=j1});var op=M(ei=>{"use strict";_();v();m();Object.defineProperty(ei,"t",{value:!0});ei.TreeNodeEnableIndex=ei.TreeNode=void 0;var zn=class{constructor(e,r){this.ee=1,this.u=void 0,this.l=void 0,this.U=void 0,this.W=void 0,this.tt=void 0,this.u=e,this.l=r}L(){let e=this;if(e.ee===1&&e.tt.tt===e)e=e.W;else if(e.U)for(e=e.U;e.W;)e=e.W;else{let r=e.tt;for(;r.U===e;)e=r,r=e.tt;e=r}return e}B(){let e=this;if(e.W){for(e=e.W;e.U;)e=e.U;return e}else{let r=e.tt;for(;r.W===e;)e=r,r=e.tt;return e.W!==r?r:e}}te(){let e=this.tt,r=this.W,i=r.U;return e.tt===this?e.tt=r:e.U===this?e.U=r:e.W=r,r.tt=e,r.U=this,this.tt=r,this.W=i,i&&(i.tt=this),r}se(){let e=this.tt,r=this.U,i=r.W;return e.tt===this?e.tt=r:e.U===this?e.U=r:e.W=r,r.tt=e,r.W=this,this.tt=r,this.U=i,i&&(i.tt=this),r}};ei.TreeNode=zn;var ma=class extends zn{constructor(){super(...arguments),this.rt=1}te(){let e=super.te();return this.ie(),e.ie(),e}se(){let e=super.se();return this.ie(),e.ie(),e}ie(){this.rt=1,this.U&&(this.rt+=this.U.rt),this.W&&(this.rt+=this.W.rt)}};ei.TreeNodeEnableIndex=ma});var Ea=M(Kn=>{"use strict";_();v();m();Object.defineProperty(Kn,"t",{value:!0});Kn.default=void 0;var ap=op(),F1=lt(),lp=ut(),va=class extends F1.Container{constructor(e=function(i,n){return i<n?-1:i>n?1:0},r=!1){super(),this.Y=void 0,this.v=e,r?(this.re=ap.TreeNodeEnableIndex,this.M=function(i,n,o){let s=this.ne(i,n,o);if(s){let a=s.tt;for(;a!==this.h;)a.rt+=1,a=a.tt;let l=this.he(s);if(l){let{parentNode:c,grandParent:h,curNode:d}=l;c.ie(),h.ie(),d.ie()}}return this.i},this.V=function(i){let n=this.fe(i);for(;n!==this.h;)n.rt-=1,n=n.tt}):(this.re=ap.TreeNode,this.M=function(i,n,o){let s=this.ne(i,n,o);return s&&this.he(s),this.i},this.V=this.fe),this.h=new this.re}X(e,r){let i=this.h;for(;e;){let n=this.v(e.u,r);if(n<0)e=e.W;else if(n>0)i=e,e=e.U;else return e}return i}Z(e,r){let i=this.h;for(;e;)this.v(e.u,r)<=0?e=e.W:(i=e,e=e.U);return i}$(e,r){let i=this.h;for(;e;){let n=this.v(e.u,r);if(n<0)i=e,e=e.W;else if(n>0)e=e.U;else return e}return i}rr(e,r){let i=this.h;for(;e;)this.v(e.u,r)<0?(i=e,e=e.W):e=e.U;return i}ue(e){for(;;){let r=e.tt;if(r===this.h)return;if(e.ee===1){e.ee=0;return}if(e===r.U){let i=r.W;if(i.ee===1)i.ee=0,r.ee=1,r===this.Y?this.Y=r.te():r.te();else if(i.W&&i.W.ee===1){i.ee=r.ee,r.ee=0,i.W.ee=0,r===this.Y?this.Y=r.te():r.te();return}else i.U&&i.U.ee===1?(i.ee=1,i.U.ee=0,i.se()):(i.ee=1,e=r)}else{let i=r.U;if(i.ee===1)i.ee=0,r.ee=1,r===this.Y?this.Y=r.se():r.se();else if(i.U&&i.U.ee===1){i.ee=r.ee,r.ee=0,i.U.ee=0,r===this.Y?this.Y=r.se():r.se();return}else i.W&&i.W.ee===1?(i.ee=1,i.W.ee=0,i.te()):(i.ee=1,e=r)}}}fe(e){if(this.i===1)return this.clear(),this.h;let r=e;for(;r.U||r.W;){if(r.W)for(r=r.W;r.U;)r=r.U;else r=r.U;[e.u,r.u]=[r.u,e.u],[e.l,r.l]=[r.l,e.l],e=r}this.h.U===r?this.h.U=r.tt:this.h.W===r&&(this.h.W=r.tt),this.ue(r);let i=r.tt;return r===i.U?i.U=void 0:i.W=void 0,this.i-=1,this.Y.ee=0,i}oe(e,r){return e===void 0?!1:this.oe(e.U,r)||r(e)?!0:this.oe(e.W,r)}he(e){for(;;){let r=e.tt;if(r.ee===0)return;let i=r.tt;if(r===i.U){let n=i.W;if(n&&n.ee===1){if(n.ee=r.ee=0,i===this.Y)return;i.ee=1,e=i;continue}else if(e===r.W){if(e.ee=0,e.U&&(e.U.tt=r),e.W&&(e.W.tt=i),r.W=e.U,i.U=e.W,e.U=r,e.W=i,i===this.Y)this.Y=e,this.h.tt=e;else{let o=i.tt;o.U===i?o.U=e:o.W=e}return e.tt=i.tt,r.tt=e,i.tt=e,i.ee=1,{parentNode:r,grandParent:i,curNode:e}}else r.ee=0,i===this.Y?this.Y=i.se():i.se(),i.ee=1}else{let n=i.U;if(n&&n.ee===1){if(n.ee=r.ee=0,i===this.Y)return;i.ee=1,e=i;continue}else if(e===r.U){if(e.ee=0,e.U&&(e.U.tt=i),e.W&&(e.W.tt=r),i.W=e.U,r.U=e.W,e.U=i,e.W=r,i===this.Y)this.Y=e,this.h.tt=e;else{let o=i.tt;o.U===i?o.U=e:o.W=e}return e.tt=i.tt,r.tt=e,i.tt=e,i.ee=1,{parentNode:r,grandParent:i,curNode:e}}else r.ee=0,i===this.Y?this.Y=i.te():i.te(),i.ee=1}return}}ne(e,r,i){if(this.Y===void 0){this.i+=1,this.Y=new this.re(e,r),this.Y.ee=0,this.Y.tt=this.h,this.h.tt=this.Y,this.h.U=this.Y,this.h.W=this.Y;return}let n,o=this.h.U,s=this.v(o.u,e);if(s===0){o.l=r;return}else if(s>0)o.U=new this.re(e,r),o.U.tt=o,n=o.U,this.h.U=n;else{let a=this.h.W,l=this.v(a.u,e);if(l===0){a.l=r;return}else if(l<0)a.W=new this.re(e,r),a.W.tt=a,n=a.W,this.h.W=n;else{if(i!==void 0){let c=i.o;if(c!==this.h){let h=this.v(c.u,e);if(h===0){c.l=r;return}else if(h>0){let d=c.L(),g=this.v(d.u,e);if(g===0){d.l=r;return}else g<0&&(n=new this.re(e,r),d.W===void 0?(d.W=n,n.tt=d):(c.U=n,n.tt=c))}}}if(n===void 0)for(n=this.Y;;){let c=this.v(n.u,e);if(c>0){if(n.U===void 0){n.U=new this.re(e,r),n.U.tt=n,n=n.U;break}n=n.U}else if(c<0){if(n.W===void 0){n.W=new this.re(e,r),n.W.tt=n,n=n.W;break}n=n.W}else{n.l=r;return}}}}return this.i+=1,n}I(e,r){for(;e;){let i=this.v(e.u,r);if(i<0)e=e.W;else if(i>0)e=e.U;else return e}return e||this.h}clear(){this.i=0,this.Y=void 0,this.h.tt=void 0,this.h.U=this.h.W=void 0}updateKeyByIterator(e,r){let i=e.o;if(i===this.h&&(0,lp.throwIteratorAccessError)(),this.i===1)return i.u=r,!0;if(i===this.h.U)return this.v(i.B().u,r)>0?(i.u=r,!0):!1;if(i===this.h.W)return this.v(i.L().u,r)<0?(i.u=r,!0):!1;let n=i.L().u;if(this.v(n,r)>=0)return!1;let o=i.B().u;return this.v(o,r)<=0?!1:(i.u=r,!0)}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let r=0,i=this;return this.oe(this.Y,function(n){return e===r?(i.V(n),!0):(r+=1,!1)}),this.i}eraseElementByKey(e){if(this.i===0)return!1;let r=this.I(this.Y,e);return r===this.h?!1:(this.V(r),!0)}eraseElementByIterator(e){let r=e.o;r===this.h&&(0,lp.throwIteratorAccessError)();let i=r.W===void 0;return e.iteratorType===0?i&&e.next():(!i||r.U===void 0)&&e.next(),this.V(r),e}forEach(e){let r=0;for(let i of this)e(i,r++,this)}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let r,i=0;for(let n of this){if(i===e){r=n;break}i+=1}return r}getHeight(){if(this.i===0)return 0;let e=function(r){return r?Math.max(e(r.U),e(r.W))+1:0};return e(this.Y)}},W1=va;Kn.default=W1});var Aa=M(Qn=>{"use strict";_();v();m();Object.defineProperty(Qn,"t",{value:!0});Qn.default=void 0;var $1=lt(),Gn=ut(),Sa=class extends $1.ContainerIterator{constructor(e,r,i){super(i),this.o=e,this.h=r,this.iteratorType===0?(this.pre=function(){return this.o===this.h.U&&(0,Gn.throwIteratorAccessError)(),this.o=this.o.L(),this},this.next=function(){return this.o===this.h&&(0,Gn.throwIteratorAccessError)(),this.o=this.o.B(),this}):(this.pre=function(){return this.o===this.h.W&&(0,Gn.throwIteratorAccessError)(),this.o=this.o.B(),this},this.next=function(){return this.o===this.h&&(0,Gn.throwIteratorAccessError)(),this.o=this.o.L(),this})}get index(){let e=this.o,r=this.h.tt;if(e===this.h)return r?r.rt-1:0;let i=0;for(e.U&&(i+=e.U.rt);e!==r;){let n=e.tt;e===n.W&&(i+=1,n.U&&(i+=n.U.rt)),e=n}return i}},H1=Sa;Qn.default=H1});var fp=M(Yn=>{"use strict";_();v();m();Object.defineProperty(Yn,"t",{value:!0});Yn.default=void 0;var V1=up(Ea()),z1=up(Aa()),K1=ut();function up(t){return t&&t.t?t:{default:t}}var Ke=class t extends z1.default{constructor(e,r,i,n){super(e,r,n),this.container=i}get pointer(){return this.o===this.h&&(0,K1.throwIteratorAccessError)(),this.o.u}copy(){return new t(this.o,this.h,this.container,this.iteratorType)}},Ia=class extends V1.default{constructor(e=[],r,i){super(r,i);let n=this;e.forEach(function(o){n.insert(o)})}*K(e){e!==void 0&&(yield*this.K(e.U),yield e.u,yield*this.K(e.W))}begin(){return new Ke(this.h.U||this.h,this.h,this)}end(){return new Ke(this.h,this.h,this)}rBegin(){return new Ke(this.h.W||this.h,this.h,this,1)}rEnd(){return new Ke(this.h,this.h,this,1)}front(){return this.h.U?this.h.U.u:void 0}back(){return this.h.W?this.h.W.u:void 0}insert(e,r){return this.M(e,void 0,r)}find(e){let r=this.I(this.Y,e);return new Ke(r,this.h,this)}lowerBound(e){let r=this.X(this.Y,e);return new Ke(r,this.h,this)}upperBound(e){let r=this.Z(this.Y,e);return new Ke(r,this.h,this)}reverseLowerBound(e){let r=this.$(this.Y,e);return new Ke(r,this.h,this)}reverseUpperBound(e){let r=this.rr(this.Y,e);return new Ke(r,this.h,this)}union(e){let r=this;return e.forEach(function(i){r.insert(i)}),this.i}[Symbol.iterator](){return this.K(this.Y)}},G1=Ia;Yn.default=G1});var hp=M(Jn=>{"use strict";_();v();m();Object.defineProperty(Jn,"t",{value:!0});Jn.default=void 0;var Q1=cp(Ea()),Y1=cp(Aa()),J1=ut();function cp(t){return t&&t.t?t:{default:t}}var Ge=class t extends Y1.default{constructor(e,r,i,n){super(e,r,n),this.container=i}get pointer(){this.o===this.h&&(0,J1.throwIteratorAccessError)();let e=this;return new Proxy([],{get(r,i){if(i==="0")return e.o.u;if(i==="1")return e.o.l},set(r,i,n){if(i!=="1")throw new TypeError("props must be 1");return e.o.l=n,!0}})}copy(){return new t(this.o,this.h,this.container,this.iteratorType)}},Ta=class extends Q1.default{constructor(e=[],r,i){super(r,i);let n=this;e.forEach(function(o){n.setElement(o[0],o[1])})}*K(e){e!==void 0&&(yield*this.K(e.U),yield[e.u,e.l],yield*this.K(e.W))}begin(){return new Ge(this.h.U||this.h,this.h,this)}end(){return new Ge(this.h,this.h,this)}rBegin(){return new Ge(this.h.W||this.h,this.h,this,1)}rEnd(){return new Ge(this.h,this.h,this,1)}front(){if(this.i===0)return;let e=this.h.U;return[e.u,e.l]}back(){if(this.i===0)return;let e=this.h.W;return[e.u,e.l]}lowerBound(e){let r=this.X(this.Y,e);return new Ge(r,this.h,this)}upperBound(e){let r=this.Z(this.Y,e);return new Ge(r,this.h,this)}reverseLowerBound(e){let r=this.$(this.Y,e);return new Ge(r,this.h,this)}reverseUpperBound(e){let r=this.rr(this.Y,e);return new Ge(r,this.h,this)}setElement(e,r,i){return this.M(e,r,i)}find(e){let r=this.I(this.Y,e);return new Ge(r,this.h,this)}getElementByKey(e){return this.I(this.Y,e).l}union(e){let r=this;return e.forEach(function(i){r.setElement(i[0],i[1])}),this.i}[Symbol.iterator](){return this.K(this.Y)}},X1=Ta;Jn.default=X1});var Ca=M(Ra=>{"use strict";_();v();m();Object.defineProperty(Ra,"t",{value:!0});Ra.default=Z1;function Z1(t){let e=typeof t;return e==="object"&&t!==null||e==="function"}});var Oa=M(ti=>{"use strict";_();v();m();Object.defineProperty(ti,"t",{value:!0});ti.HashContainerIterator=ti.HashContainer=void 0;var dp=lt(),Ba=ev(Ca()),Ci=ut();function ev(t){return t&&t.t?t:{default:t}}var Pa=class extends dp.ContainerIterator{constructor(e,r,i){super(i),this.o=e,this.h=r,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,Ci.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,Ci.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,Ci.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,Ci.throwIteratorAccessError)(),this.o=this.o.L,this})}};ti.HashContainerIterator=Pa;var ka=class extends dp.Container{constructor(){super(),this.H=[],this.g={},this.HASH_TAG=Symbol("@@HASH_TAG"),Object.setPrototypeOf(this.g,null),this.h={},this.h.L=this.h.B=this.p=this._=this.h}V(e){let{L:r,B:i}=e;r.B=i,i.L=r,e===this.p&&(this.p=i),e===this._&&(this._=r),this.i-=1}M(e,r,i){i===void 0&&(i=(0,Ba.default)(e));let n;if(i){let o=e[this.HASH_TAG];if(o!==void 0)return this.H[o].l=r,this.i;Object.defineProperty(e,this.HASH_TAG,{value:this.H.length,configurable:!0}),n={u:e,l:r,L:this._,B:this.h},this.H.push(n)}else{let o=this.g[e];if(o)return o.l=r,this.i;n={u:e,l:r,L:this._,B:this.h},this.g[e]=n}return this.i===0?(this.p=n,this.h.B=n):this._.B=n,this._=n,this.h.L=n,++this.i}I(e,r){if(r===void 0&&(r=(0,Ba.default)(e)),r){let i=e[this.HASH_TAG];return i===void 0?this.h:this.H[i]}else return this.g[e]||this.h}clear(){let e=this.HASH_TAG;this.H.forEach(function(r){delete r.u[e]}),this.H=[],this.g={},Object.setPrototypeOf(this.g,null),this.i=0,this.p=this._=this.h.L=this.h.B=this.h}eraseElementByKey(e,r){let i;if(r===void 0&&(r=(0,Ba.default)(e)),r){let n=e[this.HASH_TAG];if(n===void 0)return!1;delete e[this.HASH_TAG],i=this.H[n],delete this.H[n]}else{if(i=this.g[e],i===void 0)return!1;delete this.g[e]}return this.V(i),!0}eraseElementByIterator(e){let r=e.o;return r===this.h&&(0,Ci.throwIteratorAccessError)(),this.V(r),e.next()}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let r=this.p;for(;e--;)r=r.B;return this.V(r),this.i}};ti.HashContainer=ka});var gp=M(Xn=>{"use strict";_();v();m();Object.defineProperty(Xn,"t",{value:!0});Xn.default=void 0;var pp=Oa(),tv=ut(),Sr=class t extends pp.HashContainerIterator{constructor(e,r,i,n){super(e,r,n),this.container=i}get pointer(){return this.o===this.h&&(0,tv.throwIteratorAccessError)(),this.o.u}copy(){return new t(this.o,this.h,this.container,this.iteratorType)}},xa=class extends pp.HashContainer{constructor(e=[]){super();let r=this;e.forEach(function(i){r.insert(i)})}begin(){return new Sr(this.p,this.h,this)}end(){return new Sr(this.h,this.h,this)}rBegin(){return new Sr(this._,this.h,this,1)}rEnd(){return new Sr(this.h,this.h,this,1)}front(){return this.p.u}back(){return this._.u}insert(e,r){return this.M(e,void 0,r)}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let r=this.p;for(;e--;)r=r.B;return r.u}find(e,r){let i=this.I(e,r);return new Sr(i,this.h,this)}forEach(e){let r=0,i=this.p;for(;i!==this.h;)e(i.u,r++,this),i=i.B}[Symbol.iterator](){return function*(){let e=this.p;for(;e!==this.h;)yield e.u,e=e.B}.bind(this)()}},rv=xa;Xn.default=rv});var bp=M(Zn=>{"use strict";_();v();m();Object.defineProperty(Zn,"t",{value:!0});Zn.default=void 0;var yp=Oa(),iv=sv(Ca()),nv=ut();function sv(t){return t&&t.t?t:{default:t}}var Ar=class t extends yp.HashContainerIterator{constructor(e,r,i,n){super(e,r,n),this.container=i}get pointer(){this.o===this.h&&(0,nv.throwIteratorAccessError)();let e=this;return new Proxy([],{get(r,i){if(i==="0")return e.o.u;if(i==="1")return e.o.l},set(r,i,n){if(i!=="1")throw new TypeError("props must be 1");return e.o.l=n,!0}})}copy(){return new t(this.o,this.h,this.container,this.iteratorType)}},Ma=class extends yp.HashContainer{constructor(e=[]){super();let r=this;e.forEach(function(i){r.setElement(i[0],i[1])})}begin(){return new Ar(this.p,this.h,this)}end(){return new Ar(this.h,this.h,this)}rBegin(){return new Ar(this._,this.h,this,1)}rEnd(){return new Ar(this.h,this.h,this,1)}front(){if(this.i!==0)return[this.p.u,this.p.l]}back(){if(this.i!==0)return[this._.u,this._.l]}setElement(e,r,i){return this.M(e,r,i)}getElementByKey(e,r){if(r===void 0&&(r=(0,iv.default)(e)),r){let n=e[this.HASH_TAG];return n!==void 0?this.H[n].l:void 0}let i=this.g[e];return i?i.l:void 0}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let r=this.p;for(;e--;)r=r.B;return[r.u,r.l]}find(e,r){let i=this.I(e,r);return new Ar(i,this.h,this)}forEach(e){let r=0,i=this.p;for(;i!==this.h;)e([i.u,i.l],r++,this),i=i.B}[Symbol.iterator](){return function*(){let e=this.p;for(;e!==this.h;)yield[e.u,e.l],e=e.B}.bind(this)()}},ov=Ma;Zn.default=ov});var wp=M(je=>{"use strict";_();v();m();Object.defineProperty(je,"t",{value:!0});Object.defineProperty(je,"Deque",{enumerable:!0,get:function(){return hv.default}});Object.defineProperty(je,"HashMap",{enumerable:!0,get:function(){return yv.default}});Object.defineProperty(je,"HashSet",{enumerable:!0,get:function(){return gv.default}});Object.defineProperty(je,"LinkList",{enumerable:!0,get:function(){return cv.default}});Object.defineProperty(je,"OrderedMap",{enumerable:!0,get:function(){return pv.default}});Object.defineProperty(je,"OrderedSet",{enumerable:!0,get:function(){return dv.default}});Object.defineProperty(je,"PriorityQueue",{enumerable:!0,get:function(){return uv.default}});Object.defineProperty(je,"Queue",{enumerable:!0,get:function(){return lv.default}});Object.defineProperty(je,"Stack",{enumerable:!0,get:function(){return av.default}});Object.defineProperty(je,"Vector",{enumerable:!0,get:function(){return fv.default}});var av=ft(ep()),lv=ft(tp()),uv=ft(rp()),fv=ft(ip()),cv=ft(np()),hv=ft(sp()),dv=ft(fp()),pv=ft(hp()),gv=ft(gp()),yv=ft(bp());function ft(t){return t&&t.t?t:{default:t}}});var mp=M((SN,_p)=>{"use strict";_();v();m();var bv=wp().OrderedSet,ct=ot()("number-allocator:trace"),wv=ot()("number-allocator:error");function Re(t,e){this.low=t,this.high=e}Re.prototype.equals=function(t){return this.low===t.low&&this.high===t.high};Re.prototype.compare=function(t){return this.low<t.low&&this.high<t.low?-1:t.low<this.low&&t.high<this.low?1:0};function ht(t,e){if(!(this instanceof ht))return new ht(t,e);this.min=t,this.max=e,this.ss=new bv([],(r,i)=>r.compare(i)),ct("Create"),this.clear()}ht.prototype.firstVacant=function(){return this.ss.size()===0?null:this.ss.front().low};ht.prototype.alloc=function(){if(this.ss.size()===0)return ct("alloc():empty"),null;let t=this.ss.begin(),e=t.pointer.low,r=t.pointer.high,i=e;return i+1<=r?this.ss.updateKeyByIterator(t,new Re(e+1,r)):this.ss.eraseElementByPos(0),ct("alloc():"+i),i};ht.prototype.use=function(t){let e=new Re(t,t),r=this.ss.lowerBound(e);if(!r.equals(this.ss.end())){let i=r.pointer.low,n=r.pointer.high;return r.pointer.equals(e)?(this.ss.eraseElementByIterator(r),ct("use():"+t),!0):i>t?!1:i===t?(this.ss.updateKeyByIterator(r,new Re(i+1,n)),ct("use():"+t),!0):n===t?(this.ss.updateKeyByIterator(r,new Re(i,n-1)),ct("use():"+t),!0):(this.ss.updateKeyByIterator(r,new Re(t+1,n)),this.ss.insert(new Re(i,t-1)),ct("use():"+t),!0)}return ct("use():failed"),!1};ht.prototype.free=function(t){if(t<this.min||t>this.max){wv("free():"+t+" is out of range");return}let e=new Re(t,t),r=this.ss.upperBound(e);if(r.equals(this.ss.end())){if(r.equals(this.ss.begin())){this.ss.insert(e);return}r.pre();let i=r.pointer.high;r.pointer.high+1===t?this.ss.updateKeyByIterator(r,new Re(i,t)):this.ss.insert(e)}else if(r.equals(this.ss.begin()))if(t+1===r.pointer.low){let i=r.pointer.high;this.ss.updateKeyByIterator(r,new Re(t,i))}else this.ss.insert(e);else{let i=r.pointer.low,n=r.pointer.high;r.pre();let o=r.pointer.low;r.pointer.high+1===t?t+1===i?(this.ss.eraseElementByIterator(r),this.ss.updateKeyByIterator(r,new Re(o,n))):this.ss.updateKeyByIterator(r,new Re(o,t)):t+1===i?(this.ss.eraseElementByIterator(r.next()),this.ss.insert(new Re(t,n))):this.ss.insert(e)}ct("free():"+t)};ht.prototype.clear=function(){ct("clear()"),this.ss.clear(),this.ss.insert(new Re(this.min,this.max))};ht.prototype.intervalCount=function(){return this.ss.size()};ht.prototype.dump=function(){console.log("length:"+this.ss.size());for(let t of this.ss)console.log(t)};_p.exports=ht});var La=M((xN,vp)=>{_();v();m();var _v=mp();vp.exports.NumberAllocator=_v});var Ep=M(Na=>{"use strict";_();v();m();Object.defineProperty(Na,"__esModule",{value:!0});var mv=Zd(),vv=La(),Ua=class{constructor(e){e>0&&(this.aliasToTopic=new mv.LRUCache({max:e}),this.topicToAlias={},this.numberAllocator=new vv.NumberAllocator(1,e),this.max=e,this.length=0)}put(e,r){if(r===0||r>this.max)return!1;let i=this.aliasToTopic.get(r);return i&&delete this.topicToAlias[i],this.aliasToTopic.set(r,e),this.topicToAlias[e]=r,this.numberAllocator.use(r),this.length=this.aliasToTopic.size,!0}getTopicByAlias(e){return this.aliasToTopic.get(e)}getAliasByTopic(e){let r=this.topicToAlias[e];return typeof r<"u"&&this.aliasToTopic.get(r),r}clear(){this.aliasToTopic.clear(),this.topicToAlias={},this.numberAllocator.clear(),this.length=0}getLruAlias(){let e=this.numberAllocator.firstVacant();return e||[...this.aliasToTopic.keys()][this.aliasToTopic.size-1]}};Na.default=Ua});var Sp=M(Bi=>{"use strict";_();v();m();var Ev=Bi&&Bi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Bi,"__esModule",{value:!0});var Sv=Ti(),Av=Ev(Ep()),Iv=Xr(),Tv=(t,e)=>{t.log("_handleConnack");let{options:r}=t,n=r.protocolVersion===5?e.reasonCode:e.returnCode;if(clearTimeout(t.connackTimer),delete t.topicAliasSend,e.properties){if(e.properties.topicAliasMaximum){if(e.properties.topicAliasMaximum>65535){t.emit("error",new Error("topicAliasMaximum from broker is out of range"));return}e.properties.topicAliasMaximum>0&&(t.topicAliasSend=new Av.default(e.properties.topicAliasMaximum))}e.properties.serverKeepAlive&&r.keepalive&&(r.keepalive=e.properties.serverKeepAlive),e.properties.maximumPacketSize&&(r.properties||(r.properties={}),r.properties.maximumPacketSize=e.properties.maximumPacketSize)}if(n===0)t.reconnecting=!1,t._onConnect(e);else if(n>0){let o=new Iv.ErrorWithReasonCode(`Connection refused: ${Sv.ReasonCodes[n]}`,n);t.emit("error",o)}};Bi.default=Tv});var Ap=M(qa=>{"use strict";_();v();m();Object.defineProperty(qa,"__esModule",{value:!0});var Rv=(t,e,r)=>{t.log("handling pubrel packet");let i=typeof r<"u"?r:t.noop,{messageId:n}=e,o={cmd:"pubcomp",messageId:n};t.incomingStore.get(e,(s,a)=>{s?t._sendPacket(o,i):(t.emit("message",a.topic,a.payload,a),t.handleMessage(a,l=>{if(l)return i(l);t.incomingStore.del(a,t.noop),t._sendPacket(o,i)}))})};qa.default=Rv});var Ip=M(Pi=>{"use strict";_();v();m();var ki=Pi&&Pi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Pi,"__esModule",{value:!0});var Cv=ki(Vd()),Bv=ki(Gd()),Pv=ki(Sp()),kv=ki(Ti()),Ov=ki(Ap()),xv=(t,e,r)=>{let{options:i}=t;if(i.protocolVersion===5&&i.properties&&i.properties.maximumPacketSize&&i.properties.maximumPacketSize<e.length)return t.emit("error",new Error(`exceeding packets size ${e.cmd}`)),t.end({reasonCode:149,properties:{reasonString:"Maximum packet size was exceeded"}}),t;switch(t.log("_handlePacket :: emitting packetreceive"),t.emit("packetreceive",e),e.cmd){case"publish":(0,Cv.default)(t,e,r);break;case"puback":case"pubrec":case"pubcomp":case"suback":case"unsuback":t.reschedulePing(),(0,kv.default)(t,e),r();break;case"pubrel":t.reschedulePing(),(0,Ov.default)(t,e,r);break;case"connack":(0,Pv.default)(t,e),r();break;case"auth":t.reschedulePing(),(0,Bv.default)(t,e),r();break;case"pingresp":t.log("_handlePacket :: received pingresp"),t.reschedulePing(!0),r();break;case"disconnect":t.emit("disconnect",e),r();break;default:t.log("_handlePacket :: unknown command"),r();break}};Pi.default=xv});var Tp=M(ri=>{"use strict";_();v();m();var Mv=ri&&ri.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ri,"__esModule",{value:!0});ri.TypedEventEmitter=void 0;var Lv=Mv((sr(),X(nr))),Uv=Xr(),es=class{};ri.TypedEventEmitter=es;(0,Uv.applyMixin)(es,Lv.default)});var Oi=M(Ir=>{"use strict";_();v();m();Object.defineProperty(Ir,"__esModule",{value:!0});Ir.isReactNativeBrowser=Ir.isWebWorker=void 0;var Nv=()=>{var t;return typeof window<"u"?typeof navigator<"u"&&((t=navigator.userAgent)===null||t===void 0?void 0:t.toLowerCase().indexOf(" electron/"))>-1&&(!(C===null||C===void 0)&&C.versions)?!Object.prototype.hasOwnProperty.call(C.versions,"electron"):typeof window.document<"u":!1},Rp=()=>{var t,e;return!!(typeof self=="object"&&(!((e=(t=self?.constructor)===null||t===void 0?void 0:t.name)===null||e===void 0)&&e.includes("WorkerGlobalScope")))},Cp=()=>typeof navigator<"u"&&navigator.product==="ReactNative",qv=Nv()||Rp()||Cp();Ir.isWebWorker=Rp();Ir.isReactNativeBrowser=Cp();Ir.default=qv});var Pp=M((ts,Bp)=>{_();v();m();(function(t,e){typeof ts=="object"&&typeof Bp<"u"?e(ts):typeof define=="function"&&__webpack_require__.amdO?define(["exports"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.fastUniqueNumbers={}))})(ts,function(t){"use strict";var e=function(g){return function(y){var w=g(y);return y.add(w),w}},r=function(g){return function(y,w){return g.set(y,w),w}},i=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,n=536870912,o=n*2,s=function(g,y){return function(w){var E=y.get(w),S=E===void 0?w.size:E<o?E+1:0;if(!w.has(S))return g(w,S);if(w.size<n){for(;w.has(S);)S=Math.floor(Math.random()*o);return g(w,S)}if(w.size>i)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;w.has(S);)S=Math.floor(Math.random()*i);return g(w,S)}},a=new WeakMap,l=r(a),c=s(l,a),h=e(c);t.addUniqueNumber=h,t.generateUniqueNumber=c})});var Op=M((rs,kp)=>{_();v();m();(function(t,e){typeof rs=="object"&&typeof kp<"u"?e(rs,Pp()):typeof define=="function"&&__webpack_require__.amdO?define(["exports","fast-unique-numbers"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.workerTimersBroker={},t.fastUniqueNumbers))})(rs,function(t,e){"use strict";var r=function(s){return s.method!==void 0&&s.method==="call"},i=function(s){return s.error===null&&typeof s.id=="number"},n=function(s){var a=new Map([[0,function(){}]]),l=new Map([[0,function(){}]]),c=new Map,h=new Worker(s);h.addEventListener("message",function(E){var S=E.data;if(r(S)){var I=S.params,B=I.timerId,R=I.timerType;if(R==="interval"){var U=a.get(B);if(typeof U=="number"){var N=c.get(U);if(N===void 0||N.timerId!==B||N.timerType!==R)throw new Error("The timer is in an undefined state.")}else if(typeof U<"u")U();else throw new Error("The timer is in an undefined state.")}else if(R==="timeout"){var W=l.get(B);if(typeof W=="number"){var K=c.get(W);if(K===void 0||K.timerId!==B||K.timerType!==R)throw new Error("The timer is in an undefined state.")}else if(typeof W<"u")W(),l.delete(B);else throw new Error("The timer is in an undefined state.")}}else if(i(S)){var z=S.id,Q=c.get(z);if(Q===void 0)throw new Error("The timer is in an undefined state.");var pe=Q.timerId,Yt=Q.timerType;c.delete(z),Yt==="interval"?a.delete(pe):l.delete(pe)}else{var ge=S.error.message;throw new Error(ge)}});var d=function(S){var I=e.generateUniqueNumber(c);c.set(I,{timerId:S,timerType:"interval"}),a.set(S,I),h.postMessage({id:I,method:"clear",params:{timerId:S,timerType:"interval"}})},g=function(S){var I=e.generateUniqueNumber(c);c.set(I,{timerId:S,timerType:"timeout"}),l.set(S,I),h.postMessage({id:I,method:"clear",params:{timerId:S,timerType:"timeout"}})},y=function(S){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,B=e.generateUniqueNumber(a);return a.set(B,function(){S(),typeof a.get(B)=="function"&&h.postMessage({id:null,method:"set",params:{delay:I,now:performance.now(),timerId:B,timerType:"interval"}})}),h.postMessage({id:null,method:"set",params:{delay:I,now:performance.now(),timerId:B,timerType:"interval"}}),B},w=function(S){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,B=e.generateUniqueNumber(l);return l.set(B,S),h.postMessage({id:null,method:"set",params:{delay:I,now:performance.now(),timerId:B,timerType:"timeout"}}),B};return{clearInterval:d,clearTimeout:g,setInterval:y,setTimeout:w}};t.load=n})});var Mp=M((is,xp)=>{_();v();m();(function(t,e){typeof is=="object"&&typeof xp<"u"?e(is,Op()):typeof define=="function"&&__webpack_require__.amdO?define(["exports","worker-timers-broker"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.workerTimers={},t.workerTimersBroker))})(is,function(t,e){"use strict";var r=function(h,d){var g=null;return function(){if(g!==null)return g;var y=new Blob([d],{type:"application/javascript; charset=utf-8"}),w=URL.createObjectURL(y);return g=h(w),setTimeout(function(){return URL.revokeObjectURL(w)}),g}},i=`(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`,n=r(e.load,i),o=function(h){return n().clearInterval(h)},s=function(h){return n().clearTimeout(h)},a=function(){var h;return(h=n()).setInterval.apply(h,arguments)},l=function(){var h;return(h=n()).setTimeout.apply(h,arguments)};t.clearInterval=o,t.clearTimeout=s,t.setInterval=a,t.setTimeout=l})});var qp=M(Ct=>{"use strict";_();v();m();var Dv=Ct&&Ct.__createBinding||(Object.create?function(t,e,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,n)}:function(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}),jv=Ct&&Ct.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),Fv=Ct&&Ct.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&Dv(e,t,r);return jv(e,t),e};Object.defineProperty(Ct,"__esModule",{value:!0});var Da=Fv(Oi()),Lp=Mp(),Up={set:Lp.setInterval,clear:Lp.clearInterval},Np={set:(t,e)=>setInterval(t,e),clear:t=>clearInterval(t)},Wv=t=>{switch(t){case"native":return Np;case"worker":return Up;case"auto":default:return Da.default&&!Da.isWebWorker&&!Da.isReactNativeBrowser?Up:Np}};Ct.default=Wv});var Fa=M(xi=>{"use strict";_();v();m();var $v=xi&&xi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(xi,"__esModule",{value:!0});var Hv=$v(qp()),ja=class{get keepaliveTimeoutTimestamp(){return this._keepaliveTimeoutTimestamp}get intervalEvery(){return this._intervalEvery}get keepalive(){return this._keepalive}constructor(e,r){this.destroyed=!1,this.client=e,this.timer=typeof r=="object"&&"set"in r&&"clear"in r?r:(0,Hv.default)(r),this.setKeepalive(e.options.keepalive)}clear(){this.timerId&&(this.timer.clear(this.timerId),this.timerId=null)}setKeepalive(e){if(e*=1e3,isNaN(e)||e<=0||e>2147483647)throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${e}`);this._keepalive=e,this.reschedule(),this.client.log(`KeepaliveManager: set keepalive to ${e}ms`)}destroy(){this.clear(),this.destroyed=!0}reschedule(){if(this.destroyed)return;this.clear(),this.counter=0;let e=Math.ceil(this._keepalive*1.5);this._keepaliveTimeoutTimestamp=Date.now()+e,this._intervalEvery=Math.ceil(this._keepalive/2),this.timerId=this.timer.set(()=>{this.destroyed||(this.counter+=1,this.counter===2?this.client.sendPing():this.counter>2&&this.client.onKeepaliveTimeout())},this._intervalEvery)}};xi.default=ja});var os=M(Qe=>{"use strict";_();v();m();var Vv=Qe&&Qe.__createBinding||(Object.create?function(t,e,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,n)}:function(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}),zv=Qe&&Qe.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),$p=Qe&&Qe.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&Vv(e,t,r);return zv(e,t),e},zt=Qe&&Qe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Qe,"__esModule",{value:!0});var Kv=zt(Gu()),Wa=zt(Nd()),Gv=zt(Xo()),Qv=jt(),Dp=zt(Fd()),jp=$p($d()),Yv=zt(ot()),ii=zt(ta()),Jv=zt(Ip()),ns=Xr(),Xv=Tp(),Zv=zt(Fa()),Fp=$p(Oi()),$a=globalThis.setImmediate||((...t)=>{let e=t.shift();(0,ns.nextTick)(()=>{e(...t)})}),Wp={keepalive:60,reschedulePings:!0,protocolId:"MQTT",protocolVersion:4,reconnectPeriod:1e3,connectTimeout:30*1e3,clean:!0,resubscribe:!0,writeCache:!0,timerVariant:"auto"},ss=class t extends Xv.TypedEventEmitter{static defaultId(){return`mqttjs_${Math.random().toString(16).substr(2,8)}`}constructor(e,r){super(),this.options=r||{};for(let i in Wp)typeof this.options[i]>"u"?this.options[i]=Wp[i]:this.options[i]=r[i];this.log=this.options.log||(0,Yv.default)("mqttjs:client"),this.noop=this._noop.bind(this),this.log("MqttClient :: version:",t.VERSION),Fp.isWebWorker?this.log("MqttClient :: environment","webworker"):this.log("MqttClient :: environment",Fp.default?"browser":"node"),this.log("MqttClient :: options.protocol",r.protocol),this.log("MqttClient :: options.protocolVersion",r.protocolVersion),this.log("MqttClient :: options.username",r.username),this.log("MqttClient :: options.keepalive",r.keepalive),this.log("MqttClient :: options.reconnectPeriod",r.reconnectPeriod),this.log("MqttClient :: options.rejectUnauthorized",r.rejectUnauthorized),this.log("MqttClient :: options.properties.topicAliasMaximum",r.properties?r.properties.topicAliasMaximum:void 0),this.options.clientId=typeof r.clientId=="string"?r.clientId:t.defaultId(),this.log("MqttClient :: clientId",this.options.clientId),this.options.customHandleAcks=r.protocolVersion===5&&r.customHandleAcks?r.customHandleAcks:(...i)=>{i[3](null,0)},this.options.writeCache||(Wa.default.writeToStream.cacheNumbers=!1),this.streamBuilder=e,this.messageIdProvider=typeof this.options.messageIdProvider>"u"?new Gv.default:this.options.messageIdProvider,this.outgoingStore=r.outgoingStore||new ii.default,this.incomingStore=r.incomingStore||new ii.default,this.queueQoSZero=r.queueQoSZero===void 0?!0:r.queueQoSZero,this._resubscribeTopics={},this.messageIdToTopic={},this.keepaliveManager=null,this.connected=!1,this.disconnecting=!1,this.reconnecting=!1,this.queue=[],this.connackTimer=null,this.reconnectTimer=null,this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={},this._storeProcessingQueue=[],this.outgoing={},this._firstConnection=!0,r.properties&&r.properties.topicAliasMaximum>0&&(r.properties.topicAliasMaximum>65535?this.log("MqttClient :: options.properties.topicAliasMaximum is out of range"):this.topicAliasRecv=new Kv.default(r.properties.topicAliasMaximum)),this.on("connect",()=>{let{queue:i}=this,n=()=>{let o=i.shift();this.log("deliver :: entry %o",o);let s=null;if(!o){this._resubscribe();return}s=o.packet,this.log("deliver :: call _sendPacket for %o",s);let a=!0;s.messageId&&s.messageId!==0&&(this.messageIdProvider.register(s.messageId)||(a=!1)),a?this._sendPacket(s,l=>{o.cb&&o.cb(l),n()}):(this.log("messageId: %d has already used. The message is skipped and removed.",s.messageId),n())};this.log("connect :: sending queued packets"),n()}),this.on("close",()=>{this.log("close :: connected set to `false`"),this.connected=!1,this.log("close :: clearing connackTimer"),clearTimeout(this.connackTimer),this._destroyKeepaliveManager(),this.topicAliasRecv&&this.topicAliasRecv.clear(),this.log("close :: calling _setupReconnect"),this._setupReconnect()}),this.options.manualConnect||(this.log("MqttClient :: setting up stream"),this.connect())}handleAuth(e,r){r()}handleMessage(e,r){r()}_nextId(){return this.messageIdProvider.allocate()}getLastMessageId(){return this.messageIdProvider.getLastAllocated()}connect(){var e;let r=new Qv.Writable,i=Wa.default.parser(this.options),n=null,o=[];this.log("connect :: calling method to clear reconnect"),this._clearReconnect(),this.disconnected&&!this.reconnecting&&(this.incomingStore=this.options.incomingStore||new ii.default,this.outgoingStore=this.options.outgoingStore||new ii.default,this.disconnecting=!1,this.disconnected=!1),this.log("connect :: using streamBuilder provided to client to create stream"),this.stream=this.streamBuilder(this),i.on("packet",h=>{this.log("parser :: on packet push to packets array."),o.push(h)});let s=()=>{this.log("work :: getting next packet in queue");let h=o.shift();if(h)this.log("work :: packet pulled from queue"),(0,Jv.default)(this,h,a);else{this.log("work :: no packets in queue");let d=n;n=null,this.log("work :: done flag is %s",!!d),d&&d()}},a=()=>{if(o.length)(0,ns.nextTick)(s);else{let h=n;n=null,h()}};r._write=(h,d,g)=>{n=g,this.log("writable stream :: parsing buffer"),i.parse(h),s()};let l=h=>{this.log("streamErrorHandler :: error",h.message),h.code?(this.log("streamErrorHandler :: emitting error"),this.emit("error",h)):this.noop(h)};this.log("connect :: pipe stream to writable stream"),this.stream.pipe(r),this.stream.on("error",l),this.stream.on("close",()=>{this.log("(%s)stream :: on close",this.options.clientId),this._flushVolatile(),this.log("stream: emit close to MqttClient"),this.emit("close")}),this.log("connect: sending packet `connect`");let c={cmd:"connect",protocolId:this.options.protocolId,protocolVersion:this.options.protocolVersion,clean:this.options.clean,clientId:this.options.clientId,keepalive:this.options.keepalive,username:this.options.username,password:this.options.password,properties:this.options.properties};if(this.options.will&&(c.will=Object.assign(Object.assign({},this.options.will),{payload:(e=this.options.will)===null||e===void 0?void 0:e.payload})),this.topicAliasRecv&&(c.properties||(c.properties={}),this.topicAliasRecv&&(c.properties.topicAliasMaximum=this.topicAliasRecv.max)),this._writePacket(c),i.on("error",this.emit.bind(this,"error")),this.options.properties){if(!this.options.properties.authenticationMethod&&this.options.properties.authenticationData)return this.end(()=>this.emit("error",new Error("Packet has no Authentication Method"))),this;if(this.options.properties.authenticationMethod&&this.options.authPacket&&typeof this.options.authPacket=="object"){let h=Object.assign({cmd:"auth",reasonCode:0},this.options.authPacket);this._writePacket(h)}}return this.stream.setMaxListeners(1e3),clearTimeout(this.connackTimer),this.connackTimer=setTimeout(()=>{this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"),this.emit("error",new Error("connack timeout")),this._cleanUp(!0)},this.options.connectTimeout),this}publish(e,r,i,n){this.log("publish :: message `%s` to topic `%s`",r,e);let{options:o}=this;typeof i=="function"&&(n=i,i=null),i=i||{},i=Object.assign(Object.assign({},{qos:0,retain:!1,dup:!1}),i);let{qos:a,retain:l,dup:c,properties:h,cbStorePut:d}=i;if(this._checkDisconnecting(n))return this;let g=()=>{let y=0;if((a===1||a===2)&&(y=this._nextId(),y===null))return this.log("No messageId left"),!1;let w={cmd:"publish",topic:e,payload:r,qos:a,retain:l,messageId:y,dup:c};switch(o.protocolVersion===5&&(w.properties=h),this.log("publish :: qos",a),a){case 1:case 2:this.outgoing[w.messageId]={volatile:!1,cb:n||this.noop},this.log("MqttClient:publish: packet cmd: %s",w.cmd),this._sendPacket(w,void 0,d);break;default:this.log("MqttClient:publish: packet cmd: %s",w.cmd),this._sendPacket(w,n,d);break}return!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!g())&&this._storeProcessingQueue.push({invoke:g,cbStorePut:i.cbStorePut,callback:n}),this}publishAsync(e,r,i){return new Promise((n,o)=>{this.publish(e,r,i,(s,a)=>{s?o(s):n(a)})})}subscribe(e,r,i){let n=this.options.protocolVersion;typeof r=="function"&&(i=r),i=i||this.noop;let o=!1,s=[];typeof e=="string"?(e=[e],s=e):Array.isArray(e)?s=e:typeof e=="object"&&(o=e.resubscribe,delete e.resubscribe,s=Object.keys(e));let a=jp.validateTopics(s);if(a!==null)return $a(i,new Error(`Invalid topic ${a}`)),this;if(this._checkDisconnecting(i))return this.log("subscribe: discconecting true"),this;let l={qos:0};n===5&&(l.nl=!1,l.rap=!1,l.rh=0),r=Object.assign(Object.assign({},l),r);let c=r.properties,h=[],d=(y,w)=>{if(w=w||r,!Object.prototype.hasOwnProperty.call(this._resubscribeTopics,y)||this._resubscribeTopics[y].qos<w.qos||o){let E={topic:y,qos:w.qos};n===5&&(E.nl=w.nl,E.rap=w.rap,E.rh=w.rh,E.properties=c),this.log("subscribe: pushing topic `%s` and qos `%s` to subs list",E.topic,E.qos),h.push(E)}};if(Array.isArray(e)?e.forEach(y=>{this.log("subscribe: array topic %s",y),d(y)}):Object.keys(e).forEach(y=>{this.log("subscribe: object topic %s, %o",y,e[y]),d(y,e[y])}),!h.length)return i(null,[]),this;let g=()=>{let y=this._nextId();if(y===null)return this.log("No messageId left"),!1;let w={cmd:"subscribe",subscriptions:h,messageId:y};if(c&&(w.properties=c),this.options.resubscribe){this.log("subscribe :: resubscribe true");let E=[];h.forEach(S=>{if(this.options.reconnectPeriod>0){let I={qos:S.qos};n===5&&(I.nl=S.nl||!1,I.rap=S.rap||!1,I.rh=S.rh||0,I.properties=S.properties),this._resubscribeTopics[S.topic]=I,E.push(S.topic)}}),this.messageIdToTopic[w.messageId]=E}return this.outgoing[w.messageId]={volatile:!0,cb(E,S){if(!E){let{granted:I}=S;for(let B=0;B<I.length;B+=1)h[B].qos=I[B]}i(E,h)}},this.log("subscribe :: call _sendPacket"),this._sendPacket(w),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!g())&&this._storeProcessingQueue.push({invoke:g,callback:i}),this}subscribeAsync(e,r){return new Promise((i,n)=>{this.subscribe(e,r,(o,s)=>{o?n(o):i(s)})})}unsubscribe(e,r,i){typeof e=="string"&&(e=[e]),typeof r=="function"&&(i=r),i=i||this.noop;let n=jp.validateTopics(e);if(n!==null)return $a(i,new Error(`Invalid topic ${n}`)),this;if(this._checkDisconnecting(i))return this;let o=()=>{let s=this._nextId();if(s===null)return this.log("No messageId left"),!1;let a={cmd:"unsubscribe",messageId:s,unsubscriptions:[]};return typeof e=="string"?a.unsubscriptions=[e]:Array.isArray(e)&&(a.unsubscriptions=e),this.options.resubscribe&&a.unsubscriptions.forEach(l=>{delete this._resubscribeTopics[l]}),typeof r=="object"&&r.properties&&(a.properties=r.properties),this.outgoing[a.messageId]={volatile:!0,cb:i},this.log("unsubscribe: call _sendPacket"),this._sendPacket(a),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!o())&&this._storeProcessingQueue.push({invoke:o,callback:i}),this}unsubscribeAsync(e,r){return new Promise((i,n)=>{this.unsubscribe(e,r,(o,s)=>{o?n(o):i(s)})})}end(e,r,i){this.log("end :: (%s)",this.options.clientId),(e==null||typeof e!="boolean")&&(i=i||r,r=e,e=!1),typeof r!="object"&&(i=i||r,r=null),this.log("end :: cb? %s",!!i),(!i||typeof i!="function")&&(i=this.noop);let n=()=>{this.log("end :: closeStores: closing incoming and outgoing stores"),this.disconnected=!0,this.incomingStore.close(s=>{this.outgoingStore.close(a=>{if(this.log("end :: closeStores: emitting end"),this.emit("end"),i){let l=s||a;this.log("end :: closeStores: invoking callback with args"),i(l)}})}),this._deferredReconnect?this._deferredReconnect():(this.options.reconnectPeriod===0||this.options.manualConnect)&&(this.disconnecting=!1)},o=()=>{this.log("end :: (%s) :: finish :: calling _cleanUp with force %s",this.options.clientId,e),this._cleanUp(e,()=>{this.log("end :: finish :: calling process.nextTick on closeStores"),(0,ns.nextTick)(n)},r)};return this.disconnecting?(i(),this):(this._clearReconnect(),this.disconnecting=!0,!e&&Object.keys(this.outgoing).length>0?(this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty",this.options.clientId),this.once("outgoingEmpty",setTimeout.bind(null,o,10))):(this.log("end :: (%s) :: immediately calling finish",this.options.clientId),o()),this)}endAsync(e,r){return new Promise((i,n)=>{this.end(e,r,o=>{o?n(o):i()})})}removeOutgoingMessage(e){if(this.outgoing[e]){let{cb:r}=this.outgoing[e];this._removeOutgoingAndStoreMessage(e,()=>{r(new Error("Message removed"))})}return this}reconnect(e){this.log("client reconnect");let r=()=>{e?(this.options.incomingStore=e.incomingStore,this.options.outgoingStore=e.outgoingStore):(this.options.incomingStore=null,this.options.outgoingStore=null),this.incomingStore=this.options.incomingStore||new ii.default,this.outgoingStore=this.options.outgoingStore||new ii.default,this.disconnecting=!1,this.disconnected=!1,this._deferredReconnect=null,this._reconnect()};return this.disconnecting&&!this.disconnected?this._deferredReconnect=r:r(),this}_flushVolatile(){this.outgoing&&(this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"),Object.keys(this.outgoing).forEach(e=>{this.outgoing[e].volatile&&typeof this.outgoing[e].cb=="function"&&(this.outgoing[e].cb(new Error("Connection closed")),delete this.outgoing[e])}))}_flush(){this.outgoing&&(this.log("_flush: queue exists? %b",!!this.outgoing),Object.keys(this.outgoing).forEach(e=>{typeof this.outgoing[e].cb=="function"&&(this.outgoing[e].cb(new Error("Connection closed")),delete this.outgoing[e])}))}_removeTopicAliasAndRecoverTopicName(e){let r;e.properties&&(r=e.properties.topicAlias);let i=e.topic.toString();if(this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o",r,i),i.length===0){if(typeof r>"u")return new Error("Unregistered Topic Alias");if(i=this.topicAliasSend.getTopicByAlias(r),typeof i>"u")return new Error("Unregistered Topic Alias");e.topic=i}r&&delete e.properties.topicAlias}_checkDisconnecting(e){return this.disconnecting&&(e&&e!==this.noop?e(new Error("client disconnecting")):this.emit("error",new Error("client disconnecting"))),this.disconnecting}_reconnect(){this.log("_reconnect: emitting reconnect to client"),this.emit("reconnect"),this.connected?(this.end(()=>{this.connect()}),this.log("client already connected. disconnecting first.")):(this.log("_reconnect: calling connect"),this.connect())}_setupReconnect(){!this.disconnecting&&!this.reconnectTimer&&this.options.reconnectPeriod>0?(this.reconnecting||(this.log("_setupReconnect :: emit `offline` state"),this.emit("offline"),this.log("_setupReconnect :: set `reconnecting` to `true`"),this.reconnecting=!0),this.log("_setupReconnect :: setting reconnectTimer for %d ms",this.options.reconnectPeriod),this.reconnectTimer=setInterval(()=>{this.log("reconnectTimer :: reconnect triggered!"),this._reconnect()},this.options.reconnectPeriod)):this.log("_setupReconnect :: doing nothing...")}_clearReconnect(){this.log("_clearReconnect : clearing reconnect timer"),this.reconnectTimer&&(clearInterval(this.reconnectTimer),this.reconnectTimer=null)}_cleanUp(e,r,i={}){if(r&&(this.log("_cleanUp :: done callback provided for on stream close"),this.stream.on("close",r)),this.log("_cleanUp :: forced? %s",e),e)this.options.reconnectPeriod===0&&this.options.clean&&this._flush(),this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),this.stream.destroy();else{let n=Object.assign({cmd:"disconnect"},i);this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet",this.options.clientId),this._sendPacket(n,()=>{this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),$a(()=>{this.stream.end(()=>{this.log("_cleanUp :: (%s) :: stream destroyed",this.options.clientId)})})})}!this.disconnecting&&!this.reconnecting&&(this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."),this._clearReconnect(),this._setupReconnect()),this._destroyKeepaliveManager(),r&&!this.connected&&(this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener",this.options.clientId),this.stream.removeListener("close",r),r())}_storeAndSend(e,r,i){this.log("storeAndSend :: store packet with cmd %s to outgoingStore",e.cmd);let n=e,o;if(n.cmd==="publish"&&(n=(0,Dp.default)(e),o=this._removeTopicAliasAndRecoverTopicName(n),o))return r&&r(o);this.outgoingStore.put(n,s=>{if(s)return r&&r(s);i(),this._writePacket(e,r)})}_applyTopicAlias(e){if(this.options.protocolVersion===5&&e.cmd==="publish"){let r;e.properties&&(r=e.properties.topicAlias);let i=e.topic.toString();if(this.topicAliasSend)if(r){if(i.length!==0&&(this.log("applyTopicAlias :: register topic: %s - alias: %d",i,r),!this.topicAliasSend.put(i,r)))return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",i,r),new Error("Sending Topic Alias out of range")}else i.length!==0&&(this.options.autoAssignTopicAlias?(r=this.topicAliasSend.getAliasByTopic(i),r?(e.topic="",e.properties=Object.assign(Object.assign({},e.properties),{topicAlias:r}),this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d",i,r)):(r=this.topicAliasSend.getLruAlias(),this.topicAliasSend.put(i,r),e.properties=Object.assign(Object.assign({},e.properties),{topicAlias:r}),this.log("applyTopicAlias :: auto assign topic: %s - alias: %d",i,r))):this.options.autoUseTopicAlias&&(r=this.topicAliasSend.getAliasByTopic(i),r&&(e.topic="",e.properties=Object.assign(Object.assign({},e.properties),{topicAlias:r}),this.log("applyTopicAlias :: auto use topic: %s - alias: %d",i,r))));else if(r)return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",i,r),new Error("Sending Topic Alias out of range")}}_noop(e){this.log("noop ::",e)}_writePacket(e,r){this.log("_writePacket :: packet: %O",e),this.log("_writePacket :: emitting `packetsend`"),this.emit("packetsend",e),this.log("_writePacket :: writing to stream");let i=Wa.default.writeToStream(e,this.stream,this.options);this.log("_writePacket :: writeToStream result %s",i),!i&&r&&r!==this.noop?(this.log("_writePacket :: handle events on `drain` once through callback."),this.stream.once("drain",r)):r&&(this.log("_writePacket :: invoking cb"),r())}_sendPacket(e,r,i,n){this.log("_sendPacket :: (%s) ::  start",this.options.clientId),i=i||this.noop,r=r||this.noop;let o=this._applyTopicAlias(e);if(o){r(o);return}if(!this.connected){if(e.cmd==="auth"){this._writePacket(e,r);return}this.log("_sendPacket :: client not connected. Storing packet offline."),this._storePacket(e,r,i);return}if(n){this._writePacket(e,r);return}switch(e.cmd){case"publish":break;case"pubrel":this._storeAndSend(e,r,i);return;default:this._writePacket(e,r);return}switch(e.qos){case 2:case 1:this._storeAndSend(e,r,i);break;case 0:default:this._writePacket(e,r);break}this.log("_sendPacket :: (%s) ::  end",this.options.clientId)}_storePacket(e,r,i){this.log("_storePacket :: packet: %o",e),this.log("_storePacket :: cb? %s",!!r),i=i||this.noop;let n=e;if(n.cmd==="publish"){n=(0,Dp.default)(e);let s=this._removeTopicAliasAndRecoverTopicName(n);if(s)return r&&r(s)}let o=n.qos||0;o===0&&this.queueQoSZero||n.cmd!=="publish"?this.queue.push({packet:n,cb:r}):o>0?(r=this.outgoing[n.messageId]?this.outgoing[n.messageId].cb:null,this.outgoingStore.put(n,s=>{if(s)return r&&r(s);i()})):r&&r(new Error("No connection to broker"))}_setupKeepaliveManager(){this.log("_setupKeepaliveManager :: keepalive %d (seconds)",this.options.keepalive),!this.keepaliveManager&&this.options.keepalive&&(this.keepaliveManager=new Zv.default(this,this.options.timerVariant))}_destroyKeepaliveManager(){this.keepaliveManager&&(this.log("_destroyKeepaliveManager :: destroying keepalive manager"),this.keepaliveManager.destroy(),this.keepaliveManager=null)}reschedulePing(e=!1){this.keepaliveManager&&this.options.keepalive&&(e||this.options.reschedulePings)&&this._reschedulePing()}_reschedulePing(){this.log("_reschedulePing :: rescheduling ping"),this.keepaliveManager.reschedule()}sendPing(){this.log("_sendPing :: sending pingreq"),this._sendPacket({cmd:"pingreq"})}onKeepaliveTimeout(){this.emit("error",new Error("Keepalive timeout")),this.log("onKeepaliveTimeout :: calling _cleanUp with force true"),this._cleanUp(!0)}_resubscribe(){this.log("_resubscribe");let e=Object.keys(this._resubscribeTopics);if(!this._firstConnection&&(this.options.clean||this.options.protocolVersion>=4&&!this.connackPacket.sessionPresent)&&e.length>0)if(this.options.resubscribe)if(this.options.protocolVersion===5){this.log("_resubscribe: protocolVersion 5");for(let r=0;r<e.length;r++){let i={};i[e[r]]=this._resubscribeTopics[e[r]],i.resubscribe=!0,this.subscribe(i,{properties:i[e[r]].properties})}}else this._resubscribeTopics.resubscribe=!0,this.subscribe(this._resubscribeTopics);else this._resubscribeTopics={};this._firstConnection=!1}_onConnect(e){if(this.disconnected){this.emit("connect",e);return}this.connackPacket=e,this.messageIdProvider.clear(),this._setupKeepaliveManager(),this.connected=!0;let r=()=>{let i=this.outgoingStore.createStream(),n=()=>{i.destroy(),i=null,this._flushStoreProcessingQueue(),o()},o=()=>{this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={}};this.once("close",n),i.on("error",a=>{o(),this._flushStoreProcessingQueue(),this.removeListener("close",n),this.emit("error",a)});let s=()=>{if(!i)return;let a=i.read(1),l;if(!a){i.once("readable",s);return}if(this._storeProcessing=!0,this._packetIdsDuringStoreProcessing[a.messageId]){s();return}!this.disconnecting&&!this.reconnectTimer?(l=this.outgoing[a.messageId]?this.outgoing[a.messageId].cb:null,this.outgoing[a.messageId]={volatile:!1,cb(c,h){l&&l(c,h),s()}},this._packetIdsDuringStoreProcessing[a.messageId]=!0,this.messageIdProvider.register(a.messageId)?this._sendPacket(a,void 0,void 0,!0):this.log("messageId: %d has already used.",a.messageId)):i.destroy&&i.destroy()};i.on("end",()=>{let a=!0;for(let l in this._packetIdsDuringStoreProcessing)if(!this._packetIdsDuringStoreProcessing[l]){a=!1;break}this.removeListener("close",n),a?(o(),this._invokeAllStoreProcessingQueue(),this.emit("connect",e)):r()}),s()};r()}_invokeStoreProcessingQueue(){if(!this._storeProcessing&&this._storeProcessingQueue.length>0){let e=this._storeProcessingQueue[0];if(e&&e.invoke())return this._storeProcessingQueue.shift(),!0}return!1}_invokeAllStoreProcessingQueue(){for(;this._invokeStoreProcessingQueue(););}_flushStoreProcessingQueue(){for(let e of this._storeProcessingQueue)e.cbStorePut&&e.cbStorePut(new Error("Connection closed")),e.callback&&e.callback(new Error("Connection closed"));this._storeProcessingQueue.splice(0)}_removeOutgoingAndStoreMessage(e,r){delete this.outgoing[e],this.outgoingStore.del({messageId:e},(i,n)=>{r(i,n),this.messageIdProvider.deallocate(e),this._invokeStoreProcessingQueue()})}};ss.VERSION=ns.MQTTJS_VERSION;Qe.default=ss});var Hp=M(Va=>{"use strict";_();v();m();Object.defineProperty(Va,"__esModule",{value:!0});var eE=La(),Ha=class{constructor(){this.numberAllocator=new eE.NumberAllocator(1,65535)}allocate(){return this.lastId=this.numberAllocator.alloc(),this.lastId}getLastAllocated(){return this.lastId}register(e){return this.numberAllocator.use(e)}deallocate(e){this.numberAllocator.free(e)}clear(){this.numberAllocator.clear()}};Va.default=Ha});function Tr(t){throw new RangeError(nE[t])}function Vp(t,e){let r=t.split("@"),i="";r.length>1&&(i=r[0]+"@",t=r[1]);let n=function(o,s){let a=[],l=o.length;for(;l--;)a[l]=s(o[l]);return a}((t=t.replace(iE,".")).split("."),e).join(".");return i+n}function Qp(t){let e=[],r=0,i=t.length;for(;r<i;){let n=t.charCodeAt(r++);if(n>=55296&&n<=56319&&r<i){let o=t.charCodeAt(r++);(64512&o)==56320?e.push(((1023&n)<<10)+(1023&o)+65536):(e.push(n),r--)}else e.push(n)}return e}var tE,rE,iE,nE,dt,za,zp,Yp,Kp,Gp,Kt,Jp=_e(()=>{_();v();m();tE=/^xn--/,rE=/[^\0-\x7E]/,iE=/[\x2E\u3002\uFF0E\uFF61]/g,nE={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},dt=Math.floor,za=String.fromCharCode;zp=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},Yp=function(t,e,r){let i=0;for(t=r?dt(t/700):t>>1,t+=dt(t/e);t>455;i+=36)t=dt(t/35);return dt(i+36*t/(t+38))},Kp=function(t){let e=[],r=t.length,i=0,n=128,o=72,s=t.lastIndexOf("-");s<0&&(s=0);for(let l=0;l<s;++l)t.charCodeAt(l)>=128&&Tr("not-basic"),e.push(t.charCodeAt(l));for(let l=s>0?s+1:0;l<r;){let c=i;for(let d=1,g=36;;g+=36){l>=r&&Tr("invalid-input");let y=(a=t.charCodeAt(l++))-48<10?a-22:a-65<26?a-65:a-97<26?a-97:36;(y>=36||y>dt((2147483647-i)/d))&&Tr("overflow"),i+=y*d;let w=g<=o?1:g>=o+26?26:g-o;if(y<w)break;let E=36-w;d>dt(2147483647/E)&&Tr("overflow"),d*=E}let h=e.length+1;o=Yp(i-c,h,c==0),dt(i/h)>2147483647-n&&Tr("overflow"),n+=dt(i/h),i%=h,e.splice(i++,0,n)}var a;return String.fromCodePoint(...e)},Gp=function(t){let e=[],r=(t=Qp(t)).length,i=128,n=0,o=72;for(let l of t)l<128&&e.push(za(l));let s=e.length,a=s;for(s&&e.push("-");a<r;){let l=2147483647;for(let h of t)h>=i&&h<l&&(l=h);let c=a+1;l-i>dt((2147483647-n)/c)&&Tr("overflow"),n+=(l-i)*c,i=l;for(let h of t)if(h<i&&++n>2147483647&&Tr("overflow"),h==i){let d=n;for(let g=36;;g+=36){let y=g<=o?1:g>=o+26?26:g-o;if(d<y)break;let w=d-y,E=36-y;e.push(za(zp(y+w%E,0))),d=dt(w/E)}e.push(za(zp(d,0))),o=Yp(n,c,a==s),n=0,++a}++n,++i}return e.join("")},Kt={version:"2.1.0",ucs2:{decode:Qp,encode:t=>String.fromCodePoint(...t)},decode:Kp,encode:Gp,toASCII:function(t){return Vp(t,function(e){return rE.test(e)?"xn--"+Gp(e):e})},toUnicode:function(t){return Vp(t,function(e){return tE.test(e)?Kp(e.slice(4).toLowerCase()):e})}};Kt.decode;Kt.encode;Kt.toASCII;Kt.toUnicode;Kt.ucs2;Kt.version});function sE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var oE,Mi,aE,pt,Xp=_e(()=>{_();v();m();oE=function(t,e,r,i){e=e||"&",r=r||"=";var n={};if(typeof t!="string"||t.length===0)return n;var o=/\+/g;t=t.split(e);var s=1e3;i&&typeof i.maxKeys=="number"&&(s=i.maxKeys);var a=t.length;s>0&&a>s&&(a=s);for(var l=0;l<a;++l){var c,h,d,g,y=t[l].replace(o,"%20"),w=y.indexOf(r);w>=0?(c=y.substr(0,w),h=y.substr(w+1)):(c=y,h=""),d=decodeURIComponent(c),g=decodeURIComponent(h),sE(n,d)?Array.isArray(n[d])?n[d].push(g):n[d]=[n[d],g]:n[d]=g}return n},Mi=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},aE=function(t,e,r,i){return e=e||"&",r=r||"=",t===null&&(t=void 0),typeof t=="object"?Object.keys(t).map(function(n){var o=encodeURIComponent(Mi(n))+r;return Array.isArray(t[n])?t[n].map(function(s){return o+encodeURIComponent(Mi(s))}).join(e):o+encodeURIComponent(Mi(t[n]))}).join(e):i?encodeURIComponent(Mi(i))+r+encodeURIComponent(Mi(t)):""},pt={};pt.decode=pt.parse=oE,pt.encode=pt.stringify=aE;pt.decode;pt.encode;pt.parse;pt.stringify});function Ka(){throw new Error("setTimeout has not been defined")}function Ga(){throw new Error("clearTimeout has not been defined")}function tg(t){if(Pt===setTimeout)return setTimeout(t,0);if((Pt===Ka||!Pt)&&setTimeout)return Pt=setTimeout,setTimeout(t,0);try{return Pt(t,0)}catch{try{return Pt.call(null,t,0)}catch{return Pt.call(this||si,t,0)}}}function lE(){ni&&Rr&&(ni=!1,Rr.length?Ot=Rr.concat(Ot):as=-1,Ot.length&&rg())}function rg(){if(!ni){var t=tg(lE);ni=!0;for(var e=Ot.length;e;){for(Rr=Ot,Ot=[];++as<e;)Rr&&Rr[as].run();as=-1,e=Ot.length}Rr=null,ni=!1,function(r){if(kt===clearTimeout)return clearTimeout(r);if((kt===Ga||!kt)&&clearTimeout)return kt=clearTimeout,clearTimeout(r);try{kt(r)}catch{try{return kt.call(null,r)}catch{return kt.call(this||si,r)}}}(t)}}function Zp(t,e){(this||si).fun=t,(this||si).array=e}function Bt(){}var eg,Pt,kt,si,fe,Rr,Ot,ni,as,ne,ig=_e(()=>{_();v();m();si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:__webpack_require__.g,fe=eg={};(function(){try{Pt=typeof setTimeout=="function"?setTimeout:Ka}catch{Pt=Ka}try{kt=typeof clearTimeout=="function"?clearTimeout:Ga}catch{kt=Ga}})();Ot=[],ni=!1,as=-1;fe.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];Ot.push(new Zp(t,e)),Ot.length!==1||ni||tg(rg)},Zp.prototype.run=function(){(this||si).fun.apply(null,(this||si).array)},fe.title="browser",fe.browser=!0,fe.env={},fe.argv=[],fe.version="",fe.versions={},fe.on=Bt,fe.addListener=Bt,fe.once=Bt,fe.off=Bt,fe.removeListener=Bt,fe.removeAllListeners=Bt,fe.emit=Bt,fe.prependListener=Bt,fe.prependOnceListener=Bt,fe.listeners=function(t){return[]},fe.binding=function(t){throw new Error("process.binding is not supported")},fe.cwd=function(){return"/"},fe.chdir=function(t){throw new Error("process.chdir is not supported")},fe.umask=function(){return 0};ne=eg;ne.addListener;ne.argv;ne.binding;ne.browser;ne.chdir;ne.cwd;ne.emit;ne.env;ne.listeners;ne.nextTick;ne.off;ne.on;ne.once;ne.prependListener;ne.prependOnceListener;ne.removeAllListeners;ne.removeListener;ne.title;ne.umask;ne.version;ne.versions});function uE(){if(ng)return Qa;ng=!0;var t=Qa={},e,r;function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=i}catch{e=i}try{typeof clearTimeout=="function"?r=clearTimeout:r=n}catch{r=n}})();function o(E){if(e===setTimeout)return setTimeout(E,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(E,0);try{return e(E,0)}catch{try{return e.call(null,E,0)}catch{return e.call(this||oi,E,0)}}}function s(E){if(r===clearTimeout)return clearTimeout(E);if((r===n||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(E);try{return r(E)}catch{try{return r.call(null,E)}catch{return r.call(this||oi,E)}}}var a=[],l=!1,c,h=-1;function d(){!l||!c||(l=!1,c.length?a=c.concat(a):h=-1,a.length&&g())}function g(){if(!l){var E=o(d);l=!0;for(var S=a.length;S;){for(c=a,a=[];++h<S;)c&&c[h].run();h=-1,S=a.length}c=null,l=!1,s(E)}}t.nextTick=function(E){var S=new Array(arguments.length-1);if(arguments.length>1)for(var I=1;I<arguments.length;I++)S[I-1]=arguments[I];a.push(new y(E,S)),a.length===1&&!l&&o(g)};function y(E,S){(this||oi).fun=E,(this||oi).array=S}y.prototype.run=function(){(this||oi).fun.apply(null,(this||oi).array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={};function w(){}return t.on=w,t.addListener=w,t.once=w,t.off=w,t.removeListener=w,t.removeAllListeners=w,t.emit=w,t.prependListener=w,t.prependOnceListener=w,t.listeners=function(E){return[]},t.binding=function(E){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(E){throw new Error("process.chdir is not supported")},t.umask=function(){return 0},Qa}var Qa,ng,oi,re,Ya=_e(()=>{_();v();m();Qa={},ng=!1,oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:__webpack_require__.g;re=uE();re.platform="browser";re.addListener;re.argv;re.binding;re.browser;re.chdir;re.cwd;re.emit;re.env;re.listeners;re.nextTick;re.off;re.on;re.once;re.prependListener;re.prependOnceListener;re.removeAllListeners;re.removeListener;re.title;re.umask;re.version;re.versions});function fE(){if(sg)return Ja;sg=!0;var t=re;function e(o){if(typeof o!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(o))}function r(o,s){for(var a="",l=0,c=-1,h=0,d,g=0;g<=o.length;++g){if(g<o.length)d=o.charCodeAt(g);else{if(d===47)break;d=47}if(d===47){if(!(c===g-1||h===1))if(c!==g-1&&h===2){if(a.length<2||l!==2||a.charCodeAt(a.length-1)!==46||a.charCodeAt(a.length-2)!==46){if(a.length>2){var y=a.lastIndexOf("/");if(y!==a.length-1){y===-1?(a="",l=0):(a=a.slice(0,y),l=a.length-1-a.lastIndexOf("/")),c=g,h=0;continue}}else if(a.length===2||a.length===1){a="",l=0,c=g,h=0;continue}}s&&(a.length>0?a+="/..":a="..",l=2)}else a.length>0?a+="/"+o.slice(c+1,g):a=o.slice(c+1,g),l=g-c-1;c=g,h=0}else d===46&&h!==-1?++h:h=-1}return a}function i(o,s){var a=s.dir||s.root,l=s.base||(s.name||"")+(s.ext||"");return a?a===s.root?a+l:a+o+l:l}var n={resolve:function(){for(var s="",a=!1,l,c=arguments.length-1;c>=-1&&!a;c--){var h;c>=0?h=arguments[c]:(l===void 0&&(l=t.cwd()),h=l),e(h),h.length!==0&&(s=h+"/"+s,a=h.charCodeAt(0)===47)}return s=r(s,!a),a?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(s){if(e(s),s.length===0)return".";var a=s.charCodeAt(0)===47,l=s.charCodeAt(s.length-1)===47;return s=r(s,!a),s.length===0&&!a&&(s="."),s.length>0&&l&&(s+="/"),a?"/"+s:s},isAbsolute:function(s){return e(s),s.length>0&&s.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var s,a=0;a<arguments.length;++a){var l=arguments[a];e(l),l.length>0&&(s===void 0?s=l:s+="/"+l)}return s===void 0?".":n.normalize(s)},relative:function(s,a){if(e(s),e(a),s===a||(s=n.resolve(s),a=n.resolve(a),s===a))return"";for(var l=1;l<s.length&&s.charCodeAt(l)===47;++l);for(var c=s.length,h=c-l,d=1;d<a.length&&a.charCodeAt(d)===47;++d);for(var g=a.length,y=g-d,w=h<y?h:y,E=-1,S=0;S<=w;++S){if(S===w){if(y>w){if(a.charCodeAt(d+S)===47)return a.slice(d+S+1);if(S===0)return a.slice(d+S)}else h>w&&(s.charCodeAt(l+S)===47?E=S:S===0&&(E=0));break}var I=s.charCodeAt(l+S),B=a.charCodeAt(d+S);if(I!==B)break;I===47&&(E=S)}var R="";for(S=l+E+1;S<=c;++S)(S===c||s.charCodeAt(S)===47)&&(R.length===0?R+="..":R+="/..");return R.length>0?R+a.slice(d+E):(d+=E,a.charCodeAt(d)===47&&++d,a.slice(d))},_makeLong:function(s){return s},dirname:function(s){if(e(s),s.length===0)return".";for(var a=s.charCodeAt(0),l=a===47,c=-1,h=!0,d=s.length-1;d>=1;--d)if(a=s.charCodeAt(d),a===47){if(!h){c=d;break}}else h=!1;return c===-1?l?"/":".":l&&c===1?"//":s.slice(0,c)},basename:function(s,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');e(s);var l=0,c=-1,h=!0,d;if(a!==void 0&&a.length>0&&a.length<=s.length){if(a.length===s.length&&a===s)return"";var g=a.length-1,y=-1;for(d=s.length-1;d>=0;--d){var w=s.charCodeAt(d);if(w===47){if(!h){l=d+1;break}}else y===-1&&(h=!1,y=d+1),g>=0&&(w===a.charCodeAt(g)?--g===-1&&(c=d):(g=-1,c=y))}return l===c?c=y:c===-1&&(c=s.length),s.slice(l,c)}else{for(d=s.length-1;d>=0;--d)if(s.charCodeAt(d)===47){if(!h){l=d+1;break}}else c===-1&&(h=!1,c=d+1);return c===-1?"":s.slice(l,c)}},extname:function(s){e(s);for(var a=-1,l=0,c=-1,h=!0,d=0,g=s.length-1;g>=0;--g){var y=s.charCodeAt(g);if(y===47){if(!h){l=g+1;break}continue}c===-1&&(h=!1,c=g+1),y===46?a===-1?a=g:d!==1&&(d=1):a!==-1&&(d=-1)}return a===-1||c===-1||d===0||d===1&&a===c-1&&a===l+1?"":s.slice(a,c)},format:function(s){if(s===null||typeof s!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof s);return i("/",s)},parse:function(s){e(s);var a={root:"",dir:"",base:"",ext:"",name:""};if(s.length===0)return a;var l=s.charCodeAt(0),c=l===47,h;c?(a.root="/",h=1):h=0;for(var d=-1,g=0,y=-1,w=!0,E=s.length-1,S=0;E>=h;--E){if(l=s.charCodeAt(E),l===47){if(!w){g=E+1;break}continue}y===-1&&(w=!1,y=E+1),l===46?d===-1?d=E:S!==1&&(S=1):d!==-1&&(S=-1)}return d===-1||y===-1||S===0||S===1&&d===y-1&&d===g+1?y!==-1&&(g===0&&c?a.base=a.name=s.slice(1,y):a.base=a.name=s.slice(g,y)):(g===0&&c?(a.name=s.slice(1,d),a.base=s.slice(1,y)):(a.name=s.slice(g,d),a.base=s.slice(g,y)),a.ext=s.slice(d,y)),g>0?a.dir=s.slice(0,g-1):c&&(a.dir="/"),a},sep:"/",delimiter:":",win32:null,posix:null};return n.posix=n,Ja=n,Ja}var Ja,sg,Xa,og=_e(()=>{_();v();m();Ya();Ja={},sg=!1;Xa=fE()});var pg={};Jt(pg,{URL:()=>jE,Url:()=>LE,default:()=>Z,fileURLToPath:()=>hg,format:()=>UE,parse:()=>DE,pathToFileURL:()=>dg,resolve:()=>NE,resolveObject:()=>qE});function Fe(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function Li(t,e,r){if(t&&gt.isObject(t)&&t instanceof Fe)return t;var i=new Fe;return i.parse(t,e,r),i}function wE(){if(fg)return tl;fg=!0;var t=ne;function e(o){if(typeof o!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(o))}function r(o,s){for(var a="",l=0,c=-1,h=0,d,g=0;g<=o.length;++g){if(g<o.length)d=o.charCodeAt(g);else{if(d===47)break;d=47}if(d===47){if(!(c===g-1||h===1))if(c!==g-1&&h===2){if(a.length<2||l!==2||a.charCodeAt(a.length-1)!==46||a.charCodeAt(a.length-2)!==46){if(a.length>2){var y=a.lastIndexOf("/");if(y!==a.length-1){y===-1?(a="",l=0):(a=a.slice(0,y),l=a.length-1-a.lastIndexOf("/")),c=g,h=0;continue}}else if(a.length===2||a.length===1){a="",l=0,c=g,h=0;continue}}s&&(a.length>0?a+="/..":a="..",l=2)}else a.length>0?a+="/"+o.slice(c+1,g):a=o.slice(c+1,g),l=g-c-1;c=g,h=0}else d===46&&h!==-1?++h:h=-1}return a}function i(o,s){var a=s.dir||s.root,l=s.base||(s.name||"")+(s.ext||"");return a?a===s.root?a+l:a+o+l:l}var n={resolve:function(){for(var s="",a=!1,l,c=arguments.length-1;c>=-1&&!a;c--){var h;c>=0?h=arguments[c]:(l===void 0&&(l=t.cwd()),h=l),e(h),h.length!==0&&(s=h+"/"+s,a=h.charCodeAt(0)===47)}return s=r(s,!a),a?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(s){if(e(s),s.length===0)return".";var a=s.charCodeAt(0)===47,l=s.charCodeAt(s.length-1)===47;return s=r(s,!a),s.length===0&&!a&&(s="."),s.length>0&&l&&(s+="/"),a?"/"+s:s},isAbsolute:function(s){return e(s),s.length>0&&s.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var s,a=0;a<arguments.length;++a){var l=arguments[a];e(l),l.length>0&&(s===void 0?s=l:s+="/"+l)}return s===void 0?".":n.normalize(s)},relative:function(s,a){if(e(s),e(a),s===a||(s=n.resolve(s),a=n.resolve(a),s===a))return"";for(var l=1;l<s.length&&s.charCodeAt(l)===47;++l);for(var c=s.length,h=c-l,d=1;d<a.length&&a.charCodeAt(d)===47;++d);for(var g=a.length,y=g-d,w=h<y?h:y,E=-1,S=0;S<=w;++S){if(S===w){if(y>w){if(a.charCodeAt(d+S)===47)return a.slice(d+S+1);if(S===0)return a.slice(d+S)}else h>w&&(s.charCodeAt(l+S)===47?E=S:S===0&&(E=0));break}var I=s.charCodeAt(l+S),B=a.charCodeAt(d+S);if(I!==B)break;I===47&&(E=S)}var R="";for(S=l+E+1;S<=c;++S)(S===c||s.charCodeAt(S)===47)&&(R.length===0?R+="..":R+="/..");return R.length>0?R+a.slice(d+E):(d+=E,a.charCodeAt(d)===47&&++d,a.slice(d))},_makeLong:function(s){return s},dirname:function(s){if(e(s),s.length===0)return".";for(var a=s.charCodeAt(0),l=a===47,c=-1,h=!0,d=s.length-1;d>=1;--d)if(a=s.charCodeAt(d),a===47){if(!h){c=d;break}}else h=!1;return c===-1?l?"/":".":l&&c===1?"//":s.slice(0,c)},basename:function(s,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');e(s);var l=0,c=-1,h=!0,d;if(a!==void 0&&a.length>0&&a.length<=s.length){if(a.length===s.length&&a===s)return"";var g=a.length-1,y=-1;for(d=s.length-1;d>=0;--d){var w=s.charCodeAt(d);if(w===47){if(!h){l=d+1;break}}else y===-1&&(h=!1,y=d+1),g>=0&&(w===a.charCodeAt(g)?--g===-1&&(c=d):(g=-1,c=y))}return l===c?c=y:c===-1&&(c=s.length),s.slice(l,c)}else{for(d=s.length-1;d>=0;--d)if(s.charCodeAt(d)===47){if(!h){l=d+1;break}}else c===-1&&(h=!1,c=d+1);return c===-1?"":s.slice(l,c)}},extname:function(s){e(s);for(var a=-1,l=0,c=-1,h=!0,d=0,g=s.length-1;g>=0;--g){var y=s.charCodeAt(g);if(y===47){if(!h){l=g+1;break}continue}c===-1&&(h=!1,c=g+1),y===46?a===-1?a=g:d!==1&&(d=1):a!==-1&&(d=-1)}return a===-1||c===-1||d===0||d===1&&a===c-1&&a===l+1?"":s.slice(a,c)},format:function(s){if(s===null||typeof s!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof s);return i("/",s)},parse:function(s){e(s);var a={root:"",dir:"",base:"",ext:"",name:""};if(s.length===0)return a;var l=s.charCodeAt(0),c=l===47,h;c?(a.root="/",h=1):h=0;for(var d=-1,g=0,y=-1,w=!0,E=s.length-1,S=0;E>=h;--E){if(l=s.charCodeAt(E),l===47){if(!w){g=E+1;break}continue}y===-1&&(w=!1,y=E+1),l===46?d===-1?d=E:S!==1&&(S=1):d!==-1&&(S=-1)}return d===-1||y===-1||S===0||S===1&&d===y-1&&d===g+1?y!==-1&&(g===0&&c?a.base=a.name=s.slice(1,y):a.base=a.name=s.slice(g,y)):(g===0&&c?(a.name=s.slice(1,d),a.base=s.slice(1,y)):(a.name=s.slice(g,d),a.base=s.slice(g,y)),a.ext=s.slice(d,y)),g>0?a.dir=s.slice(0,g-1):c&&(a.dir="/"),a},sep:"/",delimiter:":",win32:null,posix:null};return n.posix=n,tl=n,tl}function PE(t){if(typeof t=="string")t=new URL(t);else if(!(t instanceof URL))throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");if(t.protocol!=="file:")throw new Deno.errors.InvalidData("invalid url scheme");return il?kE(t):OE(t)}function kE(t){let e=t.hostname,r=t.pathname;for(let i=0;i<r.length;i++)if(r[i]==="%"){let n=r.codePointAt(i+2)||32;if(r[i+1]==="2"&&n===102||r[i+1]==="5"&&n===99)throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")}if(r=r.replace(AE,"\\"),r=decodeURIComponent(r),e!=="")return`\\\\${e}${r}`;{let i=r.codePointAt(1)|32,n=r[2];if(i<EE||i>SE||n!==":")throw new Deno.errors.InvalidData("file url path must be absolute");return r.slice(1)}}function OE(t){if(t.hostname!=="")throw new Deno.errors.InvalidData("invalid file url hostname");let e=t.pathname;for(let r=0;r<e.length;r++)if(e[r]==="%"){let i=e.codePointAt(r+2)||32;if(e[r+1]==="2"&&i===102)throw new Deno.errors.InvalidData("must not include encoded / characters")}return decodeURIComponent(e)}function xE(t){let e=cg.resolve(t),r=t.charCodeAt(t.length-1);(r===vE||il&&r===mE)&&e[e.length-1]!==cg.sep&&(e+="/");let i=new URL("file://");return e.includes("%")&&(e=e.replace(IE,"%25")),!il&&e.includes("\\")&&(e=e.replace(TE,"%5C")),e.includes(`
`)&&(e=e.replace(RE,"%0A")),e.includes("\r")&&(e=e.replace(CE,"%0D")),e.includes("	")&&(e=e.replace(BE,"%09")),i.pathname=e,i}function hg(t){if(typeof t=="string")t=new URL(t);else if(!(t instanceof URL))throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");if(t.protocol!=="file:")throw new Deno.errors.InvalidData("invalid url scheme");return nl?JE(t):XE(t)}function JE(t){let e=t.hostname,r=t.pathname;for(let i=0;i<r.length;i++)if(r[i]==="%"){let n=r.codePointAt(i+2)||32;if(r[i+1]==="2"&&n===102||r[i+1]==="5"&&n===99)throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")}if(r=r.replace(VE,"\\"),r=decodeURIComponent(r),e!=="")return`\\\\${e}${r}`;{let i=r.codePointAt(1)|32,n=r[2];if(i<$E||i>HE||n!==":")throw new Deno.errors.InvalidData("file url path must be absolute");return r.slice(1)}}function XE(t){if(t.hostname!=="")throw new Deno.errors.InvalidData("invalid file url hostname");let e=t.pathname;for(let r=0;r<e.length;r++)if(e[r]==="%"){let i=e.codePointAt(r+2)||32;if(e[r+1]==="2"&&i===102)throw new Deno.errors.InvalidData("must not include encoded / characters")}return decodeURIComponent(e)}function dg(t){let e=Xa.resolve(t),r=t.charCodeAt(t.length-1);(r===WE||nl&&r===FE)&&e[e.length-1]!==Xa.sep&&(e+="/");let i=new URL("file://");return e.includes("%")&&(e=e.replace(zE,"%25")),!nl&&e.includes("\\")&&(e=e.replace(KE,"%5C")),e.includes(`
`)&&(e=e.replace(GE,"%0A")),e.includes("\r")&&(e=e.replace(QE,"%0D")),e.includes("	")&&(e=e.replace(YE,"%09")),i.pathname=e,i}var Z,cE,gt,hE,dE,pE,gE,rl,ag,lg,ug,yE,bE,Za,ai,el,tl,fg,cg,_E,mE,vE,EE,SE,il,AE,IE,TE,RE,CE,BE,ME,LE,UE,NE,qE,DE,jE,FE,WE,$E,HE,nl,VE,zE,KE,GE,QE,YE,gg=_e(()=>{_();v();m();Jp();Xp();ig();og();Ya();Z={},cE=Kt,gt={isString:function(t){return typeof t=="string"},isObject:function(t){return typeof t=="object"&&t!==null},isNull:function(t){return t===null},isNullOrUndefined:function(t){return t==null}};Z.parse=Li,Z.resolve=function(t,e){return Li(t,!1,!0).resolve(e)},Z.resolveObject=function(t,e){return t?Li(t,!1,!0).resolveObject(e):e},Z.format=function(t){return gt.isString(t)&&(t=Li(t)),t instanceof Fe?t.format():Fe.prototype.format.call(t)},Z.Url=Fe;hE=/^([a-z0-9.+-]+:)/i,dE=/:[0-9]*$/,pE=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,gE=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r",`
`,"	"]),rl=["'"].concat(gE),ag=["%","/","?",";","#"].concat(rl),lg=["/","?","#"],ug=/^[+a-z0-9A-Z_-]{0,63}$/,yE=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,bE={javascript:!0,"javascript:":!0},Za={javascript:!0,"javascript:":!0},ai={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},el=pt;Fe.prototype.parse=function(t,e,r){if(!gt.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t.indexOf("?"),n=i!==-1&&i<t.indexOf("#")?"?":"#",o=t.split(n);o[0]=o[0].replace(/\\/g,"/");var s=t=o.join(n);if(s=s.trim(),!r&&t.split("#").length===1){var a=pE.exec(s);if(a)return this.path=s,this.href=s,this.pathname=a[1],a[2]?(this.search=a[2],this.query=e?el.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var l=hE.exec(s);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,s=s.substr(l.length)}if(r||l||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var h=s.substr(0,2)==="//";!h||l&&Za[l]||(s=s.substr(2),this.slashes=!0)}if(!Za[l]&&(h||l&&!ai[l])){for(var d,g,y=-1,w=0;w<lg.length;w++)(E=s.indexOf(lg[w]))!==-1&&(y===-1||E<y)&&(y=E);for((g=y===-1?s.lastIndexOf("@"):s.lastIndexOf("@",y))!==-1&&(d=s.slice(0,g),s=s.slice(g+1),this.auth=decodeURIComponent(d)),y=-1,w=0;w<ag.length;w++){var E;(E=s.indexOf(ag[w]))!==-1&&(y===-1||E<y)&&(y=E)}y===-1&&(y=s.length),this.host=s.slice(0,y),s=s.slice(y),this.parseHost(),this.hostname=this.hostname||"";var S=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!S)for(var I=this.hostname.split(/\./),B=(w=0,I.length);w<B;w++){var R=I[w];if(R&&!R.match(ug)){for(var U="",N=0,W=R.length;N<W;N++)R.charCodeAt(N)>127?U+="x":U+=R[N];if(!U.match(ug)){var K=I.slice(0,w),z=I.slice(w+1),Q=R.match(yE);Q&&(K.push(Q[1]),z.unshift(Q[2])),z.length&&(s="/"+z.join(".")+s),this.hostname=K.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),S||(this.hostname=cE.toASCII(this.hostname));var pe=this.port?":"+this.port:"",Yt=this.hostname||"";this.host=Yt+pe,this.href+=this.host,S&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!bE[c])for(w=0,B=rl.length;w<B;w++){var ge=rl[w];if(s.indexOf(ge)!==-1){var Br=encodeURIComponent(ge);Br===ge&&(Br=escape(ge)),s=s.split(ge).join(Br)}}var Pr=s.indexOf("#");Pr!==-1&&(this.hash=s.substr(Pr),s=s.slice(0,Pr));var kr=s.indexOf("?");if(kr!==-1?(this.search=s.substr(kr),this.query=s.substr(kr+1),e&&(this.query=el.parse(this.query)),s=s.slice(0,kr)):e&&(this.search="",this.query={}),s&&(this.pathname=s),ai[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){pe=this.pathname||"";var cs=this.search||"";this.path=pe+cs}return this.href=this.format(),this},Fe.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",i=this.hash||"",n=!1,o="";this.host?n=t+this.host:this.hostname&&(n=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&gt.isObject(this.query)&&Object.keys(this.query).length&&(o=el.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||ai[e])&&n!==!1?(n="//"+(n||""),r&&r.charAt(0)!=="/"&&(r="/"+r)):n||(n=""),i&&i.charAt(0)!=="#"&&(i="#"+i),s&&s.charAt(0)!=="?"&&(s="?"+s),e+n+(r=r.replace(/[?#]/g,function(a){return encodeURIComponent(a)}))+(s=s.replace("#","%23"))+i},Fe.prototype.resolve=function(t){return this.resolveObject(Li(t,!1,!0)).format()},Fe.prototype.resolveObject=function(t){if(gt.isString(t)){var e=new Fe;e.parse(t,!1,!0),t=e}for(var r=new Fe,i=Object.keys(this),n=0;n<i.length;n++){var o=i[n];r[o]=this[o]}if(r.hash=t.hash,t.href==="")return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var s=Object.keys(t),a=0;a<s.length;a++){var l=s[a];l!=="protocol"&&(r[l]=t[l])}return ai[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!ai[t.protocol]){for(var c=Object.keys(t),h=0;h<c.length;h++){var d=c[h];r[d]=t[d]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||Za[t.protocol])r.pathname=t.pathname;else{for(var g=(t.pathname||"").split("/");g.length&&!(t.host=g.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),g[0]!==""&&g.unshift(""),g.length<2&&g.unshift(""),r.pathname=g.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var y=r.pathname||"",w=r.search||"";r.path=y+w}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var E=r.pathname&&r.pathname.charAt(0)==="/",S=t.host||t.pathname&&t.pathname.charAt(0)==="/",I=S||E||r.host&&t.pathname,B=I,R=r.pathname&&r.pathname.split("/")||[],U=(g=t.pathname&&t.pathname.split("/")||[],r.protocol&&!ai[r.protocol]);if(U&&(r.hostname="",r.port=null,r.host&&(R[0]===""?R[0]=r.host:R.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(g[0]===""?g[0]=t.host:g.unshift(t.host)),t.host=null),I=I&&(g[0]===""||R[0]==="")),S)r.host=t.host||t.host===""?t.host:r.host,r.hostname=t.hostname||t.hostname===""?t.hostname:r.hostname,r.search=t.search,r.query=t.query,R=g;else if(g.length)R||(R=[]),R.pop(),R=R.concat(g),r.search=t.search,r.query=t.query;else if(!gt.isNullOrUndefined(t.search))return U&&(r.hostname=r.host=R.shift(),(Q=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=Q.shift(),r.host=r.hostname=Q.shift())),r.search=t.search,r.query=t.query,gt.isNull(r.pathname)&&gt.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!R.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var N=R.slice(-1)[0],W=(r.host||t.host||R.length>1)&&(N==="."||N==="..")||N==="",K=0,z=R.length;z>=0;z--)(N=R[z])==="."?R.splice(z,1):N===".."?(R.splice(z,1),K++):K&&(R.splice(z,1),K--);if(!I&&!B)for(;K--;K)R.unshift("..");!I||R[0]===""||R[0]&&R[0].charAt(0)==="/"||R.unshift(""),W&&R.join("/").substr(-1)!=="/"&&R.push("");var Q,pe=R[0]===""||R[0]&&R[0].charAt(0)==="/";return U&&(r.hostname=r.host=pe?"":R.length?R.shift():"",(Q=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=Q.shift(),r.host=r.hostname=Q.shift())),(I=I||r.host&&R.length)&&!pe&&R.unshift(""),R.length?r.pathname=R.join("/"):(r.pathname=null,r.path=null),gt.isNull(r.pathname)&&gt.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},Fe.prototype.parseHost=function(){var t=this.host,e=dE.exec(t);e&&((e=e[0])!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};Z.Url;Z.format;Z.resolve;Z.resolveObject;tl={},fg=!1;cg=wE(),_E=typeof Deno<"u"?Deno.build.os==="windows"?"win32":Deno.build.os:void 0;Z.URL=typeof URL<"u"?URL:null;Z.pathToFileURL=xE;Z.fileURLToPath=PE;Z.Url;Z.format;Z.resolve;Z.resolveObject;Z.URL;mE=92,vE=47,EE=97,SE=122,il=_E==="win32",AE=/\//g,IE=/%/g,TE=/\\/g,RE=/\n/g,CE=/\r/g,BE=/\t/g;ME=typeof Deno<"u"?Deno.build.os==="windows"?"win32":Deno.build.os:void 0;Z.URL=typeof URL<"u"?URL:null;Z.pathToFileURL=dg;Z.fileURLToPath=hg;LE=Z.Url,UE=Z.format,NE=Z.resolve,qE=Z.resolveObject,DE=Z.parse,jE=Z.URL,FE=92,WE=47,$E=97,HE=122,nl=ME==="win32",VE=/\//g,zE=/%/g,KE=/\\/g,GE=/\n/g,QE=/\r/g,YE=/\t/g});var bg=M((_8,yg)=>{"use strict";_();v();m();yg.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}});var ls=M(li=>{"use strict";_();v();m();Object.defineProperty(li,"__esModule",{value:!0});li.BufferedDuplex=li.writev=void 0;var ZE=jt(),wg=(be(),X(me));function _g(t,e){let r=new Array(t.length);for(let i=0;i<t.length;i++)typeof t[i].chunk=="string"?r[i]=wg.Buffer.from(t[i].chunk,"utf8"):r[i]=t[i].chunk;this._write(wg.Buffer.concat(r),"binary",e)}li.writev=_g;var sl=class extends ZE.Duplex{constructor(e,r,i){super({objectMode:!0}),this.proxy=r,this.socket=i,this.writeQueue=[],e.objectMode||(this._writev=_g.bind(this)),this.isSocketOpen=!1,this.proxy.on("data",n=>{this.push(n)})}_read(e){this.proxy.read(e)}_write(e,r,i){this.isSocketOpen?this.writeToProxy(e,r,i):this.writeQueue.push({chunk:e,encoding:r,cb:i})}_final(e){this.writeQueue=[],this.proxy.end(e)}_destroy(e,r){this.writeQueue=[],this.proxy.destroy(),r(e)}socketReady(){this.emit("connect"),this.isSocketOpen=!0,this.processWriteQueue()}writeToProxy(e,r,i){this.proxy.write(e,r)===!1?this.proxy.once("drain",i):i()}processWriteQueue(){for(;this.writeQueue.length>0;){let{chunk:e,encoding:r,cb:i}=this.writeQueue.shift();this.writeToProxy(e,r,i)}}};li.BufferedDuplex=sl});var Ui=M(Qt=>{"use strict";_();v();m();var ll=Qt&&Qt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.streamBuilder=Qt.browserStreamBuilder=void 0;var ol=(be(),X(me)),mg=ll(bg()),eS=ll(ot()),tS=jt(),rS=ll(Oi()),al=ls(),Gt=(0,eS.default)("mqttjs:ws"),iS=["rejectUnauthorized","ca","cert","key","pfx","passphrase"];function vg(t,e){let r=`${t.protocol}://${t.hostname}:${t.port}${t.path}`;return typeof t.transformWsUrl=="function"&&(r=t.transformWsUrl(r,t,e)),r}function Eg(t){let e=t;return t.port||(t.protocol==="wss"?e.port=443:e.port=80),t.path||(e.path="/"),t.wsOptions||(e.wsOptions={}),!rS.default&&!t.forceNativeWebSocket&&t.protocol==="wss"&&iS.forEach(r=>{Object.prototype.hasOwnProperty.call(t,r)&&!Object.prototype.hasOwnProperty.call(t.wsOptions,r)&&(e.wsOptions[r]=t[r])}),e}function nS(t){let e=Eg(t);if(e.hostname||(e.hostname=e.host),!e.hostname){if(typeof document>"u")throw new Error("Could not determine host. Specify host manually.");let r=new URL(document.URL);e.hostname=r.hostname,e.port||(e.port=Number(r.port))}return e.objectMode===void 0&&(e.objectMode=!(e.binary===!0||e.binary===void 0)),e}function sS(t,e,r){Gt("createWebSocket"),Gt(`protocol: ${r.protocolId} ${r.protocolVersion}`);let i=r.protocolId==="MQIsdp"&&r.protocolVersion===3?"mqttv3.1":"mqtt";Gt(`creating new Websocket for url: ${e} and protocol: ${i}`);let n;return r.createWebsocket?n=r.createWebsocket(e,[i],r):n=new mg.default(e,[i],r.wsOptions),n}function oS(t,e){let r=e.protocolId==="MQIsdp"&&e.protocolVersion===3?"mqttv3.1":"mqtt",i=vg(e,t),n;return e.createWebsocket?n=e.createWebsocket(i,[r],e):n=new WebSocket(i,[r]),n.binaryType="arraybuffer",n}var aS=(t,e)=>{Gt("streamBuilder");let r=Eg(e);r.hostname=r.hostname||r.host||"localhost";let i=vg(r,t),n=sS(t,i,r),o=mg.default.createWebSocketStream(n,r.wsOptions);return o.url=i,n.on("close",()=>{o.destroy()}),o};Qt.streamBuilder=aS;var lS=(t,e)=>{Gt("browserStreamBuilder");let r,n=nS(e).browserBufferSize||1024*512,o=e.browserBufferTimeout||1e3,s=!e.objectMode,a=oS(t,e),l=h(e,E,S);e.objectMode||(l._writev=al.writev.bind(l)),l.on("close",()=>{a.close()});let c=typeof a.addEventListener<"u";a.readyState===a.OPEN?(r=l,r.socket=a):(r=new al.BufferedDuplex(e,l,a),c?a.addEventListener("open",d):a.onopen=d),c?(a.addEventListener("close",g),a.addEventListener("error",y),a.addEventListener("message",w)):(a.onclose=g,a.onerror=y,a.onmessage=w);function h(I,B,R){let U=new tS.Transform({objectMode:I.objectMode});return U._write=B,U._flush=R,U}function d(){Gt("WebSocket onOpen"),r instanceof al.BufferedDuplex&&r.socketReady()}function g(I){Gt("WebSocket onClose",I),r.end(),r.destroy()}function y(I){Gt("WebSocket onError",I);let B=new Error("WebSocket error");B.event=I,r.destroy(B)}function w(I){let{data:B}=I;B instanceof ArrayBuffer?B=ol.Buffer.from(B):B=ol.Buffer.from(B,"utf8"),l.push(B)}function E(I,B,R){if(a.bufferedAmount>n){setTimeout(E,o,I,B,R);return}s&&typeof I=="string"&&(I=ol.Buffer.from(I,"utf8"));try{a.send(I)}catch(U){return R(U)}R()}function S(I){a.close(),I()}return r};Qt.browserStreamBuilder=lS});var ul={};Jt(ul,{Server:()=>Me,Socket:()=>Me,Stream:()=>Me,_createServerHandle:()=>Me,_normalizeArgs:()=>Me,_setSimultaneousAccepts:()=>Me,connect:()=>Me,createConnection:()=>Me,createServer:()=>Me,default:()=>uS,isIP:()=>Me,isIPv4:()=>Me,isIPv6:()=>Me});function Me(){throw new Error("Node.js net module is not supported by JSPM core outside of Node.js")}var uS,fl=_e(()=>{_();v();m();uS={_createServerHandle:Me,_normalizeArgs:Me,_setSimultaneousAccepts:Me,connect:Me,createConnection:Me,createServer:Me,isIP:Me,isIPv4:Me,isIPv6:Me,Server:Me,Socket:Me,Stream:Me}});var cl=M(Ni=>{"use strict";_();v();m();var Sg=Ni&&Ni.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ni,"__esModule",{value:!0});var fS=Sg((fl(),X(ul))),cS=Sg(ot()),hS=(0,cS.default)("mqttjs:tcp"),dS=(t,e)=>{e.port=e.port||1883,e.hostname=e.hostname||e.host||"localhost";let{port:r,path:i}=e,n=e.hostname;return hS("port %d and host %s",r,n),fS.default.createConnection({port:r,host:n,path:i})};Ni.default=dS});var Ag={};Jt(Ag,{default:()=>pS});var pS,Ig=_e(()=>{_();v();m();pS={}});var dl=M(qi=>{"use strict";_();v();m();var hl=qi&&qi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(qi,"__esModule",{value:!0});var gS=hl((Ig(),X(Ag))),yS=hl((fl(),X(ul))),bS=hl(ot()),wS=(0,bS.default)("mqttjs:tls"),_S=(t,e)=>{e.port=e.port||8883,e.host=e.hostname||e.host||"localhost",yS.default.isIP(e.host)===0&&(e.servername=e.host),e.rejectUnauthorized=e.rejectUnauthorized!==!1,delete e.path,wS("port %d host %s rejectUnauthorized %b",e.port,e.host,e.rejectUnauthorized);let r=gS.default.connect(e);r.on("secureConnect",()=>{e.rejectUnauthorized&&!r.authorized?r.emit("error",new Error("TLS not authorized")):r.removeListener("error",i)});function i(n){e.rejectUnauthorized&&t.emit("error",n),r.end()}return r.on("error",i),r};qi.default=_S});var yl=M(gl=>{"use strict";_();v();m();Object.defineProperty(gl,"__esModule",{value:!0});var Tg=(be(),X(me)),mS=jt(),vS=ls(),yt,pl,Le;function ES(){let t=new mS.Transform;return t._write=(e,r,i)=>{yt.send({data:e.buffer,success(){i()},fail(n){i(new Error(n))}})},t._flush=e=>{yt.close({success(){e()}})},t}function SS(t){t.hostname||(t.hostname="localhost"),t.path||(t.path="/"),t.wsOptions||(t.wsOptions={})}function AS(t,e){let r=t.protocol==="wxs"?"wss":"ws",i=`${r}://${t.hostname}${t.path}`;return t.port&&t.port!==80&&t.port!==443&&(i=`${r}://${t.hostname}:${t.port}${t.path}`),typeof t.transformWsUrl=="function"&&(i=t.transformWsUrl(i,t,e)),i}function IS(){yt.onOpen(()=>{Le.socketReady()}),yt.onMessage(t=>{let{data:e}=t;e instanceof ArrayBuffer?e=Tg.Buffer.from(e):e=Tg.Buffer.from(e,"utf8"),pl.push(e)}),yt.onClose(()=>{Le.emit("close"),Le.end(),Le.destroy()}),yt.onError(t=>{let e=new Error(t.errMsg);Le.destroy(e)})}var TS=(t,e)=>{if(e.hostname=e.hostname||e.host,!e.hostname)throw new Error("Could not determine host. Specify host manually.");let r=e.protocolId==="MQIsdp"&&e.protocolVersion===3?"mqttv3.1":"mqtt";SS(e);let i=AS(e,t);yt=wx.connectSocket({url:i,protocols:[r]}),pl=ES(),Le=new vS.BufferedDuplex(e,pl,yt),Le._destroy=(o,s)=>{yt.close({success(){s&&s(o)}})};let n=Le.destroy;return Le.destroy=(o,s)=>(Le.destroy=n,setTimeout(()=>{yt.close({fail(){Le._destroy(o,s)}})},0),Le),IS(),Le};gl.default=TS});var _l=M(wl=>{"use strict";_();v();m();Object.defineProperty(wl,"__esModule",{value:!0});var bl=(be(),X(me)),RS=jt(),CS=ls(),xt,us,ui,Rg=!1;function BS(){let t=new RS.Transform;return t._write=(e,r,i)=>{xt.sendSocketMessage({data:e.buffer,success(){i()},fail(){i(new Error)}})},t._flush=e=>{xt.closeSocket({success(){e()}})},t}function PS(t){t.hostname||(t.hostname="localhost"),t.path||(t.path="/"),t.wsOptions||(t.wsOptions={})}function kS(t,e){let r=t.protocol==="alis"?"wss":"ws",i=`${r}://${t.hostname}${t.path}`;return t.port&&t.port!==80&&t.port!==443&&(i=`${r}://${t.hostname}:${t.port}${t.path}`),typeof t.transformWsUrl=="function"&&(i=t.transformWsUrl(i,t,e)),i}function OS(){Rg||(Rg=!0,xt.onSocketOpen(()=>{ui.socketReady()}),xt.onSocketMessage(t=>{if(typeof t.data=="string"){let e=bl.Buffer.from(t.data,"base64");us.push(e)}else{let e=new FileReader;e.addEventListener("load",()=>{let r=e.result;r instanceof ArrayBuffer?r=bl.Buffer.from(r):r=bl.Buffer.from(r,"utf8"),us.push(r)}),e.readAsArrayBuffer(t.data)}}),xt.onSocketClose(()=>{ui.end(),ui.destroy()}),xt.onSocketError(t=>{ui.destroy(t)}))}var xS=(t,e)=>{if(e.hostname=e.hostname||e.host,!e.hostname)throw new Error("Could not determine host. Specify host manually.");let r=e.protocolId==="MQIsdp"&&e.protocolVersion===3?"mqttv3.1":"mqtt";PS(e);let i=kS(e,t);return xt=e.my,xt.connectSocket({url:i,protocols:r}),us=BS(),ui=new CS.BufferedDuplex(e,us,xt),OS(),ui};wl.default=xS});var Pg=M(Cr=>{"use strict";_();v();m();var fs=Cr&&Cr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Cr,"__esModule",{value:!0});Cr.connectAsync=void 0;var MS=fs(ot()),LS=fs((gg(),X(pg))),US=fs(os()),NS=fs(Oi());typeof(C===null||C===void 0?void 0:C.nextTick)!="function"&&(C.nextTick=setImmediate);var Cg=(0,MS.default)("mqttjs"),de=null;function qS(t){let e;t.auth&&(e=t.auth.match(/^(.+):(.+)$/),e?(t.username=e[1],t.password=e[2]):t.username=t.auth)}function Bg(t,e){var r,i,n,o;if(Cg("connecting to an MQTT broker..."),typeof t=="object"&&!e&&(e=t,t=""),e=e||{},t&&typeof t=="string"){let l=LS.default.parse(t,!0),c={};if(l.port!=null&&(c.port=Number(l.port)),c.host=l.hostname,c.query=l.query,c.auth=l.auth,c.protocol=l.protocol,c.path=l.path,c.protocol=(r=c.protocol)===null||r===void 0?void 0:r.replace(/:$/,""),e=Object.assign(Object.assign({},c),e),!e.protocol)throw new Error("Missing protocol")}if(e.unixSocket=e.unixSocket||((i=e.protocol)===null||i===void 0?void 0:i.includes("+unix")),e.unixSocket?e.protocol=e.protocol.replace("+unix",""):!(!((n=e.protocol)===null||n===void 0)&&n.startsWith("ws"))&&!(!((o=e.protocol)===null||o===void 0)&&o.startsWith("wx"))&&delete e.path,qS(e),e.query&&typeof e.query.clientId=="string"&&(e.clientId=e.query.clientId),e.cert&&e.key)if(e.protocol){if(["mqtts","wss","wxs","alis"].indexOf(e.protocol)===-1)switch(e.protocol){case"mqtt":e.protocol="mqtts";break;case"ws":e.protocol="wss";break;case"wx":e.protocol="wxs";break;case"ali":e.protocol="alis";break;default:throw new Error(`Unknown protocol for secure connection: "${e.protocol}"!`)}}else throw new Error("Missing secure protocol key");if(de||(de={},!NS.default&&!e.forceNativeWebSocket?(de.ws=Ui().streamBuilder,de.wss=Ui().streamBuilder,de.mqtt=cl().default,de.tcp=cl().default,de.ssl=dl().default,de.tls=de.ssl,de.mqtts=dl().default):(de.ws=Ui().browserStreamBuilder,de.wss=Ui().browserStreamBuilder,de.wx=yl().default,de.wxs=yl().default,de.ali=_l().default,de.alis=_l().default)),!de[e.protocol]){let l=["mqtts","wss"].indexOf(e.protocol)!==-1;e.protocol=["mqtt","mqtts","ws","wss","wx","wxs","ali","alis"].filter((c,h)=>l&&h%2===0?!1:typeof de[c]=="function")[0]}if(e.clean===!1&&!e.clientId)throw new Error("Missing clientId for unclean clients");e.protocol&&(e.defaultProtocol=e.protocol);function s(l){return e.servers&&((!l._reconnectCount||l._reconnectCount===e.servers.length)&&(l._reconnectCount=0),e.host=e.servers[l._reconnectCount].host,e.port=e.servers[l._reconnectCount].port,e.protocol=e.servers[l._reconnectCount].protocol?e.servers[l._reconnectCount].protocol:e.defaultProtocol,e.hostname=e.host,l._reconnectCount++),Cg("calling streambuilder for",e.protocol),de[e.protocol](l,e)}let a=new US.default(s,e);return a.on("error",()=>{}),a}function DS(t,e,r=!0){return new Promise((i,n)=>{let o=Bg(t,e),s={connect:l=>{a(),i(o)},end:()=>{a(),i(o)},error:l=>{a(),o.end(),n(l)}};r===!1&&(s.close=()=>{s.error(new Error("Couldn't connect to server"))});function a(){Object.keys(s).forEach(l=>{o.off(l,s[l])})}Object.keys(s).forEach(l=>{o.on(l,s[l])})})}Cr.connectAsync=DS;Cr.default=Bg});var ml=M(G=>{"use strict";_();v();m();var kg=G&&G.__createBinding||(Object.create?function(t,e,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,n)}:function(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}),jS=G&&G.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),FS=G&&G.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&kg(e,t,r);return jS(e,t),e},Og=G&&G.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&kg(e,t,r)},Di=G&&G.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(G,"__esModule",{value:!0});G.ReasonCodes=G.KeepaliveManager=G.UniqueMessageIdProvider=G.DefaultMessageIdProvider=G.Store=G.MqttClient=G.connectAsync=G.connect=G.Client=void 0;var xg=Di(os());G.MqttClient=xg.default;var WS=Di(Xo());G.DefaultMessageIdProvider=WS.default;var $S=Di(Hp());G.UniqueMessageIdProvider=$S.default;var HS=Di(ta());G.Store=HS.default;var Mg=FS(Pg());G.connect=Mg.default;Object.defineProperty(G,"connectAsync",{enumerable:!0,get:function(){return Mg.connectAsync}});var VS=Di(Fa());G.KeepaliveManager=VS.default;G.Client=xg.default;Og(os(),G);Og(Xr(),G);var zS=Ti();Object.defineProperty(G,"ReasonCodes",{enumerable:!0,get:function(){return zS.ReasonCodes}})});var JS=M(We=>{_();v();m();var Lg=We&&We.__createBinding||(Object.create?function(t,e,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,n)}:function(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}),KS=We&&We.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),GS=We&&We.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&Lg(e,t,r);return KS(e,t),e},QS=We&&We.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Lg(e,t,r)};Object.defineProperty(We,"__esModule",{value:!0});var YS=GS(ml());We.default=YS;QS(ml(),We)});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JS());
/*! Bundled license information:

@jspm/core/nodelibs/browser/buffer.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/


/***/ }),

/***/ 4633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(3738)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3738:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(4633)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 3145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ 9417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ 467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ 3029:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ 2901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(816);

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ 4467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(816);

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ 3954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ 5361:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _inherits)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}


/***/ }),

/***/ 6822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2284);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9417);


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t);
}


/***/ }),

/***/ 5458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _toConsumableArray)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(3145);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,arrayLikeToArray/* default */.A)(r);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(7800);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || (0,unsupportedIterableToArray/* default */.A)(r) || _nonIterableSpread();
}


/***/ }),

/***/ 816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ toPropertyKey)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != (0,esm_typeof/* default */.A)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,esm_typeof/* default */.A)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == (0,esm_typeof/* default */.A)(i) ? i : i + "";
}


/***/ }),

/***/ 2284:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ 7800:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3145);

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a) : void 0;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/modules/mod-" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "kiux:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 498;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			498: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"1091":1,"1641":1,"2025":1,"3407":1,"3472":1,"3717":1,"5341":1,"5999":1,"6008":1,"6329":1,"6945":1,"6985":1,"7164":1,"9366":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			498: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(7164 != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkiux"] = self["webpackChunkkiux"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(3149);
/******/ 	
/******/ })()
;