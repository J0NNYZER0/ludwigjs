"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = void 0;

var _contact = require("../apis/contact");

var _index = require("../constants/index");

var success = function success(data) {
  return {
    type: _index.Constants.ACTIONS.MESSAGES.SUCCESS,
    data: data
  };
};

var send = function send(data) {
  return function (dispatch) {
    return _contact.Api.send(data).then(function (response) {
      dispatch(success(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.send = send;