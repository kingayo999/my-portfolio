import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Crown, Rocket } from 'lucide-react';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Services.css';

const services = [
    {
        id: 'starter',
        icon: <Zap size={32} />,
        name: 'Starter',
        tagline: 'Landing Page + MVP',
        price: '₦150,000+',
        priceUSD: '~$100+',
        timeline: '1–3 weeks',
        who: 'For founders, creators, and small businesses in Nigeria',
        problem: 'You need a digital presence to attract customers or validate an idea quickly.',
        deliverables: [
            'Conversion-ready landing page or lightweight web app',
            'Mobile-first design with your branding',
            'WhatsApp or email lead capture built in',
            '1 revision round before launch'
        ],
        note: 'Great for startups, small brands, or personal projects that need to look professional fast.'
    },
    {
        id: 'pro',
        icon: <Rocket size={32} />,
        name: 'Pro',
        tagline: 'Full-Stack System',
        price: '₦800,000+',
        priceUSD: '~$500+',
        timeline: '2–5 weeks',
        who: 'For growing businesses and teams ready to automate',
        problem: 'Your operations run on spreadsheets, manual work, or disconnected tools.',
        deliverables: [
            'Full-stack web app with admin dashboard',
            'Database design and API setup',
            'Login access and role management',
            'Deployment, documentation, and 30 days support'
        ],
        note: 'Best for businesses ready to replace manual work with something reliable and maintainable.'
    },
    {
        id: 'enterprise',
        icon: <Crown size={32} />,
        name: 'Enterprise',
        tagline: 'Custom Platform',
        price: '₦2,500,000+',
        priceUSD: '~$1,500+',
        timeline: '4–10 weeks',
        who: 'For companies with complex operations or multi-user needs',
        problem: 'Your tools do not talk to each other and growth is slowing you down.',
        deliverables: [
            'Custom architecture built for your exact workflow',
            'Security, roles, and audit-ready design',
            'CI/CD setup and performance monitoring',
            'Dedicated consultation through the entire build'
        ],
        note: 'For established teams that need robust infrastructure and long-term control.'
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <Helmet>
                <title>Services | King Ayo — Engagement Models</title>
                <meta name="description" content="Transparent engagement models for web development, backend systems, and full-stack integration. Scale your business with clear deliverables and timelines." />
            </Helmet>

            <section className="services-hero">
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="services-header"
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h2 className="section-title gradient-text">Engagement Models</h2>
                    <p className="hero-description" style={{ maxWidth: '640px', margin: '0 auto' }}>
                        Flexible pricing to fit the scope of what you need built.
                        Every project starts with a quick assessment of your goal and budget.
                    </p>
                </Motion.div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <Motion.div
                            key={s.id}
                            className="service-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -8, borderColor: 'var(--accent)' }}
                            style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                                <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '12px' }}>{s.icon}
                                    <div>
                                        <h3 style={{ fontSize: '1.4rem', lineHeight: '1.2' }}>{s.name}</h3>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{s.tagline}</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                    <span className="price-tag">{s.price}</span>
                                    {s.priceUSD && (
                                        <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', opacity: 0.85 }}>{s.priceUSD}</span>
                                    )}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                                    <strong style={{ color: 'var(--text-main)' }}>Timeline:</strong> {s.timeline}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                                    <strong style={{ color: 'var(--text-main)' }}>Best for:</strong> {s.who}
                                </div>
                            </div>

                            <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '16px', margin: '8px 0' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: '1.5' }}>
                                    <strong style={{ color: 'var(--text-main)' }}>The Problem:</strong> {s.problem}
                                </p>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {s.deliverables.map((d, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-dim)' }}>
                                        <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                        {d}
                                    </li>
                                ))}
                            </ul>

                            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontStyle: 'italic', margin: '8px 0 0' }}>
                                {s.note}
                            </p>

                            <Link
                                to="/contact"
                                className="cta-primary"
                                onClick={() => triggerHaptic(hapticPatterns.light)}
                                style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                            >
                                Start a Conversation <ArrowRight size={18} />
                            </Link>
                        </Motion.div>
                    ))}
                </div>

                <Motion.div
                    className="glass-card"
                    style={{ marginTop: '80px', padding: '50px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', border: '1px solid var(--accent-glow)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>Not sure which path fits?</h3>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
                        Every project starts with a technical assessment. I review your requirements
                        and propose the right engagement model — no upfront cost.
                    </p>
                    <Link to="/contact" className="cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        Get a Technical Assessment <ArrowRight size={18} />
                    </Link>
                </Motion.div>
            </section>
        </div>
    );
};

export default Services;
