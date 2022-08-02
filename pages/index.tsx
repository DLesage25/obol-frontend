import type { NextPage } from 'next';
import Layout from '../components/atoms/Layout';
import PokemonCard from '../components/molecules/PokemonCard';

const Home: NextPage = () => {
    return (
        <Layout>
            <PokemonCard
                imageSrc="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                title="Pickachu"
                detail="This poken can chu and cha and turn it all around lorem ipsum lorem dolor."
                link="https://go.com"
            />
        </Layout>
    );
};

export default Home;
