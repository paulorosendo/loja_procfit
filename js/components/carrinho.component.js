import itens from "../../itens.json" assert { type: "json" };

const atualizarCarrinho = (val) => {
  let resulCarrinho = ``;
  itens.map((val) => {
    if (val.quantidade > 0) {
      resulCarrinho += `
           <p class="carrinho-pad">${val.nome} | quantidade: ${val.quantidade} <p/>
            <hr>
      `;
    }
  });
  return resulCarrinho;
};

var links = Array.from(document.getElementsByClassName(`link`));
console.log(links.length);

var links = document.getElementsByClassName("carrin");
if (links.length > 0) {
  console.log(links);
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      itens[key].quantidade++;
      atualizarCarrinho();
    });
  }
}

export default atualizarCarrinho;
