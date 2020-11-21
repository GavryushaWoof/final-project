import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

import "./scss/App.scss";

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
