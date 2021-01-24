import React, { Component } from "react";
import PokemonServices from "../services/PokemonServices";
import PokemonList from "./PokemonList";

export default class Pokemons extends Component{
    constructor(props) {
        super(props);
        this.state={
            pokemons:[]
        };
    }

    componentDidMount() {
        this.setState(()=> ({pokemons:PokemonServices.getpokemons() }))
    }

    render() {
        return(
            <PokemonList pokemons={this.state.pokemons} />
        )
    }
}