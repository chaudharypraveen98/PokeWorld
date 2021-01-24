import pokemon from './pokemon.json';

export default class PokemonServices{
    static getpokemons() {
        return pokemon ? pokemon : [];
    }
}