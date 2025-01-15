import { Component } from "react";
import PokemonCard from "./PokemonCard";
import { Button } from "react-bootstrap";

// const pokemonList = ['pikachu', 'ditto', 'mew', 'charmander'];

export default class PokemonFetcher extends Component {
    // Create constructor() to initialise the class's properties && state
    constructor(props) {
        // Pass props to super() for proper initialisation 
        super(props);

        // Use 'this.' since you are working with class components
        this.state = {
            pokemonList: ['pikachu', 'ditto', 'mew', 'charmander']
        }
    }

    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {
                    this.state.pokemonList.map(pokemon => {
                        return <PokemonCard name={pokemon} />
                    })
                }
                <button onClick={() => {
                    this.setState({pokemonList:[]})
                }}>Empty the State</button>
            </div>
        )
    }
}

