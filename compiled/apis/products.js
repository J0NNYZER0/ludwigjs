"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Api=void 0;var _isomorphicFetch=_interopRequireDefault(require("isomorphic-fetch")),_index=require("../constants/index");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Api=/*#__PURE__*/function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"get",value:function a(){return new Promise(function(a,b){var c=encodeURI("".concat(_index.Constants.URI.ASSETS.PRODUCTS));(0,_isomorphicFetch.default)(c,{credentials:"include",method:"GET"}).then(function(b){return a(b.json())}).catch(function(a){return b(a)})})}}]),a}();exports.Api=Api;