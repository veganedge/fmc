/* Imports from React */
import { useState } from 'react';
/* Imports from React Router */
import { Link } from 'react-router-dom';
/* Imported stylesheet */
import classes from './Sidebar.module.css';
/* Imported assets */
import FMC_logo from '../../../assets/navbar_logo_dropshadow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBolt, faCalendar, faChartLine, faChevronLeft, faChevronRight, faDollarSign, faPoll } from '@fortawesome/free-solid-svg-icons';


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
                    <span className={classes.spacer}></span>
                    <div className={ expandSidebar ? classes.sidebarChevronLeft : classes.sidebarChevronRight} onClick={ () => { handleClick(); setExpandSidebar(!expandSidebar) }}>
                        { expandSidebar ? <FontAwesomeIcon icon={faChevronLeft} className={`${classes.sidebarLink} fa-2x`} /> : <FontAwesomeIcon icon={faChevronRight} className={`${classes.sidebarLink} fa-2x`} /> }
                    </div>
                    <span className={classes.spacer}></span>
                </div>
                <span className={classes.spacer}></span>
                <ul className={classes.sidebarUl}>
                    <li className={classes.sidebarLi}>
                        <Link 
                        to="/Dashboard/Marketplace" 
                        className={`${classes.sidebarLink} ${classes.sidebarP} fa-2x`} 
                        >
                            { expandSidebar ? <p className={classes.sidebarP}>Shop</p> : null }
                            <FontAwesomeIcon icon={faDollarSign} />
                        </Link>
                    </li>
                    <li className={classes.sidebarLi}>
                        <Link to="/Dashboard/Charting" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p className={classes.sidebarP}>Chart</p> : null }
                            <FontAwesomeIcon icon={faChartLine} />
                        </Link>
                    </li>
                    <li className={classes.sidebarLi}>
                        <Link to="/Dashboard/Calendar" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p className={classes.sidebarP}>Dates</p> : null }
                            <FontAwesomeIcon icon={faCalendar} />
                        </Link>
                    </li>
                    <li className={classes.sidebarLi}>
                        <Link to="/Dashboard/Profits" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p className={classes.sidebarP}>Profits</p> : null }
                            <FontAwesomeIcon icon={faPoll} />
                        </Link>
                    </li>
                    <li className={classes.sidebarLi}>
                        <Link to="/Dashboard/Notifications" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p className={classes.sidebarP}>Notify</p> : null }
                            <FontAwesomeIcon icon={faBell} />
                        </Link>
                    </li>
                    <li className={classes.sidebarLi}>
                        <Link to="/Dashboard/NodeInfo" className={`${classes.sidebarLink} fa-2x`}>
                            { expandSidebar ? <p className={classes.sidebarP}>Node</p> : null }
                            <FontAwesomeIcon icon={faBolt} />
                        </Link>
                    </li>
                </ul>
                <span className={classes.spacer}></span>
            </div>
        </nav>
    );
}

export default Sidebar2;