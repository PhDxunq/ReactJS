import React, { useEffect } from "react";
import { useState } from "react";

const DataFetcher = () => {
    const [prd, setPrd] = useState({})
    const [color, setColor] = useState([])
    useEffect(() => {
        fetch("data.json", {
            headers: {
                'Content-Type': 'application/js',
                'Accept': 'application/js'
            }
        })
            .then(response => response.json())
            .then(data => {
                setPrd(data);
                setColor(data.color);
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <div style={{display:'inline-flex'}}>
            <h2 style={{textAlign:"right",marginRight:"10px"}}>{prd.name}</h2>
            <p style={{marign:'auto',borderRadius:"8px",background:"orange",height:"30px",width:"40px",color:"white",marginTop:"23px"}}>{prd.status}</p>
            </div>
            <h5>{prd.type}</h5>
            <hr />
            <h4>PRODUCT INFO</h4>
            <p>{prd.info}</p>
            <hr />
            <h4>COLOR</h4>
            <input type="radio"  />
            <hr />
        </div>
    )
}
export default DataFetcher;