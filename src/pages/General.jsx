/* Imports from React Router */ 
import { Routes, Route } from 'react-router-dom';
/* Imported stylesheet */
import '../styles/App.css';
/* Imported custom componenets */
import Navbar from '../components/general/navbar/Navbar.js';
import GeneralIntro from '../components/general/GeneralIntro';
import About from '../components/general/about/About.js';
import NewbieUniversity from '../components/general/newbieuniversity/NewbieUniversity.js';
import NoPageFound from './NoPageFound.jsx';
import Footer from '../components/general/footer/Footer.js';


function General() {

  return ( 
    <div className="App_body">
     <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<GeneralIntro />} />
          <Route path="About" element={<About />} />
          <Route path="Newbie" element={<NewbieUniversity />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default General;
