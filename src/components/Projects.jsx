import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="section-header">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-badge"
                    style={{ display: 'none' }}
                >
                    <Layers size={14} /> Portfolio
                </Motion.div>
                <Motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Featured Masterpieces
                </Motion.h2>
            </div>

            <div className="projects-grid">
                {projectsData.map((p, i) => (
                    <Motion.div
                        key={p.id}
                        className="project-card glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -10, borderColor: 'var(--accent)' }}
                    >
                        <div className="card-inner">
                            <div className="project-category">{p.category}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>

                            <div className="tech-stack-mini">
                                {p.tech.slice(0, 3).map(t => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <div className="card-actions">
                                <Link to={`/project/${p.id}`} className="cta-secondary small">
                                    Case Study <ArrowRight size={16} />
                                </Link>
                                <div className="icon-links">
                                    {p.github && (
                                        <a href={p.github} target="_blank" rel="noreferrer" title="View Code">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {p.link && (
                                        <a href={p.link} target="_blank" rel="noreferrer" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
