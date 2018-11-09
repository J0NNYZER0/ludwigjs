"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var DropDown =
/*#__PURE__*/
function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown(props) {
    var _this;

    _classCallCheck(this, DropDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).call(this, props));
    _this.state = {
      show: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DropDown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var location = this.props.location;

      if (location.pathname !== prevProps.location.pathname) {
        this.setState({
          show: false
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var show = this.state.show;
      this.setState({
        show: !show
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$btnTitle = this.props.btnTitle,
          btnTitle = _this$props$btnTitle === void 0 ? '' : _this$props$btnTitle,
          show = this.state.show,
          activeStyle = {
        fontWeight: 'bold'
      };
      return [_react.default.createElement("span", {
        key: "dd-btn",
        className: show ? 'ddm-btn minus' : 'ddm-btn plus',
        onClick: this.toggle
      }, btnTitle), _react.default.createElement("ul", {
        key: "dd-mnu",
        className: "".concat(show ? 'ddm show' : 'ddm')
      }, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
        exact: true,
        activeStyle: activeStyle,
        to: "/plan/0"
      }, "Rockstar")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
        exact: true,
        activeStyle: activeStyle,
        to: "/plan/1"
      }, "One Hit Wonder")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.NavLink, {
        exact: true,
        activeStyle: activeStyle,
        to: "/plan/2"
      }, "Air Guitarist")))];
    }
  }]);

  return DropDown;
}(_react.Component);

var _default = DropDown;
exports.default = _default;