function mostraFooter() {
  return `
          <div class="container-footer">
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.889714571429!2d-46.348676382556135!3d-23.964339700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce030d047e9251%3A0x1a863be344228af2!2sProcfit!5e0!3m2!1spt-BR!2sbr!4v1667257064457!5m2!1spt-BR!2sbr"
                  width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div id="rodape">
            <img
              width="197"
              height="39"
              src="./img/logo-proc-branco.png" class="img-fluid" width="200"
            />
            <p class="text=white">Copyright © 2021</p>
            <p  class="text=white">Procfit Gestão Orientada a Processos LTDA</p>
          </div>
        `;
}

export default mostraFooter;
