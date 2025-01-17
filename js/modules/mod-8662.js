"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[8662],{

/***/ 8662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CerrarSesion: () => (/* binding */ CerrarSesion)
/* harmony export */ });
function CerrarSesion(db, messaging) {
  if (localStorage.getItem('CollectionTokenID')) {
    db.collection('Tokens').doc(localStorage.getItem('CollectionTokenID'))["delete"]().then(function () {
      console.log('Document successfully deleted!');
      console.log(localStorage.getItem('TokenNotificacionesPush'));
      messaging.deleteToken(localStorage.getItem('TokenNotificacionesPush')).then(function (result) {
        localStorage.clear();
        location.href = 'login.html';
      });
    })["catch"](function (error) {
      console.error('Error removing document: ', error);
    });
  } else {
    localStorage.clear();
    location.href = 'login.html';
  }
}

/***/ })

}]);