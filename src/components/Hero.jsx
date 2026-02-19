import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <Motion.div
                className="hero-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="hero-content">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-badge"
                    >
                        <span className="pulsing-dot"></span> Available for new projects
                    </Motion.div>

                    <Motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Software That<br />
                        <span className="gradient-text" data-text="Scales Your Business">Scales Your Business</span>
                    </Motion.h1>

                    <Motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        I develop high-performance web applications that automate workflows
                        and improve user retention. From internal tools to customer-facing
                        platforms, I help teams launch reliable products faster.
                    </Motion.p>

                    <Motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            to="/contact"
                            className="cta-primary"
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            Get a Technical Assessment <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link
                            to="/projects"
                            className="cta-secondary"
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            View Case Studies <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </Motion.div>

                    <Motion.p
                        className="hero-microcopy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                    >
                        Get a technical response within 24 hours &middot; No obligations
                    </Motion.p>

                    <Motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { icon: <Github size={22} />, link: "https://github.com/kingayo999", label: "GitHub" },
                            { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/ayobami-olayanju-9ab0223ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
                            { icon: <Twitter size={22} />, link: "#", label: "Twitter" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </Motion.div>
                </div>

                <Motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    <div className="abstract-shape shape-1"></div>
                    <div className="abstract-shape shape-2"></div>
                    <div className="glass-card stat-card card-1">
                        <h4>3</h4>
                        <p>Systems Live</p>
                    </div>
                    <div className="glass-card stat-card card-2">
                        <h4>100%</h4>
                        <p>Project Success</p>
                    </div>
                    <div className="glass-card stat-card card-3">
                        <h4>24h</h4>
                        <p>Technical Feedback</p>
                    </div>
                </Motion.div>
            </Motion.div>
        </section>
    );
};

export default Hero;
