function mostraHeader() {
  return `
      <aside class="sidebar">
        <div class="toggle">
          <a
            href="#"
            class="burger js-menu-toggle icone-burguer"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
        <div class="side-inner">
          <div class="logo-wrap">
            <div class="logo">
              <span>P</span>
            </div>
            <span class="logo-text">Paulo</span>
          </div>


          <div class="nav-menu">
            <ul>
              <li class="active ">
                <a href="#" class="d-flex text-white align-items-center"
                  ><span class="wrap-icon icon-home2 mr-3"></span
                  ><span class="menu-text">Home</span></a
                >
              </li>

              <li>
                <a href="#" class="d-flex align-items-center"
                  ><span class="wrap-icon icon-book mr-3"></span
                  ><span class="menu-text">Meus Pedidos</span></a
                >
              </li>

              <li>
                <a href="#" class="d-flex align-items-center"
                  ><span class="wrap-icon icon-shopping-cart mr-3"></span
                  ><span class="menu-text">Store</span></a
                >
              </li>

              <li>
                <a href="#" class="d-flex align-items-center"
                  ><span class="wrap-icon icon-pie-chart mr-3"></span
                  ><span class="menu-text">Ajuda</span></a
                >
              </li>
            </ul>
          </div>
        </div>
            <div id="numero"></div>
            <i class="fa-solid fa-cart-shopping carrinho"></i>
      </aside>
      `;
}

export default mostraHeader;
