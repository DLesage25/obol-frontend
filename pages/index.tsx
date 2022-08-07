import type { NextPage } from 'next';

import Layout from '../components/molecules/Layout';
import PokemonProfiler from '../components/organisms/PokemonProfiler';

const Home: NextPage = () => {
    return (
        <Layout>
            <PokemonProfiler />
        </Layout>
    );
};

export default Home;
