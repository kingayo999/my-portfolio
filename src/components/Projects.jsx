import React, { useRef, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Target } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const gridRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;
        const header = headerRef.current;
        if (!grid || !header) return;

        const cards = grid.querySelectorAll('.project-card');
        const title = header.querySelector('.section-title');
        const subtitle = header.querySelector('p');

        const ctx = gsap.context(() => {
            gsap.to(title, {
                scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
            });
            gsap.to(subtitle, {
                scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out'
            });

            gsap.set(cards, { y: 60, opacity: 0 });
            gsap.to(cards, {
                scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none none' },
                y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power2.out', overwrite: true
            });
        }, header);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
            gsap.killTweensOf(cards);
            if (title) gsap.killTweensOf(title);
            if (subtitle) gsap.killTweensOf(subtitle);
        };
    }, []);

    return (
        <section className="projects-section" id="projects">
            <div className="section-header" ref={headerRef}>
                <h2
                    className="section-title gradient-text"
                    style={{ opacity: 0, transform: 'translateY(20px)' }}
                >
                    Selected Work
                </h2>
                <p
                    style={{ color: 'var(--text-dim)', maxWidth: '560px', margin: '0 auto', opacity: 0, wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                >
                    Real systems built to solve real problems. Click any project to read the full case study.
                </p>
            </div>

            <div className="projects-grid" ref={gridRef}>
                {projectsData.map((p) => (
                    <Motion.div
                        key={p.id}
                        className="project-card glass-card"
                        whileHover={{ y: -10, borderColor: 'var(--accent)' }}
                    >
                        <div className="card-inner">
                            <div className="project-category">{p.category}</div>
                            <h3 style={{ wordBreak: 'break-word' }}>{p.title}</h3>
                            <p style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{p.desc}</p>

                            {p.results && (
                                <div className="project-result">
                                    <Target size={13} className="result-icon" />
                                    <span style={{ wordBreak: 'break-word' }}>{p.results.split('.')[0]}.</span>
                                </div>
                            )}

                            <div className="tech-stack-mini">
                                {p.tech.slice(0, 3).map(t => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            <div className="card-actions" style={{ flexWrap: 'wrap' }}>
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
