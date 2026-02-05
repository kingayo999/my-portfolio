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
                    <div className="about-hero-header">
                        <h2 className="section-title gradient-text">My Professional Journey</h2>
                        <p className="hero-description">
                            Transforming complex requirements into elegant, high-performance digital solutions.
                        </p>
                    </div>

                    <div className="about-grid">
                        <motion.div
                            className="about-story"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.2 } }
                            }}
                        >
                            <h3 className="about-title">The Story So Far</h3>
                            <motion.p
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                transition={{ duration: 0.8 }}
                                className="about-story-text"
                            >
                                My journey began with a fundamental fascination for solving complex puzzles through code. What started as exploring the building blocks of the web has evolved into a career dedicated to architecting high-stakes digital environments. I've spent years refining my craft, moving from individual contributor to a leadership role where I bridge the gap between technical possibility and business necessity.
                            </motion.p>
                            <motion.p
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                transition={{ duration: 0.8 }}
                                className="about-story-text"
                            >
                                I believe that great software isn't just about clean code—it's about empathy for the end-user and a deep understanding of the problem being solved. My methodology revolves around rigorous testing, performance optimization, and maintaining a high standard of accessibility, ensuring that every product I build is inclusive, fast, and future-proof.
                            </motion.p>
                            <motion.p
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                transition={{ duration: 0.8 }}
                                className="about-story-text"
                                style={{ marginBottom: '30px' }}
                            >
                                Today, I partner with forward-thinking companies to deliver digital products that don't just function—they thrive. Whether it's scaling a fintech platform to handle millions of transactions or building a premium brand experience, I bring a commitment to excellence that ensures long-term success and user loyalty.
                            </motion.p>

                            <div className="mastery-grid">
                                <motion.div
                                    className="mastery-card glass-card"
                                    whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                                    variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Award className="mastery-icon" />
                                    <h4 style={{ fontSize: '1.2rem' }}>100+</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Projects Completed</p>
                                </motion.div>
                                <motion.div
                                    className="mastery-card glass-card"
                                    whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                                    variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Briefcase className="mastery-icon" />
                                    <h4 style={{ fontSize: '1.2rem' }}>5+ Years</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Core Experience</p>
                                </motion.div>
                            </div>
                        </motion.div>

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
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.2 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="timeline-bullet"></div>
                                        <span className="timeline-year">{item.year}</span>
                                        <h4 className="timeline-title">{item.title}</h4>
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
