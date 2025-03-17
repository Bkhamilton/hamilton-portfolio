"use client"; // Mark this as a Client Component

import { useEffect } from "react";

export default function StarsBackground() {
    useEffect(() => {
        const createStars = () => {
            const starsContainer = document.querySelector(".stars");
            if (!starsContainer) return;

            // Clear existing stars
            starsContainer.innerHTML = "";

            // Number of stars to create (reduce this number for fewer stars)
            const starCount = 75; // Adjust this number to control star density

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement("div");
                star.classList.add("star");

                // Randomly assign size
                const randomSize = Math.random();
                if (randomSize < 0.25) {
                    star.classList.add("small");
                } else if (randomSize < 0.66) {
                    star.classList.add("medium");
                } else {
                    star.classList.add("large");
                }

                // Randomly position stars
                const randomTop = Math.random() * 100;
                const randomLeft = Math.random() * 100;
                star.style.top = `${randomTop}%`;
                star.style.left = `${randomLeft}%`;

                // Randomize animation delay and duration
                const randomDelay = Math.random() * 5; // Delay between 0 and 5 seconds
                const randomDuration = 2 + Math.random() * 3; // Duration between 2 and 5 seconds
                star.style.animationDelay = `${randomDelay}s`;
                star.style.animationDuration = `${randomDuration}s`;

                // Add a unique movement pattern for medium stars
                if (star.classList.contains("medium")) {
                    const randomX = (Math.random() - 0.5) * 20; // Random X movement (-10px to 10px)
                    const randomY = (Math.random() - 0.5) * 20; // Random Y movement (-10px to 10px)
                    star.style.transform = `translate(${randomX}px, ${randomY}px)`;
                }

                starsContainer.appendChild(star);
            }
        };

        createStars();
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <div className="stars"></div>
        </div>
    );
}