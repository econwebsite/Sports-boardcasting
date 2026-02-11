import react from 'react';
import { Hero } from './Hero';
import { Solutions } from './Solutions';
import { WhyEcon } from './WhyEcon';
import { Applications } from './Applications';
import { Resources } from './Resources';

const Home = () => {
    return (
        <div>
            <Hero />
            <Solutions />
            <WhyEcon />
            <Applications />
            <Resources />
        </div>
    );
};
export default Home;