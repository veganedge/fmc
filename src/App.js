import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js'
import About from './components/About';
import Discord from './components/Discord';
import Team from './components/Team';
import Contact from './components/Contact';
import Whitepaper from './components/Whitepaper';
import Footer from './components/Footer';


function App() {
  return ( 
    <div className="App_body">
      {/* Always leave NAVBAR */}
      <Navbar />
      {/* Look into react router to switch view between these */}
      <Home />
      <About />
      <Discord />
      <Team />
      <Contact />
      <Whitepaper />
      {/* Always leave FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
