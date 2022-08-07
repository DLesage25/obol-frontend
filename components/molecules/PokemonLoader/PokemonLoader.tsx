import { useQuery } from '@tanstack/react-query';
import { PokemonId } from '../../../types/pokemon.type';
import PokemonCard from '../PokemonCard';

const fetchPokemonProfile = async (url: string) => {
    const res = await fetch(url);
    return res.json();
};

export default function PokemonLoader({ pokemonId }: { pokemonId: PokemonId }) {
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
}
