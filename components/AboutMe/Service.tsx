import React from 'react';

interface ServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode; // Icon can be a React component or an element
}

const Service: React.FC<ServiceProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-200">{description}</p>
        </div>
    );
};

export default Service;