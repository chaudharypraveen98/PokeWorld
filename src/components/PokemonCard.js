import React from "react";
import PropTypes from 'prop-types';
import '../styles/card.scss'

const PokemonCard = (props) => (
    <div className={ `pokemon-card ${props.pokemon.pokemon_tags[0]}` }>
        <img src={props.pokemon.pokemon_image_url} alt={props.pokemon.pokemon_name} />
        <div className="pokemon-card-body">
            <h4>{props.pokemon.pokemon_id}</h4>
            <h5 className="pokemon-card-title">{props.pokemon.pokemon_name}</h5>
            <p>{props.pokemon.pokemon_tags}</p>
            <a href={props.pokemon.pokemon_url} className="pokemon-card-btn">url</a>
        </div>
    </div>
);

PokemonCard.prototype = {
    pokemon:PropTypes.object
};

PokemonCard.defaultProps={
    pokemon:{}
};

export default PokemonCard;