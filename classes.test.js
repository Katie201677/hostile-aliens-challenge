import Ship from './classes';

describe('Tests for class Ship', () => {
  describe('Correctly instantiates Ship object', () => {
    test("instantiates ship object", () => {
      const testShip = new Ship("Test Ship", 100, 10);
      expect({ name: "Test Ship", points: 100, pointsLossOnHit: 10 });  
    })
  })
})