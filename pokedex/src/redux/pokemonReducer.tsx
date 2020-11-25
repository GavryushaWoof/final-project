import { IPokemon } from "../Interfaces/IPokemon";
import { TypesAction } from "./../Enums/Enums";

interface TypeAction {
  type: TypesAction.FETCH_POKEMONS | TypesAction.CAUGHT_POKEMONS;
  payload: IPokemon[];
}
interface TypeActionItem {
  type: TypesAction.PUT_POKEMON;
  payload: IPokemon;
}

export interface PokemonsStore {
  pokemons: IPokemon[];
  caughtPokemons: IPokemon[];
}

const initialState: PokemonsStore = {
  pokemons: [],
  caughtPokemons: [],
};

export const pokemonReducer = (
  state = initialState,
  action: TypeAction | TypeActionItem
): PokemonsStore => {
  switch (action.type) {
    case TypesAction.FETCH_POKEMONS:
      return { ...state, pokemons: state.pokemons.concat(action.payload) };

    case TypesAction.CAUGHT_POKEMONS:
      return {
        ...state,
        caughtPokemons: action.payload,
      };

    case TypesAction.PUT_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.map((e) => {
          if (e.id === action.payload.id) {
            return action.payload;
          }
          return e;
        }),
      };

    default:
      return state;
  }
};
