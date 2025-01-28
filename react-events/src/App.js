import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    // state is a object: store it in key-value pairs
    this.state = {
      numberOfPokemon: 6
    }
  }

  exampleFunction1() {
    console.log('First event clicked');
  }

  exampleFunction2() {
    console.log('Second event clicked');
  }

  // Create an anonymous function and store it in a variable to call it on the event
  decreasePokemonNumber = () => {
    if (this.state.numberOfPokemon > 0) {
      this.setState({ numberOfPokemon: this.state.numberOfPokemon - 1 });
    }
  }

  increasePokemonNumber = () => {
    this.setState({ numberOfPokemon: this.state.numberOfPokemon + 1 });
  }

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <p>My Pokemon Team</p>
        <h5>Number of Pokemon: {this.state.numberOfPokemon} </h5>
        <button onClick={this.decreasePokemonNumber}>Decrease Pokemon Amount</button>
        <button onClick={() => {
          this.exampleFunction1();
          this.exampleFunction2();
          this.increasePokemonNumber();
        }}>Increase Pokemon Amount</button>
      </>
    )
  }
}

// export default App;
