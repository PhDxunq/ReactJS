import React, { useContext } from "react";
import Pokemon from "./Pokemon";
import PokemonContext from "./PokemonContext";
const PokemonList = (props) => {
    const context = useContext(PokemonContext);
    const pokemons = context.pokemons;
    return (
        <>
            {pokemons.map((pokemon) => {
                return (
                    <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} catchRate={pokemon.catchRate}></Pokemon>
                )
            })}
        </>
    )
}
export default PokemonList;