import React, {Component} from "react";
import Header from './Header'
import Pokemons from "./Pokemons";

export default class PokemonApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Welcome to Pokemon World"
        };
    }

    render() {
        return(
            <div className="pokemon-web">
                <Header title={this.state.title}/>
                <Pokemons/>
            </div>
        )
    }
}