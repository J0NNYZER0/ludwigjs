"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modal = void 0;

var _contact = require("../apis/contact");

var _index = require("../constants/index");

var toggle = function toggle(data) {
  return {
    type: _index.Constants.UI.MODAL,
    data: data
  };
};

var modal = function modal(show) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      dispatch(toggle(show));
    });
  };
};

exports.modal = modal;