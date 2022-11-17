atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById("carrinho");
  containerCarrinho.innerHTML = "";
  itens.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML += `
                <p class="carrinho-pad">${val.nome} | quantidade: ${val.quantidade} <p/>
                <hr>
            
        `;
    }
  });
};

var links = document.getElementsByClassName("carrin");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    itens[key].quantidade++;
    atualizarCarrinho();
  });
}
