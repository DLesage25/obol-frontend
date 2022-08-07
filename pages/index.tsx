import type { NextPage } from 'next';
import { useEffect } from 'react';

import { PokemonId } from '../types/pokemon.type';
import Layout from '../components/molecules/Layout';
import PokemonProfiler from '../components/organisms/PokemonProfiler';
import useStore from '../state/store';
import pokeApi from '../utils/pokeApiHttp';

interface HomePageProps {
    pokeIds: PokemonId[];
}

const Home: NextPage<HomePageProps> = ({ pokeIds }: HomePageProps) => {
    const { pokemonIds, setPokemonIds } = useStore();

    useEffect(() => {
        setPokemonIds(pokeIds);
    }, [pokeIds, setPokemonIds]);

    return <Layout>{pokemonIds.length && <PokemonProfiler />}</Layout>;
};

export async function getStaticProps() {
    const { data } = await pokeApi.get('/', {
        params: {
            limit: 15,
        },
    });

    return {
        props: {
            pokeIds: data.results,
        },
    };
}

export default Home;
