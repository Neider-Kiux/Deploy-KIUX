"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[6109],{

/***/ 6109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarDialogoClickOutside: () => (/* binding */ CerrarDialogoClickOutside),
/* harmony export */   CerrarDialogoPressESC: () => (/* binding */ CerrarDialogoPressESC),
/* harmony export */   MostrarDialogo: () => (/* binding */ MostrarDialogo)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(467);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5458);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4756);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);
/* harmony import */ var _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7433);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2407);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2182);
/* harmony import */ var _datos_registro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9158);



// La función 'Mostrar Dialogo' permite mostrar distintos
// diálogos con distintos grupos de opciones, las cuales
// pueden ser utilizadas según las necesidades de las
// aplicación

// OJO - revisar la coexistencia de "filtro" y "buscar",
// ya que una de las dos podría no estar en uso







// Cerrar diálogo al hacer click por fuera del mismo
function CerrarDialogoClickOutside(event, DlgSeleccion, DialogoAnidado) {
  if (event.target.id == 'background' && DlgSeleccion) {
    if (DialogoAnidado) {
      DlgSeleccion.remove();
    } else {
      (0,_datos_registro__WEBPACK_IMPORTED_MODULE_2__.QuitarBackgroundMostrarScroll)();
    }
  }
}

// Cerrar diálogo al presionar la tecla <ESC>
function CerrarDialogoPressESC(event, DlgSeleccion, DialogoAnidado) {
  if (event.keyCode == 27) {
    if (DlgSeleccion != null || DlgSeleccion != undefined) {
      if (DialogoAnidado) {
        DlgSeleccion.remove();
        document.addEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_2__.RemoverPreconcepto, false);
      } else {
        (0,_datos_registro__WEBPACK_IMPORTED_MODULE_2__.QuitarBackgroundMostrarScroll)();
      }
    }
  }
}
function ExponerOpcionElegida(Elemento, OpcionElegida, DlgSeleccion) {
  OpcionElegida.dataset.orden = Elemento.dataset.orden;
  OpcionElegida.dataset.clase = Elemento.dataset.clase;
  OpcionElegida.dataset.codigo = Elemento.id;
  OpcionElegida.dataset.changed = OpcionElegida.dataset.codigo != OpcionElegida.dataset.codigo_old;
  OpcionElegida.textContent = "".concat(Elemento.dataset.clase, " - ").concat(Elemento.textContent);
  OpcionElegida.title = '"Click" para modificar';
  DlgSeleccion.remove();
}
function ExponerOpcionAgregada(Elemento, OpcionElegida, DlgSeleccion) {
  OpcionElegida.dataset.orden = Elemento.orden;
  OpcionElegida.dataset.clase = Elemento.id_grupo;
  OpcionElegida.dataset.codigo = Elemento.id_opcion;
  OpcionElegida.dataset.changed = OpcionElegida.dataset.codigo != OpcionElegida.dataset.codigo_old;
  OpcionElegida.textContent = "".concat(Elemento.id_grupo, " - ").concat(Elemento.nombre_opcion);
  OpcionElegida.title = '"Click" para modificar';
  DlgSeleccion.remove();
}
function MostrarDialogo(Dialogo, OpcionElegida, JSON_Tab, DialogoAnidado) {
  var JSON_Grupos = JSON_Tab.grupos;
  var DlgSeleccion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SECTION', 'DlgSeleccion', ['seleccionar-proyecto']);
  Dialogo.insertAdjacentElement('beforeend', DlgSeleccion);
  var GrupoActivo = OpcionElegida.dataset.clase != '' ? OpcionElegida.dataset.clase : null;
  var OpcionActiva = OpcionElegida.dataset.codigo != '' ? OpcionElegida.dataset.codigo : null;
  var Orden = OpcionElegida.dataset.orden != '' ? OpcionElegida.dataset.orden : null;
  var contenedorDlgSeleccion = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'contenedorDlgSeleccion', ['contenedor-coleccion']);
  DlgSeleccion.insertAdjacentElement('beforeend', contenedorDlgSeleccion);
  var ResultadoArray = [];
  var GrupoColorRGB = [];
  JSON_Grupos.forEach(function (grupo) {
    grupo.opciones.forEach(function (opt) {
      return ResultadoArray.push(opt);
    });
    GrupoColorRGB.push({
      color_rgb: grupo.color_rgb,
      id_grupo: grupo.id_grupo,
      nombre_grupo: grupo.nombre_grupo
    });
    contenedorDlgSeleccion.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "DlgSeleccion-".concat(grupo.id_grupo)));
    document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(grupo.color_rgb));
    // Título del grupo
    document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "tituloGrupo-".concat(grupo.id_grupo), ['clase__titulo'], "".concat(grupo.id_grupo, " - ").concat(grupo.nombre_grupo), null, null, null, null, null, null, "".concat(grupo.id_grupo)));
    document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(grupo.color_rgb));
    document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).style.color = '#fefefe';
    var Opciones = function Opciones() {
      // Opciones del grupo
      grupo.opciones.forEach(function (opcion) {
        document.getElementById("Opcion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(opcion.id_opcion), OpcionActiva != opcion.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(opcion.nombre_opcion), "".concat(opcion.orden), "".concat(opcion.id_grupo)));
      });
      // Click en Opción.
      document.getElementById("Opcion-".concat(grupo.id_grupo)).addEventListener('click', function (event) {
        if (event.target.tagName == 'DIV') {
          ExponerOpcionElegida(event.target, OpcionElegida, DlgSeleccion);
        }
      });
    };
    var clickOpcion = function clickOpcion() {
      document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).addEventListener('click', function (event) {
        if (event.target.tagName == 'SPAN') {
          // Remueve a la lista adversa del seleccionado.
          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.getElementsByClassName('lista-coleccion')).forEach(function (element) {
            if (element.parentElement.id != event.target.parentElement.id) {
              element.previousElementSibling.classList.remove('clase__titulo--activo');
              element.remove();
            }
          });
          if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
            document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
            document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).classList.add('clase__titulo--activo');
            Opciones();
          } else {
            document.getElementById("Opcion-".concat(grupo.id_grupo)).remove();
            document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).classList.remove('clase__titulo--activo');
          }
        }
      });
    };

    // Abrir grupo si previamente hay una opción elegida.
    if (GrupoActivo == document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).dataset.value) {
      document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).classList.add('clase__titulo--activo');
      if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
        document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
        Opciones();
      }
      clickOpcion();
    } else {
      clickOpcion();
    }
    if (JSON_Grupos.length == 1) {
      if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
        document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).classList.add('clase__titulo--activo');
        document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
        Opciones();
      }
    }

    // Orden
    if (Orden > 5) {
      if (contenedorDlgSeleccion != null) {
        contenedorDlgSeleccion.scrollTop = (Orden - 5) * 28;
      }
    }
  });

  // Buscar elemento dentro de la colección de elementos
  DlgSeleccion.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'CajaBuscar', ['caja-buscar']));
  document.getElementById('CajaBuscar').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'TextoBuscar', ['caja-buscar__texto'], null, null, null, null, null, true));

  // Activar el foco si la pantalla es amplia
  // if (window.matchMedia('(min-width: 400px)').matches) {
  //   document.getElementById('TextoBuscar').focus();
  // }

  //NOTE: Se activara el foco para cualquier tamaño de pantalla
  document.getElementById('TextoBuscar').focus();

  // Texto [KeyCode] tecla Enter
  document.getElementById('TextoBuscar').addEventListener('keypress', function (event) {
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
    Opcion.forEach(function (grupo) {
      GrupoColorRGB.forEach(function (gColor) {
        if (gColor.id_grupo != grupo.id_grupo) {
          return;
        } else {
          if (document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)) == null || document.getElementById("DlgSeleccion-".concat(grupo.id_grupo) == undefined)) {
            contenedorDlgSeleccion.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "DlgSeleccion-".concat(grupo.id_grupo)));
            // Título del grupo
            document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "tituloGrupo-".concat(grupo.id_grupo), ['clase__titulo'], "".concat(grupo.id_grupo, " - ").concat(gColor.nombre_grupo), null, null, null, null, null, null, "".concat(grupo.id_grupo)));
            // Color del grupo
            document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(gColor.color_rgb));
            // Color título del grupo
            document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(gColor.color_rgb));
            document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).style.color = '#fefefe';
            if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
              document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-plantillas']));
            }
          }
          // Opciones del grupo
          document.getElementById("Opcion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(grupo.id_opcion), OpcionActiva != grupo.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(grupo.nombre_opcion), "".concat(grupo.orden), "".concat(grupo.id_grupo)));
          // Click en Opción.
          document.getElementById("Opcion-".concat(grupo.id_grupo)).addEventListener('click', function (event) {
            if (event.target.tagName == 'DIV') {
              ExponerOpcionElegida(event.target, OpcionElegida, DlgSeleccion);
            }
          });
        }
      });
    });
  };
  document.getElementById('TextoBuscar').addEventListener('keyup', function () {
    var ContenedorIndividual = contenedorDlgSeleccion;
    if (document.getElementById('TextoBuscar').textContent.trim().length) {
      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(ContenedorIndividual.children).forEach(function (child) {
        return ContenedorIndividual.removeChild(child);
      });
      Opcion = Filtro(document.getElementById('TextoBuscar').textContent.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
      ResultadoFiltro(Opcion);
      if (Opcion.length == 0) {
        contenedorDlgSeleccion.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', null, null, 'La búsqueda no arrojó resultados.'));
        contenedorDlgSeleccion.classList.add('contenedor-plantillas--flex');
      } else {
        contenedorDlgSeleccion.classList.remove('contenedor-plantillas--flex');
      }
      Opcion = [];
    } else {
      if (ContenedorIndividual.childNodes[0].tagName == 'SPAN' || Opcion.length == 0) {
        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(ContenedorIndividual.children).forEach(function (child) {
          return ContenedorIndividual.removeChild(child);
        });
        contenedorDlgSeleccion.classList.remove('contenedor-plantillas--flex');
        JSON_Grupos.forEach(function (grupo) {
          contenedorDlgSeleccion.insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "DlgSeleccion-".concat(grupo.id_grupo)));
          document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRegistroOpcion)(grupo.color_rgb));
          // Título del grupo
          document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('SPAN', "tituloGrupo-".concat(grupo.id_grupo), ['clase__titulo'], "".concat(grupo.id_grupo, " - ").concat(grupo.nombre_grupo), null, null, null, null, null, null, "".concat(grupo.id_grupo)));
          document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).style.backgroundColor = "".concat((0,_color__WEBPACK_IMPORTED_MODULE_4__.ColorRGB)(grupo.color_rgb));
          document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).style.color = '#fefefe';
          var Opciones = function Opciones() {
            // Opciones del grupo
            grupo.opciones.forEach(function (opcion) {
              document.getElementById("Opcion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.Selector)('DIV', "".concat(opcion.id_opcion), OpcionActiva != opcion.id_opcion ? ['lista__opcion'] : ['lista__opcion', 'opcion--activa'], "".concat(opcion.nombre_opcion), "".concat(opcion.orden), "".concat(opcion.id_grupo)));
            });
            // Click en Opción.
            document.getElementById("Opcion-".concat(grupo.id_grupo)).addEventListener('click', function (event) {
              if (event.target.tagName == 'DIV') {
                ExponerOpcionElegida(event.target, OpcionElegida, DlgSeleccion);
              }
            });
          };
          var clickOpcion = function clickOpcion() {
            document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).addEventListener('click', function (event) {
              if (event.target.tagName == 'SPAN') {
                // Remueve a la lista adversa del seleccionado.
                (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(document.getElementsByClassName('lista-coleccion')).forEach(function (element) {
                  if (element.parentElement.id != event.target.parentElement.id) {
                    element.previousElementSibling.classList.remove('clase__titulo--activo');
                    element.remove();
                  }
                });
                if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
                  document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
                  document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).classList.add('clase__titulo--activo');
                  Opciones();
                } else {
                  document.getElementById("Opcion-".concat(grupo.id_grupo)).remove();
                  document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).classList.remove('clase__titulo--activo');
                }
              }
            });
          };
          // Abrir grupo si se previamente hay una opción elegida.
          if (GrupoActivo == document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).dataset.value) {
            document.getElementById("tituloGrupo-".concat(grupo.id_grupo)).classList.add('clase__titulo--activo');
            if (document.getElementById("Opcion-".concat(grupo.id_grupo)) == null || document.getElementById("Opcion-".concat(grupo.id_grupo)) == undefined) {
              document.getElementById("DlgSeleccion-".concat(grupo.id_grupo)).insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', "Opcion-".concat(grupo.id_grupo), ['lista-coleccion']));
              Opciones();
            }
            clickOpcion();
          } else {
            clickOpcion();
          }
          // Orden
          if (Orden > 5) {
            if (contenedorDlgSeleccion != null) {
              contenedorDlgSeleccion.scrollTop = (Orden - 5) * 28;
            }
          }
        });
      }
    }
  });
  document.getElementById('CajaBuscar').insertAdjacentElement('beforeend', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_3__.CreateElement)('DIV', 'BotonBuscar', ['caja-buscar__boton']));
  var BtnBuscarPlantilla = document.getElementById('BotonBuscar');
  BtnBuscarPlantilla.innerHTML += "<svg class=\"caja-buscar__img\" viewbox=\"0 0 512 512\"><use xlink:href=\"./img/sprite.svg#btn-accion-dialogo-".concat(JSON_Tab.sufijo_img_boton, "\"></use></svg>");
  if (JSON_Tab.funcion) {
    document.getElementById('BotonBuscar').style.cursor = 'pointer';
    document.getElementById('BotonBuscar').addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var LongitudMinima, TextoProcesar, URL, body, resultado, Elemento;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // verificar que se haya escrito un texto "no vacío"
            LongitudMinima = 5; // longitud mínima de texto válida
            TextoProcesar = document.getElementById('TextoBuscar').textContent.trim();
            if (!(TextoProcesar.length < LongitudMinima)) {
              _context.next = 5;
              break;
            }
            new _componentes_modal_Error__WEBPACK_IMPORTED_MODULE_7__.MostrarMensajeError(Dialogo, 'El texto escrito no es "válido"', 'Procesar');
            return _context.abrupt("return");
          case 5:
            URL = JSON_Tab.funcion;
            body = {
              Proyecto: document.getElementById('Proyecto').dataset.codigo,
              TextoProcesar: TextoProcesar
            };
            _context.next = 9;
            return (0,_api__WEBPACK_IMPORTED_MODULE_1__.PostData)(URL, body, JSON_Tab.funcion);
          case 9:
            resultado = _context.sent;
            // JSON_Tab.funcion nos da una pista del nombre de la función
            Elemento = {
              id_grupo: resultado.id_grupo,
              orden: resultado.orden,
              id_opcion: resultado.id_opcion,
              nombre_opcion: resultado.nombre_opcion
            };
            JSON_Grupos[0].opciones.push(Elemento);
            ExponerOpcionAgregada(Elemento, OpcionElegida, DlgSeleccion);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
  }
  if (DlgSeleccion != null || DlgSeleccion != undefined) {
    // vamos a deshabilitar los "métodos de salida" que estaban vigentes y...
    // document.getElementById('background').removeEventListener('mousedown', CerrarPreconcepto, false);
    document.removeEventListener('mousedown', _datos_registro__WEBPACK_IMPORTED_MODULE_2__.CerrarPreconcepto, false);
    document.removeEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_2__.RemoverPreconcepto, false);
    // los reemplazamos por los "métodos de salida" para este nuevo diálogo
    document.getElementById('background').addEventListener('mousedown', function (event) {
      CerrarDialogoClickOutside(event, DlgSeleccion, DialogoAnidado);
    }, false);
    document.addEventListener('keydown', function (event) {
      CerrarDialogoPressESC(event, DlgSeleccion, DialogoAnidado);
    }, false);
  }
}

/***/ })

}]);