"use strict";

var _helperFunctions = require("./helperFunctions");

var _classes = _interopRequireDefault(require("./classes"));

var _globals = require("@jest/globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("Tests for all helper functions", function () {
  var testShip;
  var motherShip;
  beforeEach(function () {
    testShip = new _classes["default"]("Test Ship", 100, 10, "Ship2");
    motherShip = new _classes["default"]("Mother Ship", 10, 9, "Ship1");
  });
  describe("Test generate HTML", function () {
    (0, _globals.test)("generates correct HTML", function () {
      (0, _globals.expect)((0, _helperFunctions.generateShipHTML)(testShip)).toBe("\n  <div class=\"ships__ship\" id=\"Ship2\">\n    <h2 class=\"h2\">Test Ship</h2>\n    <p class=\"p\">Remaining points: 100</p>\n  </div>\n  ");
    });
  });
  describe("Test checkIfGameOver", function () {
    (0, _globals.test)("returns true if MotherShip destroyed", function () {
      motherShip.isDestroyed = true;
      var testShipArray = [];
      testShipArray.push(motherShip, testShip);
      (0, _globals.expect)((0, _helperFunctions.checkIfGameOver)(testShipArray)).toBe(true);
    });
    (0, _globals.test)("returns false if not all ships destroyed", function () {
      motherShip.isDestroyed = false;
      var testShipArray = [];
      testShipArray.push(motherShip, testShip);
      (0, _globals.expect)((0, _helperFunctions.checkIfGameOver)(testShipArray)).toBe(false);
    });
  });
});