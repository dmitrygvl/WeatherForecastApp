import { getAndDisplayWeather } from "./getAndDisplayWeather";
import { getWeather } from "./getWeather";
import { displayInfo } from "./displayInfo";
import { displayCityHistory } from "./displayCityHistory";
import { readCities } from "./readCities";
import { writeCities } from "./writeCities";

// jest.mock("./getWeather.js");
// jest.mock("./displayInfo.js");
// jest.mock("./displayCityHistory.js");
// jest.mock("./readCities.js");
// jest.mock("./writeCities.js");

// Конечно! Вот тесты с использованием Jest для функции getAndDisplayWeather:

jest.mock("./getWeather");
jest.mock("./displayInfo");
jest.mock("./displayCityHistory");
jest.mock("./readCities");
jest.mock("./writeCities");

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
      /* mocked weather data */
    };
    mockGetWeather.mockResolvedValueOnce(weatherData);
    await getAndDisplayWeather(cityName);
    expect(mockDisplayInfo).toHaveBeenCalledWith(infoWrapper, weatherData);
  });

  it("calls writeCities with the correct cityName", async () => {
    await getAndDisplayWeather(cityName);
    expect(mockWriteCities).toHaveBeenCalledWith(cityName);
  });

  it("calls displayCityHistory with the correct historyWrapper and recentSearch", async () => {
    await getAndDisplayWeather(cityName);
    expect(mockDisplayCityHistory).toHaveBeenCalledWith(
      historyWrapper,
      readCities(),
    );
  });

  test("adds event listener to each link", async () => {
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    document.body.appendChild(link1);
    document.body.appendChild(link2);
    const mockAddEventListener = jest.fn();
    link1.addEventListener = mockAddEventListener;

    await getAndDisplayWeather(cityName);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      expect(mockAddEventListener).toHaveBeenCalledWith(
        "click",
        expect.any(Function),
      );
    });
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
