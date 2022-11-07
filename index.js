function mostra(frase) {
  var txt = frase;
  document.querySelector("#root").innerHTML = frase;
}

const objCamisaURL = [
  {
    camisaURL: [
      "Caderno.jpg",
      "Camisa Seja Diferente.jpg",
      "Camisa SoftFácil.jpg",
      "Camisa SQL.jpg",
      "Camisa Superar Desafios.jpg",
      "Camisa Team Procfit.jpg",
      "Camiseta Cosmos.jpg",
      "Camiseta SoftFácil.jpg",
      "Polo Azul Cosmos.jpg",
      "Polo Azul Marinho Procfit.jpg",
      "Polo Azul Royal Procfit.jpg",
      "Polo Azul SoftFácil.jpg",
      "Polo Branca Cosmos.jpg",
      "Polo Branca Procfit.jpg",
      "Polo Vermelha Procfit.jpg",
    ],
  },

  {
    descricao: [
      "Caderno",
      "Camisa Seja Diferente",
      "Camisa SoftFácil",
      "Camisa SQL",
      "Camisa Superar Desafios",
      "Camisa Team Procfit",
      "Camiseta Cosmos",
      "Camiseta SoftFácil",
      "Polo Azul Cosmos",
      "Polo Azul Marinho Procfit",
      "Polo Azul Royal Procfit",
      "Polo Azul SoftFácil",
      "Polo Branca Cosmos",
      "Polo Branca Procfit",
      "Polo Vermelha Procfit",
    ],
  },

  {
    preco: [15, 25, 15, 25, 25, 25, 50, 50, 35, 35, 35, 35, 35, 35, 35],
  },
];

// JSON
// converter Object para JSON
objCamisaURL_JsonData = JSON.stringify(objCamisaURL);

// converter JSON para OBJ
camisaObjURL_Data = JSON.parse(objCamisaURL_JsonData);

camisaObjURL_Data.map((url) => {
  cardFunction(){
    for (i = 0; i < objCamisaURL.length; i++) {
      document.getElementById("container").innerHTML += `
        <div class="card">
            <a href="">
            <img class="img1" src="img/${url.camisaURL[i]}" />
            <div class="descricao-card">
                <p>descricao</p>
            </div>

            <div class="addCar">
                <h3>Adicionar ao carrinho</h3>
            </div>

            <div class="preco-card">
                <h3>preco</h3>
            </div>
            </a>
        </div>

      `;
    }
  };
});

var cont = 0;
document.getElementById("inserirpreco").innerHTML += cont;
