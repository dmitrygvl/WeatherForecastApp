import { readCities } from "./readCities";

export const cityStorage = readCities();

export function writeCities(cityName) {
  if (cityStorage.length >= 10) {
    cityStorage.shift();
  }
  if (!cityStorage.includes(cityName)) {
    cityStorage.push(cityName);
    localStorage.setItem("recentSearch", JSON.stringify(cityStorage));
  }
}
