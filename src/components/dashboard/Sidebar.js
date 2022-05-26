/* Imports from React */
import { useState } from 'react';
/* Imports from React Router */
import { Link } from 'react-router-dom';
/* Imported assets */
import FMC_logo from '../../assets/navbar_logo_dropshadow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBolt, faCalendar, faChartLine, faChevronLeft, faChevronRight, faDollarSign, faPoll } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {

    const [expandSidebar, setExpandSidebar] = useState(false);

    const handleClick = () => { 
        const expandmenu = document.getElementsByClassName('sidebar')[0];
        expandmenu.classList.toggle('expanded');
    }


    return(
        <nav className='sidebar'>
            <div className='sidebar-icons-container'>
                <div className='sidebar-logo-chevron-container'>
                    <Link to="/"><img src={FMC_logo} alt="FMC logo" className='sidebar-navlogo'></img></Link>
                    <span className='spacer'></span>
                    <btn onClick={ () => { handleClick(); setExpandSidebar(!expandSidebar) }}>
                        { expandSidebar ? <FontAwesomeIcon icon={faChevronLeft} className='sidebar-link sidebar-chevron fa-2x' /> : <FontAwesomeIcon icon={faChevronRight} className='sidebar-link sidebar-chevron fa-2x'/> }
                    </btn>
                    <span className='spacer'></span>
                </div>
                <span className='spacer'></span>
                <ul>
                    <li>
                        <Link 
                        to="/Dashboard/Marketplace" 
                        className='sidebar-link fa-2x' 
                        /* active styling not working so far */
                        /* style={isActive => ({color: isActive ? "#11df93" : "#3e4145"})}*/ >
                            { expandSidebar ? <p>Shop</p> : null }
                            <FontAwesomeIcon icon={faDollarSign} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Charting" className='sidebar-link fa-2x'>
                            { expandSidebar ? <p>Chart</p> : null }
                            <FontAwesomeIcon icon={faChartLine} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Calendar" className='sidebar-link fa-2x'>
                            { expandSidebar ? <p>Dates</p> : null }
                            <FontAwesomeIcon icon={faCalendar} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Profits" className='sidebar-link fa-2x'>
                            { expandSidebar ? <p>Profits</p> : null }
                            <FontAwesomeIcon icon={faPoll} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Notifications" className='sidebar-link fa-2x'>
                            { expandSidebar ? <p>Notify</p> : null }
                            <FontAwesomeIcon icon={faBell} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/NodeInfo" className='sidebar-link fa-2x'>
                            { expandSidebar ? <p>Node</p> : null }
                            <FontAwesomeIcon icon={faBolt} />
                        </Link>
                    </li>
                </ul>
                <span className='spacer'></span>
            </div>
        </nav>
    );
}

export default Sidebar;