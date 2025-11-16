import "./Inicio.css";
import imagemCalca from "./assets/calca.jpeg";
import imagemCamisa from "./assets/camisa.png";
import imagemSapato from "./assets/sapato.jpg";
import imagemChapeu from "./assets/chapeu.jpg";
import imagemOculos from "./assets/oculos.jpg";
import imagemPulseira from "./assets/pulseira.jpg";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="pagina-inicio-container">
      <h2 className="titulo">Novidades</h2>
      <div id="relacionados">
        <div class="prodrelacionado">
          <Link to="/Produto">
            <img
              src={imagemCalca}
              alt="Imagem clicável"
              className="img"
            />
          </Link>
          <p class="precoprodrel">Preço R$ 10,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <Link to="/Produto">
            <img
              src={imagemCamisa}
              alt="Imagem clicável"
              className="img"
            />
          </Link>
          <p class="precoprodrel">Preço R$ 20,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <Link to="/Produto">
            <img
              src={imagemSapato}
              alt="Imagem clicável"
              className="img"
            />
          </Link>
          <p class="precoprodrel">Preço R$ 30,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <Link to="/Produto">
            <img
              src={imagemChapeu}
              alt="Imagem clicável"
              className="img"
            />
          </Link>
          <p class="precoprodrel">Preço R$ 17,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <Link to="/Produto">
            <img
              src={imagemOculos}
              alt="Imagem clicável"
              className="img"
            />
          </Link>
          <p class="precoprodrel">Preço R$ 22,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <Link to="/Produto">
            <img
              src={imagemPulseira}
              alt="Imagem clicável"
              className="img"
            />
          </Link>
          <p class="precoprodrel">Preço R$ 2022,00</p>
          <button> Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
