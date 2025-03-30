"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectBoxProps {
    projectName: string;
    date: string;
    projectDescription: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ projectName, date, projectDescription }) => {
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
                    <Image
                        src="/placeholder-image.jpg"
                        alt="Project"
                        width={256}
                        height={128}
                        className="w-full h-32 object-cover mb-2"
                    />
                    <p className="text-sm text-black">{projectDescription}</p>
                    <p className="text-xs text-gray-500 mt-2">{date}</p>
                </div>
            )}
        </div>
    );
};

export default ProjectBox;