import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const Pokemon = ({ pokemons,onCatch }) => {
    return (
        <div className="pd-20" > 
            <img src={pokemons.image} alt={pokemons.name} style={{ width: '500px', height: '500px' }} />
            <p>{pokemons.name}</p>
            <span>Catch Rate: {pokemons.catchRate} %</span><br />
            <button  className="mg-20" onClick={ () => onCatch(pokemons)} >Catch </button>
        </div>
    );

}

export default Pokemon;