"use client";

import { useEffect, useRef } from "react";

export default function StarsBackground() {
    const starsContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const createStars = () => {
            if (!starsContainerRef.current) return;

            // Number of stars to create
            const pageHeight = document.documentElement.scrollHeight;
            const baseStarDensity = 0.1;
            const starCount = Math.floor(pageHeight * baseStarDensity);

            // Create stars only once
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement("div");
                star.classList.add("star");

                // Randomly assign size
                const randomSize = Math.random();
                if (randomSize < 0.25) {
                    star.classList.add("small");
                } else if (randomSize < 0.7) {
                    star.classList.add("medium");
                } else if (randomSize > 0.98) {
                    star.classList.add("xlarge");
                } else {
                    star.classList.add("large");
                }

                // Randomly position stars
                star.style.top = `${Math.random() * 100}%`;
                star.style.left = `${Math.random() * 100}%`;

                // Randomize animation delay and duration
                star.style.animationDelay = `${Math.random() * 5}s`;
                star.style.animationDuration = `${2 + Math.random() * 3}s`;

                starsContainerRef.current.appendChild(star);
            }
        };

        createStars();
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <div className="stars" ref={starsContainerRef}></div>
        </div>
    );
}