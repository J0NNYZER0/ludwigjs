"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactRouterDom=require("react-router-dom"),_ui=require("@ludwigjs/ui"),_index=require("../constants/index");function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var Accounts=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function b(){var a=this.props.account;return a.status===_index.Constants.ACCOUNT_STATUS.LOGGED_IN?-1===a.scope.indexOf("admin")?_react.default.createElement(_reactRouterDom.Redirect,{to:"/login"}):_react.default.createElement("div",null,_react.default.createElement("section",{className:"t-mrg bolt-btm bolt-top"},_react.default.createElement(_ui.Elements.PageTitle,{titleText:"Accounts"})),_react.default.createElement("section",null,_react.default.createElement("div",{className:"tblgrp"},_react.default.createElement("div",{className:"tbl"},_react.default.createElement("ul",{className:"tbl-hdr"},_react.default.createElement("li",null,"User"),_react.default.createElement("li",null,"Email"),_react.default.createElement("li",null,"Status")),_react.default.createElement("ul",{className:"tbl-bdy"},_react.default.createElement("li",null,"MrTest1"),_react.default.createElement("li",null,"MrTest1@xxxxxx.com"),_react.default.createElement("li",null,"Active ",_react.default.createElement("i",null,"(logged in)")))),_react.default.createElement("div",{className:"tbl"},_react.default.createElement("ul",{className:"tbl-hdr"},_react.default.createElement("li",null,"User"),_react.default.createElement("li",null,"Email"),_react.default.createElement("li",null,"Status")),_react.default.createElement("ul",{className:"tbl-bdy"},_react.default.createElement("li",null,"MrTest1"),_react.default.createElement("li",null,"MrTest1@xxxxxx.com"),_react.default.createElement("li",null,"Active ",_react.default.createElement("i",null,"(logged in)"))))))):_react.default.createElement(_reactRouterDom.Redirect,{to:"/login"})}}]),b}(_react.Component),_default=Accounts;exports.default=_default;