function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {

    document.getElementById("root").innerHTML = (frase)

}


// header
mostra(`
    <header>
        <div id="container-nav"> 
            <input type="checkbox" id="burger-shower" class="burger-shower">
            <label for="burger-shower" class="hamburger">
                <i class="fa-solid fa-bars menu-barr" ></i>
            </label>

            <ul class="burger-menu">
                <li>Home</li>
                <li>Produtos</li>
                <li>Contato</li>
                <li>Pedidos</li>
                <li>Ajuda</li>
                <li>Sobre nós</li>
                <li>Contato</li>
                
            </ul>

            <img id="img-logo" src="img/logo-proc.png">
            <p class='txt-logo'>Store</p>

            </div>
        <div>
    </header> 
    
    
    <main>
        <div class='text-aling-center'>
            <h1 class="bemvindo">Bem vindo(a), ProcStore!!
        </div>
        <div >
            <ul id="container" >
                <li class="produtos">
                    <div class="card">
                        <a href="">
                            <img class="img1" src="img/Camisa SQL.jpg"/>
                            <p>Descrição: Cadeno / agenda Procfit. com 100 folhas formato capa dura esperial</p>

                            <h3 class="descricao-produto">Caderno Procfit</h3>
                            <h3>R$25,00</h3>
                        </a>
                    </div>
                </li>


                <li class="produtos">
                    <div class="card">
                        <img class="img1" src="img/Caderno.jpg"/>
                        <p>Cadeno/Agenda Procfit com 100 folhas, formato capa dura, esperial</p>
                        <h3 class="preco-produto">R$25,00</h3>
                        <div class="addCar">
                            <h2>Adicionar o ao carrinho </h2>
                        </div>
                    </div>
                </li>
                
                
                <li class="produtos">
                    <div class="card">
                        <a href="">
                            <img class="img1" src="img/Camisa Seja Diferente.jpg"/>
                            <p>Descrição: Cadeno / agenda Procfit. com 100 folhas formato capa dura esperial</p>

                            <h3 class="descricao-produto">Caderno Procfit</h3>
                            <h3>R$25,00</h3>
                        </a>
                    </div>
                </li>   
                
                <li class="produtos">
                    <div class="card">
                        <a href="">
                            <img class="img1" src="img/Caderno.jpg"/>
                            <p>Descrição: Cadeno / agenda Procfit. com 100 folhas formato capa dura esperial</p>

                            <h3 class="descricao-produto">Caderno Procfit</h3>
                            <h3>R$25,00</h3>
                        </a>
                    </div>
                </li>  

            </ul>
        </div
    </main>
    `
)






