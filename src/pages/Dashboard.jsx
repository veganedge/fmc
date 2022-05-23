import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar.js'


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashboard-content'>
                <h1>Component shown after clicking icon on sidebar</h1>
                <Routes>
                    <Route />
                    <Route />
                    <Route />
                    <Route />
                    <Route />
                    <Route />
                </Routes>
            </div> 
        </div>
        
    );
}

export default Dashboard;