(inicilizarLoja = () => {
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

             <div class="modal">
                modal
             <div>
        </div>  
      `;
  });
})();
