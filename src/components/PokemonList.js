import React, {useEffect, useState} from "react";
import PokemonCard from "./PokemonCard";
import PropTypes from 'prop-types';
const postsPerPage=6;
let arrayForHoldingPosts = [];


const getPokemons = (pokemons) => {
    return(
        <div className="card-deck">
            {
                pokemons.map(pokemon => <PokemonCard key={pokemon.pokemon_id} pokemon={pokemon} />)
            }
        </div>
    )
};

const PokemonList = (props) => {
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(3);
    const posts = props.pokemons;

    const loopWithSlice = (start, end) => {
        const slicedPosts = posts.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };

    useEffect(() => {
        loopWithSlice(0, postsPerPage);
    }, []);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };
    return(
        <div className="pokemon-list">
            <div className="pokemon-container">
            {
                getPokemons(arrayForHoldingPosts)
            }
            </div>
            <div>
                <button onClick={handleShowMorePosts} className="load-btn" id="next-btn">↓</button>
            </div>
        </div>

    )
};

PokemonList.defaultProps={
    pokemon:[]
}

PokemonList.propTypes={
    pokemon:PropTypes.array
}

export default PokemonList;