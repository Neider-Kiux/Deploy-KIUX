"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[9366,6985,7164],{

/***/ 2182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);