import BtnNow from "../Btns/BtnNow";

const ImageArticle = (props) => {
    //console.log(props.imgArticle);
    return ( 
        <article>
                <img src={props.imgArticle.img} alt={props.imgArticle.product}/>
                <p>{props.imgArticle.product}</p>
                <p>{props.imgArticle.price}$</p>
                <BtnNow />
        </article>
     );
}
 
export default ImageArticle;