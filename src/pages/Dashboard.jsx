/* Imports from React Router */
import { Routes, Route } from 'react-router-dom';
/* Imported custom componenets */
/*import Sidebar2 from '../components/dashboard/sidebar/Sidebar2.js';*/
import Sidebar from '../components/dashboard/sidebar/Sidebar.js';
import DashboardIntro from '../components/dashboard/DashboardIntro.js';
import Marketplace from '../components/dashboard/marketplace/Marketplace.js';
import Charting from '../components/dashboard/charting/Charting.js';
import Calendar from '../components/dashboard/Calendar.js';
import Profits from '../components/dashboard/Profits.js';
import Notifications from '../components/dashboard/Notifications.js';
import NodeInfo from '../components/dashboard/NodeInfo.js';
import DashNoPage from './DashNoPage.jsx';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashboard-content'>
                <Routes>
                    <Route path="/" element={<DashboardIntro />} />
                    <Route path="Marketplace" element={<Marketplace />} />
                    <Route path="Charting" element={<Charting />} />
                    <Route path="Calendar" element={<Calendar />} />
                    <Route path="Profits" element={<Profits />} />
                    <Route path="Notifications" element={<Notifications />} />
                    <Route path="NodeInfo" element={<NodeInfo />} />
                    <Route path="*" element={<DashNoPage />} />
                </Routes>
            </div> 
        </div>
        
    );
}

export default Dashboard;