(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vant", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vant"] = factory(require("vue"));
	else
		root["vant"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAndroid; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancel; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _index__WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
}
function cancel(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(this,function(){return function(t){function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}var e={};return i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/dist/",i(i.s=6)}([function(t,i){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],i=0;i<this.length;i++){var e=this[i];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(i,e){"string"==typeof i&&(i=[[null,i,""]]);for(var s={},o=0;o<this.length;o++){var n=this[o][0];"number"==typeof n&&(s[n]=!0)}for(o=0;o<i.length;o++){var r=i[o];"number"==typeof r[0]&&s[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),t.push(r))}},t}},function(t,i){t.exports=function(t,i,e,s,o){var n,r=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(n=t,r=t.default);var a="function"==typeof r?r.options:r;i&&(a.render=i.render,a.staticRenderFns=i.staticRenderFns),s&&(a._scopeId=s);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},a._ssrRegister=l):e&&(l=e),l){var c=a.functional,p=c?a.render:a.beforeCreate;c?a.render=function(t,i){return l.call(i),p(t,i)}:a.beforeCreate=p?[].concat(p,l):[l]}return{esModule:n,exports:r,options:a}}},function(t,i,e){function s(t){for(var i=0;i<t.length;i++){var e=t[i],s=c[e.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](e.parts[o]);for(;o<e.parts.length;o++)s.parts.push(n(e.parts[o]));s.parts.length>e.parts.length&&(s.parts.length=e.parts.length)}else{for(var r=[],o=0;o<e.parts.length;o++)r.push(n(e.parts[o]));c[e.id]={id:e.id,refs:1,parts:r}}}}function o(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function n(t){var i,e,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(f)return g;s.parentNode.removeChild(s)}if(m){var n=d++;s=u||(u=o()),i=r.bind(null,s,n,!1),e=r.bind(null,s,n,!0)}else s=o(),i=h.bind(null,s),e=function(){s.parentNode.removeChild(s)};return i(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;i(t=s)}else e()}}function r(t,i,e,s){var o=e?"":s.css;if(t.styleSheet)t.styleSheet.cssText=v(i,o);else{var n=document.createTextNode(o),r=t.childNodes;r[i]&&t.removeChild(r[i]),r.length?t.insertBefore(n,r[i]):t.appendChild(n)}}function h(t,i){var e=i.css,s=i.media,o=i.sourceMap;if(s&&t.setAttribute("media",s),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=e(15),c={},p=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,f=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,i,e){f=e;var o=l(t,i);return s(o),function(i){for(var e=[],n=0;n<o.length;n++){var r=o[n],h=c[r.id];h.refs--,e.push(h)}i?(o=l(t,i),s(o)):o=[];for(var n=0;n<e.length;n++){var h=e[n];if(0===h.refs){for(var a=0;a<h.parts.length;a++)h.parts[a]();delete c[h.id]}}}};var v=function(){var t=[];return function(i,e){return t[i]=e,t.filter(Boolean).join("\n")}}()},function(t,i,e){function s(t){e(14)}var o=e(1)(e(4),e(12),s,null,null);t.exports=o.exports},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(7),o=e(10),n=e.n(o);i.default={name:"vue-better-scroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},listenBeforeScroll:{type:Boolean,default:!1},direction:{type:String,default:"vertical"},scrollbar:{type:null,default:!1},pullDownRefresh:{type:null,default:!1},pullUpLoad:{type:null,default:!1},startY:{type:Number,default:0},refreshDelay:{type:Number,default:20},freeScroll:{type:Boolean,default:!1}},data:function(){return{beforePullDown:!0,isRebounding:!1,isPullingDown:!1,pulling:!1,isPullUpLoad:!1,pullUpDirty:!0,pullDownStyle:"",bubbleY:0,reboundPullDownTimer:null,afterPullDownTimer:null}},computed:{pullUpTxt:function(){var t=this.pullUpLoad&&this.pullUpLoad.txt&&this.pullUpLoad.txt.more||"加载更多",i=this.pullUpLoad&&this.pullUpLoad.txt&&this.pullUpLoad.txt.noMore||"没有更多数据了";return this.pullUpDirty?t:i},refreshTxt:function(){return this.pullDownRefresh&&this.pullDownRefresh.txt||"刷新成功"}},created:function(){this.pullDownInitTop=-50},mounted:function(){var t=this;this.$nextTick(function(){t.initScroll()})},methods:{initScroll:function(){var t=this;if(this.$refs.wrapper){var i={probeType:this.probeType,click:this.click,scrollY:this.freeScroll||"vertical"===this.direction,scrollX:this.freeScroll||"horizontal"===this.direction,scrollbar:this.scrollbar,pullDownRefresh:this.pullDownRefresh,pullUpLoad:this.pullUpLoad,startY:this.startY,freeScroll:this.freeScroll};this.scroll=new s.a(this.$refs.wrapper,i),this.listenScroll&&this.scroll.on("scroll",function(i){t.$emit("scroll",i)}),this.listenBeforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScrollStart")}),this.pullDownRefresh&&this._initPullDownRefresh(),this.pullUpLoad&&this._initPullUpLoad()}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},destroy:function(){this.scroll&&this.scroll.destroy()},forceUpdate:function(t){var i=this;this.$nextTick(function(){i.pullUpDirty=t,i.pullDownRefresh&&i.isPullingDown?(i.pulling=!1,i._reboundPullDown().then(function(){i._afterPullDown()})):i.pullUpLoad?(i.isPullUpLoad=!1,i.scroll.finishPullUp(),i.refresh()):i.refresh()})},_initPullDownRefresh:function(){var t=this;this.scroll.on("pullingDown",function(){t.beforePullDown=!1,t.isPullingDown=!0,t.pulling=!0,t.$emit("pullingDown")}),this.scroll.on("scroll",function(i){t.beforePullDown?(t.bubbleY=Math.max(0,i.y+t.pullDownInitTop),t.pullDownStyle="top:"+Math.min(i.y+t.pullDownInitTop,10)+"px"):t.bubbleY=0,t.isRebounding&&(t.pullDownStyle="top:"+(10-(t.pullDownRefresh.stop-i.y))+"px")})},_initPullUpLoad:function(){var t=this;this.scroll.on("pullingUp",function(){t.pullUpDirty&&(t.isPullUpLoad=!0,t.$emit("pullingUp"))})},_reboundPullDown:function(){var t=this,i=this.pullDownRefresh.stopTime,e=void 0===i?600:i;return new Promise(function(i){t.reboundPullDownTimer=setTimeout(function(){t.isRebounding=!0,t.isPullingDown=!1,t.scroll.finishPullUp(),t.scroll.finishPullDown(),i()},e)})},_afterPullDown:function(){var t=this;this.afterPullDownTimer=setTimeout(function(){t.pullDownStyle="top:"+t.pullDownInitTop+"px",t.beforePullDown=!0,t.isRebounding=!1,t.refresh()},this.scroll.options.bounceTime)}},destroyed:function(){this.scroll&&this.scroll.destroy(),this.scroll=null,this.reboundPullDownTimer&&clearTimeout(this.reboundPullDownTimer),this.reboundPullDownTimer=null,this.afterPullDownTimer&&clearTimeout(this.afterPullDownTimer),this.afterPullDownTimer=null},components:{Bubble:n.a}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:{y:{type:Number,default:0}},data:function(){return{width:50,height:80}},computed:{distance:function(){return Math.max(0,Math.min(this.y*this.ratio,this.maxDistance))},style:function(){return"width:"+this.width/this.ratio+"px;height:"+this.height/this.ratio+"px"}},created:function(){this.ratio=window.devicePixelRatio,this.width*=this.ratio,this.height*=this.ratio,this.initRadius=18*this.ratio,this.minHeadRadius=12*this.ratio,this.minTailRadius=5*this.ratio,this.initArrowRadius=10*this.ratio,this.minArrowRadius=6*this.ratio,this.arrowWidth=3*this.ratio,this.maxDistance=40*this.ratio,this.initCenterX=25*this.ratio,this.initCenterY=25*this.ratio,this.headCenter={x:this.initCenterX,y:this.initCenterY}},mounted:function(){this._draw()},methods:{_draw:function(){var t=this.$refs.bubble,i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),this._drawBubble(i),this._drawArrow(i)},_drawBubble:function(t){t.save(),t.beginPath();var i=this.distance/this.maxDistance,e=this.initRadius-(this.initRadius-this.minHeadRadius)*i;this.headCenter.y=this.initCenterY-(this.initRadius-this.minHeadRadius)*i,t.arc(this.headCenter.x,this.headCenter.y,e,0,Math.PI,!0);var s=this.initRadius-(this.initRadius-this.minTailRadius)*i,o={x:this.headCenter.x,y:this.headCenter.y+this.distance},n={x:o.x-s,y:o.y},r={x:n.x,y:n.y-this.distance/2};t.quadraticCurveTo(r.x,r.y,n.x,n.y),t.arc(o.x,o.y,s,Math.PI,0,!0);var h={x:this.headCenter.x+e,y:this.headCenter.y},a={x:o.x+s,y:h.y+this.distance/2};t.quadraticCurveTo(a.x,a.y,h.x,h.y),t.fillStyle="rgb(170,170,170)",t.fill(),t.strokeStyle="rgb(153,153,153)",t.stroke(),t.restore()},_drawArrow:function(t){t.save(),t.beginPath();var i=this.distance/this.maxDistance,e=this.initArrowRadius-(this.initArrowRadius-this.minArrowRadius)*i;t.arc(this.headCenter.x,this.headCenter.y,e-(this.arrowWidth-i),-Math.PI/2,0,!0),t.arc(this.headCenter.x,this.headCenter.y,e,0,3*Math.PI/2,!1),t.lineTo(this.headCenter.x,this.headCenter.y-e-this.arrowWidth/2+i),t.lineTo(this.headCenter.x+2*this.arrowWidth-2*i,this.headCenter.y-e+this.arrowWidth/2),t.lineTo(this.headCenter.x,this.headCenter.y-e+3*this.arrowWidth/2-i),t.fillStyle="rgb(255,255,255)",t.fill(),t.strokeStyle="rgb(170,170,170)",t.stroke(),t.restore()}},watch:{y:function(){this._draw()}}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(3),o=e.n(s);o.a.install=function(t){t.component(o.a.name,o.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o.a),i.default=o.a},function(t,i,e){"use strict";function s(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function o(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var n=e[o];for(var r in n)t[r]=n[r]}return t}function n(t){return void 0===t||null===t}function r(t){return!1!==E&&("standard"===E?"transitionEnd"===t?"transitionend":t:E+t.charAt(0).toUpperCase()+t.substr(1))}function h(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s})}function a(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s})}function l(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return{left:i,top:e}}function c(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function p(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}function u(t,i){var e=document.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)}function d(t){function i(){n=document.createEvent("Event"),n.initEvent(r,h,a),o(n,s)}var e=void 0;"mouseup"===t.type||"mousecancel"===t.type?e=t:"touchend"!==t.type&&"touchcancel"!==t.type||(e=t.changedTouches[0]);var s={};e&&(s.screenX=e.screenX||0,s.screenY=e.screenY||0,s.clientX=e.clientX||0,s.clientY=e.clientY||0);var n=void 0,r="click",h=!0,a=!0;if("undefined"!=typeof MouseEvent)try{n=new MouseEvent(r,o({bubbles:h,cancelable:a},s))}catch(t){i()}else i();n.forwardedTouchEvent=!0,n._constructed=!0,t.target.dispatchEvent(n)}function f(t,i){i.firstChild?g(t,i.firstChild):i.appendChild(t)}function g(t,i){i.parentNode.insertBefore(t,i)}function m(t,i){t.removeChild(i)}function v(t,i,e,s,o,n){var r=t-i,h=Math.abs(r)/e,a=n.deceleration,l=n.itemHeight,c=n.swipeBounceTime,p=n.wheel,u=n.swipeTime,d=u,f=p?4:15,g=t+h/a*(r<0?-1:1);return p&&l&&(g=Math.round(g/l)*l),g<s?(g=o?Math.max(s-o/4,s-o/f*h):s,d=c):g>0&&(g=o?Math.min(o/4,o/f*h):0,d=c),{destination:Math.round(g),duration:d}}function y(){}function w(t){console.error("[BScroll warn]: "+t)}function A(t,i){if(!t)throw new Error("[BScroll] "+i)}function b(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function x(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1,this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.x=0,this.y=0,i.interactive&&this._addDOMEvents()}function T(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||w("Can not resolve the wrapper DOM."),this.scroller=this.wrapper.children[0],this.scroller||w("The wrapper need at least one child element to be scroller."),this.scrollerStyle=this.scroller.style,this._init(t,i)}/*!
 * better-normal-scroll v1.9.0
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var D=function(){function t(t,i){var e=[],s=!0,o=!1,n=void 0;try{for(var r,h=t[Symbol.iterator]();!(s=(r=h.next()).done)&&(e.push(r.value),!i||e.length!==i);s=!0);}catch(t){o=!0,n=t}finally{try{!s&&h.return&&h.return()}finally{if(o)throw n}}return e}return function(i,e){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return t(i,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),M=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)},S="undefined"!=typeof window,P=S&&navigator.userAgent.toLowerCase(),C=P&&/wechatdevtools/.test(P),Y=P&&P.indexOf("android")>0,R=S&&document.createElement("div").style,E=function(){if(!S)return!1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==R[t[i]])return i;return!1}(),k=r("transform"),O=S&&r("perspective")in R,I=S&&("ontouchstart"in window||C),L=!1!==k,z=S&&r("transition")in R,W={transform:k,transitionTimingFunction:r("transitionTimingFunction"),transitionDuration:r("transitionDuration"),transitionProperty:r("transitionProperty"),transitionDelay:r("transitionDelay"),transformOrigin:r("transformOrigin"),transitionEnd:r("transitionEnd")},j=1,U={touchstart:j,touchmove:j,touchend:j,mousedown:2,mousemove:2,mouseup:2},X={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:800,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.001,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:I,disableTouch:!I,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,mouseWheel:!1,stopPropagation:!1},B={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}},H=function(){return S?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}:y}(),_=function(){return S?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}:y}(),Z=1,q=-1,N=1,G=-1,J=1,Q=3;x.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t)}},x.prototype.refresh=function(){this.transitionTime(),this._calculate(),this.updatePosition()},x.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[W.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t},0)}},x.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(t<0){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[W.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px"}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(s<0){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0}else if(s>this.maxPosX){this.transitionTime(500);var n=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=n+"px",s=this.maxPosX+this.indicatorWidth-n}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[W.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px"}},x.prototype.transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[W.transitionDuration]=t+"ms"},x.prototype.transitionTimingFunction=function(t){this.indicatorStyle[W.transitionTimingFunction]=t},x.prototype.destroy=function(){this._removeDOMEvents(),this.wrapper.parentNode.removeChild(this.wrapper)},x.prototype._start=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=s(),this._handleMoveEvents(h),this.scroller.trigger("beforeScrollStart")},x.prototype._move=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.moved||this.scroller.trigger("scrollStart"),this.moved=!0;var e=i.pageX-this.lastPointX;this.lastPointX=i.pageX;var s=i.pageY-this.lastPointY;this.lastPointY=i.pageY;var o=this.x+e,n=this.y+s;this._pos(o,n)},x.prototype._end=function(t){if(this.initiated){this.initiated=!1,t.preventDefault(),t.stopPropagation(),this._handleMoveEvents(a);var i=this.scroller.options.snap;if(i){var e=i.speed,s=i.easing,o=void 0===s?B.bounce:s,n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),r=e||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-n.x),1e3),Math.min(Math.abs(this.scroller.y-n.y),1e3)),300);this.scroller.x===n.x&&this.scroller.y===n.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=n,this.scroller.scrollTo(n.x,n.y,r,o))}this.moved&&this.scroller.trigger("scrollEnd",{x:this.scroller.x,y:this.scroller.y})}},x.prototype._pos=function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=Math.round(t/this.sizeRatioX),i=Math.round(i/this.sizeRatioY),this.scroller.scrollTo(t,i),this.scroller.trigger("scroll",{x:this.scroller.x,y:this.scroller.y})},x.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX}},x.prototype._addDOMEvents=function(){var t=h;this._handleDOMEvents(t)},x.prototype._removeDOMEvents=function(){var t=a;this._handleDOMEvents(t),this._handleMoveEvents(t)},x.prototype._handleMoveEvents=function(t){this.scroller.options.disableTouch||t(window,"touchmove",this),this.scroller.options.disableMouse||t(window,"mousemove",this)},x.prototype._handleDOMEvents=function(t){this.scroller.options.disableTouch||(t(this.indicator,"touchstart",this),t(window,"touchend",this)),this.scroller.options.disableMouse||(t(this.indicator,"mousedown",this),t(window,"mouseup",this))},function(t){t.prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable()},t.prototype._handleOptions=function(t){this.options=o({},X,t),this.translateZ=this.options.HWCompositing&&O?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&z,this.options.useTransform=this.options.useTransform&&L,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},t.prototype._addDOMEvents=function(){var t=h;this._handleDOMEvents(t)},t.prototype._removeDOMEvents=function(){var t=a;this._handleDOMEvents(t)},t.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),I&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,W.transitionEnd,this)},t.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel(),this.options.mouseWheel&&this._initMouseWheel()},t.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var t=this,i=!1;Object.defineProperty(this,"isInTransition",{get:function(){return i},set:function(e){i=e;for(var s=t.scroller.children.length?t.scroller.children:[t.scroller],o=i&&!t.pulling?"none":"auto",n=0;n<s.length;n++)s[n].style.pointerEvents=o}})}},t.prototype._handleAutoBlur=function(){this.on("beforeScrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()})},t.prototype._initDOMObserver=function(){var t=this;if("undefined"!=typeof MutationObserver){var i=void 0,e=new MutationObserver(function(e){if(!t._shouldNotRefresh()){for(var s=!1,o=!1,n=0;n<e.length;n++){var r=e[n];if("attributes"!==r.type){s=!0;break}if(r.target!==t.scroller){o=!0;break}}s?t.refresh():o&&(clearTimeout(i),i=setTimeout(function(){t._shouldNotRefresh()||t.refresh()},60))}}),s={attributes:!0,childList:!0,subtree:!0};e.observe(this.scroller,s),this.on("destroy",function(){e.disconnect()})}else this._checkDOMUpdate()},t.prototype._shouldNotRefresh=function(){var t=this.x>0||this.x<this.maxScrollX||this.y>0||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},t.prototype._checkDOMUpdate=function(){function t(){if(!this.destroyed){e=c(this.scroller);var t=e.width,n=e.height;s===t&&o===n||this.refresh(),s=t,o=n,i.call(this)}}function i(){var i=this;setTimeout(function(){t.call(i)},1e3)}var e=c(this.scroller),s=e.width,o=e.height;i.call(this)},t.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(p(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()));break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._onMouseWheel(t)}},t.prototype.refresh=function(){var t=c(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=c(this.scroller);this.scrollerWidth=i.width,this.scrollerHeight=i.height;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=l(this.wrapper),this.trigger("refresh"),this.resetPosition()},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1}}(T),function(t){t.prototype._start=function(t){var i=U[t.type];if((i===j||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!p(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=s(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart")}},t.prototype._move=function(t){if(this.enabled&&!this.destroyed&&U[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,o=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=o;var n=Math.abs(this.distX),r=Math.abs(this.distY),h=s();if(!(h-this.endTime>this.options.momentumLimitTime&&r<this.options.momentumLimitDistance&&n<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(n>r+this.options.directionLockThreshold?this.directionLocked="h":r>=n+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);o=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}e=this.hasHorizontalScroll?e:0,o=this.hasVerticalScroll?o:0,this.movingDirectionX=e>0?G:e<0?N:0,this.movingDirectionY=o>0?q:o<0?Z:0;var a=this.x+e,l=this.y+o;(a>0||a<this.maxScrollX)&&(a=this.options.bounce?this.x+e/3:a>0?0:this.maxScrollX),(l>0||l<this.maxScrollY)&&(l=this.options.bounce?this.y+o/3:l>0?0:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(a,l),h-this.startTime>this.options.momentumLimitTime&&(this.startTime=h,this.startX=this.x,this.startY=this.y,this.options.probeType===J&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>J&&this.trigger("scroll",{x:this.x,y:this.y});var c=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,p=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,u=this.pointX-c,d=this.pointY-p;(u>document.documentElement.clientWidth-this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||d>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},t.prototype._end=function(t){if(this.enabled&&!this.destroyed&&U[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!p(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.options.stopPropagation&&t.stopPropagation(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),o=i-this.absStartX,n=e-this.absStartY;if(this.directionX=o>0?G:o<0?N:0,this.directionY=n>0?q:n<0?Z:0,!this.options.pullDownRefresh||!this._checkPullDown()){if(this._checkClick(t))return void this.trigger("scrollCancel");if(!this.resetPosition(this.options.bounceTime,B.bounce)){this.scrollTo(i,e),this.endTime=s();var r=this.endTime-this.startTime,h=Math.abs(i-this.startX),a=Math.abs(e-this.startY);if(this._events.flick&&r<this.options.flickLimitTime&&h<this.options.flickLimitDistance&&a<this.options.flickLimitDistance)return void this.trigger("flick");var l=0;if(this.options.momentum&&r<this.options.momentumLimitTime&&(a>this.options.momentumLimitDistance||h>this.options.momentumLimitDistance)){var c=this.hasHorizontalScroll?v(this.x,this.startX,r,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:i,duration:0},u=this.hasVerticalScroll?v(this.y,this.startY,r,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:e,duration:0};i=c.destination,e=u.destination,l=Math.max(c.duration,u.duration),this.isInTransition=!0}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,l=this.options.wheel.adjustTime||400);var d=B.swipe;if(this.options.snap){var f=this._nearestSnap(i,e);this.currentPage=f,l=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-f.x),1e3),Math.min(Math.abs(e-f.y),1e3)),300),i=f.x,e=f.y,this.directionX=0,this.directionY=0,d=this.options.snap.easing||B.bounce}if(i!==this.x||e!==this.y)return(i>0||i<this.maxScrollX||e>0||e<this.maxScrollY)&&(d=B.swipeBounce),void this.scrollTo(i,e,l,d);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y})}}}},t.prototype._checkClick=function(t){var i=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,!this.moved){if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var e=Math.abs(Math.round(this.y/this.itemHeight)),s=Math.round((this.pointY+l(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[e+s]}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,B.swipe),!0}return!i&&(this.options.tap&&u(t,this.options.tap),this.options.click&&!p(t.target,this.options.preventDefaultException)&&d(t),!0)}return!1},t.prototype._resize=function(){var t=this;this.enabled&&(Y&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},t.prototype._startProbe=function(){function t(){var e=i.getComputedPosition();if(i.trigger("scroll",e),!i.isInTransition)return void i.trigger("scrollEnd",e);i.probeTimer=H(t)}_(this.probeTimer),this.probeTimer=H(t);var i=this},t.prototype._transitionProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";this.scrollerStyle[W.transitionProperty]=t},t.prototype._transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[W.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[W.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t)},t.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[W.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[W.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t)},t.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.pulling||this.resetPosition(this.options.bounceTime,B.bounce)||(this.isInTransition=!1,this.options.probeType!==Q&&this.trigger("scrollEnd",{x:this.x,y:this.y})))},t.prototype._translate=function(t,i){if(A(!n(t)&&!n(i),"Oops! translate x or y is null or undefined. please check your code."),this.options.useTransform?this.scrollerStyle[W.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var e=this.options.wheel.rotate,s=void 0===e?25:e,o=0;o<this.items.length;o++){var r=s*(i/this.itemHeight+o);this.items[o].style[W.transform]="rotateX("+r+"deg)"}if(this.x=t,this.y=i,this.indicators)for(var h=0;h<this.indicators.length;h++)this.indicators[h].updatePosition()},t.prototype._animate=function(t,i,e,o){function n(){var p=s();if(p>=c)return r.isAnimating=!1,r._translate(t,i),void(r.pulling||r.resetPosition(r.options.bounceTime)||r.trigger("scrollEnd",{x:r.x,y:r.y}));p=(p-l)/e;var u=o(p),d=(t-h)*u+h,f=(i-a)*u+a;r._translate(d,f),r.isAnimating&&(r.animateTimer=H(n)),r.options.probeType===Q&&r.trigger("scroll",{x:r.x,y:r.y})}var r=this,h=this.x,a=this.y,l=s(),c=l+e;this.isAnimating=!0,_(this.animateTimer),n()},t.prototype.scrollBy=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s)},t.prototype.scrollTo=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.bounce;this.isInTransition=this.options.useTransition&&e>0&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionProperty(),this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&this.options.probeType===Q&&this._startProbe(),this.options.wheel&&(i>0?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn)},t.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var n=l(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=e||0,n.top-=s||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,this.options.wheel&&(n.top=Math.round(n.top/this.itemHeight)*this.itemHeight),this.scrollTo(n.left,n.top,i,o)}},t.prototype.resetPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>0?e=0:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,n=Math.round(o);return!this.hasVerticalScroll||n>0?o=0:n<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},t.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(t=t[W.transform].split(")")[0].split(", "),i=+(t[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},t.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0)},t.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this._removeDOMEvents(),this._events={}}}(T),function(t){t.prototype.on=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e])},t.prototype.once=function(t,i){function e(){this.off(t,e),i.apply(s,arguments)}var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;e.fn=i,this.on(t,e)},t.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0)},t.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,s=[].concat(M(i)),o=0;o<e;o++){var n=s[o],r=D(n,2),h=r[0],a=r[1];h&&h.apply(a,[].slice.call(arguments,1))}}}(T),function(t){t.prototype._initSnap=function(){var t=this;this.currentPage={};var i=this.options.snap;if(i.loop){var e=this.scroller.children;e.length>1?(f(e[e.length-1].cloneNode(!0),this.scroller),this.scroller.appendChild(e[1].cloneNode(!0))):i.loop=!1}var s=i.el;"string"==typeof s&&(s=this.scroller.querySelectorAll(s)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var e=i.stepX||t.wrapperWidth,o=i.stepY||t.wrapperHeight,n=0,r=void 0,h=void 0,a=void 0,l=0,p=void 0,u=0,d=void 0,f=void 0;if(s)for(p=s.length,d=-1;l<p;l++)f=c(s[l]),(0===l||f.left<=c(s[l-1]).left)&&(u=0,d++),t.pages[u]||(t.pages[u]=[]),n=Math.max(-f.left,t.maxScrollX),r=Math.max(-f.top,t.maxScrollY),h=n-Math.round(f.width/2),a=r-Math.round(f.height/2),t.pages[u][d]={x:n,y:r,width:f.width,height:f.height,cx:h,cy:a},n>t.maxScrollX&&u++;else for(h=Math.round(e/2),a=Math.round(o/2);n>-t.scrollerWidth;){for(t.pages[l]=[],p=0,r=0;r>-t.scrollerHeight;)t.pages[l][p]={x:Math.max(n,t.maxScrollX),y:Math.max(r,t.maxScrollY),width:e,height:o,cx:n-h,cy:r-a},r-=o,p++;n-=e,l++}t._checkSnapLoop();var g=i._loopX?1:0,m=i._loopY?1:0;t._goToPage(t.currentPage.pageX||g,t.currentPage.pageY||m,0);var v=i.threshold;v%1==0?(t.snapThresholdX=v,t.snapThresholdY=v):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*v),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*v))}}),this.on("scrollEnd",function(){i.loop&&(i._loopX?(0===t.currentPage.pageX&&t._goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t._goToPage(1,t.currentPage.pageY,0)):(0===t.currentPage.pageY&&t._goToPage(t.currentPage.pageX,t.pages[0].length-2,0),t.currentPage.pageY===t.pages[0].length-1&&t._goToPage(t.currentPage.pageX,1,0)))}),!1!==i.listenFlick&&this.on("flick",function(){var e=i.speed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t._goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,e)}),this.on("destroy",function(){if(i.loop){var e=t.scroller.children;e.length>2&&(m(t.scroller,e[e.length-1]),m(t.scroller,e[0]))}})},t.prototype._checkSnapLoop=function(){var t=this.options.snap;t.loop&&this.pages&&(this.pages.length>1&&(t._loopX=!0),this.pages[0]&&this.pages[0].length>1&&(t._loopY=!0),t._loopX&&t._loopY&&w("Loop does not support two direction at the same time."))},t.prototype._nearestSnap=function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;o<s;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&(e+=this.directionX,e<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&(o+=this.directionY,o<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},t.prototype._goToPage=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],s=arguments[3],o=this.options.snap;if(o&&this.pages&&(s=s||o.easing||B.bounce,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),this.pages[t])){i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(n-this.x),1e3),Math.min(Math.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,s)}},t.prototype.goToPage=function(t,i,e,s){var o=this.options.snap;if(o){if(o.loop){var n=void 0;o._loopX?(n=this.pages.length-2,t>=n?t=n-1:t<0&&(t=0),t+=1):(n=this.pages[0].length-2,i>=n?i=n-1:i<0&&(i=0),i+=1)}this._goToPage(t,i,e,s)}},t.prototype.next=function(t,i){if(this.options.snap){var e=this.currentPage.pageX,s=this.currentPage.pageY;e++,e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this._goToPage(e,s,t,i)}},t.prototype.prev=function(t,i){if(this.options.snap){var e=this.currentPage.pageX,s=this.currentPage.pageY;e--,e<0&&this.hasVerticalScroll&&(e=0,s--),this._goToPage(e,s,t,i)}},t.prototype.getCurrentPage=function(){var t=this.options.snap;return t?t.loop?t._loopX?o({},this.currentPage,{pageX:this.currentPage.pageX-1}):o({},this.currentPage,{pageY:this.currentPage.pageY-1}):this.currentPage:null}}(T),function(t){t.prototype.wheelTo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},t.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},t.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,w("wheel option selectedIndex is required!"))}}(T),function(t){t.prototype._initScrollbar=function(){var t=this,i=this.options.scrollbar,e=i.fade,s=void 0===e||e,o=i.interactive,n=void 0!==o&&o;this.indicators=[];var r=void 0;this.options.scrollX&&(r={el:b("horizontal"),direction:"horizontal",fade:s,interactive:n},this._insertScrollBar(r.el),this.indicators.push(new x(this,r))),this.options.scrollY&&(r={el:b("vertical"),direction:"vertical",fade:s,interactive:n},this._insertScrollBar(r.el),this.indicators.push(new x(this,r))),this.on("refresh",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].refresh()}),s&&(this.on("scrollEnd",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollCancel",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0)}),this.on("beforeScrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0,!0)})),this.on("destroy",function(){t._removeScrollBars()})},t.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t)},t.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].destroy()}}(T),function(t){t.prototype._initPullDown=function(){this.options.probeType=Q},t.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return!(this.directionY!==q||this.y<e)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,B.bounce),this.pulling)},t.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,B.bounce)},t.prototype.openPullDown=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.options.pullDownRefresh=t},t.prototype.closePullDown=function(){this.options.pullDownRefresh=!1}}(T),function(t){t.prototype._initPullUp=function(){this.options.probeType=Q,this.pullupWatching=!1,this._watchPullUp()},t.prototype._watchPullUp=function(){this.pullupWatching||(this.pullupWatching=!0,this.on("scroll",this._checkToEnd))},t.prototype._checkToEnd=function(t){var i=this,e=this.options.pullUpLoad.threshold,s=void 0===e?0:e;this.movingDirectionY===Z&&t.y<=this.maxScrollY+s&&(this.once("scrollEnd",function(){i.pullupWatching=!1}),this.trigger("pullingUp"),this.off("scroll",this._checkToEnd))},t.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()},t.prototype.openPullUp=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.options.pullUpLoad=t,this._initPullUp()},t.prototype.closePullUp=function(){this.options.pullUpLoad=!1,this.pullupWatching&&(this.pullupWatching=!1,this.off("scroll",this._checkToEnd))}}(T),function(t){t.prototype._initMouseWheel=function(){var t=this;this._handleMouseWheelEvent(h),this.on("destroy",function(){clearTimeout(t.mouseWheelTimer),t._handleMouseWheelEvent(a)}),this.firstWheelOpreation=!0},t.prototype._handleMouseWheelEvent=function(t){t(this.wrapper,"wheel",this),t(this.wrapper,"mousewheel",this),t(this.wrapper,"DOMMouseScroll",this)},t.prototype._onMouseWheel=function(t){var i=this;if(this.enabled){t.preventDefault(),this.firstWheelOpreation&&this.trigger("scrollStart"),this.firstWheelOpreation=!1,clearTimeout(this.mouseWheelTimer),this.mouseWheelTimer=setTimeout(function(){i.options.snap||i.trigger("scrollEnd",{x:i.x,y:i.y}),i.firstWheelOpreation=!0},400);var e=this.options.mouseWheel,s=e.speed,o=void 0===s?20:s,n=e.invert,r=void 0!==n&&n,h=void 0,a=void 0;switch(!0){case"deltaX"in t:1===t.deltaMode?(h=-t.deltaX*o,a=-t.deltaY*o):(h=-t.deltaX,a=-t.deltaY);break;case"wheelDeltaX"in t:h=t.wheelDeltaX/120*o,a=t.wheelDeltaY/120*o;break;case"wheelDelta"in t:h=a=t.wheelDelta/120*o;break;case"detail"in t:h=a=-t.detail/3*o;break;default:return}var l=r?-1:1;h*=l,a*=l,this.hasVerticalScroll||(h=a,a=0);var c=void 0,p=void 0;if(this.options.snap)return c=this.currentPage.pageX,p=this.currentPage.pageY,h>0?c--:h<0&&c++,a>0?p--:a<0&&p++,void this._goToPage(c,p);c=this.x+Math.round(this.hasHorizontalScroll?h:0),p=this.y+Math.round(this.hasVerticalScroll?a:0),this.directionX=h>0?-1:h<0?1:0,this.directionY=a>0?-1:a<0?1:0,c>0?c=0:c<this.maxScrollX&&(c=this.maxScrollX),p>0?p=0:p<this.maxScrollY&&(p=this.maxScrollY),this.scrollTo(c,p),this.trigger("scroll",{x:this.x,y:this.y})}}}(T),T.Version="1.9.0",i.a=T},function(t,i,e){i=t.exports=e(0)(),i.push([t.i,"",""])},function(t,i,e){i=t.exports=e(0)(),i.push([t.i,".scroll-loading{width:20px;height:20px}.pulldown-wrapper{position:absolute;width:100%;left:0;display:flex;justify-content:center;align-items:center;transition:all}.pulldown-wrapper .after-trigger{margin-top:10px}.pullup-wrapper{width:100%;display:flex;justify-content:center;align-items:center;padding:16px 0}",""])},function(t,i,e){function s(t){e(13)}var o=e(1)(e(5),e(11),s,"data-v-540dbfdb",null);t.exports=o.exports},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("canvas",{ref:"bubble",style:t.style,attrs:{width:t.width,height:t.height}})},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"wrapper"},[e("div",{staticClass:"scroll-content"},[t._t("default"),t._v(" "),t._t("pullup",[t.pullUpLoad?e("div",{staticClass:"pullup-wrapper"},[t.isPullUpLoad?e("div",{staticClass:"after-trigger"},[e("img",{staticClass:"scroll-loading",attrs:{src:"data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"}})]):e("div",{staticClass:"before-trigger"},[e("span",[t._v(t._s(t.pullUpTxt))])])]):t._e()],{pullUpLoad:t.pullUpLoad,isPullUpLoad:t.isPullUpLoad})],2),t._v(" "),t._t("pulldown",[t.pullDownRefresh?e("div",{ref:"pulldown",staticClass:"pulldown-wrapper",style:t.pullDownStyle},[t.beforePullDown?e("div",{staticClass:"before-trigger"},[e("bubble",{attrs:{y:t.bubbleY}})],1):e("div",{staticClass:"after-trigger"},[t.pulling?e("div",{staticClass:"loading"},[e("img",{staticClass:"scroll-loading",attrs:{src:"data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"}})]):e("div",[e("span",[t._v(t._s(t.refreshTxt))])])])]):t._e()],{pullDownRefresh:t.pullDownRefresh,pullDownStyle:t.pullDownStyle,beforePullDown:t.beforePullDown,pulling:t.pulling,bubbleY:t.bubbleY})],2)},staticRenderFns:[]}},function(t,i,e){var s=e(8);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("02508248",s,!0)},function(t,i,e){var s=e(9);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("e67569d2",s,!0)},function(t,i){t.exports=function(t,i){for(var e=[],s={},o=0;o<i.length;o++){var n=i[o],r=n[0],h=n[1],a=n[2],l=n[3],c={id:t+":"+o,css:h,media:a,sourceMap:l};s[r]?s[r].parts.push(c):e.push(s[r]={id:r,parts:[c]})}return e}}])});
//# sourceMappingURL=vue-better-scroll.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.7.0.0@@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// EXTERNAL MODULE: ./es/utils/index.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./es/utils/deep-assign.js

var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(utils["d" /* isDef */])(val) || deep_assign_hasOwnProperty.call(to, key) && !Object(utils["d" /* isDef */])(to[key])) {
    return;
  }

  if (!deep_assign_hasOwnProperty.call(to, key) || !Object(utils["e" /* isObj */])(val)) {
    to[key] = val;
  } else {
    to[key] = deep_assign_assign(Object(to[key]), from[key]);
  }
}

