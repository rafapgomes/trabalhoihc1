import "./Navbar.css";
import { NavLink } from "react-router-dom";
import iconeCarrinho from "./carrinho.png";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/conta">Conta</NavLink>
          </li>
          <li>
            <NavLink to="/pedidos">Pedidos</NavLink>
          </li>
          <li>
            <input id="busca" type="text" placeholder="busca" />
          </li>
          <li id="carrinho-navbar">
            <NavLink to="/pedidos">
              <img
                src={iconeCarrinho}
                alt="Carrinho de compras"
                className="icone-carrinho"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
