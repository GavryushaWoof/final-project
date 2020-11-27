import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Pokedex.scss";
import Pokemon from "./Pokemon/Pokemon";
import { catchPokemon, fetchPokemons } from "../../../redux/actions";
import { IPokemon } from "../../../Interfaces/IPokemon";
import { RootState } from "../../../redux/rootReducer";

function Pokedex() {
  const pokemons: IPokemon[] = useSelector(
    (state: RootState) => state.pokedex.pokemons
  );
  const [count, setCount] = useState(
    pokemons.length ? pokemons.length / 10 : 1
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (pokemons.length / 10 !== count) {
      dispatch(fetchPokemons(count));
    }
  }, [count]);

  const caughtPokemonHandle = useCallback(
    (pokemon: IPokemon) => {
      dispatch(catchPokemon(pokemon));
    },
    [dispatch]
  );
  return pokemons.length ? (
    <div className="main_pokedex">
      {pokemons.map((pokemon: IPokemon) => (
        <Pokemon
          pokemon={pokemon}
          key={pokemon.id}
          catch={caughtPokemonHandle}
        />
      ))}

      <button className="pokedex_button" onClick={() => setCount(count + 1)}>
        Больше покемонов
      </button>
    </div>
  ) : (
    <span>loading</span>
  );
}

export default Pokedex;
