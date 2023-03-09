async function listagemDinamica() {
  var myHeaders = new Headers();
  myHeaders.append("api-version", "1");
  myHeaders.append(
    "Authorization",
    "Bearer cec1935f-65a0-4f6d-b2b6-8d354a4631e9"
  );

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };
  await fetch(
    "https://portal.cosmospro.com.br:9191/odata/CustomViews(Name='CV_Produtos')/ExecuteAndReceiveData()",
    requestOptions
  )
    .then((response) => response.text())
    .then((res) => {
      const cardContainer = document.querySelector("#conteudo-card");
      cardContainer.innerHTML = ""; // resetar container que armazena os cards
      JSON.parse(res).value.forEach(
        (item) =>
          (cardContainer.innerHTML +=
            // inicio do card

            `

                  <div class="card">
                    <div class="item-card-imagem">
                      <img class="imagem-produto img-fluid" src="img/semFt.png" />
                      <div class="menu-hide">
                        <div class="favoritos">
                          <div class="addFav coracao">
                            <i class="fa-solid fa-heart"></i>
                            <p>Favoritos</p>
                          </div>
                          <div class="addEspiar">
                            <i class="fa-solid fa-eye"></i>
                            <p>Espiar</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="conteudo-card">
                        <h4 class="text-center produto_nome">${item.DESCRICAO}</h4>
                        <div class="text-center mb-auto">
                          <a key="${item.ID}" type="button" class="btn btn-outline-success text  preco carrin"
                            href="#">${item.PRECO}</a>
                        </div>
                      </div>
                    </div>
                  </div>

            `)
        // fim do  card
      ); // popular o container com os dados recebidos})
    })
    .catch((error) => console.log("error", error));
}

export default listagemDinamica;
