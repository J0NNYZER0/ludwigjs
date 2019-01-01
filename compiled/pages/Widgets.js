"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Widgets =
/*#__PURE__*/
function (_Component) {
  _inherits(Widgets, _Component);

  function Widgets(props) {
    var _this;

    _classCallCheck(this, Widgets);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Widgets).call(this, props));
    _this.state = {
      loading: props.widgets.length === 0
    };
    return _this;
  }

  _createClass(Widgets, [{
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      var widgets = this.props.widgets;

      if (loading === true) {
        return _react.default.createElement("section", null, _react.default.createElement("h1", null, "Register"), _react.default.createElement("p", null, "Loading..."));
      }

      return _react.default.createElement("section", null, _react.default.createElement("h1", null, "Widgets"), _react.default.createElement("ul", {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, widgets.map(function (_ref) {
        var name = _ref.name;
        return _react.default.createElement("li", {
          key: name,
          style: {
            margin: 30
          }
        }, _react.default.createElement("ul", null, _react.default.createElement("li", null, name)));
      })));
    }
  }]);

  return Widgets;
}(_react.Component);

var _default = Widgets;
exports.default = _default;