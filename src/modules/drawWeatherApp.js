export function drawWeatherApp(wrapperEl) {
  wrapperEl.innerHTML = `
    <h1>Weather Forecast App</h1>

    <form>
      <input name="cityName" required autofocus />
      <button>Show weather</button>
    </form>

    <div class="info"></div>
  `;
}
