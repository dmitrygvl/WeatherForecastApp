export const YANDEX_API_KEY = "ce3d2607-7277-4a80-945e-e03352ae7dbd";

export function displayInfo(el, data) {
  const mapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;

  const dateNow = new Date();

  el.innerHTML = `
  <h2>${data.name}</h2>
  <p class="date">${dateNow.toLocaleDateString("ru-RU")}</p>
  
  <p class="weather-text"><b>Погода:</b> ${data.weather[0].main} - ${
    data.weather[0].description
  }</p>

  <div class="box-image"><img class="icon-weather" src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@2x.png" alt="Icon weather"></img></div>

  <div><b>Температура</b> ${data.main.temp}°C</div>
  <div class="box-image"></div><image src="${mapUrl}" /></div>
`;
}
