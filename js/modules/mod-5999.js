"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[5999,5916,7164,4021],{

/***/ 8341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogoEditar_: () => (/* binding */ DialogoEditar_)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3029);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2901);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4467);
/* harmony import */ var _rutas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8856);
/* harmony import */ var _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3384);
/* harmony import */ var _componentes_modal_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7433);







var DialogoEditar_ = /*#__PURE__*/function () {
  function DialogoEditar_(Preregistro_) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, DialogoEditar_);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, "TiempoAsignado", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, "Preregistro_", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, "CantidadTiempo_", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, "Dialogo", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, "Background", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, "Descripcion", void 0);
    this.Preregistro_ = Preregistro_;
    this.ConstruirDialogo();
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(DialogoEditar_, [{
    key: "ConstruirDialogo",
    value: function ConstruirDialogo() {
      var _this = this;
      this.Background = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'background', 'background').getElement();
      document.body.appendChild(this.Background);
      this.Dialogo = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'dialogo', 'dialogo').getElement();
      var DatosPreregistro = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'DatosPreregistros', 'preconcepto').getElement();
      DatosPreregistro.innerHTML = "<div id=\"Proyecto\" class=\"border-style--default editar-registro__nombre-proyecto\" >".concat(this.Preregistro_.titulo, "</div>");
      var CFechaCantidad = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'c-FechaCantidad', 'c-ancho-completo').getElement();
      var FechaPreconcepto = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML_Input('text', 'fechaPreconcepto', 'ancho--default border-style--default c-alto-completo animated').getElement();
      FechaPreconcepto.value = this.Preregistro_.Ruta_.fecha;
      FechaPreconcepto.readOnly = true;
      this.CantidadTiempo_ = new _rutas_js__WEBPACK_IMPORTED_MODULE_0__.InputTiempo_(this, 'ancho--default border-style--default preconcepto__cantidad', false, true);
      this.CantidadTiempo_.Input.value = this.Preregistro_.InputTiempoPreregistro_.Input.value;
      if (this.Preregistro_.Asegurado) {
        this.CantidadTiempo_.Input.classList.add('asegurado');
        this.CantidadTiempo_.Input.disabled = true;
      }
      CFechaCantidad.appendChild(FechaPreconcepto);
      CFechaCantidad.appendChild(this.CantidadTiempo_.Input);
      var ContenedorDescripcion = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'ContenedorDescripcion', 'contenedor-descripcion').getElement();
      this.Descripcion = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'descripcion', 'border-style--default contenedor-descripcion__descripcion', null, this.Preregistro_.descripcionPreregistro.innerHTML).getElement();
      this.Descripcion.contentEditable = true;
      this.Descripcion.spellcheck = false;
      var ContenedorDescripcionHerremientas = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', null, 'contenedor-descripcion__herramientas herramientas-descripcion').getElement();
      var HerramientaIdioma = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('BUTTON', 'Idioma', 'herramientas-descripcion__opcion idioma-proyecto', null, 'ES').getElement();
      var HerramientaOrtografia = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('BUTTON', 'Ortografia', 'herramientas-descripcion__opcion', null, "<svg class=\"datos-registro__botones_button_svg\" style=\"transform: scale(1.2)\" viewBox=\"0 0 180 216\"><use xlink:href=\"../img/sprite.svg#btn-spelling\"></use></svg>").getElement();
      var HerramientaClip = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('BUTTON', 'Clip', 'herramientas-descripcion__opcion', null, "<svg class=\"datos-registro__botones_button_svg\" style=\"transform: scale(1.2)\" viewBox=\"0 0 180 216\"><use xlink:href=\"../img/sprite.svg#btn-clip\"></use></svg>").getElement();
      var HerramientaGuardar = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('BUTTON', 'Cargar', 'herramientas-descripcion__opcion', null, "<svg class=\"datos-registro__botones_button_svg\" style=\"transform: scale(1.2)\" viewBox=\"0 0 180 216\"><use xlink:href=\"../img/sprite.svg#guardar\"></use></svg>").getElement();
      HerramientaOrtografia.addEventListener('click', function () {
        _this.ClickOrtografia();
      });
      HerramientaGuardar.addEventListener('click', this.GuardarDatos.bind(this));
      ContenedorDescripcionHerremientas.appendChild(HerramientaIdioma);
      ContenedorDescripcionHerremientas.appendChild(HerramientaOrtografia);
      ContenedorDescripcionHerremientas.appendChild(HerramientaClip);
      ContenedorDescripcionHerremientas.appendChild(HerramientaGuardar);
      ContenedorDescripcion.appendChild(this.Descripcion);
      ContenedorDescripcion.appendChild(ContenedorDescripcionHerremientas);
      DatosPreregistro.appendChild(CFechaCantidad);
      DatosPreregistro.appendChild(ContenedorDescripcion);
      this.Background.appendChild(this.Dialogo);
      this.Dialogo.appendChild(DatosPreregistro);
      this.OcultarScroll();
      document.addEventListener('keydown', this.RemoverPreconcepto.bind(this), false);
      this.Background.addEventListener('mousedown', this.CerrarPreconcepto.bind(this), false);
    }
  }, {
    key: "CerrarVentanaEmergente",
    value: function CerrarVentanaEmergente() {
      this.QuitarBackgroundMostrarScroll();
      //UPDATE: Si se han completado datos dentro de la ventana se debe preguntar si se quiere salir sin guardar.
    }
  }, {
    key: "ClickOrtografia",
    value: function ClickOrtografia() {
      var _this2 = this;
      if (this.Descripcion.textContent.trim().length > 0) {
        var IdiomaSeleccionado = Idioma.textContent.toLowerCase() == 'en' ? 'en-US' : Idioma.textContent.toLowerCase();
        var TextoRevisar = this.Descripcion.textContent.trim();
        console.log(Idioma);
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
          // console.log('Respuesta de la API:', data);
          var hallazgo = data.matches;
          var ResetStyleDescripcion = function ResetStyleDescripcion() {
            setTimeout(function () {
              _this2.Descripcion.style.border = '0.0625rem solid #dbdbdb';
              _this2.Descripcion.style.background = '#fefefe';
            }, 2500);
          };
          if (hallazgo.length === 0) {
            clearTimeout(ResetStyleDescripcion);
            _this2.Descripcion.style.border = '0.0625rem double #75e3b8';
            _this2.Descripcion.style.background = '#d1f5e7';
            ResetStyleDescripcion();
          } else {
            clearTimeout(ResetStyleDescripcion);
            _this2.Descripcion.style.border = '0.0625rem double #e39d93';
            _this2.Descripcion.style.background = '#f5dedb';
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
          _this2.Descripcion.innerHTML = TextoRevisar;
          var detectIssue = function detectIssue(e) {
            _this2.Descripcion.setAttribute('contenteditable', false);
            var element = e;
            var id = e.id;
            var N = id.substr(9, id.length - 8);
            var mensaje = hallazgo[N].message;
            var tipoDeHallazgo = hallazgo[N].rule.issueType;

            // let issueTypeMensaje = CreateElement('DIV', 'issueTypeMensaje', ['issueType-mensaje']);
            var issueTypeMensaje = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'issueTypeMensaje', 'issueType-mensaje').getElement();
            _this2.Descripcion.insertAdjacentElement('beforeend', issueTypeMensaje);

            // let c_IssueTypeMensaje = CreateElement('DIV', 'c-IssueTypeMensaje', ['c-issueType-mensaje', `issueType-${tipoDeHallazgo}`]);
            var c_IssueTypeMensaje = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'c-IssueTypeMensaje', "c-issueType-mensaje issueType-".concat(tipoDeHallazgo)).getElement();
            issueTypeMensaje.insertAdjacentElement('beforeend', c_IssueTypeMensaje);
            c_IssueTypeMensaje.insertAdjacentElement('beforeend', new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('DIV', 'issueTypeTitulo', 'issueType-titulo', null, mensaje).getElement());
            c_IssueTypeMensaje.insertAdjacentElement('beforeend', new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('UL', 'issueTypeLista', "issueType-lista").getElement());
            var reemplazo = hallazgo[N].replacements;
            console.log(reemplazo);
            for (var _i = 0; _i < reemplazo.length; _i++) {
              // let elReemplazo = CreateElement('LI', i, [`issueType-${tipoDeHallazgo}--item`], reemplazo[i].value);
              var elReemplazo = new _elements_CrearElementoHTML_js__WEBPACK_IMPORTED_MODULE_4__.CrearElementoHTML('LI', _i, "issueType-".concat(tipoDeHallazgo, "--item"), null, reemplazo[_i].value).getElement();
              elReemplazo.addEventListener('click', function (e) {
                document.getElementById(id).outerHTML = e.target.textContent;
                issueTypeMensaje.remove();
                _this2.Descripcion.setAttribute('contenteditable', true);
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
              _this2.Descripcion.setAttribute('contenteditable', true);
            });
          };
          function myClosure() {
            detectIssue(this);
          }
          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.querySelectorAll('.issueType')).forEach(function (issue) {
            issue.addEventListener('click', myClosure);
          });
        })["catch"](function (error) {
          console.error('Error al realizar la solicitud:', error);
        });
      }
    }
  }, {
    key: "OcultarScroll",
    value: function OcultarScroll() {
      document.getElementById('main').classList.add('ocultar-scroll');
    }
  }, {
    key: "QuitarBackgroundMostrarScroll",
    value: function QuitarBackgroundMostrarScroll() {
      document.getElementById('background').remove();
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }, {
    key: "CerrarPreconcepto",
    value: function CerrarPreconcepto(event) {
      if (event.target.id == 'background' && document.getElementById('DatosPreregistros')) {
        if (true) {
          this.CerrarVentanaEmergente();
        }
      }
    }
  }, {
    key: "RemoverPreconcepto",
    value: function RemoverPreconcepto(event) {
      if (event.key === 'Escape' && (document.getElementById('background') != null || document.getElementById('background') != undefined)) {
        if (!document.querySelector('#second-background')) {
          this.CerrarVentanaEmergente();
        }
        document.removeEventListener('keydown', this.RemoverPreconcepto.bind(this), false); //FIXME: No se está eliminando adecuadamente la función.
      }
    }
  }, {
    key: "GuardarDatos",
    value: function GuardarDatos() {
      if (!this.Preregistro_.Activo) {
        this.Preregistro_.ActivarPreregistro();
      }
      if (this.GuardarParametros()) {
        this.CerrarVentanaEmergente();
      } else {
        new _componentes_modal_Error_js__WEBPACK_IMPORTED_MODULE_6__.MostrarMensajeError(this.Dialogo, 'Error', 'No es posible distribuir el tiempo.');
      }
      this.Preregistro_.descripcionPreregistro.innerHTML = this.Descripcion.innerHTML;
    }
  }, {
    key: "GuardarParametros",
    value: function GuardarParametros() {
      if (!this.Preregistro_.Asegurado) {
        var AnteriorTiempoAsignadoPreregistroTexto = this.Preregistro_.InputTiempoPreregistro_.Input.value;
        this.Preregistro_.TiempoAsignado = this.TiempoAsignado ? this.TiempoAsignado : 0;
        if (this.TiempoAsignado && this.Preregistro_.InputTiempoPreregistro_.Input.value !== this.CantidadTiempo_.Input.value) {
          this.Preregistro_.AsegurarTiempo();
        }
        this.Preregistro_.InputTiempoPreregistro_.Input.value = this.CantidadTiempo_.Input.value ? this.CantidadTiempo_.Input.value : '00:00';
        if (!this.Preregistro_.Ruta_.Distribuir_Sumar_Tiempo()) {
          this.TiempoAsignado = this.Preregistro_.InputTiempoPreregistro_.AnteriorTiempoAsignado;
          this.Preregistro_.InputTiempoPreregistro_.Input.value = AnteriorTiempoAsignadoPreregistroTexto;
          this.CantidadTiempo_.Input.value = this.Preregistro_.InputTiempoPreregistro_.Input.value;
          this.Preregistro_.DesasegurarTiempo();
          return false;
        } else return true;
      } else return true;
    }
  }]);
}();

