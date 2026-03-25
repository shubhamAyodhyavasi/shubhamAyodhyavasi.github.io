import React from 'react';
import { Hero, Stats, AboutMeNew, Skills, Projects, Experience, Footer } from '../components';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <AboutMeNew />
            <Skills />
            <Projects />
            <Experience />
            <Footer />
        </div>
    );
};

export default HomePage;