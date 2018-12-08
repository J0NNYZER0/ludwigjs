"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactHotLoader = require("react-hot-loader");

var _configureStore = _interopRequireDefault(require("./../store/configureStore"));

var _Prod = _interopRequireDefault(require("../components/app/Prod"));

require("../../assets/styles/all.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../favicon.ico'); // Create a fresh store


var store = (0, _configureStore.default)();
(0, _reactDom.render)(_react.default.createElement(_reactHotLoader.AppContainer, null, _react.default.createElement(_Prod.default, {
  store: store
})), document.getElementById('app'));

if (module.hot) {
  module.hot.accept('../components/app/Dev', function () {
    var Dev = require('../components/app/Dev').default;

    (0, _reactDom.render)(_react.default.createElement(_reactHotLoader.AppContainer, null, _react.default.createElement(Dev, {
      store: store
    })), document.getElementById('app'));
  });
}
/*
TODO: AppContainer might be causing the following console warning:

Warning: Expected server HTML to contain a matching <div> in <div>



if (process.env.NODE_ENV === 'production') {

  export default withRouter(withCookies(connect(mapStateToProps,mapDispatchToProps)(App)))

}
 else {

   export default hot(module)(withRouter(withCookies(connect(mapStateToProps,mapDispatchToProps)(App))))

 }
*/