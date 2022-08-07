import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import isBottom from '../../../hooks/isBottom';
import useStore from '../../../state/store';
import { PokemonId } from '../../../types/pokemon.type';
import debounce from '../../../utils/debounce';
import partitionArray from '../../../utils/partitionArray';
import { fetchPokemon } from '../../../utils/pokeApiHttp';
import Loader from '../../atoms/Loader/Loader';
import PokemonLoader from '../../molecules/PokemonLoader/PokemonLoader';
import {
    InnerContainer,
    OuterContainer,
} from '../../atoms/PokemonProfiler/Containers';

const ProfilerRow = ({ data }: { data: PokemonId[] }) => {
    return (
        <InnerContainer>
            {data.map((pokemonId) => {
                return (
                    <PokemonLoader
                        key={`pokemoncardloader-${pokemonId.name}`}
                        pokemonId={pokemonId}
                    />
                );
            })}
        </InnerContainer>
    );
};

export default function PokemonProfiler() {
    const { pokemonIds, setPokemonIds, searchQuery } = useStore();
    const [sortedData, setSortedData] = useState<Array<PokemonId[]> | null>(
        null
    );
    const observer = useRef<HTMLDivElement>(null);

    const { data, isLoading, fetchNextPage, isFetchingNextPage } =
        useInfiniteQuery(['pokemon'], fetchPokemon, {
            getNextPageParam: (lastPage) => lastPage.nextPage,
        });

    useEffect(() => {
        setSortedData(partitionArray(pokemonIds, 3));
    }, [pokemonIds]);

    useEffect(() => {
        if (!data) return;

        let pokeIds: PokemonId[] = data?.pages
            .map((group, i) =>
                group.response.map((pokemonIds: PokemonId[]) => pokemonIds)
            )
            .flat();

        if (searchQuery !== '') {
            pokeIds = pokeIds.filter((poke) => poke.name.includes(searchQuery));
        }

        setPokemonIds(pokeIds);
    }, [data, setPokemonIds, searchQuery]);

    useEffect(() => {
        let debouncedFetch = debounce(fetchNextPage, 50);

        const onScroll = () => {
            if (!isLoading && isBottom(observer)) {
                debouncedFetch();
            }
        };
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [isLoading, fetchNextPage]);

    return (
        <OuterContainer ref={observer}>
            {sortedData &&
                sortedData.map((chunk: any) => {
                    return <ProfilerRow key={Math.random()} data={chunk} />;
                })}
            {isFetchingNextPage && <Loader />}
        </OuterContainer>
    );
}
