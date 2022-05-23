import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar.js';
import Splash from './pages/Splash.jsx'
import About from './pages/About.jsx';
import NewbieUniversity from './pages/NewbieUniversity.jsx'
import NoSuchPage from './pages/NoSuchPage.jsx';
import Footer from './components/Footer.js';


function General() {

  return ( 
    <div className="App_body">
     <Navbar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/About" element={<About />} />
          <Route path="/Newbie" element={<NewbieUniversity />} />
          <Route path="*" element={<NoSuchPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default General;