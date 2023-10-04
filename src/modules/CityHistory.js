// import { readCities } from "./CityStorage";

export function displayCityHistory(el, cityStorage) {
  cityStorage.forEach((cityQueried) => {
    const cityLink = document.createElement("a");
    cityLink.innerText = cityQueried;
    cityLink.setAttribute("href", "#");
    cityLink.setAttribute("href", "#");

    const historyItem = document.createElement("p");
    historyItem.setAttribute("class", "link-text");
    historyItem.appendChild(cityLink);
    el.appendChild(historyItem);
  });
}

// export function saveCities(items) {
//   localStorage.setItem("cities", JSON.stringify(items));
// }

// export function readCities() {
//   const cities = JSON.parse(localStorage.getItem("cities"));
//   return cities ?? [];
// }

// export function addCity(items, item) {
//   const cities = items.filter(
//     (city) => city.toLowerCase() !== item.toLowerCase()
//   );
//   cities.unshift(item);
//   if (cities.length > 10) {
//     cities.pop();
//   }
//   return cities;
// }
