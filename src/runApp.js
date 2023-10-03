import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";
import { getWeather } from "./modules/getWeather";
import { displayInfo } from "./modules/displayInfo";

export async function runApp(el) {
  displayApp(el);

  const infoWrapper = document.querySelector(".info");
  const form = document.querySelector("form");
  const input = document.querySelector(".input-form");
  const historyWrapper = document.querySelector(".history");
  const recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
  });

  const nativeCityName = await getNativeCityName();

  const weatherData = getWeather(nativeCityName);

  displayInfo(infoWrapper, weatherData);

  console.log({ nativeCityName, weatherData });
}