"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterHashLink = require("react-router-hash-link");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));
    _this.state = {
      show: false,
      toggle: false
    };
    _this.sidebarRef = _react.default.createRef();
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "handleSectionClick",
    value: function handleSectionClick(i) {
      var _this2 = this;

      var show = this.state.show;
      this.setState(_objectSpread({}, this.state, {
        show: !show,
        section: i
      }), function () {
        console.log('test', _this2.state.section);
      });
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      var toggle = this.state.toggle;
      this.setState(_objectSpread({}, this.state, {
        toggle: !toggle
      }));
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var sidebar = this.sidebarRef.current,
          sidebarOffset = sidebar.offsetTop;

      if (window.pageYOffset > sidebarOffset) {
        this.setState(_objectSpread({}, this.state, {
          toggle: false
        }));
        sidebar.classList.add('stuck');
        sidebar.classList.add('closed');
      } else {
        sidebar.classList.remove('stuck');
        sidebar.classList.remove('closed');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          show = _this$state.show,
          toggle = _this$state.toggle,
          section = _this$state.section,
          _this$props = this.props,
          items = _this$props.items,
          path = _this$props.path,
          scrollWithOffset = function scrollWithOffset(el, offset) {
        var elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });
      },
          offSet = 70;

      return _react.default.createElement("div", {
        className: toggle === false ? 'sidebar' : 'sidebar stuck',
        ref: this.sidebarRef
      }, _react.default.createElement("div", {
        className: "toggle",
        onClick: this.handleToggle
      }, _react.default.createElement("span", null, "Ludwig v1.0.0")), _react.default.createElement("nav", null, _react.default.createElement("ul", null, items.map(function (sec, i) {
        return _react.default.createElement("li", {
          key: i,
          className: section === i ? 'show' : ''
        }, _react.default.createElement("span", {
          onClick: _this3.handleSectionClick.bind(_this3, i)
        }, sec.title), _react.default.createElement("ul", null, sec.categories.map(function (cat, ii) {
          var anchor = sec.title + " " + cat.title;
          return _react.default.createElement("li", {
            key: ii
          }, _react.default.createElement(_reactRouterHashLink.HashLink, {
            to: "".concat(path, "#").concat(anchor.replace(/\s/g, "_").toLowerCase()),
            scroll: function scroll(el) {
              return scrollWithOffset(el, offSet);
            }
          }, cat.title));
        })));
      }))), _react.default.createElement(_reactRouterHashLink.HashLink, {
        to: "".concat(path, "#top"),
        className: "gototop",
        smooth: true
      }, _react.default.createElement("span", null, "Go To Top")));
    }
  }]);

  return Sidebar;
}(_react.Component);

var _default = Sidebar;
exports.default = _default;