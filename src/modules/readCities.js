export function readCities() {
  const cities = JSON.parse(localStorage.getItem("recentSearch"));
  return cities ?? [];
}

// попробовать:

export const recentSearch = readCities(); // и экспортировать
