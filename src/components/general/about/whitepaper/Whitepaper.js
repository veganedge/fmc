/* Imported stylesheet */
import classes from './Whitepaper.module.css';

const Whitepaper = () => {
    return(
        <div className={classes.whitepaper}>
            <h1>Content: Whitepaper</h1>
            <p>Basics of whitepaper along with link to it</p>
            <button className={classes.whitepaperBtn}>
                <a href="https://furusmintclub.gitbook.io/fmc-genesis-whitepaper/" target="_blank" rel="noreferrer noopener">Read the whitepaper</a>
            </button>
        </div>
    );
}

export default Whitepaper;