import React from "react";
import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const increament = () => {
        setNumber(number + 1);
    }
    const decreament = () => {
        setNumber(number - 1);
    }
    const reset = () => {
        setNumber(0);
    }
    return (
        <div>
            <h3>Counter App</h3>
            <h4>{number}</h4>
            <button style={{ background: "green", color: "white", borderRadius: "8px", margin: "5px", width: "100px", height: "50px" }} onClick={() => increament()}>Increament</button>
            <button style={{ background: "red", color: "white", borderRadius: "8px", margin: "5px", width: "100px", height: "50px" }} onClick={() => decreament()}>Decreament</button>
            <button style={{ background: "grey", color: "white", borderRadius: "8px", margin: "5px", width: "100px", height: "50px" }} onClick={() => reset()}>Reset</button>
        </div>
    )
}
export default Counter;