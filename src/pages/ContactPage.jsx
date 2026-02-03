import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact | KING - Let's Engineer Something Extraordinary</title>
                <meta name="description" content="Reach out to KING for high-stakes engineering projects, system architecture consulting, or full-stack development. Available for remote collaboration." />
            </Helmet>
            <div style={{ textAlign: 'center', paddingTop: '100px' }}>
                <h2 className="section-title gradient-text">Let's Build Something Great</h2>
                <p className="hero-description" style={{ marginBottom: '50px' }}>
                    Available for freelance projects and full-time opportunities.
                </p>
            </div>
            <Contact />
        </div>
    );
};

export default ContactPage;
