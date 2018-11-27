"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _reactCookie = require("react-cookie");

var _ui = require("@ludwigjs/ui");

var accountActions = _interopRequireWildcard(require("../../actions/account"));

var accountsActions = _interopRequireWildcard(require("../../actions/accounts"));

var contactActions = _interopRequireWildcard(require("../../actions/contact"));

var productsActions = _interopRequireWildcard(require("../../actions/products"));

var uiActions = _interopRequireWildcard(require("../../actions/ui"));

var _Main = _interopRequireDefault(require("../Main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.logout = _this.logout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "logout",
    value: function logout() {
      var _this$props = this.props,
          actions = _this$props.actions,
          cookies = _this$props.cookies;
      actions.account.logout();
      cookies.remove('sid');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          account = _this$props2.account,
          actions = _this$props2.actions;
      return [_react.default.createElement(_ui.Layout.Header, _extends({
        key: "header",
        logout: this.logout
      }, this.props)), _react.default.createElement(_ui.Notification, _extends({
        key: "notifcations"
      }, this.props)), _react.default.createElement(_Main.default, _extends({
        key: "main"
      }, this.props)), _react.default.createElement(_ui.Layout.Footer, _extends({
        key: "footer",
        logout: this.logout
      }, this.props))];
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    account: state.account,
    accounts: state.accounts,
    messages: state.messages,
    products: state.products,
    ui: state.ui
  };
},
    mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: {
      account: (0, _redux.bindActionCreators)(accountActions, dispatch),
      accounts: (0, _redux.bindActionCreators)(accountsActions, dispatch),
      contact: (0, _redux.bindActionCreators)(contactActions, dispatch),
      products: (0, _redux.bindActionCreators)(productsActions, dispatch),
      ui: (0, _redux.bindActionCreators)(uiActions, dispatch)
    }
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactCookie.withCookies)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App)));

exports.default = _default;