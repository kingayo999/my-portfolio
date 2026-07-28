import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Github, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Footer.css';

const Footer = () => {
    const [vaultOpen, setVaultOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleSecretClick = () => {
        setClickCount(prev => prev + 1);
        if (clickCount + 1 === 5) {
            triggerHaptic(hapticPatterns.success);
            setVaultOpen(true);
            setClickCount(0);
        }
    };

    const navLinks = [
        { label: 'Work', to: '/projects' },
        { label: 'Services', to: '/services' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
    ];

    const socials = [
        { icon: <Github size={18} />, href: 'https://github.com/kingayo999', label: 'GitHub' },
        { icon: <MessageSquare size={18} />, href: 'https://wa.me/2347041303372', label: 'WhatsApp' },
    ];

    return (
        <footer className="footer-section">
            <AnimatePresence>
                {vaultOpen && (
                    <Motion.div
                        className="vault-modal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <div className="glass-card vault-content">
                            <h3>System Status</h3>
                            <p className="code-font">Status: CONTINUOUS LEARNING</p>
                            <p className="code-font">Focus: SCALABILITY &amp; SECURITY</p>
                            <button onClick={() => setVaultOpen(false)} className="cta-secondary">Close</button>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>

            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <button className="footer-logo gradient-text" onClick={handleSecretClick}>KING.</button>
                        <p className="footer-tagline">
                            Scalable software built for business outcomes.
                        </p>
                        <Link to="/contact" className="cta-primary footer-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Get a Technical Assessment <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="footer-nav">
                        <h4 className="footer-nav-title">Navigation</h4>
                        <ul>
                            {navLinks.map(link => (
                                <li key={link.label}>
                                    <Link to={link.to}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-connect">
                        <h4 className="footer-nav-title">Connect</h4>
                        <div className="footer-socials">
                            {socials.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social-icon">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                        <p className="footer-contact-label">
                            <a href="mailto:olayanjuayobami89@gmail.com">olayanjuayobami89@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                        &copy; {new Date().getFullYear()} King Ayo. All rights reserved.
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', opacity: 0.6 }}>
                        Remote · Worldwide · Available
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
