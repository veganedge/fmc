// Imported stylesheet
import classes from "./Team.module.css";
import TeamCard from "./teamcard/TeamCard";

const Team = () => {
  return (
    <div className={classes.team}>
      <h2>TEAM</h2>
      <div className={classes.teamGridContainer}>
        <TeamCard
          title="Club Owner"
          imageSrc="/Users/scottxbrown/Code/fmc/src/assets/staff_logos/furu.png"
          imageAlt="Club Owner: Furu"
          discordUsername="FMC FURU"
          twitterUsername="@FMC_FURU"
        />
        <TeamCard
          title="Club Owner"
          imageSrc="../../../../../assets/staff_logos/vegan.png"
          imageAlt="Club Owner: XveganXedgeX"
          discordUsername="FMC XveganXedgeX"
          twitterUsername="@XveganXedgeX"
        />
        <TeamCard
          title="Club Manager"
          imageSrc="../../../../assets/staff_logos/duststorm.png"
          imageAlt="Club Manager: DustStorm"
          discordUsername="FMC DustStorm"
          twitterUsername="@The_Duststorm"
        />
        <TeamCard
          title="Club Manager"
          imageSrc="../../../assets/staff_logos/ollie.png"
          imageAlt="Club Manager: OllieJames"
          discordUsername="FMC OllieJames"
          twitterUsername="@NFT_Talks"
        />
        <TeamCard
          title="Club Manager"
          imageSrc="src/assets/staff_logos/lowrider.png"
          imageAlt="Club Manager: Lowrider"
          discordUsername="FMC Lowrider"
          twitterUsername="@lowriderrr7"
        />
        <TeamCard
          title="Club Manager"
          imageSrc="src/assets/staff_logos/tj.png"
          imageAlt="Club Manager: TJ"
          discordUsername="FMC TJ"
          twitterUsername="@TJ_FMC"
        />
        <TeamCard
          title="Club Manager"
          imageSrc="src/assets/staff_logos/cerqua.png"
          imageAlt="Club Manager: Cerqua"
          discordUsername="cerqua"
          twitterUsername="@cerqua"
        />
      </div>
    </div>
  );
};

export default Team;
