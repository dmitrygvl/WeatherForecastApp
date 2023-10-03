export function displayApp(wrapperEl) {
  wrapperEl.innerHTML = `
    <h1>Прогноз погоды</h1>

    <form>
      <input class="input-form" name="cityName" required autofocus placeholder="Введите название города" />
      <button>Показать</button>
    </form>

    <section class="history container-history"></section>
    
    <section class="info container-info"></section>
  `;
}
