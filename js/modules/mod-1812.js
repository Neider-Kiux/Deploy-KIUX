"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[1812],{

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarVentanaClick: () => (/* binding */ CerrarVentanaClick),
/* harmony export */   CerrarVentanaESC: () => (/* binding */ CerrarVentanaESC),
/* harmony export */   CerrarVentanaMenuPpalClick: () => (/* binding */ CerrarVentanaMenuPpalClick),
/* harmony export */   CerrarVentanaMenuPpalESC: () => (/* binding */ CerrarVentanaMenuPpalESC)
/* harmony export */ });
function CerrarVentanaMenuPpalClick(event, ventana) {
  if (event.target.id == 'MenuPpal' && document.getElementById(ventana)) {
    document.getElementById('MenuPpal').remove();
    document.removeEventListener('mousedown', CerrarVentanaESC, false); // keydown)
    document.getElementById('main').classList.remove('ocultar-scroll');
  }
}

// Cerrar ventana modal con la tecla de escape [ESC]
function CerrarVentanaMenuPpalESC(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('MenuPpal') != null || document.getElementById('MenuPpal') != undefined) {
      document.getElementById('MenuPpal').remove();
      document.removeEventListener('keydown', CerrarVentanaESC, false); // keydown)
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
}

// Cerrar ventana modal al hacer click por fuera de la ventana
function CerrarVentanaClick(event, ventana) {
  if (event.target.id == 'background' && document.getElementById(ventana)) {
    document.getElementById('background').remove();
    document.removeEventListener('mousedown', CerrarVentanaESC, false); // keydown)
    document.getElementById('main').classList.remove('ocultar-scroll');
  }
}

// Cerrar ventana modal con la tecla de escape [ESC]
function CerrarVentanaESC(event) {
  if (event.keyCode == 27) {
    if (document.getElementById('background') != null || document.getElementById('background') != undefined) {
      document.getElementById('background').remove();
      document.removeEventListener('keydown', CerrarVentanaESC, false); // keydown)
      document.getElementById('main').classList.remove('ocultar-scroll');
    }
  }
}

/***/ })

}]);