/***/ }),

/***/ 8856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InputTiempo_: () => (/* binding */ InputTiempo_)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./src/js/componentes/encabezado.js + 18 modules
var encabezado = __webpack_require__(423);
// EXTERNAL MODULE: ./src/js/utils/Color.js
var Color = __webpack_require__(2188);
// EXTERNAL MODULE: ./src/js/componentes/modal/Error.js
var Error = __webpack_require__(7433);
// EXTERNAL MODULE: ./src/js/utils/mascaraInput.js
var mascaraInput = __webpack_require__(4021);
// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 9 modules
var format = __webpack_require__(7044);
// EXTERNAL MODULE: ./src/js/registro/modal/datepicker-options.js
var datepicker_options = __webpack_require__(5916);
// EXTERNAL MODULE: ./src/js/elements/CrearElementoHTML.js
var CrearElementoHTML = __webpack_require__(3384);
// EXTERNAL MODULE: ./src/js/api.js
var api = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/air-datepicker/index.es.js
var index_es = __webpack_require__(5836);
// EXTERNAL MODULE: ./src/js/pages/rutas/dialogo_edtitar.js
var dialogo_edtitar = __webpack_require__(8341);
;// CONCATENATED MODULE: ./src/img/unlink-svgrepo-com.svg
/* harmony default export */ const unlink_svgrepo_com = (__webpack_require__.p + "img/unlink-svgrepo-com.svg");
;// CONCATENATED MODULE: ./src/img/unlink-svgrepo-com_dark.svg
/* harmony default export */ const unlink_svgrepo_com_dark = (__webpack_require__.p + "img/unlink-svgrepo-com_dark.svg");
// EXTERNAL MODULE: ./src/img/delete-1-svgrepo-com.svg
var delete_1_svgrepo_com = __webpack_require__(4935);
;// CONCATENATED MODULE: ./src/img/sprite.svg
/* harmony default export */ const sprite = (__webpack_require__.p + "img/sprite.svg");
;// CONCATENATED MODULE: ./src/js/pages/rutas/rutas.js



