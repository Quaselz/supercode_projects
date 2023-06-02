import { useState } from "react";

const DayNight = () => {
    const [night, setNight] = useState(false)
    const body = document.body;
    body.style.backgroundColor = night ? "#fff" : "#000";
    body.style.color = night ? "#000" : "#fff";

    return ( 
        <>
        <h1>{night ? "Es ist Tag" : "Es ist Nacht"}</h1>
        <button onClick={() => {setNight(!night)}}>clickMe</button>
        </>
     );
}
 
export default DayNight;