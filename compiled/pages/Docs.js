"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ui = require("@ludwigjs/ui");

var _Index = _interopRequireDefault(require("../components/sidebars/Index"));

var _StickyHeader = _interopRequireDefault(require("../components/elements/StickyHeader"));

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

var Docs =
/*#__PURE__*/
function (_Component) {
  _inherits(Docs, _Component);

  function Docs(props) {
    _classCallCheck(this, Docs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Docs).call(this, props));
  }

  _createClass(Docs, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "docs-page"
      }, _react.default.createElement("div", {
        className: "panels col-2"
      }, _react.default.createElement("div", {
        className: "panel"
      }, _react.default.createElement(_Index.default, null)), _react.default.createElement("div", {
        className: "panel"
      }, _react.default.createElement("section", {
        className: "t-mrg bolt-btm bolt-top"
      }, _react.default.createElement(_ui.Elements.PageTitle, {
        titleText: "Docs"
      })), _react.default.createElement("section", {
        className: "t-mrg"
      }, _react.default.createElement(_ui.Hero, _extends({
        key: 1
      }, this.props, {
        classNames: "cogs",
        text: "So Easy, a Frikkin' Monkey Can Do It"
      }), _react.default.createElement("div", {
        className: "banner code-monkey"
      }))), _react.default.createElement(_StickyHeader.default, {
        title: "Getting Started"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", {
        id: "about"
      }, "About"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Workflow"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", {
        id: "requirements"
      }, "Requirements"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Pages"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Components"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Layouts"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Resources"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Themes"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Plugins"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Deployment"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "License"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Updates"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")), _react.default.createElement(_StickyHeader.default, {
        title: "Support"
      }), _react.default.createElement("section", null, _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text."), _react.default.createElement("h2", null, "Some Helpful Subcategory"), _react.default.createElement("p", null, "Some helpful text.")))));
    }
  }]);

  return Docs;
}(_react.Component);

var _default = Docs;
exports.default = _default;