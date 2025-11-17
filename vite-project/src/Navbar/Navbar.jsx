import "./Navbar.css";
import { NavLink } from "react-router-dom";
import iconeCarrinho from "./carrinho.png";
import iconeConta from "./17487663.png";
import iconeIgreja from "./igreja.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <NavLink to="/">
              <img
                src={iconeIgreja}
                alt="Carrinho de compras"
                className="iconsimgigreja"
              />
            </NavLink>
          </li>
          <li>Brecho Nossa Senhora </li>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
