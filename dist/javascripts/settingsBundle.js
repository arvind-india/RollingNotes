!function t(e,n,o){function r(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return r(n?n:t)},l,l.exports,t,e,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(t,e,n){(function(e,o,r){function r(t,e,n){if(!(this instanceof r))return new r(t,e,n);var o=typeof t;if("base64"===e&&"string"===o)for(t=B(t);t.length%4!==0;)t+="=";var i;if("number"===o)i=F(t);else if("string"===o)i=r.byteLength(t,e);else{if("object"!==o)throw new Error("First argument needs to be a number, array or string.");i=F(t.length)}var s;r._useTypedArrays?s=r._augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0);var a;if(r._useTypedArrays&&"number"==typeof t.byteLength)s._set(t);else if(M(t))for(a=0;i>a;a++)s[a]=r.isBuffer(t)?t.readUInt8(a):t[a];else if("string"===o)s.write(t,0,e);else if("number"===o&&!r._useTypedArrays&&!n)for(a=0;i>a;a++)s[a]=0;return s}function i(t,e,n,o){n=Number(n)||0;var i=t.length-n;o?(o=Number(o),o>i&&(o=i)):o=i;var s=e.length;q(s%2===0,"Invalid hex string"),o>s/2&&(o=s/2);for(var a=0;o>a;a++){var u=parseInt(e.substr(2*a,2),16);q(!isNaN(u),"Invalid hex string"),t[n+a]=u}return r._charsWritten=2*a,a}function s(t,e,n,o){var i=r._charsWritten=D(N(e),t,n,o);return i}function a(t,e,n,o){var i=r._charsWritten=D(T(e),t,n,o);return i}function u(t,e,n,o){return a(t,e,n,o)}function l(t,e,n,o){var i=r._charsWritten=D($(e),t,n,o);return i}function f(t,e,n,o){var i=r._charsWritten=D(O(e),t,n,o);return i}function c(t,e,n){return R.fromByteArray(0===e&&n===t.length?t:t.slice(e,n))}function d(t,e,n){var o="",r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)t[i]<=127?(o+=V(r)+String.fromCharCode(t[i]),r=""):r+="%"+t[i].toString(16);return o+V(r)}function g(t,e,n){var o="";n=Math.min(t.length,n);for(var r=e;n>r;r++)o+=String.fromCharCode(t[r]);return o}function h(t,e,n){return g(t,e,n)}function p(t,e,n){var o=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>o)&&(n=o);for(var r="",i=e;n>i;i++)r+=S(t[i]);return r}function b(t,e,n){for(var o=t.slice(e,n),r="",i=0;i<o.length;i+=2)r+=String.fromCharCode(o[i]+256*o[i+1]);return r}function y(t,e,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==e&&null!==e,"missing offset"),q(e+1<t.length,"Trying to read beyond buffer length"));var r=t.length;if(!(e>=r)){var i;return n?(i=t[e],r>e+1&&(i|=t[e+1]<<8)):(i=t[e]<<8,r>e+1&&(i|=t[e+1])),i}}function m(t,e,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==e&&null!==e,"missing offset"),q(e+3<t.length,"Trying to read beyond buffer length"));var r=t.length;if(!(e>=r)){var i;return n?(r>e+2&&(i=t[e+2]<<16),r>e+1&&(i|=t[e+1]<<8),i|=t[e],r>e+3&&(i+=t[e+3]<<24>>>0)):(r>e+1&&(i=t[e+1]<<16),r>e+2&&(i|=t[e+2]<<8),r>e+3&&(i|=t[e+3]),i+=t[e]<<24>>>0),i}}function v(t,e,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==e&&null!==e,"missing offset"),q(e+1<t.length,"Trying to read beyond buffer length"));var r=t.length;if(!(e>=r)){var i=y(t,e,n,!0),s=32768&i;return s?-1*(65535-i+1):i}}function w(t,e,n,o){o||(q("boolean"==typeof n,"missing or invalid endian"),q(void 0!==e&&null!==e,"missing offset"),q(e+3<t.length,"Trying to read beyond buffer length"));var r=t.length;if(!(e>=r)){var i=m(t,e,n,!0),s=2147483648&i;return s?-1*(4294967295-i+1):i}}function k(t,e,n,o){return o||(q("boolean"==typeof n,"missing or invalid endian"),q(e+3<t.length,"Trying to read beyond buffer length")),z.read(t,e,n,23,4)}function I(t,e,n,o){return o||(q("boolean"==typeof n,"missing or invalid endian"),q(e+7<t.length,"Trying to read beyond buffer length")),z.read(t,e,n,52,8)}function L(t,e,n,o,r){r||(q(void 0!==e&&null!==e,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+1<t.length,"trying to write beyond buffer length"),j(e,65535));var i=t.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,2);a>s;s++)t[n+s]=(e&255<<8*(o?s:1-s))>>>8*(o?s:1-s)}function E(t,e,n,o,r){r||(q(void 0!==e&&null!==e,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+3<t.length,"trying to write beyond buffer length"),j(e,4294967295));var i=t.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,4);a>s;s++)t[n+s]=e>>>8*(o?s:3-s)&255}function x(t,e,n,o,r){r||(q(void 0!==e&&null!==e,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+1<t.length,"Trying to write beyond buffer length"),P(e,32767,-32768));var i=t.length;n>=i||(e>=0?L(t,e,n,o,r):L(t,65535+e+1,n,o,r))}function C(t,e,n,o,r){r||(q(void 0!==e&&null!==e,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+3<t.length,"Trying to write beyond buffer length"),P(e,2147483647,-2147483648));var i=t.length;n>=i||(e>=0?E(t,e,n,o,r):E(t,4294967295+e+1,n,o,r))}function U(t,e,n,o,r){r||(q(void 0!==e&&null!==e,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+3<t.length,"Trying to write beyond buffer length"),J(e,3.4028234663852886e38,-3.4028234663852886e38));var i=t.length;n>=i||z.write(t,e,n,o,23,4)}function A(t,e,n,o,r){r||(q(void 0!==e&&null!==e,"missing value"),q("boolean"==typeof o,"missing or invalid endian"),q(void 0!==n&&null!==n,"missing offset"),q(n+7<t.length,"Trying to write beyond buffer length"),J(e,1.7976931348623157e308,-1.7976931348623157e308));var i=t.length;n>=i||z.write(t,e,n,o,52,8)}function B(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function _(t,e,n){return"number"!=typeof t?n:(t=~~t,t>=e?e:t>=0?t:(t+=e,t>=0?t:0))}function F(t){return t=~~Math.ceil(+t),0>t?0:t}function W(t){return(Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)}function M(t){return W(t)||r.isBuffer(t)||t&&"object"==typeof t&&"number"==typeof t.length}function S(t){return 16>t?"0"+t.toString(16):t.toString(16)}function N(t){for(var e=[],n=0;n<t.length;n++){var o=t.charCodeAt(n);if(127>=o)e.push(t.charCodeAt(n));else{var r=n;o>=55296&&57343>=o&&n++;for(var i=encodeURIComponent(t.slice(r,n+1)).substr(1).split("%"),s=0;s<i.length;s++)e.push(parseInt(i[s],16))}}return e}function T(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}function O(t){for(var e,n,o,r=[],i=0;i<t.length;i++)e=t.charCodeAt(i),n=e>>8,o=e%256,r.push(o),r.push(n);return r}function $(t){return R.toByteArray(t)}function D(t,e,n,o){for(var r=0;o>r&&!(r+n>=e.length||r>=t.length);r++)e[r+n]=t[r];return r}function V(t){try{return decodeURIComponent(t)}catch(e){return String.fromCharCode(65533)}}function j(t,e){q("number"==typeof t,"cannot write a non-number as a number"),q(t>=0,"specified a negative value for writing an unsigned value"),q(e>=t,"value is larger than maximum value for type"),q(Math.floor(t)===t,"value has a fractional component")}function P(t,e,n){q("number"==typeof t,"cannot write a non-number as a number"),q(e>=t,"value larger than maximum allowed value"),q(t>=n,"value smaller than minimum allowed value"),q(Math.floor(t)===t,"value has a fractional component")}function J(t,e,n){q("number"==typeof t,"cannot write a non-number as a number"),q(e>=t,"value larger than maximum allowed value"),q(t>=n,"value smaller than minimum allowed value")}function q(t,e){if(!t)throw new Error(e||"Failed assertion")}var R=t("base64-js"),z=t("ieee754");n.Buffer=r,n.SlowBuffer=r,n.INSPECT_MAX_BYTES=50,r.poolSize=8192,r._useTypedArrays=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray}catch(n){return!1}}(),r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.isBuffer=function(t){return!(null===t||void 0===t||!t._isBuffer)},r.byteLength=function(t,e){var n;switch(t+="",e||"utf8"){case"hex":n=t.length/2;break;case"utf8":case"utf-8":n=N(t).length;break;case"ascii":case"binary":case"raw":n=t.length;break;case"base64":n=$(t).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*t.length;break;default:throw new Error("Unknown encoding")}return n},r.concat=function(t,e){if(q(W(t),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===t.length)return new r(0);if(1===t.length)return t[0];var n;if("number"!=typeof e)for(e=0,n=0;n<t.length;n++)e+=t[n].length;var o=new r(e),i=0;for(n=0;n<t.length;n++){var s=t[n];s.copy(o,i),i+=s.length}return o},r.prototype.write=function(t,e,n,o){if(isFinite(e))isFinite(n)||(o=n,n=void 0);else{var r=o;o=e,e=n,n=r}e=Number(e)||0;var c=this.length-e;n?(n=Number(n),n>c&&(n=c)):n=c,o=String(o||"utf8").toLowerCase();var d;switch(o){case"hex":d=i(this,t,e,n);break;case"utf8":case"utf-8":d=s(this,t,e,n);break;case"ascii":d=a(this,t,e,n);break;case"binary":d=u(this,t,e,n);break;case"base64":d=l(this,t,e,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=f(this,t,e,n);break;default:throw new Error("Unknown encoding")}return d},r.prototype.toString=function(t,e,n){var o=this;if(t=String(t||"utf8").toLowerCase(),e=Number(e)||0,n=void 0!==n?Number(n):n=o.length,n===e)return"";var r;switch(t){case"hex":r=p(o,e,n);break;case"utf8":case"utf-8":r=d(o,e,n);break;case"ascii":r=g(o,e,n);break;case"binary":r=h(o,e,n);break;case"base64":r=c(o,e,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=b(o,e,n);break;default:throw new Error("Unknown encoding")}return r},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},r.prototype.copy=function(t,e,n,o){var i=this;if(n||(n=0),o||0===o||(o=this.length),e||(e=0),o!==n&&0!==t.length&&0!==i.length){q(o>=n,"sourceEnd < sourceStart"),q(e>=0&&e<t.length,"targetStart out of bounds"),q(n>=0&&n<i.length,"sourceStart out of bounds"),q(o>=0&&o<=i.length,"sourceEnd out of bounds"),o>this.length&&(o=this.length),t.length-e<o-n&&(o=t.length-e+n);var s=o-n;if(100>s||!r._useTypedArrays)for(var a=0;s>a;a++)t[a+e]=this[a+n];else t._set(this.subarray(n,n+s),e)}},r.prototype.slice=function(t,e){var n=this.length;if(t=_(t,n,0),e=_(e,n,n),r._useTypedArrays)return r._augment(this.subarray(t,e));for(var o=e-t,i=new r(o,void 0,!0),s=0;o>s;s++)i[s]=this[s+t];return i},r.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},r.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},r.prototype.readUInt8=function(t,e){return e||(q(void 0!==t&&null!==t,"missing offset"),q(t<this.length,"Trying to read beyond buffer length")),t>=this.length?void 0:this[t]},r.prototype.readUInt16LE=function(t,e){return y(this,t,!0,e)},r.prototype.readUInt16BE=function(t,e){return y(this,t,!1,e)},r.prototype.readUInt32LE=function(t,e){return m(this,t,!0,e)},r.prototype.readUInt32BE=function(t,e){return m(this,t,!1,e)},r.prototype.readInt8=function(t,e){if(e||(q(void 0!==t&&null!==t,"missing offset"),q(t<this.length,"Trying to read beyond buffer length")),!(t>=this.length)){var n=128&this[t];return n?-1*(255-this[t]+1):this[t]}},r.prototype.readInt16LE=function(t,e){return v(this,t,!0,e)},r.prototype.readInt16BE=function(t,e){return v(this,t,!1,e)},r.prototype.readInt32LE=function(t,e){return w(this,t,!0,e)},r.prototype.readInt32BE=function(t,e){return w(this,t,!1,e)},r.prototype.readFloatLE=function(t,e){return k(this,t,!0,e)},r.prototype.readFloatBE=function(t,e){return k(this,t,!1,e)},r.prototype.readDoubleLE=function(t,e){return I(this,t,!0,e)},r.prototype.readDoubleBE=function(t,e){return I(this,t,!1,e)},r.prototype.writeUInt8=function(t,e,n){n||(q(void 0!==t&&null!==t,"missing value"),q(void 0!==e&&null!==e,"missing offset"),q(e<this.length,"trying to write beyond buffer length"),j(t,255)),e>=this.length||(this[e]=t)},r.prototype.writeUInt16LE=function(t,e,n){L(this,t,e,!0,n)},r.prototype.writeUInt16BE=function(t,e,n){L(this,t,e,!1,n)},r.prototype.writeUInt32LE=function(t,e,n){E(this,t,e,!0,n)},r.prototype.writeUInt32BE=function(t,e,n){E(this,t,e,!1,n)},r.prototype.writeInt8=function(t,e,n){n||(q(void 0!==t&&null!==t,"missing value"),q(void 0!==e&&null!==e,"missing offset"),q(e<this.length,"Trying to write beyond buffer length"),P(t,127,-128)),e>=this.length||(t>=0?this.writeUInt8(t,e,n):this.writeUInt8(255+t+1,e,n))},r.prototype.writeInt16LE=function(t,e,n){x(this,t,e,!0,n)},r.prototype.writeInt16BE=function(t,e,n){x(this,t,e,!1,n)},r.prototype.writeInt32LE=function(t,e,n){C(this,t,e,!0,n)},r.prototype.writeInt32BE=function(t,e,n){C(this,t,e,!1,n)},r.prototype.writeFloatLE=function(t,e,n){U(this,t,e,!0,n)},r.prototype.writeFloatBE=function(t,e,n){U(this,t,e,!1,n)},r.prototype.writeDoubleLE=function(t,e,n){A(this,t,e,!0,n)},r.prototype.writeDoubleBE=function(t,e,n){A(this,t,e,!1,n)},r.prototype.fill=function(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),"string"==typeof t&&(t=t.charCodeAt(0)),q("number"==typeof t&&!isNaN(t),"value is not a number"),q(n>=e,"end < start"),n!==e&&0!==this.length){q(e>=0&&e<this.length,"start out of bounds"),q(n>=0&&n<=this.length,"end out of bounds");for(var o=e;n>o;o++)this[o]=t}},r.prototype.inspect=function(){for(var t=[],e=this.length,o=0;e>o;o++)if(t[o]=S(this[o]),o===n.INSPECT_MAX_BYTES){t[o+1]="...";break}return"<Buffer "+t.join(" ")+">"},r.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(r._useTypedArrays)return new r(this).buffer;for(var t=new Uint8Array(this.length),e=0,n=t.length;n>e;e+=1)t[e]=this[e];return t.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var X=r.prototype;r._augment=function(t){return t._isBuffer=!0,t._get=t.get,t._set=t.set,t.get=X.get,t.set=X.set,t.write=X.write,t.toString=X.toString,t.toLocaleString=X.toString,t.toJSON=X.toJSON,t.copy=X.copy,t.slice=X.slice,t.readUInt8=X.readUInt8,t.readUInt16LE=X.readUInt16LE,t.readUInt16BE=X.readUInt16BE,t.readUInt32LE=X.readUInt32LE,t.readUInt32BE=X.readUInt32BE,t.readInt8=X.readInt8,t.readInt16LE=X.readInt16LE,t.readInt16BE=X.readInt16BE,t.readInt32LE=X.readInt32LE,t.readInt32BE=X.readInt32BE,t.readFloatLE=X.readFloatLE,t.readFloatBE=X.readFloatBE,t.readDoubleLE=X.readDoubleLE,t.readDoubleBE=X.readDoubleBE,t.writeUInt8=X.writeUInt8,t.writeUInt16LE=X.writeUInt16LE,t.writeUInt16BE=X.writeUInt16BE,t.writeUInt32LE=X.writeUInt32LE,t.writeUInt32BE=X.writeUInt32BE,t.writeInt8=X.writeInt8,t.writeInt16LE=X.writeInt16LE,t.writeInt16BE=X.writeInt16BE,t.writeInt32LE=X.writeInt32LE,t.writeInt32BE=X.writeInt32BE,t.writeFloatLE=X.writeFloatLE,t.writeFloatBE=X.writeFloatBE,t.writeDoubleLE=X.writeDoubleLE,t.writeDoubleBE=X.writeDoubleBE,t.fill=X.fill,t.inspect=X.inspect,t.toArrayBuffer=X.toArrayBuffer,t}}).call(this,t("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"base64-js":2,buffer:1,ieee754:3,oMfpAn:4}],2:[function(t,e,n){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function n(t){var e=t.charCodeAt(0);return e===s?62:e===a?63:u>e?-1:u+10>e?e-u+26+26:f+26>e?e-f:l+26>e?e-l+26:void 0}function o(t){function e(t){l[c++]=t}var o,r,s,a,u,l;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=t.length;u="="===t.charAt(f-2)?2:"="===t.charAt(f-1)?1:0,l=new i(3*t.length/4-u),s=u>0?t.length-4:t.length;var c=0;for(o=0,r=0;s>o;o+=4,r+=3)a=n(t.charAt(o))<<18|n(t.charAt(o+1))<<12|n(t.charAt(o+2))<<6|n(t.charAt(o+3)),e((16711680&a)>>16),e((65280&a)>>8),e(255&a);return 2===u?(a=n(t.charAt(o))<<2|n(t.charAt(o+1))>>4,e(255&a)):1===u&&(a=n(t.charAt(o))<<10|n(t.charAt(o+1))<<4|n(t.charAt(o+2))>>2,e(a>>8&255),e(255&a)),l}function r(e){function n(e){return t.charAt(e)}function o(t){return n(t>>18&63)+n(t>>12&63)+n(t>>6&63)+n(63&t)}var r,i,s,a=e.length%3,u="";for(r=0,s=e.length-a;s>r;r+=3)i=(e[r]<<16)+(e[r+1]<<8)+e[r+2],u+=o(i);switch(a){case 1:i=e[e.length-1],u+=n(i>>2),u+=n(i<<4&63),u+="==";break;case 2:i=(e[e.length-2]<<8)+e[e.length-1],u+=n(i>>10),u+=n(i>>4&63),u+=n(i<<2&63),u+="="}return u}var i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),l="a".charCodeAt(0),f="A".charCodeAt(0);e.toByteArray=o,e.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,t("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{buffer:1,oMfpAn:4}],3:[function(t,e,n){(function(){n.read=function(t,e,n,o,r){var i,s,a=8*r-o-1,u=(1<<a)-1,l=u>>1,f=-7,c=n?r-1:0,d=n?-1:1,g=t[e+c];for(c+=d,i=g&(1<<-f)-1,g>>=-f,f+=a;f>0;i=256*i+t[e+c],c+=d,f-=8);for(s=i&(1<<-f)-1,i>>=-f,f+=o;f>0;s=256*s+t[e+c],c+=d,f-=8);if(0===i)i=1-l;else{if(i===u)return s?0/0:1/0*(g?-1:1);s+=Math.pow(2,o),i-=l}return(g?-1:1)*s*Math.pow(2,i-o)},n.write=function(t,e,n,o,r,i){var s,a,u,l=8*i-r-1,f=(1<<l)-1,c=f>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,g=o?0:i-1,h=o?1:-1,p=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||1/0===e?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+c>=1?d/u:d*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=f?(a=0,s=f):s+c>=1?(a=(e*u-1)*Math.pow(2,r),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,r),s=0));r>=8;t[n+g]=255&a,g+=h,a/=256,r-=8);for(s=s<<r|a,l+=r;l>0;t[n+g]=255&s,g+=h,s/=256,l-=8);t[n+g-h]|=128*p}}).call(this,t("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{buffer:1,oMfpAn:4}],4:[function(t,e){(function(t){function n(){}var t=e.exports={};t.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var o=n.shift();o()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),t.title="browser",t.browser=!0,t.env={},t.argv=[],t.on=n,t.addListener=n,t.once=n,t.off=n,t.removeListener=n,t.removeAllListeners=n,t.emit=n,t.binding=function(){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,t("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{buffer:1,oMfpAn:4}],5:[function(t,e,n){(function(){n.defaultNote={design:{template:"defaultNote",text:{color:"color-1",preset:"5",alignment:"center"},background:{color:"color-8",opacity:"1"},hover:{selected:!0,color:"color-9",opacity:"1"},border:{color:"color-6",width:"4",radius:"0"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]},n.spiralNote={design:{template:"spiralNote",text:{color:"#000000",preset:"Body-L",alignment:"center"},background:{color:"rgba(255,255,255,1)",opacity:"1"},hover:{selected:!0,color:"rgba(175,204,255,1)",opacity:"1"},border:{color:"#505C73",width:"0",radius:"6"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]},n.postitNote={design:{template:"postitNote",text:{color:"#000000",preset:"Body-L",alignment:"center"},background:{color:"rgba(251,239,172,1)",opacity:"1"},hover:{selected:!0,color:"rgba(251,227,97,1)",opacity:"1"},border:{color:"#3f3a26",width:"0",radius:"3"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]},n.chalkboardNote={design:{template:"chalkboardNote",text:{color:"#FFFFFF",preset:"Body-L",alignment:"center"},background:{color:"rgba(72,104,35,1)",opacity:"1"},hover:{selected:!0,color:"rgba(94,141,48,1)",opacity:"1"},border:{color:"#FFFFFF",width:"8",radius:"8"}},transition:{effect:"fade",preview:"false",duration:"2"},notes:[]}}).call(this,t("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/defaultTemplates.js","/")},{buffer:1,oMfpAn:4}],6:[function(t){(function(){var e,n=t("./defaultTemplates");!function(){var t=angular.module("settingsApp",["ui.sortable"]);t.controller("settingsController",["$window","$scope","$http","$timeout",function(t,o,r,i){this.settings=t.settings;var s=function(t){return t.substring(t.indexOf(".")+1)},a=function(){var t=window.location.search.substring(window.location.search.indexOf("instance")+9,window.location.search.indexOf("&"));return t};o.updateComponent=function(t){this.settings=t,this.settings.instance=a(),r.post("/updateComponent",this.settings).success(function(){console.log("posting")}).error(function(t,e){console.log("OH NO! WE FAILED TO POST!!!!!"),console.log("data: "+t+"; status: "+e)}),Wix.Settings.triggerSettingsUpdatedEvent(settings,s(settings._id))};var u=function(t){var o=JSON.parse(JSON.stringify(n[t].design));return"defaultNote"===t&&(o.text.color=e.color,o.background.color=e["background-color"],o.border.color=e["border-color"],o.hover.color=e.hover),o},l=function(t){Wix.UI.set("color",{cssColor:t.text.color}),Wix.UI.set("bcolorWOpacity",{rgba:t.background.color,opacity:t.background.opacity}),Wix.UI.set("bOpacitySpinner",100*t.background.opacity),Wix.UI.set("hcolorWOpacity",{rgba:t.hover.color,opacity:t.hover.opacity}),Wix.UI.set("hOpacitySlider",100*t.hover.opacity),Wix.UI.set("borderColor",{cssColor:t.border.color}),Wix.UI.set("borderWidth",t.border.width),Wix.UI.set("radius",t.border.radius),Wix.UI.set("hoverCheckbox",t.hover.selected)};this.resetTemplate=function(){var t=u(settings.design.template);l(t),settings.design=t,o.updateComponent(settings)};var f=function(t){var e=u(settings.design.template),n=u(t.value),o=JSON.parse(JSON.stringify(settings.design));DeepDiff.observableDiff(e,o,function(t){DeepDiff.applyChange(n,n,t)}),l(n),settings.design=n};Wix.UI.onChange("template",function(t){f(t),o.updateComponent(settings)}),Wix.UI.onChange("color",function(t){settings.design.text.color=t.cssColor,o.updateComponent(settings)}),Wix.UI.onChange("textAlignGroup",function(t){settings.design.text.alignment=t.value,o.updateComponent(settings)});var c=function(t){return t.substring(5,t.length-1).replace(/ /g,"").split(",")};Wix.UI.onChange("bcolorWOpacity",function(t){settings.design.background.color=t.rgba,settings.design.background.opacity=t.opacity,Wix.UI.set("bOpacitySpinner",100*settings.design.background.opacity),o.updateComponent(settings)}),Wix.UI.onChange("bOpacitySpinner",function(t){var e=c(settings.design.background.color);settings.design.background.color="rgba("+e[0]+","+e[1]+","+e[2]+","+t/100+")",settings.design.background.opacity=t/100,Wix.UI.set("bcolorWOpacity",{rgba:settings.design.background.color,opacity:settings.design.background.opacity}),o.updateComponent(settings)}),Wix.UI.onChange("hoverCheckbox",function(t){settings.design.hover.selected=t,o.updateComponent(settings)}),Wix.UI.onChange("hcolorWOpacity",function(t){settings.design.hover.selected||Wix.UI.set("hoverCheckbox",!0),settings.design.hover.color=t.rgba,settings.design.hover.opacity=t.opacity,Wix.UI.set("hOpacitySlider",100*settings.design.hover.opacity),o.updateComponent(settings)}),Wix.UI.onChange("hOpacitySlider",function(t){settings.design.hover.selected||Wix.UI.set("hoverCheckbox",!0);var e=c(settings.design.hover.color);settings.design.hover.color="rgba("+e[0]+","+e[1]+","+e[2]+","+t/100+")",settings.design.hover.opacity=t/100,Wix.UI.set("hcolorWOpacity",{rgba:settings.design.hover.color,opacity:settings.design.hover.opacity}),o.updateComponent(settings)}),Wix.UI.onChange("borderColor",function(t){settings.design.border.color=t.cssColor,o.updateComponent(settings)}),Wix.UI.onChange("borderWidth",function(t){settings.design.border.width=t,o.updateComponent(settings)}),Wix.UI.onChange("radius",function(t){settings.design.border.radius=t,o.updateComponent(settings)}),o.visibleManageNotes=!1,this.showManageNotes=function(){o.visibleManageNotes=!0,$(".character-count-normal").removeClass("character-count-max"),$("textarea").removeClass("note-text-max-count")},this.hideManageNotes=function(){o.visibleManageNotes=!1},this.blur=function(){$(".character-count-normal").removeClass("character-count-max"),$("textarea").removeClass("note-text-max-count"),o.updateComponent(settings)},o.settings=t.settings,o.$watchCollection("settings.notes",function(){o.updateComponent(settings)}),this.addNote=function(){settings.notes.push({visibility:!0,msg:"",key:d(),link:{type:"",url:"",display:"",targetVal:"0"}}),g()};var d=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}var e;return e=t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},g=function(){i(function(){var t=$("textarea"),e=$(t[t.length-1]);e.focus()},0)};this.editNoteButton=function(t,e){this.settings.notes[e].visibility&&this.focusText(t)},this.focusText=function(t){i(function(){$("textarea:focus")||$("textarea:focus").blur(),$(t.target).closest(".note-container").find("textarea").focus()},0,!1)},this.deleteNote=function(t,e){t.splice(e,1)},o.hiddenNote=!1,o.showIcons=!1;var h=this;Wix.UI.onChange("transition",function(t){settings.transition.effect=t.value,h.playPreview()}),Wix.UI.onChange("duration",function(t){settings.transition.duration=Math.round(t),o.updateComponent(settings)}),this.playPreview=function(){settings.transition.preview=!0,o.updateComponent(settings),settings.transition.preview=!1},o.popupVisible=!1,o.upperTextVisible=!1,o.buttonsVisible=!1,o.optionsVisible=!1,o.linkOption=0,this.showLinkPopup=function(t){this.noteForLink=t,o.popupVisible=!0,o.buttonsVisible=!0,o.linkOption=0,b()},this.showLink=function(t){o.buttonsVisible=!1,o.optionsVisible=!0,o.linkOption=t},this.closeLinkPopup=function(){o.popupVisible=!1,o.upperTextVisible=!1,o.buttonsVisible=!1,o.optionsVisible=!1,o.linkOption=0},this.setLink=function(){o.options={1:"webLink",2:"pageLink",3:"emailLink",4:"docLink"};var t=o.options[o.linkOption],e=this.noteForLink[t];switch(p(this.noteForLink),this.noteForLink[t]=e,this.noteForLink.link.url=e,o.linkOption){case 1:this.noteForLink.link.display=e,console.log("targetVal: "+this.noteForLink.link.targetVal),this.noteForLink.link.target="1"===this.noteForLink.link.targetVal?"_top":"_blank",console.log("Target: "+this.noteForLink.link.target);break;case 2:var n=this,r=o,i=settings.pages.indexOf(this.noteForLink.pageLink);this.noteForLink.link.display=e,this.noteForLink.link.target="_top",Wix.Worker.getSiteInfo(function(t){n.noteForLink.link.url=t.baseUrl+"#!/"+n.settings.pageIds[i],r.updateComponent(n.settings)});break;case 3:this.noteForLink.link.url=y(this.noteForLink.emailLink,{subject:this.noteForLink.link.subject}),this.noteForLink.link.display="mail to: "+this.noteForLink.emailLink,this.noteForLink.link.target="";break;case 4:this.noteForLink.link.target="_blank",this.noteForLink.link.doc=!0}this.noteForLink.link.display=this.noteForLink.link.display.substring(0,30),o.updateComponent(settings),this.closeLinkPopup()},this.backToOptions=function(){o.optionsVisible=!1,o.buttonsVisible=!0,o.linkOption=0};var p=function(t){t.webLink="",t.pageLink="",t.emailLink="",t.docLink="",t.link.doc=!1,t.link.subject="",t.link.url=""};this.removeLink=function(t){p(t),t.link.display="",o.updateComponent(settings),this.closeLinkPopup()};var b=function(){Wix.getSitePages(function(t){settings.pages=_.pluck(t,"title"),settings.pageIds=_.pluck(t,"id")})},y=function(t,e){var n="mailto:";n+=window.encodeURIComponent(t);var o=[];return angular.forEach(e,function(t,e){o.push(e.toLowerCase()+"="+window.encodeURIComponent(t))}),o.length>0&&(n+="?"+o.join("&")),n};this.docLink=function(){var t=this,e=o;Wix.Settings.openMediaDialog(Wix.Settings.MediaType.DOCUMENT,!1,function(n){Wix.Utils.Media.getDocumentUrl(n.relativeUri);t.noteForLink.docLink=n.relativeUri,o.$apply(function(){t.noteForLink.link.display=n.fileName,t.noteForLink.link.display=t.noteForLink.link.display.substring(0,30),e.updateComponent(settings)})})},$(document).ready(function(){Wix.UI.initialize({numOfImages:100,isIconShown:!0,imageVisibility:"show",imagesToSync:0,imageLink:!1});var t=document.registerElement("site-template-colors");document.body.appendChild(new t);var n=["color","background-color","border-color"];e=$("site-template-colors").css(n),e.hover=$("site-template-colors").css("outline-color"),"color-1"===settings.design.text.color&&(settings.design=u("defaultNote"))})}]),t.directive("httpPrefix",function(){return{restrict:"A",require:"ngModel",link:function(t,e,n,o){function r(t){return t&&!/^(https):\/\//i.test(t)&&-1==="https://".indexOf(t)?(o.$setViewValue("https://"+t),o.$render(),"https://"+t):t}o.$formatters.push(r),o.$parsers.push(r)}}})}()}).call(this,t("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_71823114.js","/")},{"./defaultTemplates":5,buffer:1,oMfpAn:4}]},{},[6]);