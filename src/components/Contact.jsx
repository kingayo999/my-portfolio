import { motion as Motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        const SERVICE_ID = 'service_ft2qsdk';
        const TEMPLATE_ID = 'template_npy8k92';
        const PUBLIC_KEY = 'SNdLBx8na24N7Gzpm';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
            .then(() => {
                triggerHaptic(hapticPatterns.success);
                toast.success('Message sent!');
                setIsSending(false);
                setSubmitted(true);
                form.current.reset();
            }, () => {
                triggerHaptic(hapticPatterns.error);
                toast.error('Failed to send. Please try again.');
                setIsSending(false);
            });
    };

    return (
        <section className="contact-section">
            <div className="section-header">
                <h2 className="section-title gradient-text">Ready to Discuss Your Project?</h2>
                <p className="hero-description" style={{ maxWidth: '640px', margin: '0 auto' }}>
                    Whether you have a clear brief or just a business challenge, reach out.
                    I'll provide a technical assessment of your requirements before any
                    commitment is made.
                </p>
            </div>

            <div className="contact-grid">
                <div className="contact-methods">
                    {[
                        { icon: <Mail size={24} />, title: "Email", val: "olayanjuayobami89@gmail.com", sub: "Response within 24 hours", link: "mailto:olayanjuayobami89@gmail.com" },
                        { icon: <MessageSquare size={24} />, title: "WhatsApp", val: "+234 704 130 3372", sub: "Click to message directly", link: "https://wa.me/2347041303372" },
                        { icon: <MapPin size={24} />, title: "Availability", val: "Remote Worldwide", sub: "Open to projects · Any timezone" }
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
                            <a
                                href={m.link}
                                key={i}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                                onClick={() => triggerHaptic(hapticPatterns.light)}
                            >
                                {CardContent}
                            </a>
                        ) : CardContent;
                    })}

                    <div className="contact-next-steps glass-card">
                        <h4 style={{ marginBottom: '10px', fontSize: '0.95rem' }}>What happens after you send?</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                'I review your message within 24 hours',
                                'I reply with questions or a clear next step',
                                'No commitment until we both agree on scope'
                            ].map((step, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                                    <CheckCircle2 size={14} color="var(--accent)" style={{ flexShrink: 0 }} />
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {submitted ? (
                    <Motion.div
                        className="glass-card contact-form"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', textAlign: 'center', padding: '60px 40px' }}
                    >
                        <CheckCircle2 size={48} color="var(--accent)" />
                        <h3>Message received.</h3>
                        <p style={{ color: 'var(--text-dim)', maxWidth: '340px' }}>
                            I'll review your message and get back to you within 24 hours with a clear next step.
                        </p>
                        <button className="cta-secondary" onClick={() => setSubmitted(false)}>Send another message</button>
                    </Motion.div>
                ) : (
                    <Motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        className="glass-card contact-form"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="user_name">Full Name</label>
                                <input
                                    id="user_name"
                                    type="text"
                                    name="user_name"
                                    placeholder="e.g. John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_email">Email Address</label>
                                <input
                                    id="user_email"
                                    type="email"
                                    name="user_email"
                                    placeholder="e.g. john@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group full">
                            <label>Inquiry Type</label>
                            <select name="subject" defaultValue="General Inquiry">
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="New Project">New Project Proposal</option>
                                <option value="Technical Consultation">Technical Consultation</option>
                                <option value="Maintenance & Support">Maintenance & Support</option>
                                <option value="Ask a Question">Ask a Question</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                placeholder="Describe your challenge or goal — even a rough idea is fine."
                            ></textarea>
                        </div>

                        <Motion.button
                            type="submit"
                            className="cta-primary"
                            disabled={isSending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => triggerHaptic(hapticPatterns.light)}
                            style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                        >
                            {isSending ? 'Sending…' : <><Send size={18} /> Send Inquiry</>}
                        </Motion.button>
                        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-dim)', margin: '0' }}>
                            Technical response within 24 hours &middot; No obligations
                        </p>
                    </Motion.form>
                )}
            </div>
        </section>
    );
};

export default Contact;
