import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, Briefcase, Globe, ArrowRight, CheckCircle2, Cpu, FileText, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const timeline = [
        { year: "2025 – Present", title: "Full-Stack Product Development", company: "Independent · Open Source", desc: "Building production-grade systems with modern stacks. Focused on performance, reliability, and measurable business outcomes." },
        { year: "2023 – Present", title: "B.Eng Computer Engineering", company: "Bells University of Technology", desc: "Core curriculum in software engineering and system design — applying high-level architectural principles to every client project." },
        { year: "2021 – 2023", title: "Web Fundamentals", company: "Independent Study", desc: "Self-directed mastery of web standards. Focused on efficiency, accessibility, and clean code that scales." }
    ];

    useEffect(() => {
        const left = leftRef.current;
        const right = rightRef.current;
        if (!left || !right) return;

        const ctx = gsap.context(() => {
            const storyCard = left.querySelector('.story-card');
            const ctaBlock = left.querySelector('.engagement-card, .about-cta');
            const stats = left.querySelectorAll('.stat-box');

            if (storyCard) {
                gsap.to(storyCard, {
                    scrollTrigger: { trigger: storyCard, start: 'top 85%', toggleActions: 'play none none none' },
                    opacity: 1, x: 0, duration: 0.9, ease: 'power2.out'
                });
            }

            if (ctaBlock) {
                gsap.to(ctaBlock, {
                    scrollTrigger: { trigger: ctaBlock, start: 'top 85%', toggleActions: 'play none none none' },
                    opacity: 1, y: 0, duration: 0.9, ease: 'power2.out'
                });
            }

            gsap.to(stats, {
                scrollTrigger: { trigger: stats[0], start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out'
            });

            const standardsCard = right.querySelector('.standards-card');
            const timelineItems = right.querySelectorAll('.timeline-item');

            if (standardsCard) {
                gsap.to(standardsCard, {
                    scrollTrigger: { trigger: standardsCard, start: 'top 85%', toggleActions: 'play none none none' },
                    opacity: 1, x: 0, duration: 0.9, ease: 'power2.out'
                });
            }

            if (timelineItems.length) {
                gsap.to(timelineItems, {
                    scrollTrigger: { trigger: timelineItems[0], start: 'top 85%', toggleActions: 'play none none none' },
                    opacity: 1, x: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out'
                });
            }
        }, left);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div className="about-page">
            <Helmet>
                <title>About | King Ayo — Technical Expertise for Business Growth</title>
                <meta name="description" content="Learn how King Ayo approaches building digital products — from architecture decisions to client engagement models — and why clients trust him to deliver." />
            </Helmet>

            <section className="about-hero">
                <Motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title gradient-text">Technical Expertise for Business Growth</h2>
                    <p className="hero-description">
                        I build digital systems that solve real business problems — clearly scoped,
                        carefully architected, and delivered with accountability.
                    </p>
                </Motion.div>

                <div className="about-content">
                    <div className="about-text-column" ref={leftRef}>
                        <Motion.div
                            className="glass-card story-card"
                            style={{ opacity: 0, transform: 'translateX(-30px)' }}
                            whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                        >
                            <h3>Results-First Engineering</h3>
                            <p>
                                I don't just write code; I design solutions for specific business goals.
                                Every project begins with an audit of the outcome you need.
                            </p>
                            <ul className="about-bullets" style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    'Architecture that scales without technical debt',
                                    'Scope management that ensures on-time delivery',
                                    'Focus on software that users actually use',
                                    'Technical transparency & documented progress'
                                ].map((bullet, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: 'var(--text-dim)' }}>
                                        <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </Motion.div>

                        <div className="stats-grid">
                            <Motion.div
                                className="glass-card stat-box"
                                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                                style={{ opacity: 0, transform: 'translateY(30px)' }}
                            >
                                <Award className="stat-icon" />
                                <h4>3+</h4>
                                <p>Systems Live</p>
                            </Motion.div>
                            <Motion.div
                                className="glass-card stat-box"
                                whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                                style={{ opacity: 0, transform: 'translateY(30px)' }}
                            >
                                <Globe className="stat-icon" />
                                <h4>100%</h4>
                                <p>Success Rate</p>
                            </Motion.div>
                            <Motion.div
                                className="glass-card stat-box"
                                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                                style={{ opacity: 0, transform: 'translateY(30px)' }}
                            >
                                <Briefcase className="stat-icon" />
                                <h4>24h</h4>
                                <p>Inquiry Response</p>
                            </Motion.div>
                        </div>

                        <Motion.div
                            className="glass-card about-cta"
                            style={{ padding: '28px', textAlign: 'center', marginTop: '8px', opacity: 0, transform: 'translateY(20px)' }}
                            whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                        >
                            <p style={{ color: 'var(--text-dim)', marginBottom: '16px', fontSize: '0.95rem' }}>
                                Ready to discuss your technical requirements?
                            </p>
                            <Link to="/contact" className="cta-primary" onClick={() => triggerHaptic(hapticPatterns.light)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Get a Technical Assessment <ArrowRight size={18} />
                            </Link>
                        </Motion.div>
                    </div>

                    <div className="about-details-column" ref={rightRef}>
                        <Motion.div
                            className="glass-card standards-card"
                            style={{ padding: '40px', marginBottom: '40px', border: '1px solid var(--primary-glow)', opacity: 0, transform: 'translateX(30px)' }}
                            whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                        >
                            <h3 style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Cpu size={24} /> Engineering Standards
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {[
                                    { title: "Defensive Architecture", desc: "Systems designed to handle edge cases and failures gracefully, ensuring 99.9% uptime for critical workflows." },
                                    { title: "Quality-First Deployment", desc: "I maintain strict adherence to 80%+ test coverage and automated CI/CD pipelines before any code hits production." },
                                    { title: "Documented Scalability", desc: "Every system includes comprehensive architecture documentation, making it easy for your internal teams to scale." }
                                ].map((s, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '6px' }}>{s.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: '1.5' }}>{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </Motion.div>
                        <h3 className="section-heading">Experience & Education</h3>
                        <div className="timeline">
                            <div className="timeline-line"></div>
                            {timeline.map((item, i) => (
                                <Motion.div
                                    key={i}
                                    className="timeline-item"
                                    style={{ opacity: 0, transform: 'translateX(30px)' }}
                                    whileHover={{ x: 5, borderColor: 'var(--accent)' }}
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
