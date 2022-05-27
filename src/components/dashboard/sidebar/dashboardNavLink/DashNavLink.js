// Imports from Prop Types
import PropTypes from 'prop-types'
// Imports from React Router 
import { Link, useLocation } from 'react-router-dom'
// Imported assets 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Imported stylesheet 
import classes from './DashNavLink.module.css'


export const DashNavLink = ({expandSidebar, link, icon, text }) => {

  let curPath = useLocation().pathname.includes(link) && classes.sidebarLinkActive;
  
  return (
    <Link 
      to={link}
      className={
        `${curPath} ${classes.sidebarLink} ${classes.flex} fa-2x`
        }>
      { expandSidebar && <p>{text}</p> }

      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}


// Define the prop types of what this component needs 
DashNavLink.prototype = {
  expandSidebar: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired, 
  text: PropTypes.string.isRequired
}
