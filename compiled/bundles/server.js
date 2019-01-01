"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _configureStore = _interopRequireDefault(require("./../store/configureStore"));

var _Prod = _interopRequireDefault(require("./../components/app/Prod"));

require("../../assets/styles/all.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../favicon.ico'); // Read the state sent with markup


var state = window.__STATE__; // delete the state from global window object

delete window.__STATE__; // reproduce the store used to render the page on server

var store = (0, _configureStore.default)(state);
(0, _reactDom.hydrate)(_react.default.createElement(_Prod.default, {
  store: store
}), document.getElementById('app'));