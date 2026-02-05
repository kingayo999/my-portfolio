import { motion as Motion } from 'framer-motion';
import { ChevronRight, Github, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <Motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="badge-dot"></span>
                    Available for new projects
                </Motion.div>

                <h1 className="hero-title">
                    Turning Visionary Ideas into <span className="gradient-text">Scalable Digital Realities</span>.
                </h1>

                <p className="hero-description">
                    Senior Full-Stack Engineer & Digital Architect. I specialize in designing and engineering high-performance web applications that drive business growth through technical excellence and user-centric design.
                </p>

                <div className="hero-btns">
                    <Motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/projects" className="cta-primary">
                            Explore Work <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </Motion.div>

                    <Motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href="https://github.com/kingayo999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-secondary"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Github size={18} /> GitHub
                        </a>
                    </Motion.div>

                    <Motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/contact" className="cta-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Send size={18} /> Let's Talk
                        </Link>
                    </Motion.div>
                </div>
            </Motion.div>
        </section>
    );
};

export default Hero;
