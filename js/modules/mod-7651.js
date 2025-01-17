(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[7651],{

/***/ 234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarDialogo: () => (/* binding */ MostrarDialogo)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2407);
/* harmony import */ var _registro_modal_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2182);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



// La función "RenderizarDialogo" permite mostrar distintos
// diálogos con distintos grupos de opciones, las cuales
// pueden ser utilizadas según las necesidades de las
// aplicación

// OJO - revisar la coexistencia de "filtro" y "buscar",
// ya que una de las dos podría no estar en uso




function QuitarBackgroundMostrarScroll() {
  document.getElementById('dialogo-outside').remove();
  document.getElementById('main').classList.remove('ocultar-scroll');
}

// Cerrar diálogo al hacer click por fuera del mismo
function CerrarDialogoClickOutside(event) {
  if (event.target.id == 'dialogo-outside') {
    QuitarBackgroundMostrarScroll();
  }
}

// Cerrar diálogo al presionar la tecla <ESC>
function CerrarDialogoPressESC(event) {
  if (event.keyCode == 27) {
    QuitarBackgroundMostrarScroll();
  }
}
function ProcesarRespuesta(Elemento, OpcionElegida, Indicador, ArregloDialogos, ArregloOpciones) {
  OpcionElegida.orden = Elemento.dataset.orden;
  OpcionElegida.clase = Elemento.dataset.clase;
  OpcionElegida.codigo = Elemento.id;
  OpcionElegida.texto = Elemento.textContent;
  // OpcionElegida.texto = `${Elemento.dataset.clase} - ${Elemento.textContent}`;
  // console.log('OpcionElegida = ', OpcionElegida);
  ArregloOpciones.push(OpcionElegida);
  ArregloDialogos.shift();
  QuitarBackgroundMostrarScroll();
  MostrarDialogo(Indicador, ArregloDialogos, ArregloOpciones);
}
function MostrarDialogo(_x, _x2, _x3) {
  return _MostrarDialogo.apply(this, arguments);
}
function _MostrarDialogo() {
  _MostrarDialogo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(Indicador, ArregloDialogos, ArregloOpciones) {
    var CodigoIndicador, Controlador, IDOpcion1, IDOpcion2, IDOpcion3, _yield$import, PresentarIndicador;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!ArregloDialogos.length) {
            _context.next = 4;
            break;
          }
          RenderizarDialogo(Indicador, ArregloDialogos, ArregloOpciones);
          _context.next = 16;
          break;
        case 4:
          // console.log('ArregloOpciones = ', ArregloOpciones);
          CodigoIndicador = Indicador.dataset.codigo_indicador;
          Controlador = Indicador.dataset.controlador;
          IDOpcion1 = ArregloOpciones.length > 0 ? ArregloOpciones[0].codigo : '';
          IDOpcion2 = ArregloOpciones.length > 1 ? ArregloOpciones[1].codigo : '';
          IDOpcion3 = ArregloOpciones.length > 2 ? ArregloOpciones[2].codigo : '';
          _context.next = 11;
          return __webpack_require__(3130)("./".concat(Controlador));
        case 11:
          _yield$import = _context.sent;
          PresentarIndicador = _yield$import.PresentarIndicador;
          document.getElementById('listado-indicadores').style.display = 'none';
          document.getElementById('BtnRegresar').style.display = 'flex';
          // document.getElementById('BtnMaximizar').style.display = 'flex';
          // PresentarIndicador(CodigoIndicador, IDOpcion1, IDOpcion2, IDOpcion3);
          PresentarIndicador(CodigoIndicador, ArregloOpciones); // OJO - así deberá ser
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _MostrarDialogo.apply(this, arguments);
}
function RenderizarDialogo(_x4, _x5, _x6) {
  return _RenderizarDialogo.apply(this, arguments);
}
function _RenderizarDialogo() {
  _RenderizarDialogo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(Indicador, ArregloDialogos, ArregloOpciones) {
    var OpcionElegida, DialogoOutside, DialogoContenedor, Coleccion, _yield$GetData, opcion_dlg_grupos, ContenedorColeccion, GrupoActivo, OpcionActiva, Orden, ContenedorOpciones, ResultadoArray, GrupoColorRGB, Filtro, Opcion, ResultadoFiltro, BtnBuscar;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          OpcionElegida = {}; // OJO - deberá llegar desde el servidor como opción por default (sugerida)
          DialogoOutside = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('div', 'dialogo-outside', ['background']);
          DialogoContenedor = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('div', 'dialogo-contenedor', ['dialogo']);
          DialogoContenedor.style.height = '22.5rem'; // OJO - la altura del diálogo debería llegar como un parámetro
          DialogoOutside.insertAdjacentElement('beforeend', DialogoContenedor);
          document.getElementById('main').insertAdjacentElement('beforeend', DialogoOutside);
          document.getElementById('main').classList.add('ocultar-scroll');
          Coleccion = ArregloDialogos[0];
          _context2.next = 10;
          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.GetData)('getopcionesdialogo', Coleccion, 'PrepararYPresentarDialogo');
        case 10:
          _yield$GetData = _context2.sent;
          opcion_dlg_grupos = _yield$GetData.opcion_dlg_grupos;
          // console.log('opcion_dlg_grupos = ', opcion_dlg_grupos);
          // console.log('opcion_dlg_grupos = ', opcion_dlg_grupos);
          // Si no tenemos una "opción elegida" (default) y si tenemos un solo grupo
          // entonces vamos a presentar el diálogo con el primer grupo desplegado
          // teniendo la primera opción como "opción elegida" (default)
          if (Object.entries(OpcionElegida).length === 0 && opcion_dlg_grupos.length == 1) {
            // console.log('Vamos a poner nosotros la primera opción como "opción elegida"...');
            // console.log('opcion_dlg_grupos[0] = ', opcion_dlg_grupos[0]);
            OpcionElegida.clase = opcion_dlg_grupos[0].opciones[0].id_grupo;
            OpcionElegida.codigo = opcion_dlg_grupos[0].opciones[0].id_opcion;
            OpcionElegida.orden = opcion_dlg_grupos[0].opciones[0].orden;
          }
          ContenedorColeccion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('div', Coleccion, ['seleccionar-proyecto']);
          DialogoContenedor.insertAdjacentElement('beforeend', ContenedorColeccion);
          GrupoActivo = OpcionElegida.clase != '' ? OpcionElegida.clase : null;
          OpcionActiva = OpcionElegida.codigo != '' ? OpcionElegida.codigo : null;
          Orden = OpcionElegida.orden != '' ? OpcionElegida.orden : null;
          ContenedorOpciones = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "contenedor".concat(Coleccion), ['contenedor-coleccion']);
          ContenedorOpciones.style.height = '100%'; // OJO - quitar cuando la caja de búsqueda funcione bien
          ContenedorColeccion.insertAdjacentElement('beforeend', ContenedorOpciones);
          ResultadoArray = [];
          GrupoColorRGB = [];
          opcion_dlg_grupos.forEach(function (grupo) {
            grupo.opciones.forEach(function (opt) {
              return ResultadoArray.push(opt);
            });
            GrupoColorRGB.push({
              color_rgb: grupo.color_rgb,
              id_grupo: grupo.id_grupo,
              nombre_grupo: grupo.nombre_grupo
            });
            document.getElementById("contenedor".concat(Coleccion)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "".concat(Coleccion).concat(grupo.id_grupo)));
            document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_registro_modal_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(grupo.color_rgb));
            // Título del grupo
            document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "".concat(grupo.id_grupo, "-tituloGrupo"), ['clase__titulo'], "".concat(grupo.id_grupo, " - ").concat(grupo.nombre_grupo), null, null, null, null, null, null, "".concat(grupo.id_grupo)));
            document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.backgroundColor = "".concat((0,_registro_modal_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(grupo.color_rgb));
            document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.color = '#fefefe';
            var Opciones = function Opciones() {
              // Opciones del grupo
              grupo.opciones.forEach(function (opcion) {
                document.getElementById("Opcion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(opcion.id_opcion), OpcionActiva != opcion.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(opcion.nombre_opcion), "".concat(opcion.orden), "".concat(opcion.id_grupo)));
                // console.log('opcion.nombre_opcion = "', opcion.nombre_opcion, '"');
              });
              // Click en Opción.
              document.getElementById("Opcion-".concat(grupo.id_grupo)).addEventListener('click', function (event) {
                if (event.target.classList.contains('lista__opcion')) {
                  ProcesarRespuesta(event.target, OpcionElegida, Indicador, ArregloDialogos, ArregloOpciones);
                }
              });
            };
            var clickOpcion = function clickOpcion() {
              document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).addEventListener('click', function (event) {
                if (event.target.tagName == 'SPAN') {
                  // Remueve a la lista adversa del seleccionado.
                  (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.getElementsByClassName('lista-coleccion')).forEach(function (element) {
                    if (element.parentElement.id != event.target.parentElement.id) {
                      element.previousElementSibling.classList.remove('clase__titulo--activo');
                      element.remove();
                    }
                  });
                  if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
                    document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
                    document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
                    Opciones();
                  } else {
                    document.getElementById("Opcion-".concat(grupo.id_grupo)).remove();
                    document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.remove('clase__titulo--activo');
                  }
                }
              });
            };

            // Abrir grupo si se previamente hay una opción elegida.
            if (GrupoActivo == document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).dataset.value) {
              document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
              if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
                document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
                Opciones();
              }
              clickOpcion();
            } else {
              clickOpcion();
            }

            // Orden
            if (Orden > 5) {
              if (document.getElementById("contenedor".concat(Coleccion)) != null) {
                document.getElementById("contenedor".concat(Coleccion)).scrollTop = (Orden - 5) * 28;
              }
            }
          });

          // Buscar elemento dentro de la colección de elementos
          document.getElementById(Coleccion).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'CajaBuscar', ['caja-buscar']));
          document.getElementById('CajaBuscar').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'TextoBuscar', ['caja-buscar__texto'], null, null, null, null, null, true));

          // Activar el foco si la pantalla es amplia
          if (window.matchMedia('(min-width: 400px)').matches) {
            document.getElementById('TextoBuscar').focus();
          }

          // Texto [KeyCode] tecla Enter
          document.getElementById('TextoBuscar').addEventListener('keypress', function (event) {
            if (event.keyCode == 13 || event.code == 'Enter') {
              event.preventDefault();
            }
          });
          Filtro = function Filtro(query) {
            return ResultadoArray.filter(function (el) {
              return el.nombre_opcion.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(query.toLowerCase()) > -1;
            });
          };
          Opcion = [];
          ResultadoFiltro = function ResultadoFiltro(Opcion) {
            Opcion.forEach(function (element) {
              GrupoColorRGB.forEach(function (j) {
                if (j.id_grupo != element.id_grupo) {
                  return;
                } else {
                  if (document.getElementById("".concat(Coleccion, "-").concat(element.id_grupo)) == null || document.getElementById("".concat(Coleccion, "-").concat(element.id_grupo) == undefined)) {
                    document.getElementById("contenedor".concat(Coleccion)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "".concat(Coleccion, "-").concat(element.id_grupo)));
                    // Título del grupo
                    document.getElementById("".concat(Coleccion, "-").concat(element.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "".concat(element.id_grupo, "-tituloGrupo"), ['clase__titulo'], "".concat(element.id_grupo, " - ").concat(j.nombre_grupo), null, null, null, null, null, null, "".concat(element.id_grupo)));
                    // Color del grupo
                    document.getElementById("".concat(Coleccion, "-").concat(element.id_grupo)).style.backgroundColor = "".concat((0,_registro_modal_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(j.color_rgb));
                    // Color título del grupo
                    document.getElementById("".concat(element.id_grupo, "-tituloGrupo")).style.backgroundColor = "".concat((0,_registro_modal_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(j.color_rgb));
                    document.getElementById("".concat(element.id_grupo, "-tituloGrupo")).style.color = '#fefefe';
                    if (document.getElementById("Opcion-".concat(element.id_grupo)) == null || document.getElementById("Opcion-".concat(element.id_grupo)) == undefined) {
                      document.getElementById("".concat(Coleccion, "-").concat(element.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(element.id_grupo), ['lista-plantillas']));
                    }
                  }

                  // Opciones del grupo
                  document.getElementById("Opcion-".concat(element.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(element.id_opcion), OpcionActiva != element.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(element.nombre_opcion), "".concat(element.orden), "".concat(element.id_grupo)));

                  // Click en Opción.
                  document.getElementById("Opcion-".concat(element.id_grupo)).addEventListener('click', function (event) {
                    if (document.getElementById("Opcion-".concat(element.id_grupo)) != null) {
                      if (event.target.classList.contains('lista__opcion')) {
                        ProcesarRespuesta(event.target, OpcionElegida, Indicador, ArregloDialogos, ArregloOpciones);
                      }
                    }
                  });
                }
              });
            });
          };
          document.getElementById('TextoBuscar').addEventListener('keyup', function () {
            var ContenedorIndividual = document.getElementById("contenedor".concat(Coleccion));
            if (document.getElementById('TextoBuscar').textContent.trim().length) {
              (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(ContenedorIndividual.children).forEach(function (child) {
                return ContenedorIndividual.removeChild(child);
              });
              Opcion = Filtro(document.getElementById('TextoBuscar').textContent.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
              ResultadoFiltro(Opcion);
              if (Opcion.length == 0) {
                document.getElementById("contenedor".concat(Coleccion)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', null, null, 'La búsqueda no arrojó resultados.'));
                document.getElementById("contenedor".concat(Coleccion)).classList.add('contenedor-plantillas--flex');
              } else {
                document.getElementById("contenedor".concat(Coleccion)).classList.remove('contenedor-plantillas--flex');
              }
              Opcion = [];
            } else {
              if (ContenedorIndividual.childNodes[0].tagName == 'SPAN' || Opcion.length == 0) {
                (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(ContenedorIndividual.children).forEach(function (child) {
                  return ContenedorIndividual.removeChild(child);
                });
                document.getElementById("contenedor".concat(Coleccion)).classList.remove('contenedor-plantillas--flex');
                opcion_dlg_grupos.forEach(function (grupo) {
                  document.getElementById("contenedor".concat(Coleccion)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "".concat(Coleccion).concat(grupo.id_grupo)));
                  document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_registro_modal_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(grupo.color_rgb));
                  // Título del grupo
                  document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "".concat(grupo.id_grupo, "-tituloGrupo"), ['clase__titulo'], "".concat(grupo.id_grupo, " - ").concat(grupo.nombre_grupo), null, null, null, null, null, null, "".concat(grupo.id_grupo)));
                  document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.backgroundColor = "".concat((0,_registro_modal_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(grupo.color_rgb));
                  document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).style.color = '#fefefe';
                  var Opciones = function Opciones() {
                    // Opciones del grupo
                    grupo.opciones.forEach(function (opcion) {
                      document.getElementById("Opcion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(opcion.id_opcion), OpcionActiva != opcion.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(opcion.nombre_opcion), "".concat(opcion.orden), "".concat(opcion.id_grupo)));
                    });
                    // Click en Opción.
                    document.getElementById("Opcion-".concat(grupo.id_grupo)).addEventListener('click', function (event) {
                      if (event.target.classList.contains('lista__opcion')) {
                        ProcesarRespuesta(event.target, OpcionElegida, Indicador, ArregloDialogos, ArregloOpciones);
                      }
                    });
                  };
                  var clickOpcion = function clickOpcion() {
                    document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).addEventListener('click', function (event) {
                      if (event.target.tagName == 'SPAN') {
                        // Remueve a la lista adversa del seleccionado.
                        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.getElementsByClassName('lista-coleccion')).forEach(function (element) {
                          if (element.parentElement.id != event.target.parentElement.id) {
                            element.previousElementSibling.classList.remove('clase__titulo--activo');
                            element.remove();
                          }
                        });
                        if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
                          document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
                          document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
                          Opciones();
                        } else {
                          document.getElementById("Opcion-".concat(grupo.id_grupo)).remove();
                          document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.remove('clase__titulo--activo');
                        }
                      }
                    });
                  };
                  // Abrir grupo si se previamente hay una opción elegida.
                  if (GrupoActivo == document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).dataset.value) {
                    document.getElementById("".concat(grupo.id_grupo, "-tituloGrupo")).classList.add('clase__titulo--activo');
                    if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
                      document.getElementById("".concat(Coleccion).concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
                      Opciones();
                    }
                    clickOpcion();
                  } else {
                    clickOpcion();
                  }
                  // Orden
                  if (Orden > 5) {
                    if (document.getElementById("contenedor".concat(Coleccion)) != null) {
                      document.getElementById("contenedor".concat(Coleccion)).scrollTop = (Orden - 5) * 28;
                    }
                  }
                });
              }
            }
          });
          document.getElementById('CajaBuscar').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BotonBuscar', ['caja-buscar__boton']));
          BtnBuscar = document.getElementById('BotonBuscar');
          BtnBuscar.innerHTML += "<svg class=\"caja-buscar__img\" viewbox=\"0 0 512 512\"><use xlink:href=\"./img/sprite.svg#btn-accion-dialogo-1\"></use></svg>";
          if (document.getElementById(Coleccion) != null || document.getElementById(Coleccion) != undefined) {
            // OJO - si este diálogo queda encima de otro diálogo, hay que deshabilitar los "métodos de salida" del diálogo de abajo
            // aquí se deshabilitarían los "métodos de salida" del diálogo de abajo
            // ahora implementamos los "métodos de salida" de este diálogo
            document.getElementById('dialogo-outside').addEventListener('mousedown', CerrarDialogoClickOutside, false);
            document.getElementById('dialogo-outside').addEventListener('keydown', CerrarDialogoPressESC, false);
          }
        case 36:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _RenderizarDialogo.apply(this, arguments);
}

