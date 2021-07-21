// steps:
// npm init , creates package.json
// npm i -D jest
// npm i @babel/plugin-transform-modules-commonjs
// .babelrc  , then add:
// {
//   "env": {
//     "test": {
//       "plugins": ["@babel/plugin-transform-modules-commonjs"]
//     }
//   }
// }
// change test command in package.json: "scripts": {
  // "test": "jest"
// npm test -- --watch


// import { expect, test } from '@jest/globals';
import Ship from '../scripts/classes';

describe("Tests for Ship class", () => {
  let testShip; // add to global scope for all tests

  beforeEach(() => {
    testShip = new Ship("Test Ship", 100, 10);
  }); // instantiate new ship for each test
  
  describe("Correctly instantiates Ship object", () => {
    test("instantiates ship object", () => { 
      expect(testShip.name).toEqual("Test Ship");  
    })
  });

  describe("Reduces points by correct amount on hit", () => {
    test("Reduces points by pointsLossOnHit", () => {
      testShip.reducePointsOnHit();
      expect(testShip.points).toEqual(90);
    })
  });

  describe("Checks if ship destroyed", () => {
    test("Ship not destroyed when points above zero", () => {
      testShip.checkIfShipDestroyed();
      expect(testShip.isDestroyed).toBe(false);
    });
    test("Ship destroyed if points zero", () => {
      const destroyedShip = new Ship("Destroyed", 0, 10);
      destroyedShip.checkIfShipDestroyed();
      expect(destroyedShip.isDestroyed).toBe(true);
    })
  })  
})