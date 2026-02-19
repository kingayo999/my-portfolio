import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Quote, Globe } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "The system Ayobami built replaced three separate spreadsheets and a manual review process. Since launch, our team saves hours each week and errors have dropped significantly.",
        author: "Operations Lead",
        company: "Tech-Enabled Education Platform",
        region: "West Africa"
    },
    {
        quote: "He understood the brief quickly, asked the right questions, and delivered something we couldn't have built in-house at this quality. The entire project was handled remotely without friction.",
        author: "Co-Founder",
        company: "Early-Stage SaaS Startup",
        region: "Europe"
    },
    {
        quote: "What impressed me most was the thinking behind the decisions — not just the code. He explained trade-offs clearly and made the right calls when requirements were ambiguous.",
        author: "Product Manager",
        company: "Digital Agency",
        region: "North America"
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
                    <Motion.div
                        className="global-statement"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Globe size={16} />
                        <span>Working with clients across Africa, Europe, and North America — fully remote, zero friction.</span>
                    </Motion.div>
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
