import { stores } from '../pages/Home';
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
    const params =  useParams();
    const id = params.id
    const news = stores.useState("news")
    //console.log(news);
    const article = news[0].articles[id]
    return ( 
        <>
        <section>
            <article>
            <h1>Details</h1>
            <p>{article.author}</p>
            <p>{article.content}</p>
            <p>{article.description}</p>
            <p>{article.publishedAt}</p>
            <p>{article.title}</p>
            <p>{article.url}</p>
            <p>{article.urlToImage}</p>
            </article>
        </section>
        </>
     );
}
 
export default NewsDetails
