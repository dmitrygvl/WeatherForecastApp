import { displayApp } from "./modules/displayApp";
import { getNariveLocationName } from "./modules/getNariveLocationName";

export async function runWeatherApp(el) {
  displayApp(el);

  const nativeLocationName = await getNariveLocationName();

  console.log({ nativeLocationName });
}
