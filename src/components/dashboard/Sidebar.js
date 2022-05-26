import FMC_logo from '../../assets/navbar_logo_dropshadow.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBolt, faCalendar, faChartLine, faChevronLeft, faChevronRight, faDollarSign, faPoll } from '@fortawesome/free-solid-svg-icons';

import { DashNavLink } from '../dashboardNavLink/DashNavLink';

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
                    <div className = {expandSidebar ? 'sidebar-chevron-left' : 'sidebar-chevron-right'} onClick={ () => { handleClick(); setExpandSidebar(!expandSidebar) }}>
                         <FontAwesomeIcon icon={ expandSidebar ? faChevronLeft : faChevronRight} className={`${expandSidebar && "sidebar-link-active"} sidebar-link sidebar-chevron fa-2x`} /> 
                    </div>
                    <span className='spacer'></span>
                </div>
                <span className='spacer'></span>
                <ul>
                    <li>
                        <DashNavLink 
                            expandSidebar={expandSidebar}
                            link="/Dashboard/Marketplace" 
                            text="Shop" 
                            icon={faDollarSign}
                        />

                    </li>
                    <li>
                        <DashNavLink 
                            expandSidebar={expandSidebar}
                            link="/Dashboard/Charting" 
                            text="Chart"
                            icon={faChartLine}
                        />
                    </li>
                    <li>
                        <DashNavLink 
                            expandSidebar={expandSidebar}
                            link="/Dashboard/Calendar" 
                            text="Dates"
                            icon={faCalendar}
                        />
                    </li>
                    <li>
                        <DashNavLink 
                            expandSidebar={expandSidebar}
                            link="/Dashboard/Profits" 
                            text="Profits"
                            icon={faPoll}
                        />
                    </li>
                    <li>
                        <DashNavLink 
                            expandSidebar={expandSidebar}
                            link="/Dashboard/Notifications" 
                            text="Notify"
                            icon={faBell}
                        />
                    </li>
                    <li>
                        <DashNavLink 
                            expandSidebar={expandSidebar}
                            link="/Dashboard/NodeInfo" 
                            text="Node"
                            icon={faBolt}
                        />
                    </li>
                </ul>
                <span className='spacer'></span>
            </div>
        </nav>
    );
}

export default Sidebar;