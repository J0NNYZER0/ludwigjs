"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRole = exports.reconfirm = exports.confirm = exports.register = exports.logout = exports.loggingIn = exports.login = void 0;

var _account = require("../apis/account");

var _index = require("../constants/index");

var success = function success(data) {
  return {
    type: _index.Constants.ACTIONS.LOGIN.SUCCESS,
    data: data
  };
};

var login = function login(data) {
  return function (dispatch) {
    return _account.Api.login(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.login = login;

var loggingIn = function loggingIn(data) {
  return function (dispatch) {
    return _account.Api.loggingIn(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.loggingIn = loggingIn;

var logout = function logout() {
  return function (dispatch) {
    return _account.Api.logout().then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.logout = logout;

var register = function register(data) {
  return function (dispatch) {
    return _account.Api.register(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.register = register;

var confirm = function confirm(data) {
  return function (dispatch) {
    return _account.Api.confirm(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.confirm = confirm;

var reconfirm = function reconfirm(data) {
  return function (dispatch) {
    return _account.Api.reconfirm(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.reconfirm = reconfirm;

var updateRole = function updateRole(data) {
  return function (dispatch) {
    return _account.Api.updateRole(data).then(function (response) {//dispatch(success(response.data))
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.updateRole = updateRole;