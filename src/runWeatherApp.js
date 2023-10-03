import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";
import { getWeather } from "./modules/getWeather";

export async function runWeatherApp(el) {
  displayApp(el);

  const infoWrapper = document.querySelector(".info");
  const form = document.querySelector("form");
  const input = document.querySelector(".input-form");
  const historyWrapper = document.querySelector(".history");
  const recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

  form.addEventListener("submit", (ev) => {
    alert(input.value);
    ev.preventDefault();
  });

  const nativeCityName = await getNativeCityName();

  const currentLocationData = getWeather(nativeCityName);

  console.log({ nativeCityName, currentLocationData });
}
