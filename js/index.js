import mostraInicio from "./components/home.component.js";
import mostraListagem from "./components/listagem.component.js";
import mostraFooter from "./components/footer.component.js";

let root = document.querySelector("#root");

root.innerHTML += `
  ${mostraInicio()}
  ${mostraListagem()}
  ${mostraFooter()}
                  `;
