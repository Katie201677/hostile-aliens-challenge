export default class Ship {
  constructor(name, points, pointsLossOnHit, uniqueID, HTMLclass) {
    this.name = name;
    this.points = points;
    this.pointsLossOnHit = pointsLossOnHit;
    this.uniqueID = uniqueID;
    this.HTMLclass = HTMLclass;
    this.isDestroyed = false;
  }

  reducePointsOnHit() {
    this.points -= this.pointsLossOnHit;
  }

  checkIfShipDestroyed() {
    if (this.points <= 0) {
      this.isDestroyed = true;
    }
  }

  generateShipHTML() {
    return `
    <div class="ships__ship ${this.HTMLclass}" id="${this.uniqueID}">
      <h2 class="h2">${this.name}</h2>
      <p class="p">Remaining points: ${this.points}</p>
    </div>`
  }
}

