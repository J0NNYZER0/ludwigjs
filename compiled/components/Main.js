"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Account = _interopRequireDefault(require("../pages/Account"));

var _Accounts = _interopRequireDefault(require("../pages/Accounts"));

var _Contact = _interopRequireDefault(require("../pages/Contact"));

var _Docs = _interopRequireDefault(require("../pages/Docs"));

var _Home = _interopRequireDefault(require("../pages/Home"));

var _Login = _interopRequireDefault(require("../pages/Login"));

var _NotFound = _interopRequireDefault(require("../pages/NotFound"));

var _Plan = _interopRequireDefault(require("../pages/Plan"));

var _Product = _interopRequireDefault(require("../pages/Product"));

var _Register = _interopRequireDefault(require("../pages/Register"));

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

var Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          account = _this$props.account,
          actions = _this$props.actions;
      return _react.default.createElement("main", null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        key: "/",
        path: "/",
        exact: true,
        render: function render(props) {
          return _react.default.createElement(_Home.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/product",
        path: "/product",
        exact: true,
        render: function render(props) {
          return _react.default.createElement(_Product.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/plan/:id?",
        path: "/plan/:id?",
        exact: true,
        render: function render(props) {
          return _react.default.createElement(_Plan.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/docs",
        path: "/docs",
        exact: true,
        render: function render(props) {
          return _react.default.createElement(_Docs.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/contact",
        path: "/contact",
        render: function render(props) {
          return _react.default.createElement(_Contact.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/register",
        path: "/register",
        render: function render(props) {
          return _react.default.createElement(_Register.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/login/:sid?",
        path: "/login/:sid?",
        render: function render(props) {
          return _react.default.createElement(_Login.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/account",
        path: "/account",
        render: function render(props) {
          return _react.default.createElement(_Account.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/accounts",
        path: "/accounts",
        render: function render(props) {
          return _react.default.createElement(_Accounts.default, _extends({}, _this.props, props));
        }
      }), _react.default.createElement(_reactRouterDom.Route, {
        key: "/notfound",
        path: "/notfound",
        render: function render(props) {
          return _react.default.createElement(_NotFound.default, _extends({}, _this.props, props));
        }
      })));
    }
  }]);

  return Main;
}(_react.Component);

var _default = Main;
exports.default = _default;