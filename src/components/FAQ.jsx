import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        q: 'How do you approach pricing?',
        a: "Every project is milestone-based. I provide a clear, fixed-price proposal before work begins — no hidden fees or hourly surprises. Phased billing is available for larger systems."
    },
    {
        q: 'Do you work with global clients?',
        a: "Yes. Fully remote with established communication practices that keep projects on track regardless of your timezone. No location friction."
    },
    {
        q: 'How long does a typical project take?',
        a: "A focused MVP typically takes 4 weeks. Complex full-stack systems take 8–12 weeks. You will have a fixed deadline and clear milestones from day one."
    },
    {
        q: "What if I'm not sure about the technical roadmap?",
        a: "That is exactly what the requirement audit is for. Reach out with a business goal, and I will recommend the technical path to get there before any commitment is made."
    },
    {
        q: 'What happens after the project launches?',
        a: "Every engagement includes a 30-day stability guarantee. Beyond that, I offer ongoing technical maintenance to ensure your system continues to scale."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="faq-section">
            <div className="faq-inner">
                <div className="faq-header">
                    <Motion.div
                        className="section-badge"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Common Questions
                    </Motion.div>
                    <Motion.h2
                        className="section-title gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Before You Reach Out
                    </Motion.h2>
                    <Motion.p
                        className="faq-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Answers to the questions most clients ask before starting a project.
                    </Motion.p>
                </div>

                <div className="faq-list">
                    {faqs.map((item, i) => (
                        <Motion.div
                            key={i}
                            className={`faq-item glass-card ${openIndex === i ? 'open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggle(i)}
                                aria-expanded={openIndex === i}
                            >
                                <span>{item.q}</span>
                                <Motion.span
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="faq-chevron"
                                >
                                    <ChevronDown size={20} />
                                </Motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <Motion.div
                                        className="faq-answer"
                                        key="answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                                    >
                                        <p>{item.a}</p>
                                    </Motion.div>
                                )}
                            </AnimatePresence>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
