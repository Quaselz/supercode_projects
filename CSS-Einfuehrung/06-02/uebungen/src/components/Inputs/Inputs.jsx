import { useState } from "react";

const Inputs = () => {
    const [name, setName] = useState("");
    const [nachname, setNachname] = useState("");
    const [mail, setMail] = useState("");
    
    return ( 
        <>  
        <div>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => {setName(e.target.value)}} type="text" name="name" id="name" />
            <label htmlFor="nachname">Nachname</label>
            <input onChange={(e) => {setNachname(e.target.value)}} type="text" name="nachname" id="nachname" />
            <label htmlFor="mail">mail</label>
            <input onChange={(e) => {setMail(e.target.value)}} type="email" name="mail" id="mail" />

            <div>
            <p>Name: {name}</p>
            <p>Nachname: {nachname}</p>
            <p>E-Mail: {mail}</p>
            </div>
        </div>
        </>
     );
}
 
export default Inputs;