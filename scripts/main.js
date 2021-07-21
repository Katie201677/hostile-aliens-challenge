import Ship from "./classes.js";
import { generateRandomShipNumber, checkIfGameOver, showGameOver } from './helperFunctions.js';

const attackShipNumber = 8; 
const defenceShipNumber = 5; 
const gameOverButton = document.querySelector(".gameOver__button");
const gameOverMessage = document.querySelector(".gameOver");
const ships = document.querySelector(".ships");
const motherShipDiv = document.querySelector(".ships__mothership");
const defenceShipDiv = document.querySelector(".ships__defenceships");
const attackShipDiv = document.querySelector(".ships__attackships");

const shootButton = document.querySelector(".shootButton");
let count = defenceShipNumber + attackShipNumber +1;
let shipArray = [];

const populateShipArray = () => {
  shipArray.push(new Ship("Mother Ship", 100, 9, "Ship1", "MotherShip"));
  let count = 2;
  for(let i=1; i<=defenceShipNumber; i++) {
    const name = `Defence Ship ${i}`;
    shipArray.push(new Ship(name, 80, 10, `Ship${count}`, "DefenceShip"));
    count++;
  }
  for(let i=1; i<=attackShipNumber; i++) {
    const name = `Attack Ship ${i}`;
    shipArray.push(new Ship(name, 45, 12, `Ship${count}`, "AttackShip"));
    count++;
  }
}
populateShipArray();
let defenceShipArray = shipArray.slice(1, 6);
let attackShipArray = shipArray.slice(6);

const displayShipHTML = () => {
  motherShipDiv.innerHTML = shipArray[0].generateShipHTML();
  defenceShipDiv.innerHTML = defenceShipArray.map((ship) => ship.generateShipHTML()).join("");
  attackShipDiv.innerHTML = attackShipArray.map((ship) => ship.generateShipHTML()).join("");
}
displayShipHTML();

const addHitClassToHitShip = (uniqueID) => {
  const hitShipHTML = document.getElementById(uniqueID);
  hitShipHTML.classList.add("hit");
}

const resetView = (hitShip, index) => {
  removeDestroyedShipFromGame(hitShip, index);
  displayShipHTML();
  shootButton.disabled = false;
  console.log(`count is ${count}`);
}

const removeDestroyedShipFromGame = (hitShip, index ) => {
  if (hitShip.isDestroyed) {
    shipArray.splice(index, 1);
    count -= 1;
    
    if (hitShip.HTMLclass === "DefenceShip") {
      const hitIndex = defenceShipArray.findIndex(ship => ship.uniqueID === hitShip.uniqueID);
      defenceShipArray.splice(hitIndex, 1);

    } else if (hitShip.HTMLclass === "AttackShip") {
        const hitIndex = attackShipArray.findIndex(ship => ship.uniqueID === hitShip.uniqueID);
        attackShipArray.splice(hitIndex, 1);
    }
  }
}

shootButton.addEventListener("click", () => {
  shootButton.disabled = true;
  const index = generateRandomShipNumber(count);
  console.log(index);
  const hitShip = shipArray[index];
  hitShip.reducePointsOnHit();
  hitShip.checkIfShipDestroyed();
  addHitClassToHitShip(hitShip.uniqueID);
  if (checkIfGameOver(shipArray)) {
    showGameOver(gameOverMessage, ships)
  };
  setTimeout(resetView, 500, hitShip, index); 
})

gameOverButton.addEventListener("click", () => {
  count = defenceShipNumber + attackShipNumber + 1;
  shipArray = [];
  populateShipArray();
  defenceShipArray = shipArray.slice(1, 6);
  attackShipArray = shipArray.slice(6);
  ships.style.display = "grid";
  gameOverMessage.style.display = "none";
  displayShipHTML();
})
