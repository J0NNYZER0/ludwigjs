"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utilities = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utilities =
/*#__PURE__*/
function () {
  function Utilities() {
    _classCallCheck(this, Utilities);
  }

  _createClass(Utilities, null, [{
    key: "getLocalStorage",
    value: function getLocalStorage(key) {
      return JSON.parse(localStorage.getItem(key));
    }
  }, {
    key: "setLocalStorage",
    value: function setLocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }]);

  return Utilities;
}();

exports.Utilities = Utilities;