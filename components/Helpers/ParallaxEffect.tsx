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
}

const planets = [
    {
        name: "mars",
        top: 2,
        left: 10,
        opacity: 0.4,
        size: "50px",
        animation: "movePlanets 40s linear infinite",
    },
    {
        name: "uranus",
        top: 190,
        left: 30,
        opacity: 0.5,
        size: "50px",
        animation: "movePlanets 32s linear infinite",
    },
    {
        name: "neptune",
        top: 52,
        left: 40,
        opacity: 0.8,
        size: "65px",
        animation: "",
    },
    {
        name: "pluto",
        top: 30,
        left: 96,
        opacity: 0.7,
        size: "35px",
        animation: "movePlanets 50s linear infinite",
    },
    {
        name: "astronaut",
        top: 100,
        left: 70,
        opacity: 0.9,
        size: "75px",
        animation: "movePlanets 70s linear infinite",
    },
    {
        name: "moon",
        top: 240,
        left: 10,
        opacity: 0.4,
        size: "65px",
        animation: "",
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
            case "mars":
                return `${currentPlanet.top - scrollY * 0.04}%`
            case "uranus":
                return `${currentPlanet.top - scrollY * 0.06}%`
            case "neptune":
                return `${currentPlanet.top - scrollY * 0.001}%`
            case "pluto":
                return `${currentPlanet.top - scrollY * 0.01}%`; // Parallax effect for other planets
            case "moon":
                return `${currentPlanet.top - scrollY * 0.04}%`; // Parallax effect for jupiter
            default:
                return `${currentPlanet.top}%`; // Default case (no parallax effect)
        }
    }

    return (
        <>
            {/* Planets Layer */}
            <div className="parallax-layer planets">
                {selectedPlanets.map((planet, index) => (
                    <img
                        key={index}
                        src={`/${planet.name}.jpg`}
                        alt={planet.name}
                        className="planet"
                        style={{
                            position: "absolute",
                            top: getTopValue(planet.name), // Parallax effect
                            left: `${planet.left}%`,
                            width: planet.size, // Adjust size as needed
                            height: "auto",
                            opacity: planet.opacity, // Random value between 0.4 and 0.8
                            animation: planet.animation, // Animation for planets
                            willChange: "transform, opacity", // Optimize for performance
                        }}
                    />
                ))}
            </div>

            {/* Shooting Stars Layer */}
            <div className="parallax-layer shooting-stars"></div>
        </>
    );
}