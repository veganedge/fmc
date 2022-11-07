/* Imported stylesheet */
import classes from "./Whitepaper.module.css";

const Whitepaper = () => {
  return (
    <div className={classes.whitepaper}>
      <h2>Community</h2>
      <p>
        A supportive community comes first. We have created a space where
        thousands of members discuss their successes and failures, learn from
        those mistakes, and help the people around them to avoid similar
        pitfalls. Any trading is risky, but being part of this community is an
        overall positive influence not only for our members&apos; trading, but
        importantly a positive impact on their lives. In a vacuum, trading can
        be a lonely and sad life. We make it a priority to be a place to not
        only learn, but also connect genuinely and positively with one another.
      </p>
      <h2>Education</h2>
      <p>
        Education is also important in FMC. We want to enrich and develop
        newcomers to trading. Initially, we want to explain best practices to
        avoid being scammed. Then, clarify other fundamental tasks like setting
        up wallets and buying/selling NFTs. We also explain more complicated,
        yet crucial, subjects like how to research projects and decipher which
        are likely quick flips or would be suitable for long-term holds. To this
        end, we have published our first tier of NEWbie University, and as we
        continue to develop, we will be creating additional focused content for
        our more advanced and dedicated members.
      </p>
      <h2>Alpha</h2>
      <p>
        We want to give you as much of an edge over every other trader as we
        can. This comes from announcing projects very early in their pre-launch
        stage, and obtaining presale &#40;in FMC vernacular, Guest-list&#41;
        spots for our community. Before collaborating for Guest-lists
        &#40;GL&#41;, our research team delves into the projects and vets them
        thoroughly, trying to ensure our traders have a higher chance of
        success. Last but not least, Furu constantly scans the markets, minting
        projects to make his trademark volume calls - which have achieved an
        extremely high success rate.
      </p>
      <button className={classes.whitepaperBtn}>
        <a
          href="https://furusmintclub.gitbook.io/fmc-genesis-whitepaper/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Read the whitepaper
        </a>
      </button>
    </div>
  );
};

export default Whitepaper;
