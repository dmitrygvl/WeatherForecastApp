import { getWeather } from "./getWeather";
import { displayInfo } from "./displayInfo";
import { displayCityHistory } from "./displayCityHistory";
import { writeCities } from "./writeCities";
import { addCitiesLinks } from "./addCitiesLinks";

export async function getAndDisplayWeather(cityName) {
  const infoWrapper = document.querySelector(".info");
  const historyWrapper = document.querySelector(".history");
  try {
    const weatherData = await getWeather(cityName);
    displayInfo(infoWrapper, weatherData);
    writeCities(weatherData.name);
    displayCityHistory(historyWrapper);
    addCitiesLinks();
  } catch (getAndDisplayWeatherError) {
    console.error({ getAndDisplayWeatherError });
    infoWrapper.innerHTML = "Кажется, такого города не существует";
  }
}
