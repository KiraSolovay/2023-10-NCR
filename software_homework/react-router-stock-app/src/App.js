import './App.css';

import { Routes, Route } from 'react-router-dom';
import About from './pages/About.js';
import Home from './pages/Home';
import Stock from './pages/Stock.js';
import Dashboard from './pages/Dashboard.js'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/stock/:symbol" element={<Stock />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;