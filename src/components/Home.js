import React from 'react';
import BGimageDesktop from '../assets/Desktop_BG.png'

const divStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${BGimageDesktop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundColor: '#6dcca2',
}    


const Home = () => {
    return(
        <div className='home' style={divStyle}>
            
        </div> 
    );
}

export default Home;


// === HOME ===

// -- Navbar --
// setup hamburger menu:
// have divs appear when clicked?

// -- Darkmode --
// Images in navbar after links
// setup css classes for each element want changed
// setup query to change classes?

// -- Background Image (Media queries) --
// Mobile 480px wide
// Tablet 768px wide by 1024px height


// === APP ===

// -- Need to put in ReactRouter and routes for content loading --
// Install ReactRouter
// set up routes and switch and links 


// === TEAM ===

// -- Grid Layout --
// Card:
// team graphics that TJ made
// and short description of role

// media queries to make responsive layout for mobile, tablet, and desktop


// === PUBLIC FOLDER ===

// -- Need to put in favicon --
// ask TJ for it


// === CONTACT ===
// gmail?  Necessary at all?


