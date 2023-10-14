import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";
import { getAndDisplayWeather } from "./modules/getAndDisplayWeather";

export async function runApp(el) {
  displayApp(el);

  const input = document.querySelector(".input-form");
  const form = document.querySelector("form");

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    getAndDisplayWeather(input.value);
    input.value = "";
  });

  const nativeCityName = await getNativeCityName();

  await getAndDisplayWeather(nativeCityName);
}
