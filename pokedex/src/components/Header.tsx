import React from "react";
import imagelogo from "./../Pokédex_logo.png";
import "./../scss/Header.scss";

function Header() {
  return (
    <header className="App_header">
      <img src={imagelogo} alt="logo" />
    </header>
  );
}

export default Header;
