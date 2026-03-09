import react from 'react';
import { Hero } from './Hero';
import { Solutions } from './Solutions';
import { WhyEcon } from './WhyEcon';
import { Applications } from './Applications';
import { Resources } from './Resources';
import RelatedResources from './RelatedResources';

const Home = () => {
    return (
        <div>
            <Hero />
            <Solutions />
            <WhyEcon />
            <Applications />
            <RelatedResources />
            <Resources />
        </div>
    );
};
export default Home;