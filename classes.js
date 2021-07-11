class Ship {
  constructor(name, points, pointsLossOnHit) {
    this.name = name;
    this.points = points;
    this.pointsLossOnHit = pointsLossOnHit;
    this.destroyed = false;
  }

  reducePointsOnHit() {
    this.points -= this.pointsLossOnHit;
  }

  checkIfShipDestroyed() {
    if (this.points <= 0) {
    this.destroyed = true;
    }
  }
}

export default Ship;

