import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, MapPin, Phone, MessageSquare, Github, Linkedin, Twitter, CheckCircle2, HelpCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const processSteps = [
        { title: "Discovery", desc: "We deep-dive into your requirements, target audience, and business goals." },
        { title: "Strategy", desc: "Architecting the technical solution and user experience flow." },
        { title: "Execution", desc: "Rigorous development, testing, and deployment to production." }
    ];

    const faqs = [
        { q: "What is your typical project timeline?", a: "Most projects take 4-8 weeks depending on complexity and scope." },
        { q: "Do you offer post-launch support?", a: "Yes, I provide monthly maintenance and priority support packages." },
        { q: "How do we handle communication?", a: "I use Slack for daily updates and scheduled Zoom/Google Meet calls for milestones." }
    ];

    const sendEmail = (e) => {
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
                <h2 className="section-title gradient-text">Elevate Your Project</h2>
                <p className="hero-description" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    Ready to build something extraordinary? I'm currently accepting new projects and consulting engagements. Reach out to start the conversation.
                </p>
            </div>

            {/* Process Section */}
            <div style={{ marginBottom: '100px' }}>
                <h3 className="section-title" style={{ fontSize: '2rem' }}>The Collaborative Process</h3>
                <div className="process-grid">
                    {processSteps.map((step, i) => (
                        <div key={i} className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
                            <div style={{ color: 'var(--accent)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                                <CheckCircle2 size={32} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{step.title}</h4>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contact-container" style={{ marginBottom: '100px' }}>
                <div className="contact-info">
                    <div className="glass-card" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Contact Details</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-faint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '2px' }}>Email</h4>
                                        <p style={{ color: 'var(--text-dim)' }}>kingayo999@gmail.com</p>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>Responds within 24 hours</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-faint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '2px' }}>Chat</h4>
                                        <p style={{ color: 'var(--text-dim)' }}>WhatsApp, Slack, Discord</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-faint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '2px' }}>Location</h4>
                                        <p style={{ color: 'var(--text-dim)' }}>Remote / Global Timezones</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Social Profiles</h3>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                {[
                                    { icon: <Github size={20} />, link: "https://github.com/kingayo999" },
                                    { icon: <Linkedin size={20} />, link: "#" },
                                    { icon: <Twitter size={20} />, link: "#" }
                                ].map((social, i) => (
                                    <a key={i} href={social.link} target="_blank" rel="noopener noreferrer"
                                        style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'var(--accent-faint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', border: '1px solid var(--glass-border)', transition: '0.3s' }}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <form ref={form} className="contact-form glass-card" onSubmit={sendEmail} style={{ padding: '40px', maxWidth: 'none', margin: '0' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Project Inquiry</h3>
                    <div className="contact-form-grid" style={{ marginBottom: '20px' }}>
                        <input type="text" name="user_name" placeholder="Full Name" required />
                        <input type="email" name="user_email" placeholder="Email Address" required />
                    </div>
                    <input type="text" name="subject" placeholder="What are you building?" required style={{ marginBottom: '20px' }} />
                    <textarea name="message" placeholder="Tell me about your project goals, timeline, and budget..." rows="6" required style={{ marginBottom: '20px' }}></textarea>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '20px', textAlign: 'center' }}>
                        Your information is secure and will never be shared with third parties.
                    </p>
                    <button type="submit" className="cta-primary" disabled={isSending} style={{ width: '100%', justifyContent: 'center' }}>
                        {isSending ? 'Transmitting...' : 'Initiate Project Discussion'}
                    </button>
                </form>
            </div>

            {/* FAQ Section */}
            <div>
                <h3 className="section-title" style={{ fontSize: '2rem' }}>Frequently Asked Questions</h3>
                <div className="faq-grid">
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass-card" style={{ padding: '30px' }}>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <HelpCircle size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-main)' }}>{faq.q}</h4>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
