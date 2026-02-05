import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, Cpu, Layout, Boxes, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2>Project Not Found</h2>
                <Link to="/projects" className="cta-secondary" style={{ marginTop: '20px' }}>Back to Masterpieces</Link>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            <Helmet>
                <title>{project.title} | KING Case Study</title>
                <meta name="description" content={project.desc} />
            </Helmet>

            <section className="project-detail-container">
                <Motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)', marginBottom: '40px', fontWeight: '600' }}>
                        <ArrowLeft size={20} /> Back to Masterpieces
                    </Link>
                </Motion.div>

                <div className="detail-header">
                    <Motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
                    >
                        {project.category}
                    </Motion.span>
                    <Motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="gradient-text"
                    >
                        {project.title}
                    </Motion.h1>
                    <Motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {project.desc}
                    </Motion.p>
                </div>

                <div className="detail-grid">
                    <Motion.div
                        className="detail-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3>
                            <Layout size={24} style={{ color: 'var(--accent)' }} /> Overview
                        </h3>
                        <p>{project.fullDesc}</p>
                    </Motion.div>

                    <Motion.div
                        className="detail-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3>
                            <Boxes size={24} style={{ color: 'var(--accent)' }} /> Technical Approach
                        </h3>
                        <p>{project.approach}</p>
                    </Motion.div>

                    <Motion.div
                        className="detail-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        <h3>
                            <Cpu size={24} style={{ color: 'var(--accent)' }} /> Challenges
                        </h3>
                        <p>{project.challenges}</p>
                    </Motion.div>

                    <Motion.div
                        className="detail-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <h3>
                            <CheckCircle2 size={24} style={{ color: 'var(--accent)' }} /> Impact & Results
                        </h3>
                        <p>{project.results}</p>
                    </Motion.div>
                </div>

                <Motion.div
                    className="glass-card detail-footer-actions"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Github size={20} /> View Source Code
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ExternalLink size={20} /> Experience Live Site
                    </a>
                </Motion.div>
            </section>
        </div>
    );
};

export default ProjectDetail;
