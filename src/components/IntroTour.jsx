import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, HelpCircle } from 'lucide-react';

const tourSteps = [
    {
        target: '.nav-links',
        title: 'Seamless Navigation',
        content: 'Explore my journey, projects, and contact info through our cinematic page transitions.'
    },
    {
        target: '.projects-grid',
        title: 'Featured Masterpieces',
        content: 'Check out my latest work with in-depth case studies for every project.'
    },
    {
        target: '.theme-toggle',
        title: 'Custom Environments',
        content: 'Switch between Dark, Light, Matrix, and Cyberpunk modes to suit your vibe.'
    },
    {
        target: '.glass-card button',
        title: 'AI Assistant',
        content: 'Have questions? KingGPT is always here to provide instant answers about my work.'
    }
];

const IntroTour = () => {
    const [step, setStep] = useState(-1);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenTour = localStorage.getItem('has_seen_tour');
        if (!hasSeenTour) {
            const timer = setTimeout(() => {
                setStep(0);
                setIsVisible(true);
            }, 3000); // Start tour after 3 seconds on first visit
            return () => clearTimeout(timer);
        }
    }, []);

    const nextStep = () => {
        if (step < tourSteps.length - 1) {
            setStep(step + 1);
        } else {
            completeTour();
        }
    };

    const completeTour = () => {
        setIsVisible(false);
        localStorage.setItem('has_seen_tour', 'true');
    };

    const startManualTour = () => {
        setStep(0);
        setIsVisible(true);
    };

    return (
        <>
            {/* Manual Trigger in Footer could use this if we export it or use a global state, 
                but for now let-s keep it simple with an internal trigger or event listener */}
            <AnimatePresence>
                {isVisible && step >= 0 && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)', pointerEvents: 'auto' }}
                            onClick={completeTour}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="glass-card"
                            style={{
                                position: 'fixed',
                                bottom: '100px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 'min(400px, 90vw)',
                                padding: '30px',
                                pointerEvents: 'auto',
                                border: '1px solid var(--accent)',
                                boxShadow: '0 0 30px var(--accent-glow)'
                            }}
                        >
                            <button
                                onClick={completeTour}
                                style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
                            >
                                <X size={20} />
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                <HelpCircle size={20} style={{ color: 'var(--accent)' }} />
                                <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>
                                    Guide {step + 1}/{tourSteps.length}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{tourSteps[step].title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '25px', lineHeight: '1.6' }}>
                                {tourSteps[step].content}
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <motion.button
                                    onClick={nextStep}
                                    whileHover={{ x: 5 }}
                                    style={{
                                        background: 'var(--accent)',
                                        color: 'var(--primary)',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontWeight: '600',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {step === tourSteps.length - 1 ? 'Finish' : 'Next'} <ChevronRight size={18} />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default IntroTour;
