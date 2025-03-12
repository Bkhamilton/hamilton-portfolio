import React from 'react';

interface TechStackBoxProps {
    type: string;
    technologies: string[];
}

const TechStackBox: React.FC<TechStackBoxProps> = ({ type, technologies }) => {
    return (
        <div className="flex mb-8">
            <div className="w-1/3 text-left">
                <h3 className="text-2xl font-semibold mb-2">{type}</h3>
            </div>
            <div className="w-2/3 text-left">
                <ul className="space-y-2">
                    {technologies.map((tech, index) => (
                        <li key={index} className="text-xl">{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechStackBox;