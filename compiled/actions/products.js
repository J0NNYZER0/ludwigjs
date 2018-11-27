"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = void 0;

var _products = require("../apis/products");

var _index = require("../constants/index");

var success = function success(data) {
  return {
    type: _index.Constants.ACTIONS.PRODUCTS.LOAD,
    data: data
  };
};

var get = function get(data) {
  return function (dispatch) {
    return _products.Api.get(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.get = get;