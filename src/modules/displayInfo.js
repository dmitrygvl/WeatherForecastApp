export const YANDEX_API_KEY = "ce3d2607-7277-4a80-945e-e03352ae7dbd";

export function displayInfo(el, data) {
  const mapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;

  el.innerHTML = `
    <h2>${data.name}</h2>
    <div>Weather: ${data.weather[0].main} - ${data.weather[0].description}</div>
    <div>Temp: ${data.main.temp}°C</div>
    <img src= "${mapUrl}" />
  `;
}
