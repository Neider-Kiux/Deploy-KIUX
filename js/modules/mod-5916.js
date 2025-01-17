"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[5916],{

/***/ 5916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   datepickerOptions: () => (/* binding */ datepickerOptions)
/* harmony export */ });
var button = {
  content: 'Hoy',
  className: 'custom-button-classname',
  onClick: function onClick(dp) {
    var date = new Date();
    dp.selectDate(date);
    dp.setViewDate(date);
  }
};
var datepickerOptions = {
  dateFormat: 'yyyy-MM-dd',
  locale: {
    days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    daysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    today: 'Hoy',
    clear: 'Limpiar',
    dateFormat: 'yyyy/mm/dd',
    timeFormat: 'hh:ii aa',
    firstDay: 1
  },
  buttons: [button],
  todayButton: new Date(),
  autoClose: true,
  onSelect: function onSelect(dp) {
    //console.log(dp.datepicker.$el);
    if (dp.datepicker.$el.id == 'fechaPreconcepto') {
      var Fecha_Preconcepto = document.getElementById('fechaPreconcepto');
      Fecha_Preconcepto.setAttribute('data-value', dp.formattedDate);
    }
    if (document.getElementById('fechaInicial')) {
      var Fecha_Inicial = document.getElementById('fechaInicial');
      var Fecha_Final = document.getElementById('fechaFinal');
      if (dp.datepicker.$el.id == 'fechaInicial') {
        Fecha_Inicial.setAttribute('data-value', dp.formattedDate);
      }
      if (dp.datepicker.$el.id == 'fechaInicial' && Fecha_Inicial.dataset.contador == 1) {
        Fecha_Final.setAttribute('data-value', dp.formattedDate);
        Fecha_Final.value = dp.formattedDate;
      }
      if (dp.datepicker.$el.id == 'fechaFinal') {
        Fecha_Inicial.dataset.contador++;
        Fecha_Final.setAttribute('data-value', dp.formattedDate);
      }
    }
    if (dp.datepicker.$el.id == 'fechaParaRuta') {
      var _Fecha_Preconcepto = document.getElementById('fechaParaRuta');
      _Fecha_Preconcepto.setAttribute('data-value', dp.formattedDate);
    }
  },
  position: function position(_ref) {
    var $datepicker = _ref.$datepicker,
      $target = _ref.$target,
      $pointer = _ref.$pointer;
    var coords = $target.getBoundingClientRect(),
      dpHeight = $datepicker.clientHeight,
      dpWidth = $datepicker.clientWidth,
      downMovement = 3;
    var top = coords.y + coords.height + downMovement;
    var left = coords.x;
    $datepicker.style.left = "".concat(left, "px");
    $datepicker.style.top = "".concat(top, "px");
    $pointer.style.display = 'none';
  }
};

/***/ })

}]);