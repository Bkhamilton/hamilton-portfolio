"use client"; // Mark this as a Client Component

import { useEffect, useState } from "react";
import Image from "next/image";

type Planet = {
    name: string;
    top: number;
    left: number;
    opacity: number;
    size: string;
    animation: string;
    fileName: string;
}

const planets = [
    {
        name: "uranus",
        top: 66,
        left: 10,
        opacity: 0.5,
        size: "35px",
        animation: "movePlanets 32s linear infinite",
        fileName: "/uranus.jpg",
    },
    {
        name: 'asteroid',
        top: 190,
        left: 30,
        opacity: 0.8,
        size: "50px",
        animation: "movePlanets 32s linear infinite",
        fileName: "/asteroid.png",
    },
    {
        name: "neptune",
        top: 52,
        left: 37,
        opacity: 0.8,
        size: "65px",
        animation: "",
        fileName: "/neptune.jpg",
    },
    {
        name: "mars",
        top: 30,
        left: 96,
        opacity: 0.7,
        size: "35px",
        animation: "movePlanets 50s linear infinite",
        fileName: "/mars.jpg",
    },
    {
        name: "astronaut",
        top: 100,
        left: 70,
        opacity: 0.9,
        size: "75px",
        animation: "movePlanets 70s linear infinite",
        fileName: "/astronaut.jpg",
    },
    {
        name: "moon",
        top: 310,
        left: 10,
        opacity: 0.4,
        size: "65px",
        animation: "",
        fileName: "/moon.jpg",
    },
    {
        name: 'space_station',
        top: 150,
        left: -50,
        opacity: 0.8,
        size: '55px',
        animation: '',
        fileName: '/space_station.png',
    }
];

export default function ParallaxEffects() {
    const [selectedPlanets,] = useState<Planet[]>(planets);
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function getTopValue(planet: string) {
        const currentPlanet = planets.find(p => p.name === planet);
        if (!currentPlanet) return "0%"; // Fallback if planet not found
        switch (planet) {
            case "astronaut":
                return `${currentPlanet.top - scrollY * 0.0027}%`; // Moves up instead of down
            case "uranus":
                return `${currentPlanet.top - scrollY * 0.006}%`
            case "neptune":
                return `${currentPlanet.top - scrollY * 0.0014}%`
            case "mars":
                return `${currentPlanet.top - scrollY * 0.01}%`; // Parallax effect for other planets
            case "moon":
                return `${currentPlanet.top - scrollY * 0.06}%`; // Parallax effect for jupiter
            case "asteroid":
                return `${currentPlanet.top - scrollY * 0.06}%`;
            case "space_station":
                return `${currentPlanet.top - scrollY * 0.03}%`; // Parallax effect for space station
            default:
                return `${currentPlanet.top}%`; // Default case (no parallax effect)
        }
    }

    function getLeftValue(planet: Planet) {
        if (planet.name === 'space_station') {
            return planet.left + (scrollY * 0.04) + "%"; // Moves right instead of left
        } else {
            return planet.left + '%';
        }
    }

    function getSize(planet: Planet): string {
        if (planet.name === "space_station") {
            // Define the size range
            const maxSize = 55; // Maximum size in pixels
            const minSize = 35; // Minimum size in pixels
            const shrinkStartScroll = 2700; // Threshold: Start shrinking after 200px of scroll
    
            // If scrollY is less than the threshold, return the max size
            if (scrollY < shrinkStartScroll) {
                return `${maxSize}px`;
            }
    
            // Calculate the size based on scrollY, subtracting the threshold
            const size = maxSize - ((scrollY - shrinkStartScroll) * 0.03); // Adjust the shrinking rate (0.03 is the rate of shrinkage)
    
            // Clamp the size between minSize and maxSize
            return `${Math.max(minSize, Math.min(size, maxSize))}px`;
        }
    
        // Default size for other planets
        return planet.size;
    }

    return (
        <>
            {/* Planets Layer */}
            <div className="parallax-layer planets">
                {selectedPlanets.map((planet, index) => (
                    <div
                        key={index}
                        className="planet-wrapper"
                        style={{
                            position: "absolute",
                            top: getTopValue(planet.name), // Parallax effect
                            left: getLeftValue(planet), // Fixed position for left
                            width: getSize(planet), // Adjust size as needed
                            height: "auto",
                            opacity: planet.opacity, // Random value between 0.4 and 0.8
                            willChange: planet.animation ? "transform, opacity" : undefined, // Optimize for performance
                        }}
                    >
                        <Image
                            src={planet.fileName}
                            alt={planet.name}
                            width={parseInt(planet.size)} // Convert size to number for width
                            height={parseInt(planet.size)} // Convert size to number for height
                            className="planet"
                            style={{
                                objectFit: "contain", // Ensure the image fits properly
                                animation: planet.animation, // Animation for planets
                            }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* Shooting Stars Layer */}
            <div className="parallax-layer shooting-stars"></div>
        </>
    );
}