import pin from "../assets/img/pin.svg";

export const YANDEX_API_KEY = "ce3d2607-7277-4a80-945e-e03352ae7dbd";

export function displayInfo(el, data) {
  const mapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;

  const dateNow = new Date();

  el.innerHTML = `

  


      <div class = "block data">
          <div class = "location">
             <img src = ${pin} alt ="images pin" class = "img-pin"/> 
             <h1>${data.name}</h1>
             
      </div>
      <div class="description"> 
          <p class="date">${dateNow.toLocaleDateString("ru-RU")}</p>
          <p class="weather-text">${data.weather[0].main} - ${
            data.weather[0].description
          }</p>
          </div>
          <div class="box-image"><img class="icon-weather" src="https://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@2x.png" alt="Icon weather"></img>
          <div class="text-temp">${data.main.temp}°C</div>
          </div>

          <class="block"><image id="map" src="${mapUrl}" /></div>
  

      
`;
}
