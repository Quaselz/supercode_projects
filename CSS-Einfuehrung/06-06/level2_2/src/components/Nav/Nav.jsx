import { NavLink, Link } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
    return ( 
        <>
            <nav className="navbar">
                <div>
                    <Link to="/">My Life</Link>
                </div>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Blog">Blog</NavLink>
                </div>
            </nav>
        </>
     );
}
 
export default Nav;