"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ship =
/*#__PURE__*/
function () {
  function Ship(name, points, pointsLossOnHit, uniqueID, HTMLclass) {
    _classCallCheck(this, Ship);

    this.name = name;
    this.points = points;
    this.pointsLossOnHit = pointsLossOnHit;
    this.uniqueID = uniqueID;
    this.HTMLclass = HTMLclass;
    this.isDestroyed = false;
  }

  _createClass(Ship, [{
    key: "reducePointsOnHit",
    value: function reducePointsOnHit() {
      this.points -= this.pointsLossOnHit;
    }
  }, {
    key: "checkIfShipDestroyed",
    value: function checkIfShipDestroyed() {
      if (this.points <= 0) {
        this.isDestroyed = true;
      }
    }
  }]);

  return Ship;
}();

exports["default"] = Ship;