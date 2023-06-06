import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return ( 
        <>
            <nav className="navbar">
                <div>
                    <NavLink to="/">
                    <img src="" alt="Logo" />
                    <p>Kims Cafe Köln</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/Speisekarte">Speisekarte </NavLink>
                    <NavLink to="/Galerie">Galerie </NavLink>
                    <NavLink to="/Kontakt">Kontakt </NavLink>
                    <NavLink to="/Oeffnungszeiten">Oeffnungszeiten </NavLink>
                </div>
            </nav>
        </>
     );
}
 
export default Nav;