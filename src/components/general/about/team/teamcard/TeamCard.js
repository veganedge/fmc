/* Imported stylesheet */
import classes from "./TeamCard.module.css";

const TeamCard = ({
  title,
  imageSrc,
  imageAlt,
  discordUsername,
  twitterUsername,
}) => {
  return (
    <div className={classes.teamCardContainer}>
      <div className={classes.aboveImageContainer}>
        <h3>{title}</h3>
      </div>
      <img src={imageSrc} alt={imageAlt}></img>
      <h5>Discord: {discordUsername}</h5>
      <h5>Twitter: {twitterUsername}</h5>
    </div>
  );
};

export default TeamCard;
