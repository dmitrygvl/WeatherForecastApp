import { getWeather } from "./getWeather";
import { displayInfo } from "./displayInfo";
import { recentSearch, addCityToHistory } from "./addCityToHistory";
import { displayCityHistory } from "./displayCityHistory";

export async function getAndDisplayWeather(cityName) {
  const infoWrapper = document.querySelector(".info");
  const historyWrapper = document.querySelector(".history");
  try {
    const weatherData = await getWeather(cityName);
    displayInfo(infoWrapper, weatherData);
    addCityToHistory(cityName);
    displayCityHistory(historyWrapper, recentSearch);
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", async (ev) => {
        ev.preventDefault();
        const cityNameAtHistory = link.innerText;
        await getAndDisplayWeather(cityNameAtHistory);
      });
    });
  } catch (getAndDisplayWeatherError) {
    console.error({ getAndDisplayWeatherError });
    infoWrapper.innerHTML = "Кажется, такого города не существует";
  }
}
