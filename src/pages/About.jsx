import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
    const timeline = [
        { year: "2023 - Present", title: "Senior Developer", company: "Digital Visionary Studio", desc: "Leading a team of developers in building enterprise-scale React applications." },
        { year: "2021 - 2023", title: "Full Stack Engineer", company: "TechNova Solutions", desc: "Developed and maintained complex fintech dashboards and real-time trading platforms." },
        { year: "2019 - 2021", title: "Web Developer", company: "Creative Minds Agency", desc: "Crafted high-end marketing sites and e-commerce experiences for global brands." }
    ];

    const education = [
        { year: "2019", degree: "B.S. in Computer Science", school: "University of Technology" },
        { year: "2018", degree: "Full Stack Certification", school: "Advanced Coding Academy" }
    ];

    return (
        <div className="about-page">
            <Helmet>
                <title>About | KING - Crafting Excellence in Engineering</title>
                <meta name="description" content="Learn more about KING's journey, expertise in frontend and backend systems, and the collaborative process that drives digital success." />
            </Helmet>

            <section className="about-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 className="section-title gradient-text">My Professional Journey</h2>
                        <p className="hero-description" style={{ margin: '0 auto' }}>
                            Transforming complex requirements into elegant, high-performance digital solutions.
                        </p>
                    </div>

                    <div className="about-grid">
                        <div className="about-story">
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent)' }}>The Story So Far</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '20px', lineHeight: '1.7' }}>
                                My journey began with a fundamental fascination for solving complex puzzles through code. What started as exploring the building blocks of the web has evolved into a career dedicated to architecting high-stakes digital environments. I've spent years refining my craft, moving from individual contributor to a leadership role where I bridge the gap between technical possibility and business necessity.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '20px', lineHeight: '1.7' }}>
                                I believe that great software isn't just about clean code—it's about empathy for the end-user and a deep understanding of the problem being solved. My methodology revolves around rigorous testing, performance optimization, and maintaining a high standard of accessibility, ensuring that every product I build is inclusive, fast, and future-proof.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '30px', lineHeight: '1.7' }}>
                                Today, I partner with forward-thinking companies to deliver digital products that don't just function—they thrive. Whether it's scaling a fintech platform to handle millions of transactions or building a premium brand experience, I bring a commitment to excellence that ensures long-term success and user loyalty.
                            </p>

                            <div className="mastery-grid">
                                <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                                    <Award style={{ color: 'var(--accent)', marginBottom: '10px' }} />
                                    <h4 style={{ fontSize: '1.2rem' }}>100+</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Projects Completed</p>
                                </div>
                                <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                                    <Briefcase style={{ color: 'var(--accent)', marginBottom: '10px' }} />
                                    <h4 style={{ fontSize: '1.2rem' }}>5+ Years</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Core Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-container">
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--accent)' }}>Experience</h3>
                            <div className="timeline">
                                {timeline.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="timeline-item"
                                        style={{ marginBottom: '40px', position: 'relative' }}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div style={{ position: 'absolute', left: '-41px', top: '5px', width: '20px', height: '20px', background: 'var(--primary)', border: '2px solid var(--accent)', borderRadius: '50%' }}></div>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>{item.year}</span>
                                        <h4 style={{ fontSize: '1.3rem', margin: '5px 0' }}>{item.title}</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '5px' }}>{item.company}</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
