export const triggerHaptic = (pattern = 10) => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        try {
            navigator.vibrate(pattern);
        } catch (e) {
            console.warn('Haptic feedback not supported or blocked');
        }
    }
};

export const hapticPatterns = {
    light: 10,
    medium: 30,
    heavy: 60,
    success: [20, 50, 20],
    error: [50, 100, 50, 100, 50],
    notification: [30, 100, 30]
};
