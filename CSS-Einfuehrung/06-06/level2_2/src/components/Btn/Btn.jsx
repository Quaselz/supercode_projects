import './btn.css'
import { NavLink, Link } from "react-router-dom";

const Btn = ({text, href}) => {
    
    return ( 
        <>
            <NavLink className="btn" to={href}>{text}</NavLink> 
        </>
     );
}
 
export default Btn;