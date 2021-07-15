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

export const generateRandomShipNumber = (max) => {
  return Math.floor(Math.random() * max);
}

export const generateShipHTML = (shipObject) => {
  return `
  <div class="ships__ship ${shipObject.HTMLclass}" id="${shipObject.uniqueID}">
    <h2 class="h2">${shipObject.name}</h2>
    <p class="p">Remaining points: ${shipObject.points}</p>
  </div>
  `
}

export const showGameOver = (gameOverMessage, ships) => {
  gameOverMessage.style.display = "block";
  ships.style.display = "none";
}