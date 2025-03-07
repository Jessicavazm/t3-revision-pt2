import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import PokemonFetcher from "./PokemonFetcher";

// React.Component or Component depending on how we import it
class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonFetcher/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
