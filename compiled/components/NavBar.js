"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _index = require("../constants/index");

var _DropDown = _interopRequireDefault(require("./DropDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          account = _this$props.account,
          logout = _this$props.logout,
          activeStyle = {
        fontWeight: 'bold'
      };
      return _react.default.createElement("nav", null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
        exact: true,
        activeStyle: activeStyle,
        to: "/product"
      }, "Product")), _react.default.createElement("li", {
        className: "dd"
      }, _react.default.createElement(_DropDown.default, _extends({}, this.props, {
        btnTitle: "Plans"
      }))), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
        activeStyle: activeStyle,
        to: "/contact"
      }, "Contact")), account.status !== _index.Constants.ACCOUNT_STATUS.LOGGED_IN && _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
        activeStyle: activeStyle,
        to: "/register"
      }, "Register")), account.status === _index.Constants.ACCOUNT_STATUS.LOGGED_IN && _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
        activeStyle: activeStyle,
        to: "/account"
      }, "Account")), _react.default.createElement("li", null, account.status !== _index.Constants.ACCOUNT_STATUS.LOGGED_IN ? _react.default.createElement(_reactRouterDom.NavLink, {
        activeStyle: activeStyle,
        to: "/login"
      }, "Login") : _react.default.createElement("div", {
        className: "logout",
        onClick: logout
      }, "Logout"))));
    }
  }]);

  return Navbar;
}(_react.Component);

var _default = Navbar;
exports.default = _default;