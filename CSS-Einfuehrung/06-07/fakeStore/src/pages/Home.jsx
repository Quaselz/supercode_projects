import { useState } from "react";
import { useEffect } from "react";
import './Home.css'
import Products from "../components/Products/Products";

const Home = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((data) => {
            setProducts(data)
        })
        .catch((error) => {
            console.log("Fehler", error)
        })
    }, [])

    console.log(products);
    return ( 
        <>
        <h1>home</h1>
        <section className="productSection">
            {
                products?.map((product, index) => <Products id={product.id} title={product.title} img={product.image} price={product.price} key={index}/>)
            }
        </section>
        </>
     );
}
 
export default Home;