import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'; // Import Routes
import './App.css';
import Home from './Components/Home';
import CV from './Components/CV';
import AboutMe from './Components/About';
import Footer from './Components/Footer';
import Kontakt from './Components/Kontakt';
import EasterEgg from './Components/EasterEgg';
import Portfolio from './Components/Projects';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='nav'>
          <div className="logo">Efrem</div>
            <li>
              <NavLink to="/" activeClassName="active">Start</NavLink>
            </li>
            <li>
              <NavLink to="/cv" activeClassName="active">CV</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">Om mig</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" activeClassName="active">Kontakt</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">Projekt</NavLink>
            </li>
            <li>
              <NavLink to="/litemer" activeClassName="active">Lite mer</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/litemer" element={<EasterEgg />} />
        </Routes> 
      </div>
      <footer>
      <Footer/>
    </footer>
    </Router>
   
  );
}

export default App;
