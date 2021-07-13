export default class Ship {
  constructor(name, points, pointsLossOnHit, uniqueID) {
    this.name = name;
    this.points = points;
    this.pointsLossOnHit = pointsLossOnHit;
    this.uniqueID = uniqueID;
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
}

