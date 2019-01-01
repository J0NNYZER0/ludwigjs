"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _Home = _interopRequireDefault(require("../pages/Home"));

var _Widgets = _interopRequireDefault(require("../pages/Widgets"));

var _Register = _interopRequireDefault(require("../pages/Register"));

var _Confirm = _interopRequireDefault(require("../pages/Confirm"));

var _Login = _interopRequireDefault(require("../pages/Login"));

var _Account = _interopRequireDefault(require("../pages/Account"));

var _NotFound = _interopRequireDefault(require("../pages/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = [{
  path: '/',
  exact: true,
  component: _Home.default
}, {
  path: '/widgets',
  component: _Widgets.default
}, {
  path: '/register',
  component: _Register.default
}, {
  path: '/confirm/:shortid',
  component: _Confirm.default
}, {
  path: '/login',
  component: _Login.default
}, {
  path: '/account',
  component: _Account.default
}, {
  path: '/notfound',
  component: _NotFound.default
}];
exports.Routes = Routes;