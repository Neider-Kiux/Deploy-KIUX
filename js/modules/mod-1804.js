"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[1804],{

/***/ 1804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PintarGraficaAvanceSVG: () => (/* binding */ PintarGraficaAvanceSVG)
/* harmony export */ });
function ColorBarra(ColorSugerido, Indice, AnchoPixeles) {
  var AnchoBarra = 14;
  var Apagado = '#000000';
  if (AnchoPixeles > AnchoBarra * Indice) {
    return ColorSugerido;
  } else {
    return Apagado;
  }
}
function PintarGraficaAvanceSVG(config) {
  var Alcance = config.Alcance,
    IndiceHorasRegistradas = config.IndiceHorasRegistradas,
    IndiceHorasEfectivas = config.IndiceHorasEfectivas,
    PorcentajeEsperado = config.PorcentajeEsperado,
    PorcentajeAlcanzado = config.PorcentajeAlcanzado,
    Descripcion = config.Descripcion,
    CalcularPosicionHistorial = config.CalcularPosicionHistorial,
    CargarHistorialB = config.CargarHistorialB;
  // Calcular Posicion Historial,CargrHistotialB y Ubicar Handles deberian de ser modulos
  var IndiceHorasRegistradasPixeles = Math.min(IndiceHorasRegistradas * 195, 252);
  var IndiceHorasEfectivasPixeles = Math.min(IndiceHorasEfectivas * 195, 252);
  var PorcentajeEsperadoPixeles = Math.min(PorcentajeEsperado * 189, 238);
  var PorcentajeAlcanzadoPixeles = Math.min(PorcentajeAlcanzado * 189, 238);
  var Imagen;
  var id;
  var CodigoAlcance; // para CargarHistorialB
  switch (Alcance) {
    case 21:
      Imagen = document.getElementById('avance-p');
      id = 'avance-p';
      CodigoAlcance = 10;
      break;
    case 11:
      Imagen = document.getElementById('avance-d');
      id = 'avance-d';
      CodigoAlcance = 1;
      break;
  }
  var svg = "\n\t  <svg id=\"".concat(id, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 254 94\" width=\"254\" height=\"94\">\n\t\t  <g>\n\t\t\t  <rect fill=\"#303030\" x=\"0\" y=\"0\" width=\"254\" height=\"94\"></rect>\n\t\t\t  <rect fill=\"#FFFFFF\" x=\"2\" y=\"35\" width=\"250\" height=\"37\"></rect>\n\t\t\t  <rect fill=\"").concat(ColorBarra('#CC0000', 0, IndiceHorasRegistradasPixeles), "\" x=\"2\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D01700', 1, IndiceHorasRegistradasPixeles), "\" x=\"16\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D52E00', 2, IndiceHorasRegistradasPixeles), "\" x=\"30\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D94500', 3, IndiceHorasRegistradasPixeles), "\" x=\"44\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#DE5C00', 4, IndiceHorasRegistradasPixeles), "\" x=\"58\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E37300', 5, IndiceHorasRegistradasPixeles), "\" x=\"72\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E78B00', 6, IndiceHorasRegistradasPixeles), "\" x=\"86\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#ECA200', 7, IndiceHorasRegistradasPixeles), "\" x=\"100\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F1B900', 8, IndiceHorasRegistradasPixeles), "\" x=\"114\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F5D000', 9, IndiceHorasRegistradasPixeles), "\" x=\"128\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FAE700', 10, IndiceHorasRegistradasPixeles), "\" x=\"142\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FFFF00', 11, IndiceHorasRegistradasPixeles), "\" x=\"156\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D4FF00', 12, IndiceHorasRegistradasPixeles), "\" x=\"170\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#AAFF00', 13, IndiceHorasRegistradasPixeles), "\" x=\"184\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#7FFF00', 14, IndiceHorasRegistradasPixeles), "\" x=\"198\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#55FF00', 15, IndiceHorasRegistradasPixeles), "\" x=\"212\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#2AFF00', 16, IndiceHorasRegistradasPixeles), "\" x=\"226\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#00FF00', 17, IndiceHorasRegistradasPixeles), "\" x=\"240\" y=\"2\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#CC0000', 0, IndiceHorasEfectivasPixeles), "\" x=\"2\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D01700', 1, IndiceHorasEfectivasPixeles), "\" x=\"16\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D52E00', 2, IndiceHorasEfectivasPixeles), "\" x=\"30\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D94500', 3, IndiceHorasEfectivasPixeles), "\" x=\"44\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#DE5C00', 4, IndiceHorasEfectivasPixeles), "\" x=\"58\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E37300', 5, IndiceHorasEfectivasPixeles), "\" x=\"72\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#E78B00', 6, IndiceHorasEfectivasPixeles), "\" x=\"86\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#ECA200', 7, IndiceHorasEfectivasPixeles), "\" x=\"100\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F1B900', 8, IndiceHorasEfectivasPixeles), "\" x=\"114\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#F5D000', 9, IndiceHorasEfectivasPixeles), "\" x=\"128\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FAE700', 10, IndiceHorasEfectivasPixeles), "\" x=\"142\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#FFFF00', 11, IndiceHorasEfectivasPixeles), "\" x=\"156\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#D4FF00', 12, IndiceHorasEfectivasPixeles), "\" x=\"170\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#AAFF00', 13, IndiceHorasEfectivasPixeles), "\" x=\"184\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#7FFF00', 14, IndiceHorasEfectivasPixeles), "\" x=\"198\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#55FF00', 15, IndiceHorasEfectivasPixeles), "\" x=\"212\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#2AFF00', 16, IndiceHorasEfectivasPixeles), "\" x=\"226\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"").concat(ColorBarra('#00FF00', 17, IndiceHorasEfectivasPixeles), "\" x=\"240\" y=\"18\" width=\"12\" height=\"15\" />\n\t\t\t  <rect fill=\"#303030\" x=\"8\" y=\"53\" width=\"238\" height=\"1\"></rect>\n\t\t\t  <rect fill=\"#303030\" x=\"196\" y=\"51\" width=\"2\" height=\"5\"></rect>\n\t\t\t  <polygon points=\"").concat(PorcentajeEsperadoPixeles, ",37 ").concat(PorcentajeEsperadoPixeles + 16, ",37 ").concat(PorcentajeEsperadoPixeles + 8, ",51\" fill=\"#0080FF\"/>\n\t\t\t  <polygon points=\"").concat(PorcentajeAlcanzadoPixeles, ",70 ").concat(PorcentajeAlcanzadoPixeles + 16, ",70 ").concat(PorcentajeAlcanzadoPixeles + 8, ",56\" fill=\"#FF8000\"/>\n\t\t\t  <text x=\"3\" y=\"89\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"initial\" fill=\"white\">").concat(Descripcion, "</text>\n\t\t  </g>\n\t  </svg>");
  Imagen.outerHTML = svg;
  document.getElementById(id).addEventListener('click', function (event) {
    document.querySelector('.c_slider').style.display = 'none';
    CalcularPosicionHistorial();
    CargarHistorialB(CodigoAlcance, 0, 'today', 'today');
    document.getElementById('DescripcionHistorial').innerHTML = Descripcion;
  });
}

/***/ })

}]);