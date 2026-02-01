import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        // ... same logic
        e.preventDefault();
        setIsSending(true);

        const SERVICE_ID = 'service_ft2qsdk';
        const TEMPLATE_ID = 'template_npy8k92';
        const PUBLIC_KEY = 'SNdLBx8na24N7Gzpm';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
        })
            .then((result) => {
                toast.success('Message sent successfully!');
                setIsSending(false);
                form.current.reset();
            }, (error) => {
                toast.error('Failed to send message.');
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="contact">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 className="section-title gradient-text">Let's Connect</h2>
                <p className="hero-description" style={{ margin: '0 auto' }}>
                    Interested in working together? Reach out for a free consultation.
                </p>
            </div>

            <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '50px' }}>
                <div className="contact-info">
                    <div className="glass-card" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email Me</h4>
                                <p style={{ color: 'var(--text-dim)' }}>kingayo999@gmail.com</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Location</h4>
                                <p style={{ color: 'var(--text-dim)' }}>Global / Remote</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Let's Chat</h4>
                                <p style={{ color: 'var(--text-dim)' }}>Available on WhatsApp & Slack</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form ref={form} className="contact-form glass-card" onSubmit={sendEmail} style={{ padding: '40px', maxWidth: 'none', margin: '0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <input type="text" name="user_name" placeholder="Full Name" required />
                        <input type="email" name="user_email" placeholder="Email Address" required />
                    </div>
                    <input type="text" name="subject" placeholder="Project Subject" required style={{ marginBottom: '20px' }} />
                    <textarea name="message" placeholder="Project Description & Details" rows="6" required style={{ marginBottom: '20px' }}></textarea>
                    <button type="submit" className="cta-primary" disabled={isSending} style={{ width: '100%', justifyContent: 'center' }}>
                        {isSending ? 'Transmitting...' : 'Initiate Project'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
