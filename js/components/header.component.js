function mostraHeader() {
  return `<div class="branco">
    <header id="container-nav">
        <div class="conteudo-esquerda">
          <input type="checkbox" id="burger-shower" class="burger-shower" />
          <label for="burger-shower" class="hamburger">
            <i class="fa-solid fa-bars menu-barr"></i>
          </label>

          <ul class="burger-menu">
            <li>COSMOS</li>
            <li>SOFTFACIL</li>
            <li>PROCFIT PRDUTOS</li>
          </ul>

          <img id="img-logo" src="img/logo-proc.png" />

          <p class="txt-logo">Store</p>
        </div>

        <div class="conteudo-direita">
          <div id="inserirpreco"></div>

            <i class="fa-solid fa-cart-shopping carrinho"></i>

        </div>
      </div>
    </header>
    `;
}

export default mostraHeader;
