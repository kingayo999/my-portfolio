import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';

const responses = {
    greetings: ["Hello! I'm KingGPT, KING's digital twin. How can I help you today?", "Hi there! Looking for a top-tier engineer? You've come to the right place.", "Greetings! I can tell you about KING's experience, stack, or availability."],
    availability: ["KING is currently open to high-impact Senior/Staff roles or strategic consulting. You can reach him via the contact page!", "He's always looking for interesting challenges. Would you like to see his contact info?"],
    stack: ["KING specializes in React, Next.js, Node.js, and TypeScript. He also has deep expertise in PostgreSQL, Redis, and AWS/Docker.", "His core stack is built for performance: Vite + React + Framer Motion on the frontend, and scalable microservices on the backend."],
    experience: ["KING has over 5 years of core experience, recently leading teams at Digital Visionary Studio as a Senior Developer.", "He has built everything from fintech dashboards to real-time trading platforms and enterprise-scale React apps."],
    default: ["That's a great question! I'm still learning, but I can tell you about KING's tech stack, work experience, or availability.", "I'm not quite sure about that, but KING definitely is. Feel free to send him a message directly!"]
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Welcome! I'm KingGPT. Ask me anything about KING's work." }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        triggerHaptic(hapticPatterns.light);
        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Logic
        setTimeout(() => {
            const input = inputValue.toLowerCase();
            let replyText = "";

            if (input.includes('hello') || input.includes('hi')) replyText = responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
            else if (input.includes('availab') || input.includes('hiring') || input.includes('open')) replyText = responses.availability[Math.floor(Math.random() * responses.availability.length)];
            else if (input.includes('stack') || input.includes('tech') || input.includes('use')) replyText = responses.stack[Math.floor(Math.random() * responses.stack.length)];
            else if (input.includes('experience') || input.includes('work') || input.includes('history')) replyText = responses.experience[Math.floor(Math.random() * responses.experience.length)];
            else replyText = responses.default[Math.floor(Math.random() * responses.default.length)];

            triggerHaptic(hapticPatterns.notification);
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: replyText }]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="glass-card"
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'var(--primary)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px var(--accent-glow)',
                    cursor: 'pointer'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="glass-card"
                        style={{
                            position: 'absolute',
                            bottom: '80px',
                            right: 0,
                            width: '350px',
                            height: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            border: '1px solid var(--accent-semi)',
                            padding: 0
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '20px', background: 'var(--accent-faint)', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff3b3b', boxShadow: '0 0 10px #ff3b3b' }}></div>
                            <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>KingGPT</span>
                            <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>AI Engine v1.0</span>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {messages.map(msg => (
                                <div key={msg.id} style={{ alignSelf: msg.type === 'bot' ? 'flex-start' : 'flex-end', maxWidth: '80%' }}>
                                    <div style={{
                                        padding: '12px 16px',
                                        borderRadius: msg.type === 'bot' ? '20px 20px 20px 4px' : '20px 20px 4px 20px',
                                        background: msg.type === 'bot' ? 'var(--secondary)' : 'var(--accent)',
                                        color: msg.type === 'bot' ? 'var(--text-main)' : 'var(--primary)',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.4'
                                    }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div style={{ alignSelf: 'flex-start', background: 'var(--secondary)', padding: '10px 15px', borderRadius: '15px' }}>
                                    <motion.div
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}
                                    >
                                        Bot is thinking...
                                    </motion.div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div style={{ padding: '20px', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '10px' }}>
                            <input
                                type="text"
                                placeholder="Ask about King..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                style={{
                                    flex: 1,
                                    background: 'var(--secondary)',
                                    border: '1px solid var(--glass-border)',
                                    padding: '10px 15px',
                                    borderRadius: '10px',
                                    color: 'var(--text-main)',
                                    outline: 'none'
                                }}
                            />
                            <button
                                onClick={handleSend}
                                style={{
                                    background: 'var(--accent)',
                                    color: 'var(--primary)',
                                    border: 'none',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
