import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, Cpu, Layout, Boxes, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

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

            <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 20px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)', marginBottom: '40px', fontWeight: '600' }}>
                        <ArrowLeft size={20} /> Back to Masterpieces
                    </Link>
                </motion.div>

                <div className="detail-header" style={{ marginBottom: '60px' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
                    >
                        {project.category}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="gradient-text"
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', margin: '10px 0 20px' }}
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.25rem', color: 'var(--text-dim)', maxWidth: '800px', lineHeight: '1.6' }}
                    >
                        {project.desc}
                    </motion.p>
                </div>

                <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '20px' }}>
                            <Layout size={24} style={{ color: 'var(--accent)' }} /> Overview
                        </h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', fontSize: '1.1rem' }}>{project.fullDesc}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '20px' }}>
                            <Boxes size={24} style={{ color: 'var(--accent)' }} /> Technical Approach
                        </h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', fontSize: '1.1rem' }}>{project.approach}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '20px' }}>
                            <Cpu size={24} style={{ color: 'var(--accent)' }} /> Challenges
                        </h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', fontSize: '1.1rem' }}>{project.challenges}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '20px' }}>
                            <CheckCircle2 size={24} style={{ color: 'var(--accent)' }} /> Impact & Results
                        </h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', fontSize: '1.1rem' }}>{project.results}</p>
                    </motion.div>
                </div>

                <motion.div
                    className="glass-card"
                    style={{ marginTop: '80px', padding: '40px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a href={project.github} className="cta-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Github size={20} /> View Source Code
                    </a>
                    <a href={project.link} className="cta-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ExternalLink size={20} /> Experience Live Site
                    </a>
                </motion.div>
            </section>
        </div>
    );
};

export default ProjectDetail;
