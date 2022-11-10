// Imports from React
import { useState } from "react";
// Imports from React Router
import { Link } from "react-router-dom";
// Imported custom components
import { DashNavLink } from "./dashboardNavLink/DashNavLink";
// Imported stylesheet
import classes from "./Sidebar.module.css";
// Imported assets
import FMC_logo from "../../../assets/navbar_logo_dropshadow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBolt,
  faCalendar,
  faChartLine,
  faChevronLeft,
  faChevronRight,
  faDollarSign,
  faPoll,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);

  const handleClick = () => {
    const expandmenu = document.getElementsByClassName(classes.sidebar)[0];
    expandmenu.classList.toggle(classes.expanded);
    setExpandSidebar((expandSidebar) => !expandSidebar);
  };

  return (
    <nav className={classes.sidebar}>
      <div className={classes.sidebarIconsContainer}>
        <div className={classes.sidebarLogoChevronContainer}>
          <Link to="/">
            <img
              src={FMC_logo}
              alt="FMC logo"
              className={classes.sidebarNavlogo}
            ></img>
          </Link>
          <span></span>
          <div
            className={
              expandSidebar
                ? classes.sidebarChevronLeft
                : classes.sidebarChevronRight
            }
            onClick={() => {
              handleClick();
            }}
          >
            <FontAwesomeIcon
              icon={expandSidebar ? faChevronLeft : faChevronRight}
              className={`${expandSidebar && classes.sidebarLinkActive} ${
                classes.sidebarLink
              } fa-2x`}
            />
          </div>
          <span></span>
        </div>
        <span></span>
        <ul>
          <li
            onClick={() => {
              if (expandSidebar) {
                handleClick();
              }
            }}
          >
            <DashNavLink
              expandSidebar={expandSidebar}
              link="/Dashboard/Marketplace"
              text="Shop"
              icon={faDollarSign}
            />
          </li>
          <li
            onClick={() => {
              if (expandSidebar) {
                handleClick();
              }
            }}
          >
            <DashNavLink
              expandSidebar={expandSidebar}
              link="/Dashboard/Charting"
              text="Chart"
              icon={faChartLine}
            />
          </li>
          <li
            onClick={() => {
              if (expandSidebar) {
                handleClick();
              }
            }}
          >
            <DashNavLink
              expandSidebar={expandSidebar}
              link="/Dashboard/Calendar"
              text="Dates"
              icon={faCalendar}
            />
          </li>
          <li
            onClick={() => {
              if (expandSidebar) {
                handleClick();
              }
            }}
          >
            <DashNavLink
              expandSidebar={expandSidebar}
              link="/Dashboard/Profits"
              text="Profits"
              icon={faPoll}
            />
          </li>
          <li
            onClick={() => {
              if (expandSidebar) {
                handleClick();
              }
            }}
          >
            <DashNavLink
              expandSidebar={expandSidebar}
              link="/Dashboard/Notifications"
              text="Notify"
              icon={faBell}
            />
          </li>
          <li
            onClick={() => {
              if (expandSidebar) {
                handleClick();
              }
            }}
          >
            <DashNavLink
              expandSidebar={expandSidebar}
              link="/Dashboard/NodeInfo"
              text="Node"
              icon={faBolt}
            />
          </li>
        </ul>
        <span></span>
      </div>
    </nav>
  );
};

export default Sidebar;
