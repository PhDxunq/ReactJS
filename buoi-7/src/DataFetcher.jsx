import React, { useEffect, useState } from 'react';
import './DataFetcher.css';

const DataFetcher = () => {
    const [data, setData] = useState({

    });

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(response => { return response.json() })
            .then(data => {
                setData(data);
            })
    }, []);

    return (
        <div className='data-wrap'>
            <h3>{data.company}</h3>
            <h1> {data.title} </h1>
            <h1> {data.products} </h1>
            <span className='descrip'> {data.description} </span>
            <div className='price'>
                <p> {data.salePrice} </p>
                <p className='pdl-20'> {data.percent} </p>
            </div>
            <p className='currentPrice'> {data.price} </p>
        </div>
    )
}

export default DataFetcher;