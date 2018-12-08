"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../constants/index");

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var productsReducer = function productsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState.default.products;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.Constants.ACTIONS.PRODUCTS.LOAD:
      {
        var products = _toConsumableArray(action.data);

        return products;
      }

    default:
      return state;
  }
};

var _default = productsReducer;
exports.default = _default;