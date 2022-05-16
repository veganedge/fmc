import React from 'react';
import FMC_logo from '../assets/navbar_logo_dropshadow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const handleClick = () => {
    const navmenu = document.getElementsByClassName('navlist')[0];
    navmenu.classList.toggle('active');
}


const Navbar = () => {
    return(
        <div>
            <nav className='navbar'>
                <div className='navlogo'>
                    <img src={FMC_logo} alt="FMC logo" height="60" width="60"></img>
                </div>
                {/* USE STATE INSTEAD OF THIS? - NEED TO CHANGE ICON TO X WHEN ACTIVE */}
                <btn className='hamburger-menu fa-2x' onClick={handleClick}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></btn>
                <div className='navlist'>
                    <ul>
                        <li><a href="#about" className='navlink'>About</a></li>
                        <li><a href="#discord" className='navlink'>Discord</a></li>
                        <li><a href="#team" className='navlink'>Team</a></li>
                        <li><a href="#contact" className='navlink'>Contact</a></li>
                        <li><a href="https://furusmintclub.gitbook.io/fmc-genesis-whitepaper/" className='navlink' target='_blank' rel="noopener noreferrer">Whitepaper</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;