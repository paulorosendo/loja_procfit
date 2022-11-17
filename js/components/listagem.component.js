import itens from '../../itens.json' assert {type: 'json'}

function inicilizarLoja () {
  return itens.map((val) => {
            return`
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
                            <p class="text-end-des">R$${val.preco}</p>
                        </li>
                    </ul>  
                  `
          })
}

export default inicilizarLoja

                        // <li class="item-card">
                        //   <p class="list-item">R$${val.preco}</p>
                        // </li>
                        // <li class="item-card">
                        //   <a key="${val.id}" class="carrin" href="#" >${val.nome} <a/>
                        // </li>