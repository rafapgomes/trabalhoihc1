import './Produto.css'
import { Link } from 'react-router-dom';

function Produto() {
  
  return (
    <>
    <h1 id="logo">Igreja Nosso Senhor</h1>
    <input id="busca" type="text" placeholder="busca" />
    <button id="login">Fazer Login</button>
    <button id="carrinho">Carrinho</button>
    <button id="carrinho">Fale Conosco</button>

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

        <h2 id="tiulorelacionados">Produtos relacionados</h2>
            <div id="relacionados">
                <div class="prodrelacionado">
                    
                    <p class="precoprodrel">Preço R$ 10,00</p>
                </div>

                <div class="prodrelacionado">
                    <p class="precoprodrel">Preço R$ 20,00</p>
                </div>

                <div class="prodrelacionado">
                    <p class="precoprodrel">Preço R$ 30,00</p>
            </div>

         
        </div>
        <Link to="/">Voltar para o Início</Link>
    </div>

    </>
  )
}

export default Produto
