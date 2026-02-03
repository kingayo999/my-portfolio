import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO @ TechNova Solutions",
        text: "KING is a rare talent who combines deep architectural understanding with a fanatical attention to detail. He transformed our trading platform's performance, reducing latency by over 40%.",
        avatar: "SC"
    },
    {
        name: "James Wilson",
        role: "Product Director @ Creative Minds",
        text: "Working with KING was a game-changer for our agency. His ability to bridge the gap between complex backend systems and high-end frontend animations is unmatched in the industry.",
        avatar: "JW"
    },
    {
        name: "Elena Rodriguez",
        role: "Founder @ Digital Visionary",
        text: "Excellence is the standard for KING. He doesn't just deliver code; he delivers digital products that thrive and scale. A brilliant engineer and a dedicated leader.",
        avatar: "ER"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials" style={{ background: 'var(--accent-faint)', borderRadius: '40px', margin: '80px 20px', padding: '80px 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="section-title gradient-text">Industry Perspectives</h2>
                <p className="hero-description" style={{ margin: '0 auto' }}>
                    Hear from the leaders and teams I've partnered with to deliver excellence.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className="glass-card"
                        style={{ padding: '40px', position: 'relative' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        whileHover={{ y: -10 }}
                    >
                        <Quote size={40} style={{ color: 'var(--accent)', opacity: 0.2, position: 'absolute', top: '20px', left: '20px' }} />
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '30px', fontStyle: 'italic', position: 'relative', zIndex: 1, lineHeight: '1.7' }}>
                            "{t.text}"
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                {t.avatar}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{t.name}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{t.role}</p>
                            </div>
                            <motion.a
                                href="#"
                                style={{ marginLeft: 'auto', color: 'var(--text-dim)' }}
                                whileHover={{ color: 'var(--accent)', scale: 1.1 }}
                            >
                                <Linkedin size={18} />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
