"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ui = require("@ludwigjs/ui");

var _index = require("../constants/index");

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

var Accounts =
/*#__PURE__*/
function (_Component) {
  _inherits(Accounts, _Component);

  function Accounts(props) {
    var _this;

    _classCallCheck(this, Accounts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accounts).call(this, props));
    _this.state = {
      accounts: []
    };
    return _this;
  }

  _createClass(Accounts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          actions = _this$props.actions,
          accounts = _this$props.accounts;
      actions.accounts.get();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var accounts = this.props.accounts;

      if (accounts !== prevProps.accounts) {
        this.setState({
          accounts: accounts
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          account = _this$props2.account,
          accounts = _this$props2.accounts;
      if (account.status !== _index.Constants.ACCOUNT_STATUS.LOGGED_IN) return _react.default.createElement(_reactRouterDom.Redirect, {
        to: "/login"
      });
      if (account.scope.indexOf('admin') === -1) return _react.default.createElement(_reactRouterDom.Redirect, {
        to: "/login"
      });
      return _react.default.createElement("div", null, _react.default.createElement("section", {
        className: "t-mrg bolt-btm bolt-top"
      }, _react.default.createElement(_ui.Elements.PageTitle, {
        titleText: "Accounts"
      })), _react.default.createElement("section", null, _react.default.createElement(_ui.Table, _extends({}, this.props, {
        accounts: accounts
      }))));
    }
  }]);

  return Accounts;
}(_react.Component);

var _default = Accounts;
exports.default = _default;