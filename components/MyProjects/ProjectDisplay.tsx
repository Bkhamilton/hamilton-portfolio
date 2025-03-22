import React from 'react';
import projectData from '@/data/projectsData.json'; // Import your JSON data

const ProjectDisplay = ({ projectName }: { projectName: string }) => {
    const project = projectData.projects.find(proj => proj.title === projectName);

    if (!project) {
        return <p className="text-center text-red-500 font-semibold">Project not found.</p>;
    }

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/10 shadow-lg p-8 text-white">
            {/* Project Title */}
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg mb-6">{project.overview}</p>

            {/* Key Features Section */}
            <h2 className="text-2xl font-semibold mb-4 text-green-300">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-base">
                        <strong className="text-green-400">{feature.title}:</strong> {feature.description}
                    </li>
                ))}
            </ul>

            {/* Technical Implementation Section */}
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Technical Implementation</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                {project.technicalImplementation.map((tech, index) => (
                    <li key={index} className="text-base">
                        <strong className="text-blue-400">{tech.title}:</strong> {tech.description}
                    </li>
                ))}
            </ul>

            {/* Why BetSmarter Section */}
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Why BetSmarter?</h2>
            <p className="text-base">{project.why}</p>
        </div>
    );
};

export default ProjectDisplay;