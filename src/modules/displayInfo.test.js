import { displayInfo, YANDEX_API_KEY } from "./displayInfo";

// describe("displayInfo", () => {
//   beforeEach(() => {
//     document.body.innerHTML = '<div id="container"></div>';
//   });

//   it("should set the innerHTML correctly", () => {
//     const el = document.getElementById("container");
//     const data = {
//       name: "Kaluga",
//       coord: { lon: 37.6176, lat: 55.7514 },
//       weather: [{ main: "Cloudy", description: "Cloudy sky" }],
//       main: { temp: 10 },
//     };

//     displayInfo(el, data);

//     expect(el.innerHTML).toContain(`<h2>${data.name}</h2>`);
//     expect(el.innerHTML).toContain(`
//       <div>Weather: ${data.weather[0].main} - ${data.weather[0].description}</div>
//     `);
//     expect(el.innerHTML).toContain(`<div>Temp: ${data.main.temp}</div>`);
//     expect(el.innerHTML).toContain(`
//       <image src="https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10" />
//     `);
//   });
// });

describe("displayInfo", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="container"></div>';
  });

  it("should set the innerHTML correctly", () => {
    const el = document.getElementById("container");
    const data = {
      name: "Kaluga",
      coord: { lon: 35.5, lat: 54.5 },
      weather: [{ main: "Cloudy", description: "Cloudy sky" }],
      main: { temp: 11 },
    };

    displayInfo(el, data);

    expect(el.innerHTML).toContain(`
      <h2>${data.name}</h2>
      <div>Weather: ${data.weather[0].main} - ${data.weather[0].description}</div>
      <div>Temp: ${data.main.temp}°C</div>
      <img src= "https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10" />
    `);
  });
});
