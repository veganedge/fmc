import FMC_logo from '../../../assets/navbar_logo_dropshadow.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBolt, faCalendar, faChartLine, faChevronLeft, faChevronRight, faDollarSign, faPoll } from '@fortawesome/free-solid-svg-icons';
import classes from './Sidebar.module.css';


const Sidebar2 = () => {

    const [expandSidebar, setExpandSidebar] = useState(false);

    const handleClick = () => { 
        const expandmenu = document.getElementsByClassName(classes.sidebar)[0];
        expandmenu.classList.toggle(classes.expanded);
    }


    return(
        <nav className={classes.sidebar}>
            <div className={classes.sidebarIconsContainer}>
                <div className={classes.sidebarLogoChevronContainer}>
                    <Link to="/"><img src={FMC_logo} alt="FMC logo" className={classes.sidebarNavlogo}></img></Link>
                    <span></span>
                    <div className={ expandSidebar ? classes.sidebarChevronLeft : classes.sidebarChevronRight} onClick={ () => { handleClick(); setExpandSidebar(!expandSidebar) }}>
                        { expandSidebar ? <FontAwesomeIcon icon={faChevronLeft} className={`${classes.sidebarLink} fa-2x`} /> : <FontAwesomeIcon icon={faChevronRight} className={`${classes.sidebarLink} fa-2x`} /> }
                    </div>
                    <span></span>
                </div>
                <span></span>
                <ul>
                    <li>
                        <Link 
                        to="/Dashboard/Marketplace" 
                        className={`${classes.sidebarLink} fa-2x`} 
                        /* active styling not working so far */
                        /* style={isActive => ({color: isActive ? "#11df93" : "#3e4145"})}*/ >
                            { expandSidebar ? <p>Shop</p> : null }
                            <FontAwesomeIcon icon={faDollarSign} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Charting" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p>Chart</p> : null }
                            <FontAwesomeIcon icon={faChartLine} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Calendar" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p>Dates</p> : null }
                            <FontAwesomeIcon icon={faCalendar} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Profits" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p>Profits</p> : null }
                            <FontAwesomeIcon icon={faPoll} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Notifications" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p>Notify</p> : null }
                            <FontAwesomeIcon icon={faBell} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/NodeInfo" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p>Node</p> : null }
                            <FontAwesomeIcon icon={faBolt} />
                        </Link>
                    </li>
                </ul>
                <span></span>
            </div>
        </nav>
    );
}

export default Sidebar2;