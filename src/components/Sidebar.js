import FMC_logo from '../assets/navbar_logo_dropshadow.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBolt, faCalendar, faChartLine, faChevronRight, faDollarSign, faPoll } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {

    return(
        <nav className='sidebar'>
            <Link to="/" className='sidebar-navlogo'><img src={FMC_logo} alt="FMC logo" height="60" width="60"></img></Link>
            <btn><FontAwesomeIcon icon={faChevronRight} className='sidebar-link sidebar-chevron fa-2x'/></btn>
            <ul>
                {/* FIGURE OUT HOW TO SPACE THESE OUT FROM THE TOP OF WHERE THEY ARE TO BOTTOM OF VIEWPORT */}
                <li><Link to="" className='sidebar-link fa-2x'><FontAwesomeIcon icon={faChartLine} /></Link></li>
                <li><Link to="" className='sidebar-link fa-2x'><FontAwesomeIcon icon={faDollarSign} /></Link></li>
                <li><Link to="" className='sidebar-link fa-2x'><FontAwesomeIcon icon={faCalendar} /></Link></li>
                <li><Link to="" className='sidebar-link fa-2x'><FontAwesomeIcon icon={faPoll} /></Link></li>
                <li><Link to="" className='sidebar-link fa-2x'><FontAwesomeIcon icon={faBell} /></Link></li>
                <li><Link to="" className='sidebar-link fa-2x'><FontAwesomeIcon icon={faBolt} /></Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;