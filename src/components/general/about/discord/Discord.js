/* Imported assets */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
/* Imported stylesheet */
import classes from './Discord.module.css'

const Discord = () => {
    return(
        <div id='discord'>
            <h1 style={{textAlign: 'center'}}>Content: Discord</h1>
            <p style={{textAlign: 'center', marginBottom: 25}}>Basic info about the discord server - what can be found, how to access, etc.</p>
            <p style={{textAlign: 'center'}}>Furu's Mint Club is a discord server promoting a positive and cooperative approach to NFT education and alpha for traders.</p>
            <p style={{textAlign: 'center'}}>Truly ran as a club, we "hire" from within, and all members of FMC are constantly looking for opportunities to bring to the other members of the club.</p>
            <p style={{textAlign: 'center', marginBottom: 25}}>We have a Promoter Program that reach out to soon-to-launch projects and secure WL spots to raffle off amongst our community.</p>
            <button className={classes.discordButton}>
                <a href="https://www.discord.gg/furusmintclub" target="_blank" rel="noreferrer noopener" className={classes.discordButtonLink}>
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
                <div className={classes.discordButtonText}>
                    <p>Join the discord</p>
                </div>
            </button>
        </div>
    );
}

export default Discord;