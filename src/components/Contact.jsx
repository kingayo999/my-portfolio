import { motion as Motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        // Replace with your keys
        const SERVICE_ID = 'service_ft2qsdk';
        const TEMPLATE_ID = 'template_npy8k92';
        const PUBLIC_KEY = 'SNdLBx8na24N7Gzpm';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
            .then(() => {
                toast.success('Message sent successfully!');
                setIsSending(false);
                form.current.reset();
            }, () => {
                toast.error('Failed to send message. Please try again.');
                setIsSending(false);
            });
    };

    return (
        <section className="contact-section">
            <div className="section-header">
                <h2 className="section-title gradient-text">Let's Work Together</h2>
                <p className="hero-description" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    I'm a full-stack developer specializing in building modern web applications with React, Node.js, and TypeScript.
                    Whether you need a complete web application, API development, or technical consulting, I'm here to help bring
                    your vision to life. Let's create something amazing together.
                </p>
            </div>

            <div className="contact-grid">
                <div className="contact-methods">
                    {[
                        { icon: <Mail size={24} />, title: "Email", val: "olayanjuayobami89@gmail.com", sub: "Response within 24 hours", link: "mailto:olayanjuayobami89@gmail.com" },
                        { icon: <Phone size={24} />, title: "WhatsApp", val: "+234 912 410 5018", sub: "Click to message", link: "https://wa.me/2349124105018" },
                        { icon: <MapPin size={24} />, title: "Availability", val: "Remote Worldwide", sub: "Open to projects • Any timezone" }
                    ].map((m, i) => {
                        const CardContent = (
                            <Motion.div
                                key={i}
                                className={`glass-card method-card ${m.link ? 'clickable' : ''}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 5, borderColor: 'var(--accent)' }}
                            >
                                <div className="method-icon">{m.icon}</div>
                                <div>
                                    <h4>{m.title}</h4>
                                    <p className="method-val">{m.val}</p>
                                    <p className="method-sub">{m.sub}</p>
                                </div>
                            </Motion.div>
                        );

                        return m.link ? (
                            <a href={m.link} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {CardContent}
                            </a>
                        ) : CardContent;
                    })}
                </div>

                <Motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="glass-card contact-form"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="form-group">
                        <label className={focusedField === 'name' ? 'active' : ''}>Full Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>
                    <div className="form-group">
                        <label className={focusedField === 'email' ? 'active' : ''}>Email Address</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>
                    <div className="form-group full">
                        <label className={focusedField === 'message' ? 'active' : ''}>Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                        ></textarea>
                    </div>

                    <Motion.button
                        type="submit"
                        className="cta-primary"
                        disabled={isSending}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                    >
                        {isSending ? 'Sending...' : <><Send size={18} /> Send Message</>}
                    </Motion.button>
                </Motion.form>
            </div>
        </section>
    );
};

export default Contact;
