import Ship from "./classes.js";
import { generateShipHTML, generateRandomShipNumber, checkIfGameOver } from './helperFunctions.js';

let count = 14;
let shipArray = [];

const shootButton = document.querySelector(".shootButton")

const populateShipArray = () => {
  shipArray.push(new Ship("Mother Ship", 100, 9, "Ship1"));
  let count = 2;
  for(let i=1; i<6; i++) {
    const name = `Defence Ship ${i}`;
    shipArray.push(new Ship(name, 80, 10, `Ship${count}`));
    count++;
  }
  for(let i=1; i<9; i++) {
    const name = `Attack Ship ${i}`;
    shipArray.push(new Ship(name, 45, 12, `Ship${count}`));
    count++;
  }
}
populateShipArray();

const displayShipHTML = () => {
  const shipHTML = shipArray.map((ship) => generateShipHTML(ship)).join("");
  document.querySelector(".ships").innerHTML = shipHTML;
}

displayShipHTML();

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

const addHitClassToHitShip = (hitShip, uniqueID) => {
  const hitShipHTML = document.getElementById(uniqueID);
  if (hitShip.isDestroyed) {
    hitShipHTML.classList.add("destroyed");
  } else {
    hitShipHTML.classList.add("hit");
  }
}

shootButton.addEventListener("click", () => {
  const index = generateRandomShipNumber(count);
  
  const hitShip = shipArray[index];
  console.log(hitShip);
  hitShip.checkIfShipDestroyed();
  addHitClassToHitShip(hitShip.isDestroyed, hitShip.uniqueID, hitShip.points);
  
  hitShip.reducePointsOnHit();
  
  setTimeout(resetView, 2000, hitShip, index); 
  
  checkIfGameOver(shipArray);
})
