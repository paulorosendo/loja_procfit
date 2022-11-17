import mostraHeader from "./components/header.component.js"
import mostraMain from "./components/main.component.js"
import mostraFooter from "./components/footer.component.js"

let root = document.querySelector("#root")

root.innerHTML = `
                  ${mostraHeader()}
                  ${mostraMain()}
                  ${mostraFooter()}
                  `