/***/ }),

/***/ 2182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./api": [
		7425,
		9
	],
	"./api.js": [
		7425,
		9
	],
	"./componentes/MenuAzul": [
		1916,
		9,
		1916
	],
	"./componentes/MenuAzul.js": [
		1916,
		9,
		1916
	],
	"./componentes/encabezado": [
		423,
		9
	],
	"./componentes/encabezado.js": [
		423,
		9
	],
	"./componentes/historialB": [
		5696,
		9,
		5696
	],
	"./componentes/historialB.js": [
		5696,
		9,
		5696
	],
	"./componentes/modal/Dialogos": [
		3173,
		9,
		3173
	],
	"./componentes/modal/Dialogos.js": [
		3173,
		9,
		3173
	],
	"./componentes/modal/Error": [
		7433,
		9
	],
	"./componentes/modal/Error.js": [
		7433,
		9
	],
	"./componentes/modal/Notificaciones": [
		8455,
		9,
		8455
	],
	"./componentes/modal/Notificaciones.js": [
		8455,
		9,
		8455
	],
	"./componentes/modal/dialogo-tipo-2": [
		234,
		9
	],
	"./componentes/modal/dialogo-tipo-2.js": [
		234,
		9
	],
	"./componentes/nombre-empresa": [
		2558,
		9,
		2558
	],
	"./componentes/nombre-empresa.js": [
		2558,
		9,
		2558
	],
	"./controladores/amchart-from-json": [
		1577,
		9,
		3481,
		1577
	],
	"./controladores/amchart-from-json.js": [
		1577,
		9,
		3481,
		1577
	],
	"./controladores/mqtt-actions": [
		7331,
		9
	],
	"./controladores/mqtt-actions.js": [
		7331,
		9
	],
	"./elements/CrearElementoHTML": [
		3384,
		9
	],
	"./elements/CrearElementoHTML.js": [
		3384,
		9
	],
	"./elements/htmlElements": [
		2407,
		9
	],
	"./elements/htmlElements.js": [
		2407,
		9
	],
	"./pages/default/default": [
		3717,
		9,
		3717
	],
	"./pages/default/default.js": [
		3717,
		9,
		3717
	],
	"./pages/indicadores/indicadores": [
		3149,
		9
	],
	"./pages/indicadores/indicadores.js": [
		3149,
		9
	],
	"./pages/login/login": [
		5341,
		9,
		5341
	],
	"./pages/login/login.js": [
		5341,
		9,
		5341
	],
	"./pages/registro/registro": [
		1641,
		9,
		912,
		8380,
		7044,
		4102,
		4022
	],
	"./pages/registro/registro.js": [
		1641,
		9,
		912,
		8380,
		7044,
		4102,
		4022
	],
	"./pages/restablecerPassword/restablecerPassword": [
		2025,
		9,
		2025
	],
	"./pages/restablecerPassword/restablecerPassword.js": [
		2025,
		9,
		2025
	],
	"./pages/revision/anexoAdicional": [
		4709,
		9,
		4709
	],
	"./pages/revision/anexoAdicional.js": [
		4709,
		9,
		4709
	],
	"./pages/revision/api": [
		902,
		9,
		902
	],
	"./pages/revision/api.js": [
		902,
		9,
		902
	],
	"./pages/revision/revision": [
		6945,
		9,
		5696,
		6945
	],
	"./pages/revision/revision.js": [
		6945,
		9,
		5696,
		6945
	],
	"./pages/rutas/data": [
		534,
		3,
		534
	],
	"./pages/rutas/data.json": [
		534,
		3,
		534
	],
	"./pages/rutas/dialogo_edtitar": [
		8341,
		9,
		5836,
		912,
		7044,
		5999
	],
	"./pages/rutas/dialogo_edtitar.js": [
		8341,
		9,
		5836,
		912,
		7044,
		5999
	],
	"./pages/rutas/rutas": [
		8856,
		9,
		5836,
		912,
		7044,
		5999
	],
	"./pages/rutas/rutas.js": [
		8856,
		9,
		5836,
		912,
		7044,
		5999
	],
	"./registro/api": [
		5711,
		9,
		5711
	],
	"./registro/api.js": [
		5711,
		9,
		5711
	],
	"./registro/modal/adjuntar-archivos": [
		4608,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		3407
	],
	"./registro/modal/adjuntar-archivos.js": [
		4608,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		3407
	],
	"./registro/modal/cambiar-password": [
		4316,
		9,
		1935
	],
	"./registro/modal/cambiar-password.js": [
		4316,
		9,
		1935
	],
	"./registro/modal/castigar-registro": [
		1971,
		9,
		8850,
		1971
	],
	"./registro/modal/castigar-registro.js": [
		1971,
		9,
		8850,
		1971
	],
	"./registro/modal/cerrar-sesion": [
		8662,
		9,
		8662
	],
	"./registro/modal/cerrar-sesion.js": [
		8662,
		9,
		8662
	],
	"./registro/modal/cerrar-ventana-modal": [
		1812,
		9,
		1812
	],
	"./registro/modal/cerrar-ventana-modal.js": [
		1812,
		9,
		1812
	],
	"./registro/modal/color": [
		2182,
		9
	],
	"./registro/modal/color.js": [
		2182,
		9
	],
	"./registro/modal/datepicker-options": [
		5916,
		9,
		5916
	],
	"./registro/modal/datepicker-options.js": [
		5916,
		9,
		5916
	],
	"./registro/modal/datos-busqueda": [
		1091,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		3472
	],
	"./registro/modal/datos-busqueda.js": [
		1091,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		3472
	],
	"./registro/modal/datos-registro": [
		9158,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		7164
	],
	"./registro/modal/datos-registro.js": [
		9158,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		7164
	],
	"./registro/modal/dialogo-tipo-1": [
		6109,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		6008
	],
	"./registro/modal/dialogo-tipo-1.js": [
		6109,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		6008
	],
	"./registro/modal/duplicar-registro": [
		2575,
		9,
		2575
	],
	"./registro/modal/duplicar-registro.js": [
		2575,
		9,
		2575
	],
	"./registro/modal/eliminar-registro": [
		9974,
		9,
		9974
	],
	"./registro/modal/eliminar-registro.js": [
		9974,
		9,
		9974
	],
	"./registro/modal/informacion": [
		2420,
		9,
		2420
	],
	"./registro/modal/informacion.js": [
		2420,
		9,
		2420
	],
	"./registro/modal/listado-suplantar": [
		5924,
		9,
		5924
	],
	"./registro/modal/listado-suplantar.js": [
		5924,
		9,
		5924
	],
	"./registro/modal/log-registro": [
		2749,
		9,
		2749
	],
	"./registro/modal/log-registro.js": [
		2749,
		9,
		2749
	],
	"./registro/modal/menu-principal": [
		6517,
		9,
		6517
	],
	"./registro/modal/menu-principal.js": [
		6517,
		9,
		6517
	],
	"./registro/modal/plantillas": [
		7049,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		7164
	],
	"./registro/modal/plantillas.js": [
		7049,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		7164
	],
	"./registro/modal/seleccionar-proyecto": [
		7327,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		7164
	],
	"./registro/modal/seleccionar-proyecto.js": [
		7327,
		9,
		8850,
		5836,
		912,
		8380,
		9158,
		7164
	],
	"./registro/modal/suplantar-off": [
		6435,
		9
	],
	"./registro/modal/suplantar-off.js": [
		6435,
		9
	],
	"./utils/BotonesActivos": [
		9850,
		9
	],
	"./utils/BotonesActivos.js": [
		9850,
		9
	],
	"./utils/CalcularPosicionHistorial": [
		4187,
		9,
		4187
	],
	"./utils/CalcularPosicionHistorial.js": [
		4187,
		9,
		4187
	],
	"./utils/CargarAvance": [
		8163,
		7,
		8163
	],
	"./utils/CargarAvance.js": [
		8163,
		7,
		8163
	],
	"./utils/CargarDatosIniciales": [
		9037,
		9,
		9037
	],
	"./utils/CargarDatosIniciales.js": [
		9037,
		9,
		9037
	],
	"./utils/CastigarRegistro": [
		3962,
		9,
		5696
	],
	"./utils/CastigarRegistro.js": [
		3962,
		9,
		5696
	],
	"./utils/CerrarSesion": [
		1197,
		9
	],
	"./utils/CerrarSesion.js": [
		1197,
		9
	],
	"./utils/Color": [
		2188,
		9
	],
	"./utils/Color.js": [
		2188,
		9
	],
	"./utils/CreateSomeMenu": [
		6936,
		9,
		6936
	],
	"./utils/CreateSomeMenu.js": [
		6936,
		9,
		6936
	],
	"./utils/Data_Menu_Predictor": [
		3654,
		9,
		3654
	],
	"./utils/Data_Menu_Predictor.js": [
		3654,
		9,
		3654
	],
	"./utils/EditarRegistro": [
		5397,
		9,
		5696
	],
	"./utils/EditarRegistro.js": [
		5397,
		9,
		5696
	],
	"./utils/MenuPredictor": [
		3534,
		9,
		3534
	],
	"./utils/MenuPredictor.js": [
		3534,
		9,
		3534
	],
	"./utils/PintarGraficaSVG": [
		1804,
		9,
		1804
	],
	"./utils/PintarGraficaSVG.js": [
		1804,
		9,
		1804
	],
	"./utils/ToggleNombre": [
		426,
		9
	],
	"./utils/ToggleNombre.js": [
		426,
		9
	],
	"./utils/ValidarPassword": [
		5923,
		9,
		5923
	],
	"./utils/ValidarPassword.js": [
		5923,
		9,
		5923
	],
	"./utils/jogDial.min": [
		1723,
		9,
		1723
	],
	"./utils/jogDial.min.js": [
		1723,
		9,
		1723
	],
	"./utils/mascaraInput": [
		4021,
		9,
		4021
	],
	"./utils/mascaraInput.js": [
		4021,
		9,
		4021
	],
	"./utils/revisarNotificaciones": [
		2829,
		9
	],
	"./utils/revisarNotificaciones.js": [
		2829,
		9
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(() => {
		return __webpack_require__.t(id, ids[1] | 16)
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3130;
module.exports = webpackAsyncContext;

/***/ })

}]);