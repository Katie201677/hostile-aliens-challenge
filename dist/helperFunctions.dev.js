"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGameOver = exports.generateShipHTML = exports.generateRandomShipNumber = exports.checkIfGameOver = void 0;

var checkIfGameOver = function checkIfGameOver(shipArray) {
  if (shipArray[0].isDestroyed) {
    return true;
  }

  for (var i = 0; i < shipArray.length; i++) {
    if (!shipArray[i].isDestroyed) {
      return false;
    }
  }

  return true;
};

exports.checkIfGameOver = checkIfGameOver;

var generateRandomShipNumber = function generateRandomShipNumber(max) {
  return Math.floor(Math.random() * max);
};

exports.generateRandomShipNumber = generateRandomShipNumber;

var generateShipHTML = function generateShipHTML(shipObject) {
  return "\n  <div class=\"ships__ship ".concat(shipObject.HTMLclass, "\" id=\"").concat(shipObject.uniqueID, "\">\n    <h2 class=\"h2\">").concat(shipObject.name, "</h2>\n    <p class=\"p\">Remaining points: ").concat(shipObject.points, "</p>\n  </div>\n  ");
};

exports.generateShipHTML = generateShipHTML;

var showGameOver = function showGameOver(gameOverMessage, ships) {
  gameOverMessage.style.display = "block";
  ships.style.display = "none";
};

exports.showGameOver = showGameOver;