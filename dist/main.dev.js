"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDestroyedShipFromGame = void 0;

var _classes = _interopRequireDefault(require("./classes.js"));

var _helperFunctions = require("./helperFunctions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var attackShipNumber = 8;
var defenceShipNumber = 5;
var gameOverButton = document.querySelector(".gameOver__button");
var gameOverMessage = document.querySelector(".gameOver");
var ships = document.querySelector(".ships");
var motherShipDiv = document.querySelector(".ships__mothership");
var defenceShipDiv = document.querySelector(".ships__defenceships");
var attackShipDiv = document.querySelector(".ships__attackships");
var shootButton = document.querySelector(".shootButton");
var count = defenceShipNumber + attackShipNumber + 1;
var shipArray = [];

var populateShipArray = function populateShipArray() {
  shipArray.push(new _classes["default"]("Mother Ship", 100, 9, "Ship1", "MotherShip"));
  var count = 2;

  for (var i = 1; i <= defenceShipNumber; i++) {
    var name = "Defence Ship ".concat(i);
    shipArray.push(new _classes["default"](name, 80, 10, "Ship".concat(count), "DefenceShip"));
    count++;
  }

  for (var _i = 1; _i <= attackShipNumber; _i++) {
    var _name = "Attack Ship ".concat(_i);

    shipArray.push(new _classes["default"](_name, 45, 12, "Ship".concat(count), "AttackShip"));
    count++;
  }
};

populateShipArray();
var defenceShipArray = shipArray.slice(1, 6);
var attackShipArray = shipArray.slice(6);

var displayShipHTML = function displayShipHTML() {
  motherShipDiv.innerHTML = (0, _helperFunctions.generateShipHTML)(shipArray[0]);
  defenceShipDiv.innerHTML = defenceShipArray.map(function (ship) {
    return (0, _helperFunctions.generateShipHTML)(ship);
  }).join("");
  attackShipDiv.innerHTML = attackShipArray.map(function (ship) {
    return (0, _helperFunctions.generateShipHTML)(ship);
  }).join(""); // const shipHTML = shipArray.map((ship) => generateShipHTML(ship)).join("");
  // ships.innerHTML = shipHTML;
};

displayShipHTML();

var addHitClassToHitShip = function addHitClassToHitShip(uniqueID) {
  var hitShipHTML = document.getElementById(uniqueID);
  hitShipHTML.classList.add("hit");
};

var resetView = function resetView(hitShip, index) {
  removeDestroyedShipFromGame(hitShip, index);
  displayShipHTML();
};

var removeDestroyedShipFromGame = function removeDestroyedShipFromGame(hitShip, index) {
  if (hitShip.isDestroyed) {
    shipArray.splice(index, 1);
    count -= 1;
    console.log(shipArray);

    if (hitShip.HTMLclass === "DefenceShip") {
      var hitIndex;

      for (var i = 0; i < defenceShipArray.length; i++) {
        if (defenceShipArray[i].uniqueID === hitShip.uniqueID) {
          hitIndex = i;
        }
      }

      defenceShipArray.splice(hitIndex, 1);
    } else if (hitShip.HTMLclass === "AttackShip") {
      var _hitIndex;

      for (var _i2 = 0; _i2 < attackShipArray.length; _i2++) {
        if (attackShipArray[_i2].uniqueID === hitShip.uniqueID) {
          _hitIndex = _i2;
        }
      }

      attackShipArray.splice(_hitIndex, 1);
    }

    ;
  }
};

exports.removeDestroyedShipFromGame = removeDestroyedShipFromGame;
shootButton.addEventListener("click", function () {
  var index = (0, _helperFunctions.generateRandomShipNumber)(count);
  console.log(index);
  var hitShip = shipArray[index];
  console.log(hitShip);
  console.log(shipArray);
  hitShip.reducePointsOnHit();
  hitShip.checkIfShipDestroyed();
  addHitClassToHitShip(hitShip.uniqueID);

  if ((0, _helperFunctions.checkIfGameOver)(shipArray)) {
    (0, _helperFunctions.showGameOver)(gameOverMessage, ships);
  }

  ;
  setTimeout(resetView, 500, hitShip, index);
});
gameOverButton.addEventListener("click", function () {
  shipArray = [];
  populateShipArray();
  defenceShipArray = shipArray.slice(1, 6);
  attackShipArray = shipArray.slice(6);
  ships.style.display = "grid";
  gameOverMessage.style.display = "none";
  displayShipHTML();
}); // play againa fter hitting mother ship - ship array not repopulating
// style play again button