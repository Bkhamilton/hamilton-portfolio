"use client"; // Mark this as a Client Component

import { useEffect, useState, useRef } from "react";
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
    const scrollY = useRef<number>(0);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const updateParallax = () => {
            scrollY.current = window.scrollY;
            
            // Update positions for each planet
            selectedPlanets.forEach((planet, index) => {
                const element = document.getElementById(`planet-${index}`);
                if (element) {
                    const topOffset = getTopOffset(planet.name, scrollY.current);
                    const leftOffset = getLeftOffset(planet.name, scrollY.current);
                    const size = getSize(planet);
                    
                    element.style.transform = `translate(${leftOffset}px, ${topOffset}px)`;
                    if (planet.name === "space_station") {
                        const img = element.querySelector('img');
                        if (img) {
                            img.style.width = size;
                            img.style.height = size;
                        }
                    }
                }
            });
            
            rafId.current = requestAnimationFrame(updateParallax);
        };

        rafId.current = requestAnimationFrame(updateParallax);
        
        return () => {
            if (rafId.current !== null) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [selectedPlanets]);

    function getTopOffset(planet: string, currentScrollY: number): number {
        const currentPlanet = planets.find(p => p.name === planet);
        if (!currentPlanet) return 0;
        
        let parallaxFactor = 0;
        switch (planet) {
            case "astronaut":
                parallaxFactor = 0.0027;
                break;
            case "uranus":
                parallaxFactor = 0.006;
                break;
            case "neptune":
                parallaxFactor = 0.0014;
                break;
            case "mars":
                parallaxFactor = 0.01;
                break;
            case "moon":
                parallaxFactor = 0.06;
                break;
            case "asteroid":
                parallaxFactor = 0.06;
                break;
            case "space_station":
                parallaxFactor = 0.03;
                break;
            default:
                parallaxFactor = 0;
        }
        
        return -currentScrollY * parallaxFactor;
    }

    function getLeftOffset(planet: string, currentScrollY: number): number {
        if (planet === 'space_station') {
            return currentScrollY * 0.04;
        }
        return 0;
    }

    function getTopValue(planet: string) {
        const currentPlanet = planets.find(p => p.name === planet);
        if (!currentPlanet) return "0%";
        return `${currentPlanet.top}%`;
    }

    function getLeftValue(planet: Planet) {
        return planet.left + '%';
    }

    function getSize(planet: Planet): string {
        if (planet.name === "space_station") {
            const maxSize = 55;
            const minSize = 35;
            const shrinkStartScroll = 2700;
    
            if (scrollY.current < shrinkStartScroll) {
                return `${maxSize}px`;
            }
    
            const size = maxSize - ((scrollY.current - shrinkStartScroll) * 0.03);
            return `${Math.max(minSize, Math.min(size, maxSize))}px`;
        }
    
        return planet.size;
    }

    return (
        <>
            {/* Planets Layer */}
            <div className="parallax-layer planets">
                {selectedPlanets.map((planet, index) => (
                    <div
                        key={index}
                        id={`planet-${index}`}
                        className="planet-wrapper"
                        style={{
                            position: "absolute",
                            top: getTopValue(planet.name),
                            left: getLeftValue(planet),
                            width: getSize(planet),
                            height: "auto",
                            opacity: planet.opacity,
                            willChange: "transform",
                            transition: "none",
                        }}
                    >
                        <Image
                            src={planet.fileName}
                            alt={planet.name}
                            width={parseInt(planet.size)}
                            height={parseInt(planet.size)}
                            className="planet"
                            style={{
                                objectFit: "contain",
                                animation: planet.animation,
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