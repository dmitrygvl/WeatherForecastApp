import { displayCityHistory } from "./displayCityHistory";

describe("displayCityHistory", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="history"></div>`;
  });

  it("should set the innerHTML and create history items correctly", () => {
    const historyWrapper = document.querySelector(".history");
    const cityStorage = ["Moscow", "London", "Paris"];

    displayCityHistory(historyWrapper, cityStorage);

    const h2 = historyWrapper.querySelector("h2");
    expect(h2).toBeTruthy();
    expect(h2.innerHTML).toContain("История поиска");

    const historyItems = historyWrapper.querySelectorAll(".link-text");
    expect(historyItems.length).toBe(cityStorage.length);

    historyItems.forEach((historyItem) => {
      const cityLink = historyItem.querySelector("a");
      expect(cityLink).toBeTruthy();
      expect(cityLink.getAttribute("href")).toBe("#");
      expect(cityLink.getAttribute("class")).toBe("cityLink");
    });
  });
});
