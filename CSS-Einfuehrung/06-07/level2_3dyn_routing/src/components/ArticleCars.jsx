import { Link } from "react-router-dom";

const ArticleCars = ({id, make}) => {
    const link = "/details/" + id;
    return ( 
        <article>
            <p>{make}</p>
            <Link to={link}>Read more</Link>
        </article>
     );
}
 
export default ArticleCars
