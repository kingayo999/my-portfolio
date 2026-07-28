import { motion as Motion, useReducedMotion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const prefersReducedMotion = useReducedMotion();
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    const skipEffects = prefersReducedMotion || isMobile;

    if (skipEffects) {
        return <div>{children}</div>;
    }

    return (
        <Motion.div
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Motion.div
                className="shutter-layer"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'var(--accent)',
                    zIndex: 9999,
                    transformOrigin: 'bottom',
                    pointerEvents: 'none'
                }}
            />

            <Motion.div
                className="shutter-layer"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'var(--accent)',
                    zIndex: 9999,
                    transformOrigin: 'top',
                    pointerEvents: 'none'
                }}
            />

            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </Motion.div>
        </Motion.div>
    );
};

export default PageTransition;
