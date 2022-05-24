import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar.js'
import Marketplace from '../components/dashboard/Marketplace.js';
import Charting from '../components/dashboard/Charting.js';
import Calendar from '../components/dashboard/Calendar.js';
import Profits from '../components/dashboard/Profits.js';
import Notifications from '../components/dashboard/Notifications.js';
import NodeInfo from '../components/dashboard/NodeInfo.js';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashboard-content'>
                <h1>Component shown after clicking icon on sidebar</h1>
                <Routes>
                    <Route path="Marketplace" element={<Marketplace />} />
                    <Route path="Charting" element={<Charting />} />
                    <Route path="Calendar" element={<Calendar />} />
                    <Route path="Profits" element={<Profits />} />
                    <Route path="Notifications" element={<Notifications />} />
                    <Route path="NodeInfo" element={<NodeInfo />} />
                </Routes>
            </div> 
        </div>
        
    );
}

export default Dashboard;