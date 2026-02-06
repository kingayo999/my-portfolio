import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code2, Database, Cpu, Smartphone, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        { icon: <Code2 size={32} />, title: "Full-Stack Engineering", desc: "Architecting end-to-end solutions. React, Node.js, and Cloud Infrastructure designed for scale." },
        { icon: <Smartphone size={32} />, title: "Mobile Innovation", desc: "Native-quality iOS and Android experiences using React Native and modern animations." },
        { icon: <Database size={32} />, title: "Systems Architecture", desc: "Robust data design, API optimization, and secure backend ecosystems." },
        { icon: <Cpu size={32} />, title: "AI Integration", desc: "Building intelligent agents and implementing predictive models for business automation." }
    ];

    return (
        <div className="home-page">
            <Helmet>
                <title>KING. | Full-Stack Engineer & System Architect</title>
                <meta name="description" content="Portfolio of King, a Senior Full-Stack Engineer specializing in high-performance web applications." />
            </Helmet>

            <Hero />

            <section className="services-section" style={{ padding: 'var(--section-spacing) 5%', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 className="section-title gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Engineering Excellence</h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                        Delivering technical precision and creative innovation across the entire stack.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                    {services.map((s, i) => (
                        <Motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                            style={{ padding: '40px' }}
                        >
                            <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{s.icon}</div>
                            <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{s.desc}</p>
                        </Motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/about" className="cta-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        More About My Projects <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
