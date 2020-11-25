import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="App_nav">
      <ul>
        <li>
          <Link to="/" className="nav_link">
            Pokédex
          </Link>
        </li>
        <li>
          <Link to="/pokemons/caught_pokemon" className="nav_link">
            Caught Pokémon
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
