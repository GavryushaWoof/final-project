import React from "react";
import "./Main.scss";
import InfoPokemon from "./InfoPokemon/InfoPokemon";
import Pokedex from "./Pokedex/Pokedex";
import { Redirect, Switch, Route } from "react-router-dom";
import PokedexCaught from "./Pokedex/PokedexCaught";

function Main() {
  return (
    <main className="App_main">
      <Switch>
        <Redirect exact from="/" to="/pokemons" />
        <Route exact path="/pokemons" render={() => <Pokedex />} />
        <Route
          path="/pokemons/caught_pokemon"
          render={() => <PokedexCaught />}
        />
        <Route
          path="/pokemons/:id"
          render={(props) => {
            return <InfoPokemon id={+props.match.params.id} />;
          }}
        />
      </Switch>
    </main>
  );
}

export default Main;
