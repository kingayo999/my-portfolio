import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mesh-bg">
        <div className="mesh-blob"></div>
        <div className="mesh-blob mesh-blob-2"></div>
      </div>
      <div className="app">
        <Navbar />
        <main style={{ paddingTop: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
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
  );
}

export default App;
