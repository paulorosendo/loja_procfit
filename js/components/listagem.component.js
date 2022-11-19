import itens from "../../itens.json" assert { type: "json" };

const listagemCards = (val) => {
  let result = ``;
  itens.map(
    (val) =>
      (result += `
                      <ul class="card">
                        <li class="item-card-imagem">
                          <img class="imagem-produto" src="img/${val.img}"  />
                          <div class="menu-hide">
                            <div class="favoritos">
                              <div class="addFav coracao">
                                <i class="fa-solid fa-heart "></i>
                                <p>Favoritos</p>
                              </div>
                              <div class="addEspiar">
                                <i class="fa-solid fa-eye"></i>
                                <p>Espiar</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h1 class="produto_nome">${val.nome}</h1>
                            <p class="text-center-des">${val.descricao}</p>
                            <P key="${val.id}" class="text-center-des preco" href="#">R$${val.preco},99</p>
                        </li>
                    </ul>  
                  `)
  );
  return result;
};

export default listagemCards;
