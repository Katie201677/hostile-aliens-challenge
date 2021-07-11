import Ship from "./classes.js";

const shipArray = [];

const generateShipHTML = (shipObject) => {
  return `
  <h2>${shipObject.name}</h2>
  <p>Remaining points: ${shipObject.points}</p>
  `
}

const populateShipArray = () => {
  shipArray.push(new Ship("Mother Ship", 100, 9));
  for(let i=1; i<6; i++) {
    const name = `Defence Ship ${i}`;
    shipArray.push(new Ship(name, 80, 10));
  }
  for(let i=1; i<9; i++) {
    const name = `Attack Ship ${i}`;
    shipArray.push(new Ship(name, 45, 12));
  }
}

populateShipArray();

const shipHTML = shipArray.map((ship) => generateShipHTML(ship)).join("");

// loop through ships array to generate html:
document.querySelector(".ships").innerHTML = shipHTML;

