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
    return true;
  }
  for (let i=0; i<shipArray.length; i++) {
    if (!shipArray[i].isDestroyed) {
      return false;
    }
  }
  return true;
}

export const showGameOver = (gameOverMessage, ships) => {
  gameOverMessage.style.display = "block";
  ships.style.display = "none";
}