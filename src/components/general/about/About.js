/* Imported custom components */
import Discord from "./discord/Discord.js";
import Team from "./team/Team.js";
import Whitepaper from "./whitepaper/Whitepaper";
import Footer from "../footer/Footer.js";
// Imported stylesheet
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div class={classes.aboutContainer}>
        <div class={classes.aboutContent}>
          <Discord />
          <Team />
          <Whitepaper />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
