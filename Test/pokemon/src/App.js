import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PokemonList from './PokemonList';
import CatchPokemon from './CatchPokemon';
import PokemonContext from './PokemonContext';
import Pokedex from './Pokedex';
import { NavLink, Router, Route, Routes } from 'react-router-dom';

function App() {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Pikachu', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png', catchRate: 65 },
    { id: 2, name: 'Raichu', image: 'https://static.pokemonpets.com/images/monsters-images-800-800/26-Raichu.webp', catchRate: 45 },
    { id: 3, name: 'MewTwo', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//150.png', catchRate: 5 }
  ])
  const [caughtPokemons, setCaughtPokemons] = useState([]);
  const [pokeballs, setPokeballs] = useState(50);
  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, caughtPokemons, setCaughtPokemons, pokeballs, setPokeballs }}>
      <div style={{ padding: '10px' }}>
        <div style={{ padding: '10px' }}>
          <span>Pokemon React App</span>
          <NavLink style={{ margin: '10px', fontSize:'30px' }} to='/'>List Pokemon</NavLink>
          <NavLink style={{ margin: '10px', fontSize:'30px' }} to='/Pokedex'>Pokedex</NavLink>
        </div>
        <div className='showing'>
          <div>Total Pokemon: {pokemons.length}</div>
          <div>Pokemon Caught: {caughtPokemons.length}</div>
          <div>Pokeballs Remaining: {pokeballs}</div>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Routes >
            <Route path='/' element={<PokemonList></PokemonList>}></Route>
            <Route path='Pokedex' element={<Pokedex></Pokedex>}></Route>
          </Routes>
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
