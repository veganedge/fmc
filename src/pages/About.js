import React from 'react';
import Discord from '../components/Discord';
import Team from '../components/Team';
import Whitepaper from '../components/Whitepaper';

const About = () => {
    return (
        <div id='about'>
            <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>Content: About</h1>
            <Discord />
            <Team />
            <Whitepaper />
        </div>
        
    );
}

export default About;