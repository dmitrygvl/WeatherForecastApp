import { getWeather } from "./getWeather";
import { displayInfo } from "./displayInfo";
import { displayCityHistory } from "./displayCityHistory";
import { readCities } from "./readCities";
import { writeCities } from "./writeCities";
import { addCityToHistory, recentSearch } from "./addCityToHistory";
import { addCitiesLinks } from "./addCitiesLinks";

export async function getAndDisplayWeather(cityName) {
  const infoWrapper = document.querySelector(".info");
  const historyWrapper = document.querySelector(".history");
  try {
    const weatherData = await getWeather(cityName);
    displayInfo(infoWrapper, weatherData);
    addCityToHistory(cityName);
    displayCityHistory(historyWrapper, recentSearch);
    addCitiesLinks();
  } catch (getAndDisplayWeatherError) {
    console.error({ getAndDisplayWeatherError });
    infoWrapper.innerHTML = "Кажется, такого города не существует";
  }
}

// ниже сломанное отображение истории поиска

// ok export async function getAndDisplayWeather(cityName) {
// ok const infoWrapper = document.querySelector(".info");
// ok  const historyWrapper = document.querySelector(".history");
// ok  try {
// ok  const weatherData = await getWeather(cityName);
//     const recentSearch = readCities();
//     const links = document.querySelectorAll("a");

//     displayInfo(infoWrapper, weatherData);
//     writeCities(weatherData);
//     displayCityHistory(historyWrapper, recentSearch);

//     links.forEach((link) => {
//       link.addEventListener("click", async (ev) => {
//         ev.preventDefault();
//         const cityNameAtHistory = link.innerText;
//         await getAndDisplayWeather(cityNameAtHistory);
//       });
//     });
//   } catch (getAndDisplayWeatherError) {
//     console.error({ getAndDisplayWeatherError });
//     infoWrapper.innerHTML = "Кажется, такого города не существует";
//   }
// }
