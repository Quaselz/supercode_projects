const MovieArticle = ({title, year, director, duration, genre, rate}) => {

    return ( 
        <>
        <article>
            <h2>{title}</h2>
            <p>{year}</p>
            <p>{director}</p>
            <p>{duration}</p>

            <p>{genre.map((ele) => ele + " ")}</p>
            <p>{rate}</p>
        </article>
        </>
     );
}
 
export default MovieArticle;