import "./Produto.css";
import { Link } from "react-router-dom";

function Produto() {
  return (
    <>
      <div id="produto">
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
      </div>

      <h2 id="tiulorelacionados">Produtos relacionados</h2>
      <div id="relacionados">
        <div class="prodrelacionado">
          <p class="precoprodrel">Preço R$ 17,00</p>
        </div>

        <div class="prodrelacionado">
          <p class="precoprodrel">Preço R$ 22,00</p>
        </div>

        <div class="prodrelacionado">
          <p class="precoprodrel">Preço R$ 2022,00</p>
        </div>

        <div class="prodrelacionado">
          <p class="precoprodrel">Preço R$ 17,00</p>
        </div>

        <div class="prodrelacionado">
          <p class="precoprodrel">Preço R$ 22,00</p>
        </div>

        <div class="prodrelacionado">
          <p class="precoprodrel">Preço R$ 2022,00</p>
        </div>
      </div>
      <Link to="/">Voltar para o Início</Link>
    </>
  );
}

export default Produto;
