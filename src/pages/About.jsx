import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

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
        <section className="about-page">
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

                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                    <div className="about-story">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent)' }}>The Story So Far</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '20px' }}>
                            I started my journey with a simple goal: to build things that matter. Over the years, I've evolved from a curious coder to a senior developer, mastering the art of building scalable, performant applications.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '30px' }}>
                            My approach combines technical excellence with a deep understanding of user experience. I don't just write code; I craft digital products that drive business growth and user satisfaction.
                        </p>

                        <div className="mastery-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
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
                        <div className="timeline" style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '30px', position: 'relative' }}>
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
    );
};

export default About;
