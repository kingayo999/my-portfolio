import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpeg';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Mobile links handle closing on click

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Projects', 'Services', 'Contact'];

    return (
        <Motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
        >
            <div className="nav-container glass-card">
                <Link to="/" className="logo">
                    <img src={theme === 'light' ? logo3 : logo2} alt="King Ayo" className="logo-img" />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <ul className="nav-links">
                        {navLinks.map((item) => (
                            <li key={item}>
                                <NavLink
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    {item}
                                    <Motion.span className="link-highlight" layoutId="highlight" />
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <Motion.button
                            className="theme-toggle"
                            onClick={() => { triggerHaptic(hapticPatterns.light); toggleTheme(); }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle Theme"
                        >
                            <AnimatePresence mode="wait">
                                {theme === 'dark' ?
                                    <Motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <Sun size={20} />
                                    </Motion.div> :
                                    <Motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Moon size={20} />
                                    </Motion.div>
                                }
                            </AnimatePresence>
                        </Motion.button>

                        <AnimatePresence>
                            {(scrolled || location.pathname !== '/') && (
                                <Motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to="/contact"
                                        className="cta-primary small"
                                        onClick={() => triggerHaptic(hapticPatterns.light)}
                                    >
                                        Get an Assessment
                                    </Link>
                                </Motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Header Actions */}
                <div className="mobile-header-actions">
                    <Motion.button
                        className="theme-toggle mobile-theme-toggle"
                        onClick={() => { triggerHaptic(hapticPatterns.light); toggleTheme(); }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle Theme"
                    >
                        <AnimatePresence mode="wait">
                            {theme === 'dark' ?
                                <Motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                    <Sun size={22} />
                                </Motion.div> :
                                <Motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                    <Moon size={22} />
                                </Motion.div>
                            }
                        </AnimatePresence>
                    </Motion.button>

                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        className="mobile-menu-overlay"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <button
                            className="mobile-menu-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X size={28} />
                        </button>
                        <ul className="mobile-links">
                            {navLinks.map((item, i) => (
                                <Motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                        {item}
                                    </NavLink>
                                </Motion.li>
                            ))}
                            <Motion.li
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    to="/contact"
                                    className="cta-primary"
                                    style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                                    onClick={() => { triggerHaptic(hapticPatterns.light); setIsOpen(false); }}
                                >
                                    Get an Assessment
                                </Link>
                            </Motion.li>
                        </ul>
                    </Motion.div>
                )}
            </AnimatePresence>
        </Motion.nav>
    );
};

export default Navbar;
