'use client';
import React, { useState } from 'react';
import './Resume.css'; // Create a CSS file for the styles

const Resume = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            className="resume-section"
        >
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Resume</h2>
                <p className="text-lg mb-8">
                    Here you can find my professional experience, education, and skills.
                </p>
                <a
                    href="/hamilton-resume.pdf"
                    className="holographic-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Download Resume
                </a>
            </div>

            {/* Shooting Stars */}
            {isHovered && (
                <div className="shooting-stars">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className={`shoot-star star-${index + 1}`}></span>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Resume;