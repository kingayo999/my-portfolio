import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code2, Database, Cpu, Smartphone, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        { icon: <Code2 size={32} />, title: "Frontend Development", desc: "Building responsive, accessible user interfaces using React and modern CSS frameworks." },
        { icon: <Database size={32} />, title: "Backend Systems", desc: "Developing secure REST APIs and database structures with Node.js and PostgreSQL." },
        { icon: <Smartphone size={32} />, title: "Mobile Exploration", desc: "Prototyping cross-platform mobile experiences using React Native and Firebase." },
        { icon: <Cpu size={32} />, title: "Technical Fundamentals", desc: "Applying computer engineering principles to write clean, maintainable, and efficient code." }
    ];

    return (
        <div className="home-page">
            <Helmet>
                <title>KING. | Full-Stack Developer</title>
                <meta name="description" content="Portfolio of King, a Full-Stack Developer and Computer Engineering student specializing in robust web systems." />
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
