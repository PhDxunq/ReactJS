import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";

const CatchPokemon = ({pokemons}) => {
    const context = useContext(PokemonContext);
    const handleCatch = () => {
        alert("Tung bóng");
        const index = Math.floor(Math.random() * 100);
        if (index <= pokemons.catchRate) {
            alert("Bắt thành công " + pokemons.name);
            context.setcaughtPokemons([
                ...context.caughtPokemons,
                pokemons
            ])
            context.setpokeballs(context.pokeballs - 1);
            return true;
        }
        else {
            alert("Bắt thất bại " + pokemons.name);
            context.setpokeballs(context.pokeballs - 1);
            return false;
        }

    }
    return(
        <>
            <button onClick={() => handleCatch()}>Catch</button>
        </>
    )
}
export default CatchPokemon;