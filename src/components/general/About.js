import Discord from './about/Discord.js';
import Team from './about/Team.js';
import Whitepaper from './about/Whitepaper';

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