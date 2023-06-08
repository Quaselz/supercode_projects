import { NavLink } from "react-router-dom"
import './Nav.css'
const Nav = () => {
    return ( 
        <nav className="navbar">
            <h1>Geiler Shop</h1>
            <NavLink to="/">Home</NavLink>
        </nav>
     );
}
 
export default Nav;
