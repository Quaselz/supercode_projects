import Btn from "../Btn/Btn";


const Product = ({ele, id, title, imgUrl}) => {
    const href = "/Details/" + id;
    
    return ( 
        <article>
            <img src={imgUrl} alt={title}/>
            <p>{title}</p>
            <Btn text="Read more" href={href}/>
        </article>
     );
}
 
export default Product;