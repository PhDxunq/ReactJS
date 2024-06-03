import React from "react";
import { useContext } from "react";
import PokemonContext from "./PokemonContext";
import CatchPokemon from "./CatchPokemon";
const Pokemon = ({ id, name, image, catchRate }) => {
    return (
        <div style={{ display: 'inline-block', margin: '10px' }}>
            <div><img alt={image} src={image}></img></div>
            <div>{name}</div>
            <div>{catchRate}</div>
            <div><CatchPokemon id={id} image={image} name={name} catchRate={catchRate}></CatchPokemon></div>
        </div>
    )
}
export default Pokemon;