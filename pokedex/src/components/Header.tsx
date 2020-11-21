import React from "react";
import imagelogo from "./../Pokédex_logo.png";

function Header() {
  return (
    <header className="App-header">
      <img src={imagelogo} alt="logo" />
    </header>
  );
}

export default Header;
