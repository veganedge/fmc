import React from 'react';
import Discord from './Discord';
import Team from './Team';
import Whitepaper from './Whitepaper';

const About = () => {
    return (
        <div id='about'>
            <h1 style={{textAlign: 'center'}}>Content: About</h1>
            <Discord />
            <Team />
            <Whitepaper />
        </div>
        
    );
}

export default About;