import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
    {
        icon: <Search size={28} />,
        number: '01',
        title: 'Requirement Audit',
        desc: 'We start by turning your goals into a technical roadmap. We audit dependencies and architectural risks before any commitment is made.'
    },
    {
        icon: <PenTool size={28} />,
        number: '02',
        title: 'System Design',
        desc: 'I provide a full system architecture diagram and data flow model. You see exactly how the logic works before a line of code is written.'
    },
    {
        icon: <Code2 size={28} />,
        number: '03',
        title: 'Iterative Development',
        desc: 'Build happens in transparent cycles with daily technical logs and weekly live demos. You have 24/7 visibility into the source code.'
    },
    {
        icon: <Rocket size={28} />,
        number: '04',
        title: 'Launch & Support',
        desc: 'We deploy using automated CI/CD with a 30-day stability guarantee and documented scalability plan for your internal teams.'
    }
];

const Process = () => {
    return (
        <section className="process-section">
            <div className="process-inner">
                <div className="process-header">
                    <Motion.h2
                        className="section-title gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A Clear Process, No Surprises
                    </Motion.h2>
                    <Motion.p
                        className="process-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Every engagement follows the same structured approach — so you always know what's happening and what comes next.
                    </Motion.p>
                </div>

                <div className="process-steps">
                    {steps.map((step, i) => (
                        <Motion.div
                            key={i}
                            className="process-step glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            whileHover={{ y: -6, borderColor: 'var(--primary)' }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
