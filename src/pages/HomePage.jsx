import React from 'react';
import { Hero, Stats, AboutMeNew, Projects, Experience, Footer } from '../components';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <AboutMeNew />
            <Projects />
            <Experience />
            <Footer />
        </div>
    );
};

export default HomePage;