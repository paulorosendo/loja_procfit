import Listagem from "./listagem.component.js";

function mostraMain() {
  return `
     <div class="text-aling-center">
        <h1 class="bemvindo">Bem vindo(a), ProcStore!</h1>
        <div id="container">${Listagem()}</div>
    </div>
    `;
}

export default mostraMain;
