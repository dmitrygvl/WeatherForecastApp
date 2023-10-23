import { writeCities, cityStorage } from "./writeCities";
import { readCities } from "./readCities";

describe("writeCities", () => {
  beforeEach(() => {
    localStorage.clear();
    cityStorage.length = 0;
  });

  it("should add new city to cityStorage", () => {
    writeCities("London");
    expect(cityStorage).toContain("London");
  });
  it("should remove oldest city from cityStorage if it is full", () => {
    cityStorage.push(
      "City 1",
      "City 2",
      "City 3",
      "City 4",
      "City 5",
      "City 6",
      "City 7",
      "City 8",
      "City 9",
      "City 10",
    );
    writeCities("London");
    expect(cityStorage).toContain("London");
    expect(cityStorage).not.toContain("City 1");
  });
});