function deep_assign_assign(to, from) {
  for (var key in from) {
    if (deep_assign_hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }

  return to;
}
// CONCATENATED MODULE: ./es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loadingTip: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return "\u60A8\u6709 " + _count + " \u4E2A\u53EF\u7528\u4F18\u60E0";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanCouponItem: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./es/locale/index.js



var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }

    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantLang', defaultLang);
    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = zh_CN, _Vue$util$defineReact));
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    deep_assign_assign(proto.$vantMessages, messages);
  }
};
locale.install();
/* harmony default export */ var es_locale = (locale);
// CONCATENATED MODULE: ./es/mixins/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

var join = function join(name, el, symbol) {
  return el ? name + symbol + el : name;
};

var bem_prefix = function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};
  Object.keys(mods).forEach(function (key) {
    ret[name + MODS + key] = mods[key];
  });
  return ret;
};

/* harmony default export */ var bem = ({
  methods: {
    b: function b(el, mods) {
      var name = this.$options.name;

      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }

      el = join(name, el, ELEMENT);
      return mods ? [el, bem_prefix(el, mods)] : el;
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/i18n.js
// component mixin

/* harmony default export */ var i18n = ({
  computed: {
    $t: function $t() {
      var name = this.$options.name;
      var prefix = name ? Object(utils["a" /* camelize */])(name) + '.' : '';

      if (false) {}

      var messages = this.$vantMessages[this.$vantLang];
      return function (path) {
        var message = Object(utils["b" /* get */])(messages, prefix + path) || Object(utils["b" /* get */])(messages, path);

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
});
// CONCATENATED MODULE: ./es/utils/create-basic.js
/**
 * Create a basic component with common options
 */





var create_basic_install = function install(Vue) {
  Vue.component(this.name, this);
};

/* harmony default export */ var create_basic = (function (sfc) {
  sfc.name = 'van-' + sfc.name;
  sfc.install = sfc.install || create_basic_install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, bem);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = utils["d" /* isDef */];
  return sfc;
});
;
// CONCATENATED MODULE: ./es/info/index.js

/* harmony default export */ var info = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.isDef(_vm.info) ? _c('div', {
      class: _vm.b()
    }, [_vm._v(_vm._s(_vm.info))]) : _vm._e();
  },
  name: 'info',
  props: {
    info: [String, Number]
  }
}));
// CONCATENATED MODULE: ./es/icon/index.js
var _components;



/* harmony default export */ var icon = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', _vm._g({
      class: [_vm.classPrefix, _vm.classPrefix + "-" + _vm.name],
      style: _vm.style
    }, _vm.$listeners), [_vm._t("default"), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2);
  },
  name: 'icon',
  components: (_components = {}, _components[info.name] = info, _components),
  props: {
    name: String,
    info: [String, Number],
    color: String,
    size: String,
    classPrefix: {
      type: String,
      default: 'van-icon'
    }
  },
  computed: {
    style: function style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/loading/index.js

var DEFAULT_COLOR = '#c9c9c9';
/* harmony default export */ var loading = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.type, _vm.colorType]),
      style: _vm.style
    }, [_c('span', {
      class: _vm.b('spinner', _vm.type)
    }, [_vm._l(_vm.type === 'spinner' ? 12 : 0, function (item, index) {
      return _c('i', {
        key: index
      });
    }), _vm.type === 'circular' ? _c('svg', {
      class: _vm.b('circular'),
      attrs: {
        "viewBox": "25 25 50 50"
      }
    }, [_c('circle', {
      attrs: {
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none"
      }
    })]) : _vm._e()], 2)]);
  },
  name: 'loading',
  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    }
  },
  computed: {
    colorType: function colorType() {
      var color = this.color;
      return color === 'white' || color === 'black' ? color : '';
    },
    style: function style() {
      return {
        color: this.color === 'black' ? DEFAULT_COLOR : this.color,
        width: this.size,
        height: this.size
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/mixins/router-link.js
/**
 * add Vue-Router support
 */
/* harmony default export */ var router_link = ({
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },
  methods: {
    routerLink: function routerLink() {
      var to = this.to,
          url = this.url,
          $router = this.$router,
          replace = this.replace;

      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/cell/index.js



/* harmony default export */ var cell = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b({
        center: _vm.center,
        required: _vm.required,
        clickable: _vm.isLink || _vm.clickable
      }), {
        'van-hairline': _vm.border
      }],
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("icon", [_vm.icon ? _c('icon', {
      class: _vm.b('left-icon'),
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e()]), _vm.isDef(_vm.title) || _vm.$slots.title ? _c('div', {
      class: _vm.b('title')
    }, [_vm._t("title", [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _vm.label ? _c('div', {
      class: _vm.b('label'),
      domProps: {
        "textContent": _vm._s(_vm.label)
      }
    }) : _vm._e()])], 2) : _vm._e(), _vm.isDef(_vm.value) || _vm.$slots.default ? _c('div', {
      class: _vm.b('value', {
        alone: !_vm.$slots.title && !_vm.title
      })
    }, [_vm._t("default", [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.value)
      }
    })])], 2) : _vm._e(), _vm._t("right-icon", [_vm.isLink ? _c('icon', {
      class: _vm.b('right-icon', _vm.arrowDirection),
      attrs: {
        "name": "arrow"
      }
    }) : _vm._e()]), _vm._t("extra")], 2);
  },
  name: 'cell',
  components: {
    Icon: icon
  },
  mixins: [router_link],
  props: {
    icon: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    title: [String, Number],
    value: [String, Number],
    arrowDirection: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/cell-group/index.js

/* harmony default export */ var cell_group = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b(), {
        'van-hairline--top-bottom': _vm.border
      }]
    }, [_vm._t("default")], 2);
  },
  name: 'cell-group',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/create.js

/**
 * Create a component with common options
 */






/* harmony default export */ var create = (function (sfc) {
  sfc.components = _extends(sfc.components || {}, {
    Icon: icon,
    Loading: loading,
    Cell: cell,
    CellGroup: cell_group
  });
  return create_basic(sfc);
});
;
// CONCATENATED MODULE: ./es/mixins/popup/Modal.js

/* harmony default export */ var Modal = ({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      staticClass: "van-modal",
      class: _vm.className,
      style: _vm.style,
      on: {
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          $event.stopPropagation();
        },
        "click": function click($event) {
          _vm.$emit('click', $event);
        }
      }
    })]);
  },
  name: 'modal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style: function style() {
      return _extends({
        zIndex: this.zIndex
      }, this.customStyle);
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/context.js
/* harmony default export */ var popup_context = ({
  id: 1,
  zIndex: 2000,
  stack: [],
  lockCount: 0,
  plusKey: function plusKey(key) {
    return this[key]++;
  },

  get top() {
    return this.stack[this.stack.length - 1];
  }

});
// CONCATENATED MODULE: ./es/mixins/popup/manager.js




var defaultConfig = {
  className: '',
  customStyle: {}
};
/* harmony default export */ var manager = ({
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!popup_context.stack.some(function (item) {
      return item.vm._popupId === vm._popupId;
    })) {
      var el = vm.$el;
      var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      popup_context.stack.push({
        vm: vm,
        config: config,
        targetNode: targetNode
      });
      this.update();
    }

    ;
  },
  close: function close(id) {
    var stack = popup_context.stack;

    if (stack.length) {
      if (popup_context.top.vm._popupId === id) {
        stack.pop();
        this.update();
      } else {
        popup_context.stack = stack.filter(function (item) {
          return item.vm._popupId !== id;
        });
      }
    }
  },
  update: function update() {
    var modal = popup_context.modal;

    if (!modal) {
      modal = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);
      popup_context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (popup_context.top) {
      var _context$top = popup_context.top,
          targetNode = _context$top.targetNode,
          config = _context$top.config;
      targetNode.appendChild(modal.$el);

      _extends(modal, _extends({}, defaultConfig, config, {
        visible: true
      }));
    }
  },
  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    /* istanbul ignore else */
    if (popup_context.top) {
      var vm = popup_context.top.vm;
      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./es/utils/scroll.js

/* harmony default export */ var utils_scroll = ({
  // get nearest scroll element
  getScrollEventTarget: function getScrollEventTarget(element, rootParent) {
    if (rootParent === void 0) {
      rootParent = window;
    }

    var currentNode = element; // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome

    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      var overflowY = this.getComputedStyle(currentNode).overflowY;

      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }

      currentNode = currentNode.parentNode;
    }

    return rootParent;
  },
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },
  setScrollTop: function setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },
  // get distance from element top to page top
  getElementTop: function getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },
  getComputedStyle: !utils["f" /* isServer */] && document.defaultView.getComputedStyle.bind(document.defaultView)
});
// CONCATENATED MODULE: ./es/utils/event.js

var supportsPassive = false;

