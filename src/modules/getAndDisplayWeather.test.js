import { getWeather } from "./getWeather";
import { displayInfo } from "./displayInfo";
import { recentSearch, addCityToHistory } from "./addCityToHistory";
import { displayCityHistory } from "./displayCityHistory";
import { getAndDisplayWeather } from "./getAndDisplayWeather";

describe("getAndDisplayWeather", () => {
  beforeEach(() => {
    document.body.innerHTML = ` 
      <div class="info"></div>
      <div class="history"></div>
    `;
  });

  it("should get weather data, display information, add city to history, and set event listeners", async () => {
    const cityName = "Moscow";
    const infoWrapper = document.querySelector(".info");
    const historyWrapper = document.querySelector(".history");

    const weatherDataMock = {
      name: cityName,
      // other weather data properties...
    };

    const getWeatherMock = jest.fn().mockResolvedValue(weatherDataMock);
    const displayInfoMock = jest.fn();
    const addCityToHistoryMock = jest.fn();
    const displayCityHistoryMock = jest.fn();

    jest.spyOn(global, "getWeather").mockImplementation(getWeatherMock);
    jest.spyOn(global, "displayInfo").mockImplementation(displayInfoMock);
    jest
      .spyOn(global, "addCityToHistory")
      .mockImplementation(addCityToHistoryMock);
    jest
      .spyOn(global, "displayCityHistory")
      .mockImplementation(displayCityHistoryMock);

    await getAndDisplayWeather(cityName);

    expect(getWeatherMock).toHaveBeenCalledWith(cityName);
    expect(displayInfoMock).toHaveBeenCalledWith(infoWrapper, weatherDataMock);
    expect(addCityToHistoryMock).toHaveBeenCalledWith(cityName);
    expect(displayCityHistoryMock).toHaveBeenCalledWith(
      historyWrapper,
      global.recentSearch,
    );

    const links = document.querySelectorAll("a");
    expect(links.length).toBe(1);
    links[0].dispatchEvent(new Event("click"));
    expect(getAndDisplayWeather).toHaveBeenCalledTimes(2);
    expect(getAndDisplayWeather).toHaveBeenCalledWith(cityName);
  });

  it("should handle and display error when weather data cannot be fetched", async () => {
    const cityName = "InvalidCityName";
    const infoWrapper = document.querySelector(".info");

    const getWeatherMock = jest
      .fn()
      .mockRejectedValue(new Error("Weather data fetch failed"));
    const consoleErrorMock = jest.spyOn(console, "error");

    jest.spyOn(global, "getWeather").mockImplementation(getWeatherMock);

    await getAndDisplayWeather(cityName);

    expect(getWeatherMock).toHaveBeenCalledWith(cityName);
    expect(consoleErrorMock).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Weather data fetch failed" }),
    );
    expect(infoWrapper.innerHTML).toBe("Кажется, такого города не существует");
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = "";
  });
});
