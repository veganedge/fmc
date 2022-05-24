import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Dashboard from './pages/Dashboard.jsx';
import General from './General.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<General />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
