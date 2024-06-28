import React from "react";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PokemonContext from "./PokemonContext";

const Pokedex = (props) => {
    const context = useContext(PokemonContext);
    const caughtPokemons = context.caughtPokemons;

    return (
        <div>
            {
                caughtPokemons.map((item) =>  (
                    <div className="d-inline-flex">
                        <table border={1} className='mg-20'>
                            <div className="pd-20" > 
                                <img style={{ width: '500px', height: '500px' }} alt={item.image} src={item.image}></img>
                                <div>{item.name}</div>
                                <span>Catch Rate: {item.catchRate} %</span><br />
                            </div>
                        </table>
                    </div>
                        
                    )
                )
            }
        </div>
    )
} 
export default Pokedex;