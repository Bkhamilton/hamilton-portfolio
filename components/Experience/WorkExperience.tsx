import React from 'react';

interface WorkExperienceProps {
    companyName: string;
    jobTitle: string;
    startTime: string;
    endTime: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ companyName, jobTitle, startTime, endTime }) => {
    return (
        <div className="mb-8">
            <p className="text-lg text-left">{companyName}</p>
            <h3 className="text-2xl font-bold text-left">{jobTitle}</h3>
            <p className="text-sm opacity-75 text-left">{startTime} - {endTime}</p>
        </div>
    );
};

export default WorkExperience;