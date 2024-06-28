import React, {useState,useContext} from 'react';
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PokemonContext from "./PokemonContext";

const PokemonList = (props) => {
    const context = useContext(PokemonContext);
    const pokemons = context.pokemons;
  return (
    <div className='row'>
        <div className='col-4 d-flex align-items-center'>
        {
        pokemons.map((pokemon) => (
          <table border={1} className='mg-20'>
            <Pokemon key={pokemon.name} pokemons={pokemon}/>
          </table>
        ))
    }
    </div>
    </div>
    
  );
};

export default PokemonList;
