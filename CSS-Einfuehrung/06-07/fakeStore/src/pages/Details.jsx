import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const params = useParams()
    const id = params.id
    let outputHtml
    const [product, setProduct] = useState()
    const url = "https://fakestoreapi.com/products/" + id
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setProduct(data)
        })
        .catch((error) => {
            console.log("Fehler", error)
        })
    }, [])
    if(product) {
        outputHtml =             
        <>
            <figure>
                <img src={product.image} alt={product.  title}/>
                <figcaption>{product.price}$</figcaption>
            </figure>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <div>
                <p>{product.rating.count}</p>
                <p>{product.rating.rate}</p>
            </div>
        </>
    }
    return ( 
        <article>
            <h1>Details</h1>
            {outputHtml}
        </article>
     );
}
 
export default Details;