if (!utils["f" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  !utils["f" /* isServer */] && target.addEventListener(event, handler, supportsPassive ? {
    capture: false,
    passive: passive
  } : false);
}
function off(target, event, handler) {
  !utils["f" /* isServer */] && target.removeEventListener(event, handler);
}
// CONCATENATED MODULE: ./es/mixins/touch.js
/* harmony default export */ var touch = ({
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/index.js





/* harmony default export */ var popup = ({
  mixins: [touch],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: [String, Function],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      this.inited = this.inited || this.value;
      this[val ? 'open' : 'close']();
    },
    getContainer: function getContainer() {
      this.move();
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },
  created: function created() {
    this._popupId = 'popup-' + popup_context.plusKey('id');
  },
  mounted: function mounted() {
    if (this.getContainer) {
      this.move();
    }

    if (this.value) {
      this.open();
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer) {
      this.$parent.$el.appendChild(this.$el);
    }
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`


      if (this.zIndex !== undefined) {
        popup_context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);

        if (!popup_context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        popup_context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        popup_context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);

        if (!popup_context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      manager.close(this._popupId);
      this.$emit('input', false);
    },
    move: function move() {
      var container;
      var getContainer = this.getContainer;

      if (getContainer) {
        container = typeof getContainer === 'string' ? document.querySelector(getContainer) : getContainer();
      } else if (this.$parent) {
        container = this.$parent.$el;
      }

      if (container) {
        container.appendChild(this.$el);
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = utils_scroll.getScrollEventTarget(e.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.overlay) {
        manager.open(this, {
          zIndex: popup_context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this._popupId);
      }

      this.$nextTick(function () {
        _this.$el.style.zIndex = popup_context.plusKey('zIndex');
      });
    }
  }
});
// CONCATENATED MODULE: ./es/actionsheet/index.js


/* harmony default export */ var actionsheet = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-slide-bottom"
      }
    }, [_vm.shouldRender ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b({
        'withtitle': _vm.title
      })
    }, [_vm.title ? _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b('header')
    }, [_c('div', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _c('icon', {
      attrs: {
        "name": "close"
      },
      on: {
        "click": _vm.onCancel
      }
    })], 1) : _c('ul', {
      staticClass: "van-hairline--bottom"
    }, _vm._l(_vm.actions, function (item) {
      return _c('li', {
        class: [_vm.b('item', {
          disabled: item.disabled || item.loading
        }), item.className, 'van-hairline--top'],
        on: {
          "click": function click($event) {
            $event.stopPropagation();

            _vm.onSelect(item);
          }
        }
      }, [!item.loading ? [_c('span', {
        class: _vm.b('name')
      }, [_vm._v(_vm._s(item.name))]), item.subname ? _c('span', {
        class: _vm.b('subname')
      }, [_vm._v(_vm._s(item.subname))]) : _vm._e()] : _c('loading', {
        class: _vm.b('loading'),
        attrs: {
          "size": "20px"
        }
      })], 2);
    })), _vm.cancelText ? _c('div', {
      class: [_vm.b('cancel'), 'van-hairline--top'],
      domProps: {
        "textContent": _vm._s(_vm.cancelText)
      },
      on: {
        "click": _vm.onCancel
      }
    }) : _c('div', {
      class: _vm.b('content')
    }, [_vm._t("default")], 2)]) : _vm._e()]);
  },
  name: 'actionsheet',
  mixins: [popup],
  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSelect: function onSelect(item) {
      if (!item.disabled && !item.loading) {
        item.callback && item.callback(item);
        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./es/field/index.js



/* harmony default export */ var field = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b((_obj = {
        error: _vm.error,
        disabled: _vm.$attrs.disabled,
        'min-height': _vm.type === 'textarea' && !_vm.autosize
      }, _obj["label-" + _vm.labelAlign] = _vm.labelAlign, _obj)),
      attrs: {
        "icon": _vm.leftIcon,
        "title": _vm.label,
        "center": _vm.center,
        "border": _vm.border,
        "is-link": _vm.isLink,
        "required": _vm.required
      }
    }, [_vm._t("label", null, {
      slot: "title"
    }), _c('div', {
      class: _vm.b('body')
    }, [_vm.type === 'textarea' ? _c('textarea', _vm._g(_vm._b({
      ref: "input",
      class: _vm.b('control', _vm.inputAlign),
      attrs: {
        "readonly": _vm.readonly
      },
      domProps: {
        "value": _vm.value
      }
    }, 'textarea', _vm.$attrs, false), _vm.listeners)) : _c('input', _vm._g(_vm._b({
      ref: "input",
      class: _vm.b('control', _vm.inputAlign),
      attrs: {
        "type": _vm.type,
        "readonly": _vm.readonly
      },
      domProps: {
        "value": _vm.value
      }
    }, 'input', _vm.$attrs, false), _vm.listeners)), _vm.showClear ? _c('icon', {
      class: _vm.b('clear'),
      attrs: {
        "name": "clear"
      },
      on: {
        "touchstart": function touchstart($event) {
          $event.preventDefault();

          _vm.$emit('input', '');
        }
      }
    }) : _vm._e(), _vm.$slots.icon || _vm.icon ? _c('div', {
      class: _vm.b('icon'),
      on: {
        "click": _vm.onClickIcon
      }
    }, [_vm._t("icon", [_c('icon', {
      attrs: {
        "name": _vm.icon
      }
    })])], 2) : _vm._e(), _vm.$slots.button ? _c('div', {
      class: _vm.b('button')
    }, [_vm._t("button")], 2) : _vm._e()], 1), _vm.errorMessage ? _c('div', {
      class: _vm.b('error-message'),
      domProps: {
        "textContent": _vm._s(_vm.errorMessage)
      }
    }) : _vm._e()], 2);

    var _obj;
  },
  name: 'field',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    readonly: Boolean,
    required: Boolean,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && this.isDef(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });
    }
  },
  methods: {
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick && this.onIconClick();
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          event.preventDefault();
        }
      }

      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(utils["e" /* isObj */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/button/index.js

/* harmony default export */ var es_button = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.tag, {
      tag: "component",
      class: _vm.b([_vm.type, _vm.size, {
        block: _vm.block,
        plain: _vm.plain,
        square: _vm.square,
        loading: _vm.loading,
        disabled: _vm.disabled,
        unclickable: _vm.disabled || _vm.loading,
        'bottom-action': _vm.bottomAction
      }]),
      attrs: {
        "type": _vm.nativeType,
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm.loading ? _c('loading', {
      attrs: {
        "size": "20px",
        "color": _vm.type === 'default' ? void 0 : ''
      }
    }) : _c('span', {
      class: _vm.b('text')
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)], 1);
  },
  name: 'button',
  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/popup/index.js


/* harmony default export */ var es_popup = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": _vm.currentTransition
      }
    }, [_vm.shouldRender ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b((_obj = {}, _obj[_vm.position] = _vm.position, _obj))
    }, [_vm._t("default")], 2) : _vm._e()]);

    var _obj;
  },
  name: 'popup',
  mixins: [popup],
  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentTransition: function currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : "popup-slide-" + this.position);
    }
  }
}));
// CONCATENATED MODULE: ./es/toast/toast.js


var STYLE_LIST = ['success', 'fail', 'loading'];
/* harmony default export */ var toast_toast = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b([_vm.style, _vm.position])
    }, [_vm.style === 'text' ? _c('div', [_vm._v(_vm._s(_vm.message))]) : _vm._e(), _vm.style === 'html' ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.message)
      }
    }) : _vm._e(), _vm.style === 'default' ? [_vm.type === 'loading' ? _c('loading', {
      attrs: {
        "color": "white",
        "type": _vm.loadingType
      }
    }) : _c('icon', {
      class: _vm.b('icon'),
      attrs: {
        "name": _vm.type
      }
    }), _vm.isDef(_vm.message) ? _c('div', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()] : _vm._e()], 2)]);
  },
  name: 'toast',
  mixins: [popup],
  props: {
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  computed: {
    style: function style() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    }
  },
  mounted: function mounted() {
    this.toggleClickale();
  },
  watch: {
    value: function value() {
      this.toggleClickale();
    },
    forbidClick: function forbidClick() {
      this.toggleClickale();
    }
  },
  methods: {
    toggleClickale: function toggleClickale() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/toast/index.js




var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};

var toast_parseOptions = function parseOptions(message) {
  return Object(utils["e" /* isObj */])(message) ? message : {
    message: message
  };
};

var queue = [];
var singleton = true;

var currentOptions = _extends({}, defaultOptions);

function createInstance() {
  if (!queue.length || !singleton) {
    var toast = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(toast_toast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }

  return queue[queue.length - 1];
}

; // transform toast options to popup props

function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance();
  options = _extends({}, currentOptions, toast_parseOptions(options), {
    clear: function clear() {
      toast.value = false;
    }
  });

  _extends(toast, transformer(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

;

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_extends({
      type: type
    }, toast_parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = toast_createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  _extends(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

Toast.allowMultiple = function (allow) {
  if (allow === void 0) {
    allow = true;
  }

  singleton = !allow;
};

Toast.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(toast_toast);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$toast = Toast;
/* harmony default export */ var es_toast = (Toast);
// CONCATENATED MODULE: ./es/dialog/dialog.js



/* harmony default export */ var dialog = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-dialog-bounce"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: [_vm.b(), _vm.className]
    }, [_vm.title ? _c('div', {
      class: _vm.b('header', {
        isolated: !_vm.message && !_vm.$slots.default
      }),
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }) : _vm._e(), _vm.message || _vm.$slots.default ? _c('div', {
      class: _vm.b('content')
    }, [_vm._t("default", [_vm.message ? _c('div', {
      class: _vm.b('message', {
        'has-title': _vm.title
      }),
      domProps: {
        "innerHTML": _vm._s(_vm.message)
      }
    }) : _vm._e()])], 2) : _vm._e(), _c('div', {
      staticClass: "van-hairline--top",
      class: _vm.b('footer', {
        'buttons': _vm.showCancelButton && _vm.showConfirmButton
      })
    }, [_c('van-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showCancelButton,
        expression: "showCancelButton"
      }],
      class: _vm.b('cancel'),
      attrs: {
        "loading": _vm.loading.cancel,
        "size": "large"
      },
      on: {
        "click": function click($event) {
          _vm.handleAction('cancel');
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.cancelButtonText || _vm.$t('cancel')) + "\n      ")]), _c('van-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showConfirmButton,
        expression: "showConfirmButton"
      }],
      class: [_vm.b('confirm'), {
        'van-hairline--left': _vm.showCancelButton && _vm.showConfirmButton
      }],
      attrs: {
        "size": "large",
        "loading": _vm.loading.confirm
      },
      on: {
        "click": function click($event) {
          _vm.handleAction('confirm');
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.confirmButtonText || _vm.$t('confirm')) + "\n      ")])], 1)])]);
  },
  name: 'dialog',
  components: {
    VanButton: es_button
  },
  mixins: [popup],
  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    handleAction: function handleAction(action) {
      var _this = this;

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }

          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
}));
// CONCATENATED MODULE: ./es/dialog/index.js



var instance;

var dialog_initInstance = function initInstance() {
  instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(dialog))({
    el: document.createElement('div')
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
  document.body.appendChild(instance.$el);
};

var dialog_Dialog = function Dialog(options) {
  return new Promise(function (resolve, reject) {
    if (!instance) {
      dialog_initInstance();
    }

    _extends(instance, _extends({
      resolve: resolve,
      reject: reject
    }, options));
  });
};

dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

dialog_Dialog.alert = function (options) {
  return dialog_Dialog(_extends({}, dialog_Dialog.currentOptions, options));
};

dialog_Dialog.confirm = function (options) {
  return dialog_Dialog(_extends({}, dialog_Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

dialog_Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

dialog_Dialog.setDefaultOptions = function (options) {
  _extends(dialog_Dialog.currentOptions, options);
};

dialog_Dialog.resetDefaultOptions = function () {
  dialog_Dialog.currentOptions = _extends({}, dialog_Dialog.defaultOptions);
};

dialog_Dialog.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(dialog);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$dialog = dialog_Dialog;
dialog_Dialog.resetDefaultOptions();
/* harmony default export */ var es_dialog = (dialog_Dialog);
// CONCATENATED MODULE: ./es/utils/deep-clone.js

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if (typeof obj === 'object') {
    return deep_assign_assign({}, obj);
  }

  return obj;
}
// CONCATENATED MODULE: ./es/picker/PickerColumn.js



var DEFAULT_DURATION = 200;
/* harmony default export */ var PickerColumn = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b(), _vm.className],
      style: _vm.columnStyle,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          return _vm.onTouchMove($event);
        },
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_c('ul', {
      style: _vm.wrapperStyle
    }, _vm._l(_vm.options, function (option, index) {
      return _c('li', {
        staticClass: "van-ellipsis",
        class: _vm.b('item', {
          disabled: _vm.isDisabled(option),
          selected: index === _vm.currentIndex
        }),
        style: _vm.optionStyle,
        domProps: {
          "innerHTML": _vm._s(_vm.getOptionText(option))
        },
        on: {
          "click": function click($event) {
            _vm.setIndex(index, true);
          }
        }
      });
    }))]);
  },
  name: 'picker-column',
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    this.$parent.children && this.$parent.children.push(this);
    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;
    children && children.splice(children.indexOf(this), 1);
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    },
    columnStyle: function columnStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    wrapperStyle: function wrapperStyle() {
      return {
        transition: this.duration + "ms",
        transform: "translate3d(0, " + (this.offset + this.baseOffset) + "px, 0)",
        lineHeight: this.itemHeight + 'px'
      };
    },
    optionStyle: function optionStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove: function onTouchMove(event) {
      var deltaY = event.touches[0].clientY - this.startY;
      this.offset = Object(utils["g" /* range */])(this.startOffset + deltaY, -(this.count * this.itemHeight), this.itemHeight);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = Object(utils["g" /* range */])(Math.round(-this.offset / this.itemHeight), 0, this.count - 1);
        this.setIndex(index, true);
      }
    },
    adjustIndex: function adjustIndex(index) {
      index = Object(utils["g" /* range */])(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!this.isDisabled(this.options[_i])) return _i;
      }
    },
    isDisabled: function isDisabled(option) {
      return Object(utils["e" /* isObj */])(option) && option.disabled;
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["e" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    }
  }
}));
// CONCATENATED MODULE: ./es/picker/index.js



/* harmony default export */ var picker = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm.showToolbar ? _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b('toolbar')
    }, [_vm._t("default", [_c('div', {
      class: _vm.b('cancel'),
      on: {
        "click": function click($event) {
          _vm.emit('cancel');
        }
      }
    }, [_vm._v(_vm._s(_vm.cancelButtonText || _vm.$t('cancel')))]), _vm.title ? _c('div', {
      staticClass: "van-ellipsis",
      class: _vm.b('title'),
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }) : _vm._e(), _c('div', {
      class: _vm.b('confirm'),
      on: {
        "click": function click($event) {
          _vm.emit('confirm');
        }
      }
    }, [_vm._v(_vm._s(_vm.confirmButtonText || _vm.$t('confirm')))])])], 2) : _vm._e(), _vm.loading ? _c('div', {
      class: _vm.b('loading')
    }, [_c('loading')], 1) : _vm._e(), _c('div', {
      class: _vm.b('columns'),
      style: _vm.columnsStyle,
      on: {
        "touchmove": function touchmove($event) {
          $event.preventDefault();
        }
      }
    }, [_vm._l(_vm.simple ? [_vm.columns] : _vm.columns, function (item, index) {
      return _c('picker-column', {
        key: index,
        attrs: {
          "value-key": _vm.valueKey,
          "initial-options": _vm.simple ? item : item.values,
          "class-name": item.className,
          "default-index": item.defaultIndex,
          "item-height": _vm.itemHeight,
          "visible-item-count": _vm.visibleItemCount
        },
        on: {
          "change": function change($event) {
            _vm.onChange(index);
          }
        }
      });
    }), _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b('frame'),
      style: _vm.frameStyle
    })], 2)]);
  },
  name: 'picker',
  components: {
    PickerColumn: PickerColumn
  },
  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    confirmButtonText: String,
    cancelButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    frameStyle: function frameStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    },
    columnsStyle: function columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: function columns() {
      this.setColumns();
    }
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (columns, index) {
        _this.setColumnValues(index, deepClone(columns.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/area/index.js


/* harmony default export */ var es_area = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('picker', {
      ref: "picker",
      class: _vm.b(),
      attrs: {
        "show-toolbar": "",
        "value-key": "name",
        "title": _vm.title,
        "loading": _vm.loading,
        "columns": _vm.displayColumns,
        "item-height": _vm.itemHeight,
        "visible-item-count": _vm.visibleItemCount
      },
      on: {
        "change": _vm.onChange,
        "confirm": function confirm($event) {
          _vm.$emit('confirm', $event);
        },
        "cancel": function cancel($event) {
          _vm.$emit('cancel', $event);
        }
      }
    });
  },
  name: 'area',
  components: {
    Picker: picker
  },
  props: {
    value: String,
    title: String,
    loading: Boolean,
    itemHeight: Number,
    visibleItemCount: Number,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: function handler() {
        this.setValues();
      }
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (code) {
        return {
          code: code,
          name: list[code]
        };
      });

      if (code) {
        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2));
      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, values, index);
    },
    setValues: function setValues() {
      var code = this.code || Object.keys(this.county)[0] || '';
      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00') {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues() : [];
    },
    reset: function reset() {
      this.code = '';
      this.setValues();
    }
  }
}));
// CONCATENATED MODULE: ./es/address-edit/Detail.js



/* harmony default export */ var Detail = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b()
    }, [_c('field', _vm._g({
      ref: "field",
      attrs: {
        "autosize": "",
        "rows": _vm.detailRows,
        "clearable": !_vm.isAndroid,
        "type": "textarea",
        "maxlength": "200",
        "value": _vm.value,
        "error": _vm.error,
        "label": _vm.$t('label'),
        "placeholder": _vm.$t('placeholder')
      }
    }, _vm.$listeners), [_vm.showIcon && _vm.isAndroid ? _c('span', {
      class: _vm.b('finish'),
      attrs: {
        "slot": "icon"
      },
      on: {
        "click": function click($event) {
          _vm.$refs.field.blur();
        }
      },
      slot: "icon"
    }, [_vm._v("\n      " + _vm._s(_vm.$t('complete')) + "\n    ")]) : _vm._e()]), _vm._l(_vm.searchResult, function (express) {
      return _vm.showSearchList ? _c('cell', {
        key: express.name + express.address,
        attrs: {
          "title": express.name,
          "label": express.address,
          "icon": "location",
          "clickable": ""
        },
        on: {
          "click": function click($event) {
            _vm.onSelect(express);
          }
        }
      }) : _vm._e();
    })], 2);
  },
  name: 'address-edit-detail',
  components: {
    Field: field
  },
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    showSearchResult: Boolean
  },
  created: function created() {
    this.isAndroid = Object(utils["c" /* isAndroid */])();
  },
  computed: {
    showSearchList: function showSearchList() {
      return this.showSearchResult && this.focused && this.searchResult.length;
    },
    showIcon: function showIcon() {
      return this.value && this.focused;
    }
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    }
  }
}));
// CONCATENATED MODULE: ./es/switch/index.js

/* harmony default export */ var es_switch = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        on: _vm.value === true || _vm.value == _vm.activeValue,
        disabled: _vm.disabled
      }),
      style: _vm.style,
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('node')
    }, [_vm.loading ? _c('loading', {
      class: _vm.b('loading')
    }) : _vm._e()], 1)]);
  },
  name: 'switch',
  props: {
    value: [Boolean, String],
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    },
    activeValue: String,
    inactiveValue: String
  },
  computed: {
    style: function style() {
      return {
        fontSize: this.size
      };
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.disabled && !this.loading) {
        if (this.activeValue === this.value) {
          this.$emit('input', this.inactiveValue || !this.value);
          this.$emit('change', this.inactiveValue || !this.value);
          return;
        }

        if (this.inactiveValue === this.value) {
          this.$emit('input', this.activeValue || !this.value);
          this.$emit('change', this.activeValue || !this.value);
          return;
        }

        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/switch-cell/index.js


/* harmony default export */ var switch_cell = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b(),
      attrs: {
        "center": "",
        "title": _vm.title,
        "border": _vm.border
      }
    }, [_c('van-switch', _vm._b({
      on: {
        "input": function input($event) {
          _vm.$emit('input', $event);
        }
      }
    }, 'van-switch', _vm.$props, false))], 1);
  },
  name: 'switch-cell',
  components: {
    VanSwitch: es_switch
  },
  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '26px'
    }
  },
  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/mobile.js
function mobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9\-]{10,13}$/.test(value);
}
// CONCATENATED MODULE: ./es/address-edit/index.js

/* eslint-disable camelcase */












var defaultData = {
  name: '',
  tel: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};
/* harmony default export */ var address_edit = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('cell-group', [_c('field', {
      attrs: {
        "clearable": "",
        "maxlength": "15",
        "label": _vm.$t('name'),
        "placeholder": _vm.$t('namePlaceholder'),
        "error": _vm.errorInfo.name
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('name');
        }
      },
      model: {
        value: _vm.data.name,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        },
        expression: "data.name"
      }
    }), _c('field', {
      attrs: {
        "clearable": "",
        "type": "tel",
        "label": _vm.$t('tel'),
        "placeholder": _vm.$t('telPlaceholder'),
        "error": _vm.errorInfo.tel
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('tel');
        }
      },
      model: {
        value: _vm.data.tel,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        },
        expression: "data.tel"
      }
    }), _c('field', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showArea,
        expression: "showArea"
      }],
      attrs: {
        "readonly": "",
        "label": _vm.$t('area'),
        "placeholder": _vm.$t('areaPlaceholder'),
        "value": _vm.areaText
      },
      on: {
        "click": function click($event) {
          _vm.showAreaPopup = true;
        }
      }
    }), _c('address-edit-detail', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showDetail,
        expression: "showDetail"
      }],
      attrs: {
        "focused": _vm.detailFocused,
        "value": _vm.data.addressDetail,
        "error": _vm.errorInfo.addressDetail,
        "detail-rows": _vm.detailRows,
        "search-result": _vm.searchResult,
        "show-search-result": _vm.showSearchResult
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('addressDetail');
        },
        "blur": function blur($event) {
          _vm.detailFocused = false;
        },
        "input": _vm.onChangeDetail,
        "select-search": function selectSearch($event) {
          _vm.$emit('select-search', $event);
        }
      }
    }), _vm.showPostal ? _c('field', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.hideBottomFields,
        expression: "!hideBottomFields"
      }],
      attrs: {
        "type": "tel",
        "maxlength": "6",
        "label": _vm.$t('postal'),
        "placeholder": _vm.$t('postal'),
        "error": _vm.errorInfo.postalCode
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('postalCode');
        }
      },
      model: {
        value: _vm.data.postalCode,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "postalCode", $$v);
        },
        expression: "data.postalCode"
      }
    }) : _vm._e(), _vm._t("default"), _vm.showSetDefault ? _c('switch-cell', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.hideBottomFields,
        expression: "!hideBottomFields"
      }],
      attrs: {
        "title": _vm.$t('defaultAddress')
      },
      model: {
        value: _vm.data.isDefault,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "isDefault", $$v);
        },
        expression: "data.isDefault"
      }
    }) : _vm._e()], 2), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.hideBottomFields,
        expression: "!hideBottomFields"
      }],
      class: _vm.b('buttons')
    }, [_c('van-button', {
      attrs: {
        "block": "",
        "loading": _vm.isSaving,
        "type": "danger"
      },
      on: {
        "click": _vm.onSave
      }
    }, [_vm._v("\n      " + _vm._s(_vm.saveButtonText || _vm.$t('save')) + "\n    ")]), _vm.showDelete ? _c('van-button', {
      attrs: {
        "block": "",
        "loading": _vm.isDeleting
      },
      on: {
        "click": _vm.onDelete
      }
    }, [_vm._v("\n      " + _vm._s(_vm.deleteButtonText || _vm.$t('delete')) + "\n    ")]) : _vm._e()], 1), _c('popup', {
      attrs: {
        "position": "bottom",
        "lazy-render": false,
        "get-container": _vm.getAreaContainer
      },
      model: {
        value: _vm.showAreaPopup,
        callback: function callback($$v) {
          _vm.showAreaPopup = $$v;
        },
        expression: "showAreaPopup"
      }
    }, [_c('van-area', {
      ref: "area",
      attrs: {
        "loading": !_vm.areaListLoaded,
        "value": _vm.data.areaCode,
        "area-list": _vm.areaList
      },
      on: {
        "confirm": _vm.onAreaConfirm,
        "cancel": function cancel($event) {
          _vm.showAreaPopup = false;
        }
      }
    })], 1)], 1);
  },
  name: 'address-edit',
  components: {
    Field: field,
    Popup: es_popup,
    VanArea: es_area,
    VanButton: es_button,
    SwitchCell: switch_cell,
    AddressEditDetail: Detail
  },
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultData);
      }
    },
    searchResult: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields: function hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },
    areaListLoaded: function areaListLoaded() {
      return Object(utils["e" /* isObj */])(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (province && city && county && areaCode) {
        var arr = [province, city, county];

        if (province === city) {
          arr.shift();
        }

        return arr.join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = _extends({}, defaultData, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.data.areaCode = values[2].code;
      this.assignAreaValues(values);
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues(values) {
      _extends(this.data, {
        province: values[0] ? values[0].name : '',
        city: values[1] ? values[1].name : '',
        county: values[2] ? values[2].name : ''
      });
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key]).trim();
      var $t = this.$t;

      switch (key) {
        case 'name':
          return value ? '' : $t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');

        case 'areaCode':
          return value ? '' : $t('areaEmpty');

        case 'addressDetail':
          return value ? '' : $t('addressEmpty');

        case 'postalCode':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      es_dialog.confirm({
        title: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      var _this3 = this;

      this.data.areaCode = code || '';
      this.$nextTick(function () {
        var area = _this3.$refs.area;

        if (area) {
          _this3.assignAreaValues(area.getValues());
        }
      });
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    getAreaContainer: function getAreaContainer() {
      return document.body;
    }
  }
}));
// CONCATENATED MODULE: ./es/radio-group/index.js

/* harmony default export */ var radio_group = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'radio-group',
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  }
}));
// CONCATENATED MODULE: ./es/mixins/find-parent.js
/**
 * find parent component by name
 */
/* harmony default export */ var find_parent = ({
  data: function data() {
    return {
      parent: null
    };
  },
  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }

        parent = parent.$parent;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/radio/index.js


/* harmony default export */ var es_radio = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        disabled: _vm.isDisabled
      }),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.$emit('click');
        }
      }
    }, [_c('span', {
      class: _vm.b('input')
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.currentValue,
        expression: "currentValue"
      }],
      class: _vm.b('control'),
      attrs: {
        "type": "radio",
        "disabled": _vm.isDisabled
      },
      domProps: {
        "value": _vm.name,
        "checked": _vm._q(_vm.currentValue, _vm.name)
      },
      on: {
        "change": function change($event) {
          _vm.currentValue = _vm.name;
        }
      }
    }), _c('icon', {
      attrs: {
        "name": _vm.checked ? 'checked' : 'check'
      }
    })], 1), _vm.$slots.default ? _c('span', {
      class: _vm.b('label'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.onClickLabel($event);
        }
      }
    }, [_vm._t("default")], 2) : _vm._e()]);
  },
  name: 'radio',
  mixins: [find_parent],
  props: {
    keyName: null,
    name: null,
    value: null,
    disabled: Boolean
  },
  computed: {
    checked: function checked() {
      if (!this.currentValue) {
        return false;
      }

      if (this.keyName) {
        return this.currentValue[this.keyName] === this.name[this.keyName];
      }

      return this.currentValue === this.name;
    },
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        var _this = this;

        (this.parent || this).$emit('input', null);
        this.$nextTick(function () {
          (_this.parent || _this).$emit('input', val);
        });
      }
    },
    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },
  created: function created() {
    this.findParent('van-radio-group');
  },
  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/address-list/Item.js


/* harmony default export */ var Item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b({
        disabled: _vm.disabled
      }),
      attrs: {
        "is-link": !_vm.disabled
      },
      on: {
        "click": function click($event) {
          _vm.$emit('select');
        }
      }
    }, [_c('radio', {
      attrs: {
        "name": _vm.data.id
      }
    }, [_c('div', {
      class: _vm.b('name')
    }, [_vm._v(_vm._s(_vm.data.name) + "，" + _vm._s(_vm.data.tel))]), _c('div', {
      class: _vm.b('address')
    }, [_vm._v(_vm._s(_vm.data.address))])]), _c('icon', {
      class: _vm.b('edit'),
      attrs: {
        "slot": "right-icon",
        "name": "edit"
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.$emit('edit');
        }
      },
      slot: "right-icon"
    })], 1);
  },
  name: 'address-item',
  components: {
    Radio: es_radio
  },
  props: {
    data: Object,
    disabled: Boolean
  }
}));
// CONCATENATED MODULE: ./es/address-list/index.js




/* harmony default export */ var address_list = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("top"), _c('radio-group', {
      attrs: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.$emit('input', $event);
        }
      }
    }, [_c('cell-group', _vm._l(_vm.list, function (item, index) {
      return _c('address-item', {
        key: item.id,
        attrs: {
          "data": item
        },
        on: {
          "select": function select($event) {
            _vm.$emit('select', item, index);
          },
          "edit": function edit($event) {
            _vm.$emit('edit', item, index);
          }
        }
      });
    }))], 1), _vm.disabledText ? _c('div', {
      class: _vm.b('disabled-text')
    }, [_vm._v(_vm._s(_vm.disabledText))]) : _vm._e(), _vm.disabledList.length ? _c('cell-group', _vm._l(_vm.disabledList, function (item, index) {
      return _c('address-item', {
        key: item.id,
        attrs: {
          "disabled": "",
          "data": item
        },
        on: {
          "select": function select($event) {
            _vm.$emit('select-disabled', item, index);
          },
          "edit": function edit($event) {
            _vm.$emit('edit-disabled', item, index);
          }
        }
      });
    })) : _vm._e(), _vm._t("default"), _c('van-button', {
      class: _vm.b('add'),
      attrs: {
        "square": "",
        "size": "large",
        "type": "danger",
        "text": _vm.addButtonText || _vm.$t('add')
      },
      on: {
        "click": function click($event) {
          _vm.$emit('add');
        }
      }
    })], 2);
  },
  name: 'address-list',
  components: {
    RadioGroup: radio_group,
    VanButton: es_button,
    AddressItem: Item
  },
  props: {
    disabledText: String,
    addButtonText: String,
    value: [String, Number],
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/avatar/index.js

/* harmony default export */ var avatar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return !_vm.name || _vm.src ? _c('img', {
      class: _vm.b(),
      style: _vm.style,
      attrs: {
        "src": _vm.src
      }
    }) : _c('div', {
      class: _vm.b(),
      style: _vm.style
    }, [_vm._v("\n  " + _vm._s(_vm.formatName(_vm.name)) + "\n")]);
  },
  name: 'avatar',
  props: {
    colors: {
      type: Array,
      default: function _default() {
        return ['#78C06E', '#3BC2B5', '#78919D', '#5EC9F6', '#F6BF26'];
      }
    },
    name: {
      type: String
    },
    src: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    defaultColor: {
      type: String
    },
    isLong: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var size;

    switch (this.size) {
      case 'normal':
        size = '40px';
        break;

      case 'large':
        size = '48px';
        break;

      default:
        size = this.size;
    }

    return {
      style: {
        width: size,
        height: size,
        lineHeight: size,
        fontSize: this.fontSize,
        position: 'relative',
        backgroundColor: null
      }
    };
  },
  mounted: function mounted() {
    if (this.defaultColor) {
      this.style.backgroundColor = this.defaultColor;

      if (console && console.warn) {
        console.warn('Avatar: defaultColor is deprecated, use colors instead.');
      }
    } else if (this.colors.length === 1) {
      this.style.backgroundColor = this.colors[0];
    } else {
      var hashCode = this.hashCode(this.name, this.isLong);
      this.style.backgroundColor = this.colors[Math.abs(hashCode) % this.colors.length];
    }
  },
  methods: {
    hashCode: function hashCode(strKey, isLong) {
      var MAX_VALUE = 0x7fffffff;
      var MIN_VALUE = -0x80000000;

      var intValue = function intValue(num) {
        if (num > MAX_VALUE || num < MIN_VALUE) {
          return num & 0xFFFFFFFF; // eslint-disable-line no-bitwise
        }

        return num;
      };

      var hash = 0;

      if (typeof strKey === 'string') {
        for (var i = 0, l = strKey.length; i < l; i += 1) {
          hash = hash * 31 + strKey.charCodeAt(i);

          if (!isLong) {
            hash = intValue(hash);
          }
        }
      }

      return hash;
    },
    formatName: function formatName(name) {
      var formattedName = name;
      var isEnglishName = /^[A-Za-z,. ]+$/.test(formattedName);
      formattedName = formattedName.replace(/[()（）\d]/g, '').replace(/[,. ]+/g, isEnglishName ? ' ' : '');

      if (formattedName.indexOf(' ') !== -1) {
        formattedName = formattedName.split(' ').map(function (p) {
          return p.slice(0, 1);
        }).join('');
      }

      return isEnglishName ? formattedName.slice(0, 2) : formattedName.slice(formattedName.length - 2, formattedName.length);
    }
  }
}));
// CONCATENATED MODULE: ./es/badge/index.js
var badge_components;



/* harmony default export */ var badge = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      class: [_vm.b({
        select: _vm.select
      }), 'van-hairline'],
      attrs: {
        "href": _vm.url
      },
      on: {
        "click": _vm.onClick
      }
    }, [_c('van-info', {
      class: _vm.b('info'),
      attrs: {
        "info": _vm.info
      }
    }), _vm._v("\n  " + _vm._s(_vm.title) + "\n")], 1);
  },
  name: 'badge',
  components: (badge_components = {}, badge_components[info.name] = info, badge_components),
  props: {
    url: String,
    info: [String, Number],
    title: String
  },
  beforeCreate: function beforeCreate() {
    this.$parent.badges.push(this);
  },
  computed: {
    select: function select() {
      return this.$parent.badges.indexOf(this) === this.$parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
}));
// CONCATENATED MODULE: ./es/badge-group/index.js

/* harmony default export */ var badge_group = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'badge-group',
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      badges: []
    };
  }
}));
// CONCATENATED MODULE: ./es/card/index.js

/* harmony default export */ var card = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        center: _vm.centered
      })
    }, [_c('div', {
      class: _vm.b('thumb')
    }, [_vm._t("thumb", [_c('img', {
      class: _vm.b('img'),
      attrs: {
        "src": _vm.thumb
      }
    })])], 2), _c('div', {
      class: _vm.b('content')
    }, [_vm._t("title", [_vm.title || _vm.isDef(_vm.price) ? _c('div', {
      class: _vm.b('row')
    }, [_vm.title ? _c('div', {
      class: _vm.b('title')
    }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm.isDef(_vm.price) ? _c('div', {
      class: _vm.b('price')
    }, [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm.price))]) : _vm._e()]) : _vm._e()]), _vm._t("desc", [_vm.desc || _vm.isDef(_vm.num) ? _c('div', {
      class: _vm.b('row')
    }, [_vm.desc ? _c('div', {
      class: _vm.b('desc')
    }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e(), _vm.isDef(_vm.num) ? _c('div', {
      class: _vm.b('num')
    }, [_vm._v("x " + _vm._s(_vm.num))]) : _vm._e()]) : _vm._e()]), _vm._t("tags")], 2), _vm.$slots.footer ? _c('div', {
      class: _vm.b('footer')
    }, [_vm._t("footer")], 2) : _vm._e()]);
  },
  name: 'card',
  props: {
    thumb: String,
    title: String,
    desc: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/clickoutside.js
/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */

var clickoutside_context = '@@clickoutsideContext';
/* harmony default export */ var clickoutside = ({
  bind: function bind(el, binding) {
    var handler = function handler(event) {
      if (!el.contains(event.target)) {
        el[clickoutside_context].callback();
      }
    };

    el[clickoutside_context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };
    on(document, el[clickoutside_context].arg, handler);
  },
  update: function update(el, binding) {
    el[clickoutside_context].callback = binding.value;
  },
  unbind: function unbind(el) {
    off(document, el[clickoutside_context].arg, el[clickoutside_context].handler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
});
// CONCATENATED MODULE: ./es/cell-swipe/index.js



var THRESHOLD = 0.15;
/* harmony default export */ var cell_swipe = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "clickoutside",
        rawName: "v-clickoutside:touchstart",
        value: _vm.onClick,
        expression: "onClick",
        arg: "touchstart"
      }],
      class: _vm.b(),
      on: {
        "click": function click($event) {
          _vm.onClick('cell');
        },
        "touchstart": _vm.startDrag,
        "touchmove": _vm.onDrag,
        "touchend": _vm.endDrag,
        "touchcancel": _vm.endDrag
      }
    }, [_c('div', {
      class: _vm.b('wrapper'),
      style: _vm.wrapperStyle,
      on: {
        "transitionend": function transitionend($event) {
          _vm.swipe = false;
        }
      }
    }, [_vm.leftWidth ? _c('div', {
      class: _vm.b('left'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('left');
        }
      }
    }, [_vm._t("left")], 2) : _vm._e(), _vm._t("default"), _vm.rightWidth ? _c('div', {
      class: _vm.b('right'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('right');
        }
      }
    }, [_vm._t("right")], 2) : _vm._e()], 2)]);
  },
  name: 'cell-swipe',
  mixins: [touch],
  props: {
    onClose: Function,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },
  directives: {
    Clickoutside: clickoutside
  },
  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },
  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: "translate3d(" + this.offset + "px, 0, 0)",
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },
  methods: {
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.swipeMove(-rightWidth);
        this.resetSwipeStatus(); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.swipeMove(leftWidth);
        this.resetSwipeStatus();
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      this.touchMove(event);
      var deltaX = this.deltaX;

      if (deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth) || deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      }

      ;
    },
    endDrag: function endDrag() {
      this.draging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      }

      ;
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/checkbox/index.js

 // eslint-disable-next-line no-extend-native

Array.prototype.fakeFindIndex = function (cb, context) {
  var array = this;

  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (cb.call(context, element, i, array)) {
      return i;
    }
  }

  return -1;
};

/* harmony default export */ var es_checkbox = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('icon', {
      class: [_vm.b('icon'), "van-checkbox--" + _vm.shape, {
        'van-checkbox--disabled': _vm.isDisabled,
        'van-checkbox--checked': _vm.checked
      }],
      attrs: {
        "name": "success"
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.onClick($event);
        }
      }
    }), _vm.$slots.default ? _c('span', {
      class: _vm.b('label'),
      on: {
        "click": function click($event) {
          _vm.onClick('label');
        }
      }
    }, [_vm._t("default")], 2) : _vm._e()], 1);
  },
  name: 'checkbox',
  mixins: [find_parent],
  props: {
    name: null,
    value: null,
    keyName: null,
    disabled: Boolean,
    labelDisabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    checked: {
      get: function get() {
        var _this = this;

        return this.parent ? (this.parent.value ? this.parent.value : []).fakeFindIndex(function (element) {
          if (_this.keyName) {
            return element[_this.keyName] === _this.name[_this.keyName];
          }

          return element === _this.name;
        }) !== -1 : this.value;
      },
      set: function set(val) {
        var _this2 = this;

        var parent = this.parent;

        if (parent) {
          var parentValue = this.parent.value ? this.parent.value : [].slice();

          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return;
            }
            /* istanbul ignore else */


            if (parentValue.fakeFindIndex(function (element) {
              if (_this2.keyName) {
                return element[_this2.keyName] === _this2.name[_this2.keyName];
              }

              return element === _this2.name;
            }) === -1) {
              parentValue.push(this.name);
              parent.$emit('input', parentValue);
            }
          } else {
            var index = parentValue.fakeFindIndex(function (element) {
              if (_this2.keyName) {
                return element[_this2.keyName] === _this2.name[_this2.keyName];
              }

              return element === _this2.name;
            });
            /* istanbul ignore else */

            if (index !== -1) {
              parentValue.splice(index, 1);
              parent.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },
    isDisabled: function isDisabled() {
      return this.parent && this.parent.disabled || this.disabled;
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  created: function created() {
    this.findParent('van-checkbox-group');
  },
  methods: {
    onClick: function onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/checkbox-group/index.js

/* harmony default export */ var checkbox_group = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'checkbox-group',
  props: {
    value: Array,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  }
}));
// EXTERNAL MODULE: ./es/utils/raf.js
var raf = __webpack_require__(2);

// CONCATENATED MODULE: ./es/circle/index.js


/* harmony default export */ var circle = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: _vm.style
    }, [_c('svg', {
      attrs: {
        "viewBox": "0 0 1060 1060"
      }
    }, [_c('path', {
      class: _vm.b('hover'),
      style: _vm.hoverStyle,
      attrs: {
        "d": _vm.path
      }
    }), _c('path', {
      class: _vm.b('layer'),
      style: _vm.layerStyle,
      attrs: {
        "d": _vm.path
      }
    })]), _vm._t("default", [_c('div', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.text))])])], 2);
  },
  name: 'circle',
  props: {
    text: String,
    value: Number,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#38f'
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    this.perimeter = 3140;
    this.path = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = this.perimeter * (100 - this.value) / 100;
      offset = this.clockwise ? offset : this.perimeter * 2 - offset;
      return {
        stroke: "" + this.color,
        strokeDashoffset: offset + "px",
        strokeWidth: this.strokeWidth + 1 + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = this.format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          Object(raf["a" /* cancel */])(this.rafId);
          this.rafId = Object(raf["b" /* raf */])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', this.format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(raf["b" /* raf */])(this.animate);
      }
    },
    format: function format(rate) {
      return Math.min(Math.max(rate, 0), 100);
    }
  }
}));
// CONCATENATED MODULE: ./es/col/index.js

/* harmony default export */ var col = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.tag, {
      tag: "component",
      class: _vm.b((_obj = {}, _obj[_vm.span] = _vm.span, _obj["offset-" + _vm.offset] = _vm.offset, _obj)),
      style: _vm.style
    }, [_vm._t("default")], 2);

    var _obj;
  },
  name: 'col',
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/collapse/index.js

/* harmony default export */ var collapse = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'collapse',
  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },
  data: function data() {
    return {
      items: []
    };
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
}));
// CONCATENATED MODULE: ./es/collapse-item/index.js



/* harmony default export */ var collapse_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b({
        expanded: _vm.expanded
      }), {
        'van-hairline--top': _vm.index
      }]
    }, [_c('cell', _vm._b({
      class: _vm.b('title'),
      on: {
        "click": _vm.onClick
      }
    }, 'cell', _vm.$props, false), [_vm._t("title", null, {
      slot: "title"
    }), _vm._t("icon", null, {
      slot: "icon"
    }), _vm._t("value"), _vm._t("right-icon", null, {
      slot: "right-icon"
    })], 2), _vm.inited ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.show,
        expression: "show"
      }],
      ref: "wrapper",
      class: _vm.b('wrapper'),
      on: {
        "transitionend": _vm.onTransitionEnd
      }
    }, [_c('div', {
      ref: "content",
      class: _vm.b('content')
    }, [_vm._t("default")], 2)]) : _vm._e()], 1);
  },
  name: 'collapse-item',
  mixins: [find_parent],
  props: {
    name: [String, Number],
    icon: String,
    label: String,
    title: [String, Number],
    value: [String, Number],
    border: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return this.isDef(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      }

      this.$nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var contentHeight = content.clientHeight + 'px';
        wrapper.style.height = _expanded ? 0 : contentHeight;
        Object(raf["b" /* raf */])(function () {
          wrapper.style.height = _expanded ? contentHeight : 0;
        });
      });
    }
  },
  methods: {
    onClick: function onClick() {
      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      var expanded = !this.expanded;
      this.parent.switch(name, expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = null;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/contact-card/index.js

/* harmony default export */ var contact_card = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b([_vm.type]),
      attrs: {
        "center": "",
        "border": false,
        "is-link": _vm.editable,
        "icon": _vm.type === 'edit' ? 'contact' : 'add2'
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm.type === 'add' ? [_vm._v(_vm._s(_vm.addText || _vm.$t('addText')))] : [_c('div', [_vm._v(_vm._s(_vm.$t('name')) + "：" + _vm._s(_vm.name))]), _c('div', [_vm._v(_vm._s(_vm.$t('tel')) + "：" + _vm._s(_vm.tel))])]], 2);
  },
  name: 'contact-card',
  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/contact-edit/index.js







var defaultContact = {
  id: '',
  tel: '',
  name: ''
};
/* harmony default export */ var contact_edit = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('cell-group', [_c('field', {
      attrs: {
        "maxlength": "30",
        "label": _vm.$t('name'),
        "placeholder": _vm.$t('nameEmpty'),
        "error": _vm.errorInfo.name
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('name');
        }
      },
      model: {
        value: _vm.data.name,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        },
        expression: "data.name"
      }
    }), _c('field', {
      attrs: {
        "type": "tel",
        "label": _vm.$t('tel'),
        "placeholder": _vm.$t('telEmpty'),
        "error": _vm.errorInfo.tel
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('tel');
        }
      },
      model: {
        value: _vm.data.tel,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        },
        expression: "data.tel"
      }
    })], 1), _c('div', {
      class: _vm.b('buttons')
    }, [_c('van-button', {
      attrs: {
        "block": "",
        "loading": _vm.isSaving,
        "type": "danger"
      },
      on: {
        "click": _vm.onSave
      }
    }, [_vm._v(_vm._s(_vm.$t('save')))]), _vm.isEdit ? _c('van-button', {
      attrs: {
        "block": "",
        "loading": _vm.isDeleting
      },
      on: {
        "click": _vm.onDelete
      }
    }, [_vm._v(_vm._s(_vm.$t('delete')))]) : _vm._e()], 1)], 1);
  },
  name: 'contact-edit',
  components: {
    Field: field,
    VanButton: es_button
  },
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: mobile
    }
  },
  data: function data() {
    return {
      data: _extends({}, this.defaultContact, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = val;
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : this.$t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : this.$t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      es_dialog.confirm({
        message: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/contact-list/index.js



/* harmony default export */ var contact_list = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('radio-group', {
      attrs: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.$emit('input', $event);
        }
      }
    }, [_c('cell-group', _vm._l(_vm.list, function (item, index) {
      return _c('cell', {
        key: item.id,
        attrs: {
          "is-link": ""
        }
      }, [_c('radio', {
        attrs: {
          "name": item.id
        },
        on: {
          "click": function click($event) {
            _vm.$emit('select', item, index);
          }
        }
      }, [_c('div', {
        class: _vm.b('name')
      }, [_vm._v(_vm._s(item.name) + "，" + _vm._s(item.tel))])]), _c('icon', {
        class: _vm.b('edit'),
        attrs: {
          "slot": "right-icon",
          "name": "edit"
        },
        on: {
          "click": function click($event) {
            _vm.$emit('edit', item, index);
          }
        },
        slot: "right-icon"
      })], 1);
    }))], 1), _c('van-button', {
      class: _vm.b('add'),
      attrs: {
        "square": "",
        "size": "large",
        "type": "danger",
        "text": _vm.addText || _vm.$t('addText')
      },
      on: {
        "click": function click($event) {
          _vm.$emit('add');
        }
      }
    })], 1);
  },
  name: 'contact-list',
  components: {
    Radio: es_radio,
    RadioGroup: radio_group
  },
  props: {
    value: {},
    addText: String,
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/coupon-cell/index.js

/* harmony default export */ var coupon_cell = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell-group', {
      class: _vm.b()
    }, [_c('cell', {
      attrs: {
        "title": _vm.title || _vm.$t('title'),
        "value": _vm.value,
        "is-link": _vm.editable
      },
      on: {
        "click": function click($event) {
          _vm.$emit('click');
        }
      }
    })], 1);
  },
  name: 'coupon-cell',
  model: {
    prop: 'chosenCoupon'
  },
  props: {
    title: String,
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    value: function value() {
      var coupons = this.coupons;
      var coupon = coupons[this.chosenCoupon];

      if (coupon) {
        return "-\uFFE5" + (coupon.value / 100).toFixed(2);
      }

      return coupons.length === 0 ? this.$t('tips') : this.$t('count', coupons.length);
    }
  }
}));
// CONCATENATED MODULE: ./es/coupon-list/Item.js


/* harmony default export */ var coupon_list_Item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        disabled: _vm.disabled
      })
    }, [_c('div', {
      class: _vm.b('content')
    }, [_c('div', {
      class: _vm.b('head')
    }, [_c('h2', {
      domProps: {
        "innerHTML": _vm._s(_vm.faceAmount)
      }
    }), _c('p', [_vm._v(_vm._s(_vm.conditionMessage))])]), _c('div', {
      class: _vm.b('body')
    }, [_c('h2', [_vm._v(_vm._s(_vm.data.name))]), _c('p', [_vm._v(_vm._s(_vm.validPeriod))]), _vm.chosen ? _c('checkbox', {
      class: _vm.b('corner'),
      attrs: {
        "value": true
      }
    }) : _vm._e()], 1)]), _vm.disabled && _vm.data.reason ? _c('p', {
      class: _vm.b('reason')
    }, [_vm._v(_vm._s(_vm.data.reason))]) : _vm._e()]);
  },
  name: 'coupon-item',
  props: {
    data: Object,
    chosen: Boolean,
    disabled: Boolean
  },
  components: {
    Checkbox: es_checkbox
  },
  computed: {
    validPeriod: function validPeriod() {
      return this.$t('valid') + "\uFF1A" + this.getDate(this.data.startAt) + " - " + this.getDate(this.data.endAt);
    },
    faceAmount: function faceAmount() {
      return this.data.denominations !== 0 ? "<span>\xA5</span> " + this.formatAmount(this.data.denominations) : this.data.discount !== 0 ? this.formatDiscount(this.data.discount) : '';
    },
    conditionMessage: function conditionMessage() {
      var condition = this.data.originCondition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return this.data.originCondition === 0 ? this.$t('unlimited') : this.$t('condition', condition);
    }
  },
  methods: {
    getDate: function getDate(timeStamp) {
      var date = new Date(timeStamp * 1000);
      return date.getFullYear() + "." + this.padZero(date.getMonth() + 1) + "." + this.padZero(date.getDate());
    },
    padZero: function padZero(num) {
      return (num < 10 ? '0' : '') + num;
    },
    formatDiscount: function formatDiscount(discount) {
      return this.$t('discount', "" + (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1));
    },
    formatAmount: function formatAmount(amount) {
      return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
    }
  }
}));
// CONCATENATED MODULE: ./es/tab/index.js


/* harmony default export */ var tab = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isSelected,
        expression: "isSelected"
      }],
      class: _vm.b('pane')
    }, [_vm.inited ? _vm._t("default") : _vm._e(), _vm.$slots.title ? _c('div', {
      ref: "title"
    }, [_vm._t("title")], 2) : _vm._e()], 2);
  },
  name: 'tab',
  mixins: [find_parent],
  props: {
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    index: function index() {
      return this.parent.tabs.indexOf(this);
    },
    isSelected: function isSelected() {
      return this.index === this.parent.curActive;
    }
  },
  watch: {
    'parent.curActive': function parentCurActive() {
      this.inited = this.inited || this.isSelected;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  created: function created() {
    this.findParent('van-tabs');
  },
  mounted: function mounted() {
    var tabs = this.parent.tabs;
    var index = this.parent.$slots.default.indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);

    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.parent.tabs.splice(this.index, 1);
  }
}));
// CONCATENATED MODULE: ./es/tabs/index.js





/* harmony default export */ var tabs = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.type])
    }, [_c('div', {
      ref: "wrap",
      class: [_vm.b('wrap', {
        scrollable: _vm.scrollable
      }), {
        'van-hairline--top-bottom': _vm.type === 'line'
      }],
      style: _vm.wrapStyle
    }, [_c('div', {
      ref: "nav",
      class: _vm.b('nav', [_vm.type]),
      style: _vm.navStyle
    }, [_vm.type === 'line' ? _c('div', {
      class: _vm.b('line'),
      style: _vm.lineStyle
    }) : _vm._e(), _vm._l(_vm.tabs, function (tab, index) {
      return _c('div', {
        ref: "tabs",
        refInFor: true,
        staticClass: "van-tab",
        class: {
          'van-tab--active': index === _vm.curActive,
          'van-tab--disabled': tab.disabled
        },
        style: _vm.getTabStyle(tab, index),
        on: {
          "click": function click($event) {
            _vm.onClick(index);
          }
        }
      }, [_c('span', {
        ref: "title",
        refInFor: true,
        staticClass: "van-ellipsis"
      }, [_vm._v(_vm._s(tab.title))])]);
    })], 2)]), _c('div', {
      ref: "content",
      class: _vm.b('content')
    }, [_vm._t("default")], 2)]);
  },
  name: 'tabs',
  mixins: [touch],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {},
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold;
    },
    wrapStyle: function wrapStyle() {
      switch (this.position) {
        case 'top':
          return {
            top: this.offsetTop + 'px',
            position: 'fixed'
          };

        case 'bottom':
          return {
            top: 'auto',
            bottom: 0
          };

        default:
          return null;
      }
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color
      };
    }
  },
  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    color: function color() {
      this.setLine();
    },
    tabs: function tabs(_tabs) {
      this.correctActive(this.curActive || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.position === 'page-top' || this.position === 'content-bottom') {
        utils_scroll.setScrollTop(window, utils_scroll.getElementTop(this.$el));
      }
    },
    sticky: function sticky() {
      this.handlers(true);
    },
    swipeable: function swipeable() {
      this.handlers(true);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.correctActive(this.active);
    this.setLine();
    this.$nextTick(function () {
      _this.handlers(true);

      _this.scrollIntoView(true);
    });
  },
  activated: function activated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.handlers(true);

      _this2.scrollIntoView(true);
    });
  },
  deactivated: function deactivated() {
    this.handlers(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.handlers(false);
  },
  methods: {
    // whether to bind sticky listener
    handlers: function handlers(bind) {
      var events = this.events;
      var sticky = this.sticky && bind;
      var swipeable = this.swipeable && bind; // listen to window resize event

      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? on : off)(window, 'resize', this.setLine, true);
      } // listen to scroll event


      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || utils_scroll.getScrollEventTarget(this.$el);
        (sticky ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      } // listen to touch event


      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        var content = this.$refs.content;
        var action = swipeable ? on : off;
        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;
      var minSwipeDistance = 50;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },
    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = utils_scroll.getScrollTop(window) + this.offsetTop;
      var elTopToPageTop = utils_scroll.getElementTop(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;

      if (scrollTop > elBottomToPageTop) {
        this.position = 'bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'top';
      } else {
        this.position = '';
      }

      var scrollParams = {
        scrollTop: scrollTop,
        isFixed: this.position === 'top'
      };
      this.$emit('scroll', scrollParams);
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      this.$nextTick(function () {
        if (!_this3.$refs.tabs || _this3.type !== 'line') {
          return;
        }

        var tab = _this3.$refs.tabs[_this3.curActive];
        var width = _this3.lineWidth || tab.offsetWidth;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;
        _this3.lineStyle = {
          width: width + "px",
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px)",
          transitionDuration: _this3.duration + "s"
        };
      });
    },
    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      active = this.findAvailableTab(active, active < this.curActive);

      if (this.isDef(active) && active !== this.curActive) {
        this.$emit('input', active);

        if (this.curActive !== null) {
          this.$emit('change', active, this.tabs[active].title);
        }

        this.curActive = active;
      }
    },
    findAvailableTab: function findAvailableTab(index, reverse) {
      var diff = reverse ? -1 : 1;

      while (index >= 0 && index < this.tabs.length) {
        if (!this.tabs[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$tabs$index = this.tabs[index],
          title = _this$tabs$index.title,
          disabled = _this$tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.setCurActive(index);
        this.$emit('click', index, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      if (!this.scrollable || !this.$refs.tabs) {
        return;
      }

      var tab = this.$refs.tabs[this.curActive];
      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var offsetLeft = tab.offsetLeft,
          tabWidth = tab.offsetWidth;
      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate);
    },
    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to, immediate) {
      if (immediate) {
        el.scrollLeft += to - from;
        return;
      }

      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);

      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */

        if (++count < frames) {
          Object(raf["b" /* raf */])(animate);
        }
      };

      animate();
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        var title = _this4.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    },
    getTabStyle: function getTabStyle(item, index) {
      var style = {};
      var color = this.color;
      var active = index === this.curActive;
      var isCard = this.type === 'card';

      if (color) {
        if (!item.disabled && isCard !== active) {
          style.color = color;
        }

        if (!item.disabled && isCard && active) {
          style.backgroundColor = color;
        }

        if (isCard) {
          style.borderColor = color;
        }
      }

      return style;
    }
  }
}));
// CONCATENATED MODULE: ./es/coupon-list/index.js






/* harmony default export */ var coupon_list = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm.showExchangeBar ? _c('field', {
      class: _vm.b('field'),
      attrs: {
        "clearable": "",
        "border": false,
        "placeholder": _vm.inputPlaceholder || _vm.$t('placeholder'),
        "maxlength": 20
      },
      model: {
        value: _vm.currentCode,
        callback: function callback($$v) {
          _vm.currentCode = $$v;
        },
        expression: "currentCode"
      }
    }, [_c('van-button', {
      class: _vm.b('exchange'),
      attrs: {
        "slot": "button",
        "size": "small",
        "type": "danger",
        "text": _vm.exchangeButtonText || _vm.$t('exchange'),
        "loading": _vm.exchangeButtonLoading,
        "disabled": _vm.buttonDisabled
      },
      on: {
        "click": _vm.onClickExchangeButton
      },
      slot: "button"
    })], 1) : _vm._e(), _c('tabs', {
      class: _vm.b('tab'),
      attrs: {
        "line-width": 120
      },
      model: {
        value: _vm.tab,
        callback: function callback($$v) {
          _vm.tab = $$v;
        },
        expression: "tab"
      }
    }, [_c('tab', {
      attrs: {
        "title": _vm.title
      }
    }, [_c('div', {
      class: _vm.b('list'),
      style: _vm.listStyle
    }, [_vm._l(_vm.coupons, function (item, index) {
      return _c('coupon-item', {
        key: item.id || item.name,
        ref: "card",
        refInFor: true,
        attrs: {
          "data": item,
          "chosen": index === _vm.chosenCoupon
        },
        nativeOn: {
          "click": function click($event) {
            _vm.$emit('change', index);
          }
        }
      });
    }), !_vm.coupons.length ? _c('div', {
      class: _vm.b('empty')
    }, [_c('img', {
      attrs: {
        "src": "https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png"
      }
    }), _c('p', [_vm._v(_vm._s(_vm.$t('empty')))])]) : _vm._e()], 2)]), _c('tab', {
      attrs: {
        "title": _vm.disabledTitle
      }
    }, [_c('div', {
      class: _vm.b('list'),
      style: _vm.listStyle
    }, [_vm._l(_vm.disabledCoupons, function (item) {
      return _c('coupon-item', {
        key: item.id || item.name,
        attrs: {
          "disabled": "",
          "data": item
        }
      });
    }), !_vm.disabledCoupons.length ? _c('div', {
      class: _vm.b('empty')
    }, [_c('img', {
      attrs: {
        "src": "https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png"
      }
    }), _c('p', [_vm._v(_vm._s(_vm.$t('empty')))])]) : _vm._e()], 2)])], 1), _c('van-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showCloseButton,
        expression: "showCloseButton"
      }],
      class: _vm.b('close'),
      attrs: {
        "size": "large",
        "text": _vm.closeButtonText || _vm.$t('close')
      },
      on: {
        "click": function click($event) {
          _vm.$emit('change', -1);
        }
      }
    })], 1);
  },
  name: 'coupon-list',
  components: {
    Tab: tab,
    Tabs: tabs,
    Field: field,
    VanButton: es_button,
    CouponItem: coupon_list_Item
  },
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    disabledListTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    title: function title() {
      return this.$t('enable') + " (" + this.coupons.length + ")";
    },
    disabledTitle: function disabledTitle() {
      return this.$t('disabled') + " (" + this.disabledCoupons.length + ")";
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use v-model

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/.1.12.6@better-scroll/dist/bscroll.esm.js
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

var elementStyle = inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!inBrowser) {
    return false;
  }
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function bscroll_esm_offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

function offsetToBody(el) {
  var rect = el.getBoundingClientRect();

  return {
    left: -(rect.left + window.pageXOffset),
    top: -(rect.top + window.pageYOffset)
  };
}

var transform = prefixStyle('transform');

var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = inBrowser && prefixStyle('transition') in elementStyle;

var bscroll_esm_style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'click';

  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function dblclick(e) {
  click(e, 'dblclick');
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: false,
  stopPropagation: false,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: false,
  /**
   * for infinity
   * infinity: {
   *   render(item, div) {
   *   },
   *   createTombstone() {
   *   },
   *   fetch(count) {
   *   }
   * }
   */
  infinity: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this.setScale(1);

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype.setScale = function (scale) {
    this.lastScale = isUndef(this.scale) ? scale : this.scale;
    this.scale = scale;
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, bscroll_esm_style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
    if (this.options.zoom) {
      this._initZoom();
    }
    if (this.options.infinity) {
      this._initInfinite();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    var key = this.useTransition ? 'isInTransition' : 'isAnimating';
    Object.defineProperty(this, key, {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoomStart(e);
        }
        break;
      case 'touchmove':
      case 'mousemove':
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoom(e);
        } else {
          this._move(e);
        }
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        if (this.scaled) {
          this._zoomEnd(e);
        } else {
          this._end(e);
        }
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = Math.round(scrollerRect.width * this.scale);
    this.scrollerHeight = Math.round(scrollerRect.height * this.scale);

    this.relativeX = scrollerRect.left;
    this.relativeY = scrollerRect.top;

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left;
      this.relativeY -= wrapperRect.top;
    }

    this.minScrollX = 0;
    this.minScrollY = 0;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      if (!this.options.infinity) {
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      }
      if (this.maxScrollX < 0) {
        this.maxScrollX -= this.relativeX;
        this.minScrollX = -this.relativeX;
      } else if (this.scale > 1) {
        this.maxScrollX = this.maxScrollX / 2 - this.relativeX;
        this.minScrollX = this.maxScrollX;
      }
      if (this.maxScrollY < 0) {
        this.maxScrollY -= this.relativeY;
        this.minScrollY = -this.relativeY;
      } else if (this.scale > 1) {
        this.maxScrollY = this.maxScrollY / 2 - this.relativeY;
        this.minScrollY = this.maxScrollY;
      }
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = bscroll_esm_offset(this.wrapper);

    this.trigger('refresh');

    !this.scaled && this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function fn(t) {
      return 1 + --t * t * t * t * t;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function fn(t) {
      return t * (2 - t);
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function fn(t) {
      return 1 - --t * t * t * t;
    }
  }
};

function momentum(current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > upperMargin) {
    destination = wrapperSize ? Math.min(upperMargin + wrapperSize / 4, upperMargin + wrapperSize / rate * speed) : upperMargin;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = 1;

var PROBE_REALTIME = 3;

function warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    var top = false;
    var bottom = false;
    var left = false;
    var right = false;
    // Slow down or stop if outside of the boundaries
    var bounce = this.options.bounce;
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top;
      bottom = bounce.bottom === undefined ? true : bounce.bottom;
      left = bounce.left === undefined ? true : bounce.left;
      right = bounce.right === undefined ? true : bounce.right;
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if (newX > this.minScrollX && left || newX < this.maxScrollX && right) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX;
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if (newY > this.minScrollY && top || newY < this.maxScrollY && bottom) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

    this._translate(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var top = false;
      var bottom = false;
      var left = false;
      var right = false;
      var bounce = this.options.bounce;
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top;
        bottom = bounce.bottom === undefined ? true : bounce.bottom;
        left = bounce.left === undefined ? true : bounce.left;
        right = bounce.right === undefined ? true : bounce.right;
      }
      var wrapperWidth = this.directionX === DIRECTION_RIGHT && left || this.directionX === DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === DIRECTION_DOWN && top || this.directionY === DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.classList.contains(this.options.wheel.wheelWrapperClass)) {
          var index = Math.abs(Math.round(this.y / this.itemHeight));
          var _offset = Math.round((this.pointY + offsetToBody(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          var _dblclick = this.options.dblclick;
          var dblclickTrigged = false;
          if (_dblclick && this.lastClickTime) {
            var _dblclick$delay = _dblclick.delay,
                delay = _dblclick$delay === undefined ? 300 : _dblclick$delay;

            if (getNow() - this.lastClickTime < delay) {
              dblclickTrigged = true;
              dblclick(e);
            }
          }
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          this.lastClickTime = dblclickTrigged ? null : getNow();
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[bscroll_esm_style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[bscroll_esm_style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[bscroll_esm_style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[bscroll_esm_style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    var needReset = !this.pulling || this.movingDirectionY === DIRECTION_UP;
    if (needReset && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y, scale) {
    assert(!isUndef(x) && !isUndef(y), 'Translate x or y is null or undefined.');
    if (isUndef(scale)) {
      scale = this.scale;
    }
    if (this.options.useTransform) {
      this.scrollerStyle[bscroll_esm_style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[bscroll_esm_style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;
    this.setScale(scale);

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startScale = this.lastScale;
    var destScale = this.scale;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY, destScale);

        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;
      var newScale = (destScale - startScale) * easing + startScale;

      me._translate(newX, newY, newScale);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === PROBE_REALTIME) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === PROBE_REALTIME) {
        this._startProbe();
      }

      if (!time && (x !== this.x || y !== this.y)) {
        this.trigger('scroll', {
          x: x,
          y: y
        });
        // force reflow to put everything in position
        this._reflow = document.body.offsetHeight;
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
          this.trigger('scrollEnd', {
            x: x,
            y: y
          });
        }
      }

      if (this.options.wheel) {
        if (y > this.minScrollY) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && !el.classList.contains(this.options.wheel.wheelItemClass)) {
      return;
    }

    var pos = bscroll_esm_offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[bscroll_esm_style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      cancelAnimationFrame(this.probeTimer);
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      cancelAnimationFrame(this.animateTimer);
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');
    if (this.options.useTransition) {
      cancelAnimationFrame(this.probeTimer);
    } else {
      cancelAnimationFrame(this.animateTimer);
    }
    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 1) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      } else {
        // Loop does not make any sense if there is only one child.
        snap.loop = false;
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      _this._checkSnapLoop();

      var initPageX = snap._loopX ? 1 : 0;
      var initPageY = snap._loopY ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0);

      // Update snap threshold if needed.
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (snap._loopX) {
          if (_this.currentPage.pageX === 0) {
            _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
          }
          if (_this.currentPage.pageX === _this.pages.length - 1) {
            _this._goToPage(1, _this.currentPage.pageY, 0);
          }
        } else {
          if (_this.currentPage.pageY === 0) {
            _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0);
          }
          if (_this.currentPage.pageY === _this.pages[0].length - 1) {
            _this._goToPage(_this.currentPage.pageX, 1, 0);
          }
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._checkSnapLoop = function () {
    var snap = this.options.snap;

    if (!snap.loop || !this.pages || !this.pages.length) {
      return;
    }

    if (this.pages.length > 1) {
      snap._loopX = true;
    }
    if (this.pages[0] && this.pages[0].length > 1) {
      snap._loopY = true;
    }
    if (snap._loopX && snap._loopY) {
      warn('Loop does not support two direction at the same time.');
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > this.minScrollX) {
      x = this.minScrollX;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > this.minScrollY) {
      y = this.minScrollY;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];

    var snap = this.options.snap;

    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    if (snap.loop) {
      var len = void 0;
      if (snap._loopX) {
        len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      } else {
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
        }
        y += 1;
      }
    }
    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (!snap) {
      return null;
    }

    if (snap.loop) {
      var currentPage = void 0;
      if (snap._loopX) {
        currentPage = extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
      } else {
        currentPage = extend({}, this.currentPage, {
          pageY: this.currentPage.pageY - 1
        });
      }
      return currentPage;
    }
    return this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
      warn('wheel option selectedIndex is required!');
    }
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  if (this._shouldShow()) {
    this.transitionTime();
    this._calculate();
    this.updatePosition();
  }
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[bscroll_esm_style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[bscroll_esm_style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[bscroll_esm_style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[bscroll_esm_style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[bscroll_esm_style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._shouldShow = function () {
  if (this.direction === 'vertical' && this.scroller.hasVerticalScroll || this.direction === 'horizontal' && this.scroller.hasHorizontalScroll) {
    this.wrapper.style.display = '';
    return true;
  }
  this.wrapper.style.display = 'none';
  return false;
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };

  BScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  BScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  BScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

  BScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      clearTimeout(_this.mouseWheelEndTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i,
        _options$mouseWheel$e = _options$mouseWheel.easeTime,
        easeTime = _options$mouseWheel$e === undefined ? 300 : _options$mouseWheel$e;


    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap && !easeTime) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.movingDirectionX = this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.movingDirectionY = this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    var needTriggerEnd = this.y === newY;
    this.scrollTo(newX, newY, easeTime, ease.swipe);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
    clearTimeout(this.mouseWheelEndTimer);
    if (needTriggerEnd) {
      this.mouseWheelEndTimer = setTimeout(function () {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }, easeTime);
    }
  };
}

function zoomMixin(BScroll) {
  BScroll.prototype._initZoom = function () {
    var _options$zoom = this.options.zoom,
        _options$zoom$start = _options$zoom.start,
        start = _options$zoom$start === undefined ? 1 : _options$zoom$start,
        _options$zoom$min = _options$zoom.min,
        min = _options$zoom$min === undefined ? 1 : _options$zoom$min,
        _options$zoom$max = _options$zoom.max,
        max = _options$zoom$max === undefined ? 4 : _options$zoom$max;

    this.scale = Math.min(Math.max(start, min), max);
    this.setScale(this.scale);
    this.scrollerStyle[bscroll_esm_style.transformOrigin] = '0 0';
  };

  BScroll.prototype._zoomTo = function (scale, originX, originY, startScale) {
    this.scaled = true;

    var lastScale = scale / (startScale || this.scale);
    this.setScale(scale);

    this.refresh();

    var newX = Math.round(this.startX - (originX - this.relativeX) * (lastScale - 1));
    var newY = Math.round(this.startY - (originY - this.relativeY) * (lastScale - 1));

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    if (this.x !== newX || this.y !== newY) {
      this.scrollTo(newX, newY, this.options.bounceTime);
    }

    this.scaled = false;
  };

  BScroll.prototype.zoomTo = function (scale, x, y) {
    var _offsetToBody = offsetToBody(this.wrapper),
        left = _offsetToBody.left,
        top = _offsetToBody.top;

    var originX = x + left - this.x;
    var originY = y + top - this.y;
    this._zoomTo(scale, originX, originY);
  };

  BScroll.prototype._zoomStart = function (e) {
    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);

    this.startDistance = getDistance(deltaX, deltaY);
    this.startScale = this.scale;

    var _offsetToBody2 = offsetToBody(this.wrapper),
        left = _offsetToBody2.left,
        top = _offsetToBody2.top;

    this.originX = Math.abs(firstFinger.pageX + secondFinger.pageX) / 2 + left - this.x;
    this.originY = Math.abs(firstFinger.pageY + secondFinger.pageY) / 2 + top - this.y;

    this.trigger('zoomStart');
  };

  BScroll.prototype._zoom = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);
    var distance = getDistance(deltaX, deltaY);
    var scale = distance / this.startDistance * this.startScale;

    this.scaled = true;

    var _options$zoom2 = this.options.zoom,
        _options$zoom2$min = _options$zoom2.min,
        min = _options$zoom2$min === undefined ? 1 : _options$zoom2$min,
        _options$zoom2$max = _options$zoom2.max,
        max = _options$zoom2$max === undefined ? 4 : _options$zoom2$max;


    if (scale < min) {
      scale = 0.5 * min * Math.pow(2.0, scale / min);
    } else if (scale > max) {
      scale = 2.0 * max * Math.pow(0.5, max / scale);
    }

    var lastScale = scale / this.startScale;

    var x = this.startX - (this.originX - this.relativeX) * (lastScale - 1);
    var y = this.startY - (this.originY - this.relativeY) * (lastScale - 1);

    this.setScale(scale);

    this.scrollTo(x, y, 0);
  };

  BScroll.prototype._zoomEnd = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.isInTransition = false;
    this.isAnimating = false;
    this.initiated = 0;

    var _options$zoom3 = this.options.zoom,
        _options$zoom3$min = _options$zoom3.min,
        min = _options$zoom3$min === undefined ? 1 : _options$zoom3$min,
        _options$zoom3$max = _options$zoom3.max,
        max = _options$zoom3$max === undefined ? 4 : _options$zoom3$max;


    var scale = this.scale > max ? max : this.scale < min ? min : this.scale;

    this._zoomTo(scale, this.originX, this.originY, this.startScale);

    this.trigger('zoomEnd');
  };
}

// import { ease } from '../util/ease'

// Number of items to instantiate beyond current view in the scroll direction.
var RUNWAY_ITEMS = 30;

// Number of items to instantiate beyond current view in the opposite direction.
var RUNWAY_ITEMS_OPPOSITE = 10;

// The animation interval (in ms) for fading in content from tombstones.
var ANIMATION_DURATION_MS = 200;

// The number of pixels of default additional length to allow scrolling to.
var DEFAULT_SCROLL_RUNWAY = 2000;

function infiniteMixin(BScroll) {
  BScroll.prototype._initInfinite = function () {
    this.options.probeType = 3;
    this.maxScrollY = -DEFAULT_SCROLL_RUNWAY;
    this.infiniteScroller = new InfiniteScroller(this, this.options.infinity);
  };
}

function isTombstoneNode(node) {
  if (node && node.classList) {
    return node.classList.contains('tombstone');
  }
}

function InfiniteScroller(scroller, options) {
  var _this = this;

  this.options = options;
  assert(typeof this.options.createTombstone === 'function', 'Infinite scroll need createTombstone Function to create tombstone');

  assert(typeof this.options.fetch === 'function', 'Infinite scroll need fetch Function to fetch new data.');

  assert(typeof this.options.render === 'function', 'Infinite scroll need render Function to render each item.');

  this.firstAttachedItem = 0;
  this.lastAttachedItem = 0;

  this.anchorScrollTop = 0;
  this.anchorItem = {
    index: 0,
    offset: 0
  };
  this.tombstoneHeight = 0;
  this.tombstoneWidth = 0;
  this.tombstones = [];

  this.items = [];
  this.loadedItems = 0;
  this.requestInProgress = false;
  this.hasMore = true;

  this.scroller = scroller;
  this.wrapperEl = this.scroller.wrapper;
  this.scrollerEl = this.scroller.scroller;
  this.scroller.on('scroll', function () {
    _this.onScroll();
  });
  this.scroller.on('resize', function () {
    _this.onResize();
  });

  this.onResize();
}

InfiniteScroller.prototype.onScroll = function () {
  var scrollTop = -this.scroller.y;
  var delta = scrollTop - this.anchorScrollTop;
  if (scrollTop === 0) {
    this.anchorItem = {
      index: 0,
      offset: 0
    };
  } else {
    this.anchorItem = this._calculateAnchoredItem(this.anchorItem, delta);
  }

  this.anchorScrollTop = scrollTop;
  var lastScreenItem = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight);

  var start = this.anchorItem.index;
  var end = lastScreenItem.index;
  if (delta < 0) {
    start -= RUNWAY_ITEMS;
    end += RUNWAY_ITEMS_OPPOSITE;
  } else {
    start -= RUNWAY_ITEMS_OPPOSITE;
    end += RUNWAY_ITEMS;
  }
  this.fill(start, end);
  this.maybeRequestContent();
};

InfiniteScroller.prototype.onResize = function () {
  var tombstone = this.options.createTombstone();
  tombstone.style.position = 'absolute';
  this.scrollerEl.appendChild(tombstone);
  tombstone.style.display = '';
  this.tombstoneHeight = tombstone.offsetHeight;
  this.tombstoneWidth = tombstone.offsetWidth;
  this.scrollerEl.removeChild(tombstone);

  for (var i = 0; i < this.items.length; i++) {
    this.items[i].height = this.items[i].width = 0;
  }

  this.onScroll();
};

InfiniteScroller.prototype.fill = function (start, end) {
  this.firstAttachedItem = Math.max(0, start);
  if (!this.hasMore) {
    end = Math.min(end, this.items.length);
  }
  this.lastAttachedItem = end;
  this.attachContent();
};

InfiniteScroller.prototype.maybeRequestContent = function () {
  var _this2 = this;

  if (this.requestInProgress || !this.hasMore) {
    return;
  }
  var itemsNeeded = this.lastAttachedItem - this.loadedItems;
  if (itemsNeeded <= 0) {
    return;
  }
  this.requestInProgress = true;
  this.options.fetch(itemsNeeded).then(function (items) {
    _this2.requestInProgress = false;
    if (items) {
      _this2.addContent(items);
    } else {
      _this2.hasMore = false;
      var tombstoneLen = _this2._removeTombstones();
      var curPos = 0;
      if (_this2.anchorItem.index <= _this2.items.length) {
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.resetPosition(_this2.scroller.options.bounceTime);
      } else {
        _this2.anchorItem.index -= tombstoneLen;
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.stop();
        _this2.scroller.resetPosition();
        _this2.onScroll();
      }
    }
  });
};

InfiniteScroller.prototype.addContent = function (items) {
  for (var i = 0; i < items.length; i++) {
    if (this.items.length <= this.loadedItems) {
      this._addItem();
    }
    this.items[this.loadedItems++].data = items[i];
  }
  this.attachContent();
  this.maybeRequestContent();
};

InfiniteScroller.prototype.attachContent = function () {
  var unusedNodes = this._collectUnusedNodes();
  var tombstoneAnimations = this._createDOMNodes(unusedNodes);
  this._cleanupUnusedNodes(unusedNodes);
  this._cacheNodeSize();
  var curPos = this._fixScrollPosition();
  this._setupAnimations(tombstoneAnimations, curPos);
};

InfiniteScroller.prototype.resetMore = function () {
  this.hasMore = true;
};

InfiniteScroller.prototype._removeTombstones = function () {
  var markIndex = void 0;
  var tombstoneLen = 0;
  var itemLen = this.items.length;
  for (var i = 0; i < itemLen; i++) {
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if ((!currentNode || isTombstoneNode(currentNode)) && !currentData) {
      if (!markIndex) {
        markIndex = i;
      }
      if (currentNode) {
        this.scrollerEl.removeChild(currentNode);
      }
    }
  }
  tombstoneLen = itemLen - markIndex;
  this.items.splice(markIndex);
  this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length);
  return tombstoneLen;
};

InfiniteScroller.prototype._collectUnusedNodes = function () {
  var unusedNodes = [];
  for (var i = 0; i < this.items.length; i++) {
    // Skip the items which should be visible.
    if (i === this.firstAttachedItem) {
      i = this.lastAttachedItem - 1;
      continue;
    }
    var currentNode = this.items[i].node;
    if (currentNode) {
      if (isTombstoneNode(currentNode)) {
        // Cache tombstones for reuse
        this.tombstones.push(currentNode);
        this.tombstones[this.tombstones.length - 1].style.display = 'none';
      } else {
        unusedNodes.push(currentNode);
      }
    }
    this.items[i].node = null;
  }
  return unusedNodes;
};

InfiniteScroller.prototype._createDOMNodes = function (unusedNodes) {
  var tombstoneAnimations = {};
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    while (this.items.length <= i) {
      this._addItem();
    }
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if (currentNode) {
      if (isTombstoneNode(currentNode) && currentData) {
        currentNode.style.zIndex = 1;
        tombstoneAnimations[i] = [currentNode, this.items[i].top - this.anchorScrollTop];
        this.items[i].node = null;
      } else {
        continue;
      }
    }
    var node = currentData ? this.options.render(currentData, unusedNodes.pop()) : this._getTombStone();
    node.style.position = 'absolute';
    this.items[i].top = -1;
    this.scrollerEl.appendChild(node);
    this.items[i].node = node;
  }
  return tombstoneAnimations;
};

InfiniteScroller.prototype._cleanupUnusedNodes = function (unusedNodes) {
  while (unusedNodes.length) {
    this.scrollerEl.removeChild(unusedNodes.pop());
  }
};

InfiniteScroller.prototype._cacheNodeSize = function () {
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    // Only cache the height if we have the real contents, not a placeholder.
    if (this.items[i].data && !this.items[i].height) {
      this.items[i].height = this.items[i].node.offsetHeight;
      this.items[i].width = this.items[i].node.offsetWidth;
    }
  }
};

InfiniteScroller.prototype._fixScrollPosition = function () {
  this.anchorScrollTop = 0;
  for (var _i = 0; _i < this.anchorItem.index; _i++) {
    this.anchorScrollTop += this.items[_i].height || this.tombstoneHeight;
  }
  this.anchorScrollTop += this.anchorItem.offset;

  // Position all nodes.
  var curPos = this.anchorScrollTop - this.anchorItem.offset;
  var i = this.anchorItem.index;
  while (i > this.firstAttachedItem) {
    curPos -= this.items[i - 1].height || this.tombstoneHeight;
    i--;
  }

  return curPos;
};

InfiniteScroller.prototype._setupAnimations = function (tombstoneAnimations, curPos) {
  var _this3 = this;

  for (var i in tombstoneAnimations) {
    var animation = tombstoneAnimations[i];
    this.items[i].node.style.transform = 'translateY(' + (this.anchorScrollTop + animation[1]) + 'px) scale(' + this.tombstoneWidth / this.items[i].width + ', ' + this.tombstoneHeight / this.items[i].height + ')';
    // Call offsetTop on the nodes to be animated to force them to apply current transforms.
    /* eslint-disable no-unused-expressions */
    this.items[i].node.offsetTop;
    animation[0].offsetTop;
    this.items[i].node.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms';
  }

  for (var _i2 = this.firstAttachedItem; _i2 < this.lastAttachedItem; _i2++) {
    var _animation = tombstoneAnimations[_i2];
    if (_animation) {
      var tombstoneNode = _animation[0];
      tombstoneNode.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms, opacity ' + ANIMATION_DURATION_MS + 'ms';
      tombstoneNode.style.transform = 'translateY(' + curPos + 'px) scale(' + this.items[_i2].width / this.tombstoneWidth + ', ' + this.items[_i2].height / this.tombstoneHeight + ')';
      tombstoneNode.style.opacity = 0;
    }
    if (curPos !== this.items[_i2].top) {
      if (!_animation) {
        this.items[_i2].node.style.transition = '';
      }
      this.items[_i2].node.style.transform = 'translateY(' + curPos + 'px)';
    }
    this.items[_i2].top = curPos;
    curPos += this.items[_i2].height || this.tombstoneHeight;
  }

  this.scroller.maxScrollY = -(curPos - this.wrapperEl.offsetHeight + (this.hasMore ? DEFAULT_SCROLL_RUNWAY : 0));

  setTimeout(function () {
    for (var _i3 in tombstoneAnimations) {
      var _animation2 = tombstoneAnimations[_i3];
      _animation2[0].style.display = 'none';
      // Tombstone can be recycled now.
      _this3.tombstones.push(_animation2[0]);
    }
  }, ANIMATION_DURATION_MS);
};

InfiniteScroller.prototype._getTombStone = function () {
  var tombstone = this.tombstones.pop();
  if (tombstone) {
    tombstone.style.display = '';
    tombstone.style.opacity = 1;
    tombstone.style.transform = '';
    tombstone.style.transition = '';
    return tombstone;
  }
  return this.options.createTombstone();
};

InfiniteScroller.prototype._addItem = function () {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};

InfiniteScroller.prototype._calculateAnchoredItem = function (initialAnchor, delta) {
  if (delta === 0) {
    return initialAnchor;
  }
  var i = initialAnchor.index;
  var tombstones = 0;

  delta += initialAnchor.offset;
  if (delta < 0) {
    while (delta < 0 && i > 0 && this.items[i - 1].height) {
      delta += this.items[i - 1].height;
      i--;
    }
    tombstones = Math.max(-i, Math.ceil(Math.min(delta, 0) / this.tombstoneHeight));
  } else {
    while (delta > 0 && i < this.items.length && this.items[i].height && this.items[i].height < delta) {
      delta -= this.items[i].height;
      i++;
    }
    if (i >= this.items.length || !this.items[i].height) {
      tombstones = Math.floor(Math.max(delta, 0) / this.tombstoneHeight);
    }
  }
  i += tombstones;
  delta -= tombstones * this.tombstoneHeight;

  return {
    index: i,
    offset: delta
  };
};

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);
zoomMixin(BScroll);
infiniteMixin(BScroll);

BScroll.Version = '1.12.6';

/* harmony default export */ var bscroll_esm = (BScroll);

// CONCATENATED MODULE: ./es/crumb/index.js


/* harmony default export */ var crumb = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      style: {
        width: _vm.contentWidth + 'px'
      }
    }, [_vm._t("default")], 2)]);
  },
  name: 'crumb',
  data: function data() {
    return {
      contentWidth: 0
    };
  },
  mounted: function mounted() {
    this.initScroll();
  },
  updated: function updated() {
    this.initScroll();
  },
  methods: {
    initScroll: function initScroll() {
      var _this = this;

      this.$nextTick(function () {
        var width = _this.$children.reduce(function (width, $item) {
          return width + $item.$el.offsetWidth + 1;
        }, 0);

        _this.contentWidth = width;

        _this.$nextTick(function () {
          new bscroll_esm(_this.$el, {
            scrollX: true,
            click: true,
            startX: _this.$el.offsetWidth - width > 0 ? 0 : _this.$el.offsetWidth - width
          });
        });
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/crumb-item/index.js

/* harmony default export */ var crumb_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'crumb-item',
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
}));
// CONCATENATED MODULE: ./es/datetime-picker/index.js



var currentYear = new Date().getFullYear();

var isValidDate = function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};

/* harmony default export */ var datetime_picker = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('picker', {
      ref: "picker",
      attrs: {
        "title": _vm.title,
        "columns": _vm.columns,
        "item-height": _vm.itemHeight,
        "show-toolbar": _vm.showToolbar,
        "visible-item-count": _vm.visibleItemCount,
        "confirm-button-text": _vm.confirmButtonText,
        "cancel-button-text": _vm.cancelButtonText
      },
      on: {
        "change": _vm.onChange,
        "confirm": _vm.onConfirm,
        "cancel": function cancel($event) {
          _vm.$emit('cancel');
        }
      }
    });
  },
  name: 'datetime-picker',
  components: {
    Picker: picker
  },
  props: {
    value: {},
    title: String,
    itemHeight: Number,
    visibleItemCount: Number,
    confirmButtonText: String,
    cancelButtonText: String,
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    formatter: {
      type: Function,
      default: function _default(type, value) {
        return value;
      }
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isValidDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isValidDate
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  },
  data: function data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },
  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
      if (!isEqual) this.innerValue = val;
    },
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [{
          type: 'hour',
          range: [this.minHour, this.maxHour]
        }, {
          type: 'minute',
          range: [this.minMinute, this.maxMinute]
        }];
      }

      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (_ref) {
        var type = _ref.type,
            range = _ref.range;

        var values = _this.times(range[1] - range[0] + 1, function (index) {
          var value = range[0] + index;
          value = value < 10 ? "0" + value : "" + value;
          return _this.formatter(type, value);
        });

        return {
          values: values
        };
      });
      return results;
    }
  },
  methods: {
    pad: function pad(val) {
      return ("00" + val).slice(-2);
    },
    correctValue: function correctValue(value) {
      // validate value
      var isDateType = this.type !== 'time';

      if (isDateType && !isValidDate(value)) {
        value = this.minDate;
      } else if (!value) {
        var _minHour = this.minHour;
        value = (_minHour > 10 ? _minHour : '0' + _minHour) + ":00";
      } // time type


      if (!isDateType) {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        hour = this.pad(Object(utils["g" /* range */])(hour, this.minHour, this.maxHour));
        minute = this.pad(Object(utils["g" /* range */])(minute, this.minMinute, this.maxMinute));
        return hour + ":" + minute;
      } // date type


      var _this$getBoundary3 = this.getBoundary('max', value),
          maxYear = _this$getBoundary3.maxYear,
          maxDate = _this$getBoundary3.maxDate,
          maxMonth = _this$getBoundary3.maxMonth,
          maxHour = _this$getBoundary3.maxHour,
          maxMinute = _this$getBoundary3.maxMinute;

      var _this$getBoundary4 = this.getBoundary('min', value),
          minYear = _this$getBoundary4.minYear,
          minDate = _this$getBoundary4.minDate,
          minMonth = _this$getBoundary4.minMonth,
          minHour = _this$getBoundary4.minHour,
          minMinute = _this$getBoundary4.minMinute;

      var minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
      var maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
      value = Math.max(value, minDay);
      value = Math.min(value, maxDay);
      return new Date(value);
    },
    times: function times(n, iteratee) {
      var index = -1;
      var result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }

      return result;
    },
    getBoundary: function getBoundary(type, value) {
      var _ref2;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref2 = {}, _ref2[type + "Year"] = year, _ref2[type + "Month"] = month, _ref2[type + "Date"] = date, _ref2[type + "Hour"] = hour, _ref2[type + "Minute"] = minute, _ref2;
    },
    getTrueValue: function getTrueValue(formattedValue) {
      if (!formattedValue) return;

      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }

      return parseInt(formattedValue, 10);
    },
    getMonthEndDay: function getMonthEndDay(year, month) {
      if (this.isShortMonth(month)) {
        return 30;
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28;
      } else {
        return 31;
      }
    },
    isLeapYear: function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    isShortMonth: function isShortMonth(month) {
      return [4, 6, 9, 11].indexOf(month) > -1;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      var values = picker.getValues();
      var value;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
        var year = this.getTrueValue(values[0]);
        var month = this.getTrueValue(values[1]);
        var maxDate = this.getMonthEndDay(year, month);
        var date = this.getTrueValue(values[2]);

        if (this.type === 'year-month') {
          date = 1;
        }

        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;

        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }

        value = new Date(year, month - 1, date, hour, minute);
      }

      value = this.correctValue(value);
      this.innerValue = value;
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this3 = this;

      var values = [];
      var formatter = this.formatter,
          pad = this.pad;

      if (this.type === 'time') {
        var currentValue = value.split(':');
        values = [formatter('hour', currentValue[0]), formatter('minute', currentValue[1])];
      } else {
        values = [formatter('year', "" + value.getFullYear()), formatter('month', pad(value.getMonth() + 1)), formatter('day', pad(value.getDate()))];

        if (this.type === 'datetime') {
          values.push(formatter('hour', pad(value.getHours())), formatter('minute', pad(value.getMinutes())));
        }

        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(function () {
        _this3.$refs.picker.setValues(values);
      });
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  }
}));
// CONCATENATED MODULE: ./es/search/index.js



/* harmony default export */ var search = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        'show-action': _vm.showAction
      }),
      style: {
        background: _vm.background
      }
    }, [_c('field', _vm._g(_vm._b({
      attrs: {
        "clearable": "",
        "type": "search",
        "value": _vm.value,
        "border": false,
        "left-icon": "search"
      }
    }, 'field', _vm.$attrs, false), _vm.listeners)), _vm.showAction ? _c('div', {
      class: _vm.b('action')
    }, [_vm._t("action", [_c('div', {
      on: {
        "click": _vm.onBack
      }
    }, [_vm._v(_vm._s(_vm.$t('cancel')))])])], 2) : _vm._e()], 1);
  },
  name: 'search',
  inheritAttrs: false,
  components: {
    Field: field
  },
  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },
  computed: {
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },
  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onKeypress: function onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }

      this.$emit('keypress', event);
    },
    onBack: function onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./es/pull-refresh/index.js



/* harmony default export */ var pull_refresh = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('track'),
      style: _vm.style,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": _vm.onTouchMove,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_c('div', {
      class: _vm.b('head')
    }, [_vm.status === 'normal' ? _vm._t("normal") : _vm._e(), _vm.status === 'pulling' ? _vm._t("pulling", [_c('span', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.pullingText || _vm.$t('pulling')))])]) : _vm._e(), _vm.status === 'loosing' ? _vm._t("loosing", [_c('span', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.loosingText || _vm.$t('loosing')))])]) : _vm._e(), _vm.status === 'loading' ? _vm._t("loading", [_c('div', {
      class: _vm.b('loading')
    }, [_c('loading'), _c('span', [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])], 1)]) : _vm._e()], 2), _vm._t("default")], 2)]);
  },
  name: 'pull-refresh',
  mixins: [touch],
  props: {
    disabled: Boolean,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },
  computed: {
    style: function style() {
      return {
        transition: this.duration + "ms",
        transform: "translate3d(0," + this.height + "px, 0)"
      };
    },
    untouchable: function untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },
  mounted: function mounted() {
    this.scrollEl = utils_scroll.getScrollEventTarget(this.$el);
  },
  watch: {
    value: function value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.untouchable) {
        return;
      }

      if (this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.cancelable && event.preventDefault();
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.untouchable) {
        return;
      }

      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = utils_scroll.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(height) {
      var headHeight = this.headHeight;
      return height < headHeight ? height : height < headHeight * 2 ? Math.round(headHeight + (height - headHeight) / 2) : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },
    getStatus: function getStatus(height, isLoading) {
      this.height = height;
      var status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/row/index.js

/* harmony default export */ var row = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.tag, {
      tag: "component",
      class: _vm.b((_obj = {
        flex: _vm.flex
      }, _obj["align-" + _vm.align] = _vm.flex && _vm.align, _obj["justify-" + _vm.justify] = _vm.flex && _vm.justify, _obj)),
      style: _vm.style
    }, [_vm._t("default")], 2);

    var _obj;
  },
  name: 'row',
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    flex: function flex() {
      return this.type === 'flex';
    },
    style: function style() {
      var margin = "-" + Number(this.gutter) / 2 + "px";
      return this.gutter ? {
        marginLeft: margin,
        marginRight: margin
      } : {};
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/.1.0.7@vue2-better-scroll/dist/vue-better-scroll.js
var vue_better_scroll = __webpack_require__(3);
var vue_better_scroll_default = /*#__PURE__*/__webpack_require__.n(vue_better_scroll);

// CONCATENATED MODULE: ./es/employee-field/index.js















 // import axios from 'axios';

/* harmony default export */ var employee_field = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "wq_employee_field"
    }, [_c('div', {
      staticClass: "employee_field_wrapper"
    }, [_vm.searchData && _vm.searchData.search.show ? _c('van-search', {
      ref: "search",
      attrs: {
        "placeholder": _vm.searchData.search.accessory,
        "show-action": _vm.showAction
      },
      on: {
        "change": function change($event) {
          _vm.onKeyup(_vm.searchData.search.keyupSearch);
        },
        "focus": _vm.onFocus,
        "cancel": _vm.onCancel
      },
      model: {
        value: _vm.search,
        callback: function callback($$v) {
          _vm.search = $$v;
        },
        expression: "search"
      }
    }, [_c('template', {
      slot: "action"
    }, [!_vm.searchData.search.keyupSearch ? _c('div', {
      staticStyle: {
        "padding": "0 10px"
      },
      style: _vm.search.trim().length > 0 ? '' : 'color: rgba(59, 155, 248, 0.36)',
      on: {
        "click": _vm.searchEmployee
      }
    }, [_vm._v("确定")]) : _vm._e(), _c('div', {
      staticStyle: {
        "padding-right": "10px"
      },
      on: {
        "click": _vm.onCancel
      }
    }, [_vm._v("取消")])])], 2) : _vm._e(), _vm.showAction ? _c('div', {
      staticClass: "search_list"
    }, [_vm._l(_vm.searchEmployeesData.list, function (itemData, k) {
      return _vm.searchEmployeesData.list.length > 0 ? _c('div', {
        key: k
      }, [!_vm.radio ? _c('van-checkbox-group', {
        model: {
          value: _vm.result[itemData.groupType],
          callback: function callback($$v) {
            _vm.$set(_vm.result, itemData.groupType, $$v);
          },
          expression: "result[itemData.groupType]"
        }
      }, [_c('van-cell-group', _vm._l(itemData.groupDatas, function (employee, index) {
        return _c('van-cell', {
          key: index,
          staticClass: "employee_cell",
          attrs: {
            "title": employee.title,
            "label": employee.subTitle
          }
        }, [_c('template', {
          slot: "icon"
        }, [_vm.type.indexOf(itemData.groupType) != -1 ? _c('van-checkbox', {
          staticClass: "em_checkbox",
          attrs: {
            "key-name": "identity",
            "name": employee
          }
        }) : _vm._e(), _c('avatar', {
          staticStyle: {
            "margin-right": "10px"
          },
          attrs: {
            "src": employee.icon,
            "default-color": employee.iconName.color,
            "name": employee.iconName.name,
            "size": "30px",
            "font-size": "12px"
          }
        })], 1), _c('span', {
          staticStyle: {
            "font-size": "12px",
            "color": "#9E9E9E"
          }
        }, [_vm._v(_vm._s(employee.accessory))])], 2);
      }))], 1) : _c('van-radio-group', {
        model: {
          value: _vm.result[itemData.groupType],
          callback: function callback($$v) {
            _vm.$set(_vm.result, itemData.groupType, $$v);
          },
          expression: "result[itemData.groupType]"
        }
      }, [_c('van-cell-group', _vm._l(itemData.groupDatas, function (employee, index) {
        return _c('van-cell', {
          key: index,
          staticClass: "employee_cell",
          attrs: {
            "title": employee.title,
            "label": employee.subTitle
          }
        }, [_c('template', {
          slot: "icon"
        }, [_vm.type.indexOf(itemData.groupType) != -1 ? _c('van-radio', {
          staticClass: "em_checkbox",
          attrs: {
            "key-name": "identity",
            "name": employee
          }
        }) : _vm._e(), _c('avatar', {
          staticStyle: {
            "margin-right": "10px"
          },
          attrs: {
            "src": employee.icon,
            "default-color": employee.iconName.color,
            "name": employee.iconName.name,
            "size": "30px",
            "font-size": "12px"
          }
        })], 1), _c('span', {
          staticStyle: {
            "font-size": "12px",
            "color": "#9E9E9E"
          }
        }, [_vm._v(_vm._s(employee.accessory))])], 2);
      }))], 1)], 1) : _vm._e();
    }), _vm.searchEmployeesData.list.length == 0 ? _c('div', {
      staticClass: "not_find_div"
    }, [_c('img', {
      staticClass: "not_find",
      attrs: {
        "src": "data:image/png;base64,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"
      }
    })]) : _vm._e()], 2) : _c('div', {
      staticClass: "branch_list"
    }, [_c('div', {
      staticClass: "crumb"
    }, [_c('crumb', {
      ref: "crumb"
    }, _vm._l(_vm.departments, function (department, index) {
      return _c('crumb-item', {
        key: index,
        domProps: {
          "textContent": _vm._s(department.name)
        },
        nativeOn: {
          "click": function click($event) {
            _vm.backDep(index);
          }
        }
      });
    }))], 1), _vm._l(_vm.departments, function (departmentParent, index) {
      return index == _vm.departments.length - 1 ? _c('div', {
        key: index
      }, [_c('transition', {
        attrs: {
          "enter-active-class": "animated slideInRight"
        }
      }, [_vm.departmentMap[departmentParent.id] != undefined ? [_c('van-pull-refresh', {
        on: {
          "refresh": _vm.onRefresh
        },
        model: {
          value: _vm.isLoading,
          callback: function callback($$v) {
            _vm.isLoading = $$v;
          },
          expression: "isLoading"
        }
      }, _vm._l(_vm.departmentMap[departmentParent.id].sections, function (departmentItem, i) {
        return _c('div', {
          key: i
        }, [departmentItem.groupTitle ? _c('div', {
          staticClass: "block__title"
        }, [_vm._v(_vm._s(departmentItem.groupTitle))]) : _vm._e(), !_vm.radio ? _c('van-checkbox-group', {
          model: {
            value: _vm.result[departmentItem.groupType],
            callback: function callback($$v) {
              _vm.$set(_vm.result, departmentItem.groupType, $$v);
            },
            expression: "result[departmentItem.groupType]"
          }
        }, [_c('van-cell-group', _vm._l(departmentItem.groupDatas, function (item, i) {
          return _c('van-cell', {
            key: i,
            staticClass: "cell_department_employee",
            attrs: {
              "is-link": departmentItem.groupType == 'dep',
              "title": item.title,
              "label": item.subTitle
            },
            on: {
              "click": function click($event) {
                _vm.clickDepartment(item, departmentItem.groupType);
              }
            }
          }, [_c('template', {
            slot: "icon"
          }, [_vm.type.indexOf(departmentItem.groupType) != -1 ? _c('van-checkbox', {
            staticClass: "em_checkbox",
            attrs: {
              "key-name": "identity",
              "name": item
            }
          }) : _vm._e(), _c('avatar', {
            staticStyle: {
              "margin-right": "10px"
            },
            attrs: {
              "src": item.icon,
              "default-color": item.iconName.color,
              "name": item.iconName.name,
              "size": "34px",
              "font-size": "12px"
            }
          })], 1), _c('span', {
            staticStyle: {
              "font-size": "12px",
              "color": "#9E9E9E"
            }
          }, [_vm._v(_vm._s(item.accessory))])], 2);
        }))], 1) : _c('van-radio-group', {
          model: {
            value: _vm.result[departmentItem.groupType],
            callback: function callback($$v) {
              _vm.$set(_vm.result, departmentItem.groupType, $$v);
            },
            expression: "result[departmentItem.groupType]"
          }
        }, [_c('van-cell-group', _vm._l(departmentItem.groupDatas, function (item, i) {
          return _c('van-cell', {
            key: i,
            staticClass: "cell_department_employee",
            attrs: {
              "is-link": departmentItem.groupType == 'dep',
              "title": item.title,
              "label": item.subTitle
            },
            on: {
              "click": function click($event) {
                _vm.clickDepartment(item, departmentItem.groupType);
              }
            }
          }, [_c('template', {
            slot: "icon"
          }, [_vm.type.indexOf(departmentItem.groupType) != -1 ? _c('van-radio', {
            staticClass: "em_checkbox",
            attrs: {
              "key-name": "identity",
              "name": item
            }
          }) : _vm._e(), _c('avatar', {
            staticStyle: {
              "margin-right": "10px"
            },
            attrs: {
              "src": item.icon,
              "default-color": item.iconName.color,
              "name": item.iconName.name,
              "size": "34px",
              "font-size": "12px"
            }
          })], 1), _c('span', {
            staticStyle: {
              "font-size": "12px",
              "color": "#9E9E9E"
            }
          }, [_vm._v(_vm._s(item.accessory))])], 2);
        }))], 1)], 1);
      }))] : _vm._e()], 2)], 1) : _vm._e();
    })], 2)], 1), _c('div', {
      staticClass: "wq_employee_field_actions"
    }, [_c('van-row', [!_vm.radio ? _c('van-col', {
      staticClass: "action_result",
      attrs: {
        "span": "18"
      }
    }, [_vm._l(_vm.result, function (list) {
      return [_vm._l(list, function (value, k) {
        return list ? [_c('div', {
          key: k,
          staticClass: "action_result_item"
        }, [_c('div', {
          staticClass: "avatar"
        }, [_c('van-icon', {
          staticClass: "clear",
          attrs: {
            "name": "clear",
            "color": "red"
          },
          on: {
            "click": function click($event) {
              _vm.$delete(list, k);
            }
          }
        }), _c('avatar', {
          attrs: {
            "src": value.icon,
            "default-color": value.iconName.color,
            "name": value.iconName.name,
            "size": "34px",
            "font-size": "12px"
          }
        })], 1), _c('div', {
          staticClass: "action_result_title"
        }, [_vm._v(_vm._s(value.title))])])] : _vm._e();
      })];
    })], 2) : _c('van-col', {
      staticClass: "action_result",
      attrs: {
        "span": "18"
      }
    }, [_vm._l(_vm.result, function (value, k) {
      return [value ? _c('div', {
        key: k,
        staticClass: "action_result_item"
      }, [_c('div', {
        staticClass: "avatar"
      }, [_c('van-icon', {
        staticClass: "clear",
        attrs: {
          "name": "clear",
          "color": "red"
        },
        on: {
          "click": function click($event) {
            _vm.result[k] = null;
          }
        }
      }), _c('avatar', {
        attrs: {
          "src": value.icon,
          "default-color": value.iconName.color,
          "name": value.iconName.name,
          "size": "34px",
          "font-size": "12px"
        }
      })], 1), _c('div', {
        staticClass: "action_result_title"
      }, [_vm._v(_vm._s(value.title))])]) : _vm._e()];
    })], 2), _c('van-col', {
      staticClass: "action_button",
      attrs: {
        "span": "6"
      }
    }, [_c('span', {
      on: {
        "click": _vm.onFinish
      }
    }, [_vm._v("完成" + _vm._s(!_vm.radio ? "(" + _vm.resultCount + ")" : ''))])])], 1)], 1)]);
  },
  name: 'employee-field',
  components: {
    VanRadio: es_radio,
    VanRadioGroup: radio_group,
    VanIcon: icon,
    VanCell: cell,
    VanCellGroup: cell_group,
    VanCol: col,
    VanRow: row,
    Crumb: crumb,
    CrumbItem: crumb_item,
    VanCheckboxGroup: checkbox_group,
    VanCheckbox: es_checkbox,
    VanPullRefresh: pull_refresh,
    Avatar: avatar,
    VueBetterScroll: vue_better_scroll_default.a,
    VanSearch: search
  },
  props: {
    // departmentRequest: {
    //   type: Function,
    //   required: true
    // },
    // employeeRequest: {
    //   type: Function,
    //   required: true
    // },
    type: {
      type: String,
      default: 'dep,emp'
    },
    radio: {
      type: Boolean,
      required: false,
      default: false
    },
    ajaxRequest: {
      type: Function,
      required: true
    },
    value: {
      type: Object,
      default: {
        dep: {},
        emp: {}
      }
    },
    companyName: {
      type: String,
      default: '全公司'
    },
    companyId: {
      type: String,
      default: '0'
    }
  },
  watch: {
    result: {
      handler: function handler() {
        this.$emit('input', this.result);
      },
      deep: true
    }
  },
  computed: {
    resultCount: function resultCount() {
      var _this = this;

      return Object.keys(this.result).reduce(function (count, key) {
        if (!_this.result[key]) {
          return count;
        }

        return count + _this.result[key].length;
      }, 0);
    },
    searchData: function searchData() {
      if (this.departments.length > 0) {
        return this.departmentMap[this.departments[this.departments.length - 1].id];
      } else {
        return {
          search: {
            show: false
          }
        };
      }
    }
  },
  data: function data() {
    return {
      result: this.value,
      search: '',
      showAction: false,
      searchEmployeesData: {
        list: [],
        currentPage: 1
      },
      departments: [],
      departmentMap: {},
      isLoading: false,
      searchShow: false,
      currentRequest: {}
    };
  },
  mounted: function mounted() {
    var _this2 = this; // 第一次进去初始化部门列表


    var did = this.companyId;
    this.departments.push({
      id: did,
      name: this.companyName,
      paramsData: {
        urlParams: {
          did: did
        }
      }
    });
    console.log(this.radio); // window.setTimeout(() => {
    //   this.$refs.crumb.initScroll();
    // }, 500);

    this.$nextTick(function () {
      window.setTimeout(function () {
        _this2.initDepartmentMap({
          urlParams: {
            did: did
          }
        });
      }, 200);
    }); // this.departmentRequest({ id: id, currentPage: 1 }).then((data) => {
    //   this.$set(this.departmentMap, id, data);
    //   this.employeeRequest({ departmentId: id }).then(() => {
    //     this.departmentMap[id] = data;
    //   });
    // });
    // 绑定搜索框监听
    // this.bindSearchChange();
  },
  methods: {
    onKeyup: function onKeyup(keyupSearch) {
      console.log('onKeyup', keyupSearch);

      if (keyupSearch) {
        this.searchEmployee();
      }
    },
    // 部门下拉刷新
    onRefresh: function onRefresh() {
      var _this3 = this;

      this.initDepartmentMap(this.departments[this.departments.length - 1].paramsData).then(function () {
        _this3.isLoading = false;
      });
    },
    initDepartmentMap: function initDepartmentMap(_temp) {
      var _this4 = this;

      var _ref = _temp === void 0 ? {} : _temp,
          url = _ref.url,
          urlParams = _ref.urlParams;

      console.log('initDepartmentMap');
      this.currentRequest = {
        url: url,
        urlParams: urlParams
      }; // window.setTimeout(() => {
      // }, 50);

      return new Promise(function (resolve, reject) {
        _this4.ajaxRequest({
          url: url,
          urlParams: urlParams
        }).then(function (data) {
          console.log(urlParams, data, 2);

          _this4.$set(_this4.departmentMap, urlParams.did, data);

          _this4.searchShow = data.search.show;
          resolve(data);
        });
      }); // Promise.all([this.departmentRequest({ id: id }), this.employeeRequest({ departmentId: id })])
      //   .then(([departmentData, employeeData]) => {
      //     this.$set(this.departmentMap, id, {
      //       departmentData,
      //       employeeData
      //     });
      //     resolve();
      //   });
    },
    backDep: function backDep(index) {
      var _this5 = this;

      console.log(12);
      var outer = this.departments.slice(index + 1);
      this.departments = this.departments.slice(0, index + 1);
      outer.map(function (_ref2) {
        var id = _ref2.id;
        delete _this5.departmentMap[id];
      }); // window.setTimeout(() => {
      //   this.$refs.crumb.initScroll();
      // }, 500);
    },
    clickDepartment: function clickDepartment(data, groupType) {
      if (groupType === 'dep') {
        var title = data.title,
            actionData = data.actionData;
        this.departments.push({
          id: this.toJson(actionData).data.urlParams.did,
          name: title,
          paramsData: this.toJson(actionData).data
        });
        this.initDepartmentMap(this.toJson(actionData).data);
      } // this.departmentRequest({ id: id, currentPage: 1 }).then((data) => {
      //   this.$set(this.departmentMap, id, data);
      // });
      // window.setTimeout(() => {
      //   this.$refs.crumb.initScroll();
      // }, 500);

    },
    //
    // 绑定搜索框输入监听时间，对中文输入法进行优化
    bindSearchChange: function bindSearchChange() {
      var _this6 = this;

      if (!this.$refs.search) {
        return;
      }

      var input = this.$refs.search.$el.querySelector('input');
      var cpLock = false;
      input.addEventListener('compositionstart', function () {
        cpLock = true;
      });
      input.addEventListener('compositionend', function (e) {
        cpLock = false;
        if (!cpLock) _this6.searchEmployee();
      });
      input.addEventListener('input', function (e) {
        if (!cpLock) _this6.searchEmployee();
      });
    },
    // 搜索人员
    searchEmployee: function searchEmployee() {
      var _this7 = this;

      console.log(1);

      if (this.search) {
        this.ajaxRequest({
          url: this.searchData.search.url,
          urlParams: this.searchData.search.urlParams,
          key: this.search
        }).then(function (_ref3) {
          var sections = _ref3.sections;
          _this7.searchEmployeesData.list = sections; // this.$set(this.departmentMap, urlParams.did, data);
          // this.searchShow = data.search.show;
        }); // this.employeeRequest({ search: this.search }).then(({ list, currentPage, total, pageSize }) => {
        //   this.searchEmployeesData.list = list;
        //   this.searchEmployeesData.currentPage = currentPage;
        // });
      } else {
        this.clearSearch();
      }
    },
    // 搜索人员上拉加载
    onSearchPullingUp: function onSearchPullingUp() {
      var _this8 = this;

      this.employeeRequest({
        search: this.search,
        currentPage: this.searchEmployeesData.currentPage + 1
      }).then(function (_ref4) {
        var list = _ref4.list,
            currentPage = _ref4.currentPage,
            total = _ref4.total,
            pageSize = _ref4.pageSize;

        if ((_this8.searchEmployeesData.currentPage + 1) * pageSize >= total) {
          _this8.$refs.search_list.forceUpdate(false);

          return;
        }

        _this8.searchEmployeesData.list = _this8.searchEmployeesData.list.concat(list);
        _this8.searchEmployeesData.currentPage = _this8.searchEmployeesData.currentPage + 1;

        _this8.$refs.search_list.forceUpdate(true);
      });
    },
    // 搜索人员分页查询
    searchEmployeePageNext: function searchEmployeePageNext() {
      var _this9 = this;

      if (this.search) {
        this.employeeRequest({
          search: this.search
        }).then(function (_ref5) {
          var list = _ref5.list,
              currentPage = _ref5.currentPage,
              total = _ref5.total,
              pageSize = _ref5.pageSize;
          _this9.searchEmployeesData.list = list;
          _this9.searchEmployeesData.currentPage = currentPage;
        });
      } else {
        this.clearSearch();
      }
    },
    // 清除人员搜索
    clearSearch: function clearSearch() {
      this.search = '';
      this.searchEmployeesData.list = [];
    },
    onFocus: function onFocus() {
      this.showAction = true;
    },
    onCancel: function onCancel() {
      this.showAction = false;
      this.clearSearch();
    },
    // 人员选择完成
    onFinish: function onFinish() {
      this.$emit('finish', this.result);
    },
    toJson: function toJson(val) {
      if (typeof val === 'string') {
        return JSON.parse(val);
      }

      return val;
    }
  }
}));
// CONCATENATED MODULE: ./es/goods-action/index.js

/* harmony default export */ var goods_action = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'goods-action'
}));
// CONCATENATED MODULE: ./es/goods-action-big-btn/index.js



/* harmony default export */ var goods_action_big_btn = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('van-button', {
      class: _vm.b(),
      attrs: {
        "tag": "a",
        "href": _vm.url,
        "type": _vm.primary ? 'primary' : 'default',
        "bottom-action": ""
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },
  name: 'goods-action-big-btn',
  mixins: [router_link],
  components: {
    VanButton: es_button
  },
  props: {
    url: String,
    text: String,
    primary: Boolean
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/goods-action-mini-btn/index.js


/* harmony default export */ var goods_action_mini_btn = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      staticClass: "van-hairline",
      class: _vm.b(),
      attrs: {
        "href": _vm.url
      },
      on: {
        "click": _vm.onClick
      }
    }, [_c('icon', {
      class: [_vm.b('icon'), _vm.iconClass],
      attrs: {
        "info": _vm.info,
        "name": _vm.icon
      }
    }), _vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },
  name: 'goods-action-mini-btn',
  mixins: [router_link],
  props: {
    url: String,
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/swipe/index.js



/* harmony default export */ var swipe = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('track'),
      style: _vm.trackStyle,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": _vm.onTouchMove,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd,
        "transitionend": function transitionend($event) {
          _vm.$emit('change', _vm.activeIndicator);
        }
      }
    }, [_vm._t("default")], 2), _vm.showIndicators && _vm.count > 1 ? _c('div', {
      class: _vm.b('indicators', {
        vertical: _vm.vertical
      })
    }, _vm._l(_vm.count, function (index) {
      return _c('i', {
        class: _vm.b('indicator', {
          active: index - 1 === _vm.activeIndicator
        })
      });
    })) : _vm._e()]);
  },
  name: 'swipe',
  mixins: [touch],
  props: {
    autoplay: Number,
    vertical: Boolean,
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();

    if (!this.$isServer) {
      on(window, 'resize', this.onResize, true);
    }
  },
  destroyed: function destroyed() {
    this.clear();

    if (!this.$isServer) {
      off(window, 'resize', this.onResize, true);
    }
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, _ref[this.vertical ? 'height' : 'width'] = this.trackSize + "px", _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable) return;
      this.touchMove(event);

      if (this.vertical && this.direction === 'vertical' || this.direction === 'horizontal') {
        event.preventDefault();
        event.stopPropagation();
        this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable) return;

      if (this.delta) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 50 ? this.delta > 0 ? -1 : 1 : 0);
        this.swiping = false;
      }

      this.autoPlay();
    },
    move: function move(_move, offset) {
      if (_move === void 0) {
        _move = 0;
      }

      if (offset === void 0) {
        offset = 0;
      }

      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;
      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || _move < 0) || atLast && (offset < 0 || _move > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      swipes[0].offset = atLast && (delta < 0 || _move > 0) ? trackSize : 0;
      swipes[count - 1].offset = atFirst && (delta > 0 || _move < 0) ? -trackSize : 0;

      if (_move && active + _move >= -1 && active + _move <= count) {
        this.active += _move;
      }

      this.offset = offset - this.active * this.size;
    },
    swipeTo: function swipeTo(index) {
      var _this = this;

      this.swiping = true;
      this.correctPosition();
      setTimeout(function () {
        _this.swiping = false;

        _this.move(index % _this.count - _this.active);
      }, 30);
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }

      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          setTimeout(function () {
            _this2.swiping = false;

            _this2.move(1);

            _this2.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/swipe-item/index.js

/* harmony default export */ var swipe_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: _vm.style
    }, [_vm._t("default")], 2);
  },
  name: 'swipe-item',
  data: function data() {
    return {
      offset: 0
    };
  },
  computed: {
    style: function style() {
      var _this$$parent = this.$parent,
          vertical = _this$$parent.vertical,
          computedWidth = _this$$parent.computedWidth,
          computedHeight = _this$$parent.computedHeight;
      return {
        width: computedWidth + 'px',
        height: vertical ? computedHeight + 'px' : '100%',
        transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
      };
    }
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
}));
// CONCATENATED MODULE: ./es/image-preview/image-preview.js




/* harmony default export */ var image_preview = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.value ? _c('div', {
      class: _vm.b(),
      on: {
        "touchstart": _vm.onTouchStart,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_c('swipe', {
      ref: "swipe",
      attrs: {
        "initial-swipe": _vm.startPosition
      }
    }, _vm._l(_vm.images, function (item, index) {
      return _c('swipe-item', {
        key: index
      }, [_c('img', {
        class: _vm.b('image'),
        attrs: {
          "src": item
        }
      })]);
    }))], 1) : _vm._e();
  },
  name: 'image-preview',
  mixins: [popup],
  components: {
    Swipe: swipe,
    SwipeItem: swipe_item
  },
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onTouchStart: function onTouchStart() {
      this.touchStartTime = new Date();
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();
      var deltaTime = new Date() - this.touchStartTime;
      var _this$$refs$swipe = this.$refs.swipe,
          offsetX = _this$$refs$swipe.offsetX,
          offsetY = _this$$refs$swipe.offsetY; // prevent long tap to close component

      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/image-preview/index.js


var image_preview_instance;

var image_preview_initInstance = function initInstance() {
  image_preview_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(image_preview))({
    el: document.createElement('div')
  });
  document.body.appendChild(image_preview_instance.$el);
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (!image_preview_instance) {
    image_preview_initInstance();
  }

  var config = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  image_preview_instance.images = config.images;
  image_preview_instance.startPosition = config.startPosition || 0;
  image_preview_instance.value = true;
  image_preview_instance.$on('input', function (show) {
    image_preview_instance.value = show;

    if (!show) {
      image_preview_instance.$off('input');
      config.onClose && config.onClose();
    }
  });
  return image_preview_instance;
};

ImagePreview.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(image_preview);
};

/* harmony default export */ var es_image_preview = (ImagePreview);
// EXTERNAL MODULE: ./node_modules/.1.2.3@vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__(4);
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./es/lazyload/index.js

/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// CONCATENATED MODULE: ./es/list/index.js



/* harmony default export */ var list = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default"), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.loading,
        expression: "loading"
      }],
      class: _vm.b('loading')
    }, [_vm._t("loading", [_c('loading'), _c('span', {
      class: _vm.b('loading-text')
    }, [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])])], 2)], 2);
  },
  name: 'list',
  model: {
    prop: 'loading'
  },
  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },
  mounted: function mounted() {
    this.scroller = utils_scroll.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;
      var scrollerHeight = utils_scroll.getVisibleHeight(scroller);
      /* istanbul ignore next */

      if (!scrollerHeight || utils_scroll.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = utils_scroll.getScrollTop(scroller);
      var targetBottom = scrollTop + scrollerHeight;
      var reachBottom = false;
      /* istanbul ignore next */

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = utils_scroll.getElementTop(el) - utils_scroll.getElementTop(scroller) + utils_scroll.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }
      /* istanbul ignore else */


      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.check);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/nav-bar/index.js

/* harmony default export */ var nav_bar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--bottom",
      class: _vm.b({
        fixed: _vm.fixed
      }),
      style: _vm.style
    }, [_c('div', {
      class: _vm.b('left'),
      on: {
        "click": function click($event) {
          _vm.$emit('click-left');
        }
      }
    }, [_vm._t("left", [_vm.leftArrow ? _c('icon', {
      class: _vm.b('arrow'),
      attrs: {
        "name": "arrow"
      }
    }) : _vm._e(), _vm.leftText ? _c('span', {
      class: _vm.b('text'),
      domProps: {
        "textContent": _vm._s(_vm.leftText)
      }
    }) : _vm._e()])], 2), _c('div', {
      staticClass: "van-ellipsis",
      class: _vm.b('title')
    }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', {
      class: _vm.b('right'),
      on: {
        "click": function click($event) {
          _vm.$emit('click-right');
        }
      }
    }, [_vm._t("right", [_vm.rightText ? _c('span', {
      class: _vm.b('text'),
      domProps: {
        "textContent": _vm._s(_vm.rightText)
      }
    }) : _vm._e()])], 2)]);
  },
  name: 'nav-bar',
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/notice-bar/index.js

/* harmony default export */ var notice_bar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showNoticeBar,
        expression: "showNoticeBar"
      }],
      class: _vm.b({
        withicon: _vm.mode
      }),
      style: _vm.barStyle,
      on: {
        "click": function click($event) {
          _vm.$emit('click');
        }
      }
    }, [_vm.leftIcon ? _c('div', {
      class: _vm.b('left-icon')
    }, [_c('img', {
      attrs: {
        "src": _vm.leftIcon
      }
    })]) : _vm._e(), _c('div', {
      ref: "wrap",
      class: _vm.b('wrap')
    }, [_c('div', {
      ref: "content",
      class: [_vm.b('content'), _vm.animationClass],
      style: _vm.contentStyle,
      on: {
        "animationend": _vm.onAnimationEnd,
        "webkitAnimationEnd": _vm.onAnimationEnd
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)]), _vm.iconName ? _c('icon', {
      class: _vm.b('right-icon'),
      attrs: {
        "name": _vm.iconName
      },
      on: {
        "click": _vm.onClickIcon
      }
    }) : _vm._e()], 1);
  },
  name: 'notice-bar',
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  computed: {
    iconName: function iconName() {
      return this.mode === 'closeable' ? 'close' : this.mode === 'link' ? 'arrow' : '';
    },
    barStyle: function barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    contentStyle: function contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = _this.b('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = _this2.b('play--infinite');
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/Key.js

/* harmony default export */ var Key = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', {
      staticClass: "van-hairline",
      class: [_vm.b(), _vm.className],
      domProps: {
        "textContent": _vm._s(_vm.text)
      },
      on: {
        "touchstart": function touchstart($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.onFocus($event);
        },
        "touchmove": _vm.onBlur,
        "touchend": _vm.onBlur,
        "touchcancel": _vm.onBlur
      }
    });
  },
  name: 'key',
  props: {
    text: [String, Number],
    type: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var _this = this;

      var types = this.type.slice(0);
      this.active && types.push('active');
      return types.map(function (type) {
        return _this.b([type]);
      });
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.active = true;
      this.$emit('press', this.text);
    },
    onBlur: function onBlur() {
      this.active = false;
    }
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/index.js


/* harmony default export */ var number_keyboard = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": _vm.transition ? 'van-slide-bottom' : ''
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.show,
        expression: "show"
      }],
      class: _vm.b([_vm.theme]),
      style: _vm.style,
      on: {
        "touchstart": function touchstart($event) {
          $event.stopPropagation();
        },
        "animationend": _vm.onAnimationEnd,
        "webkitAnimationEnd": _vm.onAnimationEnd
      }
    }, [_vm.title || _vm.showTitleClose ? _c('div', {
      staticClass: "van-hairline--top",
      class: _vm.b('title')
    }, [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _vm.showTitleClose ? _c('span', {
      class: _vm.b('close'),
      domProps: {
        "textContent": _vm._s(_vm.closeButtonText)
      },
      on: {
        "click": _vm.onClose
      }
    }) : _vm._e()]) : _vm._e(), _c('div', {
      class: _vm.b('body')
    }, _vm._l(_vm.keys, function (key) {
      return _c('key', {
        key: key.text,
        attrs: {
          "text": key.text,
          "type": key.type
        },
        on: {
          "press": _vm.onPressKey
        }
      });
    })), _vm.theme === 'custom' ? _c('div', {
      class: _vm.b('sidebar')
    }, [_c('key', {
      attrs: {
        "text": 'delete',
        "type": ['delete', 'big']
      },
      on: {
        "press": _vm.onPressKey
      }
    }), _c('key', {
      attrs: {
        "text": _vm.closeButtonText,
        "type": ['green', 'big']
      },
      on: {
        "press": _vm.onPressKey
      }
    })], 1) : _vm._e()])]);
  },
  name: 'number-keyboard',
  components: {
    Key: Key
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    this.handler(true);
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            type: ['gray']
          }, {
            text: 0
          }, {
            text: 'delete',
            type: ['gray', 'delete']
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            type: ['middle']
          }, {
            text: this.extraKey
          });
          break;
      }

      return keys;
    },
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    },
    showTitleClose: function showTitleClose() {
      return this.closeButtonText && this.theme === 'default';
    }
  },
  methods: {
    handler: function handler(action) {
      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPressKey: function onPressKey(text) {
      if (text === '') {
        return;
      }

      if (text === 'delete') {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onClose();
      } else {
        this.$emit('input', text);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/pagination/index.js

/* harmony default export */ var pagination = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('ul', {
      class: _vm.b({
        simple: !_vm.isMultiMode
      })
    }, [_c('li', {
      staticClass: "van-hairline",
      class: [_vm.b('item', {
        disabled: _vm.value === 1
      }), _vm.b('prev')],
      on: {
        "click": function click($event) {
          _vm.selectPage(_vm.value - 1);
        }
      }
    }, [_vm._v("\n    " + _vm._s(_vm.prevText || _vm.$t('prev')) + "\n  ")]), _vm._l(_vm.pages, function (page) {
      return _vm.isMultiMode ? _c('li', {
        staticClass: "van-hairline",
        class: [_vm.b('item', {
          active: page.active
        }), _vm.b('page')],
        on: {
          "click": function click($event) {
            _vm.selectPage(page.number);
          }
        }
      }, [_vm._v("\n    " + _vm._s(page.text) + "\n  ")]) : _vm._e();
    }), !_vm.isMultiMode ? _c('li', {
      class: _vm.b('page-desc')
    }, [_vm._t("pageDesc", [_vm._v(_vm._s(_vm.pageDesc))])], 2) : _vm._e(), _c('li', {
      staticClass: "van-hairline",
      class: [_vm.b('item', {
        disabled: _vm.value === _vm.computedPageCount
      }), _vm.b('next')],
      on: {
        "click": function click($event) {
          _vm.selectPage(_vm.value + 1);
        }
      }
    }, [_vm._v("\n    " + _vm._s(_vm.nextText || _vm.$t('next')) + "\n  ")])], 2);
  },
  name: 'pagination',
  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    },
    totalItems: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isMultiMode: function isMultiMode() {
      return this.mode === 'multi';
    },
    computedPageCount: function computedPageCount() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pageDesc: function pageDesc() {
      return this.value + '/' + this.computedPageCount;
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.computedPageCount; // Default page limits

      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = this.makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.selectPage(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    selectPage: function selectPage(page) {
      page = Math.max(1, page);
      page = Math.min(this.computedPageCount, page);

      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    },
    makePage: function makePage(number, text, active) {
      return {
        number: number,
        text: text,
        active: active
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/panel/index.js

/* harmony default export */ var panel = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell-group', {
      class: _vm.b()
    }, [_vm._t("header", [_c('cell', {
      class: _vm.b('header'),
      attrs: {
        "title": _vm.title,
        "label": _vm.desc,
        "value": _vm.status
      }
    })]), _c('div', {
      class: _vm.b('content')
    }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', {
      staticClass: "van-hairline--top",
      class: _vm.b('footer')
    }, [_vm._t("footer")], 2) : _vm._e()], 2);
  },
  name: 'panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
}));
// CONCATENATED MODULE: ./es/password-input/index.js

/* harmony default export */ var password_input = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('ul', {
      staticClass: "van-hairline--surround",
      class: _vm.b('security'),
      on: {
        "touchstart": function touchstart($event) {
          $event.stopPropagation();

          _vm.$emit('focus');
        }
      }
    }, _vm._l(_vm.points, function (visibility) {
      return _c('li', {
        staticClass: "van-hairline"
      }, [_c('i', {
        style: "visibility: " + visibility
      })]);
    })), _vm.errorInfo || _vm.info ? _c('div', {
      class: _vm.b(_vm.errorInfo ? 'error-info' : 'info'),
      domProps: {
        "textContent": _vm._s(_vm.errorInfo || _vm.info)
      }
    }) : _vm._e()]);
  },
  name: 'password-input',
  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },
  computed: {
    points: function points() {
      var arr = [];

      for (var i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }

      return arr;
    }
  }
}));
// CONCATENATED MODULE: ./es/progress/index.js

/* harmony default export */ var es_progress = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('span', {
      class: _vm.b('portion', {
        'with-pivot': _vm.showPivot && _vm.text
      }),
      style: _vm.portionStyle
    }, [_vm.showPivot && _vm.text ? _c('span', {
      ref: "pivot",
      class: _vm.b('pivot'),
      style: _vm.pivotStyle
    }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])]);
  },
  name: 'progress',
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  computed: {
    text: function text() {
      return this.isDef(this.pivotText) ? this.pivotText : this.percentage + '%';
    },
    currentColor: function currentColor() {
      return this.inactive ? '#cacaca' : this.color;
    },
    pivotStyle: function pivotStyle() {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      };
    },
    portionStyle: function portionStyle() {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      };
    }
  },
  mounted: function mounted() {
    this.getWidth();
  },
  watch: {
    showPivot: function showPivot() {
      this.getWidth();
    },
    pivotText: function pivotText() {
      this.getWidth();
    }
  },
  methods: {
    getWidth: function getWidth() {
      this.progressWidth = this.$el.offsetWidth;
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
    }
  }
}));
// CONCATENATED MODULE: ./es/rate/index.js

/* harmony default export */ var es_rate = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, _vm._l(_vm.list, function (isFull, index) {
      return _c('svg', {
        class: _vm.b('item'),
        style: _vm.style,
        attrs: {
          "fill": _vm.disabled ? _vm.disabledColor : isFull ? _vm.color : _vm.voidColor,
          "viewBox": "0 0 32 32"
        },
        on: {
          "click": function click($event) {
            _vm.onSelect(index);
          }
        }
      }, [_c('path', {
        attrs: {
          "d": isFull ? 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z' : 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z'
        }
      })]);
    }));
  },
  name: 'rate',
  props: {
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.size + 'px'
      };
    },
    list: function list() {
      var _this = this;

      return Array.apply(null, {
        length: this.count
      }).map(function (value, index) {
        return index < _this.value;
      });
    }
  },
  methods: {
    onSelect: function onSelect(index) {
      if (!this.disabled && !this.readonly) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuHeader.js

/* harmony default export */ var SkuHeader = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--bottom",
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('img-wrap')
    }, [_c('img', {
      attrs: {
        "src": _vm.goodsImg
      }
    })]), _c('div', {
      class: _vm.b('goods-info')
    }, [_c('div', {
      staticClass: "van-sku__goods-name van-ellipsis"
    }, [_vm._v(_vm._s(_vm.goods.title))]), _vm._t("default"), _c('icon', {
      staticClass: "van-sku__close-icon",
      attrs: {
        "name": "close"
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:close');
        }
      }
    })], 2)]);
  },
  name: 'sku-header',
  props: {
    sku: Object,
    goods: Object,
    skuEventBus: Object,
    selectedSku: Object
  },
  computed: {
    goodsImg: function goodsImg() {
      var s1Id = this.selectedSku.s1;
      var skuImg = this.getSkuImg(s1Id); // 优先使用选中sku的图片

      return skuImg || this.goods.picture;
    }
  },
  methods: {
    getSkuImg: function getSkuImg(id) {
      if (!id) return; // 目前skuImg都挂载在skuTree中s1那类sku上

      var treeItem = this.sku.tree.filter(function (treeItem) {
        return treeItem.k_s === 's1';
      })[0] || {};

      if (!treeItem.v) {
        return;
      }

      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];

      if (matchedSku && matchedSku.imgUrl) {
        return matchedSku.imgUrl;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuRow.js

/* harmony default export */ var SkuRow = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('title')
    }, [_vm._v(_vm._s(_vm.skuRow.k) + "：")]), _vm._t("default")], 2);
  },
  name: 'sku-row',
  props: {
    skuRow: Object
  }
}));
// CONCATENATED MODULE: ./es/sku/constants.js
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
var UNSELECTED_SKU_VALUE_ID = '';
/* harmony default export */ var constants = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});
// CONCATENATED MODULE: ./es/sku/utils/skuHelper.js


/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */

var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中

var skuHelper_isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
}; // 根据已选择的sku获取skuComb

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (skuComb) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(skuComb[skuKeyStr]) === String(selectedSku[skuKeyStr]); // eslint-disable-line
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称

var skuHelper_getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (skuValue) {
        return skuValue.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选

var skuHelper_isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = _extends({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中


  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    return total += sku.stock_num;
  }, 0);
  return stock > 0;
};
/* harmony default export */ var skuHelper = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: skuHelper_getSelectedSkuValues,
  isAllSelected: skuHelper_isAllSelected,
  isSkuChoosable: skuHelper_isSkuChoosable
});
// CONCATENATED MODULE: ./es/sku/components/SkuRowItem.js



/* harmony default export */ var SkuRowItem = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      staticClass: "van-sku-row__item",
      class: {
        'van-sku-row__item--active': _vm.isChoosed,
        'van-sku-row__item--disabled': !_vm.isChoosable
      },
      on: {
        "click": _vm.onSelect
      }
    }, [_vm._v("\n  " + _vm._s(_vm.skuValue.name) + "\n")]);
  },
  name: 'sku-row-item',
  props: {
    skuEventBus: Object,
    skuValue: Object,
    skuList: Array,
    selectedSku: Object,
    skuKeyStr: String
  },
  computed: {
    isChoosed: function isChoosed() {
      return this.skuValue.id === this.selectedSku[this.skuKeyStr];
    },
    isChoosable: function isChoosable() {
      return skuHelper_isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.isChoosable) {
        this.skuEventBus.$emit('sku:select', _extends({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/stepper/index.js

/* harmony default export */ var stepper = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('button', {
      class: _vm.b('minus', {
        disabled: _vm.minusDisabled
      }),
      on: {
        "click": function click($event) {
          _vm.onChange('minus');
        }
      }
    }), _c('input', {
      class: _vm.b('input'),
      attrs: {
        "type": "number",
        "disabled": _vm.disabled || _vm.disableInput
      },
      domProps: {
        "value": _vm.currentValue
      },
      on: {
        "input": _vm.onInput,
        "blur": _vm.onBlur
      }
    }), _c('button', {
      class: _vm.b('plus', {
        disabled: _vm.plusDisabled
      }),
      on: {
        "click": function click($event) {
          _vm.onChange('plus');
        }
      }
    })]);
  },
  name: 'stepper',
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },
  data: function data() {
    var value = this.range(this.isDef(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9\.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (+value !== formatted) {
        event.target.value = formatted;
      }

      this.currentValue = formatted;
    },
    onChange: function onChange(type) {
      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;
      this.currentValue = this.range(value);
      this.$emit(type);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event);
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuStepper.js



var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = LIMIT_TYPE.STOCK_LIMIT;
/* harmony default export */ var SkuStepper = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-sku-stepper-stock"
    }, [_c('div', {
      staticClass: "van-sku-stepper-container"
    }, [_c('div', {
      staticClass: "van-sku__stepper-title"
    }, [_vm._v(_vm._s(_vm.stepperTitle || '购买数量') + "：")]), _c('stepper', {
      staticClass: "van-sku__stepper",
      attrs: {
        "min": 1,
        "max": _vm.stepperLimit,
        "disable-input": _vm.disableStepperInput
      },
      on: {
        "overlimit": _vm.onOverLimit,
        "change": _vm.onChange
      },
      model: {
        value: _vm.currentNum,
        callback: function callback($$v) {
          _vm.currentNum = $$v;
        },
        expression: "currentNum"
      }
    })], 1), !_vm.hideStock ? _c('div', {
      staticClass: "van-sku__stock"
    }, [_vm._v(_vm._s(_vm.stockText))]) : _vm._e(), _vm.quotaText ? _c('div', {
      staticClass: "van-sku__quota"
    }, [_vm._v(_vm._s(_vm.quotaText))]) : _vm._e()]);
  },
  name: 'sku-stepper',
  components: {
    Stepper: stepper
  },
  props: {
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedSkuComb: Object,
    selectedNum: Number,
    stepperTitle: String,
    quota: Number,
    quotaUsed: Number,
    hideStock: Boolean,
    disableStepperInput: Boolean,
    customStepperConfig: Object
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },
  computed: {
    stock: function stock() {
      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.skuStockNum;
    },
    stockText: function stockText() {
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return "\u5269\u4F59" + this.stock + "\u4EF6";
    },
    quotaText: function quotaText() {
      var quotaText = this.customStepperConfig.quotaText;
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = "\u6BCF\u4EBA\u9650\u8D2D" + this.quota + "\u4EF6";
      }

      return text;
    },
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/email.js
/* eslint-disable */
function email(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
// CONCATENATED MODULE: ./es/utils/validate/number.js
function number(value) {
  return /^\d+$/.test(value);
}
// CONCATENATED MODULE: ./es/uploader/index.js

/* harmony default export */ var uploader = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default"), _c('input', _vm._b({
      ref: "input",
      class: _vm.b('input'),
      attrs: {
        "type": "file",
        "accept": _vm.accept,
        "disabled": _vm.disabled
      },
      on: {
        "change": _vm.onChange
      }
    }, 'input', _vm.$attrs, false))], 2);
  },
  name: 'uploader',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);

      if (!files || this.beforeRead && !this.beforeRead(files)) {
        return;
      }

      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(function (contents) {
          var oversize = false;
          var payload = files.map(function (file, index) {
            if (file.size > _this.maxSize) {
              oversize = true;
            }

            return {
              file: files[index],
              content: contents[index]
            };
          });

          _this.onAfterRead(payload, oversize);
        });
      } else {
        this.readFile(files).then(function (content) {
          _this.onAfterRead({
            file: files,
            content: content
          }, files.size > _this.maxSize);
        });
      }
    },
    readFile: function readFile(file) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (event) {
          resolve(event.target.result);
        };

        if (_this2.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (_this2.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files);
      } else {
        this.afterRead && this.afterRead(files);
        this.$refs.input && (this.$refs.input.value = '');
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuImgUploader.js


/* harmony default export */ var SkuImgUploader = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('van-uploader', {
      attrs: {
        "disabled": !!_vm.paddingImg,
        "after-read": _vm.afterReadFile,
        "max-size": _vm.maxSize * 1024 * 1024
      },
      on: {
        "oversize": _vm.onOversize
      }
    }, [_c('div', {
      class: _vm.b('header')
    }, [_vm.paddingImg ? _c('div', [_vm._v("正在上传...")]) : [_c('icon', {
      attrs: {
        "name": "photograph"
      }
    }), _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.value ? '重拍' : '拍照'))]), _vm._v(" 或\n        "), _c('icon', {
      attrs: {
        "name": "photo"
      }
    }), _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.value ? '重新选择照片' : '选择照片'))])]], 2)]), _vm.paddingImg || _vm.imgList.length > 0 ? _c('div', {
      staticClass: "van-clearfix"
    }, [_vm._l(_vm.imgList, function (img) {
      return _c('div', {
        class: _vm.b('img')
      }, [_c('img', {
        attrs: {
          "src": img
        }
      }), _c('icon', {
        class: _vm.b('delete'),
        attrs: {
          "name": "clear"
        },
        on: {
          "click": function click($event) {
            _vm.$emit('input', '');
          }
        }
      })], 1);
    }), _vm.paddingImg ? _c('div', {
      class: _vm.b('img')
    }, [_c('img', {
      attrs: {
        "src": _vm.paddingImg
      }
    }), _c('loading', {
      class: _vm.b('uploading'),
      attrs: {
        "type": "spinner"
      }
    })], 1) : _vm._e()], 2) : _vm._e()], 1);
  },
  name: 'sku-img-uploader',
  components: {
    VanUploader: uploader
  },
  props: {
    value: String,
    uploadImg: {
      type: Function,
      required: true
    },
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片base 64
      paddingImg: ''
    };
  },
  computed: {
    imgList: function imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this; // 上传文件


      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.paddingImg = '';
      });
    },
    onOversize: function onOversize() {
      this.$toast("\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + this.maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8");
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuMessages.js





var PLACEHOLDER = {
  id_no: '输入身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间',
  textarea: '点击填写段落文本'
};
/* harmony default export */ var SkuMessages = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell-group', {
      class: _vm.b()
    }, [_vm._l(_vm.messages, function (message, index) {
      return [message.type === 'image' ? _c('cell', {
        key: _vm.goodsId + "-" + index,
        class: _vm.b('image-cell'),
        attrs: {
          "label": "仅限一张",
          "required": message.required == '1',
          "title": message.name
        }
      }, [_c('sku-img-uploader', {
        attrs: {
          "upload-img": _vm.messageConfig.uploadImg,
          "max-size": _vm.messageConfig.uploadMaxSize
        },
        model: {
          value: _vm.messageValues[index].value,
          callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          },
          expression: "messageValues[index].value"
        }
      })], 1) : _c('field', {
        key: _vm.goodsId + "-" + index,
        attrs: {
          "maxlength": "200",
          "required": message.required == '1',
          "label": message.name,
          "placeholder": _vm.getPlaceholder(message),
          "type": _vm.getType(message)
        },
        model: {
          value: _vm.messageValues[index].value,
          callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          },
          expression: "messageValues[index].value"
        }
      })];
    })], 2);
  },
  name: 'sku-messages',
  components: {
    SkuImgUploader: SkuImgUploader,
    Field: field
  },
  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  computed: {
    messagePlaceholderMap: function messagePlaceholderMap() {
      return this.messageConfig.placeholderMap || {};
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      return this.messagePlaceholderMap[type] || PLACEHOLDER[type];
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? '请上传' : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !number(value)) {
            return '请填写正确的数字格式留言';
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }

          if (message.type === 'email' && !email(value)) {
            return '请填写正确的邮箱';
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuActions.js


/* harmony default export */ var SkuActions = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm.showAddCartBtn ? _c('van-button', {
      attrs: {
        "bottom-action": "",
        "text": "加入购物车"
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:addCart');
        }
      }
    }) : _vm._e(), _c('van-button', {
      attrs: {
        "type": "primary",
        "bottom-action": "",
        "text": _vm.buyText || '立即购买'
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:buy');
        }
      }
    })], 1);
  },
  name: 'sku-actions',
  components: {
    VanButton: es_button
  },
  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  }
}));
// CONCATENATED MODULE: ./es/sku/Sku.js

/* eslint-disable camelcase */













var Sku_QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT;
/* harmony default export */ var Sku = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return !_vm.isSkuEmpty ? _c('popup', {
      staticClass: "van-sku-container",
      attrs: {
        "position": "bottom",
        "close-on-click-overlay": _vm.closeOnClickOverlay,
        "get-container": _vm.getContainer
      },
      model: {
        value: _vm.show,
        callback: function callback($$v) {
          _vm.show = $$v;
        },
        expression: "show"
      }
    }, [_vm._t("sku-header", [_c('sku-header', {
      attrs: {
        "sku-event-bus": _vm.skuEventBus,
        "selected-sku": _vm.selectedSku,
        "goods": _vm.goods,
        "sku": _vm.sku
      }
    }, [_vm._t("sku-header-price", [_c('div', {
      staticClass: "van-sku__goods-price"
    }, [_c('span', {
      staticClass: "van-sku__price-symbol"
    }, [_vm._v("￥")]), _c('span', {
      staticClass: "van-sku__price-num"
    }, [_vm._v(_vm._s(_vm.price))])])], {
      price: _vm.price,
      selectedSkuComb: _vm.selectedSkuComb
    })], 2)], {
      skuEventBus: _vm.skuEventBus,
      selectedSku: _vm.selectedSku,
      selectedSkuComb: _vm.selectedSkuComb
    }), _c('div', {
      staticClass: "van-sku-body",
      style: _vm.bodyStyle
    }, [_vm._t("sku-body-top", null, {
      selectedSku: _vm.selectedSku,
      skuEventBus: _vm.skuEventBus
    }), _vm._t("sku-group", [_vm.hasSku ? _c('div', {
      staticClass: "van-sku-group-container van-hairline--bottom"
    }, _vm._l(_vm.skuTree, function (skuTreeItem, index) {
      return _c('sku-row', {
        key: index,
        attrs: {
          "sku-row": skuTreeItem
        }
      }, _vm._l(skuTreeItem.v, function (skuValue, index) {
        return _c('sku-row-item', {
          key: index,
          attrs: {
            "sku-key-str": skuTreeItem.k_s,
            "sku-value": skuValue,
            "sku-event-bus": _vm.skuEventBus,
            "selected-sku": _vm.selectedSku,
            "sku-list": _vm.sku.list
          }
        });
      }));
    })) : _vm._e()], {
      selectedSku: _vm.selectedSku,
      skuEventBus: _vm.skuEventBus
    }), _vm._t("extra-sku-group", null, {
      skuEventBus: _vm.skuEventBus
    }), _vm._t("sku-stepper", [_c('sku-stepper', {
      ref: "skuStepper",
      attrs: {
        "sku-event-bus": _vm.skuEventBus,
        "selected-sku": _vm.selectedSku,
        "selected-sku-comb": _vm.selectedSkuComb,
        "selected-num": _vm.selectedNum,
        "stepper-title": _vm.stepperTitle,
        "sku-stock-num": _vm.sku.stock_num,
        "quota": _vm.quota,
        "quota-used": _vm.quotaUsed,
        "disable-stepper-input": _vm.disableStepperInput,
        "hide-stock": _vm.hideStock,
        "custom-stepper-config": _vm.customStepperConfig
      },
      on: {
        "change": function change($event) {
          _vm.$emit('stepper-change', $event);
        }
      }
    })], {
      skuEventBus: _vm.skuEventBus,
      selectedSku: _vm.selectedSku,
      selectedSkuComb: _vm.selectedSkuComb,
      selectedNum: _vm.selectedNum
    }), _vm._t("sku-messages", [_c('sku-messages', {
      ref: "skuMessages",
      attrs: {
        "goods-id": _vm.goodsId,
        "message-config": _vm.messageConfig,
        "messages": _vm.sku.messages
      }
    })])], 2), _vm._t("sku-actions", [_c('sku-actions', {
      attrs: {
        "sku-event-bus": _vm.skuEventBus,
        "buy-text": _vm.buyText,
        "show-add-cart-btn": _vm.showAddCartBtn
      }
    })], {
      skuEventBus: _vm.skuEventBus
    })], 2) : _vm._e();
  },
  name: 'sku',
  components: {
    Popup: es_popup,
    SkuHeader: SkuHeader,
    SkuRow: SkuRow,
    SkuRowItem: SkuRowItem,
    SkuStepper: SkuStepper,
    SkuMessages: SkuMessages,
    SkuActions: SkuActions
  },
  props: {
    sku: Object,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    stepperTitle: String,
    hideStock: Boolean,
    getContainer: Function,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    disableStepperInput: Boolean,
    closeOnClickOverlay: Boolean,
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    customSkuValidator: Function
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        var selectedSkuValues = skuHelper_getSelectedSkuValues(this.sku.tree, this.selectedSku);
        this.$emit('sku-close', {
          selectedSkuValues: selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.$refs.skuStepper && this.$refs.skuStepper.setCurrentNum(1);
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },
  computed: {
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return skuHelper_isAllSelected(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      } else if (this.isSkuCombSelected) {
        return getSkuComb(this.sku.list, this.selectedSku);
      }

      return null;
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    }
  },
  created: function created() {
    var skuEventBus = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this = this;

      this.selectedSku = {}; // 重置selectedSku

      skuTree.forEach(function (item) {
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      }); // 只有一个sku规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && skuHelper_isSkuChoosable(_this.sku.list, _this.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return '商品已经无法购买啦';
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return '请先选择商品规格';
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3; // 点击已选中的sku时则取消选中


      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? _extends({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = UNSELECTED_SKU_VALUE_ID, _extends2)) : _extends({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        es_toast('至少选择一件');
      } else if (action === 'plus') {
        if (limitType === Sku_QUOTA_LIMIT) {
          var msg = "\u9650\u8D2D" + quota + "\u4EF6";
          if (quotaUsed > 0) msg += "\uFF0C" + ("\u60A8\u5DF2\u8D2D\u4E70" + quotaUsed + "\u4EF6");
          es_toast(msg);
        } else {
          es_toast('库存不足');
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        es_toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/sku/index.js









Sku.SkuActions = SkuActions;
Sku.SkuHeader = SkuHeader;
Sku.SkuMessages = SkuMessages;
Sku.SkuStepper = SkuStepper;
Sku.SkuRow = SkuRow;
Sku.SkuRowItem = SkuRowItem;
Sku.skuHelper = skuHelper;
Sku.skuConstants = constants;
/* harmony default export */ var sku = (Sku);
// CONCATENATED MODULE: ./es/slider/index.js


/* harmony default export */ var slider = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        disabled: _vm.disabled
      }),
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.onClick($event);
        }
      }
    }, [_c('div', {
      class: _vm.b('bar'),
      style: _vm.barStyle
    }, [_c('span', {
      class: _vm.b('button'),
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.onTouchMove($event);
        },
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    })])]);
  },
  name: 'slider',
  mixins: [touch],
  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  computed: {
    barStyle: function barStyle() {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight
      };
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) return;
      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },
    onClick: function onClick(event) {
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var value = (event.clientX - rect.left) / rect.width * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  }
}));
// CONCATENATED MODULE: ./es/step/index.js

/* harmony default export */ var step = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline",
      class: _vm.b([_vm.$parent.direction, (_obj = {}, _obj[_vm.status] = _vm.status, _obj)])
    }, [_c('div', {
      class: _vm.b('title'),
      style: _vm.titleStyle
    }, [_vm._t("default")], 2), _c('div', {
      class: _vm.b('circle-container')
    }, [_vm.status !== 'process' ? _c('i', {
      class: _vm.b('circle')
    }) : _c('icon', {
      style: {
        color: _vm.$parent.activeColor
      },
      attrs: {
        "name": "checked"
      }
    })], 1), _c('div', {
      class: _vm.b('line')
    })]);

    var _obj;
  },
  name: 'step',
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },
    titleStyle: function titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/steps/index.js

/* harmony default export */ var steps = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.direction])
    }, [_vm.title || _vm.description ? _c('div', {
      class: _vm.b('status')
    }, [_vm.icon || _vm.$slots.icon ? _c('div', {
      class: _vm.b('icon')
    }, [_vm._t("icon", [_c('icon', {
      class: _vm.iconClass,
      attrs: {
        "name": _vm.icon
      }
    })])], 2) : _vm._e(), _c('div', {
      class: _vm.b('message')
    }, [_c('div', {
      class: _vm.b('title'),
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _c('div', {
      staticClass: "van-ellipsis",
      class: _vm.b('desc'),
      domProps: {
        "textContent": _vm._s(_vm.description)
      }
    })]), _vm._t("message-extra")], 2) : _vm._e(), _c('div', {
      class: _vm.b('items', {
        alone: !_vm.title && !_vm.description
      })
    }, [_vm._t("default")], 2)]);
  },
  name: 'steps',
  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#06bf04'
    }
  },
  data: function data() {
    return {
      steps: []
    };
  }
}));
// CONCATENATED MODULE: ./es/submit-bar/index.js


/* harmony default export */ var submit_bar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("top"), _vm.tip || _vm.$slots.tip ? _c('div', {
      class: _vm.b('tip')
    }, [_vm._v("\n    " + _vm._s(_vm.tip)), _vm._t("tip")], 2) : _vm._e(), _c('div', {
      class: _vm.b('bar')
    }, [_vm._t("default"), _c('div', {
      class: _vm.b('text')
    }, [_vm.hasPrice ? [_c('span', [_vm._v(_vm._s(_vm.label || _vm.$t('label')))]), _c('span', {
      class: _vm.b('price')
    }, [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm._f("format")(_vm.price)))])] : _vm._e()], 2), _c('van-button', {
      attrs: {
        "type": _vm.buttonType,
        "disabled": _vm.disabled,
        "loading": _vm.loading
      },
      on: {
        "click": function click($event) {
          _vm.$emit('submit');
        }
      }
    }, [_vm._v("\n      " + _vm._s(_vm.loading ? '' : _vm.buttonText) + "\n    ")])], 2)], 2);
  },
  name: 'submit-bar',
  components: {
    VanButton: es_button
  },
  props: {
    tip: String,
    type: Number,
    price: Number,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },
  computed: {
    hasPrice: function hasPrice() {
      return typeof this.price === 'number';
    }
  },
  filters: {
    format: function format(price) {
      return (price / 100).toFixed(2);
    }
  }
}));
// CONCATENATED MODULE: ./es/swipe-cell/index.js



var swipe_cell_THRESHOLD = 0.15;
/* harmony default export */ var swipe_cell = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "clickoutside",
        rawName: "v-clickoutside:touchstart",
        value: _vm.onClick,
        expression: "onClick",
        arg: "touchstart"
      }],
      class: _vm.b(),
      on: {
        "click": function click($event) {
          _vm.onClick('cell');
        },
        "touchstart": _vm.startDrag,
        "touchmove": _vm.onDrag,
        "touchend": _vm.endDrag,
        "touchcancel": _vm.endDrag
      }
    }, [_c('div', {
      class: _vm.b('wrapper'),
      style: _vm.wrapperStyle,
      on: {
        "transitionend": function transitionend($event) {
          _vm.swipe = false;
        }
      }
    }, [_vm.leftWidth ? _c('div', {
      class: _vm.b('left'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('left');
        }
      }
    }, [_vm._t("left")], 2) : _vm._e(), _vm._t("default"), _vm.rightWidth ? _c('div', {
      class: _vm.b('right'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('right');
        }
      }
    }, [_vm._t("right")], 2) : _vm._e()], 2)]);
  },
  name: 'swipe-cell',
  mixins: [touch],
  props: {
    onClose: Function,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },
  directives: {
    Clickoutside: clickoutside
  },
  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },
  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: "translate3d(" + this.offset + "px, 0, 0)",
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },
  methods: {
    open: function open(position) {
      var offset = position === 'left' ? this.leftWidth : -this.rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      var threshold = this.opened ? 1 - swipe_cell_THRESHOLD : swipe_cell_THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      this.touchMove(event);
      var deltaX = this.deltaX;

      if (deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth) || deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      }

      ;
    },
    endDrag: function endDrag() {
      this.draging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      }

      ;
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/tabbar/index.js

/* harmony default export */ var tabbar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b({
        fixed: _vm.fixed
      }),
      style: _vm.style
    }, [_vm._t("default")], 2);
  },
  name: 'tabbar',
  data: function data() {
    return {
      items: []
    };
  },
  props: {
    value: Number,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    items: function items() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.items.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/tabbar-item/index.js
var tabbar_item_components;




/* harmony default export */ var tabbar_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        active: _vm.active
      }),
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('icon', {
        dot: _vm.dot
      })
    }, [_vm._t("icon", [_vm.icon ? _c('icon', {
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e()], {
      active: _vm.active
    }), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2), _c('div', {
      class: _vm.b('text')
    }, [_vm._t("default", null, {
      active: _vm.active
    })], 2)]);
  },
  name: 'tabbar-item',
  components: (tabbar_item_components = {}, tabbar_item_components[info.name] = info, tabbar_item_components),
  mixins: [router_link],
  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },
  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },
  methods: {
    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/tag/index.js

/* harmony default export */ var tag = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      class: [_vm.b((_obj = {
        mark: _vm.mark,
        plain: _vm.plain
      }, _obj[_vm.type] = _vm.type, _obj)), {
        'van-hairline--surround': _vm.plain
      }]
    }, [_vm._t("default")], 2);

    var _obj;
  },
  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
}));
// CONCATENATED MODULE: ./es/tree-select/index.js


/* harmony default export */ var tree_select = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: {
        height: _vm.mainHeight + 'px'
      }
    }, [_c('div', {
      class: _vm.b('nav')
    }, _vm._l(_vm.items, function (item, index) {
      return _c('div', {
        staticClass: "van-ellipsis",
        class: _vm.b('nitem', {
          active: _vm.mainActiveIndex === index
        }),
        on: {
          "click": function click($event) {
            _vm.$emit('navclick', index);
          }
        }
      }, [_vm._v("\n      " + _vm._s(item.text) + "\n    ")]);
    })), _c('div', {
      class: _vm.b('content'),
      style: {
        height: _vm.itemHeight + 'px'
      }
    }, _vm._l(_vm.subItems, function (item) {
      return _c('div', {
        key: item.id,
        staticClass: "van-ellipsis",
        class: _vm.b('item', {
          active: _vm.activeId === item.id
        }),
        on: {
          "click": function click($event) {
            _vm.onItemSelect(item);
          }
        }
      }, [_vm._v("\n      " + _vm._s(item.text) + "\n      "), _vm.activeId === item.id ? _c('icon', {
        class: _vm.b('selected'),
        attrs: {
          "name": "success"
        }
      }) : _vm._e()], 1);
    }))]);
  },
  name: 'tree-select',
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: [Number, String],
      default: 0
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },
  computed: {
    subItems: function subItems() {
      var selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    },
    mainHeight: function mainHeight() {
      var maxHeight = Math.max(this.items.length * 44, this.subItems.length * 44);
      return Math.min(maxHeight, this.maxHeight);
    },
    itemHeight: function itemHeight() {
      return Math.min(this.subItems.length * 44, this.maxHeight);
    }
  },
  methods: {
    onItemSelect: function onItemSelect(data) {
      this.$emit('itemclick', _extends({}, data));
    }
  }
}));
// CONCATENATED MODULE: ./es/waterfall/directive.js


var CONTEXT = '@@Waterfall';
var OFFSET = 300; // 绑定事件到元素上
// 读取基本的控制变量

function doBindEvent() {
  var _this = this;

  if (this.el[CONTEXT].binded) {
    return;
  }

  this.el[CONTEXT].binded = true;
  this.scrollEventListener = handleScrollEvent.bind(this);
  this.scrollEventTarget = utils_scroll.getScrollEventTarget(this.el);
  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;

  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;

      _this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }

  this.disabled = disabled;
  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;
  on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);
  this.scrollEventListener();
} // 处理滚动函数


function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget; // 已被禁止的滚动处理

  if (this.disabled) return;
  var targetScrollTop = utils_scroll.getScrollTop(scrollEventTarget);
  var targetVisibleHeight = utils_scroll.getVisibleHeight(scrollEventTarget); // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离

  var targetBottom = targetScrollTop + targetVisibleHeight; // 如果无元素高度，考虑为元素隐藏，直接返回

  if (!targetVisibleHeight) return; // 判断是否到了底

  var needLoadMoreToLower = false;

  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget) + utils_scroll.getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }

  if (needLoadMoreToLower) {
    this.cb.lower && this.cb.lower({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  } // 判断是否到了顶


  var needLoadMoreToUpper = false;

  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }

  if (needLoadMoreToUpper) {
    this.cb.upper && this.cb.upper({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  }
} // 绑定事件


function startBind(el) {
  var context = el[CONTEXT];
  context.vm.$nextTick(function () {
    doBindEvent.call(el[CONTEXT]);
  });
} // 确认何时绑事件监听函数


function doCheckStartBind(el) {
  var context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

/* harmony default export */ var directive = (function (type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }

      el[CONTEXT].cb[type] = binding.value;
      doCheckStartBind(el);
    },
    update: function update(el) {
      var context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];

      if (context.scrollEventTarget) {
        off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    }
  };
});
;
// CONCATENATED MODULE: ./es/waterfall/index.js


directive.install = function (Vue) {
  if (false) {}

  Vue.directive('WaterfallLower', directive('lower'));
  Vue.directive('WaterfallUpper', directive('upper'));
};

/* harmony default export */ var waterfall = (directive);
// CONCATENATED MODULE: ./es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return es_install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport Actionsheet */__webpack_require__.d(__webpack_exports__, "Actionsheet", function() { return actionsheet; });
/* concated harmony reexport AddressEdit */__webpack_require__.d(__webpack_exports__, "AddressEdit", function() { return address_edit; });
/* concated harmony reexport AddressList */__webpack_require__.d(__webpack_exports__, "AddressList", function() { return address_list; });
/* concated harmony reexport Area */__webpack_require__.d(__webpack_exports__, "Area", function() { return es_area; });
/* concated harmony reexport Avatar */__webpack_require__.d(__webpack_exports__, "Avatar", function() { return avatar; });
/* concated harmony reexport Badge */__webpack_require__.d(__webpack_exports__, "Badge", function() { return badge; });
/* concated harmony reexport BadgeGroup */__webpack_require__.d(__webpack_exports__, "BadgeGroup", function() { return badge_group; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "Button", function() { return es_button; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return card; });
/* concated harmony reexport Cell */__webpack_require__.d(__webpack_exports__, "Cell", function() { return cell; });
/* concated harmony reexport CellGroup */__webpack_require__.d(__webpack_exports__, "CellGroup", function() { return cell_group; });
/* concated harmony reexport CellSwipe */__webpack_require__.d(__webpack_exports__, "CellSwipe", function() { return cell_swipe; });
/* concated harmony reexport Checkbox */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return es_checkbox; });
/* concated harmony reexport CheckboxGroup */__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return checkbox_group; });
/* concated harmony reexport Circle */__webpack_require__.d(__webpack_exports__, "Circle", function() { return circle; });
/* concated harmony reexport Col */__webpack_require__.d(__webpack_exports__, "Col", function() { return col; });
/* concated harmony reexport Collapse */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return collapse; });
/* concated harmony reexport CollapseItem */__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return collapse_item; });
/* concated harmony reexport ContactCard */__webpack_require__.d(__webpack_exports__, "ContactCard", function() { return contact_card; });
/* concated harmony reexport ContactEdit */__webpack_require__.d(__webpack_exports__, "ContactEdit", function() { return contact_edit; });
/* concated harmony reexport ContactList */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return contact_list; });
/* concated harmony reexport CouponCell */__webpack_require__.d(__webpack_exports__, "CouponCell", function() { return coupon_cell; });
/* concated harmony reexport CouponList */__webpack_require__.d(__webpack_exports__, "CouponList", function() { return coupon_list; });
/* concated harmony reexport Crumb */__webpack_require__.d(__webpack_exports__, "Crumb", function() { return crumb; });
/* concated harmony reexport CrumbItem */__webpack_require__.d(__webpack_exports__, "CrumbItem", function() { return crumb_item; });
/* concated harmony reexport DatetimePicker */__webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return datetime_picker; });
/* concated harmony reexport Dialog */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return es_dialog; });
/* concated harmony reexport EmployeeField */__webpack_require__.d(__webpack_exports__, "EmployeeField", function() { return employee_field; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return field; });
/* concated harmony reexport GoodsAction */__webpack_require__.d(__webpack_exports__, "GoodsAction", function() { return goods_action; });
/* concated harmony reexport GoodsActionBigBtn */__webpack_require__.d(__webpack_exports__, "GoodsActionBigBtn", function() { return goods_action_big_btn; });
/* concated harmony reexport GoodsActionMiniBtn */__webpack_require__.d(__webpack_exports__, "GoodsActionMiniBtn", function() { return goods_action_mini_btn; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "Icon", function() { return icon; });
/* concated harmony reexport ImagePreview */__webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return es_image_preview; });
/* concated harmony reexport Info */__webpack_require__.d(__webpack_exports__, "Info", function() { return info; });
/* concated harmony reexport Lazyload */__webpack_require__.d(__webpack_exports__, "Lazyload", function() { return lazyload; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return list; });
/* concated harmony reexport Loading */__webpack_require__.d(__webpack_exports__, "Loading", function() { return loading; });
/* concated harmony reexport Locale */__webpack_require__.d(__webpack_exports__, "Locale", function() { return es_locale; });
/* concated harmony reexport NavBar */__webpack_require__.d(__webpack_exports__, "NavBar", function() { return nav_bar; });
/* concated harmony reexport NoticeBar */__webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return notice_bar; });
/* concated harmony reexport NumberKeyboard */__webpack_require__.d(__webpack_exports__, "NumberKeyboard", function() { return number_keyboard; });
/* concated harmony reexport Pagination */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination; });
/* concated harmony reexport Panel */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel; });
/* concated harmony reexport PasswordInput */__webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return password_input; });
/* concated harmony reexport Picker */__webpack_require__.d(__webpack_exports__, "Picker", function() { return picker; });
/* concated harmony reexport Popup */__webpack_require__.d(__webpack_exports__, "Popup", function() { return es_popup; });
/* concated harmony reexport Progress */__webpack_require__.d(__webpack_exports__, "Progress", function() { return es_progress; });
/* concated harmony reexport PullRefresh */__webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return pull_refresh; });
/* concated harmony reexport Radio */__webpack_require__.d(__webpack_exports__, "Radio", function() { return es_radio; });
/* concated harmony reexport RadioGroup */__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return radio_group; });
/* concated harmony reexport Rate */__webpack_require__.d(__webpack_exports__, "Rate", function() { return es_rate; });
/* concated harmony reexport Row */__webpack_require__.d(__webpack_exports__, "Row", function() { return row; });
/* concated harmony reexport Search */__webpack_require__.d(__webpack_exports__, "Search", function() { return search; });
/* concated harmony reexport Sku */__webpack_require__.d(__webpack_exports__, "Sku", function() { return sku; });
/* concated harmony reexport Slider */__webpack_require__.d(__webpack_exports__, "Slider", function() { return slider; });
/* concated harmony reexport Step */__webpack_require__.d(__webpack_exports__, "Step", function() { return step; });
/* concated harmony reexport Stepper */__webpack_require__.d(__webpack_exports__, "Stepper", function() { return stepper; });
/* concated harmony reexport Steps */__webpack_require__.d(__webpack_exports__, "Steps", function() { return steps; });
/* concated harmony reexport SubmitBar */__webpack_require__.d(__webpack_exports__, "SubmitBar", function() { return submit_bar; });
/* concated harmony reexport Swipe */__webpack_require__.d(__webpack_exports__, "Swipe", function() { return swipe; });
/* concated harmony reexport SwipeCell */__webpack_require__.d(__webpack_exports__, "SwipeCell", function() { return swipe_cell; });
/* concated harmony reexport SwipeItem */__webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return swipe_item; });
/* concated harmony reexport Switch */__webpack_require__.d(__webpack_exports__, "Switch", function() { return es_switch; });
/* concated harmony reexport SwitchCell */__webpack_require__.d(__webpack_exports__, "SwitchCell", function() { return switch_cell; });
/* concated harmony reexport Tab */__webpack_require__.d(__webpack_exports__, "Tab", function() { return tab; });
/* concated harmony reexport Tabbar */__webpack_require__.d(__webpack_exports__, "Tabbar", function() { return tabbar; });
/* concated harmony reexport TabbarItem */__webpack_require__.d(__webpack_exports__, "TabbarItem", function() { return tabbar_item; });
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return tag; });
/* concated harmony reexport Toast */__webpack_require__.d(__webpack_exports__, "Toast", function() { return es_toast; });
/* concated harmony reexport TreeSelect */__webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return tree_select; });
/* concated harmony reexport Uploader */__webpack_require__.d(__webpack_exports__, "Uploader", function() { return uploader; });
/* concated harmony reexport Waterfall */__webpack_require__.d(__webpack_exports__, "Waterfall", function() { return waterfall; });
// This file is auto gererated by build/build-entry.js










































































var version = '1.3.26';
var components = [actionsheet, address_edit, address_list, es_area, avatar, badge, badge_group, es_button, card, cell, cell_group, cell_swipe, es_checkbox, checkbox_group, circle, col, collapse, collapse_item, contact_card, contact_edit, contact_list, coupon_cell, coupon_list, crumb, crumb_item, datetime_picker, es_dialog, employee_field, field, goods_action, goods_action_big_btn, goods_action_mini_btn, icon, es_image_preview, info, list, loading, es_locale, nav_bar, notice_bar, number_keyboard, pagination, panel, password_input, picker, es_popup, es_progress, pull_refresh, es_radio, radio_group, es_rate, row, search, sku, slider, step, stepper, steps, submit_bar, swipe, swipe_cell, swipe_item, es_switch, switch_cell, tab, tabbar, tabbar_item, tabs, tag, es_toast, tree_select, uploader];

var es_install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  es_install(window.Vue);
}


/* harmony default export */ var es = __webpack_exports__["default"] = ({
  install: es_install,
  version: version
});

/***/ })
/******/ ]);
});