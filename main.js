import Ship from "./classes.js";
import { generateShipHTML, generateRandomShipNumber, checkIfGameOver, showGameOver } from './helperFunctions.js';

const attackShipNumber = 1;
const defenceShipNumber = 1;
const gameOverButton = document.querySelector(".gameOver__button");
const gameOverMessage = document.querySelector(".gameOver");
const ships = document.querySelector(".ships");

const shootButton = document.querySelector(".shootButton");
let count = defenceShipNumber + attackShipNumber + 1;
let shipArray = [];

const populateShipArray = () => {
  shipArray.push(new Ship("Mother Ship", 10, 9, "Ship1"));
  let count = 2;
  for(let i=1; i<=defenceShipNumber; i++) {
    const name = `Defence Ship ${i}`;
    shipArray.push(new Ship(name, 40, 10, `Ship${count}`));
    count++;
  }
  for(let i=1; i<=attackShipNumber; i++) {
    const name = `Attack Ship ${i}`;
    shipArray.push(new Ship(name, 25, 12, `Ship${count}`));
    count++;
  }
}
populateShipArray();

const displayShipHTML = () => {
  const shipHTML = shipArray.map((ship) => generateShipHTML(ship)).join("");
  ships.innerHTML = shipHTML;
}
displayShipHTML();

const addHitClassToHitShip = (uniqueID) => {
  const hitShipHTML = document.getElementById(uniqueID);
  hitShipHTML.classList.add("hit");
}

const removeDestroyedShipFromGame = (hitShip, index) => {
  if (hitShip.isDestroyed) {
    shipArray.splice(index, 1);
    count -= 1;
  };
}

const resetView = (hitShip, index) => {
  removeDestroyedShipFromGame(hitShip, index);
  displayShipHTML();
  console.log(shipArray);
}



shootButton.addEventListener("click", () => {
  const index = generateRandomShipNumber(count);
  const hitShip = shipArray[index];
  console.log(hitShip);
  hitShip.reducePointsOnHit();
  hitShip.checkIfShipDestroyed();
  addHitClassToHitShip(hitShip.uniqueID);
  if (checkIfGameOver(shipArray)) {
    showGameOver(gameOverMessage, ships)
  };
  setTimeout(resetView, 500, hitShip, index); 
})

gameOverButton.addEventListener("click", () => {
  shipArray = [];
  populateShipArray();
  ships.style.display = "grid";
  gameOverMessage.style.display = "none";
  displayShipHTML();
})
