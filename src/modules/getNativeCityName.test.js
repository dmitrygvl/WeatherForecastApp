import { getNativeCityName } from "./getNativeCityName";

describe("Test getNativeCityName function", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ city: "Kaluga" }),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should call fetch with the correct url", async () => {
    await getNativeCityName();
    expect(global.fetch).toHaveBeenCalledWith(
      "https://get.geojs.io/v1/ip/geo.json",
    );
  });

  it("should return the correct city name from the response", async () => {
    const result = await getNativeCityName();
    expect(result).toEqual("Kaluga");
  });
});
