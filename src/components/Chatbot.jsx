import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { triggerHaptic, hapticPatterns } from '../utils/haptics';
import { projectsData } from '../data/projectsData';
import './Chatbot.css';

// K-OS Persona Knowledge Base
const knowledgeBase = [
    {
        patterns: [/hi\b/, /hello\b/, /greetings\b/, /hey\b/, /wassup\b/, /good day\b/],
        responses: [
            { text: "System Online. Greetings, User." },
            { text: "KingGPT Protocol Active. How may I assist?" },
            { text: "Connection established. Welcome to the website." }
        ]
    },
    {
        patterns: [/who are you\b/, /what are you\b/, /bot\b/],
        responses: [
            { text: "I am KingGPT, a digital assistant designed to navigate King Ayo's portfolio." },
            { text: "I am the digital construct of this portfolio, here to guide you through projects and skills." },
            { text: "Identity: KingGPT. Function: Assistant. Status: Operational." }
        ]
    },
    {
        patterns: [/help\b/, /commands\b/, /menu\b/, /what can you do\b/],
        responses: [
            { text: "Commands available: 'Navigate to Projects', 'View Contact Info', 'Check Availability', 'Show Skills'. You can also ask about specific projects." },
            { text: "I can guide you to pages, explain projects, or provide contact details. Try asking 'Show me the works'." },
            { text: "Supported inputs: Navigation requests, project queries, and general identity questions." }
        ]
    },
    {
        patterns: [/skill/, /stack/, /tech/, /technologies/],
        responses: [
            { text: "King Ayo is proficient in React, Node.js, TypeScript, and modern web architectures. Access the 'About' section for a full diagnostic." },
            { text: "Core Systems: React, Framer Motion, Node.js. Secondary Systems: Python, SQL. Scan the About page for details." },
            { text: "Technological capabilities include Frontend Engineering (React) and Backend Systems (Node.js)." }
        ]
    },
    {
        patterns: [/hire/, /job/, /work with/, /service/, /freelance/],
        responses: [
            { text: "Availability status: OPEN. Initiating business protocols. Please visit the Contact page." },
            { text: "King Ayo is currently accepting new directives. Navigate to 'Contact' to propose a collaboration." },
            { text: "For professional inquiries, please execute the Contact protocol." }
        ]
    },
    {
        patterns: [/resume/, /cv\b/, /download/],
        responses: [
            { text: "Resume data located. Initiating download sequence.", link: "./Ayobami Olayanju Resume.pdf", linkText: "Download Resume PDF", download: true },
            { text: "You can download the full CV using the link below.", link: "./Ayobami Olayanju Resume.pdf", linkText: "Access Resume", download: true }
        ]
    },
    {
        patterns: [/status/, /system/, /condition/],
        responses: [
            { text: "All systems nominal. UI operating at peak efficiency." },
            { text: "Performance: Optimal. Haptic feedback: Engaged. Animations: Fluid." },
            { text: "System integrity: 100%. Ready for user input." }
        ]
    }
];

const getRandomResponse = (responses) => responses[Math.floor(Math.random() * responses.length)];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Greetings. I am K-OS. Systems are online and ready to assist." }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, isTyping, isOpen]);

    const processMessage = (text) => {
        const lowerText = text.toLowerCase();

        // 1. Navigation Commands (High Priority)
        if (/(home|main)/.test(lowerText)) {
            navigate('/');
            return { text: "Navigating to Main Terminal." };
        }
        if (/(project|work|portfolio|showcase)/.test(lowerText)) {
            navigate('/projects');
            return { text: "Accessing Project Database. Displaying archived works." };
        }
        if (/(about|bio|story|background)/.test(lowerText) && !lowerText.includes('you')) {
            navigate('/about');
            return { text: "Loading Identity Matrix. Displaying user profile." };
        }
        if (/(contact|email|reach|message)/.test(lowerText)) {
            navigate('/contact');
            return { text: "Opening Communication Channels. Ready for transmission." };
        }

        // 2. Project Specific Queries
        const mentionedProject = projectsData.find(p =>
            lowerText.includes(p.title.toLowerCase()) ||
            lowerText.includes(p.id.replace('-', ' '))
        );

        if (mentionedProject) {
            return { text: `Accessing ${mentionedProject.title}... ${mentionedProject.desc} -- Should I navigate to its details?` };
        }

        // 3. Knowledge Base Matching
        for (const entry of knowledgeBase) {
            if (entry.patterns.some(pattern => pattern.test(lowerText))) {
                return getRandomResponse(entry.responses);
            }
        }

        // 4. Fallback
        return { text: "Command not recognized. Try 'Help' for a list of protocols, or ask about specific projects." };
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        triggerHaptic(hapticPatterns.light);
        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate "thinking" delay based on response complexity (randomized slightly)
        const delay = 600 + Math.random() * 800;

        setTimeout(() => {
            const reply = processMessage(userMsg.text);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: reply.text,
                link: reply.link,
                linkText: reply.linkText,
                download: reply.download
            }]);
            setIsTyping(false);
        }, delay);
    };

    return (
        <div className="chatbot-wrapper">
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        className="chatbot-window glass-card"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    >
                        <div className="chat-header">
                            <div className="bot-avatar">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h4>K-OS Protocol</h4>
                                <span className="status-indicator">Online</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="close-chat">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="chat-body" ref={scrollRef}>
                            {messages.map(msg => (
                                <div key={msg.id} className={`chat-bubble ${msg.type}`}>
                                    {msg.text}
                                    {msg.link && (
                                        <a
                                            href={msg.link}
                                            className="chat-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download={msg.download ? "Ayobami Olayanju Resume.pdf" : undefined}
                                        >
                                            {msg.linkText} <ExternalLink size={12} />
                                        </a>
                                    )}
                                </div>
                            ))}
                            {isTyping && <div className="typing-indicator"><span>.</span><span>.</span><span>.</span></div>}
                        </div>

                        <div className="chat-footer">
                            <input
                                type="text"
                                placeholder="Execute command..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button onClick={handleSend}><Send size={18} /></button>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>

            <Motion.button
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X /> : <MessageSquare />}
            </Motion.button>
        </div>
    );
};

export default Chatbot;
