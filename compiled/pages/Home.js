"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_viddy=require("viddy");function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}var Home=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function c(){var a=this,b=this.props.actions;return _react.default.createElement("div",null,_react.default.createElement("section",{className:"t-mrg bolt-btm bolt-top"},_react.default.createElement(_viddy.Heros.WithModal,_extends({},this.props,{buttonText:"Join the waitlist",classNames:"ludwig-bg-dk",click:function c(){return b.ui.modal(!a.props.ui.modal)},title:"Ludwig JS",text:"A badass fullstack JS boilerplate for rockstar engineers."}),_react.default.createElement(_viddy.Forms.Contact,_extends({},this.props,{callback:function a(){return b.ui.modal(!1)},contactType:2,formTitle:"Join The Waitlist",subject:"Join Waitlist"})))),_react.default.createElement("section",{className:"gry-brdr"},_react.default.createElement("h1",null,"A Powerful Full-Stack Javascript Boilerplate"),_react.default.createElement("p",null,"Ludwig is Reactjs on top of Nodejs with a select blend of\n              modern javascript technologies. Get your apps setup and\n              running with Ludwig. It might only take 5 minutes.")),_react.default.createElement("section",{className:"gry-brdr"},_react.default.createElement("h2",null,"Stupid Simple to Setup, Customize and Deploy"),_react.default.createElement("p",null,"Start your app, without the pain of installing and\n              configuring all the standard plumbing which most full\n              stack applications require.")),_react.default.createElement("section",{className:"bolt-btm"},_react.default.createElement("h2",null,"Built Only For Hardcore Javascript Engineers"),_react.default.createElement("p",null,"If you like getting your hands dirty in the blood,\n              guts and bones of boilerplate code, then Ludwig just might\n              be your next best friend.")),_react.default.createElement("section",{className:"b-rad-6 rad-grad3"},_react.default.createElement("h2",null,"Pick Your Poison"),_react.default.createElement("p",null,"Ludwig is a killer full stack boilerplate, filled with tinctures,\n              snake oils and a tiny drop of javascript...and most importantly,\n              it requires minimum setup. Since you, yo' momma and yo' momma's\n              momma all have different levels when it comes to using Ludwig,\n              we wanna help out."),_react.default.createElement(_viddy.GridLayouts.GridLayoutA,this.props)),_react.default.createElement("section",{className:"gry-brdr bolt-top"},_react.default.createElement("h3",null,"Caution: Noobs Beware*"),_react.default.createElement("p",{className:"gry-brdr"},_react.default.createElement("b",null,"Kudos for getting this far down the page! "),"However, if you tend to overengineer things and build things which have\n              snaggleteeth, please kindly refrain from bastardizing Ludwig.\n              He'll appreciate not being your science experiment gone bad."),_react.default.createElement("p",{className:"gry-brdr"},"Likewise, if code drives you batty and causes you great\n              pain and suffering then Ludwig won't be offended if you decide\n              to take a stroll down wordpress lane...nothing against wordpress"),_react.default.createElement("p",null,"But most of all, if you're known as the dude who generally\n              blows shit up, put your grenades back in your laptop bag and\n              proceed at your own risk. Ludwig likes all his appendages and\n              might get pissed if you accidentally maim him.")),_react.default.createElement("section",{className:"bolt-btm"},_react.default.createElement(_viddy.Forms.Contact,_extends({},this.props,{formTitle:"Request a Demo",subject:"Demo Request",contactType:1}))))}}]),b}(_react.Component),_default=Home;exports.default=_default;