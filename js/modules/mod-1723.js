"use strict";
(self["webpackChunkkiux"] = self["webpackChunkkiux"] || []).push([[1723],{

/***/ 1723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2284);
/* module decorator */ module = __webpack_require__.hmd(module);

(function (window, undefined) {
  'use strict';

  var JogDial = function JogDial(element, options) {
    return new JogDial.Instance(element, options || {});
  };
  function setConstants() {
    if (JogDial.Ready) {
      return;
    }
    JogDial.Doc = window.document;
    JogDial.ToRad = Math.PI / 180;
    JogDial.ToDeg = 180 / Math.PI;
    JogDial.ModernEvent = JogDial.Doc.addEventListener ? true : false;
    JogDial.MobileRegEx = '/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/';
    JogDial.MobileEvent = 'ontouchstart' in window && window.navigator.userAgent.match(JogDial.MobileRegEx);
    JogDial.PointerEvent = window.navigator.pointerEnabled || window.navigator.msPointerEnabled ? true : false;
    JogDial.Defaults = {
      debug: false,
      touchMode: 'knob',
      knobSize: '30%',
      wheelSize: '100%',
      zIndex: 9999,
      degreeStartAt: 0,
      minDegree: null,
      maxDegree: null
    };
    JogDial.DegInfo = {
      rotation: 0,
      quadrant: 1
    };
    JogDial.DomEvent = {
      MOUSE_DOWN: 'mousedown',
      MOUSE_MOVE: 'mousemove',
      MOUSE_OUT: 'mouseout',
      MOUSE_UP: 'mouseup'
    };
    JogDial.CustomEvent = {
      MOUSE_DOWN: 'mousedown',
      MOUSE_MOVE: 'mousemove',
      MOUSE_UP: 'mouseup'
    };
    JogDial.utils = {
      extend: function extend(target, src) {
        for (var key in src) {
          target[key] = src[key];
        }
        return target;
      },
      getComputedStyle: function getComputedStyle(el, prop) {
        if (window.getComputedStyle) {
          return window.getComputedStyle(el).getPropertyValue(prop);
        } else if (el.currentStyle) {
          return el.currentStyle[prop];
        }
      },
      getCoordinates: function getCoordinates(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
          rect = target.getBoundingClientRect(),
          _x = (JogDial.MobileEvent ? e.targetTouches[0].clientX : e.clientX) - rect.left,
          _y = (JogDial.MobileEvent ? e.targetTouches[0].clientY : e.clientY) - rect.top;
        return {
          x: _x,
          y: _y
        };
      },
      getQuadrant: function getQuadrant(x, y) {
        if (x > 0 && y > 0) return 4;else if (x < 0 && y > 0) return 3;else if (x < 0 && y < 0) return 2;else if (x >= 0 && y < 0) return 1;
      },
      getRotation: function getRotation(self, quadrant, newDegree) {
        var rotation,
          delta = 0,
          info = self.info;
        if (quadrant == 1 && info.old.quadrant == 2) {
          delta = 360;
        } else if (quadrant == 2 && info.old.quadrant == 1) {
          delta = -360;
        }
        rotation = newDegree + delta - info.old.rotation + info.now.rotation;
        info.old.rotation = newDegree;
        info.old.quadrant = quadrant;
        return rotation;
      },
      checkBoxCollision: function checkBoxCollision(bound, point) {
        return bound.x1 < point.x && bound.x2 > point.x && bound.y1 < point.y && bound.y2 > point.y;
      },
      addEvent: function addEvent(el, type, handler, capture) {
        type = type.split(' ');
        for (var i = 0; i < type.length; i++) {
          if (el.addEventListener) {
            el.addEventListener(type[i], handler, capture);
          } else if (el.attachEvent) {
            el.attachEvent('on' + type[i], handler);
          }
        }
      },
      removeEvent: function removeEvent(el, type, handler) {
        type = type.split(' ');
        for (var i = 0; i < type.length; i++) {
          if (el.addEventListener) {
            el.removeEventListener(type[i], handler);
          } else if (el.detachEvent) {
            el.detachEvent('on' + type[i], handler);
          }
        }
      },
      triggerEvent: function triggerEvent(el, type) {
        var evt;
        if (JogDial.Doc.createEvent) {
          evt = JogDial.Doc.createEvent("HTMLEvents");
          evt.initEvent(type, true, true);
          el.dispatchEvent(evt);
        } else {
          evt = JogDial.Doc.createEventObject();
          evt.target = {};
          JogDial.utils.extend(evt.target, el);
          el.fireEvent('on' + type, evt);
        }
      },
      convertClockToUnit: function convertClockToUnit(n) {
        return n % 360 - 90;
      },
      convertUnitToClock: function convertUnitToClock(n) {
        return n >= -180 && n < -90 ? 450 + n : 90 + n;
      }
    };
    JogDial.Ready = true;
  }
  ;
  JogDial.Instance = function (el, opt) {
    if (el.getAttribute('_jogDial_')) {
      window.alert('Please Check your code:\njogDial can not be initialized twice in a same element.');
      return false;
    }
    setConstants();
    setInstance(this, el, opt);
    setStage(this);
    setEvents(this);
    angleTo(this, JogDial.utils.convertClockToUnit(this.opt.degreeStartAt));
    return this;
  };
  JogDial.Instance.prototype = {
    on: function onEvent(type, listener) {
      JogDial.utils.addEvent(this.knob, type, listener, false);
      return this;
    },
    off: function onEvent(type, listener) {
      JogDial.utils.removeEvent(this.knob, type, listener);
      return this;
    },
    trigger: function triggerEvent(type, data) {
      switch (type) {
        case 'angle':
          angleTo(this, data);
          break;
        default:
          window.alert('Please Check your code:\njogDial does not have triggering event [' + type + ']');
          break;
      }
      return this;
    },
    angle: function angle(data) {
      angleTo(this, JogDial.utils.convertClockToUnit(data));
    }
  };
  function setInstance(self, el, opt) {
    self.base = el;
    self.base.setAttribute('_JogDial_', true);
    self.opt = JogDial.utils.extend(JogDial.utils.extend({}, JogDial.Defaults), opt);
    self.info = {} || self;
    self.info.now = JogDial.utils.extend({}, JogDial.DegInfo);
    self.info.old = JogDial.utils.extend({}, JogDial.DegInfo);
    self.info.snapshot = JogDial.utils.extend({}, self.info);
    self.info.snapshot.direction = null;
  }
  ;
  function setStage(self) {
    var item = {},
      BId = self.base.getAttribute("id"),
      BW = self.base.clientWidth,
      BH = self.base.clientHeight,
      opt = self.opt,
      K = item.knob = document.createElement('div'),
      W = item.wheel = document.createElement('div'),
      KS = K.style,
      WS = W.style,
      KRad,
      WRad,
      WMargnLT,
      WMargnTP;
    if (JogDial.utils.getComputedStyle(self.base, 'position') === 'static') {
      self.base.style.position = 'relative';
    }
    self.base.appendChild(K);
    self.base.appendChild(W);
    JogDial.utils.extend(self, item);
    KS.position = WS.position = 'absolute';
    KS.width = KS.height = opt.knobSize;
    WS.width = WS.height = opt.wheelSize;
    KRad = K.clientWidth / 2;
    WRad = W.clientWidth / 2;
    K.setAttribute('id', BId + '_knob');
    KS.margin = -KRad + 'px 0 0 ' + -KRad + 'px';
    KS.zIndex = opt.zIndex;
    W.setAttribute('id', BId + '_wheel');
    WMargnLT = (BW - W.clientWidth) / 2;
    WMargnTP = (BH - W.clientHeight) / 2;
    WS.left = WS.top = 0;
    WS.margin = WMargnTP + 'px 0 0 ' + WMargnLT + 'px';
    WS.zIndex = opt.zIndex;
    self.radius = WRad - KRad;
    self.center = {
      x: WRad + WMargnLT,
      y: WRad + WMargnTP
    };
    if (opt.debug) setDebug(self);
  }
  ;
  function setDebug(self) {
    var KS = self.knob.style;
    var WS = self.wheel.style;
    KS.backgroundColor = '#00F';
    WS.backgroundColor = '#0F0';
    KS.opacity = WS.opacity = .4;
    KS.filter = WS.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)';
    KS.webkitBorderRadius = WS.webkitBorderRadius = "50%";
    KS.borderRadius = WS.borderRadius = "50%";
  }
  ;
  function setEvents(self) {
    if (JogDial.PointerEvent) {
      JogDial.utils.extend(JogDial.DomEvent, {
        MOUSE_DOWN: 'pointerdown MSPointerDown',
        MOUSE_MOVE: 'pointermove MSPointerMove',
        MOUSE_OUT: 'pointerout MSPointerOut',
        MOUSE_UP: 'pointerup pointercancel MSPointerUp MSPointerCancel'
      });
    } else if (JogDial.MobileEvent) {
      JogDial.utils.extend(JogDial.DomEvent, {
        MOUSE_DOWN: 'touchstart',
        MOUSE_MOVE: 'touchmove',
        MOUSE_OUT: 'touchleave',
        MOUSE_UP: 'touchend'
      });
    }
    var opt = self.opt,
      info = self.info,
      K = self.knob,
      W = self.wheel;
    self.pressed = false;
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_DOWN, mouseDownEvent, false);
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_MOVE, mouseDragEvent, false);
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_UP, mouseUpEvent, false);
    JogDial.utils.addEvent(W, JogDial.DomEvent.MOUSE_OUT, mouseUpEvent, false);
    function mouseDownEvent(e) {
      switch (opt.touchMode) {
        case 'knob':
        default:
          self.pressed = JogDial.utils.checkBoxCollision({
            x1: K.offsetLeft - W.offsetLeft,
            y1: K.offsetTop - W.offsetTop,
            x2: K.offsetLeft - W.offsetLeft + K.clientWidth,
            y2: K.offsetTop - W.offsetTop + K.clientHeight
          }, JogDial.utils.getCoordinates(e));
          break;
        case 'wheel':
          self.pressed = true;
          mouseDragEvent(e);
          break;
      }
      if (self.pressed) JogDial.utils.triggerEvent(self.knob, JogDial.CustomEvent.MOUSE_DOWN);
    }
    ;
    function mouseDragEvent(e) {
      if (self.pressed) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var offset = JogDial.utils.getCoordinates(e),
          _x = offset.x - self.center.x + W.offsetLeft,
          _y = offset.y - self.center.y + W.offsetTop,
          radian = Math.atan2(_y, _x) * JogDial.ToDeg,
          quadrant = JogDial.utils.getQuadrant(_x, _y),
          degree = JogDial.utils.convertUnitToClock(radian),
          rotation;
        info.now.rotation = JogDial.utils.getRotation(self, quadrant == undefined ? info.old.quadrant : quadrant, degree);
        rotation = info.now.rotation;
        if (opt.maxDegree != null && opt.maxDegree <= rotation) {
          if (info.snapshot.direction == null) {
            info.snapshot.direction = 'right';
            info.snapshot.now = JogDial.utils.extend({}, info.now);
            info.snapshot.old = JogDial.utils.extend({}, info.old);
          }
          rotation = opt.maxDegree;
          radian = JogDial.utils.convertClockToUnit(rotation);
          degree = JogDial.utils.convertUnitToClock(radian);
        } else if (opt.minDegree != null && opt.minDegree >= rotation) {
          if (info.snapshot.direction == null) {
            info.snapshot.direction = 'left';
            info.snapshot.now = JogDial.utils.extend({}, info.now);
            info.snapshot.old = JogDial.utils.extend({}, info.old);
          }
          rotation = opt.minDegree;
          radian = JogDial.utils.convertClockToUnit(rotation);
          degree = JogDial.utils.convertUnitToClock(radian);
        } else if (info.snapshot.direction != null) {
          info.snapshot.direction = null;
        }
        JogDial.utils.extend(self.knob, {
          rotation: rotation,
          degree: degree
        });
        angleTo(self, radian);
      }
    }
    ;
    function mouseUpEvent() {
      if (self.pressed) {
        self.pressed = false;
        if (self.info.snapshot.direction != null) {
          self.info.now = JogDial.utils.extend({}, info.snapshot.now);
          self.info.old = JogDial.utils.extend({}, info.snapshot.old);
          self.info.snapshot.direction = null;
        }
        JogDial.utils.triggerEvent(self.knob, JogDial.CustomEvent.MOUSE_UP);
      }
    }
    ;
  }
  ;
  function angleTo(self, radian) {
    radian *= JogDial.ToRad;
    var _x = Math.cos(radian) * self.radius + self.center.x,
      _y = Math.sin(radian) * self.radius + self.center.y,
      quadrant = JogDial.utils.getQuadrant(_x, _y),
      degree = JogDial.utils.convertUnitToClock(radian);
    self.knob.style.left = _x + 'px';
    self.knob.style.top = _y + 'px';
    if (self.knob.rotation == undefined) {
      JogDial.utils.extend(self.knob, {
        rotation: self.opt.degreeStartAt,
        degree: JogDial.utils.convertUnitToClock(radian)
      });
    }
    JogDial.utils.triggerEvent(self.knob, JogDial.CustomEvent.MOUSE_MOVE);
  }
  ;
  if (typeof define === 'function' && __webpack_require__.amdO) {
    define(function () {
      return JogDial;
    });
  } else if ((typeof exports === "undefined" ? "undefined" : (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(exports)) === 'object') {
    module.exports = JogDial;
  } else {
    window.JogDial = JogDial;
  }
})(window);

/***/ })

}]);