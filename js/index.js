mostraHeader = (frase) => {
  var txt = frase;
  document.getElementById("header").innerHTML += txt;
};

mostraMain = (frase) => {
  var txt = frase;
  document.getElementById("conteudo-main").innerHTML += txt;
};

mostraFooter = (frase) => {
  var txt = frase;
  document.getElementById("conteudo-footer").innerHTML += txt;
};

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
