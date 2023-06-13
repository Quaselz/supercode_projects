import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { darkLightContext } from "../../Context/Context";
import './Nav.css'

const Nav = () => {
    const { darkLight, setDarkLight } = useContext(darkLightContext)
    return ( 
        <header>
            <nav>
                <div className="logoContainer"onClick={() => setDarkLight((darkLight) => !darkLight) }>
                    <img src="./public/session.jpg" alt="Logo" />
                </div>
                <div>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/About">About </NavLink>
                <NavLink to="/Contact">Contact </NavLink>
                </div>
            </nav>
        </header>
     );
}
 
export default Nav;