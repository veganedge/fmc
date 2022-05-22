import React from 'react'
import FMC_logo from '../assets/navbar_logo_dropshadow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {

    const [active, setActive] = useState(false);
  
    const handleClick = () => { 
        const navmenu = document.getElementsByClassName('navlist')[0];
        navmenu.classList.toggle('active');
    }
    
    /* attempting to change the state so can show only dashboard if path is "/Dashboard" but believe this is actually changing state here - and need to pass that state to APP.JSX maybe? */
    const [loggedIn, setLoggedIn] = useState(false);


    return(
        <nav className='navbar'>
            <div className='navlogo'>
                <Link to="/">
                    <img src={FMC_logo} alt="FMC logo" height="60" width="60"></img>
                </Link>
            </div>
            <btn onClick={ () => { handleClick(); setActive(!active)} }>
                {active ? <FontAwesomeIcon className='close-icon fa-2x' icon={faTimes} /> : <FontAwesomeIcon className='hamburger-icon fa-2x' icon={faBars} />} 
            </btn>
            <div className='navlist'>
                <ul>
                    <li><Link to="/About" className='navlink'>About</Link></li>
                    {/* use Team, Discord, and Whitepaper components in ABOUT */}
                    <li><Link to="/Newbie" className='navlink'>NEWbie University</Link></li>
                    <li><Link to="/Dashboard" className='navlink' onClick={ () => {setLoggedIn(!loggedIn)} }>Member Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;