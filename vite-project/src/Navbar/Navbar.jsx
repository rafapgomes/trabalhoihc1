import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            
            <nav className="navbar">
            <ul className="navbar-links">
            <li> <NavLink to="/">Inicio</NavLink> </li>
            <li> <NavLink to="/conta">Conta</NavLink> </li>
            <li> <NavLink to="/pedidos">Pedidos</NavLink> </li>
            <input id="busca" type="text" placeholder="busca" />

            </ul>
            </nav>
        </>
        );
}

export default Navbar;
