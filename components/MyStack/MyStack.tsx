import React from 'react';
import TechStackBox from './TechStackBox';

const MyStack = () => {
    return (
        <section className="flex items-center justify-center h-screen w-full">
            <div className="flex flex-col w-full max-w-6xl mx-auto p-8">
                {/* Heading Section */}
                <div className="text-left mb-8">
                    <h2 className="text-4xl font-bold">My Tech Stack</h2>
                </div>
                {/* Tech Stack Boxes */}
                <div className="text-left">
                    <TechStackBox 
                        type="Front End" 
                        technologies={["JavaScript", "TypeScript", "React", "React Native", "Python", "Next.js", "Tailwind", "CSS", "HTML"]} 
                    />
                    <TechStackBox 
                        type="Back End" 
                        technologies={["Node.js", "Express", "GraphQL"]} 
                    />
                    <TechStackBox 
                        type="Database" 
                        technologies={["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Contentful CMS"]} 
                    />
                    <TechStackBox 
                        type="Tools" 
                        technologies={["Git", "AWS", "Tableau"]} 
                    />
                </div>
            </div>
        </section>
    );
};

export default MyStack;