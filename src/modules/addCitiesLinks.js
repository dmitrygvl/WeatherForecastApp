import { getAndDisplayWeather } from "./getAndDisplayWeather";

export function addCitiesLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", async (ev) => {
      ev.preventDefault();
      const cityNameAtHistory = link.innerText;
      await getAndDisplayWeather(cityNameAtHistory);
    });
  });
}
