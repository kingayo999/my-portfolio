import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import PageTransition from './components/PageTransition';
import ScrollBackground from './components/ScrollBackground';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import { safeGetItem, safeSetItem } from './utils/storage';

gsap.registerPlugin(ScrollTrigger);

// Lazy load secondary pages
const About = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Services = lazy(() => import('./pages/Services'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    color: 'var(--text-dim)'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid var(--glass-border)',
        borderTop: '3px solid var(--accent)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 15px'
      }}></div>
      <p>Loading...</p>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  // Detect system theme preference
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(() => safeGetItem('theme') || getSystemTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    safeSetItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };


  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollBackground />

        <div className="app">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main style={{ paddingTop: 'var(--nav-height)' }}>
            <ErrorBoundary>
              <AnimatedRoutes />
            </ErrorBoundary>
          </main>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
