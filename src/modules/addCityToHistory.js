export const recentSearch =
  JSON.parse(localStorage.getItem("recentSearch")) || [];

export function readCities() {
  const cities = JSON.parse(localStorage.getItem("recentSearch"));
  return cities ?? [];
}

export function addCityToHistory(cityName) {
  if (recentSearch.length >= 10) {
    recentSearch.shift();
  }
  if (!recentSearch.includes(cityName)) {
    recentSearch.push(cityName);
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
  }
}
