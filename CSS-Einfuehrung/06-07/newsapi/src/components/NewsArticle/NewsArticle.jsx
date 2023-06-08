import { useState } from "react"
import { Link } from "react-router-dom"

const NewsArticle = ({id, author, title, urlToImage, publishedAt}) => {
    const [img, setImg] = useState(urlToImage)
    const link = "/news/" + id
    return ( 
        <Link to={link}>
            <article>
                {img?<figure>
                    <img src={urlToImage} alt={title}/>
                    <figcaption>{publishedAt}</figcaption>
                </figure>:""}
                
                <p>{title}</p>
                <p>{author}</p>
            </article>
        </Link>
     );
}
 
export default NewsArticle;