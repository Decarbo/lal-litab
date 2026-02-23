'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './hero/hero';
import IntroAnimation from '@/components/IntroAnimation';

export default function Home() {
    const [showIntro, setShowIntro] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check if the intro has already been played in this session
        const hasPlayed = sessionStorage.getItem('introPlayed');
        
        if (!hasPlayed) {
            setShowIntro(true);
        }
    }, []);

    const handleIntroComplete = () => {
        sessionStorage.setItem('introPlayed', 'true');
        setShowIntro(false);
    };

    // Prevent hydration mismatch by not rendering the intro until mounted
    if (!isMounted) return <main><Hero /></main>;

	return (
		<main>
            <AnimatePresence>
                {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
            </AnimatePresence>
			<Hero />
		</main>
	);
}
