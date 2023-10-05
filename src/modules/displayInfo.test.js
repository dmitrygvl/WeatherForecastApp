import { displayInfo, YANDEX_API_KEY } from "./displayInfo";

const pin = "";

// const pin = require('../assets/img/pin.svg')

// import pin from "../assets/img/pin.svg";

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

//

// describe("displayInfo", () => {
//   beforeEach(() => {
//     document.body.innerHTML = '<div id="container"></div>';
//   });

//   it("should set the innerHTML correctly", () => {
//     const el = document.getElementById("container");
//     const data = {
//       name: "Kaluga",
//       coord: { lon: 35.5, lat: 54.5 },
//       weather: [{ main: "Cloudy", description: "Cloudy sky" }],
//       main: { temp: 11 },
//     };

//     displayInfo(el, data);

//     expect(el.innerHTML).toContain(`
//       <h2>${data.name}</h2>
//       <div>Weather: ${data.weather[0].main} - ${data.weather[0].description}</div>
//       <div>Temp: ${data.main.temp}°C</div>
//       <img src= "https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10" />
//     `);
//   });
// });

//

// describe("Test displayInfo function", () => {
//   let el;

//   beforeEach(() => {
//     el = document.createElement('header');
//   });

//   it("should set the weather info correctly", () => {
//     const mapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;

//     const element = document.getElementById("element");
//     const data = {
//       name: "Moscow",
//       coord: { lon: 37.6176, lat: 55.7514 },
//       weather: [
//         {
//           main: "Cloudy",
//           description: "Cloudy sky",
//           icon: "01d",
//         },
//       ],
//       main: { temp: 10 },
//     };

//     displayInfo(el, data);

//     expect(element.innerHTML).toContain('');
//     expect(element.innerHTML).toContain(`
//     <div class = "block data">
//           <div class = "location">
//              <img src = ${pin} alt ="images pin" class = "img-pin"/>
//              <h1>${data.name}</h1>

//       </div>
//       <div class="description">
//           <p class="date">${dateNow.toLocaleDateString("ru-RU")}</p>
//           <p class="weather-text">${data.weather[0].main} - ${
//             data.weather[0].description
//           }</p>
//           </div>
//           <div class="box-image"><img class="icon-weather" src="https://openweathermap.org/img/wn/${
//             data.weather[0].icon
//           }@2x.png" alt="Icon weather"></img>
//           <div class="text-temp">${data.main.temp}°C</div>
//           </div>
//           <class="block"><image id="map" src="${mapUrl}" /></div>
//       `);
//   });
// });

//

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
