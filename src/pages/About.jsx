import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, Briefcase, Code, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
    const timeline = [
        { year: "2025 - Present", title: "Full-Stack Development Focus", company: "Self-Taught / Open Source", desc: "Specializing in the PERN/SERN stack (PostgreSQL, Express/Supabase, React, Node.js)." },
        { year: "2023 - Present", title: "B.Eng Computer Engineering", company: "Bells University of Technology", desc: "Core focus on software engineering, data structures, and system design." },
        { year: "2021 - 2023", title: "Web Fundamentals", company: "Independent Study", desc: "Mastering HTML, CSS, and JavaScript through documentation and project-based learning." }
    ];

    return (
        <div className="about-page">
            <Helmet>
                <title>About | KING - Crafting Excellence</title>
                <meta name="description" content="Learn more about KING's journey, expertise in frontend and backend systems, and the collaborative process that drives digital success." />
            </Helmet>

            <section className="about-hero">
                <Motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="section-badge" style={{ visibility: 'hidden' }}><Terminal size={14} /> The Architect</div>
                    <h2 className="section-title gradient-text">Behind the Code</h2>
                    <p className="hero-description">
                        Transforming complex requirements into elegant, high-performance digital solutions.
                    </p>
                </Motion.div>

                <div className="about-content">
                    <div className="about-text-column">
                        <Motion.div
                            className="glass-card story-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>The Origin Story</h3>
                            <p>
                                My journey began with a fundamental fascination for solving complex puzzles through code.
                                What started as exploring the building blocks of the web has evolved into a career
                                dedicated to architecting high-stakes digital environments.
                            </p>
                            <p>
                                I believe that great software isn't just about clean code—it's about empathy for the
                                end-user and a deep understanding of the problem being solved. My methodology revolves
                                around rigorous testing, performance optimization, and maintaining a high standard
                                of accessibility.
                            </p>
                        </Motion.div>

                        <div className="stats-grid">
                            <Motion.div
                                className="glass-card stat-box"
                                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                            >
                                <Award className="stat-icon" />
                                <h4>10+</h4>
                                <p>Learning Prototypes</p>
                            </Motion.div>
                            <Motion.div
                                className="glass-card stat-box"
                                whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                            >
                                <Briefcase className="stat-icon" />
                                <h4>1 Flagship</h4>
                                <p>Full-Stack System</p>
                            </Motion.div>
                        </div>
                    </div>

                    <div className="timeline-column">
                        <h3 className="section-heading">Learning Journey</h3>
                        <div className="timeline">
                            <div className="timeline-line"></div>
                            {timeline.map((item, i) => (
                                <Motion.div
                                    key={i}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content glass-card">
                                        <span className="timeline-year">{item.year}</span>
                                        <h4>{item.title}</h4>
                                        <h5 style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '8px' }}>{item.company}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
