"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ui = require("@ludwigjs/ui");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this = this;

      var actions = this.props.actions;
      return _react.default.createElement("div", null, _react.default.createElement("section", {
        className: "t-mrg bolt-btm bolt-top"
      }, _react.default.createElement(_ui.Heros.WithModal, _extends({}, this.props, {
        buttonText: "Join the waitlist",
        classNames: "ludwig-bg-dk",
        click: function click() {
          return actions.ui.modal(!_this.props.ui.modal);
        },
        title: "Ludwig JS",
        text: "A badass fullstack JS boilerplate for rockstar engineers"
      }), _react.default.createElement("h1", null, "Join the Waitlist"), _react.default.createElement(_ui.Forms.Contact, _extends({}, this.props, {
        callback: function callback() {
          return actions.ui.modal(false);
        },
        contactType: 2,
        formTitle: "Join The Waitlist",
        subject: "Join Waitlist"
      })))), _react.default.createElement("section", {
        className: "gry-brdr"
      }, _react.default.createElement("h1", null, "A Powerful Full-Stack Javascript Boilerplate"), _react.default.createElement("p", null, "Ludwig is Reactjs on top of Nodejs with a select blend of\n              modern javascript technologies. Get your apps setup and\n              running with Ludwig. It might only take 5 minutes.")), _react.default.createElement("section", {
        className: "gry-brdr"
      }, _react.default.createElement("h2", null, "Stupid Simple to Setup, Customize and Deploy"), _react.default.createElement("p", null, "Start your app, without the pain of installing and\n              configuring all the standard plumbing which most full\n              stack applications require.")), _react.default.createElement("section", {
        className: "bolt-btm"
      }, _react.default.createElement("h2", null, "Built Only For Hardcore Javascript Engineers"), _react.default.createElement("p", null, "If you like getting your hands dirty in the blood,\n              guts and bones of boilerplate code, then Ludwig just might\n              be your next best friend.")), _react.default.createElement("section", {
        className: "b-rad-6 rad-grad3"
      }, _react.default.createElement("h2", null, "Pick Your Poison"), _react.default.createElement("p", null, "Ludwig is a killer full stack boilerplate, filled with tinctures,\n              snake oils and a tiny drop of javascript...and most importantly,\n              it requires minimum setup. Since you, yo' momma and yo' momma's\n              momma all have different levels when it comes to using Ludwig,\n              we wanna help out."), _react.default.createElement(_ui.GridLayouts.GridLayoutA, this.props)), _react.default.createElement("section", {
        className: "gry-brdr bolt-top"
      }, _react.default.createElement("h3", null, "Caution: Noobs Beware*"), _react.default.createElement("p", {
        className: "gry-brdr"
      }, _react.default.createElement("b", null, "Kudos for getting this far down the page! "), "However, if you tend to overengineer things and build things which have\n              snaggleteeth, please kindly refrain from bastardizing Ludwig.\n              He'll appreciate not being your science experiment gone bad."), _react.default.createElement("p", {
        className: "gry-brdr"
      }, "Likewise, if code drives you batty and causes you great\n              pain and suffering then Ludwig won't be offended if you decide\n              to take a stroll down wordpress lane...nothing against wordpress"), _react.default.createElement("p", null, "But most of all, if you're known as the dude who generally\n              blows shit up, put your grenades back in your laptop bag and\n              proceed at your own risk. Ludwig likes all his appendages and\n              might get pissed if you accidentally maim him.")), _react.default.createElement("section", {
        className: "bolt-btm"
      }, _react.default.createElement("h3", null, "Request A Demo"), _react.default.createElement(_ui.Forms.Contact, _extends({}, this.props, {
        formTitle: "Request a Demo",
        subject: "Demo Request",
        contactType: 1
      }))));
    }
  }]);

  return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;