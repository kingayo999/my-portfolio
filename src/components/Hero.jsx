import { motion } from 'framer-motion';
import { ChevronRight, Github, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="badge-dot"></span>
                    Available for new projects
                </motion.div>

                <h1 className="hero-title">
                    I build <span className="gradient-text">high-performance</span> digital products.
                </h1>

                <p className="hero-description">
                    Senior Full-Stack Developer & UI/UX Designer. I specialize in crafting seamless web experiences that merge aesthetics with scalable technology.
                </p>

                <div className="hero-btns">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/projects" className="cta-primary">
                            Explore Work <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href="https://github.com/kingayo999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-secondary"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Github size={18} /> GitHub
                        </a>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link to="/contact" className="cta-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Send size={18} /> Let's Talk
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
