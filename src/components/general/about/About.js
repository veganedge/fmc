// Imported components
import Footer from "../footer/Footer.js";
// Imported assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
// Imported stylesheet
import classes from "./About.module.css";
import aboutImageSrc from "../../../assets/FMC_about.png";

const About = () => {
  return (
    <>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutContent}>
          <h2>ABOUT</h2>
          <p>
            Free Mint Club is a discord server promoting a positive and
            cooperative approach to NFT education and alpha for traders.
          </p>
          <p>
            Truly ran as a club, we "hire" from within, and all members are
            constantly looking for opportunities to bring to the other members
            of the club.
          </p>
          <p className={classes.marginBottom25}>
            We have a Promoter Program that reach out to soon-to-launch projects
            and secure WL spots to raffle off amongst our community.
          </p>
          <button className={classes.discordButton}>
            <a
              href="https://www.discord.gg/furusmintclub"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faDiscord} />
              <div>
                <p>Join the discord</p>
              </div>
            </a>
          </button>
        </div>
        <div className={classes.aboutImageContainer}>
          <img
            className={classes.aboutImage}
            src={aboutImageSrc}
            alt="About FMC"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
