import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Layers, Cpu, Smartphone, Layout, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        {
            icon: <Layout size={32} />,
            title: "Conversion-Ready Web Apps",
            who: "For founders & startups",
            problem: "You have a product idea but no digital presence — or a site that doesn't generate leads.",
            outcome: "A fast, professional web application built to attract the right users and turn them into customers."
        },
        {
            icon: <Cpu size={32} />,
            title: "Backend Systems & APIs",
            who: "For growing teams",
            problem: "Your operations rely on manual work, spreadsheets, or disconnected tools that don't scale.",
            outcome: "Secure, scalable backend infrastructure and APIs that automate your workflows and support growth."
        },
        {
            icon: <Smartphone size={32} />,
            title: "UX-Focused Interfaces",
            who: "For businesses with existing products",
            problem: "Users drop off, complain about confusion, or simply don't complete the actions you need them to.",
            outcome: "Redesigned, responsive interfaces with clear flows, reduced friction, and measurable UX improvements."
        },
        {
            icon: <Layers size={32} />,
            title: "Full-Stack Integration",
            who: "For companies with broken digital tools",
            problem: "Your frontend, backend, and data systems don't communicate reliably or efficiently.",
            outcome: "End-to-end technical ownership — from database schema to UI — all delivered by one accountable builder."
        }
    ];

    return (
        <div className="home-page">
            <Helmet>
                <title>Ayobami Olayanju | Digital Products That Convert</title>
                <meta name="description" content="Full-stack digital product builder helping founders, startups, and teams worldwide build web products that attract users and drive results." />
            </Helmet>

            <Hero />

            {/* Services Section */}
            <section className="services-section" style={{ padding: 'var(--section-spacing) 5%' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <Motion.h2
                            className="section-title gradient-text"
                            style={{ fontSize: '2.5rem', marginBottom: '20px' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Solutions Designed Around Outcomes
                        </Motion.h2>
                        <Motion.p
                            style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Every project starts with understanding your business goal, not a technology checklist.
                        </Motion.p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        {services.map((s, i) => (
                            <Motion.div
                                key={i}
                                className="glass-card service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8, borderColor: 'var(--primary)' }}
                                style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '4px' }}>{s.icon}</div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{s.who}</span>
                                <h3 style={{ fontSize: '1.15rem', lineHeight: '1.3' }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', borderLeft: '2px solid var(--glass-border)', paddingLeft: '12px', margin: '4px 0' }}>
                                    <strong style={{ color: 'var(--text-main)' }}>The Problem:</strong> {s.problem}
                                </p>
                                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
                                    <strong style={{ color: 'var(--accent)' }}>The Outcome:</strong> {s.outcome}
                                </p>
                            </Motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Link to="/projects" className="cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                            See How I've Solved These Problems <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <Process />
            <Testimonials />
            <FAQ />
        </div>
    );
};

export default Home;
