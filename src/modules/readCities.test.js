import { readCities } from "./readCities";

describe("readCities", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return an empty array if recentSearch is null", () => {
    Storage.prototype.getItem = jest.fn(() => null);
    const cities = readCities();

    expect(cities).toEqual([]);
    expect(localStorage.getItem).toHaveBeenCalledWith("recentSearch");
  });

  it("Should return cities array from localStorage", () => {
    const mockCities = ["City1", "City2", "City3"];
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockCities));

    const cities = readCities();

    expect(cities).toEqual(mockCities);
    expect(localStorage.getItem).toHaveBeenCalledWith("recentSearch");
  });
});
