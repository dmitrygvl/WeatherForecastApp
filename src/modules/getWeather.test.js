import { getWeather, API_KEY } from "./getWeather";

describe("getWeather", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ weather: "Cloudy" }),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call fetch with the correct URL", async () => {
    const cityName = "Kaluga";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=${cityName}&appid=${API_KEY}`;
    await getWeather(cityName);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  it("should return weather data from the response", async () => {
    const cityName = "Kaluga";
    const result = await getWeather(cityName);
    expect(result).toEqual({ weather: "Cloudy" });
  });
});
