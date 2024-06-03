import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './DataFetcher.css';
const DataFetcher = () => {
    const [prd,setPrd] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                setPrd(data);
            })
            .catch(error => console.log(error));
    }, [])
    return(
        <div className="productInfo">
            <h4>{prd.name}</h4>
            <h1>{prd.product}</h1>
            <p style={{whiteSpace:"pre-line"}}>{prd.info}</p>
            <h3 className="price">{prd.price}</h3>
            <h4 className="discount">{prd.discount}</h4>
            <p className="oldPrice">{prd.oldPrice}</p>
        </div>
    )
}
export default DataFetcher;