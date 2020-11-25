import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IPokemon } from "../../../Interfaces/IPokemon";
import "./InfoPokemon.scss";
function InfoPokemon(props: { id: number }) {
  const [pokemon, setPokemon] = useState(null);
  const pokemonItem = async function (props: number) {
    const response = await fetch(`http://localhost:4200/pokemons/${props}`);
    setPokemon(await response.json());
  };
  useEffect(() => {
    pokemonItem(props.id);
  }, [true]);
  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return pokemon ? (
    <div className="main_info_pokemon">
      <img
        src={`https://raw.githubusercontent.com/js-training-sep-2020/final-project/main/pokemons/${props.id}.png`}
        alt="Изображение покемона"
      />
      <p>{`#${props.id}`}</p>
      <p>{`Имя: ${(pokemon as any).name}`}</p>
      {((pokemon as any).catched && (
        <p>{`Статус: пойман ${(pokemon as any).date}`}</p>
      )) || <p>{"Статус: не найден"}</p>}
    </div>
  ) : (
    <span>loading</span>
  );
}

export default InfoPokemon;
