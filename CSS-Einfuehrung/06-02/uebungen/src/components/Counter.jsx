import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function plus() {
        setCount(count +1)
    }
    function minus() {
        setCount(count -1)
    }
     function reset() {
        setCount(0)
    } 

    return ( 
        <>
            <p>Counter {count} </p>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={reset}>reset</button> 
        </>
     );
}
 
export default Counter;