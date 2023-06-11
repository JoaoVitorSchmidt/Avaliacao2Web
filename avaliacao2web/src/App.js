import './App.css';
import logo from "./image/logo.png";
import ipa from "./image/ipa.jpg";
import witbier from "./image/witbier.jpg";
import porter from "./image/porter.png";

function App() {
  return (
    <div className="App">
          <head>
              <title>Cervejaria Schmdke - A melhor cerveja artesanal do Brasil</title>
          </head>

          <body>
              <header>
                  <img id="logo" src={logo} alt="Cervejaria Schmdke"></img>

                  <nav class="menu">
                      <ul>
                          <li><a href="#home">Home</a></li>
                          <li><a href="#funcionários">Funcionários</a></li>
                      </ul>
                  </nav>
              </header>

              <main>
                  <section id="home">
                      <h2>Bem-vindo à Cervejaria Schmdke</h2>
                      <p>Nós somos uma empresa especializada em produzir cervejas artesanais de alta qualidade. Todos os nossos produtos são feitos com os melhores ingredientes e com muito cuidado e atenção aos detalhes.</p>
                      <a href="#nossas-cervejas" id="link">Conheça nossas cervejas</a>
                  </section>

                  <section id="sobre">
                      <h2>Sobre nós</h2>
                      <p>A Cervejaria Schmdke foi fundada em 2010 por três amigos que compartilham uma paixão por cervejas artesanais. Desde então, a empresa cresceu e se tornou uma referência no mercado.</p>
                      <p>Nós nos orgulhamos de criar cervejas únicas e inesquecíveis, que são apreciadas por consumidores exigentes em todo o país.</p>
                  </section>

                  <section id="nossas-cervejas">
                      <h2>Nossas cervejas</h2>
                      <ul id="cervejas">
                          <li>
                              <img src={ipa} alt="Cerveja IPA"></img>
                              <h3>Cerveja IPA</h3>
                              <p>A India Pale Ale (IPA) é uma cerveja de alta fermentação, com sabor amargo e aroma cítrico. É uma das nossas cervejas mais populares.</p>
                              <a href="#comprar">Comprar agora</a>
                          </li>
                          <li>
                              <img src={witbier} alt="Cerveja Witbier" id="witbier"></img>
                              <h3>Cerveja Witbier</h3>
                              <p>A Witbier é uma cerveja de trigo belga, com sabor suave e aroma frutado. É uma ótima escolha para dias quentes de verão.</p>
                              <a href="#comprar">Comprar agora</a>
                          </li>
                          <li>
                              <img src={porter} alt="Cerveja Porter"></img>
                              <h3>Cerveja Porter</h3>
                              <p>A Porter é uma cerveja escura de origem inglesa, com sabor torrado e aroma de café. É perfeita para beber com sobremesas ou pratos salgados.</p>
                              <a href="#comprar">Comprar agora</a>
                          </li>
                      </ul>
                  </section>

                  <section id="contato">
                      <h2>Entre em contato</h2>
                      <p>Se você tiver alguma dúvida ou sugestão, por favor, não hesite em nos contatar.</p>
                      <form>
                          <label for="nome">Nome:</label>
                          <input type="text" id="nome" name="nome" required></input>
                          <label for="email">Email:</label>
                          <input type="email" id="email" name="email" required></input>
                          <label for="mensagem">Mensagem:</label>
                          <textarea id="mensagem" name="mensagem" required></textarea>
                          <button type="submit">Enviar mensagem</button>
                      </form>
                  </section>
              </main>

              <footer>
                  <p>&copy; 2023 Cervejaria Schmdke - Desenvolvido por Jorge Standke e João Schmidt</p>

                  <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#funcionários">Funcionários</a></li>
                  </ul>
              </footer>
          </body>
    </div>
  );
}

export default App;
