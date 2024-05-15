import './App.css';
import React, { useState } from 'react';
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import pikachuImage from './image/pikachu.png';
import raichuImage from './image/raichu.png';
import mewtwoImage from './image/meotwo.png';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Pikachu', image: pikachuImage , catchRate: 65 },
    { id: 2, name: 'Raichu', image: raichuImage, catchRate: 45 },
    { id: 3, name: 'Mewtwo', image: mewtwoImage, catchRate: 5 }
    ]);

  const [caughtPokemons, setcaughtPokemons] = useState([]);
  const [pokeballs, setpokeballs] = useState(50);
  
  const handleCatchPokemon = (pokemon) => {
    const catchRate = pokemon.catchRate;
    const namePokemon = pokemon.name;
    console.log(namePokemon);
    console.log(catchRate);
    const randomCatchRate = Math.random() * 100;
    console.log(randomCatchRate);
    if (randomCatchRate <= catchRate) {
        setcaughtPokemons([...caughtPokemons, pokemon]);
        console.log(caughtPokemons);
        setpokeballs(pokeballs - 1);
        alert(`Bắt thành công ${namePokemon}`);
    } else {
        alert(`Bắt thất bại ${namePokemon}`);
        setpokeballs(pokeballs - 1);
    }
}
  return (
    <div className='container-fluid'>
      <div >
        <ul className='d-flex'>
          <li><h2>Pokemon React App</h2></li>
          <li> Pokemon </li>
          <li> Pokedex </li>
        </ul>
      </div>
      <div className='row'>
        <div className='col-4 d-flex justify-content-center align-items-center '>
              <p className='pd-20'>Total Pokemon: {pokemons.length}</p>
              <p className='pd-20'>Pokemon Caught: {caughtPokemons.length}</p>
              <p className='pd-20'>Total Pokeballs: {pokeballs}</p>
        </div>
      </div>
      <div>
        <PokemonList key={pokemons.id} pokemons={pokemons} onCatch ={handleCatchPokemon}/>
      </div>
  
    </div>
  );
}

export default App;
