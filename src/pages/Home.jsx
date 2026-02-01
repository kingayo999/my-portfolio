import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Smartphone } from 'lucide-react';
import Hero from '../components/Hero';

const Home = () => {
    const skills = [
        { icon: <Code2 size={24} />, title: "Frontend", desc: "React, Next.js, Framer Motion" },
        { icon: <Database size={24} />, title: "Backend", desc: "Node.js, PostgreSQL, Redis" },
        { icon: <Cpu size={24} />, title: "System Design", desc: "Architecture & Scalability" },
        { icon: <Smartphone size={24} />, title: "Mobile", desc: "React Native, Responsive UI" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="home-page">
            <Hero />

            <section className="tech-stack">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 className="section-title gradient-text">Expertise & Services</h2>
                    <p className="hero-description" style={{ margin: '0 auto' }}>
                        Leveraging cutting-edge technologies to build superior digital solutions.
                    </p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px'
                    }}
                >
                    {skills.map((skill, i) => (
                        <motion.div key={i} className="glass-card" variants={item} style={{ padding: '40px' }}>
                            <div style={{ color: 'var(--accent)', marginBottom: '20px' }}>{skill.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{skill.title}</h3>
                            <p style={{ color: 'var(--text-dim)' }}>{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="cta-banner" style={{ textAlign: 'center' }}>
                <div className="glass-card" style={{ padding: '80px 40px', background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.05) 0%, rgba(112, 0, 255, 0.05) 100%)' }}>
                    <h2 className="section-title" style={{ marginBottom: '20px' }}>Ready to elevate your project?</h2>
                    <p className="hero-description" style={{ marginBottom: '40px' }}>
                        Let's discuss how we can bring your vision to life with world-class engineering.
                    </p>
                    <motion.button
                        className="cta-primary"
                        style={{ margin: '0 auto' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start a Conversation
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Home;
