'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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

    return (
        <div className="min-h-screen flex items-center justify-center px-8 bg-space-background bg-cover bg-center project-page">
            {/* Glassmorphism Container */}
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg border border-white/10 shadow-lg p-8 overflow-y-auto z-10">
                <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover mb-4 rounded-lg"
                />
                <p className="text-lg text-green-300 mb-2">{project.description}</p>
                <p className="text-sm text-blue-300 mb-4">{project.date}</p>
                <p className="text-base text-white mb-6">{project.longDescription}</p>
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
            {isHovered && (
                <div className="z-0">
                    <ShootingStars count={5} />
                </div>
            )}
        </div>
    );
};

export default ProjectPage;