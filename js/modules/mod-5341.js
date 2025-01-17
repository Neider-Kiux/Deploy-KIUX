"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[5341,9037],{

/***/ 5341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_CargarDatosIniciales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9037);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2407);








var SoporteTecnico = document.createElement('DIV');
SoporteTecnico.classList.add('soporte-tecnico');
var SoporteTecnicoTexto = document.createElement('SPAN');
SoporteTecnicoTexto.classList.add('soporte-tecnico__texto');
SoporteTecnicoTexto.textContent = 'Ante cualquier dificultad para ingresar o usar KIUX, llámenos';
var SoporteTecnicoNumero = document.createElement('SPAN');
SoporteTecnicoNumero.classList.add('soporte-tecnico__numero');
SoporteTecnicoNumero.textContent = '300 337 0156';
document.querySelector('main').addEventListener('click', /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          if (event.target.id == 'background' && (document.getElementById('DialogoRecuperarContraseña') || document.getElementById('DialogoContraseñaRecuperada'))) {
            quitarMensajeRecuperarContraseña();
          }
          if (!event.target.classList.contains('soporte-tecnico') && !event.target.classList.contains('soporte__enlace') && document.querySelector('.soporte-tecnico')) {
            comprobarVentanaSoporte();
          }
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
document.getElementById('LogoEnlace').addEventListener('click', function () {
  window.open('http://kiux.com', '_blank');
});
document.getElementById('soporteEnlace').addEventListener('click', function () {
  if (comprobarVentanaSoporte()) {} else {
    SoporteTecnico.insertAdjacentElement('beforeend', SoporteTecnicoTexto);
    SoporteTecnico.insertAdjacentElement('beforeend', SoporteTecnicoNumero);
    document.querySelector('.login__formulario').insertAdjacentElement('beforeend', SoporteTecnico);
    console.log(SoporteTecnico);
  }
});
document.getElementById('btnIngresar').addEventListener('click', ingresar);
document.getElementById('ButtonRecuperarPassword').addEventListener('click', mensajeRecuperarContraseña);
function ingresar(_x2) {
  return _ingresar.apply(this, arguments);
}
function _ingresar() {
  _ingresar = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
    var TimerOcultarMensaje, usuario, password, boxAlert, path, _yield$CustomFetch, result_code, result_message, new_token, nombre_empresa;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          comprobarVentanaSoporte();
          usuario = document.getElementById('usuario');
          password = document.getElementById('password');
          boxAlert = document.createElement('DIV'); // <div></div>
          boxAlert.classList.add('box-message'); // <div class='box-message'></div>
          boxAlert.setAttribute('id', 'boxAlert'); // <div class='box-message' id'boxAlert'></div>

          clearTimeout(TimerOcultarMensaje);
          TimerOcultarMensaje = setTimeout(function () {
            document.querySelector('.box-message').remove();
          }, 3000);
          if (!(usuario.value.trim().length && password.value.trim().length)) {
            _context2.next = 20;
            break;
          }
          path = "validarcredenciales/".concat(usuario.value, "/").concat(password.value);
          _context2.next = 12;
          return (0,_api__WEBPACK_IMPORTED_MODULE_2__.CustomFetch)(path);
        case 12:
          _yield$CustomFetch = _context2.sent;
          result_code = _yield$CustomFetch.result_code;
          result_message = _yield$CustomFetch.result_message;
          new_token = _yield$CustomFetch.new_token;
          nombre_empresa = _yield$CustomFetch.nombre_empresa;
          if (result_code == 0) {
            localStorage.setItem('UserEmail', usuario.value.trim());
            localStorage.setItem('Token', new_token);
            localStorage.setItem('NombreEmpresa', nombre_empresa);
            //TODO: Agregar la consulta de estos datos a la API para tomarlos desde el backend
            localStorage.setItem('NombreUserModificado', 'user1');
            localStorage.setItem('NombreEmpresaModificado', 'testK1');
            (0,_utils_CargarDatosIniciales__WEBPACK_IMPORTED_MODULE_1__.CargarDatosUsuario)();
          } else {
            boxAlert.classList.remove('warning');
            boxAlert.classList.add('error');
            boxAlert.textContent = result_message;
            document.querySelector('main').appendChild(boxAlert);
          }
          _context2.next = 24;
          break;
        case 20:
          boxAlert.classList.remove('error');
          boxAlert.classList.add('warning');
          boxAlert.textContent = 'Llene todos los campos, por favor';
          document.querySelector('main').appendChild(boxAlert);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _ingresar.apply(this, arguments);
}
function mensajeRecuperarContraseña(evento) {
  comprobarVentanaSoporte();
  if (!document.getElementById('DialogoRecuperarContraseña')) {
    var _background = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('SECTION', 'background', ['background']);
    var dialogo = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('SECTION', 'DialogoRecuperarContraseña', ['dialogo', 'recuperar-contraseña']);
    _background.insertAdjacentElement('beforeend', dialogo);
    // dialogo.innerHTML = `
    //   <div class="contenidoDialogo">
    //     <div class="textoDescriptivo">
    //       <h1>Restablecer password</h1>
    //       <p>Ingrese su correo electrónico</p>
    //     </div>
    //     <div class="ctInputCorreo form__correo">
    //       <input type="text" id="inputCorreo" class="input-correo" autocomplete="off"/>
    //     </div>
    //     <div id="btsRecuperarContraseña">
    //       <button id="btRecuperarContraseña" class="modal-button modal-button--default-text modal-button--text">Enviar</button>
    //       <button id="btCancelarRC" class="modal-button modal-button--default-text modal-button--text">Cancelar</button>
    //     </div>
    //   </div>
    // `;
    document.getElementById('main').insertAdjacentElement('beforeend', _background);
    // document.getElementById('btCancelarRC').addEventListener('click', quitarMensajeRecuperarContraseña);
    // document.getElementById('btRecuperarContraseña').addEventListener('click', recuperarContraseña);
    //INCOMPLETE: Mientras no se complete el back-end para esta funcionalidad este código estará comentado y el contenido de dialogo sera el siguiente:

    dialogo.innerHTML = "\n      <div class=\"contenidoDialogo\">\n        <div class=\"textoDescriptivo\">\n          <h1>Ante cualquier dificultad para ingresar o usar KIUX, ll\xE1menos</h1>\n          <h2>300 337 01 56</h2>\n        </div>\n      </div>\n    ";
  }
}
function quitarMensajeRecuperarContraseña() {
  document.getElementById('background').remove();
}
function comprobarVentanaSoporte() {
  var SoporteTecnicoElement = document.querySelector('.soporte-tecnico');
  if (SoporteTecnicoElement) {
    SoporteTecnicoElement.remove();
    return true;
  } else return false;
}
function recuperarContraseña() {
  return _recuperarContraseña.apply(this, arguments);
}
function _recuperarContraseña() {
  _recuperarContraseña = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var input, correo, body, result_code, result_message, boxAlert;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          input = document.getElementById('inputCorreo');
          correo = input.value;
          correo = correo.replace(/^\s+|\s+$/g, '');
          if (comprobarCorreo(correo)) {
            body = {
              Correo: correo
            }; // const {resultado} = await PostData(MetodoREST, body, NombreProceso);
            result_code = 0;
            result_message = 'Revise su correo electrónico';
            if (result_code == 0) {
              mostrarDialogoContraseñaRecuperada(result_message);
            } else {
              if (!document.getElementById('boxAlert')) {
                boxAlert = document.createElement('DIV'); // <div></div>
                boxAlert.classList.add('box-message'); // <div class='box-message'></div>
                boxAlert.setAttribute('id', 'boxAlert'); // <div class='box-message' id'boxAlert'></div>
                document.getElementById('background').appendChild(boxAlert);
              }
              boxAlert = document.getElementById('boxAlert');
              boxAlert.classList.remove('warning');
              boxAlert.classList.add('error');
              boxAlert.textContent = result_message;
              OcultarMensaje();
            }
          }
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _recuperarContraseña.apply(this, arguments);
}
function mostrarDialogoContraseñaRecuperada(result_message) {
  if (document.getElementById('DialogoRecuperarContraseña')) {
    document.getElementById('DialogoRecuperarContraseña').remove();
  }
  var dialogo = CreateElement('SECTION', 'DialogoContraseñaRecuperada', ['dialogo', 'contraseña-recuperada']);
  background.insertAdjacentElement('beforeend', dialogo);
  dialogo.innerHTML = "\n      <div class=\"contenidoDialogo\">\n        <div class=\"textoDescriptivo\">\n          <h1>Se ha enviado un correo electr\xF3nico con su nueva contrase\xF1a</h1>\n          <p>".concat(result_message, "</p>\n        </div>\n        <div id=\"btsRecuperarContrase\xF1a\">\n          <button id=\"btCerrarReC\" class=\"modal-button modal-button--default-text modal-button--text\">Cerrar</button>\n        </div>\n      </div>\n    ");
  document.getElementById('btCerrarReC').addEventListener('click', quitarMensajeRecuperarContraseña);
}
function comprobarCorreo(correo) {
  var exprecionCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  if (exprecionCorreo.test(correo)) {
    console.log('El correo esta bien');
    return true;
  } else {
    console.log('El correo esta mal');
    var boxAlert;
    if (!document.getElementById('boxAlert')) {
      boxAlert = document.createElement('DIV'); // <div></div>
      boxAlert.classList.add('box-message'); // <div class='box-message'></div>
      boxAlert.setAttribute('id', 'boxAlert'); // <div class='box-message' id'boxAlert'></div>
      document.getElementById('background').appendChild(boxAlert);
    }
    boxAlert = document.getElementById('boxAlert');
    boxAlert.classList.remove('error');
    boxAlert.classList.add('warning');
    boxAlert.textContent = 'Por favor verifique la información';
    OcultarMensaje();
    return false;
  }
}
function OcultarMensaje() {
  var TimerOcultarMensaje;
  clearTimeout(TimerOcultarMensaje);
  TimerOcultarMensaje = setTimeout(function () {
    if (document.querySelector('.box-message')) {
      document.querySelector('.box-message').remove();
    }
  }, 3000);
}

/***/ }),

