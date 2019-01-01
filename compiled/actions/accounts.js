"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = void 0;

var _accounts = require("../apis/accounts");

var _index = require("../constants/index");

var success = function success(data) {
  return {
    type: _index.Constants.ACTIONS.ACCOUNTS.LOAD,
    data: data
  };
};

var get = function get() {
  return function (dispatch) {
    return _accounts.Api.get().then(function (response) {
      dispatch(success(response.data.accounts));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.get = get;