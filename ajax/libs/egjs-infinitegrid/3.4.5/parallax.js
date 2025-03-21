/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/infinitegrid project is licensed under the MIT license
 * 
 * @egjs/infinitegrid JavaScript library
 * https://github.com/naver/egjs-infinitegrid
 * 
 * @version 3.4.5
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Parallax"] = factory();
	else
		root["eg"] = root["eg"] || {}, root["eg"]["Parallax"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TRANSITION_END = exports.TRANSITION = exports.TRANSFORM = exports.DEFENSE_BROWSER = exports.WEBKIT_VERSION = exports.PROCESSING = exports.LOADING_PREPEND = exports.LOADING_APPEND = exports.IDLE = exports.ALIGN = exports.isMobile = exports.agent = exports.DEFAULT_OPTIONS = exports.GROUPKEY_ATT = exports.DUMMY_POSITION = exports.SINGLE = exports.MULTI = exports.NO_TRUSTED = exports.TRUSTED = exports.NO_CACHE = exports.CACHE = exports.HORIZONTAL = exports.VERTICAL = exports.PREPEND = exports.APPEND = exports.TRANSITION_NAME = exports.IGNORE_CLASSNAME = exports.CONTAINER_CLASSNAME = exports.IS_ANDROID2 = exports.IS_IOS = exports.IS_IE = exports.SUPPORT_PASSIVE = exports.SUPPORT_ADDEVENTLISTENER = exports.SUPPORT_COMPUTEDSTYLE = void 0;

var _browser = __webpack_require__(1);

var ua = _browser.window.navigator.userAgent;
var SUPPORT_COMPUTEDSTYLE = !!("getComputedStyle" in _browser.window);
exports.SUPPORT_COMPUTEDSTYLE = SUPPORT_COMPUTEDSTYLE;
var SUPPORT_ADDEVENTLISTENER = !!("addEventListener" in _browser.document);
exports.SUPPORT_ADDEVENTLISTENER = SUPPORT_ADDEVENTLISTENER;

var SUPPORT_PASSIVE = function () {
  var supportsPassiveOption = false;

  try {
    if (SUPPORT_ADDEVENTLISTENER && Object.defineProperty) {
      _browser.document.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    }
  } catch (e) {}

  return supportsPassiveOption;
}();

exports.SUPPORT_PASSIVE = SUPPORT_PASSIVE;
var IS_IE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
exports.IS_IE = IS_IE;
var IS_IOS = /iPhone|iPad/.test(ua);
exports.IS_IOS = IS_IOS;
var IS_ANDROID2 = /Android 2\./.test(ua);
exports.IS_ANDROID2 = IS_ANDROID2;
var CONTAINER_CLASSNAME = "_eg-infinitegrid-container_";
exports.CONTAINER_CLASSNAME = CONTAINER_CLASSNAME;
var IGNORE_CLASSNAME = "_eg-infinitegrid-ignore_";
exports.IGNORE_CLASSNAME = IGNORE_CLASSNAME;
var TRANSITION_NAME = "_INFINITEGRID_TRANSITION";
exports.TRANSITION_NAME = TRANSITION_NAME;
var APPEND = true;
exports.APPEND = APPEND;
var PREPEND = false;
exports.PREPEND = PREPEND;
var VERTICAL = "vertical";
exports.VERTICAL = VERTICAL;
var HORIZONTAL = "horizontal";
exports.HORIZONTAL = HORIZONTAL;
var CACHE = true;
exports.CACHE = CACHE;
var NO_CACHE = false;
exports.NO_CACHE = NO_CACHE;
var TRUSTED = true;
exports.TRUSTED = TRUSTED;
var NO_TRUSTED = false;
exports.NO_TRUSTED = NO_TRUSTED;
var MULTI = true;
exports.MULTI = MULTI;
var SINGLE = false;
exports.SINGLE = SINGLE;
var DUMMY_POSITION = -100000;
exports.DUMMY_POSITION = DUMMY_POSITION;
var GROUPKEY_ATT = "data-groupkey";
exports.GROUPKEY_ATT = GROUPKEY_ATT;
var DEFAULT_OPTIONS = {
  horizontal: false,
  margin: 0
};
exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
var agent = ua.toLowerCase();
exports.agent = agent;
var isMobile = /mobi|ios|android/.test(agent);
exports.isMobile = isMobile;
var ALIGN = {
  START: "start",
  CENTER: "center",
  END: "end",
  JUSTIFY: "justify"
};
exports.ALIGN = ALIGN;
var IDLE = 0;
exports.IDLE = IDLE;
var LOADING_APPEND = 1;
exports.LOADING_APPEND = LOADING_APPEND;
var LOADING_PREPEND = 2;
exports.LOADING_PREPEND = LOADING_PREPEND;
var PROCESSING = 4;
exports.PROCESSING = PROCESSING;
var webkit = /applewebkit\/([\d|.]*)/g.exec(agent);
var WEBKIT_VERSION = webkit && parseInt(webkit[1], 10) || 0;
exports.WEBKIT_VERSION = WEBKIT_VERSION;
var DEFENSE_BROWSER = WEBKIT_VERSION && WEBKIT_VERSION < 537;
exports.DEFENSE_BROWSER = DEFENSE_BROWSER;

var _ref = function () {
  var properties = {
    transitionend: "",
    webkitTransitionEnd: "-webkit-",
    oTransitionEnd: "-o-",
    mozTransitionEnd: "-moz-"
  };

  for (var property in properties) {
    var prefix = properties[property];

    if ("on" + property.toLowerCase() in _browser.window) {
      return [prefix + "transform", prefix + "transition", property];
    }
  }

  return [];
}(),
    TRANSFORM = _ref[0],
    TRANSITION = _ref[1],
    TRANSITION_END = _ref[2];

exports.TRANSITION_END = TRANSITION_END;
exports.TRANSITION = TRANSITION;
exports.TRANSFORM = TRANSFORM;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.document = exports.window = void 0;

/* eslint-disable no-new-func, no-nested-ternary */
if (typeof window === "undefined") {
  global.window = {
    document: {},
    navigator: {
      userAgent: ""
    }
  };
}

var win = window;
/* eslint-enable no-new-func, no-nested-ternary */

exports.window = win;
var document = win.document;
exports.document = document;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(4);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var style = {
  "vertical": {
    position: "top",
    size: "height",
    cammelSize: "Height",
    coordinate: "Y"
  },
  "horizontal": {
    position: "left",
    size: "width",
    cammelSize: "Width",
    coordinate: "X"
  }
};
var START = _consts.ALIGN.START,
    CENTER = _consts.ALIGN.CENTER;

var TRANSFORM = function () {
  var bodyStyle = (document.head || document.getElementsByTagName("head")[0]).style;
  var target = ["transform", "webkitTransform", "msTransform", "mozTransform"];

  for (var i = 0, len = target.length; i < len; i++) {
    if (target[i] in bodyStyle) {
      return target[i];
    }
  }

  return "";
}();
/**
 * @classdesc Parallax is a displacement or difference in the apparent position of an object viewed along two different lines of sight. You can apply parallax by scrolling the image and speed of the item.
 * @ko Parallax는 서로 다른 두 개의 시선에서 바라본 물체의 외관상 위치의 변위 또는 차이입니다. 스크롤에 따라 이미지와 아이템의 속도를 차이를 줌으로써 parallax을 적용할 수 있습니다.
 * @class eg.Parallax
 * @param {Element|String} [root=window] Scrolling target. If you scroll in the body, set window. 스크롤하는 대상. 만약 body에서 스크롤하면 window로 설정한다.
 * @param {Object} [options] The option object of eg.Parallax module <ko>eg.Parallax 모듈의 옵션 객체</ko>
 * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (false: vertical, true: horizontal) <ko>스크롤 이동 방향 (false: 세로방향, true: 가로방향)</ko>
 * @param {Element|String} [options.container=null] Container wrapping items. If root and container have no gaps, do not set option. <ko> 아이템들을 감싸고 있는 컨테이너. 만약 root와 container간의 차이가 없으면, 옵션을 설정하지 않아도 된다.</ko>
 * @param {String} [options.selector="img"] The selector of the image to apply the parallax in the item <ko> 아이템안에 있는 parallax를 적용할 이미지의 selector </ko>
 * @param {Boolean} [options.strength=1] Dimensions that indicate the sensitivity of parallax. The higher the strength, the faster.
 * @param {Boolean} [options.center=0] The middle point of parallax. The top is 1 and the bottom is -1. <ko> parallax가 가운데로 오는 점. 상단이 1이고 하단이 -1이다. </ko>
 * @param {Boolean} [options.range=[-1, 1]] Range to apply the parallax. The top is 1 and the bottom is -1. <ko> parallax가 적용되는 범위, 상단이 1이고 하단이 -1이다. </ko>
 * @param {Boolean} [options.align="start"] The alignment of the image in the item. ("start" : top or left, "center": middle) <ko> 아이템안의 이미지의 정렬 </ko>
 * @example
```
<script>
// isOverflowScroll: false
var parallax = new eg.Parallax(window, {
	container: ".container",
	selector: "img.parallax",
	strength: 0.8,
	center: 0,
	range: [-1, 1],
	align: "center",
	horizontal: true,
});

// isOverflowScroll: ture
var parallax = new eg.Parallax(".container", {
	selector: "img.parallax",
	strength: 0.8,
	center: 0,
	range: [-1, 1],
	align: "center",
	horizontal: true,
});

// item interface
var item = {
	// original size
	size: {
		width: 100,
		height: 100,
	},
	// view size
	rect: {
		top: 100,
		left: 100,
		width: 100,
		height: 100,
	}
};
</script>
```
 **/


var Parallax =
/*#__PURE__*/
function () {
  function Parallax(root, options) {
    if (root === void 0) {
      root = window;
    }

    if (options === void 0) {
      options = {};
    }

    this.options = _extends({
      container: null,
      selector: "img",
      strength: 1,
      center: 0,
      range: [-1, 1],
      align: START,
      horizontal: false
    }, options);
    this._root = (0, _utils.$)(root);
    this._container = this.options.container && (0, _utils.$)(this.options.container);
    this._rootSize = 0;
    this._containerPosition = 0;
    this._style = style[this.options.horizontal ? "horizontal" : "vertical"];
    this.resize();
  }

  var _proto = Parallax.prototype;

  _proto._checkParallaxItem = function _checkParallaxItem(element) {
    if (!element) {
      return;
    }

    var selector = this.options.selector;

    if (!element.__IMAGE__) {
      var img = element.querySelector(selector);
      element.__IMAGE__ = img || -1;

      if (element.__IMAGE__ === -1) {
        return;
      }

      element.__BOX__ = img.parentNode;
    }

    if (element.__IMAGE__ === -1) {
      return;
    }

    var sizeName = this._style.cammelSize;
    element.__IMAGE__.__SIZE__ = element.__IMAGE__["offset" + sizeName];
    element.__BOX__.__SIZE__ = element.__BOX__["offset" + sizeName];
  };
  /**
   * As the browser is resized, the gaps between the root and the container and the size of the items are updated.
   * @ko 브라우저의 크기가 변경됨으로 써 root와 container의 간격과 아이템들의 크기를 갱신한다.
   * @method eg.Parallax#resize
   * @param {Array} [items = []] Items to apply parallax. It does not apply if it is not in visible range. <ko>parallax를 적용할 아이템들. 가시거리에 존재하지 않으면 적용이 안된다.</ko>
   * @return {eg.Parallax} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
  ```js
  window.addEventListener("resize", function (e) {
  parallax.resize(items);
  });
  ```
   */


  _proto.resize = function resize(items) {
    var _this = this;

    if (items === void 0) {
      items = [];
    }

    var root = this._root;
    var container = this._container;
    var positionName = this._style.position;
    var sizeName = this._style.cammelSize;

    if (!container || root === container) {
      this._containerPosition = 0;
    } else {
      var rootRect = ((0, _utils.isWindow)(root) ? document.body : root).getBoundingClientRect();
      var containertRect = container.getBoundingClientRect();
      this._containerPosition = containertRect[positionName] - rootRect[positionName];
    }

    this._rootSize = (0, _utils.isWindow)(root) ? window["inner" + sizeName] || document.documentElement["client" + sizeName] : root["client" + sizeName];

    if (_consts.isMobile & (0, _utils.isWindow)(root)) {
      var bodyWidth = document.body.offsetWidth || document.documentElement.offsetWidth;
      var windowWidth = window.innerWidth;
      this._rootSize = this._rootSize / (bodyWidth / windowWidth);
    }

    items.forEach(function (item) {
      _this._checkParallaxItem(item.el);
    });
    return this;
  };
  /**
   * Scrolls the image in the item by a parallax.
   * @ko 스크롤하면 아이템안의 이미지를 시차적용시킨다.
   * @method eg.Parallax#refresh
   * @param {Array} [items = []] Items to apply parallax. It does not apply if it is not in visible range. <ko>parallax를 적용할 아이템들. 가시거리에 존재하지 않으면 적용이 안된다.</ko>
   * @param {Number} [scrollPositionStart = 0] The scroll position.
   * @return {eg.Parallax} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   * @example
  ```js
  document.body.addEventListener("scroll", function (e) {
  parallax.refresh(items, e.scrollTop);
  });
  ```
   */


  _proto.refresh = function refresh(items, scrollPositionStart) {
    var _this2 = this;

    if (items === void 0) {
      items = [];
    }

    if (scrollPositionStart === void 0) {
      scrollPositionStart = 0;
    }

    var styleNames = this._style;
    var positionName = styleNames.position;
    var coordinateName = styleNames.coordinate;
    var sizeName = styleNames.size;
    var options = this.options;
    var strength = options.strength,
        center = options.center,
        range = options.range,
        align = options.align;
    var rootSize = this._rootSize;
    var scrollPositionEnd = scrollPositionStart + rootSize;
    var containerPosition = this._containerPosition;
    items.forEach(function (item) {
      if (!item.rect || !item.size || !item.el) {
        return;
      }

      var position = containerPosition + item.rect[positionName];
      var itemSize = item.rect[sizeName] || item.size[sizeName]; // check item is in container.

      if (scrollPositionStart > position + itemSize || scrollPositionEnd < position) {
        return;
      }

      var el = item.el;

      if (!el.__IMAGE__) {
        _this2._checkParallaxItem(el);
      }

      if (el.__IMAGE__ === -1) {
        return;
      }

      var imageElement = el.__IMAGE__;
      var boxElement = el.__BOX__;
      var boxSize = boxElement.__SIZE__;
      var imageSize = imageElement.__SIZE__; // no parallax

      if (boxSize >= imageSize) {
        // remove transform style
        imageElement.style[TRANSFORM] = "";
        return;
      } // if area's position is center, ratio is 0.
      // if area is hidden at the top, ratio is 1.
      // if area is hidden at the bottom, ratio is -1.


      var imagePosition = position + boxSize / 2;
      var ratio = (scrollPositionStart + rootSize / 2 - (rootSize + boxSize) / 2 * center - imagePosition) / (rootSize + boxSize) * 2 * strength; // if ratio is out of the range of -1 and 1, show empty space.

      ratio = Math.max(Math.min(ratio, range[1]), range[0]); // dist is the position when thumnail's image is centered.

      var dist = (boxSize - imageSize) / 2;
      var translate = dist * (1 - ratio);

      if (align === CENTER) {
        translate -= dist;
      }

      imageElement.__TRANSLATE__ = translate;
      imageElement.__RATIO__ = ratio;
      imageElement.style[TRANSFORM] = "translate" + coordinateName + "(" + translate + "px)";
    });
    return this;
  };

  return Parallax;
}();

var _default = Parallax;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toArray = toArray;
exports.matchHTML = matchHTML;
exports.$ = $;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.addOnceEvent = addOnceEvent;
exports.scroll = scroll;
exports.scrollTo = scrollTo;
exports.scrollBy = scrollBy;
exports.getStyles = getStyles;
exports.innerWidth = innerWidth;
exports.innerHeight = innerHeight;
exports.outerWidth = outerWidth;
exports.outerHeight = outerHeight;
exports.getSize = getSize;
exports.getStyleNames = getStyleNames;
exports.assignOptions = assignOptions;
exports.toZeroArray = toZeroArray;
exports.cloneItems = cloneItems;
exports.isWindow = isWindow;
exports.fill = fill;
exports.isUndefined = isUndefined;
exports.STYLE = void 0;

var _browser = __webpack_require__(1);

var _consts = __webpack_require__(0);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function toArray(nodes) {
  // SCRIPT5014 in IE8
  var array = [];

  if (nodes) {
    for (var i = 0, len = nodes.length; i < len; i++) {
      array.push(nodes[i]);
    }
  }

  return array;
}

function matchHTML(html) {
  return html.match(/^<([A-z]+)\s*([^>]*)>/);
}
/**
 * Select or create element
 * @param {String|HTMLElement|jQuery} param
 *  when string given is as HTML tag, then create element
 *  otherwise it returns selected elements
 * @param {Boolean} multi
 * @returns {HTMLElement}
 */


function $(param, multi) {
  if (multi === void 0) {
    multi = false;
  }

  var el;

  if (typeof param === "string") {
    // String (HTML, Selector)
    // check if string is HTML tag format
    var match = matchHTML(param); // creating element

    if (match) {
      // HTML
      var dummy = _browser.document.createElement("div");

      dummy.innerHTML = param;
      el = dummy.childNodes;
    } else {
      // Selector
      el = _browser.document.querySelectorAll(param);
    }

    if (multi) {
      el = toArray(el);
    } else {
      el = el && el.length > 0 && el[0] || undefined;
    }
  } else if (param === _browser.window) {
    // window
    el = param;
  } else if (param.nodeName && (param.nodeType === 1 || param.nodeType === 9)) {
    // HTMLElement, Document
    el = param;
  } else if (typeof _browser.window.jQuery === "function" && param instanceof _browser.window.jQuery || param.constructor.prototype.jquery) {
    // jQuery
    el = $(multi ? param.toArray() : param.get(0), multi);
  } else if (Array.isArray(param)) {
    el = param.map(function (v) {
      return $(v);
    });

    if (!multi) {
      el = el.length >= 1 ? el[0] : undefined;
    }
  }

  return el;
}

function addEvent(element, type, handler, eventListenerOptions) {
  if (_consts.SUPPORT_ADDEVENTLISTENER) {
    var options = eventListenerOptions || false;

    if (typeof eventListenerOptions === "object") {
      options = _consts.SUPPORT_PASSIVE ? eventListenerOptions : false;
    }

    element.addEventListener(type, handler, options);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}

function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
}

function addOnceEvent(element, type, handler, eventListenerOptions) {
  var callback = function callback(e) {
    removeEvent(element, type, callback);
    handler(e);
  };

  addEvent(element, type, callback, eventListenerOptions);
}

function scroll(el, horizontal) {
  if (horizontal === void 0) {
    horizontal = false;
  }

  var prop = "scroll" + (horizontal ? "Left" : "Top");

  if (el === _browser.window) {
    return _browser.window[horizontal ? "pageXOffset" : "pageYOffset"] || _browser.document.body[prop] || _browser.document.documentElement[prop];
  } else {
    return el[prop];
  }
}

function scrollTo(el, x, y) {
  if (el === _browser.window) {
    el.scroll(x, y);
  } else {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
}

function scrollBy(el, x, y) {
  if (el === _browser.window) {
    el.scrollBy(x, y);
  } else {
    el.scrollLeft += x;
    el.scrollTop += y;
  }
}

function getStyles(el) {
  return (_consts.SUPPORT_COMPUTEDSTYLE ? _browser.window.getComputedStyle(el) : el.currentStyle) || {};
}

function _getSize(el, name, isOffset) {
  if (el === _browser.window) {
    // WINDOW
    return _browser.window["inner" + name] || _browser.document.body["client" + name];
  } else if (el.nodeType === 9) {
    // DOCUMENT_NODE
    var doc = el.documentElement;
    return Math.max(el.body["scroll" + name], doc["scroll" + name], el.body["offset" + name], doc["offset" + name], doc["client" + name]);
  } else {
    // NODE
    var size = 0;

    if (isOffset) {
      var clientRect = el.getBoundingClientRect();
      size = name === "Width" ? clientRect.right - clientRect.left : clientRect.bottom - clientRect.top;
    } else {
      size = el["client" + name] || el["offset" + name];
    }

    return parseFloat(size || getStyles(el)[name.toLowerCase()]) || 0;
  }
}

function innerWidth(el) {
  return _getSize(el, "Width", false);
}

function innerHeight(el) {
  return _getSize(el, "Height", false);
}

function outerWidth(el) {
  return _getSize(el, "Width", true);
}

function outerHeight(el) {
  return _getSize(el, "Height", true);
}

function getSize(el) {
  return {
    width: outerWidth(el),
    height: outerHeight(el)
  };
}

var STYLE = {
  vertical: {
    pos1: "top",
    endPos1: "bottom",
    size1: "height",
    pos2: "left",
    endPos2: "right",
    size2: "width"
  },
  horizontal: {
    pos1: "left",
    endPos1: "right",
    size1: "width",
    pos2: "top",
    endPos2: "bottom",
    size2: "height"
  }
};
exports.STYLE = STYLE;

function getStyleNames(isHorizontal) {
  return STYLE[isHorizontal ? _consts.HORIZONTAL : _consts.VERTICAL];
}

function assignOptions(defaultOptions, options) {
  return _extends({}, _consts.DEFAULT_OPTIONS, defaultOptions, options);
}

function toZeroArray(outline) {
  if (!outline || !outline.length) {
    return [0];
  }

  return outline;
}

function cloneItems(items) {
  return items.map(function (item) {
    return _extends({}, item);
  });
}

function isWindow(el) {
  return el === _browser.window;
}

function fill(arr, value) {
  var length = arr.length;

  for (var i = length - 1; i >= 0; --i) {
    arr[i] = value;
  }

  return arr;
}

function isUndefined(target) {
  return typeof target === "undefined";
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=parallax.js.map