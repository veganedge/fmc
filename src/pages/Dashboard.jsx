// Imports from React Router
import { Routes, Route } from 'react-router-dom';
// Imported custom componenets
import Sidebar from '../components/dashboard/sidebar/Sidebar.js';
import DashboardIntro from '../components/dashboard/DashboardIntro.js';
import Marketplace from '../components/dashboard/marketplace/Marketplace.js';
import Charting from '../components/dashboard/charting/Charting.js';
import Calendar from '../components/dashboard/calendar/Calendar.js';
import Profits from '../components/dashboard/profits/Profits.js';
import Notifications from '../components/dashboard/notifications/Notifications.js';
import NodeInfo from '../components/dashboard/nodeinfo/NodeInfo.js';
import NoPageFound from './NoPageFound.jsx';
// Imported stylesheet
import classes from './Dashboard.module.css';


const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className={classes.dashboardContent}>
                <Routes>
                    <Route path="/" element={<DashboardIntro />} />
                    <Route path="Marketplace" element={<Marketplace />} />
                    <Route path="Charting" element={<Charting />} />
                    <Route path="Calendar" element={<Calendar />} />
                    <Route path="Profits" element={<Profits />} />
                    <Route path="Notifications" element={<Notifications />} />
                    <Route path="NodeInfo" element={<NodeInfo />} />
                    <Route path="*" element={<NoPageFound />} />
                </Routes>
            </div> 
        </div>
        
    );
}

export default Dashboard;