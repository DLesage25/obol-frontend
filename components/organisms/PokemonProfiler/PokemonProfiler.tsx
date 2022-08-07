import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import isBottom from '../../../hooks/isBottom';

import useStore from '../../../state/store';
import { PokemonId } from '../../../types/pokemon.type';
import debounce from '../../../utils/debounce';
import partitionArray from '../../../utils/partitionArray';
import { fetchPokemon } from '../../../utils/pokeApiHttp';
import Loader from '../../atoms/Loader/Loader';
import {
    InnerContainer,
    OuterContainer,
} from '../../atoms/PokemonProfiler/Containers';
import PokemonLoader from '../../molecules/PokemonLoader/PokemonLoader';

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
    const { pokemonIds, setPokemonIds } = useStore();
    const sortedData = partitionArray(pokemonIds, 3);
    const observer = useRef<HTMLDivElement>(null);

    const { data, isLoading, fetchNextPage, isFetchingNextPage } =
        useInfiniteQuery(['pokemon'], fetchPokemon, {
            getNextPageParam: (lastPage) => lastPage.nextPage,
        });

    useEffect(() => {
        if (!data) return;

        const pokeIds = data?.pages
            .map((group, i) =>
                group.response.map((pokemonIds: PokemonId[]) => pokemonIds)
            )
            .flat();
        setPokemonIds(pokeIds);
    }, [data, setPokemonIds]);

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
