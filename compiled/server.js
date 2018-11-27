"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactCookie = require("react-cookie");

var _configureStore = _interopRequireDefault(require("./store/configureStore"));

var _Index = _interopRequireDefault(require("./components/app/Index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(path, initialState, cookies) {
  var store = (0, _configureStore.default)(initialState);
  var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactRouterDom.StaticRouter, {
    location: path,
    context: store
  }, _react.default.createElement(_reactCookie.CookiesProvider, {
    cookies: cookies
  }, _react.default.createElement(_Index.default, null)))));
  var preloadedState = store.getState();
  return {
    content: content,
    preloadedState: preloadedState
  };
};