import { getAndDisplayWeather } from "./getAndDisplayWeather";
import { getWeather } from "./getWeather";
import { displayInfo } from "./displayInfo";
import { displayCityHistory } from "./displayCityHistory";
import { writeCities } from "./writeCities";
import { addCitiesLinks } from "./addCitiesLinks";

jest.mock("./getWeather");
jest.mock("./displayInfo");
jest.mock("./displayCityHistory");
jest.mock("./writeCities");
jest.mock("./addCitiesLinks");

describe("getAndDisplayWeather", () => {
  let cityName;
  let infoWrapper;
  let historyWrapper;
  let mockGetWeather;
  let mockDisplayInfo;
  let mockWriteCities;
  let mockDisplayCityHistory;

  beforeEach(() => {
    cityName = "Sample City";
    infoWrapper = document.createElement("div");
    infoWrapper.classList.add("info");
    historyWrapper = document.createElement("div");
    historyWrapper.classList.add("history");
    document.body.appendChild(infoWrapper);
    document.body.appendChild(historyWrapper);
    mockGetWeather = getWeather.mockResolvedValue({});
    mockDisplayInfo = displayInfo.mockImplementation();
    mockWriteCities = writeCities.mockImplementation();
    mockDisplayCityHistory = displayCityHistory.mockImplementation();
    jest.clearAllMocks();
    addCitiesLinks.mockClear();
  });

  afterEach(() => {
    cityName = null;
    infoWrapper.remove();
    infoWrapper = null;
    historyWrapper.remove();
    historyWrapper = null;
    document.body.innerHTML = "";
  });

  it("calls getWeather with the correct cityName", async () => {
    await getAndDisplayWeather(cityName);
    expect(mockGetWeather).toHaveBeenCalledWith(cityName);
  });

  it("calls displayInfo with the correct infoWrapper and weatherData", async () => {
    const weatherData = {
      name: "London",
    };
    mockGetWeather.mockResolvedValueOnce(weatherData);
    await getAndDisplayWeather(cityName);
    expect(mockDisplayInfo).toHaveBeenCalledWith(infoWrapper, weatherData);
  });

  it("should call writeCities with the name from weatherData", async () => {
    const weatherData = { name: "London" };
    getWeather.mockResolvedValue(weatherData);
    await getAndDisplayWeather("London");
    expect(writeCities).toHaveBeenCalledWith(weatherData.name);
  });
  it("should call addCitiesLinks", async () => {
    await getAndDisplayWeather("London");
    expect(addCitiesLinks).toHaveBeenCalled();
  });

  it("calls displayCityHistory with the correct historyWrapper", async () => {
    await getAndDisplayWeather(cityName);
    expect(mockDisplayCityHistory).toHaveBeenCalledWith(historyWrapper);
  });

  it("logs error when getWeather throws an error", async () => {
    const error = new Error("Failed to fetch weather data");
    mockGetWeather.mockRejectedValueOnce(error);
    const mockConsoleError = jest.spyOn(console, "error").mockImplementation();

    await getAndDisplayWeather(cityName);

    expect(mockConsoleError).toHaveBeenCalledWith({
      getAndDisplayWeatherError: error,
    });
    expect(infoWrapper.innerHTML).toContain(
      "Кажется, такого города не существует",
    );

    mockConsoleError.mockRestore();
  });
});
