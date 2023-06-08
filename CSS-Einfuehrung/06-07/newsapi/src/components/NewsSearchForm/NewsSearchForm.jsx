import { useState } from "react";

const NewsSearchForm = ({setUrl, counter, setCounter}) => {
    const [phrases, setPhrases] = useState("");
    const [dateMin, setDateMin] = useState();
    const [dateMax, setDateMax] = useState();
    const date = new Date().toISOString().split('T')[0];
    const key = "eefb03909fca45f89526b51bb67702c7"

    const sendForm = (e) => {
        e.preventDefault();
        setCounter(counter +1);
        if(phrases && dateMin && dateMax)
            return setUrl("https://newsapi.org/v2/everything?q="+ phrases +"&from="+dateMin+"&to="+dateMax+"&sortBy=popularity&apiKey="+key)
    }

    return ( 
        <form>
            <label htmlFor="phrases"></label>
            <input type="text" onChange={(e) => setPhrases(e.target.value)} name="phrases" placeholder="use search"></input>
            <label htmlFor="dateMin"></label>
            <input type="date"onChange={(e) => setDateMin(e.target.value)} name="dateMin" max={date}></input>
            <label htmlFor="dateMax"></label>
            <input type="date"onChange={(e) => setDateMax(e.target.value)} name="dateMax" max={date}></input>
            <button onClick={sendForm}>Search</button>
        </form>
     );
}
 
export default NewsSearchForm;