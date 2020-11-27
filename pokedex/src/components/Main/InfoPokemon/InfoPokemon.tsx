import React, { useEffect, useState } from "react";
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

  return pokemon ? (
    <div className="main_info_pokemon">
      <img
        src={`https://raw.githubusercontent.com/js-training-sep-2020/final-project/main/pokemons/${props.id}.png`}
        alt="Изображение покемона"
      />
      <div className="info_pokemon_text">
        <p>{`#${props.id}`}</p>
        <p>{`Имя: ${(pokemon as any).name}`}</p>
        {((pokemon as any).catched && (
          <p>{`Статус: пойман ${(pokemon as any).date}`}</p>
        )) || <p>{"Статус: не найден"}</p>}
      </div>
    </div>
  ) : (
    <span>loading</span>
  );
}

export default InfoPokemon;
