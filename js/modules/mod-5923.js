"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[5923],{

/***/ 5923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompararValidarPasswords: () => (/* binding */ CompararValidarPasswords),
/* harmony export */   ValidarPassword: () => (/* binding */ ValidarPassword)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6822);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3954);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5361);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3029);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2901);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4467);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2407);






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var ValidarPassword = /*#__PURE__*/function () {
  function ValidarPassword(InputElement, BotonAccion) {
    var _this = this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, ValidarPassword);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "InputElement", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "BotonAccion", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "CumpleUnaLetra", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "CumpleUnDigito", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "CumpleLongitudMinima", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "CumpleLongitudMaxima", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "ValidatePassword", (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('DIV', null, ['validate-password']));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "ListaRequisitos", (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('UL', null, ['requirements-list']));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "Requisito1", (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('LI', null, null, 'Incluir letras (a..z)'));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "Requisito2", (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('LI', null, null, 'Incluir dígitos (0..9)'));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "Requisito3", (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('LI', null, null, 'Mínimo 6 carácteres'));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "Requisito4", (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('LI', null, null, 'Máximo 20 carácteres'));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "ValidarUnaLetra", function (event, Requisito) {
      if (event.target.value.match(/[A-z]/)) {
        _this.CumpleUnaLetra = true;
        Requisito.classList.remove('no-cumple');
        Requisito.classList.add('cumple');
      } else {
        _this.CumpleUnaLetra = false;
        Requisito.classList.remove('cumple');
        Requisito.classList.add('no-cumple');
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "ValidarUnDigito", function (event, Requisito) {
      if (event.target.value.match(/[0-9]/)) {
        _this.CumpleUnDigito = true;
        Requisito.classList.remove('no-cumple');
        Requisito.classList.add('cumple');
      } else {
        _this.CumpleUnDigito = false;
        Requisito.classList.remove('cumple');
        Requisito.classList.add('no-cumple');
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "ValidarLongitudMinima", function (event, Requisito) {
      if (event.target.value.length >= 6) {
        _this.CumpleLongitudMinima = true;
        Requisito.classList.remove('no-cumple');
        Requisito.classList.add('cumple');
      } else {
        _this.CumpleLongitudMinima = false;
        Requisito.classList.remove('cumple');
        Requisito.classList.add('no-cumple');
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "ValidarLongitudMaxima", function (event, Requisito) {
      if (event.target.value.length <= 20) {
        _this.CumpleLongitudMaxima = true;
        Requisito.classList.remove('no-cumple');
        Requisito.classList.add('cumple');
      } else {
        _this.CumpleLongitudMaxima = false;
        Requisito.classList.remove('cumple');
        Requisito.classList.add('no-cumple');
      }
    });
    this.InputElement = InputElement;
    this.BotonAccion = BotonAccion;
    this.InputElement.addEventListener('focus', function (event) {
      _this.ValidarPassword(event);
      _this.ComprobarBoton();
    });
    this.InputElement.addEventListener('keyup', function (event) {
      _this.ValidarPassword(event);
      _this.ComprobarBoton();
    });
    this.InputElement.addEventListener('blur', function (event) {
      if (document.querySelector('.validate-password')) {
        event.target.parentElement.removeChild(document.querySelector('.validate-password'));
      }
    });
    this.ValidatePassword.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('P', null, ['validate-password__encabezado'], 'Requisitos del password:'));
    this.ListaRequisitos.insertAdjacentElement('beforeend', this.Requisito1);
    this.ListaRequisitos.insertAdjacentElement('beforeend', this.Requisito2);
    this.ListaRequisitos.insertAdjacentElement('beforeend', this.Requisito3);
    this.ListaRequisitos.insertAdjacentElement('beforeend', this.Requisito4);
    this.ValidatePassword.insertAdjacentElement('beforeend', this.ListaRequisitos);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(ValidarPassword, [{
    key: "ValidarPassword",
    value: function ValidarPassword(event) {
      if (!document.querySelector('.validate-password')) {
        event.target.parentElement.insertAdjacentElement('beforeend', this.ValidatePassword);
      }
      if (event.target.value.length == 0) {
        event.target.parentElement.removeChild(document.querySelector('.validate-password'));
      }
      this.ValidarUnaLetra(event, this.Requisito1);
      this.ValidarUnDigito(event, this.Requisito2);
      this.ValidarLongitudMinima(event, this.Requisito3);
      this.ValidarLongitudMaxima(event, this.Requisito4);
    }
  }, {
    key: "ComprobarBoton",
    value: function ComprobarBoton() {
      if (this.CumpleUnaLetra && this.CumpleUnDigito && this.CumpleLongitudMinima && this.CumpleLongitudMaxima) {
        this.BotonAccion.classList.replace('modal-button--disabled', 'modal-button--enabled');
      } else {
        this.BotonAccion.classList.replace('modal-button--enabled', 'modal-button--disabled');
      }
    }
  }]);
}();
var CompararValidarPasswords = /*#__PURE__*/function (_ValidarPassword2) {
  function CompararValidarPasswords(PrimerInputElement, SegundoInputElement, BotonAccion) {
    var _this2;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, CompararValidarPasswords);
    _this2 = _callSuper(this, CompararValidarPasswords, [PrimerInputElement, BotonAccion]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_this2, "SegundoInputElement", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_this2, "ComparePasswordsDiv", (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('DIV', null, ['compare-passwords']));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_this2, "SamePasswords", false);
    _this2.SegundoInputElement = SegundoInputElement;
    _this2.SegundoInputElement.addEventListener('focus', function (event) {
      _this2.CompararPasswords();
      _this2.ComprobarBoton();
    });
    _this2.SegundoInputElement.addEventListener('keyup', function (event) {
      _this2.CompararPasswords();
      _this2.ComprobarBoton();
    });
    _this2.SegundoInputElement.addEventListener('blur', function (event) {
      if (document.querySelector('.compare-passwords')) {
        event.target.parentElement.removeChild(document.querySelector('.compare-passwords'));
      }
    });
    _this2.ComparePasswordsDiv.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_4__.CreateElement)('P', null, ['compare-passwords__encabezado'], 'Las contraseñas no coinciden'));
    return _this2;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(CompararValidarPasswords, _ValidarPassword2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(CompararValidarPasswords, [{
    key: "ComprobarBoton",
    value: function ComprobarBoton() {
      if (this.CumpleUnaLetra && this.CumpleUnDigito && this.CumpleLongitudMinima && this.CumpleLongitudMaxima && this.SamePasswords) {
        this.BotonAccion.classList.replace('modal-button--disabled', 'modal-button--enabled');
      } else {
        this.BotonAccion.classList.replace('modal-button--enabled', 'modal-button--disabled');
      }
    }
  }, {
    key: "CompararPasswords",
    value: function CompararPasswords() {
      if (this.InputElement.value == this.SegundoInputElement.value) {
        this.SamePasswords = true;
        if (document.querySelector('.compare-passwords')) {
          this.SegundoInputElement.parentElement.removeChild(document.querySelector('.compare-passwords'));
        }
      } else {
        this.SamePasswords = false;
        if (!document.querySelector('.compare-passwords')) {
          this.SegundoInputElement.parentElement.insertAdjacentElement('beforeend', this.ComparePasswordsDiv);
        }
        if (this.SegundoInputElement.value.length == 0) {
          this.SegundoInputElement.parentElement.removeChild(document.querySelector('.compare-passwords'));
        }
      }
    }
  }]);
}(ValidarPassword);

/***/ })

}]);