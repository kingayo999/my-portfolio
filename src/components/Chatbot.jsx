import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import './Chatbot.css';

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
        <div className="chatbot-container">
            <Motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="chatbot-toggle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </Motion.button>

            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="glass-card chatbot-window"
                    >
                        {/* Header */}
                        <div className="chatbot-header">
                            <div className="chatbot-status-dot"></div>
                            <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>KingGPT</span>
                            <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>AI Engine v1.0</span>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="chatbot-messages">
                            {messages.map(msg => (
                                <div key={msg.id} className={`message-bubble ${msg.type === 'bot' ? 'message-bot' : 'message-user'}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div style={{ alignSelf: 'flex-start', background: 'var(--secondary)', padding: '10px 15px', borderRadius: '15px' }}>
                                    <Motion.div
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}
                                    >
                                        Bot is thinking...
                                    </Motion.div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="chatbot-input-area">
                            <input
                                type="text"
                                placeholder="Ask about King..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                className="chatbot-input"
                            />
                            <button
                                onClick={handleSend}
                                className="chatbot-send-btn"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
