import React from 'react';
import Home from './components/Home';
import About from './components/QuemSomos';
import Api from './components/GetApi';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <Router>
      <nav>
        <Link to="/">Página Principal</Link> | 
        <Link to="/About"> Quem Somos?</Link> |
        <Link to="/Api"> Testando Api</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element = {<About />} />
        <Route path="/Api" element ={<Api />} />
      </Routes>
    </Router>
    
  );
};

export default App