/***/ 9037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargarDatosUsuario: () => (/* binding */ CargarDatosUsuario)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BotonesActivos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9850);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);





function CargarDatosUsuario() {
  return _CargarDatosUsuario.apply(this, arguments);
}
function _CargarDatosUsuario() {
  _CargarDatosUsuario = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var path, result, botones_registrar;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          path = "getdatosusuario/".concat(localStorage.getItem('Token'));
          _context.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.CustomFetch)(path);
        case 3:
          result = _context.sent;
          if (!(result.result_code == 0)) {
            _context.next = 20;
            break;
          }
          localStorage.setItem('NombreUsuario', result.nombre_usuario);
          localStorage.setItem('NombreAnexo', result.nombre_anexo);
          localStorage.setItem('PuedeSuplantar', result.puede_suplantar);
          localStorage.setItem('Suplantando', result.suplantando);
          botones_registrar = JSON.stringify(result.botones_registrar);
          localStorage.setItem('BotonesRegistrar', botones_registrar);
          localStorage.setItem('Token', result.new_token);
          if (window.location.pathname.includes('registro')) {
            if ((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(document.querySelectorAll('.btn-oculto')).length > 0) {
              (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(document.querySelectorAll('.btn-oculto')).forEach(function (btnOcultar) {
                btnOcultar.style.display = 'none';
              });
            }
            (0,_BotonesActivos__WEBPACK_IMPORTED_MODULE_4__.BotonesActivos)();
          }
          if (!window.location.pathname.includes('registro')) {
            _context.next = 17;
            break;
          }
          return _context.abrupt("return");
        case 17:
          location.href = 'registro.html';
        case 18:
          _context.next = 22;
          break;
        case 20:
          localStorage.clear();
          location.href = 'login.html';
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _CargarDatosUsuario.apply(this, arguments);
}

/***/ })

}]);