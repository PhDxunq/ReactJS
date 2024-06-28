import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CatchPokemon from "./CatchPokemon";

const Pokemon = ({ pokemons}) => {
    return (
        <div className="pd-20" > 
            <img src={pokemons.image} alt={pokemons.name} style={{ width: '500px', height: '500px' }} />
            <p>{pokemons.name}</p>
            <span>Catch Rate: {pokemons.catchRate} %</span><br />
            <div><CatchPokemon pokemons={pokemons}></CatchPokemon></div>
        </div>
    );

}

export default Pokemon;