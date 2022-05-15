import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="social">
                    <a href="https://discord.gg/furusmintclub" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>{'  '}
                    <a href="https://twitter.com/furusmintclub" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    {/* === add OpenSea icon and link here=== */}
                </div>
                <div className="copyright">
                    Copyright &copy; 2021. <span className="FMCtext"><b>Furu's Mint Club</b></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;