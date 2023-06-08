import { Link } from "react-router-dom";

const Products = ({id, title, img, price}) => {
    const link = "/details/" + id
    return ( 
        <>
            <article>
                <h2>{title}</h2>
                <figure>
                    <img src={img} alt={title}/>
                    <figcaption>{price}$</figcaption>
                </figure>
                <Link to={link}>More</Link>
            </article>
        </>
     );
}
 
export default Products;