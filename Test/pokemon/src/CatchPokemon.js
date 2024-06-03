import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";
import Button from "react";

const CatchPokemon = ({id,image,catchRate,name}) => {
    const context = useContext(PokemonContext);
    const handleCatch = () => {
        alert("Tung bóng");
        const index = Math.floor(Math.random() * 100);
        if (index <= catchRate) {
            alert("Bắt thành công " + name);
            context.setCaughtPokemons([
                ...context.caughtPokemons,
                { id: id, name: name, image: image, catchRate: catchRate }
            ])
            context.setPokeballs(context.pokeballs - 1);
            return true;
        }
        else {
            alert("Bắt thất bại " + name);
            context.setPokeballs(context.pokeballs - 1);
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