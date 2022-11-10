// Imported stylesheet
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
      <div className={classes.titleContainer}>
        <h3>{title}</h3>
      </div>
      <div className={classes.infoContainer}>
        <img src={imageSrc} alt={imageAlt}></img>
        <h4>
          Discord: <span>{discordUsername}</span>
        </h4>
        <h4>
          Twitter: <span>{twitterUsername}</span>
        </h4>
      </div>
    </div>
  );
};

export default TeamCard;
