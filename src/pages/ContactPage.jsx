import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="contact-page">
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
