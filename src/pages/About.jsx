import React from 'react';
import Discord from '../components/Discord.js';
import Team from '../components/Team.js';
import Whitepaper from '../components/Whitepaper.js';

const About = () => {
    return (
        <div id='about'>
            <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>Showing: About</h1>
            <p style={{textAlign: 'center', marginBottom: 100}}>Ideas for components to populate content:</p>
            <Discord />
            <Team />
            <Whitepaper />
        </div>
        
    );
}

export default About;