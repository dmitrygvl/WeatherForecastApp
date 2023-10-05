export function displayApp(wrapperEl, cityName) {
  wrapperEl.innerHTML = `

  <header class = "header info"></header>


    <nav class="cities block">
    
      <form>
        <input name="cityName" class="input-form" required autofocus placeholder="Введите город" />
        <button class="button-form" type="submit">Искать</button>
      </form>
    
      <section class="history block"></section>
    </nav>

  `;
}
