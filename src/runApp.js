import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";
import { getAndDisplayWeather } from "./modules/getAndDisplayWeather";
import { readCities } from "./modules/readCities";

export async function runApp(el) {
  displayApp(el);

  const input = document.querySelector(".input-form");
  const form = document.querySelector("form");
  const recentSearch = readCities();

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    getAndDisplayWeather(input.value);
    input.value = "";
  });

  const nativeCityName = await getNativeCityName();

  await getAndDisplayWeather(nativeCityName);
}
