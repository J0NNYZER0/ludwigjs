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

var Plan =
/*#__PURE__*/
function (_Component) {
  _inherits(Plan, _Component);

  function Plan(props) {
    var _this;

    _classCallCheck(this, Plan);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Plan).call(this, props));
    _this.state = {
      plan: {}
    };
    return _this;
  }

  _createClass(Plan, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          match = _this$props.match,
          products = _this$props.products,
          productId = match.params.id;
      products.find(function (plan) {
        if (plan.id === parseInt(productId)) {
          _this2.setState({
            plan: plan
          });
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      var _this$props2 = this.props,
          match = _this$props2.match,
          products = _this$props2.products,
          productId = match.params.id;

      if (prevProps.match.params.id !== productId) {
        products.find(function (plan) {
          if (plan.id === parseInt(productId)) {
            _this3.setState({
              plan: plan
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var plan = this.state.plan,
          hero = plan.hero;
      return _react.default.createElement("div", null, _react.default.createElement("section", {
        className: "t-mrg bolt-btm bolt-top"
      }, _react.default.createElement(_ui.Elements.PageTitle, {
        titleText: "".concat(plan.name, " Plan")
      })), _react.default.createElement("section", {
        className: "t-mrg bolt-btm"
      }, hero && _react.default.createElement(_ui.Hero, _extends({
        key: 1
      }, this.props, {
        classNames: "lt-bg-lnr",
        text: "".concat(hero.text)
      }), _react.default.createElement("div", {
        className: "banner lg ".concat(hero.imageClass)
      }))), _react.default.createElement("section", {
        className: "gry-brdr"
      }, _react.default.createElement(_ui.Elements.DangerousHtml, null, "".concat(plan.description))), _react.default.createElement("section", {
        className: "gry-brdr"
      }, _react.default.createElement("h1", null, "The Meanest Little JS Boilerplate"), _react.default.createElement("p", null, "Ludwig blends a select suite of modern javascript technologies\n            to get your apps up and running as quickly as possible.")), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Built For Hardcore JS Enthusiasts"), _react.default.createElement("p", null, "Built on the edge of open source javascript, Ludwig uses frameworks\n            which are created by smart engineers, backed by large communities\n            and endorsed by companies both small and large.")), _react.default.createElement("section", {
        className: "gry-brdr b-rad-6 rad-grad3"
      }, _react.default.createElement("h2", null, "Out of the Box"), _react.default.createElement("p", null, "No muss or fuss, Ludwig gives developers a rockin' end to end\n            boilerplate. If your app needs more fuel check out our packages."), _react.default.createElement(_ui.GridLayouts.GridLayoutA, this.props)), _react.default.createElement("section", null, _react.default.createElement("h3", null, "Request A Demo"), _react.default.createElement(_ui.Forms.Contact, _extends({}, this.props, {
        formTitle: "Request a Demo",
        subject: "Demo Request",
        contactType: 1
      }))));
    }
  }]);

  return Plan;
}(_react.Component);

var _default = Plan;
exports.default = _default;