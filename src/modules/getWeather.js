const API_KEY = "cd35692496444ae52ba1a576e23c1d5c";

export async function getWeather(cityName) {
  const API_KEY = "cd35692496444ae52ba1a576e23c1d5c";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const weatherInfo = await response.json();
    return weatherInfo.cod === 200 ? weatherInfo : false;
  } catch (error) {
    console.error(`api.openweathermap.org: ${error.message}`);
    return false;
  }
}
