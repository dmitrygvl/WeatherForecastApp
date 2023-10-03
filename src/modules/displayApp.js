export function displayApp(wrapperEl) {
  wrapperEl.innerHTML = `
    <h1>Прогноз погоды</h1>

    <form>
      <input name="cityName" class="input-form" required autofocus placeholder="Введите город" />
      <button class="button-form" type="submit">Показать</button>
    </form>

    <section class="history container-history"></section>
    
    <section class="info"></section>
  `;
}
