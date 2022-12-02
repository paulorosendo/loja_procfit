import itens from "../../itens.json" assert { type: "json" };

const listagemCards = (val) => {
  let result = ``;
  itens.map(
    (val) =>
      (result += `
            <div class="card">
              <div class="item-card-imagem">
                <img
                  class="imagem-produto img-fluid"
                  src="${val.img}"
                />
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
                  <h4 class="text-center produto_nome">${val.descricao}</h4>
                  <div class="text-center mb-auto">
                    <a
                      key="${val.id}"
                      type="button"
                      class="btn btn-outline-success text  preco carrin"
                      href="#"
                      >R$14,99</a
                    >
                  </div>
                </div>
              </div>
            </div>
                  `)
  );
  return result;
};

export default listagemCards;
