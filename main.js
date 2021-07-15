import Ship from "./classes.js";
import { generateShipHTML, generateRandomShipNumber, checkIfGameOver, showGameOver } from './helperFunctions.js';

const attackShipNumber = 8;
const defenceShipNumber = 5;
const gameOverButton = document.querySelector(".gameOver__button");
const gameOverMessage = document.querySelector(".gameOver");
const ships = document.querySelector(".ships");
const motherShipDiv = document.querySelector(".ships__mothership");
const defenceShipDiv = document.querySelector(".ships__defenceships");
const attackShipDiv = document.querySelector(".ships__attackships");

const shootButton = document.querySelector(".shootButton");
let count = defenceShipNumber + attackShipNumber + 1;
let shipArray = [];

const populateShipArray = () => {
  shipArray.push(new Ship("Mother Ship", 10, 9, "Ship1", "MotherShip"));
  let count = 2;
  for(let i=1; i<=defenceShipNumber; i++) {
    const name = `Defence Ship ${i}`;
    shipArray.push(new Ship(name, 10, 10, `Ship${count}`, "DefenceShip"));
    count++;
  }
  for(let i=1; i<=attackShipNumber; i++) {
    const name = `Attack Ship ${i}`;
    shipArray.push(new Ship(name, 15, 12, `Ship${count}`, "AttackShip"));
    count++;
  }
}
populateShipArray();
let defenceShipArray = shipArray.slice(1, 6);
let attackShipArray = shipArray.slice(6);

const displayShipHTML = () => {
  motherShipDiv.innerHTML = generateShipHTML(shipArray[0]);
  defenceShipDiv.innerHTML = defenceShipArray.map((ship) => generateShipHTML(ship)).join("");
  attackShipDiv.innerHTML = attackShipArray.map((ship) => generateShipHTML(ship)).join("");
  
  // const shipHTML = shipArray.map((ship) => generateShipHTML(ship)).join("");
  // ships.innerHTML = shipHTML;
}
displayShipHTML();

const addHitClassToHitShip = (uniqueID) => {
  const hitShipHTML = document.getElementById(uniqueID);
  hitShipHTML.classList.add("hit");
}

const resetView = (hitShip, index) => {
  removeDestroyedShipFromGame(hitShip, index);
  displayShipHTML();
}

export const removeDestroyedShipFromGame = (hitShip, index ) => {
  if (hitShip.isDestroyed) {
    shipArray.splice(index, 1);
    count -= 1;
    console.log(shipArray);
    if (hitShip.HTMLclass === "DefenceShip") {
      let hitIndex;
      for (let i=0; i<defenceShipArray.length; i++) {
        if (defenceShipArray[i].uniqueID === hitShip.uniqueID) {
          hitIndex = i;
        }
      }
      defenceShipArray.splice(hitIndex, 1);
    } else if (hitShip.HTMLclass === "AttackShip") {
      let hitIndex;
      for (let i=0; i<attackShipArray.length; i++) {
        if (attackShipArray[i].uniqueID === hitShip.uniqueID) {
          hitIndex = i;
        }
      }
      attackShipArray.splice(hitIndex, 1);
    
    };
  }
}

shootButton.addEventListener("click", () => {
  const index = generateRandomShipNumber(count);
  console.log(index);
  const hitShip = shipArray[index];
  console.log(hitShip);
  console.log(shipArray);
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
  defenceShipArray = shipArray.slice(1, 6);
  attackShipArray = shipArray.slice(6);
  ships.style.display = "grid";
  gameOverMessage.style.display = "none";
  displayShipHTML();
})


// play againa fter hitting mother ship - ship array not repopulating
// style play again button