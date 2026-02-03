import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './pages/ProjectDetail';
import Chatbot from './components/Chatbot';
import PageTransition from './components/PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <HelmetProvider>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="mesh-bg">
          <div className="mesh-blob"></div>
          <div className="mesh-blob mesh-blob-2"></div>
        </div>
        <div className="app">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main style={{ paddingTop: 'var(--nav-height)' }}>
            <AnimatedRoutes />
          </main>
          <Chatbot />
          <footer style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="https://github.com/kingayo999" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>GitHub</a>
              <a href="#" style={{ color: 'var(--text-dim)' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--text-dim)' }}>Twitter</a>
            </div>
            &copy; {new Date().getFullYear()} KING. All rights reserved.
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
