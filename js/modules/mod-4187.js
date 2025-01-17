"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[4187],{

/***/ 4187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcularPosicionHistorial: () => (/* binding */ CalcularPosicionHistorial)
/* harmony export */ });
function CalcularPosicionHistorial() {
  var EncabezadoHeight = document.getElementById('encabezado').getBoundingClientRect().height;
  var HistorialHeight = document.getElementById('dashboard').getBoundingClientRect().height;
  var AltoDelHistorial = "".concat(EncabezadoHeight + HistorialHeight - 35, "px");
  document.getElementById('historial').style.top = AltoDelHistorial;
}

/***/ })

}]);