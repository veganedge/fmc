import React from 'react';
import FMC_logo from '../assets/navbar_logo_dropshadow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <div>
            <nav className='navbar'>
                <div className='navlogo'>
                    <img src={FMC_logo} alt="FMC logo" height="60" width="60"></img>
                </div>
                <span className='hamburger-menu fa-2x'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span>
                <div>
                    <ul className='navlist'>
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