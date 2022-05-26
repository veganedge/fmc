import React from 'react'
import PropTypes from 'prop-types'

import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './DashNavLink.module.css'


export const DashNavLink = ({expandSidebar, link, icon, text }) => {

  let curPath = useLocation().pathname.includes(link) && styles.sidebarLinkActive;
  
  return (
    <Link 
      to={link}
      className={
        `${curPath} ${styles.sidebarLink} ${styles.flex} fa-2x`
        }>
      { expandSidebar && <p>{text}</p> }

      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}


//Define the prop types of what this component needs to component needs
DashNavLink.prototype = {
  expandSidebar: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired, 
  text: PropTypes.string.isRequired
}
