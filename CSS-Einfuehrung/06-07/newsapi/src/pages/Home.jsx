import { useState } from "react";
import { useEffect } from "react";
import NewsSearchForm from "../components/NewsSearchForm/NewsSearchForm";
import NewsArticle from "../components/NewsArticle/NewsArticle";
import {createStore} from 'state-pool';

export const stores = createStore();
stores.setState("news", null);

const Home = () => {
    const [news, setNews] = stores.useState("news")
    const [url, setUrl] = useState()
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        if(url) {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setNews(data);
            })
            .catch((error) => {
                return console.log("Fehler " + error);
            })}
        }, [counter])
        console.log(news);
    return ( 
        <>
            <h1>NewsMews</h1>
            <NewsSearchForm setUrl={setUrl} count={counter} setCounter={setCounter}/>
            <section>
            {news?.articles.map((article, index) => <NewsArticle id={index} author={article.author} title={article.title} urlToImage={article.urlToImage} publishedAt={article.publishedAt} key={index}/>)}
            </section>
        </>
     );
}
 
export default Home;