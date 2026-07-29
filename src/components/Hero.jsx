import React, { useRef, useLayoutEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Github, MessageSquare, Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 })
              .from('.hero-title', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
              .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
              .from('.hero-actions', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
              .from('.hero-microcopy', { opacity: 0, duration: 0.5 }, '-=0.3')
              .from('.hero-socials', { opacity: 0, duration: 0.5 }, '-=0.2')
              .from('.hero-visual', { opacity: 0, scale: 0.9, duration: 0.9 }, '-=0.5')
              .from('.stat-card', { scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.6');
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section" ref={heroRef}>
            <div className="hero-container">
                <div className="hero-content">
                    <Motion.h1
                        className="hero-title"
                    >
                        Websites<br />
                        <span className="gradient-text" data-text="That Actually Work">That Actually Work</span>
                    </Motion.h1>

                    <Motion.p
                        className="hero-subtitle"
                    >
                        From cleaning service sites and school platforms to SaaS dashboards and secure vault products,
                        I build digital tools that people actually use. Every project is production-ready,
                        easy to maintain, and built to grow with whatever you are building next.
                    </Motion.p>

                    <div className="hero-actions">
                        <Link
                            to="/contact"
                            className="cta-primary"
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            Get a Technical Assessment <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <a
                            href="/AYOBAMI-OLAYANJU-CV.pdf"
                            download
                            className="cta-secondary"
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            Download CV <Download size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <Link
                            to="/projects"
                            className="cta-secondary"
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            View Case Studies <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>

                    <Motion.p
                        className="hero-microcopy"
                    >
                        Get a technical response within 24 hours &middot; No obligations
                    </Motion.p>

                    <div className="hero-socials">
                        {[
                            { icon: <Github size={22} />, link: "https://github.com/kingayo999", label: "GitHub" },
                            { icon: <MessageSquare size={22} />, link: "https://wa.me/2347041303372", label: "WhatsApp" },
                            { icon: <Phone size={22} />, link: "tel:+2347041303372", label: "Phone" },
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
                    </div>
                </div>

                <Motion.div
                    className="hero-visual"
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
            </div>
        </section>
    );
};

export default Hero;
