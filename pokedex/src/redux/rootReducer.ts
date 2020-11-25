import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducer";

export const rootReducer = combineReducers({
  pokedex: pokemonReducer,
});
