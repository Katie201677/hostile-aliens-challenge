import { generateShipHTML } from './helperFunctions';
import Ship from "./classes";

describe("Test generate HTML", () => {
  test("generates correct HTML", () => {
    const testShip = new Ship("Test Ship", 100, 10);
    expect(generateShipHTML(testShip)).toBe(`
    <h2>Test Ship</h2>
    <p>Remaining points: 100</p>
    `);
  })
})


