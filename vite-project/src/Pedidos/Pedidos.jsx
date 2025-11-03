function Pedidos() {
  
  return (
    <>
    <div>
    <h1 id="logo">Igreja Nosso Senhor</h1>
    <input id="busca" type="text" placeholder="busca" />
    <button id="carrinho">Carrinho</button>
    <button id="contato">Fale Conosco</button>
    </div>

    
    <h2 id="Seus pedidos">Seus pedidos</h2>
    <div className="tabela">
        <table>
            <thead>
            <tr>
                <th>Numero do pedido</th>
                <td>            </td>
                <th>Status</th>
                <td>            </td>
                <th>Rastreio</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>22195</td>
                <td>            </td>
                <td>Enviado</td>
                <td>            </td>
                <td>BR3237289362783AJ</td>
            </tr>
            </tbody>
        </table>
    </div>
    
    
    </>
  )
}

export default Pedidos