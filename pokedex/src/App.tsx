import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
