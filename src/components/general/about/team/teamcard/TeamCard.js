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
      <div className={classes.titleContainer}>
        <h3>{title}</h3>
      </div>
      <div className={classes.infoContainer}>
        <img src={imageSrc} alt={imageAlt}></img>
        <h5>
          Discord: <span>{discordUsername}</span>
        </h5>
        <h5>
          Twitter: <span>{twitterUsername}</span>
        </h5>
      </div>
    </div>
  );
};

export default TeamCard;
