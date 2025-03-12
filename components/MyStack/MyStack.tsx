import React from 'react';
import TechStackBox from './TechStackBox';

const MyStack = () => {
    return (
        <section className="flex items-center bg-gradient-to-b from-gray-600 to-gray-500 justify-center h-screen bg-gray-100 w-full">
            <div className="flex w-full max-w-6xl mx-auto p-8">
                <div className="w-1/3 text-left">
                    <h2 className="text-4xl font-bold mb-4">My Tech Stack</h2>
                </div>
                <div className="w-2/3 text-left">
                    <TechStackBox 
                        type="Front End" 
                        technologies={["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]} 
                    />
                    <TechStackBox 
                        type="Back End" 
                        technologies={["Node.js", "Express"]} 
                    />
                    <TechStackBox 
                        type="Database" 
                        technologies={["MongoDB", "PostgreSQL"]} 
                    />
                    <TechStackBox 
                        type="Tools" 
                        technologies={["Git", "Docker", "Webpack"]} 
                    />
                </div>
            </div>
        </section>
    );
};

export default MyStack;