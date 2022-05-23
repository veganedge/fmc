import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShip } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return(
        <footer className="footer-container">
                <div className="social">
                    <a href="https://discord.gg/furusmintclub" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faDiscord} /></a>{'  '}
                    <a href="https://twitter.com/furusmintclub" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} /></a>{'  '}
                    {/* Need to change this to actual OPENSEA logo */}
                    <a href="https://opensea.io/collection/furusmintclub" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faShip} /></a>
                </div>
                <div className="copyright">
                    Copyright &copy; 2021. <span className="FMCtext"><b>Furu's Mint Club</b></span>
                </div>
        </footer>
    );
}

export default Footer;