import BGimageDesktop from '../assets/Desktop_BG.png';
/*import BGimageTablet from '../assets/Tablet_BG.svg';
import BGimageMobile from '../assets/Mobile_BG.svg';*/

const divStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${BGimageDesktop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundColor: '#6dcca2',
}    



const Splash = () => {
    return(
        <div className='splash' style={divStyle}></div>
    );
}

export default Splash;


// === HOME ===

// -- Background Image (Media queries) --
// Mobile 480px wide
// Tablet 768px wide by 1024px height

// -- Size --
// size properly so can't scroll vertically


// === NAVBAR ===

// -- Darkmode --
// Images in navbar after links
// setup css classes for each element want changed
// setup query to change classes?


// === APP ===




// === TEAM ===

// -- Grid Layout --
// Card:
// team graphics that TJ made
// and short description of role
// media queries to make responsive layout for mobile, tablet, and desktop


// === ABOUT ===

// -- Layout --
// show Discord, Team, and Whitepaper


// === DASHBOARD ===

// -- Layout --
// Maybe small left icon menu (could expand out to text onclick)
//  1. Tracker of WLs/Giveaways/whatever else from FMC discord - using Discord API
//  2. Data on the plays made in FMC - using Etherscan API
//  3. WL Marketplace
//  4. Mint calendar


// === PUBLIC FOLDER ===

// -- Need to put in favicon --
// ask TJ for it
