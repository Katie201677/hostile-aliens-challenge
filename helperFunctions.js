export const generateShipHTML = (shipObject) => {
  return `
  <div class="ships__ship" id="${shipObject.uniqueID}">
    <h2>${shipObject.name}</h2>
    <p>Remaining points: ${shipObject.points}</p>
  </div>
  `
}

export const generateRandomShipNumber = (max) => {
  return Math.floor(Math.random() * max);
}

export const checkIfGameOver = (shipArray) => {
  if (shipArray[0].isDestroyed ) {
    console.log("Game Over");
  } else for (let i=0; i<shipArray.length; i++) {
    if (!shipArray[i].isDestroyed) {
      return;
    } else {
      console.log("Game Over");
    }
  }
}