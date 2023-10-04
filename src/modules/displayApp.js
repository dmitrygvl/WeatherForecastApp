export function displayApp(wrapperEl) {
  wrapperEl.innerHTML = `

  <section class="info container-info"></section>
  
    <form>
      <input name="cityName" class="input-form" required autofocus placeholder="Введите город" />
      <button class="button-form" type="submit">Искать</button>
    </form>

    <section class="history container-history"></section>
    
    

    <nav class="history container-history"></nav>

  `;
}
