import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js'
import About from './components/About';
import Dashboard from './components/Dashboard';
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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
