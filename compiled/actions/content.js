"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = exports.getDocs = void 0;

var _content = require("../apis/content");

var _index = require("../constants/index");

var loadDocs = function loadDocs(data) {
  return {
    type: _index.Constants.ACTIONS.CONTENT.DOCS.LOAD,
    data: data
  };
};

var loadProducts = function loadProducts(data) {
  return {
    type: _index.Constants.ACTIONS.CONTENT.PRODUCTS.LOAD,
    data: data
  };
};

var getDocs = function getDocs(data) {
  return function (dispatch) {
    return _content.Content.getDocs(data).then(function (response) {
      dispatch(loadDocs(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.getDocs = getDocs;

var getProducts = function getProducts(data) {
  return function (dispatch) {
    return _content.Content.getProducts(data).then(function (response) {
      dispatch(loadProducts(response.data));
    }).catch(function (error) {
      throw error;
    });
  };
};

exports.getProducts = getProducts;