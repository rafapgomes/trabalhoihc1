import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            
            <nav className="navbar">
            <ul className="navbar-links">
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/conta">Conta</NavLink> </li>
            <li> <NavLink to="/pedidos">Pedidos</NavLink> </li>

            </ul>
            </nav>
        </>
        );
}

export default Navbar;
