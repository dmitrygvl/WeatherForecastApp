import { getWeather } from "./getWeather";

describe("getWeather", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ cod: 200, weather: { main: "Cloudy" } }),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call fetch with the correct URL", async () => {
    const API_KEY = "cd35692496444ae52ba1a576e23c1d5c";
    const cityName = "Kaluga";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`;

    await getWeather(cityName);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  it("should return weather data from the response", async () => {
    const cityName = "Kaluga";
    const result = await getWeather(cityName);
    expect(result).toEqual({ cod: 200, weather: { main: "Cloudy" } });
  });

  it("should return false if the response cod is not 200", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ cod: 500, message: "Internal server error" }),
      }),
    );

    const cityName = "Kaluga";
    const result = await getWeather(cityName);
    expect(result).toBe(false);
  });

  it("should return false if there is an error during the fetch", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error("Network error")));

    const cityName = "Kaluga";
    const result = await getWeather(cityName);
    expect(result).toBe(false);
  });
});
