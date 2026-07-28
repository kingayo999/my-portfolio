import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
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
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Services from './pages/Services';
import ProjectDetail from './pages/ProjectDetail';
import { safeGetItem, safeSetItem } from './utils/storage';

gsap.registerPlugin(ScrollTrigger);

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      ScrollTrigger.refresh();
    } catch {
      // ignore
    }
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
      <Route path="/about" element={<PageTransition><About /></PageTransition>} />
      <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
      <Route path="/project/:id" element={<PageTransition><ProjectTransitionWrapper /></PageTransition>} />
      <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
    </Routes>
  );
};

const ProjectTransitionWrapper = () => <ProjectDetail />;

function App() {
  const getSystemTheme = () => {
    try {
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // fallback
    }
    return 'light';
  };

  const [theme, setTheme] = useState(() => safeGetItem('theme') || getSystemTheme());

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      safeSetItem('theme', theme);
    } catch {
      // fallback
    }
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
