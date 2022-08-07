import axios from 'axios';

export const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const pokeApi = axios.create({
    baseURL: POKEMON_API_URL,
});

export const fetchPokemon = async ({ pageParam = '?offset=0&limit=15' }) => {
    if (pageParam.startsWith(POKEMON_API_URL)) {
        pageParam = pageParam.replace(POKEMON_API_URL, '');
    }

    const request = await pokeApi.get(pageParam);
    const { results, next } = request.data;
    return { response: results, nextPage: next };
};

export default pokeApi;
