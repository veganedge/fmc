import React from 'react'
import FMC_logo from '../assets/navbar_logo_dropshadow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const handleClick = () => { 
    const navmenu = document.getElementsByClassName('navlist')[0]; 
    navmenu.classList.toggle('active');
}


const Navbar = () => {

    const navmenu = document.getElementsByClassName('navlist')[0];
  
    return(
        <div>
            <nav className='navbar'>
                <div className='navlogo'>
                    <Link to="/">
                        <img src={FMC_logo} alt="FMC logo" height="60" width="60"></img>
                    </Link>
                </div>
                {/* USE STATE INSTEAD OF THIS? - NEED TO CHANGE ICON TO X WHEN ACTIVE */}
                {/* X ICON IS LOADED AND STYLED IN CORRECT LOCATION - but active class only checked on page load, not with each onClick */}
                <btn onClick={handleClick}>
                    {navmenu.classList.active ? <FontAwesomeIcon className='close-icon fa-2x' icon={faTimes} /> : <FontAwesomeIcon className='hamburger-icon fa-2x' icon={faBars} />}
                </btn>
                <div className='navlist'>
                    <ul>
                        <li><Link to="/about" className='navlink'>About</Link></li>
                        {/* use Team, Discord, and Whitepaper components in ABOUT */}
                        <li><Link to="/dashboard" className='navlink'>Member Dashboard</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;