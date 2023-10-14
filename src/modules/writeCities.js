import { readCities, recentSearch } from "./readCities";

export function writeCities(cityName) {
  // const recentSearch = readCities();

  if (recentSearch.length >= 10) {
    recentSearch.shift();
  }
  if (!recentSearch.includes(cityName)) {
    recentSearch.push(cityName);
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
  }
}
