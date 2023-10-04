export function displayApp(wrapperEl) {
  wrapperEl.innerHTML = `
  <header class = "header">
  
  </header>

    <form>
      <input name="cityName" class="input-form" required autofocus placeholder="Введите город" />
      <button class="button-form" type="submit">Искать</button>
    </form>

    <section class="history container-history"></section>
    
    <section class="info container-info"></section>

    <section class="history container-history"></section>

  `;
}
