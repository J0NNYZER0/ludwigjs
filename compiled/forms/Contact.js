"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_Text=_interopRequireDefault(require("./inputs/Text")),_TextArea=_interopRequireDefault(require("./inputs/TextArea")),_CharacterCounter=_interopRequireDefault(require("./inputs/CharacterCounter"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var defaultState={email:"",subject:"",contact_type:-1,message:""},ContactForm=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),c.state={form:_objectSpread({},defaultState,{subject:a.subject,contact_type:a.contactType})},c.handleOnChange=c.handleOnChange.bind(_assertThisInitialized(_assertThisInitialized(c))),c.handleSubmit=c.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(c))),c}return _inherits(b,a),_createClass(b,[{key:"handleOnChange",value:function b(a){this.state.form[a.target.name]=a.target.value,this.setState({form:this.state.form})}},{key:"handleSubmit",value:function i(a){var b=this,c=this.props,d=c.actions,e=c.callback,f=void 0===e?function(){}:e,g=c.contactType,h=c.subject;a.preventDefault(),d.contact.send(this.state.form).then(function(){return b.setState({form:_objectSpread({},defaultState)})}).then(function(){return f()})}},{key:"render",value:function d(){var a=this.props,b=a.formTitle,c=a.formData;return[_react.default.createElement("h1",{key:"title"},b),_react.default.createElement("form",{key:"contact-form"},_react.default.createElement(_Text.default,{name:"email",onChange:this.handleOnChange,placeholder:"Email",value:this.state.form.email}),_react.default.createElement("br",null),_react.default.createElement(_CharacterCounter.default,{C:_TextArea.default,ct:250,ctType:"max",name:"message",onChange:this.handleOnChange,placeholder:"Message (optional)",value:this.state.form.message}),_react.default.createElement("br",null),_react.default.createElement("button",{className:"btn",onClick:this.handleSubmit},"Submit"))]}}]),b}(_react.Component),_default=ContactForm;exports.default=_default;