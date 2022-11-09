// Imported stylesheet
import classes from "./Team.module.css";
// Imported components
import TeamCard from "./teamcard/TeamCard";
import Footer from "../footer/Footer";

const Team = () => {
  return (
    <>
      <div className={classes.teamContainer}>
        <div className={classes.teamContent}>
          <h2>TEAM</h2>
          <div className={classes.teamGridContainer}>
            <TeamCard
              title="Club Owner"
              imageSrc="https://www.scottxbrown.com/staff_logos/furu.png"
              imageAlt="Club Owner: Furu"
              discordUsername="FMC FURU"
              twitterUsername="@FMC_FURU"
            />
            <TeamCard
              title="Club Owner"
              imageSrc="https://www.scottxbrown.com/staff_logos/vegan.png"
              imageAlt="Club Owner: XveganXedgeX"
              discordUsername="FMC XveganXedgeX"
              twitterUsername="@XveganXedgeX"
            />
            <TeamCard
              title="Club Manager"
              imageSrc="https://www.scottxbrown.com/staff_logos/duststorm.png"
              imageAlt="Club Manager: DustStorm"
              discordUsername="FMC DustStorm"
              twitterUsername="@The_Duststorm"
            />
            <TeamCard
              title="Club Manager"
              imageSrc="https://www.scottxbrown.com/staff_logos/ollie.png"
              imageAlt="Club Manager: OllieJames"
              discordUsername="FMC OllieJames"
              twitterUsername="@NFT_Talks"
            />
            <TeamCard
              title="Club Manager"
              imageSrc="https://www.scottxbrown.com/staff_logos/lowrider.png"
              imageAlt="Club Manager: Lowrider"
              discordUsername="FMC Lowrider"
              twitterUsername="@lowriderrr7"
            />
            <TeamCard
              title="Club Manager"
              imageSrc="https://www.scottxbrown.com/staff_logos/tj.png"
              imageAlt="Club Manager: TJ"
              discordUsername="FMC TJ"
              twitterUsername="@TJ_FMC"
            />
            <TeamCard
              title="Club Manager"
              imageSrc="https://www.scottxbrown.com/staff_logos/cerqua.png"
              imageAlt="Club Manager: Cerqua"
              discordUsername="cerqua"
              twitterUsername="@cerqua"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
