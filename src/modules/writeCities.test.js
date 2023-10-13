import { writeCities } from "./writeCities";
import { readCities } from "./readCities";

jest.mock("./readCities.js");

describe("writeCities", () => {
  let setItemMock;

  beforeEach(() => {
    jest.clearAllMocks();

    setItemMock = jest.fn();
    Object.defineProperty(window, "localStorage", {
      value: {
        setItem: setItemMock,
      },
      writable: true,
    });
  });

  it("should save new city when the list is not full", () => {
    readCities.mockReturnValue(["City1", "City2"]);

    writeCities("City3");

    expect(setItemMock).toHaveBeenCalledWith(
      "recentSearch",
      JSON.stringify(["City1", "City2", "City3"]),
    );
  });

  it("should not save the city if it already exists in the list", () => {
    readCities.mockReturnValue(["City1", "City2", "City3"]);

    writeCities("City3");

    expect(setItemMock).not.toHaveBeenCalled();
  });

  it("should remove the first city when the list has 10 cities", () => {
    readCities.mockReturnValue([
      "City1",
      "City2",
      "City3",
      "City4",
      "City5",
      "City6",
      "City7",
      "City8",
      "City9",
      "City10",
    ]);

    writeCities("City11");

    expect(setItemMock).toHaveBeenCalledWith(
      "recentSearch",
      JSON.stringify([
        "City2",
        "City3",
        "City4",
        "City5",
        "City6",
        "City7",
        "City8",
        "City9",
        "City10",
        "City11",
      ]),
    );
  });
});
