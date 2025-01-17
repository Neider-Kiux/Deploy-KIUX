"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[1916],{

/***/ 1916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuAzul: () => (/* binding */ MenuAzul)
/* harmony export */ });
var MenuAzul = function MenuAzul(TITLE) {
  return "\n  <div class=\"revision-blue-bar\">\n    <button class=\"revision__btn-top\" id=\"volver\">\n      <svg class=\"svg_img svg_img_figure\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-izq\"></use></svg>\n    </button>\n    <h1 class=\"anexo-title\">".concat(TITLE, "</h1>\n    <button class=\"revision__btn-top revision__btn-ver\"\n      ").concat(window.location.pathname.includes('revision') ? "\n        id=\"RealizarBusqueda\"\n      " : 'id="ver"', "\n    >\n      <svg class=\"svg_img svg_img_figure\" viewBox=\"0 0 180 216\"><use xlink:href=\"./img/sprite.svg#btn-ver\"></use></svg>\n    </button>\n    ").concat(window.location.pathname.includes('registro') ? "\n      <div class=\"revision__menu-ver\" id=\"menu-btn-toggle\">\n        <div class=\"menu-ver__item\">\n          <a class=\"opcion\" data-opcion=\"101\" href=\"#\">Recientes</a>\n          <a class=\"opcion\" data-opcion=\"102\" href=\"#\">Sin revisar</a>\n          <a class=\"opcion\" data-opcion=\"103\" href=\"#\">Con estrella</a>\n        </div>\n        <div class=\"menu-ver__item\">\n          <button class=\"opcion opcion-style\" id=\"mes0\" data-opcion=\"10\">Julio</button>\n          <button class=\"opcion opcion-style\" id=\"mes1\" data-opcion=\"11\">Junio</button>\n          <button class=\"opcion opcion-style\" id=\"mes2\" data-opcion=\"12\">Mayo</button>\n        </div>\n        <div class=\"menu-ver__item\">\n          <button id=\"RealizarBusqueda\" class=\"opcion-style\">B\xFAsqueda avanzada</button>\n        </div>\n      </div>\n    " : '', "\n  </div>\n");
};

/***/ })

}]);