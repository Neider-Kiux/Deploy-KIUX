"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[4021],{

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