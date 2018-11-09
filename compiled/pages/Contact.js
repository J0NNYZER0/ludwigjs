"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_MainTitle=_interopRequireDefault(require("../components/MainTitle")),_Slideshow=_interopRequireDefault(require("../components/Slideshow")),_Index=_interopRequireDefault(require("../components/hero/Index")),_Contact=_interopRequireDefault(require("../forms/Contact"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var Widgets=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),c.state={loading:0===a.widgets.length},c}return _inherits(b,a),_createClass(b,[{key:"render",value:function a(){return _react.default.createElement("div",null,_react.default.createElement("section",{className:"t-mrg bolt-btm bolt-top"},_react.default.createElement(_MainTitle.default,{titleText:"Contact"})),_react.default.createElement("section",{className:"t-mrg bolt-btm"},_react.default.createElement(_Slideshow.default,null,_react.default.createElement(_Index.default,_extends({key:1},this.props,{classNames:"cogs",text:"I am a Mindless Cog in the Machine"}),_react.default.createElement("div",{className:"banner cog"})),_react.default.createElement(_Index.default,_extends({key:2},this.props,{classNames:"bolts",text:"I Want to Be a Magical Full-stack Beast."}),_react.default.createElement("div",{className:"banner beastie"})))),_react.default.createElement("section",null,_react.default.createElement(_Contact.default,_extends({},this.props,{formTitle:"",subject:"General Request",contactType:0}))))}}]),b}(_react.Component),_default=Widgets;exports.default=_default;