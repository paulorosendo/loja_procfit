import Listagem from "./listagem.component.js";

function mostraMain() {
  return `

    <!-- As a heading -->
    <nav class="navbar navb-top">
      <div class="container-fluid text-center ">
        <span class="navbar-brand mx-auto h1">
            <img src="./img/logo-proc-branco.png" class="img-fluid" width="200"
        </span>
      </div>
    </nav>
      <div class="bem-vindo">Seja Bem Vindo a procstore</div>
        <div class="conteudo-list">
          <div id="container">
                  ${Listagem()}
            </div>
          </div>
      </div>
    `;
}

export default mostraMain;
