import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Nexus E-Commerce',
            category: 'Web Application',
            desc: 'A premium, high-conversion e-commerce ecosystem featuring real-time inventory management across global warehouses and AI-driven personalized product recommendations that increased average order value by 20%.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
            link: '#'
        },
        {
            title: 'Visionary CRM',
            category: 'Enterprise Solutions',
            desc: 'A next-generation customer relationship management platform designed for scale. It integrates advanced predictive analytics and automated workflow engines to streamline enterprise operations and data-driven decision making.',
            tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
            link: '#'
        },
        {
            title: 'Athletix Pro',
            category: 'Mobile First',
            desc: 'A high-performance sports performance tracking application. Engineered for sub-millisecond live data synchronization across devices, providing elite athletes with real-time biometric feedback and performance metrics.',
            tech: ['React Native', 'Firebase', 'Redux', 'External API'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2 className="section-title gradient-text">Featured Masterpieces</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className="project-card glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.8,
                            delay: i * 0.2,
                            ease: [0.215, 0.61, 0.355, 1]
                        }}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                        <motion.div
                            style={{ height: '200px', background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.1) 0%, rgba(112, 0, 255, 0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Layers size={48} style={{ color: 'var(--accent)', opacity: 0.5 }} />
                        </motion.div>
                        <div style={{ padding: '30px' }}>
                            <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{p.category}</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-dim)', marginBottom: '20px', lineHeight: '1.6' }}>{p.desc}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                                {p.tech.map(t => <span key={t} style={{ color: 'var(--text-main)', fontSize: '0.75rem', background: 'var(--accent-faint)', padding: '5px 12px', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>{t}</span>)}
                            </div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href={p.link}
                                    className="cta-secondary"
                                    style={{ padding: '10px 20px', fontSize: '0.9rem', flex: 1, textAlign: 'center' }}
                                >
                                    Live View
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://github.com/kingayo999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--glass-border)' }}
                                >
                                    <Github size={18} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
