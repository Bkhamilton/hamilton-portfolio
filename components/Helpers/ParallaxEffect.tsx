"use client"; // Mark this as a Client Component

import { useEffect, useState } from "react";

const planets = [
    "mars",
    "jupiter",
    "uranus",
    "neptune",
    "moon",
    "pluto",
    "astronaut"
];

export default function ParallaxEffects() {
    const [selectedPlanets, setSelectedPlanets] = useState<string[]>([]);

    useEffect(() => {
        // Randomly select planets without repetition
        const shuffledPlanets = [...planets].sort(() => Math.random() - 0.5);
        setSelectedPlanets(shuffledPlanets.slice(0, 3)); // Display 3 planets at a time

        const handleScroll = () => {
            const shootingStars = document.querySelector(".shooting-stars");

            if (shootingStars) {
                // Add shooting stars randomly
                if (Math.random() > 0.98) {
                    const star = document.createElement("div");
                    star.classList.add("shooting-star");
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.left = `${Math.random() * 100}%`;
                    shootingStars.appendChild(star);

                    // Remove shooting star after animation ends
                    setTimeout(() => {
                        star.remove();
                    }, 5000);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function getRandomNumber() {
        const random = Math.random();
        if (random < 0.1) return 0.3; // 10% chance for 0.3
        if (random > 0.9) return 0.9; // 10% chance for 0.9

        // Normal distribution for numbers between 0.3 and 0.9
        const mean = 0.6;
        const stdDev = 0.1;
        let num;
        do {
            num = mean + stdDev * (Math.random() * 2 - 1); // Generate a number within the range
        } while (num < 0.3 || num > 0.9); // Ensure it's within bounds
        return num;
    }

    return (
        <>
            {/* Planets Layer */}
            <div className="parallax-layer planets">
                {selectedPlanets.map((planet, index) => (
                    <img
                        key={planet}
                        src={`/${planet}.jpg`}
                        alt={planet}
                        className="planet"
                        style={{
                            position: "absolute",
                            top: `${20 + index * 20}%`, // Adjust positioning as needed
                            left: `${Math.random() * 80}%`, // Random horizontal position
                            width: "100px", // Adjust size as needed
                            height: "auto",
                            opacity: getRandomNumber(), // Random value between 0.4 and 0.8
                            animation: `movePlanets ${30 + index * 10}s linear infinite`,
                        }}
                    />
                ))}
            </div>

            {/* Shooting Stars Layer */}
            <div className="parallax-layer shooting-stars"></div>
        </>
    );
}