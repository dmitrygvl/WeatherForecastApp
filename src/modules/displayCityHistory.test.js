import { displayCityHistory } from "./displayCityHistory";
import { cityStorage } from "./writeCities";

describe("displayCityHistory", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("div");
    cityStorage.length = 0;
  });

  test("should display history heading", () => {
    displayCityHistory(element);
    expect(element.innerHTML).toContain("<h2>История поиска</h2>");
  });

  it("should display each city from cityStorage as a link", () => {
    cityStorage.push("City 1", "City 2", "City 3");
    displayCityHistory(element);

    const links = element.querySelectorAll(".cityLink");
    expect(links.length).toBe(cityStorage.length);

    links.forEach((link, index) => {
      expect(link.getAttribute("href")).toBe("#");
      expect(link.getAttribute("class")).toBe("cityLink");
      expect(link.innerText).toBe(cityStorage[index]);
    });
  });

  it("should append each city link to the element", () => {
    cityStorage.push("City 1", "City 2", "City 3");
    displayCityHistory(element);

    const historyItems = element.querySelectorAll(".link-text");
    expect(historyItems.length).toBe(cityStorage.length);

    historyItems.forEach((item) => {
      expect(item.querySelector(".cityLink")).toBeTruthy();
    });
  });
});
