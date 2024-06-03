import React from "react";
import { useContext } from "react";
import PokemonContext from "./PokemonContext";
import './Pokedex.css';
const Pokedex = (props) => {
    const context = useContext(PokemonContext);
    const caughtPokemons = context.caughtPokemons;

    return (
        <div>
            {
                caughtPokemons.map((item) => {
                    return (
                        <div style={{ display: 'inline-block', margin: '10px'}}>
                            <div><img alt={item.image} src={item.image}></img></div>
                            <div>{item.name}</div>
                            <div>{item.catchRate}</div>
                        </div>
                    )
                })
            }
        </div>
    )
} 
export default Pokedex;