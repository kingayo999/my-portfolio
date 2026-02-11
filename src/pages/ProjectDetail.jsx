import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, Cpu, Layout, Boxes, CheckCircle2, Layers } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="project-not-found">
                <Motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Project Not Found</Motion.h2>
                <Link to="/projects" className="cta-secondary">Return to Gallery</Link>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            <Helmet>
                <title>{project.title} | KING Case Study</title>
                <meta name="description" content={project.desc} />
            </Helmet>

            <div className="detail-container">
                <Motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/projects" className="back-link">
                        <ArrowLeft size={20} /> Back to Gallery
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
                    <Motion.div
                        className="glass-card detail-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3><Layout size={20} className="card-icon" /> Overview</h3>
                        <p>{project.fullDesc}</p>
                    </Motion.div>

                    <Motion.div
                        className="glass-card detail-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3><Boxes size={20} className="card-icon" /> Technical Architecture</h3>
                        <p>{project.approach}</p>
                    </Motion.div>

                    <Motion.div
                        className="glass-card detail-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        <h3><Cpu size={20} className="card-icon" /> Engineering Challenges</h3>
                        <p>{project.challenges}</p>
                    </Motion.div>

                    <Motion.div
                        className="glass-card detail-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <h3><CheckCircle2 size={20} className="card-icon" /> Impact & Results</h3>
                        <p>{project.results}</p>
                    </Motion.div>
                </div>

                <Motion.div
                    className="detail-actions"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
                >
                    {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-primary">
                            <ExternalLink size={20} /> View Live Site
                        </a>
                    )}
                    {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-secondary">
                            <Github size={20} /> View Source
                        </a>
                    )}
                </Motion.div>

                <div className="detail-tech">
                    <h3>Technologies Deployed</h3>
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
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
