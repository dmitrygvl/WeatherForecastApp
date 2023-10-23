export const API_KEY = "cd35692496444ae52ba1a576e23c1d5c";

export async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=${cityName}&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
