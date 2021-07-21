export const checkIfGameOver = (shipArray) => {
  if (shipArray[0].isDestroyed ) {
    return true;
  }
  if (shipArray.every((ship) => ship.isDestroyed)) {
    return true;
  }
  return false;
}

export const generateRandomShipNumber = (max) => {
  return Math.floor(Math.random() * max);
}

export const showGameOver = (gameOverMessage, ships) => {
  gameOverMessage.style.display = "block";
  ships.style.display = "none";
}