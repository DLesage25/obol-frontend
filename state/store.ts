import create from 'zustand';
import { PokemonId } from '../types/pokemon.type';

interface InitialState {
    pokemonIds: Array<PokemonId>;
    setPokemonIds: (pokemonIds: Array<PokemonId>) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const useStore = create<InitialState>()((set) => ({
    pokemonIds: [],
    setPokemonIds: (data) => set(() => ({ pokemonIds: data })),
    searchQuery: '',
    setSearchQuery: (query) => set(() => ({ searchQuery: query })),
}));

export default useStore;
