import { displayInfo, YANDEX_API_KEY } from "./displayInfo";

const pin = "";

describe("displayInfo", () => {
  const data = {
    name: "Moscow",
    coord: { lon: 37.6176, lat: 55.7514 },
    weather: [
      {
        main: "Cloudy",
        description: "Cloudy sky",
        icon: "01d",
      },
    ],
    main: { temp: 10 },
  };
  beforeEach(() => {
    document.body.innerHTML = '<div id="element"></div>';
  });

  it("should set the innerHTML correctly", () => {
    const element = document.getElementById("element");

    displayInfo(element, data);

    const expectedMapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;

    expect(element.innerHTML).toContain(`<div class="block data">`);
    expect(element.innerHTML).toContain(`
      <img src="${pin}" alt="images pin" class="img-pin>
    `);
    expect(element.innerHTML).toContain(`<h1>${data.name}</h1>`);
    expect(element.innerHTML).toContain(`
      <p class="date">${new Date().toLocaleDateString("ru-RU")}</p>
    `);
    expect(element.innerHTML).toContain(`
      <p class="weather-text">${data.weather[0].main} - ${data.weather[0].description}</p>
    `);
    expect(element.innerHTML).toContain(`
      <img class="icon-weather" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icon weather">
    `);
    expect(element.innerHTML).toContain(`
    <div class="text-temp">${data.main.temp}°C</div>
    `);
    expect(element.innerHTML).toContain(`
    <image id="map" src="${expectedMapUrl}" />
    `);
  });
});
