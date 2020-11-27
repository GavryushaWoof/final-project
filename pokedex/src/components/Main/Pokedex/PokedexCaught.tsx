import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Pokedex.scss";
import Pokemon from "./Pokemon/Pokemon";
import { caughtPokemons } from "../../../redux/actions";
import { IPokemon } from "../../../Interfaces/IPokemon";
import { RootState } from "../../../redux/rootReducer";

function PokedexCaught() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(caughtPokemons());
  }, [true]);

  const caughtList: IPokemon[] = useSelector(
    (state: RootState) => state.pokedex.caughtPokemons
  );

  return caughtList.length ? (
    <div className="main_pokedex">
      {caughtList.map((caughtPokemon: IPokemon) => (
        <Pokemon pokemon={caughtPokemon} key={caughtPokemon.id} />
      ))}
    </div>
  ) : (
    <span>Sorry you haven't caught Pokemons yet</span>
  );
}
export default PokedexCaught;
