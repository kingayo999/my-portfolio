import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "The clarity King Ayo brought to our platform changed how we serve our clients. Professional, responsive, and technically sharp.",
        author: "Omotola Adesoye",
        company: "PR Strategist",
        region: "West Africa"
    },
    {
        quote: "From concept to deployment, the process was straightforward and the result speaks for itself. Highly recommended for serious founders.",
        author: "Simon Obeya",
        company: "CEO, Midas Touch",
        region: "West Africa"
    },
    {
        quote: "He doesn't just build what you ask for, he improves what you couldn't articulate. That perspective makes the difference.",
        author: "Ayuba Mohammed",
        company: "Mentor",
        region: "West Africa"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-inner">
                <div className="testimonials-header">
                    <Motion.h2
                        className="section-title gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Results That Speak
                    </Motion.h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <Motion.div
                            key={i}
                            className="testimonial-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            whileHover={{ y: -6, borderColor: 'var(--accent)' }}
                        >
                            <Quote size={24} className="quote-icon" />
                            <p className="testimonial-quote">"{t.quote}"</p>
                            <div className="testimonial-meta">
                                <div className="testimonial-avatar">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="testimonial-author">{t.author}</p>
                                    <p className="testimonial-company">{t.company}</p>
                                    <p className="testimonial-region">{t.region}</p>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
