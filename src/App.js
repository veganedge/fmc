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
      <Navbar />
      <Home />
      <About />
      <Discord />
      <Team />
      <Contact />
      <Whitepaper />
      <Footer />
    </div>
  );
}

export default App;
