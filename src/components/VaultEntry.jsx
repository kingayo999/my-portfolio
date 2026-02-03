import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, ShieldCheck, Lock, Unlock } from 'lucide-react';

const VaultEntry = ({ onAccessGranted }) => {
    const [status, setStatus] = useState('initial'); // initial, scanning, granted
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (status === 'scanning') {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setStatus('granted'), 500);
                        setTimeout(() => onAccessGranted(), 2000);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 30);
            return () => clearInterval(interval);
        }
    }, [status, onAccessGranted]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#030408',
                zIndex: 10000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontFamily: "'Courier New', Courier, monospace"
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div style={{ maxWidth: '400px', width: '100%', padding: '20px', textAlign: 'center' }}>
                <AnimatePresence mode="wait">
                    {status === 'initial' && (
                        <motion.div
                            key="initial"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Lock size={64} style={{ marginBottom: '30px', opacity: 0.8 }} />
                            <h2 style={{ fontSize: '1.2rem', letterSpacing: '4px', marginBottom: '20px' }}>ENCRYPTED VAULT</h2>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '40px' }}>IDENTITY VERIFICATION REQUIRED</p>
                            <motion.button
                                onClick={() => setStatus('scanning')}
                                whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--accent)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid var(--accent)',
                                    color: 'var(--accent)',
                                    padding: '15px 40px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    letterSpacing: '2px',
                                    borderRadius: '4px'
                                }}
                            >
                                INITIATE SCAN
                            </motion.button>
                        </motion.div>
                    )}

                    {status === 'scanning' && (
                        <motion.div
                            key="scanning"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 40px' }}>
                                <Fingerprint size={120} style={{ opacity: 0.3 }} />
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--accent)',
                                        boxShadow: '0 0 15px var(--accent)'
                                    }}
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                                />
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', height: '4px', borderRadius: '2px', overflow: 'hidden', marginBottom: '20px' }}>
                                <motion.div
                                    style={{ height: '100%', background: 'var(--accent)', width: `${progress}%`, boxShadow: '0 0 10px var(--accent)' }}
                                />
                            </div>
                            <p style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>SCANNING BIOMETRICS: {progress}%</p>
                        </motion.div>
                    )}

                    {status === 'granted' && (
                        <motion.div
                            key="granted"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <ShieldCheck size={80} style={{ color: '#00ff41', marginBottom: '30px' }} />
                            <h2 style={{ color: '#00ff41', fontSize: '1.5rem', letterSpacing: '6px', marginBottom: '10px' }}>ACCESS GRANTED</h2>
                            <p style={{ color: '#00ff41', opacity: 0.8, fontSize: '0.8rem' }}>WELCOME, COMMANDER KING</p>

                            <motion.div
                                style={{ marginTop: '40px', textAlign: 'left', fontSize: '0.7rem', opacity: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>{">"} decrypting_portfolio_v2.0...</p>
                                <p>{">"} bypassing_security_protocols...</p>
                                <p>{">"} initializing_ux_engine...</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default VaultEntry;
