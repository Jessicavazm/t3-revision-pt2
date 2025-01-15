import { Component } from "react";

const pokemonList = ['pikachu', 'ditto', 'mew', 'charmander'];

export default class PokemonFetcher extends Component {
    // Create constructor() to initialise the class's properties && state
    constructor(props) {
        // Pass props to super() for proper initialisation 
        super(props);

        // Use 'this.' since you are working with class components
        this.state = {
            pokemonList: []
        }
    }

    render(){
        return (
            <h1>Pokemon Data</h1>
        )
    }
}

