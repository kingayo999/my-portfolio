import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                        Full-Stack <br />
                        <span className="gradient-text" data-text="Developer">Developer</span>
                    </Motion.h1>

                    <Motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Junior software engineer specializing in building robust, well-architected
                        systems using React, Node.js, and PostgreSQL.
                    </Motion.p>

                    <Motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/projects" className="cta-primary">
                            View Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <a href="/my-portfolio/resume.pdf" download="King_Ayo_Resume.pdf" className="cta-secondary">
                            Download CV <Download size={18} style={{ marginLeft: '8px' }} />
                        </a>
                    </Motion.div>

                    <Motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { icon: <Github size={22} />, link: "https://github.com/kingayo999" },
                            { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/ayobami-olayanju-9ab0223ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                            { icon: <Twitter size={22} />, link: "#" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
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
                    {/* Abstract 3D-like CSS Element */}
                    <div className="abstract-shape shape-1"></div>
                    <div className="abstract-shape shape-2"></div>
                    <div className="glass-card stat-card card-1">
                        <h4>1</h4>
                        <p>Year coding</p>
                    </div>
                    <div className="glass-card stat-card card-2">
                        <h4>BEng.</h4>
                        <p>Computer Eng.</p>
                    </div>
                </Motion.div>
            </Motion.div>
        </section>
    );
};

export default Hero;
