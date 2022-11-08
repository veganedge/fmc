/* Imports from React Router */
import { Routes, Route } from "react-router-dom";
/* Imported stylesheet */
import "../styles/App.css";
/* Imported custom componenets */
import Navbar from "../components/general/navbar/Navbar.js";
import GeneralIntro from "../components/general/GeneralIntro";
import About from "../components/general/about/About.js";
import Team from "../components/general/team/Team";
import Whitepaper from "../components/general/whitepaper/Whitepaper";
import NoPageFound from "./NoPageFound.jsx";

function General() {
  return (
    <div className="App_body">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<GeneralIntro />} />
          <Route path="About" element={<About />} />
          <Route path="Team" element={<Team />} />
          <Route path="Whitepaper" element={<Whitepaper />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default General;
