
function Inicio() {
  
  return (
    <>
        <h1 id="logo">Igreja Nosso Senhor</h1>
    <input id="busca" type="text" placeholder="busca" />
    <button id="login">Fazer Login</button>
    <button id="carrinho">Carrinho</button>
    <button id="contato">Fale Conosco</button>

            <h2 id="produtos">Produtos</h2>
                <div id="relacionados">
                    <div class="prodrelacionado">
                    
                        <p class="precoprodrel">Preço R$ 10,00</p>
                        <button> Adicionar ao carrinho</button>
                    </div>

                <div class="prodrelacionado">
                    <p class="precoprodrel">Preço R$ 20,00</p>
                    <button> Adicionar ao carrinho</button>

                </div>

                <div class="prodrelacionado">
                    <p class="precoprodrel">Preço R$ 30,00</p>
                    <button> Adicionar ao carrinho</button>

            </div>

        </div>
    </>
  )
}

export default Inicio
