import React, {useState} from 'react';
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const PokemonList = ({ pokemons,onCatch }) => {
  return (
    <div className='row'>
        <div className='col-4 d-flex align-items-center'>
        {
        pokemons.map((pokemons) => (
          <table border={1} className='mg-20'>
            <Pokemon key={pokemons.name} pokemons={pokemons} onCatch ={(pokemons) => onCatch(pokemons)}/>
          </table>
        ))
    }
    </div>
    </div>
    
  );
};

export default PokemonList;
