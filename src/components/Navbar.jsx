import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleThemeToggle = () => {
        triggerHaptic(hapticPatterns.light);
        toggleTheme();
    };


    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar glass-card ${isOpen ? 'menu-open' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo gradient-text" onClick={closeMenu}>KING.</Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {['Home', 'About', 'Projects', 'Contact'].map((item, i) => (
                        <Motion.li
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.15 + 0.3, ease: "easeOut" }}
                        >
                            <NavLink
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {item}
                            </NavLink>
                        </Motion.li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <Motion.button
                        onClick={handleThemeToggle}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <Motion.div
                                key={theme}
                                initial={{ y: -20, opacity: 0, rotate: -90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.4, ease: "anticipate" }}
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </Motion.div>
                        </AnimatePresence>
                    </Motion.button>
                    {!isOpen && (
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Link to="/contact" className="cta-button desktop-only" onClick={closeMenu}>Hire Me</Link>
                        </Motion.div>
                    )}
                    <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <ul className="mobile-nav-links">
                            <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                            <li><NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                            <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                        </ul>
                        <Link to="/contact" className="cta-button mobile-cta" onClick={closeMenu}>Hire Me</Link>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
