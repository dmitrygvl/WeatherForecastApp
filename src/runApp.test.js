import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";
import { getWeather } from "./modules/getWeather";
import { displayInfo } from "./modules/displayInfo";
import { displayCityHistory } from "./modules/displayCityHistory";
import { runApp } from "./runApp";

// Mock dependencies
jest.mock("./modules/displayApp");
jest.mock("./modules/getNativeCityName");
jest.mock("./modules/getWeather");
jest.mock("./modules/displayInfo");
jest.mock("./modules/displayCityHistory");

describe("runApp", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="element"></div>
    `;
  });

  it("should set up event listeners and call the necessary functions correctly", async () => {
    const element = document.getElementById("element");
    const input = document.createElement("input");
    const form = document.createElement("form");
    const infoWrapper = document.createElement("div");
    const historyWrapper = document.createElement("div");
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    global.localStorage = localStorageMock;

    displayApp.mockImplementation((el) => {
      el.appendChild(input);
      el.appendChild(form);
      el.appendChild(infoWrapper);
      el.appendChild(historyWrapper);
    });

    getNativeCityName.mockResolvedValue("Moscow");

    await runApp(element);

    expect(displayApp).toHaveBeenCalledWith(element);

    expect(getNativeCityName).toHaveBeenCalled();

    form.dispatchEvent(new Event("submit"));

    expect(getWeather).toHaveBeenCalledWith(input.value);

    expect(displayInfo).toHaveBeenCalledWith(infoWrapper, expect.anything());

    expect(localStorage.setItem).toHaveBeenCalled();

    expect(displayCityHistory).toHaveBeenCalledWith(
      historyWrapper,
      expect.anything(),
    );

    const aTag = document.createElement("a");
    historyWrapper.appendChild(aTag);
    aTag.dispatchEvent(new Event("click"));

    expect(getWeather).toHaveBeenCalledWith(aTag.innerText);
    expect(displayInfo).toHaveBeenCalledTimes(2);
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete global.localStorage;
  });
});
