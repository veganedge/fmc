import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home.js'
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NoSuchPage from './pages/NoSuchPage';
import Footer from './components/Footer';


function App() {
  return ( 
    <div className="App_body">
      <Navbar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoSuchPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
