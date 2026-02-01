import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar glass-card">
            <div className="nav-container">
                <Link to="/" className="logo gradient-text" onClick={closeMenu}>KING.</Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>

                <Link to="/contact" className="cta-button desktop-only" onClick={closeMenu}>Hire Me</Link>

                {/* Hamburger Button */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
