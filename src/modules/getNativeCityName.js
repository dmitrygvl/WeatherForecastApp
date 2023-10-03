export async function getNativeCityName() {
  const url = "https://get.geojs.io/v1/ip/geo.json";

  const response = await fetch(url);

  const data = await response.json();

  return data.city;
}
