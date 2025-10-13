"use client";
import React, { useState } from "react";
import Link from "next/link";

interface ProjectBoxProps {
    projectName: string;
    date: string;
    projectDescription: string;
    projectLink: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ projectName, date, projectDescription, projectLink }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative mb-8">
            <Link href={`/my-projects/${projectName.replace(/\s+/g, '-')}`}>
                <h3
                    className="text-2xl font-bold text-left cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {projectName}
                </h3>
            </Link>
            {isHovered && (
                <div className="hidden md:block absolute left-0 mt-2 p-4 bg-white border border-gray-300 shadow-lg z-10 w-64">
                    <p className="text-sm text-black">{projectDescription}</p>
                    <p className="text-xs text-gray-500 mt-2">{date}</p>
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Visit Project
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectBox;