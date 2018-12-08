"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = void 0;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var _index = require("../constants/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "login",
    value: function login(data) {
      return new Promise(function (resolve, reject) {
        var encodedURI = encodeURI("".concat(_index.Constants.URI.API.LOGIN) + data);
        (0, _isomorphicFetch.default)(encodedURI, {
          credentials: 'include',
          method: 'GET'
        }).then(function (response) {
          return resolve(response.json());
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "loggingIn",
    value: function loggingIn(data) {
      return new Promise(function (resolve, reject) {
        var encodedURI = encodeURI("".concat(_index.Constants.URI.API.LOGGING_IN));
        (0, _isomorphicFetch.default)(encodedURI, {
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        }).then(function (response) {
          return resolve(response.json());
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      return new Promise(function (resolve, reject) {
        var encodedURI = encodeURI("".concat(_index.Constants.URI.API.LOGOUT));
        (0, _isomorphicFetch.default)(encodedURI, {
          credentials: 'include',
          method: 'POST'
        }).then(function (response) {
          return resolve(response.json());
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "register",
    value: function register(data) {
      return new Promise(function (resolve, reject) {
        var encodedURI = encodeURI("".concat(_index.Constants.URI.API.REGISTER));
        (0, _isomorphicFetch.default)(encodedURI, {
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        }).then(function (response) {
          return resolve(response.json());
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "confirm",
    value: function confirm(data) {
      return new Promise(function (resolve, reject) {
        var encodedURI = encodeURI("".concat(_index.Constants.URI.API.CONFIRM) + data);
        (0, _isomorphicFetch.default)(encodedURI, {
          credentials: 'include',
          method: 'GET'
        }).then(function (response) {
          return resolve(response.json());
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "reconfirm",
    value: function reconfirm(data) {
      return new Promise(function (resolve, reject) {
        var encodedURI = encodeURI("".concat(_index.Constants.URI.API.RECONFIRM));
        (0, _isomorphicFetch.default)(encodedURI, {
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        }).then(function (response) {
          return resolve(response.json());
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "updateRole",
    value: function updateRole(data) {
      return new Promise(function (resolve, reject) {
        var encodedURI = encodeURI("".concat(_index.Constants.URI.API.ROLE));
        (0, _isomorphicFetch.default)(encodedURI, {
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        }).then(function (response) {
          return resolve(response.json());
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }]);

  return Api;
}();

exports.Api = Api;