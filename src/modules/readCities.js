export function readCities() {
  const cities = JSON.parse(localStorage.getItem("recentSearch"));
  return cities ?? [];
}
