"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[3407,7164],{

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdjuntarArchivos: () => (/* binding */ AdjuntarArchivos),
/* harmony export */   CerrarAdjuntarArchivos: () => (/* binding */ CerrarAdjuntarArchivos),
/* harmony export */   RemoverAdjuntarArchivos: () => (/* binding */ RemoverAdjuntarArchivos)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5458);
/* harmony import */ var _elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2407);
/* harmony import */ var _datos_registro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9158);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);






// Cerrar ventana emergente [cerrarSeleccionarProyecto] al hacer click por fuera de la ventana
function CerrarAdjuntarArchivos(event) {
  if (event.target.id == 'background' && document.getElementById('AdjuntarArchivos') && !document.getElementById('SeccionSubir')) {
    document.getElementById('AdjuntarArchivos').remove();
  }
}

// Cerrar ventana emergente [removerSeleccionarProyecto] con la tecla de escape [ESC]
function RemoverAdjuntarArchivos(event) {
  if (event.keyCode == 27) {
    if ((document.getElementById('AdjuntarArchivos') != null || document.getElementById('AdjuntarArchivos') != undefined) && !document.getElementById('SeccionSubir') && !document.getElementById('contenedorTomarFoto')) {
      document.getElementById('AdjuntarArchivos').remove();
      // document.addEventListener('keydown', removerEditarRegistro, false);
      document.addEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_0__.RemoverPreconcepto, false);
    }
    document.removeEventListener('keydown', RemoverAdjuntarArchivos, false);
  }
}
function AdjuntarArchivos(Dialogo) {
  var AdjuntarArchivos = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SECTION', 'AdjuntarArchivos', ['adjuntar-archivo']);
  Dialogo.insertAdjacentElement('beforeend', AdjuntarArchivos);

  //let ContenedorAdjuntarArchivos = CreateElement('DIV', 'contenedorAdjuntarArchivos', ['contenedor-adjuntar-archivos']);
  var BotonesAdjuntarArchivos = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'BotonesAdjuntarArchivos', ['botones-adjuntar-archivos']);

  //AdjuntarArchivos.insertAdjacentElement('beforeend', ContenedorAdjuntarArchivos);
  AdjuntarArchivos.insertAdjacentElement('beforeend', BotonesAdjuntarArchivos);

  // #region Botones Archivos
  var BotonTomarFoto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('BUTTON', null, ['modal-button', 'modal-button--text', 'botones-adjuntar-archivos__boton']);
  var BotonSubirFoto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('BUTTON', null, ['modal-button', 'modal-button--text', 'botones-adjuntar-archivos__boton'], 'Subir');
  var BotonSubirDocumento = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('BUTTON', null, ['modal-button', 'modal-button--text', 'botones-adjuntar-archivos__boton'], 'SubirDoc');
  var BotonListarArchivos = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('BUTTON', null, ['modal-button', 'modal-button--text', 'botones-adjuntar-archivos__boton'], 'SubirPDF');
  BotonTomarFoto.innerHTML = '<svg class="svg_img svg_img_figure" viewBox="-24 -24 555 550"><use xlink:href="./img/sprite.svg#btn-camara"></use></svg>';
  BotonSubirFoto.innerHTML = '<svg class="svg_img svg_img_figure" viewBox="0 0 18 18"><use xlink:href="./img/sprite.svg#btn-imagen"></use></svg>';
  BotonSubirDocumento.innerHTML = '<svg class="svg_img svg_img_figure" viewBox="0 0 55 65"><use xlink:href="./img/sprite.svg#btn-documento"></use></svg>';
  BotonListarArchivos.innerHTML = '<svg class="svg_img svg_img_figure" viewBox="-24 -24 555 550"><use xlink:href="./img/sprite.svg#btn-pdf"></use></svg>';
  //Inputs
  BotonSubirFoto.innerHTML = BotonSubirFoto.innerHTML + "<input type=\"file\" id=\"ImagenInput\" accept=\".png, .jpg, .jpeg\" style=\"display: none;\" multiple>";
  BotonSubirDocumento.innerHTML = BotonSubirDocumento.innerHTML + "<input type=\"file\" id=\"DocumentoInput\" accept=\".txt, .pdf, .docx\" style=\"display: none;\">";
  BotonTomarFoto.addEventListener('click', abrirDialogoTomarFoto);
  BotonSubirFoto.addEventListener('click', function () {});
  BotonSubirDocumento.addEventListener('click', function () {});
  BotonListarArchivos.addEventListener('click', function () {
    abrirDialogoListarArchivos(Dialogo);
  });
  BotonesAdjuntarArchivos.insertAdjacentElement('beforeend', BotonTomarFoto);
  BotonesAdjuntarArchivos.insertAdjacentElement('beforeend', BotonSubirFoto);
  BotonesAdjuntarArchivos.insertAdjacentElement('beforeend', BotonSubirDocumento);
  BotonesAdjuntarArchivos.insertAdjacentElement('beforeend', BotonListarArchivos);
  var archivoInput = document.getElementById('DocumentoInput');
  var imagenInput = document.getElementById('ImagenInput');
  BotonSubirDocumento.addEventListener('click', function () {
    archivoInput.click();
  });
  BotonSubirFoto.addEventListener('click', function () {
    imagenInput.click();
  });
  archivoInput.addEventListener('change', function (e) {
    var documento = e.target.files[0];
    if (documento) {
      var formData = new FormData();
      formData.append('file', documento, documento.originalname);
      var ArrayFormData = [formData];
      SubirArchivoS3(ArrayFormData, function () {}, BotonSubirDocumento);
    }
    e.target.value = '';
  });
  imagenInput.addEventListener('change', function (e) {
    var fotos = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(e.target.files);
    var ArrayFormData = [];
    if (fotos) {
      fotos.forEach(function (foto, indice) {
        var formData = new FormData();
        formData.append('file', foto, foto.originalname);
        ArrayFormData.push(formData);
      });
      SubirArchivoS3(ArrayFormData, function () {}, BotonSubirFoto);
    }
    e.target.value = '';
  });
  if (document.getElementById('AdjuntarArchivos') != null || document.getElementById('AdjuntarArchivos') != undefined) {
    // [removeEventListener] - Detener handler [cerrarEditarRegistro, removerEditarRegistro] mientras esta abierta la ventana SeleccionarProyecto
    document.removeEventListener('mousedown', _datos_registro__WEBPACK_IMPORTED_MODULE_0__.CerrarPreconcepto, false); // mousedown
    // document.removeEventListener('keydown', removerEditarRegistro, false); // keydown
    document.removeEventListener('keydown', _datos_registro__WEBPACK_IMPORTED_MODULE_0__.RemoverPreconcepto, false); // keydown
    // [addEventListener]
    document.getElementById('background').addEventListener('mousedown', CerrarAdjuntarArchivos, false); // mousedown
    document.addEventListener('keydown', RemoverAdjuntarArchivos, false); // keydown
  }
  //dibujarLoader();
}
function abrirDialogoTomarFoto() {
  // #region abrirDialogo
  document.querySelector('main').classList.add('ocultar-scroll');
  var ContenedorTomarFoto = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'contenedorTomarFoto', ['contenedor-tomar-foto']);
  var CuerpoHTML = document.querySelector('main');
  var camaraInputBase = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'camaraInput', ['camara-input']);
  camaraInputBase.innerHTML = "\n  <video muted=\"muted\" id=\"videoTomarFoto\"></video>\n  <div class=\"botonesFotografia\">\n    <button id=\"botonCambiarCamara\" class=\"camara__botones\">\n      <svg class=\"camara__botones_button_svg\" viewBox=\"0 0 200 200\"><use xlink:href=\"./img/sprite.svg#btn-rotar\"></use></svg>\n    </button>\n    <button id=\"botonTomarFoto\" class=\"camara__botones\">\n      <svg class=\"camara__botones_button_svg\" viewBox=\"0 0 200 200\"><use xlink:href=\"./img/sprite.svg#btn-capturar\"></use></svg>\n    </button>\n    <button id=\"botonCancelarFotoCamara\" class=\"camara__botones\">\n      <svg class=\"camara__botones_button_svg\" viewBox=\"0 0 200 200\"><use xlink:href=\"./img/sprite.svg#btn-cancelar\"></use></svg>\n    </button>\n  </div>\n  ";
  var canvasOutputBase = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'canvasOutput', ['canvas-output']);
  canvasOutputBase.innerHTML = "\n  <canvas id=\"canvasMostrarFoto\"></canvas>\n  <div class=\"botonesFotografia\">\n    <button id=\"botonGuardarFoto\" class=\"camara__botones\">\n      <svg class=\"camara__botones_button_svg\" viewBox=\"0 0 200 200\"><use xlink:href=\"./img/sprite.svg#btn-subir\"></use></svg>\n    </button>\n    <button id=\"botonTomarNuevaFoto\" class=\"camara__botones\">\n      <svg class=\"camara__botones_button_svg\" viewBox=\"0 0 200 200\"><use xlink:href=\"./img/sprite.svg#btn-cancelar\"></use></svg>\n    </button>\n  </div>\n  ";
  canvasOutputBase.style.display = 'none';
  ContenedorTomarFoto.insertAdjacentElement('beforeend', camaraInputBase);
  ContenedorTomarFoto.insertAdjacentElement('beforeend', canvasOutputBase);
  CuerpoHTML.insertAdjacentElement('beforeend', ContenedorTomarFoto);
  var tieneSoporteUserMedia = function tieneSoporteUserMedia() {
    return !!(navigator.getUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
  };
  var _getUserMedia = function _getUserMedia() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia).apply(navigator, args);
  };
  var CanvasOutput = document.getElementById('canvasOutput');
  var BotonGuardarFoto = document.getElementById('botonGuardarFoto');
  var BotonReintentarFoto = document.getElementById('botonTomarNuevaFoto');
  var obtenerDispositivos = function obtenerDispositivos() {
    return navigator.mediaDevices.enumerateDevices();
  };
  var botonCambiarCamara = document.getElementById('botonCambiarCamara');
  var botonCancelarFotoCamara = document.getElementById('botonCancelarFotoCamara');
  var CanvasMostrarFoto = document.getElementById('canvasMostrarFoto');
  var anchoPantalla = window.innerWidth;
  var altoPantalla = window.innerHeight;
  var NumeroDeCamaraFrontal = 1;
  var stream;
  var iniciarStream;
  var OpcionesVideoDeskTop = {
    deviceId: '',
    width: 1080,
    height: 720,
    facingMode: 'user'
  };
  var OpcionesVideo = {
    deviceId: '',
    width: OpcionesVideoDeskTop.width,
    height: OpcionesVideoDeskTop.height
  };
  IniciarCamara();
  function IniciarCamara() {
    var CanvasOutput = document.getElementById('canvasOutput');
    CanvasMostrarFoto = document.getElementById('canvasMostrarFoto');
    var CamaraInput = document.getElementById('camaraInput');
    var VideoTomarFoto = document.getElementById('videoTomarFoto');
    var BotonTomarFoto = document.getElementById('botonTomarFoto');
    if (!tieneSoporteUserMedia()) {
      alert('Lo siento. Tu navegador no soporta esta característica');
      return;
    }
    iniciarStream = function iniciarStream() {
      obtenerDispositivos().then(function (dispositivos) {
        var dispositivosDeVideo = [];
        dispositivos.forEach(function (dispositivo) {
          var tipo = dispositivo.kind;
          if (tipo === 'videoinput') {
            dispositivosDeVideo.push(dispositivo);
          }
        });
        if (dispositivosDeVideo.length > 0) {
          if (NumeroDeCamaraFrontal >= dispositivosDeVideo.length) {
            NumeroDeCamaraFrontal = 0;
          }
          mostrarStream(dispositivosDeVideo[NumeroDeCamaraFrontal]);
        } else {
          CamaraInput.insertAdjacentElement('afterbegin', (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', null, ['sin-Camaras'], 'No hay dispositivos disponibles'));
          setTimeout(function () {
            try {
              ContenedorTomarFoto.remove();
            } catch (_unused) {}
          }, 2000);
        }
      });
    };
    iniciarStream();
    var mostrarStream = function mostrarStream(Dispositivo) {
      if (anchoPantalla < altoPantalla) {
        OpcionesVideo.height = 720;
        OpcionesVideo.width = 1280;
      } else {}
      OpcionesVideo.deviceId = Dispositivo.deviceId;
      _getUserMedia({
        video: OpcionesVideo
      }, function (streamObtenido) {
        if (stream) {
          CerrarCamara(function () {});
        }
        stream = streamObtenido;
        VideoTomarFoto.srcObject = stream;
        VideoTomarFoto.play();
        if (Dispositivo.label.includes('front')) {
          VideoTomarFoto.style.transform = 'scaleX(-1)';
        } else {
          VideoTomarFoto.style.transform = 'scaleX(1)';
        }
        BotonTomarFoto.addEventListener('click', function () {
          VideoTomarFoto.pause();
          var Contexto = CanvasMostrarFoto.getContext('2d');
          CanvasMostrarFoto.width = VideoTomarFoto.videoWidth;
          CanvasMostrarFoto.height = VideoTomarFoto.videoHeight;
          Contexto.drawImage(VideoTomarFoto, 0, 0, CanvasMostrarFoto.width, CanvasMostrarFoto.height);
          CanvasOutput.style.display = 'flex';
          CerrarCamara(function () {
            CamaraInput.remove();
          });
        });
        function CerrarCamara(funcionRemover) {
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
          funcionRemover();
        }
      }, function (error) {
        console.log('Permiso denegado o error: ', error);
      });
    };
  }
  botonCambiarCamara.addEventListener('click', function () {
    NumeroDeCamaraFrontal += 1;
    try {
      stream.getTracks().forEach(function (track) {
        track.stop();
      });
    } catch (_unused2) {}
    iniciarStream();
  });
  BotonReintentarFoto.addEventListener('click', function () {
    CanvasOutput.style.display = 'none';
    ContenedorTomarFoto.insertAdjacentElement('beforeend', camaraInputBase);
    IniciarCamara();
  });
  botonCancelarFotoCamara.addEventListener('click', function () {
    salirAdjuntarFotografia();
  });
  BotonGuardarFoto.addEventListener('click', function () {
    cargarFoto();
  });
  function cargarFoto() {
    BotonGuardarFoto.disabled = true;
    var fechaActual = new Date().toLocaleDateString();
    var horaActual = new Date().toLocaleTimeString();
    var fecha = fechaActual.replace(/\//g, '-');
    var hora = horaActual.replace(/:/g, '-');
    var nombreUsuario = localStorage.getItem('NombreUsuario').replace(/\s/g, '');
    var nombreFoto = "".concat(nombreUsuario, "-").concat(fecha, "-").concat(hora);
    var foto = CanvasMostrarFoto.toDataURL();
    var enlace = document.createElement('a'); // Crear un <a>
    enlace.download = 'foto1.png';
    enlace.href = foto;
    var arrayBuffer = Uint8Array.from(atob(foto.split(',')[1]), function (c) {
      return c.charCodeAt(0);
    }).buffer;

    // Crear un Blob desde el array buffer
    var blob = new Blob([arrayBuffer], {
      type: 'image/jpeg'
    }); // Cambia el tipo según el tipo de imagen que sea

    // Crear un FormData y agregar el Blob
    var formData = new FormData();
    formData.append('file', blob, "".concat(nombreFoto, ".jpg")); // Cambia el nombre del archivo según sea necesario
    var ArrayFormData = [formData];
    SubirArchivoS3(ArrayFormData, salirAdjuntarFotografia, BotonGuardarFoto);
    //enlace.click();
  }
  function salirAdjuntarFotografia() {
    try {
      stream.getTracks().forEach(function (track) {
        track.stop();
      });
    } catch (_unused3) {}
    ContenedorTomarFoto.remove();
  }
  document.addEventListener('keydown', removerAdjuntarFotografia, false);
  function removerAdjuntarFotografia(event) {
    if (event.keyCode == 27) {
      if (ContenedorTomarFoto) {
        salirAdjuntarFotografia();
        document.removeEventListener('keydown', removerAdjuntarFotografia, false);
        document.addEventListener('keydown', RemoverAdjuntarArchivos, false);
      }
    }
  }
  ContenedorTomarFoto.addEventListener('mousedown', cerrarContenedorTomarForo, false);
  function cerrarContenedorTomarForo(event) {
    if (event.target.id == 'contenedorTomarFoto') {
      salirAdjuntarFotografia();
    }
  }
}
function abrirDialogoListarArchivos(Dialogo) {
  var SeccionListarArchivos = crearDialogoListar();
  Dialogo.insertAdjacentElement('beforeend', SeccionListarArchivos);
}
function crearDialogoListar() {
  var SeccionSubir = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('SECTION', 'SeccionSubir', ['seccion-Subir']);
  var Contenido = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'SeccionSubirContenido', ['seccion-Subir_Contenido']);
  SeccionSubir.insertAdjacentElement('beforeend', Contenido);
  document.querySelector('main').addEventListener('click', CerrarDialogoListar);
  document.querySelector('main').addEventListener('keyup', removerDialogoListar);
  function CerrarDialogoListar(event) {
    if (event.target.id == 'background' && document.getElementById('SeccionSubir')) {
      document.getElementById('SeccionSubir').remove();
    }
    document.querySelector('main').removeEventListener('keypress', CerrarDialogoListar);
  }
  function removerDialogoListar(event) {
    if (event.keyCode == 27) {
      if (document.getElementById('SeccionSubir') != null || document.getElementById('SeccionSubir') != undefined) {
        document.getElementById('SeccionSubir').remove();
      }
    }
    document.querySelector('main').removeEventListener('keyup', removerDialogoListar);
  }
  return SeccionSubir;
}
function SubirArchivoS3(ArrayFormData, funcionCerrarBentana, BotonGuardar) {
  var tamaño = ArrayFormData.length;
  var contador = 0;
  var porcentajeUnidad = 100 / tamaño;
  if (document.getElementById('canvasOutput')) {
    dibujarLoader(document.getElementById('canvasOutput'));
  } else {
    dibujarLoader(document.querySelector('#AdjuntarArchivos'));
  }
  var loader = document.getElementById('LoaderBar');
  ArrayFormData.forEach(function (FormData) {
    fetch('https://certifi.co/upload', {
      method: 'POST',
      body: FormData
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log("Archivo ".concat(contador + 1, " subido con \xE9xito"));
      var ventanaCargaExitosa = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'VentanaCargaExitosa', ['ventanaCargaExitosa'], 'Cargado con exito');
      document.querySelector('main').insertAdjacentElement('afterend', ventanaCargaExitosa);
      setTimeout(function () {
        ventanaCargaExitosa.remove();
        funcionCerrarBentana();
      }, 1500);
      contador++;
      loader.style = "width: ".concat(parseInt(porcentajeUnidad * contador), "%;");
      if (contador >= tamaño) {
        setTimeout(function () {
          if (document.querySelector('#ContenedorLoader')) document.querySelector('#ContenedorLoader').remove();
        }, 500);
      }
    })["catch"](function (error) {
      var ventanaCargaErrada = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'VentanaCargaErrada', ['ventanaCargaErrada'], 'No fue posible subir los archivos');
      document.querySelector('main').insertAdjacentElement('afterend', ventanaCargaErrada);
      setTimeout(function () {
        ventanaCargaErrada.remove();
      }, 3500);
      if (BotonGuardar) BotonGuardar.disabled = false;
      console.error('Error al subir el archivo:', error);
      contador++;
      if (contador >= tamaño) {
        setTimeout(function () {
          if (document.querySelector('#ContenedorLoader')) document.querySelector('#ContenedorLoader').remove();
        }, 500);
      }
    });
  });
}
function dibujarLoader(elementoDestino) {
  var loader = (0,_elements_htmlElements__WEBPACK_IMPORTED_MODULE_2__.CreateElement)('DIV', 'ContenedorLoader', ['contenedor-loader']);
  loader.innerHTML = "\n    <div class=\"spinner\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>  \n  <div class=\"divLoaderBar\"><span class=\"loaderBar\" id=\"LoaderBar\"></span></div>";
  elementoDestino.insertAdjacentElement('beforeend', loader);
  // let loaderBar = document.getElementById('LoaderBar');
  // loaderBar.style = `width: 70%;`;
}
function ObtenerLocalizacion() {
  return new Promise(function (resolve, reject) {
    if (!('geolocation' in navigator)) {
      reject('Geolocalización no soportada, Tu navegador no soporta el acceso a la ubicación, intenta con otro navegador');
    }
    function ubicaciónObtenida(ubicacion) {
      var LatitudLongitud = "".concat(ubicacion.coords.latitude, ",").concat(ubicacion.coords.longitude);
      resolve(LatitudLongitud);
    }
    function errorUbicacion(err) {
      reject("Se ha producido un error: ".concat(err.message));
    }
    var opcionesDeSolicitud = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(ubicaciónObtenida, errorUbicacion, opcionesDeSolicitud);
  });
}

/***/ })

}]);