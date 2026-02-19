import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Target } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="section-header">
                <Motion.h2
                    className="section-title gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Selected Work
                </Motion.h2>
                <Motion.p
                    style={{ color: 'var(--text-dim)', maxWidth: '560px', margin: '0 auto' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Real systems built to solve real problems. Click any project to read the full case study.
                </Motion.p>
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

                            {p.results && (
                                <div className="project-result">
                                    <Target size={13} className="result-icon" />
                                    <span>{p.results.split('.')[0]}.</span>
                                </div>
                            )}

                            <div className="tech-stack-mini">
                                {p.tech.slice(0, 3).map(t => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <div className="card-actions">
                                <Link
                                    to={`/project/${p.id}`}
                                    className="cta-primary"
                                    onClick={() => triggerHaptic(hapticPatterns.light)}
                                >
                                    Case Study <ArrowRight size={18} />
                                </Link>
                                {p.link && p.link !== '#' && (
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cta-secondary"
                                        onClick={() => triggerHaptic(hapticPatterns.light)}
                                    >
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                )}
                                <div className="icon-links">
                                    {p.github && p.github !== '#' && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="View Code"
                                            onClick={() => triggerHaptic(hapticPatterns.light)}
                                        >
                                            <Github size={20} />
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
