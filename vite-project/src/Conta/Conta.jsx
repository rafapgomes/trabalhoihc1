import foto from './assets/foto.png'

function Conta() {
  
  return (
    <>
    <div>
    <h1 id="logo">Igreja Nosso Senhor</h1>
    <input id="busca" type="text" placeholder="busca" />
    <button id="carrinho">Carrinho</button>
    <button id="contato">Fale Conosco</button>
    </div>

    
    
    
    <div>
        <img style={{ width: 200, height: 200 }} src={foto} alt="Foto de perfil" />
    </div>
    <div>
        Nome Completo: <input placeholder="Informe seu nome completo" type="text"></input>
    </div>
    <div>
        Informe sua data de Nascimento: <input placeholder="Data de nascimento" type="date"></input>
    </div>
    <idv>
        Informe seu endereço: <input placeholder="Endereço" type="text"></input>
    </idv>
    </>
  )
}

export default Conta
