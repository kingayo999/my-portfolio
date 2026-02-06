import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Footer.css';

const Footer = () => {
    const [vaultOpen, setVaultOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleSecretClick = () => {
        setClickCount(prev => prev + 1);
        if (clickCount + 1 === 5) {
            triggerHaptic(hapticPatterns.success);
            setVaultOpen(true);
            setClickCount(0);
        }
    };

    return (
        <footer className="footer-section">
            <AnimatePresence>
                {vaultOpen && (
                    <Motion.div
                        className="vault-modal"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <div className="glass-card vault-content">
                            <div className="vault-header">
                                <Unlock size={32} color="var(--accent)" />
                                <h3>Vault Access Granted</h3>
                            </div>
                            <p>You have discovered the secret developer capabilities.</p>
                            <p className="code-font">System Status: OPTIMAL</p>
                            <p className="code-font">Next Upgrade: PENDING</p>
                            <button onClick={() => setVaultOpen(false)} className="cta-secondary">Close Terminal</button>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>

            <div className="footer-container">


                <div className="footer-links">
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                        &copy; {new Date().getFullYear()} King Ayo. Engineered for Excellence.
                    </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
