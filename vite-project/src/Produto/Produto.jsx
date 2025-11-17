import "./Produto.css";
import { Link } from "react-router-dom";
import imagemCalca from "./calca.jpeg";
function Produto() {
  return (
    <div className="pagina-produto-container">
      <div id="produto">
        <img src={imagemCalca} alt="Foto do Produto" className="imgcalca"></img>
        <div id="detalhes">
          <dl id="lista-detalhes">
            <dt>Quant. Itens:</dt>
            <dd>2</dd>

            <dt>Tamanho:</dt>
            <dd>M </dd>

            <dt>Material:</dt>
            <dd>Algodão </dd>

            <dt>Cor:</dt>
            <dd>Preto </dd>
          </dl>
        </div>
        <div id="preco">
          Preço: R$ 20,00
          <button id="adicionar-carrinho">Adicionar ao carrinho</button>
        </div>
      </div>
      <h2 id="titulorel">Produtos relacionados</h2>
      <div id="relacionados">
        <div class="prodrelacionado">
          <img
            src={imagemCalca}
            alt="Foto do Produto"
            className="imgcalcarel"
          ></img>

          <p class="precoprodrel">Preço R$ 17,00</p>
          <button> Adicionar ao carrinho</button>
        </div>
        <div class="prodrelacionado">
          <img
            src={imagemCalca}
            alt="Foto do Produto"
            className="imgcalcarel"
          ></img>

          <p class="precoprodrel">Preço R$ 22,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <img
            src={imagemCalca}
            alt="Foto do Produto"
            className="imgcalcarel"
          ></img>
          <p class="precoprodrel">Preço R$ 2022,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <img
            src={imagemCalca}
            alt="Foto do Produto"
            className="imgcalcarel"
          ></img>

          <p class="precoprodrel">Preço R$ 17,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <img
            src={imagemCalca}
            alt="Foto do Produto"
            className="imgcalcarel"
          ></img>

          <p class="precoprodrel">Preço R$ 22,00</p>
          <button> Adicionar ao carrinho</button>
        </div>

        <div class="prodrelacionado">
          <img
            src={imagemCalca}
            alt="Foto do Produto"
            className="imgcalcarel"
          ></img>

          <p class="precoprodrel">Preço R$ 2022,00</p>
          <button> Adicionar ao carrinho</button>
        </div>
      </div>
      <Link to="/">Voltar para o Início</Link>
    </div>
  );
}

export default Produto;
