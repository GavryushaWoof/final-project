import { Dispatch } from "redux";
import { IPokemon } from "../Interfaces/IPokemon";
import { TypesAction } from "./../Enums/Enums";
import { PokemonsStore } from "./pokemonReducer";
export function fetchPokemons(props: number) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `http://localhost:4200/pokemons?_page=${props}`
    );
    const json: PokemonsStore = await response.json();
    dispatch({ type: TypesAction.FETCH_POKEMONS, payload: json });
  };
}
export function caughtPokemons() {
  return async (dispatch: Dispatch) => {
    const response = await fetch("http://localhost:4200/pokemons?catched=true");
    const json: PokemonsStore = await response.json();
    dispatch({ type: TypesAction.CAUGHT_POKEMONS, payload: json });
  };
}

export function catchPokemon(pokemon: IPokemon) {
  pokemon.catched = true;
  pokemon.date = new Date().toLocaleDateString();
  alert("Gotcha!");
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `http://localhost:4200/pokemons/${pokemon.id}`,
      {
        method: "PUT",
        body: JSON.stringify(pokemon),
        headers: { "Content-type": "application/json" },
      }
    );
    const json: PokemonsStore = await response.json();
    dispatch({ type: TypesAction.PUT_POKEMON, payload: json });
  };
}
