import React from "react";
import { Link } from "react-router-dom";
import { IPokemon } from "../../../../Interfaces/IPokemon";
import "./Pokemon.scss";

interface PokemonItem {
  pokemon: IPokemon;
  catch?: (pokemon: IPokemon) => void;
}

function Pokemon(props: PokemonItem) {
  return (
    <div className="pokedex_pokemon">
      <img
        src={`https://raw.githubusercontent.com/js-training-sep-2020/final-project/main/pokemons/${props.pokemon.id}.png`}
        alt="Изображение покемона"
      />
      <p>{`Имя: ${props.pokemon.name}`}</p>
      <Link to={`/pokemons/${props.pokemon.id}`}>
        <button>Информация</button>
      </Link>
      <button
        onClick={() => props.catch && props.catch(props.pokemon)}
        disabled={props.pokemon.catched}
      >
        Поймать
      </button>
    </div>
  );
}

export default Pokemon;
