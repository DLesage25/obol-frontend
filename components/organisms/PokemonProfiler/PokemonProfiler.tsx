import { styled } from '../../../styles/theme';
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

const PokemonData = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
    imageSrc: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
    title: 'Pickachu',
    detail: 'This poken can chu and cha and turn it all around lorem ipsum lorem dolor.',
    link: 'https://go.com',
}));

const ProfilerRow = ({ data }: any) => {
    return (
        <InnerContainer>
            {data.map((pokemonDetails: any) => (
                <PokemonCard
                    key={Math.random()}
                    title={pokemonDetails.title}
                    imageSrc={pokemonDetails.imageSrc}
                    detail={pokemonDetails.detail}
                    link={pokemonDetails.link}
                />
            ))}
        </InnerContainer>
    );
};

export default function PokemonProfiler() {
    const sortedData = partitionArray(PokemonData, 3);

    return (
        <OuterContainer>
            {sortedData &&
                sortedData.map((chunk: any) => {
                    return <ProfilerRow key={Math.random()} data={chunk} />;
                })}
        </OuterContainer>
    );
}
