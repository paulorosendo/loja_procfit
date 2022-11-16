function mostra(frase) {
  var txt = frase;
  document.querySelector("#root").innerHTML = frase;
}

const itens = [
  {
    id: 0,
    nome: "Caderno",
    img: "Caderno.jpg",
    categoria: 1,
    preco: 15,
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Camisa Seja Diferente",
    img: "Camisa Seja Diferente.jpg",
    preco: 25,
    categoria: 1,
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Camisa SoftFácil",
    img: "Camisa SoftFácil.jpg",
    preco: 25,
    categoria: 1,
    quantidade: 0,
  },

  {
    id: 3,
    nome: "Camisa SQL",
    img: "Camisa SQL.jpg",
    preco: 25,
    categoria: 1,
    quantidade: 0,
  },
];

inicilizarLoja = () => {
  var containerProdutos = document.getElementById("container");
  itens.map((val) => {
    containerProdutos.innerHTML += `
        <div class="card">
            <img class="img1" src="img/${val.img}" />
            <div class="descricao-card">
                <p>R$${val.preco}</p>
            </div>

            <div class="display-none">
              <h2>${val.nome}</h2>
            </div>

             <div class="addCar">
    <a key="${val.id}" class="carrin" href="#">Adcionar ao carrinho</p>
       </div>

        </div>  
      `;
  });
};
inicilizarLoja();

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
    var intenTransformado = itens[key].quantidade++;

    atualizarCarrinho();
    return false;
  });
}

function setCookie(intenTransformado) {
  let expires = "";
  if (days != 0) {
    let age = days * 24 * 60 * 60; // tempo em segundos
    expires = `Max-Age = ${age};`;
  } else {
    expires = "";
  }
  document.cookie = `${cname} = ${cvalue}; ${expires}; Path=/`;
}
