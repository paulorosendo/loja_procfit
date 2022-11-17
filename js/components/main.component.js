import Listagem from "./listagem.component.js"
import Carrinho from "./carrinho.component.js"

function mostraMain () {
  return `
     <div class="text-aling-center">
        <h1 class="bemvindo">Bem vindo(a), ProcStore!</h1>
        <div id="carrinho">${Carrinho()}</div>
        <div id="container">${Listagem()}</div>
    </div>
    `
}

export default mostraMain