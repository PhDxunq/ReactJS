import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import pikachuImage from './image/pikachu.png';
import raichuImage from './image/raichu.png';
import mewtwoImage from './image/meotwo.png';
import PokemonList from './PokemonList';
import PokemonContext from './PokemonContext';
import CatchPokemon from './CatchPokemon';
import Pokedex from './Pokedex';


function App() {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Pikachu', image: pikachuImage , catchRate: 65 },
    { id: 2, name: 'Raichu', image: raichuImage, catchRate: 45 },
    { id: 3, name: 'Mewtwo', image: mewtwoImage, catchRate: 5 }
    ]);

  const [caughtPokemons, setcaughtPokemons] = useState([]);
  const [pokeballs, setpokeballs] = useState(50);
  

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, caughtPokemons, setcaughtPokemons, pokeballs, setpokeballs }} >
      <Router>
        <div className='container-fluid'>
        <div >
          <nav>
          <ul className='d-flex'>
            <li>
              <h2>Pokemon React App</h2>
            </li>
            <li>
              <Link to='/'>Pokemon</Link>
            </li>
            <li>
              <Link to='/Pokedex'>Pokedex</Link>
            </li>
          </ul>
          </nav>
        </div>
        <div className='row'>
          <div className='col-4 d-flex justify-content-center align-items-center '>
                <p className='pd-20'>Total Pokemon: {pokemons.length}</p>
                <p className='pd-20'>Pokemon Caught: {caughtPokemons.length}</p>
                <p className='pd-20'>Total Pokeballs: {pokeballs}</p>
          </div>
        </div>
          <Routes>
              <Route path="/" element={<PokemonList></PokemonList>}/>
              <Route path="Pokedex" element={<Pokedex />} />
          </Routes>
        </div>
      </Router>
    </PokemonContext.Provider>
  );
}

export default App;
