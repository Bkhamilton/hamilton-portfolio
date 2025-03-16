import React from 'react';

interface TechStackBoxProps {
    type: string;
    technologies: string[];
}

const TechStackBox: React.FC<TechStackBoxProps> = ({ type, technologies }) => {
    // Helper function to split the technologies array into chunks of 6
    const chunkArray = (array: string[], chunkSize: number) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const technologyChunks = chunkArray(technologies, 6);

    return (
        <div className="flex mb-8">
            <div className="w-1/3 text-left">
                <h3 className="text-2xl font-semibold mb-2">{type}</h3>
            </div>
            <div className="w-2/3 text-left flex">
                {technologyChunks.map((chunk, columnIndex) => (
                    <ul key={columnIndex} className="space-y-2 w-1/2">
                        {chunk.map((tech, index) => (
                            <li key={index} className="text-xl">{tech}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default TechStackBox;