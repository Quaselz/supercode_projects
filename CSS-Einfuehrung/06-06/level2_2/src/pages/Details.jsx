import { useParams } from 'react-router-dom' 
import { blogData } from "../products"
import Nav from '../components/Nav/Nav';

const Details = () => {
    const params = useParams()
    const userId = params.userId;
    const product = blogData[userId]
    
    return ( 
        <>
            <Nav />
            <section>
                <article>
                    <img src={product.img_url} alt={product.title} />
                </article>
                <article>
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.published_date}</p>
                    </div>
                    <p>{product.description}</p>
                    <p>{product.author}</p>
                </article>
            </section>
        </>
     );
}
 
export default Details;