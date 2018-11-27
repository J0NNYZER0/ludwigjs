"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _accountReducer = _interopRequireDefault(require("./accountReducer"));

var _accountsReducer = _interopRequireDefault(require("./accountsReducer"));

var _messagesReducer = _interopRequireDefault(require("./messagesReducer"));

var _productsReducer = _interopRequireDefault(require("./productsReducer"));

var _uiReducer = _interopRequireDefault(require("./uiReducer"));

var _widgetsReducer = _interopRequireDefault(require("./widgetsReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer,
  account: _accountReducer.default,
  accounts: _accountsReducer.default,
  messages: _messagesReducer.default,
  products: _productsReducer.default,
  ui: _uiReducer.default,
  widgets: _widgetsReducer.default
});
var _default = rootReducer;
exports.default = _default;