import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact | King Ayo</title>
                <meta name="description" content="Get in touch with King Ayo for web development projects and consulting." />
            </Helmet>
            <Contact />
        </div>
    );
};

export default ContactPage;
