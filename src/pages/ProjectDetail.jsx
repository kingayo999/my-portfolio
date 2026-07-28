import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, Target, Layout, Boxes, Cpu, CheckCircle2, Layers, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="project-not-found">
                <Motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Project Not Found</Motion.h2>
                <Link
                    to="/projects"
                    className="cta-secondary"
                    onClick={() => triggerHaptic(hapticPatterns.light)}
                >
                    Return to Gallery
                </Link>
            </div>
        );
    }

    const sections = [
        { icon: <Target size={20} className="card-icon" />, label: 'Objective', content: project.objective },
        { icon: <Layout size={20} className="card-icon" />, label: 'Overview', content: project.fullDesc },
        { icon: <Boxes size={20} className="card-icon" />, label: 'Approach', content: project.approach },
        { icon: <Cpu size={20} className="card-icon" />, label: 'Challenge', content: project.challenges },
        { icon: <CheckCircle2 size={20} className="card-icon" />, label: 'Result', content: project.results },
    ];

    return (
        <div className="project-detail-page">
            <Helmet>
                <title>{project.title} | Case Study — King Ayo</title>
                <meta name="description" content={project.desc} />
            </Helmet>

            <div className="detail-container">
                <Motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/projects" className="back-link" onClick={() => triggerHaptic(hapticPatterns.light)}>
                        <ArrowLeft size={20} /> Back to Work
                    </Link>
                </Motion.div>

                <div className="detail-header">
                    <Motion.span
                        className="detail-category"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Layers size={14} style={{ marginRight: '8px' }} /> {project.category}
                    </Motion.span>
                    <Motion.h1
                        className="detail-title gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {project.title}
                    </Motion.h1>
                    <Motion.p
                        className="detail-desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {project.desc}
                    </Motion.p>
                </div>

                <div className="detail-grid">
                    {sections.map((s, i) => (
                        <React.Fragment key={i}>
                            {s.content && (
                                <Motion.div
                                    className="glass-card detail-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.08 }}
                                >
                                    <h3>{s.icon} {s.label}</h3>
                                    <p>{s.content}</p>
                                </Motion.div>
                            )}

                            {/* Mid-page Conversion Banner after 'Approach' */}
                            {s.label === 'Approach' && (
                                <Motion.div
                                    className="mid-page-cta glass-card"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <h4>Interested in a similar technical framework?</h4>
                                    <Link to="/contact" className="cta-primary small">Get an Assessment</Link>
                                </Motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <Motion.div
                    className="detail-actions"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ gap: '20px' }}
                >
                    {project.link && project.link !== '#' && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-primary"
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            <ExternalLink size={20} /> View Live Site
                        </a>
                    )}
                    {project.github && project.github !== '#' && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-secondary"
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            <Github size={20} /> View Source
                        </a>
                    )}
                </Motion.div>

                {/* Next/Prev Navigation */}
                <div className="project-navigation">
                    {(() => {
                        const currentIndex = projectsData.findIndex(p => p.id === id);
                        const prevProject = projectsData[currentIndex - 1];
                        const nextProject = projectsData[currentIndex + 1];

                        return (
                            <>
                                {prevProject ? (
                                    <Link
                                        to={`/project/${prevProject.id}`}
                                        className="nav-btn prev"
                                        onClick={() => triggerHaptic(hapticPatterns.light)}
                                    >
                                        <ArrowLeft size={16} />
                                        <span>Previous: {prevProject.title.split(' ').slice(0, 3).join(' ')}...</span>
                                    </Link>
                                ) : <div />}

                                {nextProject ? (
                                    <Link
                                        to={`/project/${nextProject.id}`}
                                        className="nav-btn next"
                                        onClick={() => triggerHaptic(hapticPatterns.light)}
                                    >
                                        <span>Next: {nextProject.title.split(' ').slice(0, 3).join(' ')}...</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                ) : <div />}
                            </>
                        );
                    })()}
                </div>

                <div className="detail-tech">
                    <h3>Technologies Used</h3>
                    <Motion.div
                        className="glass-card architecture-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ gridColumn: '1 / -1', padding: '40px', marginBottom: '40px', border: '1px solid var(--accent-glow)' }}
                    >
                        <h3 style={{ color: 'var(--accent)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Layers size={24} /> Technical Architecture
                        </h3>
                        <div className="architecture-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                            {[
                                { icon: <Cpu />, label: "Core Logic", val: "Edge Function / Serverless" },
                                { icon: <Boxes />, label: "Data Flow", val: "Event-Driven Hooks" },
                                { icon: <Target />, label: "Scaling", val: "Stateless Architecture" }
                            ].map((item, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <div style={{ color: 'var(--text-dim)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                                        {React.cloneElement(item.icon, { size: 32, opacity: 0.8 })}
                                    </div>
                                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '4px' }}>{item.label}</h4>
                                    <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 500 }}>{item.val}</p>
                                </div>
                            ))}
                        </div>
                    </Motion.div>

                    <div className="tech-tags">
                        {project.tech.map((t, i) => (
                            <Motion.span
                                key={t}
                                className="tech-tag-large"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * i }}
                            >
                                {t}
                            </Motion.span>
                        ))}
                    </div>

                    {/* Bottom Conversion CTA */}
                    <Motion.div
                        className="glass-card detail-cta-bottom"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '40px', textAlign: 'center', marginTop: '20px' }}
                    >
                        <h3 style={{ marginBottom: '12px' }}>Ready to discuss your requirements?</h3>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
                            I'm available for technical consultation and full-stack development.
                            Let's define your roadmap before any commitment is made.
                        </p>
                        <Link
                            to="/contact"
                            className="cta-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                        >
                            Start a Conversation <ArrowRight size={18} />
                        </Link>
                    </Motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
