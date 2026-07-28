import React, { useRef, useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import slide1 from '../assets/slides/slide1.png';
import slide2 from '../assets/slides/slide2.png';
import slide3 from '../assets/slides/slide3.png';
import slide4 from '../assets/slides/slide4.png';
import slide5 from '../assets/slides/slide5.png';
import './ProjectCapabilities.css';

gsap.registerPlugin(ScrollTrigger);

const slides = [slide1, slide2, slide3, slide4, slide5];

const capabilities = [
    'Consultancy websites',
    'Personal & brand portfolios',
    'Cleaning service websites',
    'School & institutional websites',
    'University & higher-ed platforms',
    'Healthcare & diagnostic sites',
    'Fintech & dashboard interfaces',
    'E-commerce & product showcases',
    'Real estate & property management tools',
    'SaaS product landing pages',
    'Secure vault & auth platforms',
    'Full-stack web applications'
];

const ProjectCapabilities = () => {
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const title = section.querySelector('.caps-title');
            const subtitle = section.querySelector('.caps-subtitle');
            const grid = section.querySelector('.caps-grid');
            const cta = section.querySelector('.caps-cta');

            if (title) {
                gsap.to(title, {
                    scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
                    opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
                });
            }
            if (subtitle) {
                gsap.to(subtitle, {
                    scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
                    opacity: 1, duration: 0.8, delay: 0.15, ease: 'power2.out'
                });
            }
            if (grid) {
                const items = grid.querySelectorAll('.caps-item');
                gsap.to(items, {
                    scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none none' },
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: 'power2.out'
                });
            }
            if (cta) {
                gsap.to(cta, {
                    scrollTrigger: { trigger: cta, start: 'top 90%', toggleActions: 'play none none none' },
                    opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
                });
            }
        }, section);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section className="project-capabilities" ref={sectionRef}>
            <div className="caps-slideshow">
                {slides.map((src, i) => (
                    <div
                        key={i}
                        className={`caps-slide ${i === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
                <div className="caps-slideshow-overlay" />
            </div>

            <div className="caps-content">
                <h2 className="caps-title gradient-text">
                    Whatever You Need Built,<br />We Have Got You Covered
                </h2>
                <p className="caps-subtitle">
                    From personal brands to enterprise platforms, every project is built with the same engineering standard.
                </p>

                <div className="caps-grid">
                    {capabilities.map((item, i) => (
                        <div key={i} className="caps-item glass-card">
                            <span className="caps-check">&#10003;</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                <div className="caps-cta">
                    <p className="caps-tagline">
                        Ready to start your project? Let us build something reliable together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectCapabilities;
