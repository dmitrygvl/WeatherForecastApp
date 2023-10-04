import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";
import { getWeather } from "./modules/getWeather";
import { displayInfo } from "./modules/displayInfo";
import { displayCityHistory } from "./modules/CityHistory";

export async function runApp(el) {
  displayApp(el);

  const input = document.querySelector(".input-form");
  const form = document.querySelector("form");
  const infoWrapper = document.querySelector(".info");
  const historyWrapper = document.querySelector(".history");
  const recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

  function addCityToHistory(cityName) {
    if (recentSearch.length > 10) {
      recentSearch.shift();
    }
    if (!recentSearch.includes(cityName)) {
      recentSearch.push(cityName);
      localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
    }
  }
  //
  async function getAndDisplayWeather(cityName) {
    try {
      const weatherData = await getWeather(cityName);
      displayInfo(infoWrapper, weatherData);
      addCityToHistory(cityName);
      displayCityHistory(historyWrapper, recentSearch);
    } catch (getAndDisplayWeatherError) {
      console.error({ getAndDisplayWeatherError });
      infoWrapper.innerHTML = "Кажется, такого города не существует";
    }
  }

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    getAndDisplayWeather(input.value);
    input.value = "";
  });

  const nativeCityName = await getNativeCityName();

  await getAndDisplayWeather(nativeCityName);
}

// async function getAndDisplayInfo(cityName) {
//   try {
//     const weatherData = await getWeather(cityName);
//     displayInfo(infoWrapper, weatherData);
//   } catch (getAndDisplayInfoError) {
//     infoWrapper.innerHTML = "Something went wrong";
//   }
// }

// form.addEventListener("submit", async (ev) => {
//   ev.preventDefault();

//   getAndDisplayInfo(input.value);
// });

// const nativeCityName = await getNativeCityName();
// getAndDisplayInfo(nativeCityName);
