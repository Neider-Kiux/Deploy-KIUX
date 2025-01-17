/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 304:
/***/ ((module) => {

var fecha_Hora = "2025-01-17-1512";
var nombreCache = "KIUX_cache_".concat(fecha_Hora);
var nombreServiceWorker = "service-Worker-".concat(fecha_Hora);
module.exports = {
  nombreServiceWorker: nombreServiceWorker,
  nombreCache: nombreCache
};

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js/elements/htmlElements.js
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
;// CONCATENATED MODULE: ./public/registerSW.js

var _require = __webpack_require__(304),
  nombreServiceWorker = _require.nombreServiceWorker;

/** Para que exista la forma de comprobar si existe una nueva actualización se utiliza el nombre del service worker
 * para indicar cambios en el codigo, para esto se modifica la variable "nombreServiceWorker" en el directorio "public/js/constantes.js"
 * indicando el nombre del service worker seguido de la fecha en formato 'yyyy-MM-dd' seguido de la hora separada por "-",
 * por ejemplo: 'service-Worker_2024-04-25_14-29'. Esto permite que el archivo "registerSW.js", que no se guarda en cache,
 * haga la comprobación y muestre el mensaje de ser necesario.
 */
var ServiceWorkerInstalandose = false;
var NombreArchivoActual;
var ServiceWorkerEntrante = "".concat(nombreServiceWorker, ".js");
console.log(nombreServiceWorker);
console.log("El nuevo service worker es: ".concat(ServiceWorkerEntrante));
if ('serviceWorker' in navigator) {
  var urlActual = undefined;
  navigator.serviceWorker.getRegistration().then(function (registration) {
    try {
      urlActual = registration.active.scriptURL;
      NombreArchivoActual = urlActual.split('/').pop();
    } catch (_unused) {
      urlActual = undefined;
    }
    if (NombreArchivoActual == ServiceWorkerEntrante || urlActual == undefined) {
      console.log('Se puede instalar');
      window.addEventListener('load', function () {
        ServiceWorkerInstalandose = true;
        navigator.serviceWorker.register("".concat(nombreServiceWorker, ".js")).then(function (register) {
          console.log('ServiceWorker registration successful with scope: ', register.scope);
        })["catch"](function (error) {
          console.log('ServiceWorker registration failed: ', error);
        });
      });
    } else if (NombreArchivoActual != ServiceWorkerEntrante || urlActual != undefined) {
      console.log("No se debe instalar");
    }
    ValidarVersionAplicacion(ServiceWorkerEntrante, NombreArchivoActual);
  });
}
function ValidarVersionAplicacion(ServiceWorkerIn, FileNameActual) {
  if (FileNameActual) {
    console.log("El actual service worker es: ".concat(FileNameActual));
    if (!ServiceWorkerInstalandose && FileNameActual !== ServiceWorkerIn) {
      console.log('Por Favor presiona la opción de actualizar');
      MostrarMensajeActulizarAplicacion();
    }
    console.log('Service Worker script:', FileNameActual);
  } else {
    console.log('No Service Worker registered.');
  }
}
function MostrarMensajeActulizarAplicacion() {
  var techo = '2%';
  var altura = '98%';
  var header = document.getElementById('encabezado');
  if (header) {
    techo = header.getBoundingClientRect().height;
    altura = "calc(100% - ".concat(techo, "px)");
  }

  //NOTE: Para versiones futuras se recomienda eliminar los estilos en linea debido a que no seran necesarios.

  var ventanaActualizacion = CreateElement('DIV', 'MensajeContenedor', ['mensaje-actualizacion']);
  ventanaActualizacion.style.top = "".concat(techo, "px");
  ventanaActualizacion.style.height = altura;
  ventanaActualizacion.innerHTML = "<div id=\"contenidoMensajeActualizacion\" class=\"contenido-Mensaje-Actualizacion\">\n    <div class=\"mensaje\">\n      Tu versi\xF3n de <strong>KIUX</strong> debe ser actualizada. Selecciona la opci\xF3n\n      <span>Actualizar</span> del men\xFA principal y espera unos\n      segundos.\n    </div>\n    <div id=\"videoMensajeActualizacion\" class=\"video-mensaje-actualizacion\">\n      <img src=\"https://kiux.app/archivos/actualizar-kiux.gif\" alt=\"GIF actualizaci\xF3n\"/>\n    </div>\n  </div>";
  document.body.appendChild(ventanaActualizacion);
}
})();

/******/ })()
;