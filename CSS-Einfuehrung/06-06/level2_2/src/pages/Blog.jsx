import Nav from "../components/Nav/Nav";
import Product from "../components/Product/Product";
import { blogData } from "../products"

const Blog = () => {
    
    return ( 
        <>
            <Nav />
            <section className="gridMe">
                {blogData.map((ele, index) => <Product ele={ele} id={ele.id} title={ele.title} imgUrl={ele.img_url} key={index}/>)}
            </section>
        </>
     );
}
 
export default Blog;