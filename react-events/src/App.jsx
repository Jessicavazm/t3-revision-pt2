import React, { Component } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

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
        {/* Array constructor is an alternative to for loops to render a list of elements */}
        {
          // Creates an array of given length
          Array(this.state.numberOfPokemon)
          // Fills the array with null values
          .fill(null)
          // On the empty array, map and place the component there.
          .map((element, index) => {
            return <PokemonCard key={index} />
          })
        }
      </>
    )
  }
}

// export default App;
