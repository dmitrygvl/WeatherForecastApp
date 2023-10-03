import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";

export async function runWeatherApp(el) {
  displayApp(el);

  const nativeCityName = await getNativeCityName();

  console.log({ nativeCityName });
}
