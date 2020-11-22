import React from "react";
import imagelogo from "./../../assets/Pokédex_logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="App_header">
      <img src={imagelogo} alt="logo" />
    </header>
  );
}

export default Header;
