// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,h,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,j=isNaN,_=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,c,s,l,f,p,g,d,b;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,j(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),c+=n.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[R(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var P,A=Object.prototype,F=A.toString,V=A.__defineGetter__,C=A.__defineSetter__,$=A.__lookupGetter__,G=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var I=P;function B(r,e,t){I(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"string"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return L&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&Z.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0,D="function"==typeof M?M.toStringTag:"",J=N()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[D],e=W(r,D);try{r[D]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[D]=t:delete r[D],n}:function(r){return U.call(r)},z=String.prototype.valueOf,q=N();function H(r){return"object"==typeof r&&(r instanceof String||(q?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function K(r){return X(r)||H(r)}B(K,"isPrimitive",X),B(K,"isObject",H);var Q=/./;function Y(r){return"boolean"==typeof r}var rr=Boolean,er=Boolean.prototype.toString,tr=N();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function or(r){return Y(r)||nr(r)}B(or,"isPrimitive",Y),B(or,"isObject",nr);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,cr=function(r){if(arguments.length){if(!Y(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ur)return ur;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=cr.document&&cr.document.childNodes,lr=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;B(fr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function br(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var yr="function"==typeof Q||"object"==typeof lr||"function"==typeof sr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?br(r).toLowerCase():e};function hr(r){return"function"===yr(r)}function vr(r,e){if(!X(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1&&!hr(e))throw new TypeError(k("invalid argument. Reviver argument must be a function. Value: `%s`.",e));try{return JSON.parse(r,e)}catch(r){return r}}function wr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var mr,Er=Object,jr=Object.getPrototypeOf;mr=hr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=mr,Or=Object.prototype;function Tr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=Er(r),_r(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&hr(e.constructor)&&"[object Function]"===J(e.constructor)&&W(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}var Sr="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function xr(r){var e,t;if(arguments.length>0){if(t=function(r,e){return Tr(e)?W(e,"flags")&&(r.flags=e.flags,!X(r.flags))?new TypeError(k("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):W(e,"capture")&&(r.capture=e.capture,!Y(r.capture))?new TypeError(k("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},r),t)throw t;return e.capture?new RegExp("("+Sr+")",e.flags):new RegExp(Sr,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Rr=xr({capture:!0}),kr=xr();B(xr,"REGEXP",kr),B(xr,"REGEXP_CAPTURE",Rr);var Pr=new RegExp("^"+xr.REGEXP.source+"+$"),Ar="\\r?\\n";function Fr(r){var e,t;if(arguments.length>0){if(t=function(r,e){return Tr(e)?W(e,"flags")&&(r.flags=e.flags,!X(r.flags))?new TypeError(k("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):W(e,"capture")&&(r.capture=e.capture,!Y(r.capture))?new TypeError(k("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},r),t)throw t;return e.capture?new RegExp("("+Ar+")",e.flags):new RegExp(Ar,e.flags)}return/\r?\n/}var Vr=Fr({capture:!0}),Cr=Fr();return B(Fr,"REGEXP",Cr),B(Fr,"REGEXP_CAPTURE",Vr),function(r,e){var t,n,o,i,a,u;if(!X(r))throw new TypeError(wr("null3F",r));if(arguments.length>1&&!hr(e))throw new TypeError(wr("nullBk",r));if(X(u=r)&&Pr.test(u)||""===r)return[];for(n=Fr(),0===(o=r.split(n))[o.length-1].length&&o.pop(),i=[],a=0;a<o.length;a++){if((t=e?vr(o[a],e):vr(o[a]))instanceof Error)return t;i.push(t)}return i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).parseNDJSON=e();
//# sourceMappingURL=browser.js.map
