// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Biography from './pages/Biography/Biography';
import Stats from './pages/Stats/Stats';
import Gallery from './pages/Gallery/Gallery';
import News from './pages/News/News';
import NotFound from './pages/NotFound/NotFound';

// Import global CSS, which includes Tailwind directives
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-kohli-light-gray font-sans">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20"> {/* Adjust padding based on Navbar height */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;