function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
















(0,encabezado.Encabezado)();
var Rutas = [];
var Api = new api.API();
var _Ruta = /*#__PURE__*/new WeakMap();
var Ruta_ = /*#__PURE__*/function () {
  function Ruta_(id, fecha, nombre, color, preregistros, clasificaciones) {
    (0,classCallCheck/* default */.A)(this, Ruta_);
    (0,defineProperty/* default */.A)(this, "id", void 0);
    (0,defineProperty/* default */.A)(this, "fecha", void 0);
    (0,defineProperty/* default */.A)(this, "nombre", void 0);
    (0,defineProperty/* default */.A)(this, "color", void 0);
    (0,defineProperty/* default */.A)(this, "JSON_Preregistros", void 0);
    (0,defineProperty/* default */.A)(this, "Preregistros_", []);
    (0,defineProperty/* default */.A)(this, "clasificaciones", void 0);
    (0,defineProperty/* default */.A)(this, "InputTiempoTotal_", void 0);
    (0,defineProperty/* default */.A)(this, "InputCheckAsegurar", void 0);
    (0,defineProperty/* default */.A)(this, "tiempoTotalMinutos", 0);
    _classPrivateFieldInitSpec(this, _Ruta, new CrearElementoHTML.CrearElementoHTML('DIV', "Ruta_".concat(Rutas.length + 1), 'ruta').getElement());
    (0,defineProperty/* default */.A)(this, "contenedor", document.getElementById('vigilancia_judicial-Rutas'));
    this.id = id;
    this.fecha = fecha;
    this.nombre = nombre;
    this.color = color;
    this.JSON_Preregistros = preregistros;
    this.clasificaciones = clasificaciones;
    this.InputTiempoTotal_ = new InputTiempo_(this, 'inputTiempoTotal', true);
    this.InputCheckAsegurar = new CrearElementoHTML.CrearElementoHTML_Input('checkbox', null, null, null, null, 'Asegurar tiempo').getElement();
    this.contenedor.appendChild(_classPrivateFieldGet(_Ruta, this));
    this.construirRuta();
  }
  return (0,createClass/* default */.A)(Ruta_, [{
    key: "construirRuta",
    value: function construirRuta() {
      var _this = this;
      this.InputTiempoTotal_.Input.readOnly = true;
      var ColorHSL = (0,Color.GetHSL)(this.color);
      var background_color = "hsl(".concat(ColorHSL[0], ", ").concat(ColorHSL[1], "%, ").concat(ColorHSL[2], "%);");
      _classPrivateFieldGet(_Ruta, this).style = "border: solid 1px ".concat(background_color, ";");
      var HeaderRuta = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'headerRuta', "background-color:  ".concat(background_color, ";")).getElement();
      var FooterRuta = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'footerRuta', "background-color:  ".concat(background_color, ";")).getElement();
      var ContainerPregistros = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'containerPreregistros').getElement();
      _classPrivateFieldGet(_Ruta, this).appendChild(HeaderRuta);
      _classPrivateFieldGet(_Ruta, this).appendChild(ContainerPregistros);
      _classPrivateFieldGet(_Ruta, this).appendChild(FooterRuta);
      HeaderRuta.appendChild(new CrearElementoHTML.CrearElementoHTML_Text('P', "".concat(this.nombre, " - ").concat(this.fecha), null, 'ruta_titulo').getElement());
      var sideHeaderRuta = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'sideHeaderRuta').getElement();
      sideHeaderRuta.appendChild(this.InputTiempoTotal_.Input);
      sideHeaderRuta.appendChild(new CrearElementoHTML.CrearElementoHTML_Imagen('../img/unlink-svgrepo-com.svg', 'KIUX-Icon-blocked').getElement());
      sideHeaderRuta.appendChild(this.InputCheckAsegurar);
      HeaderRuta.appendChild(sideHeaderRuta);
      var BtnTerminar = new CrearElementoHTML.CrearElementoHTML_Button(false, 'BtnTerminarRuta', 'BtnTerminarRuta ancho--default', null, 'Terminar').getElement();
      BtnTerminar.addEventListener('click', function () {
        _this.terminar();
      });
      FooterRuta.appendChild(BtnTerminar);
      this.construirPreregistros(ContainerPregistros);
      this.InputCheckAsegurar.addEventListener('change', function (e) {
        if (e.target.checked) {
          _this.ActivarTiempoFijo();
        } else {
          _this.DesactivarTiempoFijo();
        }
      });
    }
  }, {
    key: "construirPreregistros",
    value: function construirPreregistros(contenedor) {
      var _this2 = this;
      this.JSON_Preregistros.forEach(function (preregistro) {
        var Preregistro = new Preregistro_(preregistro.id, preregistro.titulo, preregistro.color, preregistro.idioma, preregistro.proyecto, preregistro.estado, _this2);
        contenedor.appendChild(Preregistro.GetPreregistro());
        _this2.Preregistros_.push(Preregistro);
      });
    }
  }, {
    key: "terminar",
    value: function terminar() {
      var ResultadoRuta = {
        id: this.id,
        nombre: this.nombre,
        fecha: this.fecha,
        registros: []
      };
      var PreregistrosActivos = this.Preregistros_.filter(function (preregistro) {
        return preregistro.Activo;
      });
      var PreregistrosSinDescripcion = 0;
      var PreregistrosSinTiempo = 0;
      var FormatoDeHoraErroneo = 0;
      var regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
      PreregistrosActivos.forEach(function (preregistro) {
        if (!preregistro.descripcionPreregistro.innerHTML || preregistro.descripcionPreregistro.innerHTML == '<br>') {
          PreregistrosSinDescripcion++;
        }
        if (preregistro.TiempoAsignado == 0) {
          PreregistrosSinTiempo++;
        }
        if (!regex.test(preregistro.InputTiempoPreregistro_.Input.value)) {
          FormatoDeHoraErroneo++;
        }
        if (!PreregistrosSinDescripcion || !PreregistrosSinTiempo || !FormatoDeHoraErroneo) {
          var registro = {
            id: preregistro.id,
            descripcion: preregistro.descripcionPreregistro.innerHTML,
            tiempo: preregistro.TiempoAsignado
          };
          ResultadoRuta.registros.push(registro);
        }
      });
      if (PreregistrosSinDescripcion || PreregistrosSinTiempo || FormatoDeHoraErroneo) {
        var MensajeE = 'Tienes registros incompletos: tienes' + (PreregistrosSinDescripcion ? " ".concat(PreregistrosSinDescripcion, " registro").concat(PreregistrosSinDescripcion > 1 ? 's' : '', " sin descripci\xF3n") : '') + (PreregistrosSinDescripcion && PreregistrosSinTiempo ? ' y' : '') + (PreregistrosSinTiempo ? " ".concat(PreregistrosSinTiempo, " registro").concat(PreregistrosSinTiempo > 1 ? 's' : '', " sin tiempo") : '') + '.';
        if (FormatoDeHoraErroneo) {
          console.log('Preciona Enter en la hora para darle formato');
        }
        new Error.MostrarErrorRuta('Error', MensajeE);
      } else {
        if (ResultadoRuta.registros.length) {
          new Error.MostrarError(JSON.stringify(ResultadoRuta));
        } else {
          new Error.MostrarError('Vacio', 'No hay registros por actualizar');
        }
      }
    }
  }, {
    key: "DistribuirTiempo",
    value: function DistribuirTiempo() {
      var NumeroDeActivos = this.Contar_Registros_Activos_Sin_Proteger();
      var TiempoGeneral_RestandoFijos = this.tiempoTotalMinutos;
      var valorDistribuido = null;
      var Resto = 0;
      var Asegurados = 0;
      this.Preregistros_.forEach(function (element) {
        if (element.Asegurado && element.Activo) {
          TiempoGeneral_RestandoFijos -= element.TiempoAsignado;
          Asegurados++;
        }
      });
      if (NumeroDeActivos) {
        valorDistribuido = parseInt(TiempoGeneral_RestandoFijos / NumeroDeActivos);
        Resto = TiempoGeneral_RestandoFijos % NumeroDeActivos;
      }
      if (valorDistribuido < 1 && Asegurados) {
        new Error.MostrarErrorRuta('Error', 'No es posible distribuir el tiempo.');
        return false;
      }
      this.Preregistros_.forEach(function (element) {
        var Valor = valorDistribuido;
        if (element.Activo && !element.Asegurado) {
          if (Resto > 0) {
            Valor += 1;
            Resto--;
          }
          element.IngresarValorTiempo(Valor);
        }
      });
      return true;
    }
  }, {
    key: "SumarTiempos",
    value: function SumarTiempos() {
      var _this3 = this;
      this.tiempoTotalMinutos = 0;
      this.Preregistros_.forEach(function (preregistro) {
        if (preregistro.Activo) {
          _this3.tiempoTotalMinutos += preregistro.TiempoAsignado;
        }
      });
      this.InputTiempoTotal_.Input.value = Minutos_a_Horas(this.tiempoTotalMinutos);
      return true;
    }
  }, {
    key: "Distribuir_Sumar_Tiempo",
    value: function Distribuir_Sumar_Tiempo() {
      if (this.InputCheckAsegurar.checked) {
        return this.DistribuirTiempo();
      } else {
        return this.SumarTiempos();
      }
    }
  }, {
    key: "Contar_Registros_Activos_Sin_Proteger",
    value: function Contar_Registros_Activos_Sin_Proteger() {
      var NumeroDeActivos = 0;
      this.Preregistros_.forEach(function (element) {
        if (element.Activo && !element.Asegurado) NumeroDeActivos++;
      });
      return NumeroDeActivos;
    }
  }, {
    key: "ActivarTiempoFijo",
    value: function ActivarTiempoFijo() {
      this.InputTiempoTotal_.Input.readOnly = false;
      this.Distribuir_Sumar_Tiempo();
    }
  }, {
    key: "DesactivarTiempoFijo",
    value: function DesactivarTiempoFijo() {
      this.InputTiempoTotal_.Input.readOnly = true;
      this.Preregistros_.forEach(function (preregistro) {
        if (preregistro.Asegurado) {
          preregistro.InputTiempoPreregistro_.Input.classList.remove('asegurado');
          preregistro.Asegurado = false;
          preregistro.botonDesasegurar_Asegurar.disabled = true;
          preregistro.InputTiempoPreregistro_.Input.disabled = false;
        }
      });
    }
  }]);
}();
var _Preregistro = /*#__PURE__*/new WeakMap();
var Preregistro_ = /*#__PURE__*/function () {
  function Preregistro_(id, titulo, color, idioma, proyecto, estado, ruta) {
    (0,classCallCheck/* default */.A)(this, Preregistro_);
    _classPrivateFieldInitSpec(this, _Preregistro, new CrearElementoHTML.CrearElementoHTML('DIV', null, 'preregistro').getElement());
    (0,defineProperty/* default */.A)(this, "Ruta_", void 0);
    (0,defineProperty/* default */.A)(this, "Activo", false);
    (0,defineProperty/* default */.A)(this, "Asegurado", false);
    (0,defineProperty/* default */.A)(this, "TiempoAsignado", 0);
    (0,defineProperty/* default */.A)(this, "id", void 0);
    (0,defineProperty/* default */.A)(this, "titulo", void 0);
    (0,defineProperty/* default */.A)(this, "color", void 0);
    (0,defineProperty/* default */.A)(this, "idioma", void 0);
    (0,defineProperty/* default */.A)(this, "proyecto", void 0);
    (0,defineProperty/* default */.A)(this, "estado", void 0);
    (0,defineProperty/* default */.A)(this, "descripcionPreregistro", void 0);
    (0,defineProperty/* default */.A)(this, "selectClasificacion", void 0);
    (0,defineProperty/* default */.A)(this, "InputTiempoPreregistro_", void 0);
    (0,defineProperty/* default */.A)(this, "botonDesasegurar_Asegurar", void 0);
    (0,defineProperty/* default */.A)(this, "botonDeshabilitar", void 0);
    this.id = id;
    this.titulo = titulo;
    this.color = color;
    this.idioma = idioma;
    this.proyecto = proyecto;
    this.estado = estado;
    this.Ruta_ = ruta;
    this.construirPreregistro();
  }
  return (0,createClass/* default */.A)(Preregistro_, [{
    key: "construirPreregistro",
    value: function construirPreregistro() {
      var _this4 = this;
      var ColorHSL = (0,Color.GetHSL)(this.color);
      var background_color = "background-color: hsl(".concat(ColorHSL[0], ", ").concat(ColorHSL[1], "%, ").concat(ColorHSL[2], "%);");
      var background_color_2 = "background-color: hsl(".concat(ColorHSL[0], ", ").concat(ColorHSL[1], "%, 95%);");
      var headerPreregistro = new CrearElementoHTML.CrearElementoHTML('Div', null, 'headerPreregistro', background_color).getElement();
      var contentPreregistro = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'contentPreregistro', background_color_2).getElement();
      var botonesPreregistro = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'botonesPreregistro').getElement();
      headerPreregistro.appendChild(new CrearElementoHTML.CrearElementoHTML('DIV', null, 'idioma', "color: ".concat((0,Color.ColorRGB)(this.color)), "<span>".concat(this.idioma, "</span>")).getElement());
      headerPreregistro.appendChild(new CrearElementoHTML.CrearElementoHTML('DIV', null, 'headerPreregistro_titulo', null, this.titulo).getElement());
      this.descripcionPreregistro = new CrearElementoHTML.CrearElementoHTML_Text('P', '', null, 'descripcionPreregistro disabled').getElement();
      this.selectClasificacion = new CrearElementoHTML.CrearElementoHTML_Select(this.Ruta_.clasificaciones.map(function (cla) {
        return cla.clasificacion;
      }), 'clasificacion', null, 'selectClasificacion').getElement();
      this.InputTiempoPreregistro_ = new InputTiempo_(this, 'inputTiempoPreregistro');
      this.botonDesasegurar_Asegurar = new CrearElementoHTML.CrearElementoHTML_Button(true, 'botonDesasegurar_AsegurarTiempo', 'botonDesasegurar_AsegurarTiempo').getElement();
      this.botonDeshabilitar = new CrearElementoHTML.CrearElementoHTML_Button(true, 'BotonDeshabilitar', 'botonDeshabilitar').getElement();
      this.botonDesasegurar_Asegurar.appendChild(new CrearElementoHTML.CrearElementoHTML_Imagen('../img/unlink-svgrepo-com_dark.svg').getElement());
      this.botonDeshabilitar.appendChild(new CrearElementoHTML.CrearElementoHTML_Imagen('../img/delete-1-svgrepo-com.svg').getElement());
      botonesPreregistro.appendChild(this.InputTiempoPreregistro_.Input);
      botonesPreregistro.appendChild(this.botonDesasegurar_Asegurar);
      botonesPreregistro.appendChild(this.botonDeshabilitar);
      var Descripcion_Candado = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'descripcion_candado').getElement();
      Descripcion_Candado.innerHTML = "<svg class=\"svg_img\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#c26\"></use></svg>";
      Descripcion_Candado.appendChild(this.descripcionPreregistro);
      var Botones_Plantillas = new CrearElementoHTML.CrearElementoHTML('DIV', null, 'botones_plantillas').getElement();
      Botones_Plantillas.appendChild(this.selectClasificacion);
      Botones_Plantillas.appendChild(botonesPreregistro);
      contentPreregistro.appendChild(Descripcion_Candado);
      contentPreregistro.appendChild(Botones_Plantillas);
      _classPrivateFieldGet(_Preregistro, this).appendChild(headerPreregistro);
      _classPrivateFieldGet(_Preregistro, this).appendChild(contentPreregistro);
      this.InputTiempoPreregistro_.Input.disabled = true;
      this.descripcionPreregistro.textContent = '';
      this.descripcionPreregistro.addEventListener('click', function () {
        if (!_this4.descripcionPreregistro.classList.contains('disabled')) new dialogo_edtitar.DialogoEditar_(_this4);
      });
      var observerDescripcion = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
          if (mutation.type === 'childList' && mutation.target.innerHTML) {
            _this4.cambioEnDescripcion();
          }
        });
      });
      observerDescripcion.observe(this.descripcionPreregistro, {
        childList: true,
        subtree: false,
        characterData: true,
        characterDataOldValue: true
      });
      this.botonDesasegurar_Asegurar.addEventListener('click', function () {
        _this4.DesasegurarTiempo();
      });
      this.botonDeshabilitar.addEventListener('click', function () {
        _this4.DesactivarPreregistro();
      });
      this.selectClasificacion.addEventListener('change', function (e) {
        _this4.seleccionarClasificacion(e);
      });
    }
  }, {
    key: "GetPreregistro",
    value: function GetPreregistro() {
      return _classPrivateFieldGet(_Preregistro, this);
    }
  }, {
    key: "AsegurarTiempo",
    value: function AsegurarTiempo() {
      if (this.Ruta_.InputCheckAsegurar.checked) {
        if (!this.InputTiempoPreregistro_.Input.classList.contains('asegurado') && !this.Asegurado) {
          this.InputTiempoPreregistro_.Input.classList.add('asegurado');
          this.Asegurado = true;
          this.botonDesasegurar_Asegurar.disabled = false;
          this.InputTiempoPreregistro_.Input.disabled = true;
        }
        this.Ruta_.Distribuir_Sumar_Tiempo();
      }
    }
  }, {
    key: "DesasegurarTiempo",
    value: function DesasegurarTiempo() {
      if (this.InputTiempoPreregistro_.Input.classList.contains('asegurado') && this.Asegurado) {
        this.InputTiempoPreregistro_.Input.classList.remove('asegurado');
        this.Asegurado = false;
        this.botonDesasegurar_Asegurar.disabled = true;
        this.InputTiempoPreregistro_.Input.disabled = false;
      }
      this.Ruta_.Distribuir_Sumar_Tiempo();
    }
  }, {
    key: "DesactivarPreregistro",
    value: function DesactivarPreregistro() {
      this.Activo = false;
      this.botonDesasegurar_Asegurar.disabled = true;
      this.botonDeshabilitar.disabled = true;
      this.InputTiempoPreregistro_.Input.disabled = true;
      this.InputTiempoPreregistro_.ReiniciarValores();
      this.descripcionPreregistro.classList.add('disabled');
      this.descripcionPreregistro.textContent = '';
      this.selectClasificacion.value = 'primeraOpcion';
      this.TiempoAsignado = 0;
      this.descripcionPreregistro.classList.add('disabled');
      this.Ruta_.Distribuir_Sumar_Tiempo();
    }
  }, {
    key: "ActivarPreregistro",
    value: function ActivarPreregistro() {
      this.Activo = true;
      this.botonDeshabilitar.disabled = false;
      this.InputTiempoPreregistro_.Input.disabled = false;
      this.InputTiempoPreregistro_.Input.value = '00:00';
      this.descripcionPreregistro.classList.remove('disabled');
      this.Ruta_.Distribuir_Sumar_Tiempo();
    }
  }, {
    key: "seleccionarClasificacion",
    value: function seleccionarClasificacion(e) {
      this.descripcionPreregistro.textContent = this.Ruta_.clasificaciones.find(function (cla) {
        return cla.clasificacion == e.target.options[e.target.selectedIndex].text;
      }).plantilla;
    }
  }, {
    key: "cambioEnDescripcion",
    value: function cambioEnDescripcion() {
      if (!this.Activo) {
        this.ActivarPreregistro();
      }
    }
  }, {
    key: "IngresarValorTiempo",
    value: function IngresarValorTiempo(tiempoMinutos) {
      this.TiempoAsignado = tiempoMinutos;
      this.InputTiempoPreregistro_.Input.value = Minutos_a_Horas(tiempoMinutos);
    }
  }]);
}();
var InputTiempo_ = /*#__PURE__*/function () {
  function InputTiempo_(Contenedor_, classList, InputCabecera, InputVentanaEditar) {
    var _this5 = this;
    (0,classCallCheck/* default */.A)(this, InputTiempo_);
    (0,defineProperty/* default */.A)(this, "Input", void 0);
    (0,defineProperty/* default */.A)(this, "ValorAnterior", '');
    (0,defineProperty/* default */.A)(this, "ValorAnteriorEscritura", '');
    (0,defineProperty/* default */.A)(this, "Preregistro_", void 0);
    (0,defineProperty/* default */.A)(this, "Ruta_", void 0);
    (0,defineProperty/* default */.A)(this, "VentanaEditar_", void 0);
    (0,defineProperty/* default */.A)(this, "tiempoRegistradoMinutos", 0);
    (0,defineProperty/* default */.A)(this, "AnteriorTiempoAsignado", 0);
    if (InputVentanaEditar) this.VentanaEditar_ = Contenedor_;else if (InputCabecera) this.Ruta_ = Contenedor_;else this.Preregistro_ = Contenedor_;
    this.Input = new CrearElementoHTML.CrearElementoHTML_Input('text', null, classList).getElement();
    (0,mascaraInput.aplicarMascaraHora)(null, this.Input);
    this.Input.classList.add('InputTiempo');
    this.Input.addEventListener('input', function (e) {
      _this5.verificarValor(e);
    });
    this.Input.addEventListener('keypress', function (e) {
      if (e.key == 'Enter') {
        _this5.EnterEnInput();
      }
    });
    this.Input.addEventListener('blur', function () {
      _this5.EnterEnInput();
    });
  }
  return (0,createClass/* default */.A)(InputTiempo_, [{
    key: "verificarValor",
    value: function verificarValor(e) {
      var regex = /^(?:[0-9]|0[0-9]|1[0-9]|2[0-3])?(?::(?:[0-9]|[0-5][0-9])?)?$|^$/;
      if (regex.test(e.target.value)) {
        this.ValorAnteriorEscritura = e.target.value;
      } else {
        e.target.value = this.ValorAnteriorEscritura;
      }
    }
  }, {
    key: "EnterEnInput",
    value: function EnterEnInput() {
      if (this.VentanaEditar_) {
        this.VentanaEditar_.TiempoAsignado = Horas_a_Minutos(this.Input.value);
        this.Input.value = Minutos_a_Horas(this.VentanaEditar_.TiempoAsignado);
      } else {
        if (this.Ruta_) {
          this.Ruta_.tiempoTotalMinutos = Horas_a_Minutos(this.Input.value);
        } else {
          this.AnteriorTiempoAsignado = this.Preregistro_.TiempoAsignado;
          this.Preregistro_.TiempoAsignado = Horas_a_Minutos(this.Input.value);
          this.Preregistro_.AsegurarTiempo();
        }
        if (this.Preregistro_ ? this.Preregistro_.Ruta_.Distribuir_Sumar_Tiempo() : this.Ruta_.Distribuir_Sumar_Tiempo()) {
          if (!this.Ruta_) {
            this.AnteriorTiempoAsignado = this.Preregistro_.TiempoAsignado != this.AnteriorTiempoAsignado ? this.Preregistro_.TiempoAsignado : this.AnteriorTiempoAsignado;
          }
          this.Input.value = Minutos_a_Horas(Horas_a_Minutos(this.Input.value));
          this.ValorAnterior = this.Input.value != this.ValorAnterior ? this.Input.value : this.ValorAnterior;
        } else {
          if (!this.Ruta_) {
            this.Preregistro_.TiempoAsignado = this.AnteriorTiempoAsignado;
            this.Input.value = Minutos_a_Horas(this.Preregistro_.TiempoAsignado);
            this.Preregistro_.DesasegurarTiempo();
          } else {
            this.Input.value = this.ValorAnterior;
          }
        }
      }
    }
  }, {
    key: "getInput",
    value: function getInput() {
      return this.Input;
    }
  }, {
    key: "ReiniciarValores",
    value: function ReiniciarValores() {
      this.ValorAnterior = '';
      this.ValorAnteriorEscritura = '';
      this.tiempoRegistradoMinutos = 0;
      this.AnteriorTiempoAsignado = 0;
      this.Input.value = '';
      this.Input.classList.remove('asegurado');
    }
  }]);
}();
Api.GetData("../assets/rutas.json").then(function (data) {
  add_RutasSelect(data.rutas_vigilancia);
});
function add_RutasSelect(rutas) {
  var select = document.getElementById('selectRuta');
  select.appendChild(new CrearElementoHTML.CrearElementoHTML_Option('vacia', null, null, 'display: none', 'Selecciona una ruta').getElement()); // [x] <-- Descomentar esta linea
  rutas.forEach(function (ruta) {
    var option = new CrearElementoHTML.CrearElementoHTML_Option(ruta.id_ruta, null, null, null, ruta.nombre_ruta).getElement();
    select.appendChild(option);
  });
}
document.getElementById('ButtonAgregarRegistros').addEventListener('click', function () {
  AgregarRuta();
});
function AgregarRuta() {
  var SelectRuta = document.getElementById('selectRuta');
  var FechaParaRuta = document.getElementById('fechaParaRuta');
  if (SelectRuta.value != 'vacia' && FechaParaRuta.getAttribute('data-value') && FechaParaRuta.getAttribute('data-value') != 'undefined') {
    ConstruirRuta(SelectRuta.value, FechaParaRuta.getAttribute('data-value'));
    SelectRuta.value = 'vacia';
  } else if (SelectRuta.value == 'vacia' && (!FechaParaRuta.getAttribute('data-value') || FechaParaRuta.getAttribute('data-value') == 'undefined')) {
    new Error.MostrarErrorRuta('Completa los campos');
  } else if (SelectRuta.value == 'vacia') {
    new Error.MostrarErrorRuta('Seleccione una ruta');
  } else if (!FechaParaRuta.getAttribute('data-value') || FechaParaRuta.getAttribute('data-value') == 'undefined') {
    new Error.MostrarErrorRuta('Seleccione una fecha');
  }
}
function ConstruirRuta(id_ruta, fecha) {
  var URL = "../assets/ruta_".concat(id_ruta, ".json");
  if (!Rutas.find(function (ruta) {
    return ruta.id == id_ruta && ruta.fecha == fecha;
  })) {
    Api.GetData(URL).then(function (data) {
      var Ruta = new Ruta_(data.id, fecha, data.nombre, data.color, data.preregistros, data.clasificaciones);
      Rutas.push(Ruta);
    })["catch"](function (error) {
      console.log('Ha ocurrido un error en el llamado de la ruta', error);
    });
  } else {
    new Error.MostrarErrorRuta('Ruta existente', 'La ruta especificado ya existe con la fecha indicada.');
  }
}
function Horas_a_Minutos(value) {
  var Horas_Minutos = value.split(':');
  return parseInt(60 * (Horas_Minutos[0] ? Horas_Minutos[0] : 0)) + parseInt(Horas_Minutos[1] ? Horas_Minutos[1] : 0);
}
function Minutos_a_Horas(value) {
  var hora = parseInt(value / 60);
  var minutos = value % 60;
  function formatear(valor) {
    return "".concat(valor < 10 ? '0' + valor : valor);
  }
  return "".concat(formatear(hora), ":").concat(formatear(minutos));
}
var FechaParaRuta = document.getElementById('fechaParaRuta');
var FechaHoy = (0,format/* format */.GP)(new Date(), 'yyyy-MM-dd');
FechaParaRuta.setAttribute('data-value', FechaHoy);
FechaParaRuta.value = FechaHoy;
new index_es/* default */.A('#fechaParaRuta', datepicker_options.datepickerOptions);

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