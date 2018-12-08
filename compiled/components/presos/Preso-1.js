"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ui = require("@ludwigjs/ui");

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

var Preso1 =
/*#__PURE__*/
function (_Component) {
  _inherits(Preso1, _Component);

  function Preso1(props) {
    var _this;

    _classCallCheck(this, Preso1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Preso1).call(this, props));
    _this.click = _this.click.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Preso1, [{
    key: "click",
    value: function click() {
      var _this$props$click = this.props.click,
          click = _this$props$click === void 0 ? function () {} : _this$props$click;
      click();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$buttonTex = _this$props.buttonText,
          buttonText = _this$props$buttonTex === void 0 ? '' : _this$props$buttonTex,
          _this$props$className = _this$props.classNames,
          classNames = _this$props$className === void 0 ? '' : _this$props$className;
      return _react.default.createElement(_ui.Slideshows.WithProgressBar, null, _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement(_ui.Elements.PageTitle, {
        classNames: "white txt-shdw",
        titleText: "Getting Started"
      }))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h2", null, "Quick Overview"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "A UI, API and DB built on reactjs, nodejs and mysql"), _react.default.createElement("li", null, "+ a few other JS frameworks"), _react.default.createElement("li", null, "Includes instant end-to-end data flow")))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h1", null, "Before Setup"))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h2", null, "Necessary Requirements:"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Nodejs version 8.11.4"), _react.default.createElement("li", null, "1 Amazon SES account approved to send email"), _react.default.createElement("li", null, "1 registered domain"), _react.default.createElement("li", null, "1 running MySQL instance"), _react.default.createElement("li", null, "1 Heroku Account (required only for deployment)")))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h1", null, "Begin Setup"))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h2", null, "First"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Download Ludwig\u2019s code to your desired directory"), _react.default.createElement("li", null, "Run npm install in Ludwig\u2019s root directory")))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h2", null, "Next"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Create a file to store Ludwig\u2019s environment variables"), _react.default.createElement("li", null, "Verify it\u2019s location matches the location indicated in the package.json"), _react.default.createElement("li", null, "Add the following key value pairs:")), _react.default.createElement("p", {
        className: "code"
      }, "export CLEARDB_DATABASE_URL=<YOUR_DATABASE_CONNECTION_STRING>", _react.default.createElement("br", null), "export SECURITY_TOKEN_SECRET=<YOUR_SECRET>", _react.default.createElement("br", null), "export AWS_REGION=<YOUR_AWS_REGION>", _react.default.createElement("br", null), "export AWS_ACCESS_KEY_ID=<YOUR_AWS_ACCESS_KEY_ID>", _react.default.createElement("br", null), "export AWS_SECRET_ACCESS_KEY=<YOUR_AWS_SECRET_ACCESS_KEY>", _react.default.createElement("br", null), "export LOGIN_EMAIL=<YOUR_LOGIN_EMAIL>"))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h1", null, "Almost Done!"))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h2", null, "Setup Your Database"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Run the database script located in \u201Cserver/schemas\u201D")))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h2", null, "Run Ludwig"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Open a terminal window"), _react.default.createElement("li", null, "Run npm run build-local"), _react.default.createElement("li", null, "Open another terminal window"), _react.default.createElement("li", null, "Run npm run local")))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h2", null, "Demo Ludwig"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Open a browser and visit 0.0.0.0:3000"), _react.default.createElement("li", null, "For hot reloading visit 0.0.0.0:8080"), _react.default.createElement("li", null, "Example demo coming soon...")))), _react.default.createElement("div", {
        className: "preso ludwig-bg-dk"
      }, _react.default.createElement("div", null, _react.default.createElement("h1", null, "That's it!"), _react.default.createElement("p", null, "(Now you can customize Ludwig and have fun)"))));
    }
  }]);

  return Preso1;
}(_react.Component);

var _default = Preso1;
exports.default = _default;