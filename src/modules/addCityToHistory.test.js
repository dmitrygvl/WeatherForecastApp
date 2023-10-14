import { addCityToHistory } from "./addCityToHistory";

describe("addCityToHistory", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

  it("should add a city name to the recent search history", () => {
    const cityName = "Moscow";

    addCityToHistory(cityName);

    expect(recentSearch).toHaveLength(1);
    expect(recentSearch).toContain(cityName);

    const storedData = JSON.parse(localStorage.getItem("recentSearch"));
    expect(storedData).toHaveLength(1);
    expect(storedData).toContain(cityName);
  });

  it("should remove the oldest city name if the recent search history exceeds 10 items", () => {
    const cityName = "Moscow";

    for (let i = 1; i <= 10; i++) {
      recentSearch.push(`City ${i}`);
    }

    addCityToHistory(cityName);

    expect(recentSearch).toHaveLength(10);
    expect(recentSearch).not.toContain("City 1");
    expect(recentSearch).toContain(cityName);

    const storedData = JSON.parse(localStorage.getItem("recentSearch"));
    expect(storedData).toHaveLength(10);
    expect(storedData).not.toContain("City 1");
    expect(storedData).toContain(cityName);
  });

  it("should not add a city name to the recent search history if it already exists", () => {
    const cityName = "Moscow";

    recentSearch.push(cityName);
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));

    addCityToHistory(cityName);

    expect(recentSearch).toHaveLength(1);
    expect(recentSearch).toContain(cityName);

    const storedData = JSON.parse(localStorage.getItem("recentSearch"));
    expect(storedData).toHaveLength(1);
    expect(storedData).toContain(cityName);
  });
});
