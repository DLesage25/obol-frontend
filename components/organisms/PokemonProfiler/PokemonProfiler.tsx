import { useQuery } from '@tanstack/react-query';

import useStore from '../../../state/store';
import { styled } from '../../../styles/theme';
import { PokemonId } from '../../../types/pokemon.type';
import partitionArray from '../../../utils/partitionArray';
import PokemonCard from '../../molecules/PokemonCard';

const OuterContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
});

const InnerContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '32px',
    padding: '0px, 80px',
});

const fetchPokemonProfile = async (url: string) => {
    const res = await fetch(url);
    return res.json();
};

const PokemonCardLoader = ({ pokemonId }: { pokemonId: PokemonId }) => {
    const { url, name } = pokemonId;

    const { data } = useQuery(['pokemonProfile', url], () =>
        fetchPokemonProfile(url)
    );

    const link = `https://bulbapedia.bulbagarden.net/wiki/${name}`;
    const imageSrc = `https://img.pokemondb.net/artwork/large/${name}.jpg`;
    return (
        <PokemonCard
            key={Math.random()}
            title={name}
            imageSrc={imageSrc}
            profile={data}
            link={link}
        />
    );
};

const ProfilerRow = ({ data }: { data: PokemonId[] }) => {
    return (
        <InnerContainer>
            {data.map((pokemonId) => {
                return (
                    <PokemonCardLoader
                        key={`pokemoncardloader-${pokemonId.name}`}
                        pokemonId={pokemonId}
                    />
                );
            })}
        </InnerContainer>
    );
};

export default function PokemonProfiler() {
    const { pokemonIds } = useStore();

    const sortedData = partitionArray(pokemonIds, 3);

    return (
        <OuterContainer>
            {sortedData &&
                sortedData.map((chunk: any) => {
                    return <ProfilerRow key={Math.random()} data={chunk} />;
                })}
        </OuterContainer>
    );
}
