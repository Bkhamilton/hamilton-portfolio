"use client"
import React, { useState } from "react";

interface ProjectBoxProps {
    projectName: string;
    date: string;
    projectDescription: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ projectName, date, projectDescription }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative mb-8">
            <h3
                className="text-2xl font-bold text-left cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {projectName}
            </h3>
            {isHovered && (
                <div className="absolute left-0 mt-2 p-4 bg-white border border-gray-300 shadow-lg z-10 w-64">
                    <img src="/placeholder-image.png" alt="Project" className="w-full h-32 object-cover mb-2" />
                    <p className="text-sm">{projectDescription}</p>
                </div>
            )}
        </div>
    );
};

export default ProjectBox;