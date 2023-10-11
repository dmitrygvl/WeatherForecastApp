export const recentSearch =
  JSON.parse(localStorage.getItem("recentSearch")) || [];

export function addCityToHistory(cityName) {
  if (recentSearch.length > 10) {
    recentSearch.shift();
  }
  if (!recentSearch.includes(cityName)) {
    recentSearch.push(cityName);
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
  }
}

//

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

// export function drawList(element) {
//   const cities = readCities();
//   const citiesList = element.querySelector("ul");
//   citiesList.innerHTML = `${cities.map((city) => `<li>${city}</li>`).join("")}`;
// }
