import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, ShieldCheck, Lock, Unlock } from 'lucide-react';
import './VaultEntry.css';

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
        <Motion.div
            className="vault-entry-overlay"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div className="vault-entry-container">
                <AnimatePresence mode="wait">
                    {status === 'initial' && (
                        <Motion.div
                            key="initial"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Lock size={64} style={{ marginBottom: '30px', opacity: 0.8 }} />
                            <h2 style={{ fontSize: '1.2rem', letterSpacing: '4px', marginBottom: '20px' }}>ENCRYPTED VAULT</h2>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '40px' }}>IDENTITY VERIFICATION REQUIRED</p>
                            <Motion.button
                                onClick={() => setStatus('scanning')}
                                whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--accent)' }}
                                whileTap={{ scale: 0.95 }}
                                className="vault-scan-btn"
                            >
                                INITIATE SCAN
                            </Motion.button>
                        </Motion.div>
                    )}

                    {status === 'scanning' && (
                        <Motion.div
                            key="scanning"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 40px' }}>
                                <Fingerprint size={120} style={{ opacity: 0.3 }} />
                                <Motion.div
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
                            <div className="vault-progress-bg">
                                <Motion.div
                                    className="vault-progress-bar"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <p style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>SCANNING BIOMETRICS: {progress}%</p>
                        </Motion.div>
                    )}

                    {status === 'granted' && (
                        <Motion.div
                            key="granted"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <ShieldCheck size={80} style={{ color: '#00ff41', marginBottom: '30px' }} />
                            <h2 style={{ color: '#00ff41', fontSize: '1.5rem', letterSpacing: '6px', marginBottom: '10px' }}>ACCESS GRANTED</h2>
                            <p style={{ color: '#00ff41', opacity: 0.8, fontSize: '0.8rem' }}>WELCOME, COMMANDER KING</p>

                            <Motion.div
                                className="vault-logs"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p>{">"} decrypting_portfolio_v2.0...</p>
                                <p>{">"} bypassing_security_protocols...</p>
                                <p>{">"} initializing_ux_engine...</p>
                            </Motion.div>
                        </Motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Motion.div>
    );
};

export default VaultEntry;
