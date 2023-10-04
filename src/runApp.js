import { displayApp } from "./modules/displayApp";
import { getNativeCityName } from "./modules/getNativeCityName";
import { getWeather } from "./modules/getWeather";
import { displayInfo } from "./modules/displayInfo";
import { displayCityHistory } from "./modules/CityHistory";

// export async function runApp(el) {
//   displayApp(el);

//   const input = document.querySelector(".input-form");
//   const form = document.querySelector("form");
//   const infoWrapper = document.querySelector(".info");
//   const historyWrapper = document.querySelector(".history");
//   const recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

//   function rewriteCityHistory(cityName) {
//     if (recentSearch.length > 10) {
//       recentSearch.shift();
//     }
//     if (!recentSearch.includes(cityName)) {
//       recentSearch.push(cityName);
//       localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
//     }
//   }

//   async function getAndDisplayInfo(cityName) {
//     try {
//       const weatherData = await getWeather(cityName);
//       displayInfo(infoWrapper, weatherData);
//     } catch (getAndDisplayInfoError) {
//       infoWrapper.innerHTML = "Something went wrong";
//     }
//   }

//   form.addEventListener("submit", async (ev) => {
//     ev.preventDefault();

//     getAndDisplayInfo(input.value);
//   });

//   const nativeCityName = await getNativeCityName();
//   getAndDisplayInfo(nativeCityName);
// }

//

// export async function runApp(el) {
//   displayApp(el);

//   const infoWrapper = document.querySelector(".info");
//   const form = document.querySelector("form");
//   const input = document.querySelector(".input-form");
//   const historyWrapper = document.querySelector(".history");
//   const recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

//   form.addEventListener("submit", async (ev) => {
//     ev.preventDefault();
//   });

//   const nativeCityName = await getNativeCityName();

//   const weatherData = getWeather(nativeCityName);

//   displayInfo(infoWrapper, weatherData);

//   console.log({ nativeCityName, weatherData });
// }

//

export async function runApp(el) {
  displayApp(el);

  const input = document.querySelector(".input-form");
  const form = document.querySelector("form");
  const infoWrapper = document.querySelector(".info");
  const historyWrapper = document.querySelector(".history");
  const recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];

  function rewriteCityHistory(location) {
    if (recentSearch.length > 10) {
      recentSearch.shift();
    }
    if (!recentSearch.includes(location)) {
      recentSearch.push(location);
      localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
    }
  }

  async function getAndDisplayAll(cityName) {
    try {
      const weatherData = await getWeather(cityName);
      displayInfo(infoWrapper, weatherData);
      rewriteCityHistory(cityName);
      displayCityHistory(historyWrapper, recentSearch);
      const cityLinks = document.querySelector("a");

      cityLinks.forEach((link) => {
        link.addEventListener("click", async (ev) => {
          ev.preventDefault();
          const citiesAtHistory = link.innerText;
          await getAndDisplayAll(citiesAtHistory);
        });
      });
    } catch (getAndDisplayAllError) {
      infoWrapper.innerHTML = "Кажется, такого города не существует";
    }
  }

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    getAndDisplayAll(input.value);
  });

  const nativeCityName = await getNativeCityName();
  await getAndDisplayAll(nativeCityName);
}
