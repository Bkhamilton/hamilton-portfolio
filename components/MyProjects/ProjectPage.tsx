'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './ProjectPage.css'; // Ensure you have the CSS for styles
import ShootingStars from '../Helpers/ShootingStars';

interface Project {
    title: string;
    date: string;
    description: string;
    longDescription: string;
    link: string;
    image: string;
}

interface ProjectPageProps {
    project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (
        <div className="flex items-center justify-center px-8 bg-space-background bg-cover bg-center project-page">
            {/* Back Button */}
            <button
                onClick={() => router.push('/')} // Navigate to the home page
                className="absolute top-8 left-16 text-white text-4xl hover:text-gray-400 transition"
                aria-label="Go back to home"
            >
                &#x276E; {/* Left caret symbol */}
            </button>

            {/* Glassmorphism Container */}
            <div className="min-h-screen w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg border border-white/10 shadow-lg p-8 overflow-y-auto z-10">
                {/* Top Section: Title and Logo */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                    <Image
                        src={project.image} // Placeholder for the logo
                        alt={`${project.title} logo`}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-lg"
                    />
                </div>

                {/* Center Section: Description and Date */}
                <div className="text-center mb-6">
                    <p className="text-lg text-green-300 mb-2">{project.description}</p>
                    <p className="text-sm text-blue-300 opacity-70">{project.date}</p>
                </div>

                {/* Long Description Section */}
                <div className="text-white text-base mb-6">
                    <p>{project.longDescription}</p>
                </div>

                {/* Visit Project Button */}
                <div className="flex justify-center">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="holographic-button inline-block px-6 py-2 text-lg font-semibold text-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Visit Project
                    </a>
                </div>
            </div>

            {/* Shooting Stars Effect */}
            {isHovered && (
                <div className="z-0">
                    <ShootingStars count={5} />
                </div>
            )}
        </div>
    );
};

export default ProjectPage;