import React from 'react';
import { SiJavascript, SiTypescript, SiReact, SiPython } from "react-icons/si";
import { SiNextdotjs, SiTailwindcss, SiCss3, SiExpress, SiGraphql } from "react-icons/si";
import { SiPostgresql, SiFirebase, SiContentful, SiTableau } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoIosGitBranch } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { FaNode } from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";

interface TechStackBoxProps {
    type: string;
    technologies: string[];
}

const logoMapping: { [key: string]: React.ReactNode } = {
    "JavaScript": <SiJavascript className="text-yellow-500" />,
    "TypeScript": <SiTypescript className="text-blue-500" />,
    "React": <SiReact className="text-blue-600" />,
    "React Native": <TbBrandReactNative className="text-blue-600" />,
    "Python": <SiPython className="text-yellow-500" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    "Tailwind": <SiTailwindcss className="text-blue-400" />,
    "CSS": <SiCss3 className="text-blue-500" />,
    "HTML": <TiHtml5 className="text-orange-500" />,
    "Node.js": <FaNode className="text-green-500" />,
    "Express": <SiExpress className="text-gray-800" />,
    "GraphQL": <SiGraphql className="text-purple-600" />,
    "MongoDB": <DiMongodb className="text-green-600" />,
    "PostgreSQL": <SiPostgresql className="text-blue-700" />,
    "MySQL": <DiMysql className="text-blue-600" />,
    "Firebase": <SiFirebase className="text-yellow-500" />,
    "Contentful CMS": <SiContentful className="text-blue-600" />,
    "Git": <IoIosGitBranch className="text-orange-500" />,
    "AWS": <FaAws className="text-orange-500" />,
    "Tableau": <SiTableau className="text-blue-500" />,
};

const TechStackBox: React.FC<TechStackBoxProps> = ({ type, technologies }) => {
    // Helper function to split the technologies array into chunks of 6
    const chunkArray = (array: string[], chunkSize: number) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const technologyChunks = chunkArray(technologies, 5);

    return (
        <div className="flex flex-col md:flex-row mb-8">
            <div className="text-left md:w-1/5">
                <h3 className="text-2xl font-semibold mb-2">{type}</h3>
            </div>
            <div className="w-full text-left flex bg-white/20 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg p-4">
                {technologyChunks.map((chunk, columnIndex) => (
                    <ul key={columnIndex} className="space-y-2 w-1/2">
                        {chunk.map((tech, index) => (
                            <li
                                key={index}
                                className="text-xl flex items-center space-x-2"
                            >
                                {/* Render the logo if it exists in logoMapping */}
                                {logoMapping[tech] && (
                                    <span className="flex items-center justify-center">
                                        {logoMapping[tech] as React.ReactNode}
                                    </span>
                                )}
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default TechStackBox;