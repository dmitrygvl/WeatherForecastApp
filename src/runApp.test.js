import { runApp } from "./runApp";
import { displayApp } from "./modules/displayApp";
import { getAndDisplayWeather } from "./modules/getAndDisplayWeather";
import { getNativeCityName } from "./modules/getNativeCityName";

jest.mock("./modules/displayApp");
jest.mock("./modules/getAndDisplayWeather");
jest.mock("./modules/getNativeCityName");

describe("runApp", () => {
  let input;
  let form;
  let eventListeners;

  beforeEach(() => {
    input = document.createElement("input");
    form = document.createElement("form");
    eventListeners = {};

    document.querySelector = jest.fn((selector) => {
      if (selector === ".input-form") {
        return input;
      }
      if (selector === "form") {
        return form;
      }
    });

    form.addEventListener = jest.fn((event, listener) => {
      eventListeners[event] = listener;
    });

    displayApp.mockClear();
    getAndDisplayWeather.mockClear();
    getNativeCityName.mockClear();
  });

  test("should call displayApp with the element", () => {
    const element = document.createElement("div");
    runApp(element);
    expect(displayApp).toHaveBeenCalledWith(element);
  });

  test("should add event listener to the form submit event", () => {
    runApp(document.createElement("div"));
    expect(form.addEventListener).toHaveBeenCalledWith(
      "submit",
      expect.any(Function),
    );
  });

  test("should call getNativeCityName and getAndDisplayWeather", async () => {
    getNativeCityName.mockResolvedValue("Los Angeles");
    runApp(document.createElement("div"));

    await Promise.resolve();

    expect(getNativeCityName).toHaveBeenCalled();
    expect(getAndDisplayWeather).toHaveBeenCalledWith("Los Angeles");
  });
});
