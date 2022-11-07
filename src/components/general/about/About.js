/* Imported custom components */
import Discord from "./discord/Discord.js";
import Team from "./team/Team.js";
import Whitepaper from "./whitepaper/Whitepaper";
// Imported stylesheet
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <Discord />
      <Team />
      <Whitepaper />
    </div>
  );
};

export default About;
