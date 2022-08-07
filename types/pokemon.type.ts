export interface PokemonId {
    name: string;
    url: string;
    loaded?: boolean;
}

export interface Pokemon {
    id: string;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: {
        name: string;
    }[];
}
