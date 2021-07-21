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

export const showGameOver = (gameOverMessage, ships) => {
  gameOverMessage.style.display = "block";
  ships.style.display = "none";
}