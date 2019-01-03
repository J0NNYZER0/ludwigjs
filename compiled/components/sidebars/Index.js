"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactRouterHashLink=require("react-router-hash-link");function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var Sidebar=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),c.state={show:!1,toggle:!1},c.sidebarRef=_react.default.createRef(),c.handleToggle=c.handleToggle.bind(_assertThisInitialized(_assertThisInitialized(c))),c.handleScroll=c.handleScroll.bind(_assertThisInitialized(_assertThisInitialized(c))),c}return _inherits(b,a),_createClass(b,[{key:"componentDidMount",value:function a(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function a(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleSectionClick",value:function d(a){var b=this,c=this.state.show;this.setState(_objectSpread({},this.state,{show:!c,section:a}),function(){console.log("test",b.state.section)})}},{key:"handleToggle",value:function b(){var a=this.state.toggle;this.setState(_objectSpread({},this.state,{toggle:!a}))}},{key:"handleScroll",value:function c(){var a=this.sidebarRef.current,b=a.offsetTop;window.pageYOffset>b?(this.setState(_objectSpread({},this.state,{toggle:!1})),a.classList.add("stuck"),a.classList.add("closed")):(a.classList.remove("stuck"),a.classList.remove("closed"))}},{key:"render",value:function h(){var a=this,b=this.state,c=b.show,d=b.toggle,e=b.section,f=this.props.items,g=function(a,b){var c=a.offsetTop-b;window.scroll({top:c,left:0,behavior:"smooth"})};return _react.default.createElement("div",{className:!1===d?"sidebar":"sidebar stuck",ref:this.sidebarRef},_react.default.createElement("div",{className:"toggle",onClick:this.handleToggle},_react.default.createElement("span",null,"Ludwig v1.0.0")),_react.default.createElement("nav",null,_react.default.createElement("ul",null,f.map(function(b,c){return _react.default.createElement("li",{key:c,className:e===c?"show":""},_react.default.createElement("span",{onClick:a.handleSectionClick.bind(a,c)},b.title),_react.default.createElement("ul",null,b.categories.map(function(a,c){var d=b.title+" "+a.title;return _react.default.createElement("li",{key:c},_react.default.createElement(_reactRouterHashLink.HashLink,{to:"/docs#".concat(d.replace(/\s/g,"_").toLowerCase()),scroll:function b(a){return g(a,70)}},a.title))})))}))),_react.default.createElement(_reactRouterHashLink.HashLink,{to:"/docs#top",className:"gototop",smooth:!0},_react.default.createElement("span",null,"Go To Top")))}}]),b}(_react.Component),_default=Sidebar;exports.default=_default;