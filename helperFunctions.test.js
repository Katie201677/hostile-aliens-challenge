import { checkIfGameOver, generateShipHTML } from './helperFunctions';
import Ship from "./classes";
import { expect, test } from '@jest/globals';

describe("Tests for all helper functions", () => {
  let testShip;
  let motherShip;

  beforeEach(() => {
    testShip = new Ship("Test Ship", 100, 10, "Ship2");
    motherShip = new Ship("Mother Ship", 10, 9, "Ship1");
    
  });

  describe("Test generate HTML", () => {
    test("generates correct HTML", () => {
      expect(generateShipHTML(testShip)).toBe(`
  <div class="ships__ship" id="Ship2">
    <h2 class="h2">Test Ship</h2>
    <p class="p">Remaining points: 100</p>
  </div>
  `);
    });
  });

  describe("Test checkIfGameOver", () => {

    test("returns true if MotherShip destroyed", () => {
      motherShip.isDestroyed = true;
      let testShipArray = [];
      testShipArray.push(motherShip, testShip);
      expect(checkIfGameOver(testShipArray)).toBe(true);
    });
    
    test("returns false if not all ships destroyed", () => {
      motherShip.isDestroyed = false;
      let testShipArray = [];
      testShipArray.push(motherShip, testShip);
      expect(checkIfGameOver(testShipArray)).toBe(false);
    })
  });
});


