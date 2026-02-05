import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code2, Database, Cpu, Smartphone } from 'lucide-react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

const Home = () => {






    return (
        <div className="home-page">
            <Helmet>
                <title>KING. | Full-Stack Engineer & System Architect</title>
                <meta name="description" content="Welcome to the portfolio of KING, a premium Full-Stack Engineer specializing in high-performance web applications, scalable backend architectures, and seamless mobile experiences." />
                <meta name="keywords" content="Full-Stack Engineer, React Developer, Node.js Expert, System Architect, UI/UX Design, Portfolio" />
            </Helmet>
            <Hero />

            <section className="tech-stack">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 className="section-title gradient-text">Expertise & Services</h2>
                    <p className="hero-description" style={{ margin: '0 auto' }}>
                        Leveraging cutting-edge technologies to build superior digital solutions.
                    </p>
                </div>

                <Motion.div
                    className="services-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.25
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px'
                    }}
                >
                    {[
                        { icon: <Code2 size={32} />, title: "Full-Stack engineering", desc: "Architecting end-to-end solutions with a focus on scalability and clean architecture." },
                        { icon: <Smartphone size={32} />, title: "Mobile Innovation", desc: "Crafting fluid, native-quality experiences for iOS and Android using modern frameworks." },
                        { icon: <Database size={32} />, title: "Systems Architecture", desc: "Designing robust backend ecosystems that handle high traffic and complex data flows." },
                        { icon: <Cpu size={32} />, title: "AI Integration", desc: "Implementing intelligent features and predictive models to drive business automation." }
                    ].map((service, i) => (
                        <Motion.div
                            key={i}
                            className="glass-card"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{
                                y: -10,
                                borderColor: 'var(--accent)',
                                boxShadow: '0 20px 40px rgba(0, 242, 255, 0.1)'
                            }}
                            style={{ padding: '40px', textAlign: 'center', transition: 'border-color 0.3s' }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>{service.desc}</p>
                        </Motion.div>
                    ))}
                </Motion.div>
            </section>

            <Testimonials />

            <section className="cta-banner" style={{ textAlign: 'center' }}>
                <div className="glass-card" style={{ padding: '80px 40px', background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.05) 0%, rgba(112, 0, 255, 0.05) 100%)' }}>
                    <h2 className="section-title" style={{ marginBottom: '20px' }}>Ready to elevate your project?</h2>
                    <p className="hero-description" style={{ marginBottom: '40px' }}>
                        Let's discuss how we can bring your vision to life with world-class engineering.
                    </p>
                    <Motion.button
                        className="cta-primary"
                        style={{ margin: '0 auto' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start a Conversation
                    </Motion.button>
                </div>
            </section>
        </div>
    );
};

export default Home;
