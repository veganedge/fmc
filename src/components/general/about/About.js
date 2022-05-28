/* Imported custom components */
import Discord from './discord/Discord.js';
import Team from './team/Team.js';
import Whitepaper from './whitepaper/Whitepaper';
// Imported stylesheet
import classes from './About.module.css';

const About = () => {
    return (
        <div>
            <h1 className={`${classes.aboutCenter} ${classes.aboutUnderline}`}>Showing: About</h1>
            <p className={`${classes.aboutCenter} ${classes.aboutMarginBottom100}`}>Ideas for components to populate content:</p>
            <Discord />
            <Team />
            <Whitepaper />
        </div>
        
    );
}

export default About;