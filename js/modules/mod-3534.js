"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[3534],{

/***/ 3534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eliminarDropDown: () => (/* binding */ eliminarDropDown),
/* harmony export */   menuPredictor: () => (/* binding */ menuPredictor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5458);

var TidInput = '';
var previousText = '';
var collection = JSON.parse(localStorage.getItem('ListaPalabras'));
function menuPredictor(idInput) {
  TidInput = idInput;
  var dropdown = document.createElement('div');
  dropdown.className = 'dropdown-content';
  dropdown.id = 'dropdown-content';
  var Entrada = document.getElementById(idInput);
  Entrada.parentElement.insertAdjacentElement('beforeend', dropdown);
  Entrada.addEventListener('input', entradaAInput);
  Entrada.addEventListener('keydown', precionarFlechasEnter);
}
function entradaAInput(e) {
  var limiteOpciones = 15;
  var dropdown = document.createElement('div');
  dropdown.className = 'dropdown-content';
  dropdown.id = 'dropdown-content';
  var Entrada = e.target;
  var input = this.innerHTML.toLowerCase();
  var dropdownContent = document.getElementById('dropdown-content');
  var posLastSeparator = last_Separator(input);
  var splitInput = dividirInput(input, posLastSeparator);
  var lastWord = splitInput[1];
  previousText = splitInput[0];
  // Limpiar el contenido previo del dropdown
  dropdownContent.innerHTML = '';
  if (input) {
    // Filtrar las palabras que comienzan con el texto ingresado
    var filteredWords = [];
    if (lastWord != '') {
      filteredWords = collection.filter(function (word) {
        return word.toLocaleLowerCase().startsWith(lastWord);
      });
    }
    var _loop = function _loop() {
      var word = filteredWords[i];
      if (word) {
        var option = document.createElement('div');
        option.textContent = word.toLocaleLowerCase();
        if (i == 0) {
          option.classList.add('seleccionado');
        }
        option.addEventListener('click', function () {
          // Al hacer clic en una opción, completar el input con la palabra seleccionada
          Entrada.innerHTML = previousText + word.toLocaleLowerCase();
          // Limpiar el contenido del dropdown
          dropdownContent.innerHTML = '';
          ordenerTexto(document.getElementById('BuscarProyectosTexto'));
        });
        option.addEventListener('mouseover', hoverEnOpcion);
        dropdownContent.appendChild(option);
      }
    };
    for (var i = 0; i < limiteOpciones; i++) {
      _loop();
    }

    // Mostrar el dropdown si hay opciones
    if (filteredWords.length >= 1) {
      dropdownContent.style.display = 'grid';
    } else {
      dropdownContent.style.display = 'none';
    }
  } else {
    dropdownContent.style.display = 'none';
  }

  // Ocultar el dropdown cuando se hace clic fuera del mismo
  document.addEventListener('click', oculatarDropDown(e));
}
function dividirInput(input, posLastSeparator) {
  var arrayRetorno = ['', ''];
  arrayRetorno[0] = input.slice(0, posLastSeparator + 1);
  arrayRetorno[1] = input.slice(posLastSeparator + 1, input.length);
  return arrayRetorno;
}
function last_Separator(text) {
  var regex = /[ -]/g;
  var lastPosition = -1;
  var match;
  while ((match = regex.exec(text)) !== null) {
    lastPosition = match.index;
  }
  return lastPosition;
}
function oculatarDropDown(e) {
  if (!e.target.matches('#autocomplete-input')) {
    document.getElementById('dropdown-content').parentElement.classList.remove('show');
  }
}
function precionarFlechasEnter(e) {
  var contenidoDropDown = '';
  if (document.getElementById('dropdown-content')) {
    contenidoDropDown = document.getElementById('dropdown-content').innerHTML;
  }
  if ((e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'Enter') && contenidoDropDown && document.getElementById('dropdown-content')) {
    e.preventDefault();
    var listaOpciones = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(document.getElementById('dropdown-content').querySelectorAll('div'));
    if (e.key == 'ArrowUp') {
      moverOpcion(-1, listaOpciones);
    } else if (e.key == 'ArrowDown') {
      moverOpcion(1, listaOpciones);
    } else if (e.key == 'Enter') {
      seleccionarConEnter(listaOpciones);
    }
  }
}
function moverOpcion(direccion, listaOpciones) {
  var nuevaPosicion = 0;
  listaOpciones.forEach(function (opcion, iterador) {
    if (opcion.classList.contains('seleccionado')) {
      nuevaPosicion = iterador + direccion;
      if (nuevaPosicion < 0) {
        nuevaPosicion = listaOpciones.length - 1;
      }
      if (nuevaPosicion > listaOpciones.length - 1) {
        nuevaPosicion = 0;
      }
      opcion.classList.remove('seleccionado');
    }
  });
  listaOpciones[nuevaPosicion].classList.add('seleccionado');
}
function seleccionarConEnter(listaOpciones) {
  var entradaParaTexto = document.getElementById(TidInput);
  listaOpciones.forEach(function (opcion) {
    if (opcion.classList.contains('seleccionado')) {
      entradaParaTexto.innerHTML = previousText + opcion.innerHTML.toLocaleLowerCase();
      document.getElementById('dropdown-content').innerHTML = '';
      ordenerTexto(entradaParaTexto);
    }
  });
}
function ordenerTexto(entradaParaTexto) {
  var texto = entradaParaTexto.innerHTML;
  var tamaño = texto.length;
  texto = texto.replace(/\n/g, ' ');
  entradaParaTexto.innerHTML = texto;
  var range = document.createRange();
  // Crear una selección
  var selection = window.getSelection();
  // Seleccionar el contenido del div
  range.selectNodeContents(entradaParaTexto);
  // Colocar el cursor al final
  range.collapse(false);
  // Limpiar la selección existente
  selection.removeAllRanges();
  // Añadir el nuevo rango con el cursor al final
  selection.addRange(range);
  // Enfocar el elemento editable
  entradaParaTexto.focus();
}
function hoverEnOpcion(e) {
  var listaOpciones = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(document.getElementById('dropdown-content').querySelectorAll('div'));
  listaOpciones.forEach(function (opcion, iterador) {
    if (opcion.classList.contains('seleccionado')) {
      opcion.classList.remove('seleccionado');
    }
  });
  e.target.classList.add('seleccionado');
}
function eliminarDropDown() {
  document.getElementById('BuscarProyectosTexto').removeEventListener('input', entradaAInput);
  document.removeEventListener('click', oculatarDropDown(e));
}

/***/ })

}]);