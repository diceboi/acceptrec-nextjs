"use client"

import GoogleReviewNumber from './googlereviewnumber';
import { useEffect, useState } from 'react';

export default function FixedReviewBar() {
    const [topPosition, setTopPosition] = useState(64); // Default menu height

    useEffect(() => {
        const updatePosition = () => {
            const nav = document.querySelector('nav');
            if (nav) {
                // Use requestAnimationFrame for smoother sync
                requestAnimationFrame(() => {
                    const navHeight = nav.offsetHeight;
                    setTopPosition(navHeight);
                });
            }
        };

        // Initial update
        updatePosition();

        // Update on resize and scroll with throttling
        let ticking = false;
        const handleUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updatePosition();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('resize', handleUpdate);
        window.addEventListener('scroll', handleUpdate);

        // Observer for menu height changes
        const nav = document.querySelector('nav');
        if (nav) {
            const observer = new ResizeObserver(handleUpdate);
            observer.observe(nav);

            return () => {
                observer.disconnect();
                window.removeEventListener('resize', handleUpdate);
                window.removeEventListener('scroll', handleUpdate);
            };
        }
    }, []);

    return (
        <div
            className="fixed left-0 right-0 z-40"
            style={{
                top: `${topPosition}px`,
                transition: 'top 0.0s ease-in-out'
            }}
        >
            <GoogleReviewNumber />
        </div>
    );
}
