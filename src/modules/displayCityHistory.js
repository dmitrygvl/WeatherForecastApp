import { cityStorage } from "./writeCities";

export function displayCityHistory(el) {
  el.innerHTML = `
    <h2>История поиска</h2>
  `;

  cityStorage.forEach((cityQueried) => {
    const cityLink = document.createElement("a");
    cityLink.innerText = cityQueried;
    cityLink.setAttribute("href", "#");
    cityLink.setAttribute("class", "cityLink");

    const historyItem = document.createElement("p");
    historyItem.setAttribute("class", "link-text");
    historyItem.appendChild(cityLink);
    el.appendChild(historyItem);
  });
}
