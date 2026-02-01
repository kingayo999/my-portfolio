import { Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass-card">
            <div className="footer-content section-container">
                <div className="footer-brand">
                    <h2 className="logo gradient-text">KING.</h2>
                    <p>Building high-performance digital products for modern brands.</p>
                </div>

                <div className="footer-links">
                    <div className="social-links">
                        <a href="https://github.com/kingayo999" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={20} />
                        </a>
                        <a href="#" className="social-icon">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="social-icon">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} KING. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
