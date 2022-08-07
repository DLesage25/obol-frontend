import produce from 'immer';
import create from 'zustand';
import { Pokemon, PokemonId } from '../types/pokemon.type';

interface InitialState {
    pokemonIds: Array<PokemonId>;
    setPokemonIds: (pokemonIds: Array<PokemonId>) => void;
    pokemons: Array<Pokemon>;
    setPokemons: (pokemon: Pokemon) => void;
}

const useStore = create<InitialState>()((set) => ({
    pokemonIds: [],
    setPokemonIds: (data) => set(() => ({ pokemonIds: data })),
    pokemons: [],
    setPokemons: (data) =>
        set(
            produce((state: InitialState) => {
                state.pokemons.push(data);
            })
        ),
}));

export default useStore;
