/* Imported custom components */
import Discord from './discord/Discord.js';
import Team from './team/Team.js';
import Whitepaper from './whitepaper/Whitepaper';

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