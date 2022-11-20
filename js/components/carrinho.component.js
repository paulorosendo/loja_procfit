import itens from "../../itens.json" assert { type: "json" };

var links = document.getElementsByClassName("carrin");
var nCarrinho = document.getElementById("numero");
nCarrinho.innerHTML = 0;
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var key = this.getAttribute("key");
    itens[key].quantidade++;
    nCarrinho.innerHTML = "";
    nCarrinho.innerHTML = itens[key].preco * itens[key];
  });
}
