import "./Navbar.css";
import { NavLink } from "react-router-dom";
import iconeCarrinho from "./carrinho.png";
import iconeConta from "./17487663.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <input id="busca" type="text" placeholder="busca" />
          </li>
          <li className="icons-navbar">
            <NavLink to="/conta">
              <img
                src={iconeConta}
                alt="Carrinho de compras"
                className="iconsimg"
              />
            </NavLink>
            <NavLink to="/pedidos">
              <img
                src={iconeCarrinho}
                alt="Carrinho de compras"
                className="iconsimg"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
